"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_native_1 = require("react-native");
var Demo = /** @class */ (function (_super) {
    __extends(Demo, _super);
    function Demo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Demo.prototype.render = function () {
        return (React.createElement(react_native_1.View, { style: { height: 100, width: 100, backgroundColor: 'red' } },
            React.createElement(react_native_1.Text, null, "\u6211\u662F\u4E00\u4E2A\u666E\u901A\u7684\u6570\u636E\u5E93"),
            React.createElement(react_native_1.Button, { title: "\u6211\u662F\u4E00\u4E2A\u6570\u636E\u5E93\u7684\u6309\u94AE", onPress: this.props.onClick || (function () { }) })));
    };
    return Demo;
}(React.Component));
exports.default = Demo;
