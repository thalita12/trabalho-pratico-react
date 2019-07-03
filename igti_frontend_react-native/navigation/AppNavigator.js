import React from 'react';
import {createAppContainer, createStackNavigator, createSwitchNavigator, HeaderBackButton} from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
import EditScreen from '../screens/EditScreen';
import EditProdutoScreen from '../screens/EditProdutoScreen';


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
            title: 'Edit',
            headerLeft: <HeaderBackButton onPress={() => navigation.navigate('HomeStack')}/>
        })
    },
    EditProduct: {
        screen: EditProdutoScreen,
        navigationOptions: ({navigation}) => ({ //don't forget parentheses around the object notation
            title: 'Edit',
            headerLeft: <HeaderBackButton onPress={() => navigation.navigate('ProdutoStack')}/>
        })
    }
});

export default createAppContainer(createSwitchNavigator({
    MainComponent: EditStack
}));