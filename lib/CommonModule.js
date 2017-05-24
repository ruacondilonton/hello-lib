'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = require('/Users/long/Desktop/remove/lib-hello/node_modules/redbox-react/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('/Users/long/Desktop/remove/lib-hello/node_modules/react-transform-catch-errors/lib/index.js');

var _index4 = _interopRequireDefault(_index3);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index5 = require('/Users/long/Desktop/remove/lib-hello/node_modules/react-transform-hmr/lib/index.js');

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    CommonModule: {
        displayName: 'CommonModule'
    }
};

var _UsersLongDesktopRemoveLibHelloNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: './src/commonModule.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _UsersLongDesktopRemoveLibHelloNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: './src/commonModule.js',
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


var CommonModule = _wrapComponent('CommonModule')(function (_Component) {
    _inherits(CommonModule, _Component);

    function CommonModule() {
        _classCallCheck(this, CommonModule);

        return _possibleConstructorReturn(this, (CommonModule.__proto__ || Object.getPrototypeOf(CommonModule)).apply(this, arguments));
    }

    _createClass(CommonModule, [{
        key: 'render',
        value: function render() {
            this.httpGet();

            return _react3.default.createElement(
                'div',
                { className: 'map-wrapper' },
                _react3.default.createElement(
                    'h3',
                    null,
                    'commonModule'
                ),
                _react3.default.createElement(
                    'style',
                    null,
                    css
                )
            );
        }
    }, {
        key: 'httpGet',
        value: function httpGet() {
            return new Promise(function (resolve, reject) {
                // let url = 'https://mapfinder-staging.herokuapp.com/mapfinder/postcode?postcode=30&sport=baseball&orderby=dis';
                //
                // console.log('url');
                // console.log(url);
                // const options = {
                //     headers: {
                //         'Content-Type': 'application/json',
                //         'Accept': 'application/json',
                //         'Authorization':"Basic ZGV2OmRldjIwMTY=",
                //         'x-api-key': "XrVL2DyqsA3hIF3oIfbQU7bAF7EtfRSH1ln6RL22",
                //         'Access-Control-Allow-Origin': '*',
                //         'Access-Control-Allow-Headers': '*',
                //     }
                // };


                var url = 'http://128.199.90.210:8083/team/a0Rp0000004AIsVEAW';

                console.log('url');
                console.log(url);
                fetch(url).then(function (response) {
                    if (response.status >= 400) {
                        throw new Error("Bad response from server");
                    }
                    return response.json();
                }).then(function (data) {
                    console.log("=====data:", data);
                });
            });
        }
    }]);

    return CommonModule;
}(_react2.Component));

exports.default = CommonModule;
;

var css = '\n\n  .map-wrapper {\n         width:1000px;\n         height:1000px;\n      \n    }\n    \n    \n\n\n';
