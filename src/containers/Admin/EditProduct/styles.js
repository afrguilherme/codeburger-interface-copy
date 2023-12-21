import styled from 'styled-components'

import { Button } from '../../../components/Button'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 350px;
  height: max-content;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(86, 86, 86, 1);
    border-radius: 10px;
    width: 400px;
    height: 100%;
    padding: 30px;
  }

  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  .css-13cymwt-control,
  .css-t3ipsp-control {
    width: 100%;
    min-width: 290px;
    min-height: 40px;
    margin-top: 25px;
  }
`

export const Input = styled.input`
  width: 100%;
  min-height: 40px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  margin-top: 25px;
  font-weight: 400;
  line-height: 20px;
  padding-left: 20px;
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.1);
`

export const ButtonStyles = styled(Button)`
  width: 100%;
  margin-top: 25px;
  min-height: 40px;
`

export const LabelUpload = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px dashed #ffffff;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  margin-top: 25px;
  width: 100%;
  min-width: 290px;
  color: #ffffff;

  input {
    opacity: 0;
    width: 1px;
  }
`

export const ContainerInput = styled.div`
  margin-top: 25px;
  display: flex;
  align-items: baseline;
  gap: 10px;

  input {
    width: 15px;
    height: 15px;
    cursor: pointer;
  }

  p {
    color: #ffffff;
  }
`
