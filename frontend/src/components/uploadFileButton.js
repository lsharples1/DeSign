import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Dimensions, TouchableOpacity } from 'react-native';
import FileService from '../services/file.service'


class UploadFileButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'file': null,
      'isSubmitted': false,
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
    let form = document.getElementById('upload-file');
    let formData = new FormData(form);
    FileService.create(formData);
    this.setState({
      'isSubmitted': true,

    })
  }

  render() {
    return(
      <>
      {
        this.state.isSubmitted ? 
        <Text style={[{ color: 'green' }, , {fontFamily: 'Avenir'},{ flex: 2 },  {marginTop: 20}]}>SUBMITTED</Text> :
        <Text style={[{ color: 'red' }, { flex: 2 } , {fontFamily: 'Avenir'}, {marginTop: 20}]}> NOT SUBMITTED</Text>

      }
      <View style={[{marginTop:20}, {marginRight:10}]}>
      <form onSubmit={this.handleSubmit}
         id="upload-file"
         >
          <input
            type="file"
            accept="application/pdf"
            id="filepath"
            name="filepath"
            onChange={this.handleChange}
          />
          <input type="submit" title="Upload" value="Upload" />
        </form>
      </View>
        
      </>
    )
  }
}

export default UploadFileButton;