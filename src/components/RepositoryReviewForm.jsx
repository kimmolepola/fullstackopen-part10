import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import useCreateReview from '../hooks/useCreateReview';
import { useHistory } from 'react-router-native';
import * as yup from 'yup';
import { FormikTextInput } from './FormikTextInput';
import theme from '../theme';
import Text from './Text';

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

const validationSchema = yup.object().shape({
  ownerName: yup
    .string()
    .required("Repository owner name is required"),
  repositoryName: yup
    .string()
    .required("Repository name is required"),
  rating: yup
    .number()
    .required("Rating is required"),
  text: yup
    .string()
});
  
const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: '',
};

const ReviewForm = ({ onSubmit }) => (
  <View style={styles.flexContainer}>
    <FormikTextInput name="ownerName" placeholder="Repository owner name"/>
    <View style={{ margin: theme.margin.half }}/>
    <FormikTextInput name="repositoryName" placeholder="Repository name"/>
    <View style={{ margin: theme.margin.half }}/>
    <FormikTextInput name="rating" placeholder="Rating between 0 and 100"/>
    <View style={{ margin: theme.margin.half }}/>
    <FormikTextInput name="text" placeholder="Review"/>
    <View style={{ margin: theme.margin.half }}/>
    <TouchableOpacity testID="submitButton" style={styles.button} onPress={onSubmit}>
      <Text style={styles.buttonText}>Create a review</Text>
    </TouchableOpacity>
  </View>
);

const RepositoryReviewForm = () => {
  const [review, result] = useCreateReview();  
  const history = useHistory();
  
  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, text } = values;
  
    try {
      await review({ ownerName, repositoryName, rating, text });
      if (result != undefined){
        history.push("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Formik 
      initialValues={initialValues} 
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit}/>}
    </Formik>
  );
};

export default RepositoryReviewForm;
