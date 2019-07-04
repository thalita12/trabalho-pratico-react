import React from 'react';
import {ExpoConfigView} from '@expo/samples';
import ProductList from '../components/ProductList';
import axios from 'axios';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

export default class ProductScreen extends React.Component {

    static navigationOptions = {
        title: 'Produtos',
    };

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            loading: false,
            error: false,
        };
    }

    httpRequestGetAllProducts() {
        this.setState({loading: true});
        const url = global.api + '/api/getAllProducts';
        setTimeout(() => {
            axios
                .get(url)
                .then(response => {
                    console.log(response.data);
                    this.setState({
                        products: response.data,
                        loading: false,
                    });
                    console.log(this.state.products)
                }).catch(error => {
                this.setState({
                    loading: false,
                    error: true,
                })
            });
        }, 3500)
    }

    componentDidMount() {
        this.props.navigation.addListener(
            'didFocus',
            payload => {

                //this.props.navigation.setParams({user: null})
                console.debug('didFocus -- 2', payload);
                this.httpRequestGetAllProducts();
            }
        );
    }

    render() {
        if (this.state.loading) {
            return (
                <View style={[styles.container, styles.horizontal]}>
                    <ActivityIndicator size="large" color="#0000ff"/>
                </View>
            );
        } else {
            return (
                <View>
                    <ProductList
                        products={this.state.products}
                        onPressItem={pageParams => {
                            console.log(pageParams)
                            this.props.navigation.navigate('EditProduct', pageParams);
                        }}/>
                </View>
            );
        }
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    }
});
