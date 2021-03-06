import {Component} from 'react';
import Radium from 'radium';
import {
  Card,
  CardHeader,
  CardText,
} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import ChipInput from 'material-ui-chip-input';
import AutoComplete from 'material-ui/AutoComplete';
import Checkbox from 'material-ui/Checkbox';
import Chip from 'material-ui/Chip';
import CircularProgress from 'material-ui/CircularProgress';
import isArray from 'lodash/isArray';

import EditCompanyDetailsModal from '../../components/MyProfileEditModals/EditCompanyDetailsModal';
import EditBasicInfoModal from '../../components/MyProfileEditModals/EditBasicInfoModal';
import EditExpertDetailsModal from '../../components/MyProfileEditModals/EditExpertDetailsModal';
import EditPictureModal from '../../components/MyProfileEditModals/EditPictureModal';
import Footer from '../Footer';
import styles from './myProfileStyles';

function LocationsList(props) {
  const locations = props.locations;
  if (!locations) {
    return null;
  }

  const length = locations.length;
  const list = locations.map((location, i) => {
    if (length === i + 1) {
      return <span>{location}</span>;
    } else {
      return <span>{location}, </span>;
    }
  });
  return (
    <p style={styles.mainDivText}>{list}</p>
  );
}

function SubjectChips(props) {
  const subjects = props.subjects;
  if (!subjects) {
    return null;
  }
  if (!isArray(subjects)) {
    return subjects;
  }

  const list = subjects.map((subject) =>
  <Chip style={styles.chip}>{subject}</Chip>
  );
  return (
    <div style={styles.wrapper}>{list}</div>
  );
}

function SubjectList(props){
  const subjects = props.subjects;
  console.log(subjects);
  if (!subjects) {
    return null;
  }
  if (!isArray(subjects)) {
    return <span>{subjects}</span>;
  }

  const length = subjects.length;
  const list = subjects.map((subjects, i) => {
    if (length === i+1) {
      return <span>{subjects}</span>
    } else {
      return <span>{subjects}, </span>
    }
  });
  return (
    <span>{list}</span>
  )
}

function OfficeVisit(props){
    if (!props.address) {
      return (
          <Checkbox label="Office visit possible" checked={false} disabled={true} style={styles.checkbox}/>
      );
    } else {
      return (
        <div>
          <p style={styles.mainDivTextTitle}>OFFICE ADDRESS:</p>
          <p style={styles.mainDivText}>{props.address}</p>
          <p><Checkbox label="Office visit possible" checked={true} disabled={true} style={styles.checkbox}/></p>
        </div>
      );
    }
}

//makes dates be in format dd.mm.yyyy
function DateFormat(props) {
  let date = props.date;
  let day = date.slice(8,10);
  let month = date.slice(5,7);
  let year = date.slice(0, 4);
  return (
    <span>{day}.{month}.{year}</span>
    );
}

@Radium
export default class MyProfile extends Component {
  componentDidMount() {
    this.props.refresh();
  };

  handleInvite = (id, status) => {
    this.props.editInvitation(id, status, () => {
      this.props.refresh();
    });
  };


  handleEdit = (values) => {
    this.props.editProfile(values, () => {
      this.props.refresh();
    });
  }

