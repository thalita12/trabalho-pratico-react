import React from 'react';
import {createAppContainer, createStackNavigator, createSwitchNavigator, HeaderBackButton} from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
import EditScreen from '../screens/EditScreen';
import EditProductScreen from '../screens/EditProductScreen';

const EditStack = createStackNavigator({
    Main: {
        screen: MainTabNavigator,
        navigationOptions: ({navigation}) => ({ //don't forget parentheses around the object notation
            header: null
        })
    },
    Edit: {
        screen: EditScreen,
        navigationOptions: ({navigation}) => ({ //don't forget parentheses around the object notation
            title: 'Editar Usuário',
            headerLeft: <HeaderBackButton onPress={() => navigation.navigate('HomeStack')}/>
        })
    },
    EditProduct: {
        screen: EditProductScreen,
        navigationOptions: ({navigation}) => ({ //don't forget parentheses around the object notation
            title: 'Editar Produto',
            headerLeft: <HeaderBackButton onPress={() => navigation.navigate('ProductStack')}/>
        })
    }
});

export default createAppContainer(createSwitchNavigator({
    MainComponent: EditStack
}));