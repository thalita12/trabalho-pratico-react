import React from 'react';
import {
	Text,
	View,
	StyleSheet,
	Image,
	TouchableOpacity
} from 'react-native';
import { Constants } from 'expo';

// {
//     'productName': 'Curso IONIC 4',
//     'price': 39.99,
//     'description': 'Curso IONIC 4 do básico ao avançado',
//     'img_url': 'https://i.udemycdn.com/course/240x135/1325912_2431.jpg'
// },

const ProdutoItem = props => {
	const { produto, navigateToEditPage } = props;
	const productName = produto.productName;
	const price = produto.price;
	const description = produto.description;
	const img_url = produto.img_url;
	return (
		<View style={styles.item}>
			<TouchableOpacity onPress={() => {
				// nesse momento vai navegar executar uma função e passar por parâmentro o user mais essa função será
				// executada no HomeScreen no codigo onPressItem={pageParams => {
				//		console.log(pageParams)
				//		this.props.navigation.navigate('Edit', pageParams);
				//	}}
				navigateToEditPage({ produto });
			}}>
				
				<View style={styles.container}>
					<Image
						style={styles.image}
						resizeMode={"cover"}
						source={{ uri: img_url }}
					/>
					<Text style={styles.txtTitulo}>Produto: {productName}</Text>
					<Text style={styles.txtValor}>Preço:  {price}</Text>
					<Text style={styles.txtValor}>Descrição:  {description}</Text>
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
    backgroundColor: '#ecf0f1',
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
	item: {
		backgroundColor: '#FFF',
		borderWidth: 0.5,
		borderColor: '#999',
		margin: 10,
		padding: 10,
		flexDirection: 'column'
	},
	foto: {
		width: 250,
		height: 150
	},
	destalhesItem: {
		marginLeft: 20,
		flex: 1
	},
	txtTitulo: {
		fontSize: 13,
		color: 'black',
		marginBottom: 5
	},
	txtValor: {
		fontSize: 16,
		fontWeight: 'bold'
	},
	txtDetalhes: {
		fontSize: 16
	}

});

export default ProdutoItem;