import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import {images, fontSizes, colors} from '../constants/index';
import {isPhone} from '../utilites/validate';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
const deviceHeight = Dimensions.get('window').height;
export default function Verification({route, navigation}) {
  const {phone} = route.params;
  const [code, setCode] = useState('');
  const [time, setTime] = useState(5);
  const timeCode = () => {
    setTimeout(() => {
      if (time > 0) {
        setTime(t => t - 1);
      }
      return;
    }, 1000);
  };
  timeCode();
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
      {/*Banner */}
      <View style={styles.banner}>
        <Image
          resizeMode="cover"
          style={styles.imgBanner}
          source={{uri: images.imgBanner}}
        />
      </View>
      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.code}>Nhập mã xác thực</Text>
        <Text style={styles.textCode}>
          Mã xác thực được gửi đến số điện thoại{' '}
          <Text style={{fontWeight: 'bold'}}>{phone}</Text> của quý khách
        </Text>
        <View style={{alignItems: 'center', marginTop: 10}}>
          <TextInput
            value={code}
            onChangeText={setCode}
            maxLength={4}
            keyboardType="numeric"
            style={styles.inputCode}
          />
        </View>
        <View style={styles.thongTin}>
          {time > 0 && (
            <Text disabled style={styles.guiLaiCode}>
              Gửi lại mã sau{' '}
              <Text style={{color: colors.colorTextDK}}>{time}</Text>
            </Text>
          )}
          {time === 0 && (
            <Text
              onPress={() => console.log('aa')}
              style={[styles.guiLaiCode, styles.textCodeActive]}>
              Gửi lại mã xác thực
            </Text>
          )}

          <Text onPress={() => navigation.goBack()} style={styles.rePhone}>
            Nhâp lại số điện thoại
          </Text>
        </View>
      </View>
      {/* Btn Bottom */}
      <View style={styles.btnBottom}>
        <TouchableOpacity
          disabled={code.length > 0 ? false : true}
          style={[
            styles.touchBtnTiepTuc,
            code.length > 0
              ? styles.btnTiepTucActive
              : styles.btnTiepTucInActive,
          ]}>
          <Text style={styles.textBtnTiepTuc}>Tiếp tục</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    width: '100%',
    height: 0.3 * deviceHeight,
  },
  imgBanner: {width: '100%', height: '100%'},
  content: {
    height: 0.6 * deviceHeight,
    backgroundColor: colors.backGround,
    position: 'relative',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    top: -20,
  },
  code: {
    width: '100%',
    color: colors.colorText,
    fontSize: fontSizes.h2,
    paddingVertical: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textCode: {
    textAlign: 'center',
    paddingHorizontal: 50,
    paddingBottom: 10,
    color: colors.colorText,
    fontSize: fontSizes.h5,
  },
  textCodeActive: {
    color: colors.colorTextDK,
  },
  inputCode: {
    borderBottomWidth: 1,
    width: '60%',
    height: 50,
    borderColor: colors.colorLine,
    textAlign: 'center',
    color: colors.colorText,
    fontSize: fontSizes.h3,
  },
  thongTin: {
    flexDirection: 'row',
    height: 50,
    marginTop: 15,
    marginHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  guiLaiCode: {color: colors.placeholder, fontSize: fontSizes.h6},
  rePhone: {color: colors.colorTextDK, fontSize: fontSizes.h6},
  btnBottom: {
    flex: 1,
    justifyContent: 'center',
  },
  touchBtnTiepTuc: {
    height: 50,
    marginHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.backGroundBtnActive,
  },
  btnTiepTucActive: {
    backgroundColor: colors.backGroundBtnActive,
  },
  btnTiepTucInActive: {
    backgroundColor: colors.backGroundBtnInactive,
  },
  textBtnTiepTuc: {
    color: colors.colorTextBtn,
    fontWeight: 'bold',
    fontSize: fontSizes.h3,
  },
});
