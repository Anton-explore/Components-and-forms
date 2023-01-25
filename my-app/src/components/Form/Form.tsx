import {
  StyledForm,
  SubmitButton,
  ResetButton,
  LabelWrapper,
  ButtonsWrapper,
  StyledLabel,
  StyledList,
  StyledResult,
  StyledErrorMessage,
  StyledField
} from './Form.styles'

import React from 'react';
import {
  Formik,
  FormikErrors
} from 'formik';

interface MyFormValues extends Record<string, string | boolean | []> {
  firstName: string;
  lastName: string,
  age: string,
  employed: boolean,
  favColor: string,
  sauces: [],
  stooge: string,
  notes: string
}


const validate = (values: MyFormValues ) => {
  const errors: FormikErrors<MyFormValues> = {};
  const regEx = /^[a-zA-Z\s]*$/;
  
  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (!regEx.test(values.firstName)) {
    errors.firstName = 'Must be only letters!'
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (!regEx.test(values.lastName)) {
    errors.lastName = 'Must be only letters!'
  }

  if (!values.age) {
    errors.age = 'Required';
  } else
  if (typeof +values.age !== 'number') {
    errors.age = 'Must be numbers'
  } else
  if (+values.age > 110 || +values.age < 20) {
    errors.age = 'Age must be between 20 and 110 years'
  }

  if (!values.employed) {
    errors.employed = 'Required';
  }

  return errors;
}

const showForm = (values: MyFormValues) => {
  return Object.keys(values).reduce((acc, key) => {
    if (typeof values[key] === 'string') {
      if (values[key] === '') {
        return acc
      }
    }
    if (Array.isArray(values[key])) {
      if (values[key].length === 0) {
        return acc;
      };
    }

    acc[key] = values[key as keyof MyFormValues];

    return acc;
  }, {} as MyFormValues);
}

const MyForm: React.FC<{}> = () => {
  const initValues: MyFormValues = {
    firstName: "",
    lastName: "",
    age: "",
    employed: false,
    favColor: "",
    sauces: [],
    stooge: "Larry",
    notes: ""
  }
  return (
    <Formik
      initialValues={initValues}
      validate={validate}
      
      onSubmit={(values, actions) => {
        alert(JSON.stringify(showForm(values), null, 4));
        actions.setSubmitting(false);
        actions.resetForm();
      }}
    >
      {({
        errors,
        touched,
        values,
        dirty,
        isSubmitting,
        handleReset,
        handleChange,
        handleBlur
      }) => (
        <StyledForm className="form">
          <LabelWrapper>
            <StyledLabel htmlFor="firstName">First Name</StyledLabel>
            <div className="validated">
              <StyledField
                name="firstName"
                type="text"
                placeholder="First Name"
                className={errors.firstName && touched.firstName ? "error" : ""}
              />
              {errors.firstName && touched.firstName ? (
                <StyledErrorMessage>{ errors.firstName }</StyledErrorMessage>
              ) : null}
            </div>
          </LabelWrapper>

          <LabelWrapper>
            <StyledLabel htmlFor="lastName">Last Name</StyledLabel>
            <div className="validated">
              <StyledField
                name="lastName"
                type="text"
                placeholder="Last Name"
                className={errors.lastName && touched.lastName ? "error" : ""}
              />
              {errors.lastName && touched.lastName ? (
                <StyledErrorMessage>{ errors.lastName }</StyledErrorMessage>
              ) : null}
            </div>
          </LabelWrapper>
                    
          <LabelWrapper>
            <StyledLabel htmlFor="age">Age</StyledLabel>
            <div className="validated">
              <StyledField
                name="age"
                type="number"
                min="20"
                max="110"
                placeholder="Age"
                className={errors.age && touched.age ? "error" : ""}
              />
              {errors.age && touched.age ? (
                <StyledErrorMessage>{ errors.age }</StyledErrorMessage>
              ) : null}
            </div>
          </LabelWrapper>

          <LabelWrapper>
            <StyledLabel htmlFor="employed">Employed</StyledLabel>
            <div className="validated">
              <StyledField type="checkbox" name="employed" />
              {errors.employed ? (
                <StyledErrorMessage>{ errors.employed }</StyledErrorMessage>
              ) : null}
            </div>
          </LabelWrapper>

          <LabelWrapper>
            <StyledLabel htmlFor="favoriteColor">Favorite Color</StyledLabel>
            <StyledField
              component="select"
              name="favColor"
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="" label="Select color" disabled/>
              <option value="Green" label="Green">Green</option>
              <option value="Blue" label="Blue"/>
              <option value="Yellow" label="Yellow"/>
            </StyledField>
          </LabelWrapper>

          <LabelWrapper>
            <StyledLabel htmlFor="sauces">Sauces</StyledLabel>

            <StyledList className="labels">
              <label>
                <StyledField
                  component="input"
                  type="checkbox"
                  name="sauces"
                  value="ketchup"
                />
                Ketchup
              </label>
              <label>
                <StyledField
                  component="input"
                  type="checkbox"
                  name="sauces"
                  value="mustard"
                />
                Mustard
              </label>
              <label>
                <StyledField
                  component="input"
                  type="checkbox"
                  name="sauces"
                  value="mayonnaise"
                />
                Mayonnaise
              </label>
              <label>
                <StyledField
                  component="input"
                  type="checkbox"
                  name="sauces"
                  value="guacamole"
                />
                Guacamole
              </label>
            </StyledList>
          </LabelWrapper>

          <LabelWrapper className="align-top">
            <StyledLabel htmlFor="stooge">Best Stooge</StyledLabel>
            <div role="group" aria-labelledby="radio-group">
              <label htmlFor="Larry">
                <StyledField type="radio" name="stooge" value="Larry" />
                Larry
              </label>

              <label htmlFor="Moe">
                <StyledField type="radio" name="stooge" value="Moe" />
                Moe
              </label>

              <label htmlFor="Curly">
                <StyledField type="radio" name="stooge" value="Curly" />
                Curly
              </label>
            </div>
          </LabelWrapper>

          <LabelWrapper className="align-top">
            <StyledLabel htmlFor="notes">Notes:</StyledLabel>
            <StyledField
              component="textarea"
              name="notes"
              maxLength="100"
              placeholder="Notes"
            />
          </LabelWrapper>

          <ButtonsWrapper className="controls">
            <SubmitButton
              type="submit"
              disabled={!dirty || isSubmitting}
            >Submit
            </SubmitButton>
            <ResetButton
              type="reset"
              onClick={handleReset}
              disabled={!dirty}
            >Reset
            </ResetButton>
          </ButtonsWrapper>

          {/* <StyledResult
            value={JSON.stringify(values, null, 4)}
            disabled
          /> */}

          <StyledResult
            value=
              {JSON.stringify(showForm(values),
                null, 4
              )}
            disabled
          />
        
        </StyledForm>
      )}
    </Formik>
  )
}


export default MyForm;


// const Form = (props) => {

//     return (
//         <StyledForm>
            
//         </StyledForm>
//     );
// }


// const INITIAL_STATE = {
//   firstName: "",
//   lastName: "",
//   age: "",
//   employed: false,
//   favColor: "",
//   sauces: [],
//   stooge: "Larry",
//   notes: ""
// };

// class Form extends React.Component {
//   state = { ...INITIAL_STATE };

//   handleChange = (evt: React.SyntheticEvent) => {
//     const { name, value, type, checked } = evt.target as HTMLInputElement;
//     this.setState({ [name]: type === "checkbox" ? checked : value });
//   };

//   handleSubmit = (evt: React.SyntheticEvent) => {
//     evt.preventDefault();
//     const { firstName, lastName, age } = this.state;
//     console.log(`Name: ${firstName}, Surname: ${lastName}, Age: ${age}`);
//     // this.props.onSubmit({ ...this.state });
//     // this.reset();
//   };

//   reset = (): void => {
//     this.setState({ ...INITIAL_STATE });
//   };

//   render() {
//     const { firstName, lastName, age, stooge, employed, favColor, notes, sauces } = this.state;

//     return (
//       <StyledForm
//         onSubmit={this.handleSubmit}
//       >
//         {/* <Formik
//             initialValues={{ 
//                 firstName: "",
//                 lastName: "",
//                 age: "",
//                 employed: false,
//                 favColor: "",
//                 sauces: [],
//                 stooge: "Larry",
//                 notes: "" 
//             }}
//             onSubmit={async (values) => {
//                 await new Promise((resolve) => setTimeout(resolve, 500));
//                 alert(JSON.stringify(values, null, 2));
//             }}
//         > */}
                
//         <LabelWrapper>
//           <LabelRight>First Name</LabelRight>
//           <input
//             type="text"
//             placeholder="First Name"
//             name="firstName"
//             value={firstName}
//             onChange={this.handleChange}
//           />
//         </LabelWrapper>
        
//         <LabelWrapper>
//           <LabelRight>Last Name</LabelRight>
//           <input
//             type="text"
//             placeholder="Last Name"
//             name="lastName"
//             value={lastName}
//             onChange={this.handleChange}
//           />        
//         </LabelWrapper>
        
//         <LabelWrapper>
//           <LabelRight>Age</LabelRight>
//           <input
//             type="text"
//             placeholder="Age"
//             name="age"
//             value={age}
//             onChange={this.handleChange}
//           />        
//         </LabelWrapper>
                
//         <LabelWrapper>
//           <LabelRight>Employed</LabelRight>
//           <input
//             type="checkbox"
//             name="employed"
//             checked={employed}
//             onChange={this.handleChange}
//           />        
//         </LabelWrapper>
        
//         <LabelWrapper>
//           <LabelRight>Favorite Color</LabelRight>
//           <select
//             name="favColor"
//             value={favColor}
//             onChange={this.handleChange}
//           >
//             <option value="" disabled>
//             </option>
//             <option value="Green">Green</option>
//             <option value="Blue">Blue</option>
//             <option value="Yellow">Yellow</option>
//           </select>
//         </LabelWrapper>

//         <LabelWrapper>
//           <LabelRight>Sauces</LabelRight>
//           <StyledList>
//             <li>
//               <input
//                 type="checkbox"
//                 name="sauces"
//                 checked={sauces[0]}
//                 onChange={this.handleChange}
//               />
//               <label>Ketchup</label>
//             </li>
//             <li>
//               <input
//                 type="checkbox"
//                 name="sauces"
//                 checked={sauces[1]}
//                 onChange={this.handleChange}
//               />
//               <label>Mustard</label>
//             </li>
//             <li>
//               <input
//                 type="checkbox"
//                 name="sauces"
//                 checked={sauces[2]}
//                 onChange={this.handleChange}
//               />
//               <label>Mayonnaise</label>
//             </li>
//             <li>
//               <input
//                 type="checkbox"
//                 name="sauces"
//                 checked={sauces[3]}
//                 onChange={this.handleChange}
//               />
//               <label>Guacamole</label>
//             </li>
//           </StyledList>
//         </LabelWrapper>

//         <LabelWrapper>
//           <LabelRight>Best Stooge</LabelRight>
//           <StyledList>
//             <li>
//               <input
//                 type="radio"
//                 checked={stooge === 'Larry'}
//                 name="stooge"
//                 value="Larry"
//                 onChange={this.handleChange}
//               />
//               <label>Larry</label>
//             </li>
//             <li>
//               <input
//                 type="radio"
//                 checked={stooge === 'Moe'}
//                 name="stooge"
//                 value="Moe"
//                 onChange={this.handleChange}
//               />
//               <label>Moe</label>
//             </li>
//             <li>
//               <input
//                 type="radio"
//                 checked={stooge === 'Curly'}
//                 name="stooge"
//                 value="Curly"
//                 onChange={this.handleChange}
//               />
//               <label>Curly</label>
//             </li>
//           </StyledList>
//         </LabelWrapper>

//         <LabelWrapper>
//           <LabelRight>Notes</LabelRight>
//           <textarea
//               value={notes}
//               placeholder="Note"
//               onChange={this.handleChange}
//           />
//         </LabelWrapper>

//         <LabelWrapper>
//           <SubmitButton type="submit" disabled={!employed} onClick={this.handleSubmit} >Submit</SubmitButton>
//           <ResetButton type="reset" onClick={this.reset}>Reset</ResetButton>
//         </LabelWrapper>

// <StyledResult
//   type="text"
//   value="
//     {JSON.stringify(
//       Object.keys(values).reduce((acc, key) => {
//         if (values[key] === '') {
//           return acc
//         };
//         if (Array.isArray(values[key]) && values[key].length === 0) {
//           return acc;
//         };
//         acc[key] = values[key];

//         return acc;
//       }, {}),
//       null, 4
//     )}"
// />
//       </StyledForm>
//     );
//   }
// }
