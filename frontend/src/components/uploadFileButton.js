import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Dimensions, TouchableOpacity } from 'react-native';
import FileService from '../services/file.service'


class UploadFileButton extends Component {
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
    let form = document.getElementById('upload-file');
    let formData = new FormData(form);
    FileService.create(formData);
  }

  render() {
    return(
      <>
        <form onSubmit={this.handleSubmit} id="upload-file">
          <input
            type="file"
            accept="application/pdf"
            id="filepath"
            name="filepath"
            onChange={this.handleChange}
          />
          <input type="submit" title="Submit" />
        </form>
      </>
    )
  }
}

export default UploadFileButton;