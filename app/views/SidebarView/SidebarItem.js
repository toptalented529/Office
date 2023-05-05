import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { VectorIcon } from '../../containers/VectorIcon';

import styles from './styles';
import { COLOR_BLACK, themes } from '../../constants/colors';

const Item = React.memo(
  ({ id, left, text, onPress,userID, textStyle, theme, hasRight }) => {
    const navigation = useNavigation();

    const [opened,setOpened] = useState(false)

    const gotoPage = name => {
      if (name === 'Token') navigation.navigate('TokenView');
      if (name === 'My team') navigation.navigate('Details');
      if (name === 'My data') navigation.navigate('MyData');
      if (name === 'Transactions') navigation.navigate('Transaction');
      if (name === 'Rewards') navigation.navigate('RewardsView');
      if (name === 'Authorization') navigation.navigate('AuthorizationView');
      if (name === 'Shop Market') navigation.navigate("Market", { indexID: 0 })
      if (name === 'NotificationWrite') navigation.navigate("NotificationDetailView")
        ;
    };

    // navigation.navigate("Market",{indexID:name === 'Buy Investment' ?3:name === 'Buy Products'?2:1 })

    const gotoSubPage = (item, subName) => {
      if (item.name === 'Token') {
        if (subName === 'Hayek')
          navigation.navigate('Hayek', { subProp: subName });
        if (subName === 'Genu')
          navigation.navigate('Hayek', { subProp: subName });
      }
      if (item.name === 'My data') {
        navigation.navigate('MyData');
      }
      if (item.name === 'My team') {
        if (subName === "Sponsor")
          navigation.navigate('Sponsers');
        if (subName === "Ranks")
          navigation.navigate('RankingView');
        if (subName === "Direct/Indirect Sale")
        console.log("sdfsdfgre",userID)
          navigation.navigate('BuyView',{userID:userID});
        // if (subName === "Statistics")
          // navigation.navigate('Sponsers');
      }
      if (item.name === "Shop Market") {
        navigation.navigate("Market", { indexID: subName === 'Buy investments' ? 3 : subName === 'Buy Products' ? 2 : 1 })

      }
      if (item.name === 'Rewards') {
        if (subName === "Direct")
          navigation.navigate('RewardsDetailView', { name: "Direct" });
        if (subName === "Range")
          navigation.navigate('RewardsDetailView', { name: "Range" });
        if (subName === "Team")
          navigation.navigate('RewardsDetailView', { name: "Team" });
        if (subName === "Annual")
          navigation.navigate('RewardsDetailView', { name: "Annual" });
        if (subName === "Igualacion")
          navigation.navigate('RewardsDetailView', { name: "Igualacion" });
        if (subName === "Embassador")
          navigation.navigate('RewardsDetailView', { name: "Embassador" });
        if (subName === "Empates")
          navigation.navigate('MatchingRewardView', { userID: 0 });
        if (subName === "Sales")
          navigation.navigate('RewardsDetailView', { name: "Sales" });
      }
    };

    const handleClick = () => {
      setOpened(!opened)
    }

    return (
      <View style={styles.subItemContainer}>
        <View
          key={id}
          style={styles.subItemBox}
         >
          <TouchableOpacity style={styles.item} onPress={() => gotoPage(text.name)}>
            {left && <View style={styles.itemLeft}>{left}</View>}
            < View   style={styles.itemCenter}>
              <Text
                style={[styles.itemText, { color: COLOR_BLACK, ...textStyle }]}>
                {text.name}
              </Text>
            </View>
          </TouchableOpacity>
          {hasRight && (
            <TouchableOpacity onPress={handleClick}>
            <VectorIcon
              type="AntDesign"
              name={opened? "caretdown":"caretright"}
              color={COLOR_BLACK}
              size={16}
            />
            </TouchableOpacity>
          )}
        </View>
        {true && opened ? (
          <View style={{ paddingHorizontal: 10 }}>
            {text.subItems?.map(idx => (
              <TouchableOpacity
                style={{ flexDirection: 'row', paddingVertical: 8 }}
                onPress={() => gotoSubPage(text, idx)}>
                <VectorIcon
                  type={'Entypo'}
                  name={'dot-single'}
                  size={18}
                  color={COLOR_BLACK}
                />
                <Text style={[styles.itemSubText, { color: COLOR_BLACK }]}>
                  {idx}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          <></>
        )}
      </View>
    );
  },
);

export default Item;
