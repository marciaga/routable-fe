import React from 'react';
import { connect } from 'react-redux';

import { Form } from '../components/form';
import { addApiKey } from '../redux/actions/meta';

const actionCreators = {
  addApiKey,
};

const formConfig = [{ 
  component: 'TextInput',
  type: 'text',
  name: 'textInputApiKey',
  label: 'Enter your API key',
}];

const ConnectedHome = ({ addApiKey }) => {
  return (
    <>
    <h1>
      Home Page
    </h1>
    <Form
      config={formConfig}
      submit={addApiKey}
    />
    </>
  );
};

export const Home = connect(
  null,
  actionCreators,
)(ConnectedHome);
