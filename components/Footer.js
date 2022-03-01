import React from "react";
import { Text, View } from 'react-native';
import styles from '../style/style';

export default function Footer() {
    return (
        <View style={[styles.footer, styles.dropShadow]}>
            <Text style={styles.author}>
                Author: Jonathan Bass
            </Text>
        </View>
    )
};
