import React, { Component } from 'react';

import { TextInput } from './textInput';

const fields = {
  TextInput,
};

export class Form extends Component {
  constructor(props) {
    super(props);

    const { config } = props;
    const defaultState = config.reduce((memo, field) => {
      const { name } = field;
      memo[name] = '';

      return memo;
    }, {});

    this.state = defaultState;

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const { target } = event;
    const { name, value } = target

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.submit(this.state);
  }

  render() {
    const { config } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        {config.map((field) => {
          const {
            component,
            name,
            type,
            label,
          } = field;
          const Field = fields[component];
          return (
          <div key={name}>
            <label>
              {label}
              <Field
                type={type}
                name={name}
                value={this.state[name].value}
                onChange={this.handleInputChange}
              />
            </label>
          </div>
        )})}
        <input type="submit" value="Submit" />
      </form>
    );
  }
}