import React from 'react';
import InputMask from 'react-input-mask';

export default class Input extends React.Component {
  state = {
    value: this.props.nota
  }

  onChange = (event) => {
    this.setState({
      value: event.target.value
    });
  }


  render() {
    return <InputMask mask="99.9" maskChar="_" value={this.state.value} onChange={this.onChange} />;
  }
}