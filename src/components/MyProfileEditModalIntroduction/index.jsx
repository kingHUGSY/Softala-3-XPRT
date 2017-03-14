import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Radium from 'radium';
import theme from '../../utils/theme';
import ChipInput from 'material-ui-chip-input';
import AutoComplete from 'material-ui/AutoComplete';

const styles = {
  link: {
    ':hover': {
      cursor:'pointer'
    }
  },
  noborder: {
    border: 0,
  },
  //Styling for editing Pen on left column
  editPen: {
    float: 'right',
    width: '24px',
    height: '24px'
  },

  transparentInput: {
    backgroundColor: theme.palette.transparentColor,
    border: '1px solid #555555',
    marginBottom: 10,
    color: theme.palette.textColor,
    width: '100%',
    maxWidth: 700,
    padding: '10px 0px 10px 10px',
    borderRadius: 5,
    fontFamily: ('Catamaran' : 'sans-serif'),
    fontSize: '16px',
    fontWeight: '300',
    '@media (max-width: 768px)': {
      maxWidth: 768,
      width: '100%',
      borderRadius: 0
    },
  },
  mobileHide: {
    '@media (max-width: 768px)':{
      display: 'none'
    }
  },
  contactForm: {
    paddingRight: 10
  },
  mainDivTextTitle: {
    color: theme.palette.primary1Color,
    fontSize: '16px',
    fontWeight: '300'
  },
  floatingLabelFocusStyle: {
    color: theme.palette.primary2Color
  },

  chipInput: {
    height: '40px',


  },
};
// Source of suggestions for autocomplete
// Hardcoded subjects here:
const subjectList = [
  'abc',
  '1',
  '2',
  '3',
  'fsfdsds',
  'asdaads',
  'fdsdfsgdf',
  '324345465568',
];

@Radium
export default class PrivacyModal extends React.Component {
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
    const actions = [
      <FlatButton
        label="Save"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <a style={styles.link} label="Dialog" onTouchTap={this.handleOpen}><img src={'../../img/edit.png'} style={styles.editPen}/></a>
        <Dialog
          actions={actions}
          modal={false}
          autoScrollBodyContent={true}
          open={this.state.open}
          onRequestClose={this.handleClose}
          titleStyle={styles.noborder}
          actionsContainerStyle={styles.noborder}
        >
          <div style={styles.contentCard}>
            <form onSubmit={this.handleSubmit}style={styles.contactForm}>
              <p style={styles.mainDivTextTitle}>SHORT INTRODUCTION:</p>
              <input style={styles.transparentInput} type="text" placeholder="Short introduction" />
              <p style={styles.mainDivTextTitle}>SUBJECTS:</p>

              <ChipInput
                onChange={(chips) => handleChange(chips)} // Chips inside textfield
                filter={AutoComplete.fuzzyFilter} // Autocomplete
                dataSource={subjectList} // Autocomplete (source of suggestions)
                maxSearchResults={5} // Autocomplete (number of suggestions shown)
                type="text" placeholder="List the subjects you could teach about (keywords)"
                style={{...styles.transparentInput, ...styles.chipInput }}
                underlineShow={false} // removes green underline

                />

              <p style={styles.mainDivTextTitle}>LECTURE DETAILS:</p>
              <input style={styles.transparentInput} type="text" placeholder="Lecture details"/>






              <br />
            </form>
          </div>

        </Dialog>
      </div>
    );
  }
}