import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  useWindowDimensions,
  Dimensions,
} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';

import {
  COLOR_WHITE,
  COLOR_ULTRAMARINE,
  COLOR_DARKBLACK,
} from '../../constants/colors';
import { withTheme } from '../../theme';
import images from '../../assets/images';
import styles from './styles';

import MainScreen from '../../containers/MainScreen';
import StatusBar from '../../containers/StatusBar';
import MainHeader from '../../containers/MainHeader';
import SearchTransaction from './SearchTransaction';
import TransactionItem from './TransactionItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomTextInput from '../../containers/CustomTextInput';
import { TextInput } from 'react-native-gesture-handler';
import axios from 'axios';

const { width, height } = Dimensions.get("screen")
const NotificationDetailView = props => {


  const [title, setTitle] = useState("")
  const [text, setText] = useState("")
  const [subTitle, setSubTitle] = useState("")
  const [user, setUser] = useState()
  const [error, setError] = useState("")
  useEffect(() => {
    const handleEffect = async () => {
      const jwt = await AsyncStorage.getItem("jwt")

      const res = await axios.get("http://95.217.197.177:80/account/me", {

        headers: {
          authorization: `bearer ${jwt}`
        }
      }
      )
      setUser(res.data.user)
    }
    handleEffect()
  },[])

  useEffect(() => {
    setTimeout(() => {
      setError('')
    }, 3000);
  },[error])


  const handleContinue = async () => {
    if (!text && !subTitle || !title) {
      setError("Please input all area!")
      return
    }
    try{
      const jwt = await AsyncStorage.getItem("jwt")

      const res = await axios.post("http://95.217.197.177:80/account/setnotification",{
        title,
        subTitle,
        text
        
      },{
        headers: {
          authorization: `bearer ${jwt}`
        }
      })

      setError("You posted new notification!")

    }catch(e){
      throw new Error(e)
    }




  }


  return (
    <MainScreen style={{ backgroundColor: "#141436", paddingBottom: height * 0.02 + 31 }}>
      <View style={{ backgroundColor: "#02010c", borderBottomLeftRadius: 30, borderBottomRightRadius: 30, height: height * 0.2 }}>
        <StatusBar />
        <MainHeader />
        <Text style={styles.mediumLetters}>New Notification</Text>
      </View>
      {/* 
      <ScrollView style={styles.mainOutBox}>
        <View style={styles.mainBox}>
        </View>
      </ScrollView> */}


      <ScrollView style={styles.mainReBox}>
        <View style={{ flexDirection: "column" }}>
          <Text style={styles.dataText}>Title</Text>

          <View style={{ alignSelf: "center" }}>
            <TextInput
              returnKeyType="next"
              color="#fff"
              placeholder={'Title'}
              theme={"dark"}
              placeholderTextColor="#808080"
              onChangeText={val => setTitle(val)}
              style={{ borderColor: "#fff", borderBottomWidth: 1, width: width * 0.7 }}
            />
          </View>
        </View>

        <View style={{ flexDirection: "column", marginTop: height * 0.02 }}>
          <Text style={styles.completeTexxt}>subTitle</Text>

          <View style={{ alignSelf: "center" }}>
            <TextInput
              returnKeyType="next"
              color="#fff"
              placeholder={'subTitle'}
              theme={"dark"}
              placeholderTextColor="#808080"
              onChangeText={val => setSubTitle(val)}
              style={{ borderColor: "#fff", borderBottomWidth: 1, width: width * 0.7, }}
            />
          </View>
        </View>
        <View style={{ marginTop: height * 0.02, flexDirection: "column" }}>
          <Text style={styles.completeTexxt}>Text</Text>
          <TextInput
            multiline={true}
            onChangeText={setText}
            color={"#fff"}
            style={{ height: 200, borderColor: '#fff', borderWidth: 1, textAlignVertical: "top", marginTop: height * 0.02 }}
          />
        </View>

        <LinearGradient
          colors={['#6c40bd', '#1b97c0', '#01dfcc']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          locations={[0, 0.67, 1]}
          style={{
            marginHorizontal: 20,
            borderRadius: 43,
            marginTop: height * 0.05,
          }}>
          <TouchableOpacity style={styles.registerButton} onPress={handleContinue}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
              <Text style={styles.registerText}>CONTINUE</Text>
            </View>
          </TouchableOpacity>
        </LinearGradient>
        <Text style={{
          color: "#FFD700",
          alignSelf: 'center'
        }}>{error}</Text>

      </ScrollView>



    </MainScreen>
  );
};
const mapStateToProps = state => ({
  user: state.login.user,
});

const mapDispatchToProps = dispatch => ({
  fetchUnread: params => dispatch(fetchUnreadAction(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTheme(NotificationDetailView));
