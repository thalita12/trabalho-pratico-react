import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Content, Form, Input, Item, Label, Number, Text} from 'native-base';
import axios from 'axios';

export default class EditProductScreen extends React.Component {
    constructor(props) {
        super(props);
        const {_id, productName, price, description, img_url} = props.navigation.state.params.product;
        this.state = {
            _id: _id,
            productName: productName,
            price: price,
            description: description,
            img_url: img_url
        }
    }

    formSubmit = () => {
        const vm = this;
        if (this.state.productName === '') {
            alert('Please enter name!')
        } else if (this.state.price === '') {
            alert('Please enter price!')
        } else if (this.state.description === '') {
            alert('Please enter description!')
        } else {
            axios.put(`${global.api}/api/editproduct`, vm.state)
                .then(function (response) {
                    const data = response.data;
                    console.log(data.msg);
                    this.props.navigation.navigate('Produtos');
                })
                .catch(function (err) {
                    alert(err)
                })
        }
    };

    formSubmitDelete = () => {
        const vm = this;
        axios.delete(`${global.api}/api/deleteproduct/${this.state._id}`, vm.state)
            .then(function (response) {
                const data = response.data;
                console.log(data.msg);
                this.props.navigation.navigate('Produtos');
            })
            .catch(function (err) {
                alert(err)
            })
    };

    render() {
        return (
            <Content>
                <Form style={styles.formOuter}>
                    <Item floatingLabel style={styles.formInput}>
                        <Label>Nome do Produto</Label>
                        <Input
                            onChangeText={(productName) => this.setState({productName})}
                            value={this.state.productName}
                        />
                    </Item>
                    <Item floatingLabel style={styles.formInput}>
                        <Label>Descrição</Label>
                        <Input
                            onChangeText={(description) => this.setState({description})}
                            value={this.state.description}
                        />
                    </Item>
                    <Item floatingLabel style={styles.formInput}>
                        <Label>Preço</Label>
                        <Input
                            onChangeText={(price) => this.setState({price})}
                            value={this.state.price}
                        />
                    </Item>
                    <Button block primary iconLeft style={styles.submitBtn} onPress={this.formSubmit.bind(this)}>
                        <Text>Editar</Text>
                    </Button>
                    <Button block default iconLeft style={styles.submitBtn}
                            onPress={this.formSubmitDelete.bind(this)}>
                        <Text>Excluir</Text>
                    </Button>
                </Form>
            </Content>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
    formOuter: {
        flex: 1,
        padding: 8
    },
    formInput: {
        marginLeft: 0
    },
    submitBtn: {
        marginTop: 20
    }
});
