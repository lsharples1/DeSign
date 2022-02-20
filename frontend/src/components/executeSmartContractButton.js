import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Dimensions, TouchableOpacity } from 'react-native';
import SmartcontractService from '../services/smartcontract.service';


class ExecuteSmartContractButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
<<<<<<< HEAD
      'file': null,
=======
      'private_key': null,
      'public_key': null,
      'signed_tx': null,
>>>>>>> 04ff50a181728b1f27b3314318cd9f4ffb183fa0
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const {name, value} = event.target;
    this.setState({
<<<<<<< HEAD
      'file': value
=======
      [name]: value
>>>>>>> 04ff50a181728b1f27b3314318cd9f4ffb183fa0
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    let form = document.getElementById('execute-contract');
<<<<<<< HEAD
    let formData = new FormData(form);
    SmartcontractService.get();
=======
    const signedTX = await SmartcontractService.getSignedTX(this.state).then(response => {
      console.log(response.data);
      return response.data;
    }).catch(error => {
      console.error(error);
    })

    this.setState({
      'signed_tx': signedTX,
    })
>>>>>>> 04ff50a181728b1f27b3314318cd9f4ffb183fa0
  }

  render() {
    return(
      <>
        <form onSubmit={this.handleSubmit}
         id="execute-contract"
         >
<<<<<<< HEAD
          <input
            onChange={this.handleChange}
          />
          <input type="submit" title="Execute" />
        </form>
=======
           <input name="public_key" onChange={this.handleChange}></input>
          <input type="submit" title="Execute"/>
        </form>
        <returnValue/>
        <Text>Signed TX: {this.state.signed_tx ? this.state.signed_tx : ''}</Text>
>>>>>>> 04ff50a181728b1f27b3314318cd9f4ffb183fa0
      </>
    )
  }
}

<<<<<<< HEAD
=======
/*
  ideally want the 'Submit' button to be something like 'Execute Contract'
  and then returns "Transaction confirmed. Transaction hash: 0xfsdjufoasufioasjf (get this from API request)"
*/


>>>>>>> 04ff50a181728b1f27b3314318cd9f4ffb183fa0
export default ExecuteSmartContractButton;