  render() {

    let expert = this.props.profile.data;
    let loading = this.props.profile.loading;
    let lectures = this.props.lectures.data;

    if (!expert || loading) {
      return <div style={{
        textAlign: 'left',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '200px',
      }}>
        <CircularProgress />
      </div>;
    }

    let invitations = lectures.filter((lecture) => {
      const status = lecture.status.toLowerCase();

      return status === 'pending';
    });

    let accepted = lectures.filter((lecture) => {
      const status = lecture.status.toLowerCase();

      return status === 'accepted';
    });

    let declined = lectures.filter((lecture) => {
      const status = lecture.status.toLowerCase();

      return status === 'rejected';
    });

    invitations = invitations.map((lecture) => (
      <Card style={{
        ...styles.contentCardRight,
          /*
            The next style attribute creates the yellow line
            at the top of the contentCard
          */
        ...styles.colorIndicatorYellow
      }}>
        <CardHeader title={lecture.title} subtitle={lecture.email} titleStyle={{
          ...styles.titleStyle
        }} subtitleStyle={{
          ...styles.subtitleStyle
        }} avatar={<Avatar src='../../img/placeholder_profilepicture.png' size={60} style={styles.avatarStyle} />} actAsExpander={true} showExpandableButton={true}/>
        <CardText expandable={true}>
          <p style={styles.mainDivTextTitleSchool}>SCHOOL:</p>
          <p style={styles.mainDivTextBold}>Teacher:</p>
          <p style={styles.mainDivText}>{lecture.name}</p>
          <p style={styles.mainDivTextBold}>School name:</p>
          <p style={styles.mainDivText}>{lecture.school}</p>
          <p style={styles.mainDivTextBold}>Subjects:</p>
          <p style={styles.mainDivText}><SubjectList subjects={lecture.subjects}/></p>
          <p style={styles.mainDivTextBold}>Educational stage:</p>
          <p style={styles.mainDivText}>{lecture.educationalstage}</p>
          <p style={styles.mainDivTextTitleLecture}>LECTURE:</p>
          <p style={styles.mainDivTextBold}>Theme of the lecture:</p>
          <p style={styles.mainDivText}>{lecture.lecturetheme}</p>
          <p style={styles.mainDivTextBold}>Date of lecture: (option 1):</p>
          <p style={styles.mainDivText}><DateFormat date={lecture.dateOption1}/></p>
          <p style={styles.mainDivTextBold}>Date of lecture: (option 2):</p>
          <p style={styles.mainDivText}><DateFormat date={lecture.dateOption2}/></p>
          <p style={styles.mainDivTextBold}>Location:</p>
          <p style={styles.mainDivText}>{lecture.location}</p>
          <p style={styles.mainDivTextBold}>Short description of the lecture:</p>
          <p style={styles.mainDivText}>{lecture.description}</p>
          <div style={styles.ButtonAlignRight}>
            <FlatButton onTouchTap={() => this.handleInvite(lecture.id, 'rejected')} expandable={true} label="DECLINE" style={{
              ...styles.buttonStyle
            }}/>
            <FlatButton onTouchTap={() => this.handleInvite(lecture.id, 'accepted')} expandable={true} label="ACCEPT" style={{
              ...styles.buttonStyle,
              ...styles.buttonGold
            }}/>
          </div>
        </CardText>
      </Card>
    ));

    accepted = accepted.map((lecture) => (
      <Card style={{
        ...styles.contentCardRight,
        ...styles.colorIndicatorGreen
      }}>
        <CardHeader title={lecture.title} subtitle={lecture.lecturetheme} titleStyle={{
          ...styles.titleStyle
        }} subtitleStyle={{
          ...styles.subtitleStyle
        }} avatar={<Avatar src='../../img/placeholder_profilepicture.png' size={60} style={styles.avatarStyle} />} actAsExpander={true} showExpandableButton={true}/>
        <CardText expandable={true}>
          <p style={styles.mainDivTextTitleSchool}>SCHOOL:</p>
          <p style={styles.mainDivTextBold}>Teacher:</p>
          <p style={styles.mainDivText}>{lecture.name} ({lecture.email})</p>
          <p style={styles.mainDivTextBold}>School name:</p>
          <p style={styles.mainDivText}>{lecture.school}</p>
          <p style={styles.mainDivTextBold}>Subjects:</p>
          <p style={styles.mainDivText}><SubjectList subjects={lecture.subjects}/></p>
          <p style={styles.mainDivTextBold}>Educational stage:</p>
          <p style={styles.mainDivText}>{lecture.educationalstage}</p>
          <p style={styles.mainDivTextTitleLecture}>LECTURE:</p>
          <p style={styles.mainDivTextBold}>Theme of the lecture:</p>
          <p style={styles.mainDivText}>{lecture.lecturetheme}</p>
          <p style={styles.mainDivTextBold}>Date of lecture: (option 1):</p>
          <p style={styles.mainDivText}><DateFormat date={lecture.dateOption1}/></p>
          <p style={styles.mainDivTextBold}>Date of lecture: (option 2):</p>
          <p style={styles.mainDivText}><DateFormat date={lecture.dateOption2}/></p>
          <p style={styles.mainDivTextBold}>Location:</p>
          <p style={styles.mainDivText}>{lecture.location}</p>
          <p style={styles.mainDivTextBold}>Short description of the lecture:</p>
          <p style={styles.mainDivText}>{lecture.description}</p>

        </CardText>
      </Card>
    ));

    declined = declined.map((lecture) => (
      <Card style={styles.contentCardRight}>
        <CardHeader title={lecture.title} subtitle={lecture.lecturetheme} titleStyle={{
          ...styles.titleStyle
        }} subtitleStyle={{
          ...styles.subtitleStyle
        }} avatar={<Avatar src='../../img/placeholder_profilepicture.png' size={60} style={styles.avatarStyle} />} actAsExpander={true} showExpandableButton={true}/>
        <CardText expandable={true}>
          <p style={styles.mainDivTextTitleSchool}>SCHOOL:</p>
          <p style={styles.mainDivTextBold}>Teacher:</p>
          <p style={styles.mainDivText}>{lecture.name} ({lecture.email})</p>
          <p style={styles.mainDivTextBold}>School name:</p>
          <p style={styles.mainDivText}>{lecture.school}</p>
          <p style={styles.mainDivTextBold}>Subjects:</p>
          <p style={styles.mainDivText}><SubjectList subjects={lecture.subjects}/></p>
          <p style={styles.mainDivTextBold}>Educational stage:</p>
          <p style={styles.mainDivText}>{lecture.educationalstage}</p>
          <p style={styles.mainDivTextTitleLecture}>LECTURE:</p>
          <p style={styles.mainDivTextBold}>Theme of the lecture:</p>
          <p style={styles.mainDivText}>{lecture.lecturetheme}</p>
          <p style={styles.mainDivTextBold}>Date of lecture: (option 1):</p>
          <p style={styles.mainDivText}><DateFormat date={lecture.dateOption1}/></p>
          <p style={styles.mainDivTextBold}>Date of lecture: (option 2):</p>
          <p style={styles.mainDivText}><DateFormat date={lecture.dateOption2}/></p>
          <p style={styles.mainDivTextBold}>Location:</p>
          <p style={styles.mainDivText}>{lecture.location}</p>
          <p style={styles.mainDivTextBold}>Short description of the lecture:</p>
          <p style={styles.mainDivText}>{lecture.description}</p>
        </CardText>
      </Card>
    ));

    return (
      <div>
        <div style={styles.firstWrapper}>
          {/* Profile Picture */}
          <img src={expert.imageUrl} style={{...styles.profilePicture,...styles.mobileHide}}/>
          <EditPictureModal doEdit={this.props.doEdit}/>
        </div>

        <div style={styles.secondWrapper}>
          <div style={styles.leftDiv}>
            <p style={styles.mainDivTitle}>MY PROFILE</p>
            {/* start of left column */}
              {/* Next div contains Basic info, like name*/}
            <div style={styles.contentCardLeft}>
              {/* This modal opens up editing window of profile's basic info*/}
              <EditBasicInfoModal onSubmit={this.handleEdit} expert={expert} />
              <p style={styles.mainDivTextTitle}>NAME:</p>
              <p style={styles.mainDivText}>{expert.name}</p>
              <p style={styles.mainDivTextTitle}>PHONE:</p>
              <p style={styles.mainDivText}>{expert.phone}</p>
              <p style={styles.mainDivTextTitle}>E-MAIL:</p>
              <p style={styles.mainDivText}>{expert.email}</p>
              <p style={styles.mainDivTextTitle}>SUPPORTED LOCATIONS:</p>
              <LocationsList locations={expert.area}/>
            </div>
              {/* next div contains company info */}
            <div style={styles.contentCardLeft}>
                {/*Opens editing modal*/}
              <EditCompanyDetailsModal onSubmit={this.handleEdit} expert={expert} />
              <p style={styles.mainDivTextTitle}>COMPANY NAME:</p>
              <p style={styles.mainDivText}>{expert.company}</p>
              <p style={styles.mainDivTextTitle}>JOB TITLE:</p>
              <p style={styles.mainDivText}>{expert.title}</p>

              <OfficeVisit address={expert.address}/>

            </div>
              {/* Contains short introductions, label, etc. */}
            <div style={styles.contentCardLeft}>
              {/*Opens editing modal*/}
              <EditExpertDetailsModal onSubmit={this.handleEdit} expert={expert} />
              <p style={styles.mainDivTextTitle}>SHORT INTRODUCTION:</p>
              <p style={styles.mainDivText}>{expert.description}</p>
              <p style={styles.mainDivTextTitle}>SUBJECTS:</p>
              {/*Next div wraps subjects chips close todether*/}
              <SubjectChips subjects={expert.subjects}/>
              <p style={styles.mainDivTextTitle}>LECTURE DETAILS:
              </p>
              <p style={styles.mainDivText}>{expert.details}</p>
            </div>
            {/*End of left column*/}
          </div>

          {/*Start of right column*/}
          <div style={styles.rightDiv}>
            <p style={styles.rightDivTitle}>INVITATIONS</p>
            {invitations}

            <p style={styles.rightDivTitleAccept}>UPCOMING</p>
            {accepted}

            <p style={styles.rightDivTitleDecline}>DECLINED</p>
            {declined}
            {/* Adds a little space between the end of the page and the last card */}
            <div style={styles.emptyFooter} />
          </div>
        </div>

      </div>
    );
  }
}
