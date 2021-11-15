import { StyleSheet, } from 'react-native';
import { HP, WP, colors } from '../utilities';

const styles = StyleSheet.create({
    headerIcon: {
        paddingHorizontal: WP('3')
    },
    headerTitle: {
        fontWeight: "bold",
        fontSize: 15
    },
    orderCard: {
        backgroundColor: colors.white,
        borderRadius: HP('2'),
        width: WP('90'),
        alignSelf: "center",
        marginBottom: WP('3'),
        padding: WP('5')
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end"

    },
    dateTimeTxt: {
        color: colors.txt2
    },
    status: {
        color: colors.yellow,
        fontWeight: "bold"

    },
    mealTitle: {
        fontWeight: "bold",
        marginTop: WP('2'),
        fontSize: 15,
    },
    RestaurantName: {
        marginTop: WP('2'),
        fontSize: 13,
    },
    price: {
        fontWeight: "bold",
        fontSize: 18,
    },
});

export default styles;
