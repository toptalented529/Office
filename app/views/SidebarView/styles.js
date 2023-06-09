import {StyleSheet, Dimensions} from 'react-native';
import { COLOR_BLACK } from '../../constants/colors';
import {isIOS} from '../../utils/deviceInfo';

const {width,height} = Dimensions.get('window');

export default StyleSheet.create({
  profileContainer: {
    height: isIOS ? 140 : 100,
  },
  subItemContainer: {
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  subItemBox: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 4,
    borderRadius: 6,
  },
  profileInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginTop: 50,
    paddingHorizontal:width * 0.01,
    // width:width * 0.5,
  },
  headerContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginVertical: 20,
    marginHorizontal: 30,
    paddingBottom: 10,
    borderBottomWidth: 0.3,
  },
  logo: {
    width: 220,
    height: 90,
    resizeMode: 'contain',
  },
  avatar: {
    width: width * 0.1,
    height: width * 0.1,
  },
  avatarBox: {
    borderRadius: 50,
    width: 49,
    height: 49,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileName: {
    fontFamily: 'Montserrat',
    fontWeight: '600',
    fontSize: 14,
  },
  roleName: {
    fontFamily: 'Montserrat',
    fontSize: 10,
    width: 130,
  },
  menuIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    flexGrow: 1,
  },
  itemLeft: {
    alignItems: 'center',
    marginHorizontal: 8,
  },
  itemCenter: {
    marginHorizontal: 10,
  },
  itemText: {
    fontFamily: 'Montserrat',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 20,
  },
  itemSubText: {
    fontFamily: 'Montserrat',
    fontSize: 13,
    lineHeight: 17,
  },
  itemsRight: {
    flex: 1,
    height: 0.5,
    backgroundColor: 'white',
  },
  logoutContainer: {
    height: 70,
    paddingTop: 5,
  },
  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 40,
    marginBottom: 36,
    borderRadius: 6,
  },
  logoutText: {
    fontFamily: 'Hind Vadodara',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 20,
    marginLeft: 12,
  },
  logoutIcon: {
    width: 26,
    height: 26,
    marginRight: 8,
    tintColor: '#C4C4C4',
  },
  closeIconAndText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    position: 'absolute',
    top: 10,
    right: 0,
    width: 24,
    height: 24,
    borderRadius:8,
  },
  menuText: {
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 26,
    // marginTop: 16,
  },
  bottomView: {
    flexDirection: 'row',
    marginTop: 20,
  },
  privacyTermsEulaContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginHorizontal: 16,
    justifyContent: 'space-between',
  },
  languageContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    justifyContent: 'space-around',
  },
  text: {
    fontSize: 12,
  },
  languageText: {
    fontFamily: 'Hind Vadodara',
    fontWeight: '600',
    fontSize: 12,
  },
  chevronIcon: {
    alignSelf: 'center',
  },
  error : {
    flex:0,
    flexDirection:"row",
    color:COLOR_BLACK,
    fontSize:24,
    alignSelf:'flex-start',
    borderStyle:"solid",
    // backgroundColor:"#6da0ee",
    padding:2,
    borderRadius:12,
    marginTop:height * 0.1,
    alignItems:"center"
  },
  image :{
    width: width * 0.2,
    height: width * 0.2,
  },
  horizonLine: {
    backgroundColor:"#d4d3e0",
    width: width * 0.55,
    height:1,
    marginVertical:12,
  },
  nickname:{
    fontWeight:"bold",
    fontFamily:"Poppins"
  }
});
