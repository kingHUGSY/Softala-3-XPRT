import { Component } from 'react';
import Radium from 'radium';
import {
  Card,
  CardText,
  CardTitle,
  CardMedia,
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import theme from '../../utils/theme';
import HomeCard from '../../components/HomeCard';
import LoginModal from '../../components/LoginModal';
import RegisterModal from '../../components/RegisterModal';

import RaisedButton from 'material-ui/RaisedButton';
import XprtLogo from '../../components/XprtLogo';
import HundredLogo from '../../components/HundredLogo';
import Footer from '../Footer';

const marginRight = '10em'

const styles = {

  wrapper: {
    color: theme.palette.textColor,
  },
  teacherExpertWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    '@media (max-width: 768px)': {
      flexDirection: 'column-reverse'
    },
  },
  secondWrapper: {
    height: '75vmin',
    display: 'flex',
    flexDirection: 'column',
  },
  secondInnerWrapper: {
    background: '#cccccc',
    height: '70vmin',
  },
  headerWrapper:{
    display:'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
      '@media (max-width: 768px)':{
        display: 'none'
      }
  },
  landingWrapper:{
    minHeight: '100vh',
    paddingLeft:'4%',
    paddingRight:'4%',
    marginTop:'200px',
    '@media (max-width: 768px)': {
      marginTop: 10
    },
  },
  smallHeader: {
    color: theme.palette.primary1Color,
        letterSpacing: '4px',
  },
  bigHeader: {
    color: theme.palette.primary1Color,
    fontWeight: 300,
    '@media (max-width: 768px)': {
          fontSize: 24,
    },
  },
  empty:{
    flex: 3,
    flexBasis: '200px',
    '@media (max-width: 768px)': {
      display: 'none'
    },
  },
  bigText: {
    flex: 4,
    fontSize: '18px',
    fontWeight: '300',
    flexBasis: '200px',
    marginLeft: '3em',
    paddingLeft: '3em',
    '@media (max-width: 768px)': {
      margin: 0,
      padding: 0,
      textAlign: 'center'
    },
  },
  leftSpace: {
    flex: 3,
    '@media (max-width: 768px)': {
      display: 'none'
    },
  },
  rightSpace: {
    flex:3,
    '@media (max-width: 768px)': {
      display: 'none'
    },
  },
  leftText: {
    fontSize: '18px',
    fontWeight: '300',
    textAlign: 'right',
    flex:3,
    flexBasis: '200px',
    '@media (max-width: 768px)':{
      textAlign: 'center',
      fontSize: '16px',
    },
  },
  rightText: {
    fontSize: '18px',
    fontWeight: '300',
    borderLeft: '1px solid rgba(204, 204, 204, .34)',
    borderBottom: 0,
    textAlign: 'left',
    flex:4,
    marginLeft: '3em',
    paddingLeft: '3em',
    flexBasis: '200px',
    '@media (max-width: 768px)':{
      textAlign: 'center',
      margin: 0,
      padding: 0,
      borderLeft: 0,
      borderBottom: '1px solid rgba(204, 204, 204, .34)',
      display: 'flex',
      flexDirection: 'column-reverse',
      flexBasis: '0px',
      fontSize: '16px',
    },
  },
  buttonStyle: {
    border: '1px solid rgba(204, 204, 204, .34)',
    padding: '15px',
    borderRadius: '20px',
    lineHeight: '0.4em',
    marginTop: '1em'
  },
  mobileHide: {
    '@media (max-width: 768px)':{
      display: 'none'
    }
  },
  video: {
    '@media (min-width: 768px)':{
      order: '-1',
    }
  },
  videoSize: {
    width: '100%',
    height: 315
  },
  mobileShow: {
    '@media (min-width: 768px)':{
      display: 'none'
    }
  },
};

@Radium
class About extends Component {
  render() {

    return(
      <div style={styles.wrapper}>
        <div style={styles.landingWrapper}>

          <div style={styles.headerWrapper}>
            <div style={styles.leftSpace}></div>
            <div style={styles.empty}></div>
            <div style={styles.bigText}>
              <h1 style={styles.bigHeader}>About</h1>
            </div>
            <div style={styles.rightSpace}></div>
          </div>

          <div style={styles.teacherExpertWrapper}>
            <div style={styles.leftSpace}></div>
            <div style={styles.leftText}>
              <p style={styles.smallHeader}>TEACHERS</p>
              <p>Download and install the app to browse and view the experts profile. Easily inite experts to your classroom.</p>
              <FlatButton label="DOWNLOAD FOR IPHONE" style={styles.buttonStyle}/><br />
              <FlatButton label="DOWNLOAD FOR ANDROID" style={styles.buttonStyle}/>

              <p style={styles.smallHeader}>EXPERTS</p>
              <p>Sign up as an expert and  to share your skills for the benefit of the future generation.</p>
              <RegisterModal />
              <LoginModal /><br />
            </div>
            <div style={styles.rightText}>
              <p>
                Xprt connects teachers and experts for the benefit on Finnish school children. Arranging a visiting lecture from a professional expert has become easier
              </p>
              <p style={styles.mobileHide}>
                See Xprt in action.
              </p>
              <div style={styles.mobileShow}>
                <h1 style={styles.bigHeader}>About</h1>
              </div>
              <div style={styles.video}>
                <iframe style={styles.videoSize} src="https://www.youtube.com/embed/niGGKthoCNQ" frameborder="0" allowfullscreen></iframe>
              </div>
            </div>
            <div style={styles.rightSpace}></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
