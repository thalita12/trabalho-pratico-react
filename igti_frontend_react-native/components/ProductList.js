import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import ProductItem from './ProductItem';

const ProductList = props => {
	// props são varáveis globais de um componente que pode ser passadas de um componente para outro
	const { products, onPressItem } = props;
	// neste momento cria a view Flatlist e dentro da mesma foi carragado um novo component
	return (
		<FlatList
			style={styles.container}
			data={products}
			renderItem={({ item }) => (
				<ProductItem
                    product={item}
					navigateToEditPage={onPressItem} />
			)}
			keyExtractor={item => item.productName} />
	);
};

//definição dos estilos do layout html like
const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff'
	},
});

export default ProductList;