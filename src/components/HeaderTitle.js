import * as React from 'react';
import { Text, View } from 'react-native';
import styles from './style';


export default HeaderTitle = ({ label }) => {
    return (
            <Text style={styles.headerTitle}>{label}</Text>
    );
}