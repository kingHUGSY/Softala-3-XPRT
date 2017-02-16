import { Component } from 'react';
import theme from '../../utils/theme';
import { Card, CardHeader, CardText, CardActions, CardTitle, CardMedia, } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';

import ChipInput from 'material-ui-chip-input';
import AutoComplete from 'material-ui/AutoComplete';

const styles = {
  firstWrapper: {
    paddingTop: '50px',
    paddingLeft: '50px',
    height: '50vmin',
    color: theme.palette.textColor
  },
  secondWrapper: {
    background: 'rgba(38,38,38,1)',
    display: 'flex',
    flexDirection: 'row',
    height: '100vmin',
    color: theme.palette.textColor
  },
  leftDiv: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    height: '50vmin',
    marginTop:'-10%',
  },
  rightDiv: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    height: '50vmin',
    marginTop:'-10%',
  },
  contentCard: {
    width: '90%',
    alignSelf: 'center',
    background: 'rgba(68,68,68,1)',
    marginBottom: '2em',
    boxShadow: '0px 2px 8px 1px rgba(0,0,0,0.16), 0 2px 8px 1px rgba(0,0,0,0.23)'
  },
  profilePicture: {
    borderRadius: '50%',
    width: '150px',
    height: '150px'
  },
  mainDivTitle: {
    paddingLeft: '2em',
    fontSize: '18px',
    color: theme.palette.textColor,
  },
  mainDivTextTitle: {
    color: theme.palette.primary1Color,
    fontSize: '18px',
    fontWeight: '300',
    paddingLeft: '1em',
  },
  mainDivText: {
    color: theme.palette.textColor,
    fontSize: '18px',
    fontWeight: '300',
    paddingLeft: '1em',
  },
  divTitle: {
    paddingLeft: '20px',
  },
  buttonStyle: {
    border: '1px solid #555555',
    padding: '15px',
    borderRadius: '20px',
    lineHeight: '0.4em',
    marginTop: '1em'
  },
  buttonGold: {
    color: theme.palette.primary2Color,
  },
  greenHeader: {
    color: theme.palette.primary1Color,
    fontSize: '16pt',
  },
  whiteHeader: {
    fontSize: '16pt',
  },
  alignRight: {
    textAlign: 'right',

  },
  p: {
    fontSize: '14pt',
  },
  colorIndicatorYellow: {
    borderTop: 'solid',
    color: theme.palette.primary2Color,
  },
  colorIndicatorGreen: {
    borderTop: 'solid',
    color: theme.palette.primary1Color,
  },
};

class MyProfile extends Component {

