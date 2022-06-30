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
import DropDown from '../components/DropDown';
export default function TabThuChi({route, navigation}) {
  const {phone} = route.params;
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const currentDay = new Date(today);
  currentDay.setMonth(currentDay.getMonth() - 1);
  const currentMonth = new Date(today);
  currentMonth.setDate(1);
  const lastMonth = new Date(today);
  lastMonth.setMonth(lastMonth.getMonth() - 1);
  lastMonth.setDate(1);
  const lastMonthEnd = new Date(today);
  lastMonthEnd.setMonth(lastMonthEnd.getMonth() - 1);
  lastMonthEnd.setDate(30);
  const [dataDate, setDataDate] = useState([
    {
      title: 'Tất cả',
      value: 'Tất cả',
      isCheck: false,
    },
    {
      title: 'Hôm nay',
      value: today.toLocaleDateString('en-gb'),
      isCheck: true,
    },
    {
      title: 'Hôm qua',
      value: yesterday.toLocaleDateString('en-gb'),
      isCheck: false,
    },
    {
      title: '30 ngày',
      value: `${currentDay.toLocaleDateString(
        'en-gb',
      )} - ${today.toLocaleDateString('en-gb')}`,
      isCheck: false,
    },
    {
      title: 'Tháng này',
      value: `${currentMonth.toLocaleDateString(
        'en-gb',
      )} - ${today.toLocaleDateString('en-gb')}`,
      isCheck: false,
    },
    {
      title: 'Tháng trước',
      value: `${lastMonth.toLocaleDateString(
        'en-gb',
      )} - ${lastMonthEnd.toLocaleDateString('en-gb')}`,
      isCheck: false,
    },
  ]);
  const [selectItem, setSelectItem] = useState(null);
  const [showOption, setShowOption] = useState(false);
  const handleSelectOption = data => {
    setSelectItem(data.value);
    setShowOption(false);
    const newDataDate = dataDate.map(dt => {
      if (data.title === dt.title) {
        dt.isCheck = true;
      } else {
        dt.isCheck = false;
      }
      return dt;
    });
    setDataDate(newDataDate);
  };
  const handleTextFilter = item => {
    setSelectItem(item.value);
  };
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
            <Text style={styles.textSDT}>{phone}</Text>
            <Text style={styles.thongTinCH}>
              Thông tin cửa hàng
              <AntDesign name="right" size={14} />
            </Text>
          </View>
          {/* icon */}
          <View style={styles.iconHeader}>
            <View style={styles.iconDollar}>
              <Feather name="dollar-sign" size={20} color="#fff" />
            </View>
            <Feather name="message-circle" size={24} color="#fff" />
            <Ionicons name="notifications-outline" size={24} color="#fff" />
          </View>
        </View>
      </View>
      {/* Content */}
      <View style={{backgroundColor: colors.backGroundTabThuChi}}>
        {/* contentTop */}
        <View style={styles.contentTop}>
          {/* Select Date */}
          <View style={{flex: 1}}>
            {/* DropDown date */}
            <TouchableOpacity
              onPress={() => setShowOption(!showOption)}
              style={styles.date}>
              <Fontisto name="date" size={25} color={colors.colorDateActive} />
              <Text style={styles.textDate}>
                {selectItem === null && today.toLocaleDateString('en-gb')}
                {selectItem && selectItem}
              </Text>
              <AntDesign name="down" size={18} color={colors.colorDateActive} />
            </TouchableOpacity>
            {/* Option Date */}
            {/* {showOption && (
              <View style={styles.optionDate}>
                {dataDate.map((data, index) => {
                  return (
                    <DropDown
                      key={index}
                      data={data}
                      onPress={() => handleSelectOption(data)}
                    />
                  );
                })}
              </View>
            )} */}
          </View>
          {/* filter & find */}
          <View style={styles.findAndSearch}>
            <AntDesign name="search1" size={25} />
            <AntDesign name="filter" size={25} />
          </View>
        </View>
        {/* Content Filter */}
        <FlatList
          style={{
            zIndex: -1,
            marginHorizontal: 5,
            marginBottom: 5,
          }}
          horizontal
          data={dataDate}
          keyExtractor={item => item.title}
          renderItem={({item}) => {
            return (
              <Text
                onPress={() => handleTextFilter(item)}
                style={
                  selectItem === item.value
                    ? [
                        styles.textFilterFlatlist,
                        styles.textFilterFlatlistSelected,
                      ]
                    : styles.textFilterFlatlist
                }>
                {item.title}
              </Text>
            );
          }}
        />
      </View>
      {/* Content Details */}
      <View style={styles.contentDetails}>
        <View style={styles.imgGhiChu}>
          <Image
            resizeMode="cover"
            style={{width: '80%', height: '80%'}}
            source={require('../assets/image/notebook.png')}
          />
        </View>

        <Text style={styles.textImgGhiChu}>
          Thu chi dài dòng - ghi lại là xong!
        </Text>
        <TouchableOpacity style={styles.videoHD}>
          <Text style={styles.textVideoHd}>Xem vdeo hướng dẫn</Text>
        </TouchableOpacity>
        <View style={styles.KhoanThuChi}>
          <TouchableOpacity style={styles.khoanChi}>
            <AntDesign name="arrowup" size={25} color="#fff" />
            <Text style={styles.textThuChi}>Khoản chi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.khoanThu}>
            <AntDesign name="arrowdown" size={25} color="#fff" />
            <Text style={styles.textThuChi}>Khoản chi</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Option Date */}
      {showOption && (
        <View style={styles.optionDate}>
          {dataDate.map((data, index) => {
            return (
              <DropDown
                key={index}
                data={data}
                onPress={() => handleSelectOption(data)}
              />
            );
          })}
        </View>
      )}
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
  //   content
  //   content top
  contentTop: {
    height: 50,
    backgroundColor: colors.backGroundTabThuChi,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  date: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textDate: {
    fontSize: fontSizes.h6,
    color: colors.colorDateActive,
    marginHorizontal: 10,
  },
  optionDate: {
    top: 155,
    left: 10,
    position: 'absolute',
    width: '80%',
    backgroundColor: colors.backGround,
    elevation: 10,
  },
  findAndSearch: {
    width: 70,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textFilterFlatlist: {
    textAlign: 'center',
    marginHorizontal: 5,
    padding: 5,
    backgroundColor: colors.backGround,
    fontSize: fontSizes.h6,
    borderRadius: 10,
  },
  textFilterFlatlistSelected: {
    borderWidth: 1,
    borderColor: colors.colorDateActive,
    color: colors.colorDateActive,
  },
  //   details
  contentDetails: {
    position: 'relative',
    flex: 1,
    backgroundColor: colors.backGroundTabThuChi,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgGhiChu: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textImgGhiChu: {fontSize: fontSizes.h6, color: colors.placeholder},
  videoHD: {
    borderWidth: 1,
    borderColor: colors.colorDateActive,
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  textVideoHd: {
    color: colors.colorDateActive,
    fontSize: fontSizes.h6,
    fontWeight: 'bold',
  },
  KhoanThuChi: {
    height: 50,
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    marginTop: 70,
  },
  khoanChi: {
    backgroundColor: colors.backGroundBtnKhoanChi,
    justifyContent: 'center',
    alignItems: 'center',
    width: '48%',
    borderRadius: 5,
    flexDirection: 'row',
  },
  khoanThu: {
    backgroundColor: colors.backGroundBtnKhoanThu,
    justifyContent: 'center',
    alignItems: 'center',
    width: '48%',
    borderRadius: 5,
    flexDirection: 'row',
  },
  textThuChi: {
    color: colors.colorTextBtn,
    fontSize: fontSizes.h4,
    marginLeft: 10,
  },
});
