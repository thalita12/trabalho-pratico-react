import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import AddScreen from '../screens/AddScreen';
import ProductScreen from '../screens/ProductScreen';
import AddProdutoScreen from '../screens/AddProductScreen';

const HomeStack = createStackNavigator({
    Home: HomeScreen,
});

HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? `ios-information-circle${focused ? '' : '-outline'}`
                    : 'md-information-circle'
            }
        />
    ),
};

const ProductStack = createStackNavigator({
    Produtos: ProductScreen,
});

ProductStack.navigationOptions = {
    tabBarLabel: 'Produtos',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
        />
    ),
};

// const AboutStack = createStackNavigator({
//     Links: AboutScreen,
// });
//
// AboutStack.navigationOptions = {
//     tabBarLabel: 'Links',
//     tabBarIcon: ({focused}) => (
//         <TabBarIcon
//             focused={focused}
//             name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
//         />
//     ),
// };

const AddEditStack = createStackNavigator({
    Settings: AddScreen,
});

AddEditStack.navigationOptions = {
    tabBarLabel: 'Add',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
        />
    ),
};

const AddProductStack = createStackNavigator({
    Settings: AddProdutoScreen,
});

AddProductStack.navigationOptions = {
    tabBarLabel: 'Novo Produto',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
        />
    ),
};

export default createBottomTabNavigator({
        HomeStack,
        ProductStack,
        AddEditStack,
        AddProductStack
    }
);
