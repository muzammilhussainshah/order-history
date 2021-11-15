// @app
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
// @components
import { colors, WP, HP } from '../utilities';
// @style
import HeaderTitle from '../components/HeaderTitle';
import HeaderIcon from '../components/HeaderIcon';
// @tab screens
import Home from '../screens/Home';
import OrderHistory from '../screens/OrderHistory';
import Setting from '../screens/Setting';

const Tab = createBottomTabNavigator();

export default function App({ navigation }) {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: {
                        borderTopRightRadius: WP('5'),
                        borderTopLeftRadius: WP('5'),
                        position: "absolute",
                    },
                }}
            >

                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerTitleAlign: 'center',
                        tabBarLabel: () => { return null },
                        tabBarIcon: ({ focused }) => focused === true ? <Ionicons name="md-fast-food-outline" size={25} color={colors.red} /> : <Ionicons name="md-fast-food-outline" size={25} color={colors.txt2} />,
                        headerTitle: props => <HeaderTitle label='Home' />,
                        headerLeft: () => (
                            <HeaderIcon />
                        ),
                    }}
                />
                <Tab.Screen
                    name="OrderHistory"
                    component={OrderHistory}
                    options={{
                        tabBarLabel: () => { return null },
                        tabBarIcon: ({ focused }) => focused === true ? <MaterialCommunityIcons name="bookmark-minus-outline" size={26} color={colors.red} /> : <MaterialCommunityIcons name="bookmark-minus-outline" size={26} color={colors.txt2} />,
                        headerTitleAlign: 'center',
                        headerTitle: props => <HeaderTitle label='My orders' />,
                        headerLeft: () => (
                            <HeaderIcon />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Settings"
                    component={Setting}
                    options={{
                        tabBarLabel: () => { return null },
                        tabBarIcon: ({ focused }) => focused === true ? <AntDesign name="menu-unfold" size={24} color={colors.red} /> : <AntDesign name="menu-unfold" size={24} color={colors.txt2} />,
                        headerTitleAlign: 'center',
                        headerTitle: props => <HeaderTitle label='Setting' />,
                        headerLeft: () => (
                            <HeaderIcon />
                        ),
                    }}
                />

            </Tab.Navigator>
        </NavigationContainer>
    );
}


// tabBarOptions={{ activeBackgroundColor: '#5B6A95' }}
//             initialRouteName={store.LoginOnce === false ? "Profile" : "Search"}
//             tabBar={(props) => {
//                 return (
//                     <BottomTabBar
//                     {...props}
//                     style={{ backgroundColor: 'transparent', elevation: 0 }}
//                 />
//                 );
//             }}