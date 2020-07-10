import React, { Component } from 'react';
import styled from 'styled-components';

import { TextInput } from './textInput';
import { FormFieldContainer } from './styles';

const FormContainer = styled.div`
  background-color: #f3f3f3;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 10px;
  width: 500px;
`;

const SubmitContainer = styled.div`
  width: 100%;
  margin-bottom: 15px;
  text-align: center;

  input {
    border: 0;
    background-color: #00adff;
    border-radius: 15px;
    color: white;
    text-transform: uppercase;
    width: 100px;
    padding: 5px;

    &:hover {
      opacity: .40;
    }

    &:focus {
      outline: none;
    }
  }
`;

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
    // TODO - validate params
    this.props.submit(this.state);
  }

  render() {
    const { config } = this.props;
    const isDisabled = Object.values(this.state).filter(Boolean).length !== Object.keys(this.state).length;

    return (
      <FormContainer>
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
            <FormFieldContainer key={name}>
              <label>
                {label}
                <Field
                  type={type}
                  name={name}
                  value={this.state[name].value}
                  onChange={this.handleInputChange}
                />
              </label>
            </FormFieldContainer>
          )})}
          <SubmitContainer>
            <input disabled={isDisabled} type="submit" value="Submit" />
          </SubmitContainer>
        </form>
      </FormContainer>
    );
  }
}