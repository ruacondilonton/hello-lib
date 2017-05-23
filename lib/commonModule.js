"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = require("/Users/long/Desktop/remove/lib-hello/node_modules/redbox-react/lib/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("/Users/long/Desktop/remove/lib-hello/node_modules/react-transform-catch-errors/lib/index.js");

var _index4 = _interopRequireDefault(_index3);

var _react2 = require("react");

var _react3 = _interopRequireDefault(_react2);

var _index5 = require("/Users/long/Desktop/remove/lib-hello/node_modules/react-transform-hmr/lib/index.js");

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    commonModule: {
        displayName: "commonModule"
    }
};

var _UsersLongDesktopRemoveLibHelloNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: "./src/commonModule.js",
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _UsersLongDesktopRemoveLibHelloNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: "./src/commonModule.js",
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _UsersLongDesktopRemoveLibHelloNode_modulesReactTransformHmrLibIndexJs2(_UsersLongDesktopRemoveLibHelloNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
} /**
   * Created by long on 5/23/17.
   */


var commonModule = _wrapComponent("commonModule")(function (_Component) {
    _inherits(commonModule, _Component);

    function commonModule() {
        _classCallCheck(this, commonModule);

        return _possibleConstructorReturn(this, (commonModule.__proto__ || Object.getPrototypeOf(commonModule)).apply(this, arguments));
    }

    _createClass(commonModule, [{
        key: "render",
        value: function render() {
            return _react3.default.createElement(
                "div",
                { className: "map-wrapper" },
                _react3.default.createElement(
                    "h3",
                    null,
                    "commonModule"
                ),
                _react3.default.createElement(
                    "style",
                    null,
                    css
                )
            );
        }
    }]);

    return commonModule;
}(_react2.Component));

exports.default = commonModule;
;
var css = "\n\n  .map-wrapper {\n         width:1000px;\n         height:1000px;\n      \n    }\n    \n    \n\n\n";
