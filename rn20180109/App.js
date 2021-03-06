"use strict";
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("react");
var react_native_1 = require("react-native");
// import KeyBorardManager from 'react-native-keyboard-mgr';
var Counter_1 = __importDefault(require("./page/Counter"));
var instructions = react_native_1.Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // constructor(props) {
    //   super(props);
    //   this.state = { text: 'Useless Placeholder' };
    // }
    App.prototype.render = function () {
        var _this = this;
        // KeyBorardManager.setEnabled(true)
        // KeyBorardManager.setEnableAutoToolbar(false)
        // KeyBorardManager.setShouldShowTextInputPlaceholder(false)
        // KeyBorardManager.setShouldResignOnTouchOutside(false)
        // KeyBorardManager.setPlaceholderFont(10)
        return (react_1.default.createElement(react_native_1.View, { style: styles.container },
            react_1.default.createElement(Counter_1.default, { name: "ggman" }),
            react_1.default.createElement(react_native_1.Text, { style: styles.welcome }, "Welcome to React Native!"),
            react_1.default.createElement(react_native_1.Text, { style: styles.instructions }, "To get started, edit App.js"),
            react_1.default.createElement(react_native_1.Text, { style: styles.instructions }, instructions),
            react_1.default.createElement(react_native_1.TextInput, { style: { height: 40, borderColor: 'gray', borderWidth: 1 }, onChangeText: function (text) { return _this.setState({ text: text }); } })));
    };
    return App;
}(react_2.Component));
exports.default = App;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 30,
    },
});
