import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {CheckBox, Icon} from '@rneui/themed';
const img = {
  uri: 'https://sobanhang.com/wp-content/uploads/2022/01/sobanhang_2.png',
};
export default function ThuChi() {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const currentDay = new Date(today);
  currentDay.setMonth(currentDay.getMonth() - 1);
  const currentMonth = new Date(today);
  currentMonth.setDate(1);
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
  ]);
  const [selectItem, setSelectItem] = useState(null);

  const handleData = item => {
    console.log(item.value, '222');
    setSelectItem(item.value);
    const newDataDate = dataDate.map(dt => {
      if (dt.title === item.title) {
        dt.isCheck = true;
      } else {
        dt.isCheck = false;
      }
      return dt;
    });
    setDataDate(newDataDate);
  };

  return (
    <View style={{flex: 1}}>
      <Text>sadasdsad</Text>
      {/* <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.contentContainer}>
        <Find
          dataDate={dataDate}
          selectItem={selectItem}
          onClickData={item => handleData(item)}
        />
      </View> */}
    </View>
  );
}

// const Header = () => {
//   return (
//     <View style={styles.headerContent}>
//       <StatusBar
//         translucent
//         backgroundColor="transparent"
//         barStyle={'dark-content'}
//       />
//       <View style={styles.headerBottom}>
//         {/* Logo */}
//         <View style={styles.logo}>
//           <Image style={styles.logoImg} source={img} />
//         </View>
//         {/* SDT */}
//         <View style={styles.sdt}>
//           <Text style={styles.textSDT}>0979480297</Text>
//           <View style={styles.thongTinCuaHang}>
//             <Text style={styles.textThongTinCuaHang}>Thông tin cửa hàng</Text>
//             <AntDesign name="right" size={20} color="#fff" />
//           </View>
//         </View>
//         {/* Icon */}
//         <View style={styles.iconHeader}>
//           <MaterialIcons name="monetization-on" size={25} color="#fff" />
//           <FontAwesome5 name="comments" size={25} color="#fff" light />
//           <FontAwesome5 name="bell" size={25} color="#fff" light />
//         </View>
//       </View>
//     </View>
//   );
// };

// const Find = ({dataDate, selectItem, onClickData}) => {
//   const today = new Date();
//   const [showOption, setShowOption] = useState(false);
//   const onItemData = item => {
//     onClickData(item);
//     setShowOption(false);
//   };

//   return (
//     <View style={styles.findContainer}>
//       {/* Top */}
//       <View style={styles.topFind}>
//         {/* DropDown */}
//         <View style={styles.dropDown}>
//           <TouchableOpacity onPress={() => setShowOption(!showOption)}>
//             <View style={styles.dropDownTitle}>
//               <AntDesign
//                 style={styles.iconDropDown}
//                 name="calendar"
//                 size={20}
//                 color={styleCss.blue}
//               />
//               <Text style={styles.textDropDownTitle}>
//                 {selectItem === null && today.toLocaleDateString('en-gb')}
//                 {selectItem && selectItem}
//               </Text>
//               <AntDesign
//                 style={styles.iconDropDown}
//                 name="down"
//                 size={20}
//                 color={styleCss.blue}
//               />
//             </View>
//           </TouchableOpacity>
//           {showOption && (
//             <View style={styles.itemContainer}>
//               {dataDate.map((data, index) => {
//                 return (
//                   <TouchableOpacity
//                     onPress={() => onItemData(data)}
//                     style={{
//                       flexDirection: 'row',
//                       alignItems: 'center',
//                     }}
//                     key={index}>
//                     <Radio isCheck={data.isCheck} />
//                     <Text style={styles.textDataItem}>{data.title}</Text>
//                   </TouchableOpacity>
//                 );
//               })}
//             </View>
//           )}
//         </View>
//         {/* Find && filter */}
//         <View style={styles.filterAndFind}>
//           <AntDesign name="search1" size={25} />
//           <AntDesign name="filter" size={25} />
//         </View>
//       </View>
//       {/* Bottom */}
//       <ScrollView></ScrollView>
//       <View
//         style={{
//           width: '100%',
//           flex: 1,
//           flexDirection: 'row',
//           alignItems: 'center',
//           justifyContent: 'space-around',
//         }}>
//         <TouchableOpacity>
//           <Text>Hôm qua</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };
// const Radio = ({isCheck}) => {
//   return (
//     <CheckBox
//       checkedIcon={
//         <Icon
//           name="radio-button-checked"
//           type="material"
//           color="green"
//           size={25}
//         />
//       }
//       uncheckedIcon={
//         <Icon
//           name="radio-button-unchecked"
//           type="material"
//           color="grey"
//           size={25}
//         />
//       }
//       checked={isCheck}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   // header css
//   header: {
//     width: '100%',
//     height: '12%',
//   },
//   headerContent: {
//     width: '100%',
//     height: '100%',
//     backgroundColor: styleCss.green,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   headerBottom: {
//     width: '95%',
//     height: '60%',
//     alignItems: 'center',
//     flexDirection: 'row',
//   },
//   logo: {
//     width: 50,
//     height: '95%',
//     backgroundColor: styleCss.bgWhite,
//     borderRadius: 25,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   logoImg: {width: '80%', height: '80%'},
//   sdt: {
//     width: '50%',
//     height: '100%',
//     justifyContent: 'center',
//     paddingLeft: 10,
//   },
//   textSDT: {color: styleCss.bgWhite, fontWeight: 'bold', fontSize: 18},
//   thongTinCuaHang: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   textThongTinCuaHang: {color: styleCss.bgWhite},
//   iconHeader: {
//     height: '100%',
//     flex: 1,

//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   // contentContainer
//   contentContainer: {
//     width: '100%',
//     flex: 1,
//     backgroundColor: '#F2F3F5',
//     alignItems: 'center',
//   },
//   // find
//   topFind: {
//     flexDirection: 'row',
//     width: '100%',
//     height: '50%',
//     backgroundColor: 'red',
//   },
//   findContainer: {
//     width: '100%',
//     height: '10%',
//     borderWidth: 1,
//   },
//   dropDown: {
//     height: '100%',
//     width: '85%',
//   },
//   dropDownTitle: {
//     width: '100%',
//     height: '100%',
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   iconDropDown: {marginLeft: 8},
//   textDropDownTitle: {fontSize: 16, color: styleCss.blue, marginLeft: 8},
//   textDataItem: {
//     fontSize: 16,
//     color: styleCss.black,
//     paddingVertical: 10,
//   },
//   itemContainer: {
//     width: '100%',
//     position: 'absolute',
//     backgroundColor: '#fff',
//     top: '100%',
//   },
//   // filter and find
//   filterAndFind: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     height: '100%',
//     flex: 1,
//   },
// });
