import React from "react";
import {StyleSheet, Text, View, Button} from "react-native";

export class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Home Screen</Text>
                <Button title="Go to mobs list" onPress={() => this.props.navigation.push('MobsList')} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
});