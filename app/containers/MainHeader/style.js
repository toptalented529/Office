import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
    margin: 8,
    borderWidth: 0,
    
  },
  searchHereText: {
    color: '#828282',
    fontFamily: 'Hind Vadodara',
    fontSize: 14,
    marginLeft: 4,
  },
  input: {
    padding: 0,
    flex: 1,
    paddingHorizontal: 8,
    color: 'white',
  },
  searchAndInput: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  closeIcon: {
    marginHorizontal: 8,
  },
  avatarImage: {
    width: 33,
    height: 33,
    borderWidth: 1,
    borderRadius: 50,
  },
});

export default styles;
