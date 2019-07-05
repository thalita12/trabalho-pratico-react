import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Constants} from 'expo';

const ProductItem = props => {
    const {product, navigateToEditPage} = props;
    const productName = product.productName;
    const price = product.price;
    const description = product.description;
    const img_url = product.img_url;
    return (
        <View style={styles.item}>
            <TouchableOpacity onPress={() => {
                // nesse momento vai navegar executar uma função e passar por parâmentro o user mais essa função será
                // executada no ProductScreen no codigo onPressItem={pageParams => {
                //		console.log(pageParams)
                //		this.props.navigation.navigate('Edit', pageParams);
                //	}}
                navigateToEditPage({product});
            }}>

                <View style={styles.container}>
                    <Image
                        style={styles.image}
                        resizeMode={"cover"}
                        source={{uri: img_url}}/>
                    <Text style={styles.txtTitulo}>Produto: {productName}</Text>
                    <Text style={styles.txtValor}>Descrição: {description}</Text>
                    <Text style={styles.txtValor}>Preço: {price}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1'
    },
    image: {
        height: 80,
        width: 80,
        borderRadius: 40,
        backgroundColor: '#fff'
    },
    item: {
        backgroundColor: '#FFF',
        borderWidth:
            0.5,
        borderColor:
            '#999',
        margin:
            10,
        padding:
            10,
        flexDirection:
            'column'
    }
    ,
    foto: {
        width: 250,
        height:
            150
    }
    ,
    destalhesItem: {
        marginLeft: 20,
        flex:
            1
    }
    ,
    txtTitulo: {
        fontSize: 16,
        color:
            'black',
        marginBottom:
            5
    },
    txtValor: {
        fontSize: 13,
        fontWeight:
            'bold'
    }
});

export default ProductItem;