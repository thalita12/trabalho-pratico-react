import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Button, Content, Form, Input, Item, Label, Text} from 'native-base';
import axios from 'axios';

export default class EditScreen extends React.Component {
    constructor(props) {
        super(props);
        const {_id, name, username, email, phone, password} = props.navigation.state.params.user;
        this.state = {
            _id: _id,
            name: name,
            username: username,
            email: email,
            phone: phone,
            password: password,
            img_url: 'https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png'
        }
    }

    validateEmail = (email) => {
        const regex = /^[a-z._-]+@[a-z.-]+\.[a-z]{2,4}$/;
        if (email === "") {
            return false
        } else {
            return regex.test(email);
        }
    };

    validatePhone = (phone) => {
        const regex = /^\+?[0-9]*$/;
        if (phone === "") {
            return false
        } else {
            return regex.test(phone);
        }
    };

    validatePassword = (password) => {
        const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (password === "") {
            return false
        } else {
            return regex.test(password);
        }
    };

    formSubmit = () => {
        const vm = this;
        if (this.state.name === '') {
            alert('Please enter contact name!')
        } else if (this.validateEmail(this.state.email) === false) {
            alert('Please enter a valid email!')
        } else if (this.validatePhone(this.state.phone) === false) {
            alert('Please enter a valid phone number!')
        } else if (this.validatePassword(this.state.password) === false) {
            alert('Please enter a valid password')
        } else {
            axios.put(`${global.api}/api/edituser`, vm.state)
                .then(function (response) {
                    const data = response.data;
                    console.log(data.msg);
                    this.props.navigation.navigate('Home');
                })
                .catch(function (err) {
                    alert(err)
                })
        }
    };

    formSubmitDelete = () => {
        const vm = this;
        axios.delete(`${global.api}/api/deleteuser/${this.state._id}`, vm.state)
            .then(function (response) {
                const data = response.data;
                console.log(data.msg);
                this.props.navigation.navigate('Home');
            })
            .catch(function (err) {
                alert(err)
            })
    };

    render() {
        return (
            <ScrollView style={styles.container}>
                <Content>
                    <Form style={styles.formOuter}>
                        <Item floatingLabel style={styles.formInput}>
                            <Label>Nome</Label>
                            <Input
                                onChangeText={(name) => this.setState({name})}
                                value={this.state.name}
                            />
                        </Item>
                        <Item floatingLabel style={styles.formInput}>
                            <Label>Login</Label>
                            <Input
                                onChangeText={(username) => this.setState({username})}
                                value={this.state.username}
                            />
                        </Item>
                        <Item floatingLabel style={styles.formInput}>
                            <Label>E-mail</Label>
                            <Input
                                onChangeText={(email) => this.setState({email})}
                                value={this.state.email}
                            />
                        </Item>
                        <Item floatingLabel style={styles.formInput}>
                            <Label>Celular</Label>
                            <Input
                                onChangeText={(phone) => this.setState({phone})}
                                value={this.state.phone}
                            />
                        </Item>
                        <Item floatingLabel style={styles.formInput}>
                            <Label>Senha</Label>
                            <Input
                                onChangeText={(password) => this.setState({password})}
                                value={this.state.password}
                            />
                        </Item>
                        <Button block primary iconLeft style={styles.submitBtn} onPress={this.formSubmit.bind(this)}>
                            <Text>Editar</Text>
                        </Button>
                        <Button block primary iconLeft style={styles.submitBtn}
                                onPress={this.formSubmitDelete.bind(this)}>
                            <Text>Excluir</Text>
                        </Button>
                    </Form>
                </Content>
            </ScrollView>
        );
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
