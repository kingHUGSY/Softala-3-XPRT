import * as Colors from 'material-ui/styles/colors';
import * as ColorManipulator from 'material-ui/utils/colorManipulator';

module.exports = {
  spacing: {
    iconSize: 24,

    desktopGutter: 24,
    desktopGutterMore: 32,
    desktopGutterLess: 16,
    desktopGutterMini: 8,
    desktopKeylineIncrement: 64,
    desktopDropDownMenuItemHeight: 32,
    desktopDropDownMenuFontSize: 15,
    desktopDrawerMenuItemHeight: 48,
    desktopSubheaderHeight: 48,
    desktopToolbarHeight: 56,
  },
  fontFamily: 'Catamaran, sans-serif',
  palette: {
    primary1Color: '#15a369',
    primary1ColorTransparent: 'rgba(21,163,105,0.8)',
    primary2Color: '#eab94e',
    primary3Color: '#333333',
    accent1Color: Colors.white,
    accent2Color: Colors.white,
    accent3Color: Colors.white,
    textColor: '#CCCCCC',
    alternateTextColor: Colors.white,
    menuTextColor:'#08412A',
    menuTextColorActive:'#fff',
    canvasColor: '#333333',
    borderColor: Colors.grey300,
    disabledColor: '#cccccc',
    pickerHeaderColor: Colors.white,
    clockCircleColor: ColorManipulator.fade(Colors.darkBlack, 0.07),
    shadowColor: Colors.fullBlack,
    transparentColor: 'rgba(0,0,0,0)',
  }
};
