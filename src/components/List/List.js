'use strict';
var __extends =
	(this && this.__extends) ||
	(function() {
		var extendStatics =
			Object.setPrototypeOf ||
			({ __proto__: [] } instanceof Array &&
				function(d, b) {
					d.__proto__ = b;
				}) ||
			function(d, b) {
				for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
			};
		return function(d, b) {
			extendStatics(d, b);
			function __() {
				this.constructor = d;
			}
			d.prototype =
				b === null
					? Object.create(b)
					: ((__.prototype = b.prototype), new __());
		};
	})();
var __assign =
	(this && this.__assign) ||
	Object.assign ||
	function(t) {
		for (var s, i = 1, n = arguments.length; i < n; i++) {
			s = arguments[i];
			for (var p in s)
				if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
		}
		return t;
	};
var __importStar =
	(this && this.__importStar) ||
	function(mod) {
		if (mod && mod.__esModule) return mod;
		var result = {};
		if (mod != null)
			for (var k in mod)
				if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
		result['default'] = mod;
		return result;
	};
Object.defineProperty(exports, '__esModule', { value: true });
var React = __importStar(require('react'));
require('./List.less');
var List = /** @class */ (function(_super) {
	__extends(List, _super);
	function List(props) {
		return _super.call(this, props) || this;
	}
	List.prototype.render = function() {
		//let { name = 'qinfuji' } = this.props;
		return React.createElement('div', __assign({}, this.props));
	};
	List.displayName = 'List';
	List.propTypes = {};
	List.defaultProps = {};
	return List;
})(React.Component);
exports.default = List;
//# sourceMappingURL=List.js.map
