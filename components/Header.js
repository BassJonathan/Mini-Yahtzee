import React from "react";
import { Text, View } from 'react-native';
import styles from '../style/style';

export default function Header() {
    return (
        <View style={[styles.header, styles.dropShadow]}>
            <Text style={styles.title}>
                Mini-Yahtzee
            </Text>
        </View>
    )
};
