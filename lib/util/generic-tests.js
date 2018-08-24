import _last from 'lodash/last';
import _each from 'lodash/each';
import _reject from 'lodash/reject';
import _castArray from 'lodash/castArray';
import _flatMap from 'lodash/flatMap';
import _compact from 'lodash/compact';
import _map from 'lodash/map';
import _flow from 'lodash/flow';
import _isFunction from 'lodash/isFunction';
import _startsWith from 'lodash/startsWith';
import _pickBy from 'lodash/pickBy';
import _forEach from 'lodash/forEach';
import _includes from 'lodash/includes';
import _every from 'lodash/every';
import _assign from 'lodash/assign';
import _identity from 'lodash/identity';
import _constant from 'lodash/constant';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import sinon from 'sinon';
import { basename } from 'path';
import React from 'react';
import PropTypes from 'prop-types';
import { mount, shallow } from 'enzyme';
import assert from 'assert';

import glob from 'glob';
import * as lucid from '../index';

// Common tests for all our components
export function common(Component) {
	var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	    _ref$getDefaultProps = _ref.getDefaultProps,
	    getDefaultProps = _ref$getDefaultProps === undefined ? _constant({}) : _ref$getDefaultProps,
	    _ref$exemptFunctionPr = _ref.exemptFunctionProps,
	    exemptFunctionProps = _ref$exemptFunctionPr === undefined ? [] : _ref$exemptFunctionPr,
	    _ref$exemptChildCompo = _ref.exemptChildComponents,
	    exemptChildComponents = _ref$exemptChildCompo === undefined ? [] : _ref$exemptChildCompo,
	    _ref$selectRoot = _ref.selectRoot,
	    selectRoot = _ref$selectRoot === undefined ? _identity : _ref$selectRoot,
	    _ref$noExport = _ref.noExport,
	    noExport = _ref$noExport === undefined ? false : _ref$noExport;

	function generateDefaultProps() {
		var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		return _assign({}, getDefaultProps(), props);
	}

	describe('[common]', function () {
		if (!Component) {
			throw new Error('An undefined component was passed to generic tests.');
		}

		if (Component._isLucidHybridComponent) {
			throw new Error('You\'re trying to run generic tests on a hybrid component which is bad and won\'t work and will make you cry. Check your spec files for ' + Component.displayName + ' and import the raw component instead of the hybrid version.');
		}

		it('should have a `displayName` defined', function () {
			assert(Component.displayName);
		});

		it('should pass through styles to the root element', function () {
			var style = {
				backgroundColor: '#f0f'
			};
			var wrapper = shallow(React.createElement(Component, _extends({}, generateDefaultProps(), { style: style })), { disableLifecycleMethods: true });

			var rootWrapper = selectRoot(wrapper).first();
			var rootStyle = rootWrapper.prop('style');
			assert(_every(style, function (val, key) {
				return val === rootStyle[key];
			}), 'root style must contain passed styles');
		});

		it('should pass through `className`', function () {
			var expectedClass = 'rAnDoM';
			var wrapper = shallow(React.createElement(Component, _extends({}, generateDefaultProps(), { className: expectedClass })), { disableLifecycleMethods: true });
			var rootWrapper = selectRoot(wrapper).first();
			var classNames = rootWrapper.prop('className').split(' ');

			assert(_includes(classNames, expectedClass), '\'' + classNames + '\' should include \'' + expectedClass + '\'');
		});

		it('should have an application scoped base class', function () {
			var expectedClass = 'lucid-' + Component.displayName;
			var wrapper = shallow(React.createElement(Component, generateDefaultProps()), {
				disableLifecycleMethods: true
			});
			var rootWrapper = selectRoot(wrapper).first();
			var classNames = rootWrapper.prop('className').split(' ');

			assert(_includes(classNames, expectedClass), '\'' + classNames + '\' should include \'' + Component.displayName + '\'');
		});

		it('should have only application scoped classes', function () {
			var wrapper = shallow(React.createElement(Component, generateDefaultProps()), {
				disableLifecycleMethods: true
			});
			var rootWrapper = selectRoot(wrapper).first();
			var parentClasses = rootWrapper.prop('className').split(' ');
			var childrenClasses = rootWrapper.children().reduce(function (acc, node) {
				if (!node.prop('className')) {
					return acc;
				}

				return acc.concat(node.prop('className').split(' '));
			}, []);

			var allClasses = parentClasses.concat(childrenClasses);

			_forEach(allClasses, function (className) {
				assert(_includes(className, 'lucid-' + Component.displayName), className + ' must be scoped');
			});
		});

		describe('function propTypes', function () {
			var funcProps = _pickBy(Component.propTypes, function (propType) {
				return propType === PropTypes.func;
			});

			_forEach(funcProps, function (propType, propName) {
				it(propName + ' should only use onX convention for function proptypes', function () {
					assert(_startsWith(propName, 'on') || _includes(exemptFunctionProps, propName), propName + ' must follow onX convention');
				});
			});
		});

		describe('child components', function () {
			// Child components are all function types which start with a capital letter
			var childComponents = _pickBy(Component, function (value, key) {
				return (/^[A-Z]/.test(key) && _isFunction(value)
				);
			});

			describe('propNames in propTypes', function () {
				_flow(function (x) {
					return _map(x, 'propName');
				}, function (x) {
					return _compact(x);
				}, function (x) {
					return _flatMap(x, _castArray);
				}, function (x) {
					return _reject(x, function (propName) {
						return _includes(exemptChildComponents, propName);
					});
				}, function (x) {
					return _forEach(x, function (propName) {
						it('should include ' + propName + ' in propTypes', function () {
							assert(Component.propTypes[propName], 'must include ' + propName + ' in propTypes');
						});
					});
				})(childComponents);
			});
		});

		describe('example testing', function () {
			var fileNames = glob.sync('./src/components/**/' + Component.displayName + '/examples/*.jsx');
			_each(fileNames, function (path) {
				var Example = require('../../' + path).default;
				var title = basename(path, '.jsx');
				it('should match snapshot(s) for ' + title, function () {
					var shallowExample = shallow(React.createElement(Example, null), {
						disableLifecycleMethods: true
					});

					// If the root of the example is an instance of the Component under test, snapshot it.
					// Otherwise, look under the root for instances of the Component and snapshot those.
					if (shallowExample.is(Component.displayName)) {
						expect(shallow(React.createElement(Component, shallowExample.props()), {
							disableLifecycleMethods: true
						})).toMatchSnapshot();
					} else {
						shallowExample.find(Component.displayName).forEach(function (example) {
							expect(shallow(React.createElement(Component, example.props()), {
								disableLifecycleMethods: true
							})).toMatchSnapshot();
						});
					}
				});
			});
		});

		// Only run this test if it's a public component
		if (!Component._isPrivate && !noExport) {
			it('should be available as an exported module from index.js', function () {
				assert(lucid[Component.displayName]);
			});
		}
	});
}

