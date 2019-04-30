var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _grayPercentage = require("gray-percentage");

var _grayPercentage2 = _interopRequireDefault(_grayPercentage);

var _compassVerticalRhythm = require("compass-vertical-rhythm");

var _compassVerticalRhythm2 = _interopRequireDefault(_compassVerticalRhythm);

var _typographyBreakpointConstants = require("typography-breakpoint-constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var theme = {
    title: "Theme",
    baseFontSize: "16px",
    baseLineHeight: 1.45,
    googleFonts: [{
      name: "Lato",
      styles: ["700"]
    }, {
      name: "PT Serif",
      styles: ["400", "400i", "700"]
    }],
    headerFontFamily: ["Lato", "sans-serif"],
    bodyFontFamily: ["PT Serif", "serif"],
    headerColor: "hsla(0,0%,0%,1)",
    bodyColor: "hsla(0,0%,0%,0.8)",
    headerWeight: 700,
    bodyWeight: 400,
    boldWeight: 700,
    blockMarginBottom: 2 / 3,
    overrideStyles: function overrideStyles(_ref, _ref2) {
      var _styles;
  
      var rhythm = _ref.rhythm;
      var blockMarginBottom = _ref2.blockMarginBottom;
  
      var vr = (0, _compassVerticalRhythm2.default)({
        baseFontSize: "16px",
        baseLineHeight: "1.45"
      });
  
      var styles = (_styles = {}, _defineProperty(_styles, _typographyBreakpointConstants.MOBILE_MEDIA_QUERY, {
        html: _extends({}, vr.establishBaseline())
      }), _defineProperty(_styles, "blockquote", {
        color: (0, _grayPercentage2.default)(26.6),
        borderLeft: "4px solid #999",
        paddingLeft: rhythm(blockMarginBottom),
        marginLeft: rhythm(blockMarginBottom),
        marginRight: rhythm(blockMarginBottom),
        marginTop: rhythm(blockMarginBottom),
        marginBottom: rhythm(blockMarginBottom)
      }), _defineProperty(_styles, "a", {
        fontWeight: "bold",
        color: "#00f",
        textDecoration: "none"
      }), _defineProperty(_styles, "a:hover", {
        textDecoration: "underline"
      }), _styles);
  
      return styles;
    }
  };
  
  exports.default = theme;