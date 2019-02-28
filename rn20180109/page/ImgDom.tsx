import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


interface props {
    title?: any;
    onClick?:()=>{}
}

export default class Demo extends React.Component<props> {
    render() {
        return (
            <View style={{ height: 100, width: 100, backgroundColor: 'red' }}>
                <Text>
                    我是一个普通的数据库
                </Text>
                <Button title="我是一个数据库的按钮" onPress={this.props.onClick || (() => { })} />
            </View>
        )
    }
}