export function convertSizeToCssValue(value, resizersSize) {
	if (getUnit(value) !== '%') {
		return value;
	}

	if (!resizersSize) {
		return value;
	}

	var idx = value.search('%');
	var percent = value.slice(0, idx) / 100;
	if (percent === 0) {
		return value;
	}

	return 'calc(' + value + ' - ' + resizersSize + 'px*' + percent + ')';
}

export function convertToUnit(size, unit, containerSize) {
	switch (unit) {
		case '%':
			return (size / containerSize * 100).toFixed(2) + '%';
		case 'px':
			return size.toFixed(2) + 'px';
		case 'ratio':
			return (size * 100).toFixed(0);
	}
}

export function getUnit(size) {
	if (size.endsWith('px')) {
		return 'px';
	}

	if (size.endsWith('%')) {
		return '%';
	}

	return 'ratio';
}

export function convert(str, size) {
	var tokens = str.match(/([0-9]+)([px|%]*)/);
	var value = tokens[1];
	var unit = tokens[2];
	return toPx(value, unit, size);
}

export function toPx(value) {
	var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'px';
	var size = arguments[2];

	switch (unit) {
		case '%':
			{
				return +(size * value / 100).toFixed(2);
			}
		default:
			{
				return +value;
			}
	}
}