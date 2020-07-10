import styled from 'styled-components';
// Refactor into something more reusable
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