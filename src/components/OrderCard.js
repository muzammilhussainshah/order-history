import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './style';
import { colors } from '../utilities';
import { AntDesign } from '@expo/vector-icons';

export default OrderCard = ({
    Date,
    Time,
    MealName,
    OrderIDNumber,
    RestaurantName,
    Price,
    OrderStatus
}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={styles.orderCard}>
            <View style={styles.row}>
                <View>
                    <Text style={styles.dateTimeTxt}>{Date} {Time}</Text>
                </View>
                <View>
                    <Text style={[styles.status, {
                        color: OrderStatus === "Completed" ?
                            colors.green :
                            colors.yellow
                    }]}>{OrderStatus}</Text>
                </View>
            </View>
            <View style={[styles.row]}>
                <View>
                    <Text style={styles.mealTitle}>{MealName} #{OrderIDNumber}</Text>
                    <Text style={styles.RestaurantName}>{RestaurantName}</Text>
                </View>
                <View>
                    <Text style={styles.price}>${Price}
                        <AntDesign name="right" size={15} color="black" />
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}