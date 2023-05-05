import React, { useState, useEffect } from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  TouchableHighlight,
  Dimensions,
} from 'react-native';
import { connect } from 'react-redux';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

import { setUser as setUserAction } from '../../actions/login';
import ActivityIndicator from '../../containers/ActivityIndicator';
import scrollPersistTaps from '../../utils/scrollPersistTaps';
import { withActionSheet } from '../../containers/ActionSheet';

import {
  COLOR_WHITE,
  COLOR_BLACK,
  COLOR_ULTRAMARINE,
  COLOR_DARKBLACK,
} from '../../constants/colors';
import { withTheme } from '../../theme';
import images from '../../assets/images';
import styles from './styles';

import StatusBar from '../../containers/StatusBar';
import MainHeader from '../../containers/MainHeader';
import MainScreen from '../../containers/MainScreen';
import AlertBox from './AlertBox';
import axios from 'axios';
import { Months } from '../../constants/app';

const NotificationView = props => {
  const [curNotification, setCurNotification] = useState([])
  const [curDate, setCurDate] = useState([])
  const [months, setMonths] = useState([])
  const [currentDate, setCurrentDate] = useState()
  const [allNotifications, setAllNotifications] = useState([])
  useEffect(() => {

    const handleEffect = async () => {
      try {
        let notifications = []
        const res = await axios.get("http://95.217.197.177:80/account/getnotification")
        res.data.notifications.map((noti, index) => {
          notifications.push({
            id: index,
            title: noti.title,
            subTitle: noti.subTitle,
            text: noti.text,
            createdAt: noti.createdAt
          })
        })
        setAllNotifications(notifications)
        const month = []
        const day = []
        for (let i = 0; i < 5; i++) {
          const date = new Date(Date.now() - (4 - i) * 24 * 60 * 60 * 1000)
          day.push(date.getDate())
          month.push(date.getMonth())
        }

        setCurDate(day)
        setMonths(month)
        setCurrentDate(day[4])
        setCurNotification(notifications.filter(noti => { return (new Date(noti.createdAt).getDate() == day[4]) }))

      } catch (e) {
        console.log(e)

      }
    }
    handleEffect()
  }, [])



  const curNoti = [
    {
      id: 1,
      title: 'T3 FEB',
      subTitle: 'Nos reunimos! Viernes 7 feb',
      text: 'Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit ipsum dolor sit amet, conse ctetuer adipiscingLorem ipsum dolor sit amet, conse ctetuer adipiscing elit ipsum dolor sit amet, conse ctetuer adipisciLorem ipsum dolor sit amet, conse ctetuer adipiscing elit ipsum dolor sit amet, conse ctetuer adipisciLorem ipsum dolor sit amet, conse ctetuer adipiscing elit ipsum dolor sit amet, conse ctetuer adipisci’',
    },
    {
      id: 2,
      title: 'T4 FEB',
      subTitle: 'Lorem Ipsum',
      text: 'Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit ipsum dolor sit amet, conse ctetuer adipiscing’',
    },
    {
      id: 3,
      title: 'T5 FEB',
      subTitle: 'Lorem Ipsum dolor sit',
      text: 'Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit ipsum dolor sit amet, conse ctetuer adipiscing’',
    },
    {
      id: 4,
      title: 'T6 FEB',
      subTitle: 'Lorem Ipsum dolor sit',
      text: 'Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit ipsum dolor sit amet, conse ctetuer adipiscing’',
    },
    {
      id: 5,
      title: 'T6 FEB',
      subTitle: 'Lorem Ipsum dolor sit',
      text: 'Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit ipsum dolor sit amet, conse ctetuer adipiscing’',
    },
  ];
  const { height } = Dimensions.get("screen")


  const handleClick = (date) => {
    setCurrentDate(date)
    setCurNotification(allNotifications.filter(noti => { return (new Date(noti.createdAt).getDate() == date) }))




  }

  return (
    <MainScreen
      style={{ backgroundColor: COLOR_ULTRAMARINE, paddingBottom: height * 0.02 + 31, filter: "blur(250px)" }}>
      <View style={{ backgroundColor: COLOR_DARKBLACK, marginBottom: 10, borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
        <StatusBar />
        <MainHeader />
        <View style={styles.notificationBox}>
          <Text style={[styles.notificationText, { color: COLOR_WHITE }]}>
            Notifications
          </Text>
          {
            curDate && <View style={styles.dateBoxContainer}>
              {curDate.map((idx, index) => (
                <TouchableOpacity
                  onPress={() => {
                    handleClick(idx)
                  }
                  }
                  style={[
                    styles.highlightdateBox,
                    { backgroundColor: currentDate == idx ? '#00edcf' : '#000' },
                  ]}
                  key={'date' + idx}>
                  <View style={styles.dateBox}>
                    <Text
                      style={[
                        styles.dateText,
                        { color: currentDate == idx ? COLOR_BLACK : COLOR_WHITE },
                      ]}>
                      {Months[months[index]]}
                    </Text>
                    <Text
                      style={[
                        styles.dayText,
                        { color: currentDate == idx ? COLOR_BLACK : COLOR_WHITE },
                      ]}>
                      {idx} 
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          }
        </View>
      </View>
      {/* <View styles={[styles.alertBoxContainer]}> */}
      <ScrollView>
        {curNotification.map(idx => (
          <AlertBox data={idx} key={'alert_box' + idx.id} />
        ))}
     { curNotification.length ===0 && <Text style={{
        color: "#FFD700",
        alignSelf: 'center'
      }}>No Notification</Text>}
      </ScrollView>
      {/* </View> */}
    </MainScreen>
  );
};

const mapStateToProps = state => ({
  user: state.login.user,
});

const mapDispatchToProps = dispatch => ({
  setUser: params => dispatch(setUserAction(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withActionSheet(withTheme(NotificationView)));
