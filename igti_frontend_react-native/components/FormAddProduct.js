import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Button, Content, Form, Input, Item, Label, Text} from 'native-base';
import axios from 'axios';

export default class FormAddProduct extends Component {
    constructor() {
        super();
        this._id = '';
        this.formType = 'add';
        this.state = {
            productName: '',
            description: '',
            price: '',
            img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_3dd3LEeDOkTFeH4KPBrSYNjQyrdf_GCcdSIefzMhch_2Z_1C'
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
            axios.post(`${global.api}/api/createproduct`, vm.state)
                .then(function (response) {
                    const data = response.data;
                    console.log(data.msg);
                    vm.props.navigation.navigate('Produtos');
                })
                .catch(function (err) {
                    alert(err)
                })
        }
    };

    render() {
        console.log("Render");
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
                        <Text>Salvar</Text>
                    </Button>
                </Form>
            </Content>
        )
    }
}

const styles = StyleSheet.create({
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