// Common tests for all our icon components
export function icons(Component) {
	describe('[icon]', function () {
		it('should add the correct class for isClickable', function () {
			var wrapper = mount(React.createElement(Component, { isClickable: true }));
			var targetClassName = 'lucid-Icon-is-clickable';
			assert(wrapper.find('svg').hasClass(targetClassName), 'Missing \'' + targetClassName + '\' class');
		});
	});
}

// Common tests for all control components
export function controls(Component, _ref2) {
	var callbackName = _ref2.callbackName,
	    controlSelector = _ref2.controlSelector,
	    eventType = _ref2.eventType,
	    _ref2$additionalProps = _ref2.additionalProps,
	    additionalProps = _ref2$additionalProps === undefined ? {} : _ref2$additionalProps;

	// Use DOM tests here since some of our controls use dom events under the hood
	describe('[control]', function () {
		/* eslint-disable no-console */
		var error = void 0;

		beforeEach(function () {
			error = console.error;
			console.error = jest.fn();
		});

		afterEach(function () {
			console.error = error;
		});

		it('should callback with `event` and `props`', function () {
			var expectedSpecialProp = 32;
			var props = _extends(_defineProperty({
				specialProp: expectedSpecialProp
			}, callbackName, sinon.spy()), additionalProps);
			var wrapper = mount(React.createElement(Component, props));

			wrapper.find(controlSelector).first().simulate(eventType);

			// Last argument should be an object with `uniqueId` and `event`

			var _last2 = _last(props[callbackName].args[0]),
			    specialProp = _last2.props.specialProp,
			    event = _last2.event;

			assert(event, 'missing event');
			assert.equal(specialProp, expectedSpecialProp, 'incorrect or missing specialProp');

			expect(console.error).toHaveBeenCalledTimes(1);
		});

		/* eslint-enable no-console */
	});
}

var NativeDate = global.Date;
var createMockDateClass = function createMockDateClass() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	return _assign(function MockDate() {
		return new (Function.prototype.bind.apply(NativeDate, [null].concat(args)))();
	}, {
		UTC: NativeDate.UTC,
		parse: NativeDate.parse,
		now: function now() {
			return new (Function.prototype.bind.apply(NativeDate, [null].concat(args)))().getTime();
		},
		prototype: NativeDate.prototype
	});
};

export var mockDate = _assign(function () {
	global.Date = createMockDateClass.apply(undefined, arguments);
}, {
	restore: function restore() {
		global.Date = NativeDate;
	}
});