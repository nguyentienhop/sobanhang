/* eslint-disable react-native/no-inline-styles */
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {colors, fontSizes, images} from '../constants';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Octicons from 'react-native-vector-icons/Octicons';

export default function TabSoNo() {
  return (
    <View style={{flex: 1}}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.topHeader} />
        <View style={styles.botHeader}>
          {/* avatar */}
          <View style={styles.avatar}>
            <Image
              resizeMode="cover"
              style={{width: 40, height: 40}}
              source={{uri: images.avatar}}
            />
          </View>
          {/* sdt */}
          <View style={styles.sdt}>
            <Text style={styles.textSDT}>0979480297</Text>
            <Text style={styles.thongTinCH}>
              Thông tin cửa hàng
              <AntDesign name="right" size={14} />
            </Text>
          </View>
          {/* icon */}
          <View style={styles.iconHeader}>
            <AntDesign name="pay-circle-o1" size={24} color="#fff" />
            <Feather name="message-circle" size={24} color="#fff" />
            <Ionicons name="notifications-outline" size={24} color="#fff" />
          </View>
        </View>
      </View>
      {/* Content Top */}
      <View style={styles.contentTop}>
        <View style={styles.containerContentTop}>
          {/* Toi phai tra toi phai thu */}
          <View style={styles.containerContentTop_Top}>
            {/* Toi phai tra */}
            <View style={styles.toiPhaiTra}>
              <Text style={styles.textToiPhaiTra}>Tôi phải trả</Text>
              <Text style={styles.priceContentTop}>0 đ</Text>
            </View>
            {/* Separator  */}
            <View style={styles.separator} />
            {/* Toi phai thu */}
            <View style={styles.toiPhaiTra}>
              <Text style={styles.textToiPhaiTra}>Tôi phải thu</Text>
              <Text style={[styles.priceContentTop, {color: colors.succcess}]}>
                0 đ
              </Text>
            </View>
          </View>
          {/* Lich su chi tiet */}
          <View style={styles.historyDeltails}>
            <Octicons name="history" size={25} color="#9d9d9d" />
            <Text style={styles.textHistoryDetails}>Lịch sử chi tiết</Text>
          </View>
        </View>
      </View>
      {/* Content search */}
    </View>
  );
}

const styles = StyleSheet.create({
  // header
  header: {backgroundColor: colors.backGroundHeader},
  topHeader: {height: 40},
  botHeader: {
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  avatar: {
    width: 60,
    height: 60,
    backgroundColor: colors.backGround,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  sdt: {marginLeft: 10},
  textSDT: {
    color: colors.backGround,
    fontWeight: 'bold',
    fontSize: fontSizes.h5,
  },
  thongTinCH: {
    color: colors.backGround,
    opacity: 0.8,
    fontSize: fontSizes.h6,
  },
  iconHeader: {
    flexDirection: 'row',
    flex: 1,
    marginLeft: 30,
    justifyContent: 'space-between',
  },
  iconDollar: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderRadius: 12,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  //   Content Top
  contentTop: {
    height: 150,
    borderWidth: 1,
    backgroundColor: colors.backGroundTabThuChi,
    alignItems: 'center',
  },
  containerContentTop: {
    width: '90%',
    height: '80%',
    marginTop: 5,
    backgroundColor: colors.backGround,
    borderRadius: 10,
  },
  containerContentTop_Top: {
    borderBottomColor: colors.placeholder,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  toiPhaiTra: {alignItems: 'center', flex: 1},
  textToiPhaiTra: {
    fontSize: fontSizes.h6,
    color: colors.colorText,
    fontWeight: 'bold',
  },
  priceContentTop: {
    fontSize: fontSizes.h6,
    color: colors.error,
    fontWeight: 'bold',
  },
  separator: {
    height: '100%',
    width: 1,
    backgroundColor: colors.placeholder,
  },
  historyDeltails: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHistoryDetails: {
    fontSize: fontSizes.h6,
    color: colors.placeholder,
    marginLeft: 5,
  },
  //   Content search
});
