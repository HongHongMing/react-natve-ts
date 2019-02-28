import * as React from 'react';
import { Button, Text, View } from 'react-native';
export default class Demo extends React.Component {
    render() {
        return (React.createElement(View, { style: { height: 100, width: 100, backgroundColor: 'red' } },
            React.createElement(Text, null, "\u6211\u662F\u4E00\u4E2A\u666E\u901A\u7684\u6570\u636E\u5E93"),
            React.createElement(Button, { title: "\u6211\u662F\u4E00\u4E2A\u6570\u636E\u5E93\u7684\u6309\u94AE", onPress: this.props.onClick || (() => { }) })));
    }
}
//# sourceMappingURL=ImgDom.js.map