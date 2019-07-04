import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import FormAddProduct from '../components/FormAddProduct';
import { ScrollView, StyleSheet } from 'react-native';
export default class AddProductScreen extends React.Component {
  static navigationOptions = {
    title: 'Novo Produto',
  };
  render() {
    return (
      <ScrollView style={styles.container}>
        <FormAddProduct navigation={this.props.navigation} />
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
});
