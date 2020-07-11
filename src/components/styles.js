import styled from 'styled-components';

// TODO - One file won't scale of course, but this suffices for now.

export const MainContent = styled.div`
  box-sizing: border-box;
  padding: 15px;
`;

export const CenteredContent = styled.div`
  display: flex;
  justify-content: center;
`;

export const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 15px;
  text-align: center;

  input {
    border: 0;

    &:focus {
      outline: none;
    }
  }
`;

export const FormFieldContainer = styled.div`
  display: flex;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin: 10px 0;
  box-sizing: border-box;
  padding: 5px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  box-sizing: border-box;
  padding: 5px;
`;

export const ConditionalView = styled.div`
  visibility: ${props => props.show ? 'visible' : 'hidden'};
`;
