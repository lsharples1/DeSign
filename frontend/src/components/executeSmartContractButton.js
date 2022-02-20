import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Dimensions, TouchableOpacity } from 'react-native';
import SmartcontractService from '../services/smartcontract.service';


class ExecuteSmartContractButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'private_key': null,
      'public_key': null,
      'signed_tx': '',
      'tx_hash': null,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitTxHash = this.handleSubmitTxHash.bind(this);
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
    console.log(this.state)
    const signedTX = await SmartcontractService.getSignedTX(this.state.public_key, this.state.private_key, false).then(response => {
      console.log(response.data);
      return response.data;
    }).catch(error => {
      console.error(error);
    })

    this.setState({
      'signed_tx': signedTX,
    })
  }

  handleSubmitTxHash = async (e) => {
    e.preventDefault();
    console.log(this.state)
    const txHash = await SmartcontractService.getSignedTX(this.state.public_key, this.state.private_key, true).then(response => {
      console.log(response.data);
      return response.data;
    }).catch(error => {
      console.error(error);
    })

    this.setState({
      'tx_hash': txHash,
    })
  }

  render() {
    return(
      <>
        <form onSubmit={this.handleSubmit}
         id="execute-contract"
         >
           <View style={[{marginBottom: 10}, {marginTop: 20}]}>
           <label>sender private key</label>
           <input name="private_key" onChange={this.handleChange}></input>
           </View>
           <View style={[{marginBottom: 10}, {marginTop: 10}]}>
           <label>recipient public key</label>
           <input name="public_key" onChange={this.handleChange}></input>
          <input type="submit" title="Execute" value="Sign Transaction"/>
           </View>
          
        </form>

       
        <form onSubmit={this.handleSubmitTxHash}>
        <View style={[{marginBottom: 10}, {marginTop: 10}]}>
           <label>signed tx</label>
           <input name="signed_tx" onChange={this.handleChange} value={this.state.signed_tx }></input>
          <input type="submit" title="Execute" value="Send Transaction"/>
          </View>
        </form>
        <Text style={[{fontFamily: 'Avenir'}]} numberOfLines={5}>Tx Hash: {this.state.tx_hash ? this.state.tx_hash : ''}</Text>
        
        
      </>
    )
  }
}

/*
  ideally want the 'Submit' button to be something like 'Execute Contract'
  and then returns "Transaction confirmed. Transaction hash: 0xfsdjufoasufioasjf (get this from API request)"
*/


export default ExecuteSmartContractButton;