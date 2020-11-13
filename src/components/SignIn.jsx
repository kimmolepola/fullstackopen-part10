import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import FormikTextInput from './FormikTextInput';
import {Formik} from 'formik';
import theme from '../theme';
import Text from './Text';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required"),
  password: yup
    .string()
    .required("Password is required"),
});

const initialValues = {
  username: '',
  password: ''
};

const onSubmit = (values) => {
  console.log(values);
};

const SignInForm = ({onSubmit}) => (
  <View style={styles.flexContainer}>
    <FormikTextInput name="username" placeholder="Username"/>
    <View style={{margin: theme.margin.half}}/>
    <FormikTextInput name="password" placeholder="Password" secureTextEntry/>
    <View style={{margin: theme.margin.half}}/>
    <TouchableOpacity style={styles.button} onPress={onSubmit}>
      <Text style={styles.buttonText}>Sign in</Text>
    </TouchableOpacity>
  </View>
);

const SignIn = () => (
  <Formik 
    initialValues={initialValues} 
    onSubmit={onSubmit}
    validationSchema={validationSchema}
  >
    {({handleSubmit}) => <SignInForm onSubmit={handleSubmit}/>}
  </Formik>
);

const styles = StyleSheet.create({
  flexContainer: {
    backgroundColor: 'white',
    flexDirection: 'column',
    display: 'flex',
    justifyContent: 'flex-end',
    padding: theme.padding.normal,
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: theme.padding.normal,
    borderRadius: theme.borderRadius.normal,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    marginTop: 5, 
    marginBottom: 5, 
    color: theme.colors.subheading, 
    fontWeight: 'bold',
  }
});

export default SignIn;