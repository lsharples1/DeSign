import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Dimensions, TouchableOpacity } from 'react-native';
import SmartcontractService from '../services/smartcontract.service';


class ExecuteSmartContractButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'file': null,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const {name, value} = event.target;
    this.setState({
      'file': value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    let form = document.getElementById('execute-contract');
    let formData = new FormData(form);
    const returnValue = SmartcontractService.get();
  }

  render() {
    return(
      <>
        <form onSubmit={this.handleSubmit}
         id="execute-contract"
         >
        
          <input type="submit" title="Execute"/>
        </form>
        <returnValue/>
      </>
    )
  }
}

/*
  ideally want the 'Submit' button to be something like 'Execute Contract'
  and then returns "Transaction confirmed. Transaction hash: 0xfsdjufoasufioasjf (get this from API request)"
*/


export default ExecuteSmartContractButton;