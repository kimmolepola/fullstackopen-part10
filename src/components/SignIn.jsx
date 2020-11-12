import React from 'react';
import { View, Button } from 'react-native';
import FormikTextInput from './FormikTextInput';
import {Formik} from 'formik';

const initialValues = {
  username: '',
  password: ''
};

const onSubmit = (values) => {
  console.log(values);
};

const SignInForm = ({onSubmit}) => (
  <View>
    <FormikTextInput name="username" placeholder="Username"/>
    <FormikTextInput name="password" placeholder="Password" secureTextEntry/>
    <Button
      onPress={onSubmit}
      title="Submit"
      color="#841584"
      accessibilityLabel="Submit username and password"
    />
  </View>
);

const SignIn = () => (
  <Formik initialValues={initialValues} onSubmit={onSubmit}>
    {({handleSubmit}) => <SignInForm onSubmit={handleSubmit}/>}
  </Formik>
);

export default SignIn;