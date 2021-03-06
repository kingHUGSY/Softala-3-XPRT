import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Radium from 'radium';
import Checkbox from 'material-ui/Checkbox';
import OccupationFields from '../RegisterForm/OccupationFields';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import MyTextField from '../MyTextField';
import { connect } from 'react-redux';
import styles from './editModalStyles';

const formdata = {
  companyName: 'Sportmrt',
  title: 'CEO',
  officeAddress: ''
}

const required = value => value ? undefined : 'Required'

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

@Radium
export default class EditCompanyDetailsModal extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {

    return (
      <div>
        <a style={styles.link} label="Dialog" onTouchTap={this.handleOpen}><img src={'../../img/edit.png'} style={styles.editPen}/></a>
        <Dialog
          modal={false}
          autoScrollBodyContent={true}
          open={this.state.open}
          onRequestClose={this.handleClose}
          titleStyle={styles.noborder}
          actionsContainerStyle={styles.noborder}>

          <form onSubmit={this.props.handleSubmit}>
            <div>
              <Field
                name='company'
                label='Company name'
                component={renderTextField}
                id='companyName'
                floatingLabelFixed={true}/>

              <Field
                name='title'
                label='Title'
                component={renderTextField}
                id='title'
                floatingLabelFixed={true}/>

              <Field
                name='officeVisit'
                id='officeVisitPossible'
                component={renderCheckbox}
                label='Office visit possible'
              />

              <p>Check this box if you agree that teachers can come to your office with
                  a group of students</p>

              {this.props.officeVisitPossible &&
              <Field
                name='address'
                label='Office address'
                component={renderTextField}
                id='officeAddress'
                floatingLabelFixed={true}/>
              }
              </div>
              <FlatButton
                type="submit"
                label="Save"
                primary={true}
                style={styles.button}
              />
              <FlatButton
                type="button"
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
                style={styles.button}
              />
            </form>

        </Dialog>
      </div>
    );
  }
}

EditCompanyDetailsModal = reduxForm({
  form: 'companyDetailsForm',
  destroyOnUnmount: false,
  enableReinitialize: true,
})(EditCompanyDetailsModal)

EditCompanyDetailsModal = connect(
  (state, ownProps) => ({
    initialValues: ownProps.expert,
  }),
)(EditCompanyDetailsModal)

const selector = formValueSelector('companyDetailsForm')
EditCompanyDetailsModal = connect(
  state => {
    const officeVisitPossible = selector(state, 'officeVisit')
    return {
      officeVisitPossible,
    }
  }
)(EditCompanyDetailsModal)
