import React, { Component } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import MyTextField from '../MyTextField';
import Checkbox from 'material-ui/Checkbox';
import MenuItem from 'material-ui/MenuItem';
import theme from '../../utils/theme';
import DialogButtons from '../DialogButtons';


const styles = {
  floatingLabelFocusStyle: {
    color: theme.palette.primary2Color
  },
  underlineStyle: {
    color: theme.palette.primary2Color,
    borderColor: theme.palette.primary2Color,
  },
}

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <MyTextField
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
)

const renderCheckbox = ({ input, label }) => (
  <Checkbox label={label}
    checked={input.value ? true : false}
    onCheck={input.onChange}
  />
)



class OccupationFields extends Component {

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
          <Field
            name='companyName'
            label='Company name'
            component={renderTextField}
            id='companyName'/>

          <Field
            name='title'
            label='Title'
            component={renderTextField}
            id='title'/>

          <Field
            name='officeVisitPossible'
            id='officeVisitPossible'
            component={renderCheckbox}
            label='Office visit possible'/>

          <p>Check this box if you agree that teachers can come to your office with
              a group of students</p>

          {this.props.officeVisitPossible &&
          <Field
            name='officeAddress'
            label='Office address'
            component={renderTextField}
            id='officeAddress'/>
          }

        <DialogButtons stepIndex={this.props.stepIndex} handlePrev={this.props.handlePrev} handleClose={this.props.handleClose} />
      </form>
    )
  }
}

OccupationFields = reduxForm({
  form: 'registerForm',
  destroyOnUnmount: false,
})(OccupationFields)

const selector = formValueSelector('registerForm')
OccupationFields = connect(
  state => {
    // can select values individually
    const officeVisitPossible = selector(state, 'officeVisitPossible')
    return {
      officeVisitPossible,
    }
  }
)(OccupationFields)

export default OccupationFields;