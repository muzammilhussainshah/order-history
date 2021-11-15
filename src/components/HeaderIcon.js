import * as React from 'react';
import { Text, View, TouchableOpacity, BackHandler } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './style';
import { useNavigation } from '@react-navigation/native';


export default HeaderIcon = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            onPress={() => {
                if (navigation.canGoBack()) navigation.goBack();
                else BackHandler.exitApp();
            }}
            style={styles.headerIcon}>
            <Ionicons name="chevron-back-outline" size={24} color="black" />
        </TouchableOpacity>
    );
}