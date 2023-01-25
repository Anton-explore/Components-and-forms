import styled from "styled-components";
import { Form, Field } from "formik";

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 20px;
  margin-top: 40px;
  padding: 20px 40px;
  width: 400px;
  border: 1px solid grey;
`
export const StyledErrorMessage = styled.div`
  color: red;
  font-weight: 600;
`

export const LabelWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  padding: 4px;
  text-align: left;
`
export const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 4px;
  text-align: center;
`

export const StyledLabel = styled.label`
  width: 40%;
`

export const StyledField = styled(Field)`
  &.error {
    border: 2px solid red;
  }
`

export const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`

export const SubmitButton = styled.button`
  background-color: #0078aa;
  color: #fff;
  height: 30px;
  width: 100px;
  border-radius: 8px;

  &:active,
  &:focus,
  &:hover {
    cursor: pointer;
  }

  &:disabled {
    cursor: pointer;
    background-color: lightblue;
    box-shadow: none;

    &:hover,
    &:focus {
      cursor: not-allowed;
    }
  }
`
export const ResetButton = styled.button`
  border-radius: 8px;
  height: 30px;
  width: 100px;
  &:active,
  &:focus,
  &:hover {
    cursor: pointer;
  }

  &:disabled {
    cursor: pointer;
    background-color: lightgrey;
    box-shadow: none;

    &:hover,
    &:focus {
      cursor: not-allowed;
    }
  }
`

export const StyledResult = styled.textarea`
  width: 100%;
  height: 200px;
  background-color: lightgrey;
  box-sizing: border-box;
`