  render() {

    return (
      <div>
        <div style={styles.firstWrapper}>
          <img src={'../../img/placeholder_profilepicture.png'} style={styles.profilePicture}/>
        </div>

        <div style={styles.secondWrapper}>
          <div style={styles.leftDiv}>
            <p style={styles.mainDivTitle}>MY PROFILE</p>
            <div style={styles.contentCard}>
              <p style={styles.mainDivTextTitle}>NAME:</p>
              <p style={styles.mainDivText}>Esko Esimerkki</p>

              <p style={styles.mainDivTextTitle}>PHONE:</p>
              <p style={styles.mainDivText}>+358 45 23423434</p>

              <p style={styles.mainDivTextTitle}>E-MAIL:</p>
              <p style={styles.mainDivText}>esko.esimerkki@example.com</p>

              <p style={styles.mainDivTextTitle}>SUPPORTED LOCATIONS:</p>
              <p style={styles.mainDivText}>Helsinki, Espoo</p>

            </div>
            <div style={styles.contentCard}>
              <p style={styles.mainDivTextTitle}>COMPANY NAME:</p>
              <p style={styles.mainDivText}>Sportmrt</p>

              <p style={styles.mainDivTextTitle}>JOB TITLE:</p>
              <p style={styles.mainDivText}>CEO</p>

            </div>
          </div>
          <div style={styles.rightDiv}>
              <h3 style={styles.divTitle}>INVITATIONS</h3>





              <Card style={{...styles.contentCard, ...styles.colorIndicatorYellow}}>
                <CardHeader title="Etunimi Sukunimi" subtitle="Sähköposti(at)email.com"
                 avatar="http://www.planwallpaper.com/static/images/desktop-year-of-the-tiger-images-wallpaper.jpg"
                 actAsExpander={true}
                 showExpandableButton={true}
               />
          <CardText expandable={true}>
            <p style={styles.greenHeader}>SCHOOL:</p>
            <p style={styles.whiteHeader}>Name of school:</p>
            <p>Sivustontäytettä, höpinää, lorem ipsun :3 Sivustontäytettä, höpinää, lorem ipsun :3</p>
            <p style={styles.whiteHeader}>Subjects:</p>
            <p>Sivustontäytettä, höpinää, lorem ipsun :3 Sivustontäytettä, höpinää, lorem ipsun :3</p>
            <p style={styles.whiteHeader}>Educational stage:</p>
            <p>Sivustontäytettä, höpinää, lorem ipsun :3 Sivustontäytettä, höpinää, lorem ipsun :3</p>

            <p style={styles.greenHeader}>LECTURE:</p>
            <p style={styles.whiteHeader}>Theme of the lecture:</p>
            <p>Sivustontäytettä, höpinää, lorem ipsun :3 Sivustontäytettä, höpinää, lorem ipsun :3</p>
            <p style={styles.whiteHeader}>Date of lecture: (option 1):</p>
            <p>Sivustontäytettä, höpinää, lorem ipsun :3 Sivustontäytettä, höpinää, lorem ipsun :3</p>
            <p style={styles.whiteHeader}>Date of lecture: (option 2):</p>
            <p>Sivustontäytettä, höpinää, lorem ipsun :3 Sivustontäytettä, höpinää, lorem ipsun :3</p>
            <p style={styles.whiteHeader}>Location:</p>
            <p>Sivustontäytettä, höpinää, lorem ipsun :3 Sivustontäytettä, höpinää, lorem ipsun :3</p>
            <p style={styles.whiteHeader}>Short description of the lecture:</p>
            <p>Sivustontäytettä, höpinää, lorem ipsun :3 Sivustontäytettä, höpinää, lorem ipsun :3</p>

            <div style={styles.alignRight}>
          <FlatButton expandable={true} label="DECLINE" style={{...styles.buttonStyle}}/>
          <FlatButton expandable={true} label="ACCEPT" style={{...styles.buttonStyle, ...styles.buttonGold}}/>
</div>


            </CardText>
        </Card>

        <h3 style={styles.divTitle}>UPCOMING:</h3>
          <Card style={{...styles.contentCard, ...styles.colorIndicatorGreen}}>
          <CardHeader title="Etunimi Sukunimi" subtitle="Sähköposti(at)email.com"
           avatar="http://www.planwallpaper.com/static/images/desktop-year-of-the-tiger-images-wallpaper.jpg"
           actAsExpander={true}
           showExpandableButton={true}
         />
        <CardText expandable={true}>
          <p style={styles.greenHeader}>SCHOOL:</p>
          <p style={styles.whiteHeader}>Name of school:</p>
          <p>Hyväksytyn keissin infot</p>
        <div style={styles.alignRight}>
      <FlatButton expandable={true} label="DECLINE" style={{...styles.buttonStyle}}/>
      <FlatButton expandable={true} label="ACCEPT" style={{...styles.buttonStyle, ...styles.buttonGold}}/>
</div>
</CardText>
</Card>



        <h3 style={styles.divTitle}>DECLINED:</h3>
          <Card style={styles.contentCard}>
          <CardHeader title="Etunimi Sukunimi" subtitle="Sähköposti(at)email.com"
           avatar="http://www.planwallpaper.com/static/images/desktop-year-of-the-tiger-images-wallpaper.jpg"
           actAsExpander={true}
           showExpandableButton={true}
         />
        <CardText expandable={true}>
          <p style={styles.greenHeader}>SCHOOL:</p>
          <p style={styles.whiteHeader}>Name of school:</p>
          <p>Hylätyn keissin infot</p>
        <div style={styles.alignRight}>
      <FlatButton expandable={true} label="DECLINE" style={{...styles.buttonStyle}}/>
      <FlatButton expandable={true} label="ACCEPT" style={{...styles.buttonStyle, ...styles.buttonGold}}/>
</div>
</CardText>
</Card>
</div>
</div>
</div>
    );
  }
}
export default MyProfile;
