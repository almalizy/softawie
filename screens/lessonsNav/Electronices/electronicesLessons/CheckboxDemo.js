import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import CheckBox from 'react-native-checkbox-heaven';

 class CheckboxDemo extends Component {
  state = {
    checked: false
  }
  handleOnChange(val) {
    this.setState({ checked: val })
  }
  render() {

    return (
      <View style={styles.container}>
        <CheckBox
          title={this.props.label}
          labelStyle={styles.labelStyle}
          iconSize={28}
          iconName='matMix'
          checked={this.state.checked}
          checkedColor='#008080'
          uncheckedColor='#8b0000'
          onChange={this.handleOnChange.bind(this)}
          disabled={true}
          disabledColor='red'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  labelStyle: {
    marginLeft: 4,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2f4f4f'
  }
});

export default CheckboxDemo ;