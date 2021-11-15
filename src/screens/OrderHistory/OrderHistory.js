import React, { useState } from 'react';
import { View, ActivityIndicator, FlatList } from 'react-native';
import { orders } from '../../utilities/dummyOrders';
import OrderCard from '../../components/OrderCard';
import { colors,HP } from '../../utilities';
import styles from './styles';

export default OrderHistory = () => {
    const [loading, setloading] = useState(false)
    return (
        <View style={styles.main_container}>
            {loading ? (
                <ActivityIndicator size="large" color={colors.red} />
            ) : (
                <FlatList
                    contentContainerStyle={{ paddingBottom: HP('10') }}
                    style={{ width: '100%', }}
                    keyExtractor={(item, index) => index}
                    data={orders}
                    renderItem={({ item, index }) => (
                        <OrderCard
                            Date={item.Date}
                            Time={item.Time}
                            MealName={item.MealName}
                            OrderIDNumber={item.OrderIDNumber}
                            RestaurantName={item.RestaurantName}
                            Price={item.Price}
                            OrderStatus={item.OrderStatus}
                        />
                    )}
                    // onEndReached={this.loadMoreData}
                    onEndReachedThreshold={0.1}
                // ItemSeparatorComponent={() => <View style={styles.separator} />}
                // ListFooterComponent={this.renderFooter.bind(this)}
                //Adding Load More button as footer component
                />
            )}
        </View>
    );
}