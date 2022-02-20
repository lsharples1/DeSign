import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Dimensions, TouchableOpacity } from 'react-native';
import SmartcontractService from '../services/smartcontract.service';


class ExecuteSmartContractButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'private_key': null,
      'public_key': null,
      'signed_tx': null,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    let form = document.getElementById('execute-contract');
    const signedTX = await SmartcontractService.getSignedTX(this.state).then(response => {
      console.log(response.data);
      return response.data;
    }).catch(error => {
      console.error(error);
    })

    this.setState({
      'signed_tx': signedTX,
    })
  }

  render() {
    return(
      <>
        <form onSubmit={this.handleSubmit}
         id="execute-contract"
         >
           <input name="public_key" onChange={this.handleChange}></input>
          <input type="submit" title="Execute"/>
        </form>
        <returnValue/>
        <Text>Signed TX: {this.state.signed_tx ? this.state.signed_tx : ''}</Text>
      </>
    )
  }
}

/*
  ideally want the 'Submit' button to be something like 'Execute Contract'
  and then returns "Transaction confirmed. Transaction hash: 0xfsdjufoasufioasjf (get this from API request)"
*/


export default ExecuteSmartContractButton;