import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import FormikTextInput from './FormikTextInput';
import {Formik} from 'formik';
import Constants from 'expo-constants';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  flexContainer: {
    flexDirection: 'column',
    display: 'flex',
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    paddingTop: theme.padding.normal,
  },
  inputField: {
    paddingTop: theme.padding.normal,
    paddingLeft: theme.padding.normal,
    paddingBottom: theme.padding.normal,
    paddingRight: theme.padding.normal,
    borderColor: theme.colors.greyBorder,
    borderWidth: 1,
    borderRadius: theme.borderRadius.normal,
    marginLeft: theme.margin.normal,
    marginRight: theme.margin.normal,
    marginBottom: theme.margin.normal,
  },
  button: {
    backgroundColor: theme.colors.primary,
    paddingTop: theme.padding.normal,
    paddingLeft: theme.padding.normal,
    paddingBottom: theme.padding.normal,
    paddingRight: theme.padding.normal,
    marginLeft: theme.margin.normal,
    marginRight: theme.margin.normal,
    marginBottom: theme.margin.normal,
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

const initialValues = {
  username: '',
  password: ''
};

const onSubmit = (values) => {
  console.log(values);
};

const SignInForm = ({onSubmit}) => (
  <View style={styles.flexContainer}>
    <View style={styles.inputField}>
      <FormikTextInput name="username" placeholder="Username"/>
    </View>
    <View style={styles.inputField}>
      <FormikTextInput name="password" placeholder="Password" secureTextEntry/>
    </View>
    <TouchableOpacity style={styles.button} onPress={onSubmit}>
      <Text style={styles.buttonText}>Sign in</Text>
    </TouchableOpacity>
  </View>
);

const SignIn = () => (
  <Formik initialValues={initialValues} onSubmit={onSubmit}>
    {({handleSubmit}) => <SignInForm onSubmit={handleSubmit}/>}
  </Formik>
);

export default SignIn;