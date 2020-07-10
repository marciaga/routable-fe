import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Form } from '../components/form';
import { MainContent, CenteredContent } from '../components/styles';
import { addUserData } from '../redux/actions/meta';

const actionCreators = {
  addUserData,
};

const formConfig = [{ 
  component: 'TextInput',
  type: 'text',
  name: 'textInputUsername',
  label: 'Enter your Username',
}, {
  component: 'TextInput',
  type: 'text',
  name: 'textInputApiKey',
  label: 'Enter your API key',
}];

const ConnectedHome = ({ addUserData, history }) => {
  const handleFormSubmit = (params) => {
    addUserData(params);
    history.push('/prioritizer');
  };

  return (
    <MainContent>
      <CenteredContent>
        <Form
          config={formConfig}
          submit={handleFormSubmit}
        />
      </CenteredContent>
    </MainContent>
  );
};

export const Home = withRouter(connect(
  null,
  actionCreators,
)(ConnectedHome));
