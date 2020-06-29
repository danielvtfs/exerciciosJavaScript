import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 15px;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
  }

  input {
    height: 30px;
    padding-left: 7px;
    border: 1px solid #8e9497;
    border-radius: 3px;

    &:focus {
      border: 1px solid ${colors.primaryColor};
    }
  }
`;
