import {Dimensions, StyleSheet} from 'react-native';

const {width,height} = Dimensions.get('window');

export default StyleSheet.create({
  notificationText: {
    fontFamily: 'Montserrat',
    fontSize: 18,
    fontWeight: '700',
  },
  notificationBox: {
    paddingHorizontal: 35,
    paddingVertical: 2,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
  },
  dateText: {
    fontFamily: 'Poppins',
    fontSize: 11,
    textAlign:"center"
  },
  dayText: {
    fontFamily: 'Poppins',
    fontSize: 22,
    fontWeight: '700',
    marginTop: 5,
    textAlign:"center"

  },
  highlightdateBox: {
    borderRadius: 29,
    paddingHorizontal: 4,
    paddingVertical: 6,
    marginTop: 8,
  },
  dateBox: {},
  dateBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:"center",
  },
  alertBoxContainer: {
    width: '100%',
  },
  alertBoxBox: {
    paddingLeft: 7,
    paddingTop: 13,
    paddingRight: 18,
    paddingBototm: 28,
  },
  alertContainer: {
    paddingHorizontal: 30,
    marginBottom: 12,
    // height: 118,
    overflow:"hidden",
    minHeight:height * 0.15,
  },
  closeBtn: {
    width: 20,
    height: 20,
  },
  titleText: {
    fontFamily: 'Montserrat',
    fontSize: 10,
  },
  subTitleText: {
    fontFamily: 'Montserrat',
    fontSize: 12,
    fontWeight: '700',
  },
  contentText: {
    fontFamily: 'Montserrat',
    fontSize: 10,
  },
  viewMoreText: {
    fontFamily: 'Montserrat',
    fontSize: 10,
    marginTop: 14,
  },
});
