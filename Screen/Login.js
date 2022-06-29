/* eslint-disable no-sparse-arrays */
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
// const deviceWidth = Dimensions.get('window').width;
export default function Login({navigation}) {
  const [phone, setPhone] = useState('');
  const [errorPhone, setErrorPhone] = useState('');

  const handleNext = () => {
    if (isPhone(phone) === false) {
      setErrorPhone('Số điện thoại không hợp lệ!!!');
      ToastAndroid.show(errorPhone, ToastAndroid.SHORT);
    } else {
      setErrorPhone('');
      navigation.navigate('Verification', {
        phone,
      });
    }
  };
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
      {/* Login */}
      <View style={styles.login}>
        <Text style={styles.xinChao}>Xin Chào!</Text>
        {/* phone */}
        <TouchableOpacity style={styles.touchInputPhone}>
          <TextInput
            value={phone}
            onChangeText={setPhone}
            maxLength={11}
            keyboardType="numeric"
            placeholder="Nhập số điện thoại"
            placeholderTextColor={colors.placeholder}
            style={styles.inputPhone}
          />
          {phone.length > 0 && (
            <AntDesign
              onPress={() => setPhone('')}
              style={styles.deletePhone}
              name="closecircleo"
              size={25}
            />
          )}
        </TouchableOpacity>
        {/* btn Tiep Tuc */}
        <TouchableOpacity
          onPress={handleNext}
          disabled={phone.length > 0 ? false : true}
          style={[
            styles.touchBtnTiepTuc,
            ,
            phone.length > 0
              ? styles.btnTiepTucActive
              : styles.btnTiepTucInActive,
          ]}>
          <Text style={styles.textBtnTiepTuc}>Tiếp tục</Text>
        </TouchableOpacity>
      </View>
      {/* Mxh */}
      <View style={styles.mxh}>
        <View style={styles.hoacSuDung}>
          <View style={styles.line} />
          <Text style={styles.textHoacSuDung}>Hoặc sử dụng</Text>
          <View style={styles.line} />
        </View>
        <View style={styles.iconMxh}>
          <View style={[styles.iconItem, {backgroundColor: '#385599'}]}>
            <EvilIcons name="sc-facebook" size={30} color="#fff" />
          </View>
          <View style={[styles.iconItem, {backgroundColor: '#e34033'}]}>
            <AntDesign name="google" size={30} color="#fff" />
          </View>
          <View style={[styles.iconItem, {backgroundColor: '#25a4da'}]}>
            <AntDesign name="twitter" size={30} color="#fff" />
          </View>
          <View style={[styles.iconItem, {backgroundColor: '#000'}]}>
            <AntDesign name="apple1" size={30} color="#fff" />
          </View>
        </View>
      </View>
      {/* Dieu khoan  */}
      <View style={styles.dieuKhoan}>
        <View style={styles.topDieuKhoan}>
          <Text style={styles.textDieuKhoan}>
            Bằng Việc ấn vào tiếp tục, bạn đã đồng ý với{' '}
            <Text style={{color: colors.colorTextDK}}>
              {' '}
              Điều khoản và Điều kiện sử dụng
            </Text>{' '}
            của ứng dụng
          </Text>
        </View>
        <View style={styles.botDieuKhoan}>
          <Image style={styles.imgLogo} source={{uri: images.imgLogo}} />
          <Text style={styles.textLogo}>An toàn & bảo mật 100%</Text>
        </View>
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
  login: {
    height: 0.3 * deviceHeight,
    backgroundColor: colors.backGround,
    position: 'relative',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    top: -20,
  },
  xinChao: {
    width: '100%',
    color: colors.colorText,

    fontSize: fontSizes.h1,
    paddingVertical: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  touchInputPhone: {
    flexDirection: 'row',
    marginTop: 10,
    height: '25%',
    marginHorizontal: 20,
    alignItems: 'center',
    position: 'relative',
  },
  inputPhone: {
    width: '100%',
    height: '100%',
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: fontSizes.h3,
  },
  deletePhone: {
    position: 'absolute',
    right: 10,
  },
  touchBtnTiepTuc: {
    height: '25%',
    marginHorizontal: 20,
    borderRadius: 10,
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
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
  mxh: {
    width: '100%',
    height: 0.2 * deviceHeight,
    alignItems: 'center',
  },
  hoacSuDung: {
    width: '80%',
    height: 40,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {height: 1, backgroundColor: colors.colorLine, flex: 1},
  textHoacSuDung: {
    paddingHorizontal: 5,
    color: colors.colorText,
    fontSize: fontSizes.h6,
  },
  iconMxh: {
    width: '60%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconItem: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  dieuKhoan: {flex: 1, justifyContent: 'space-between'},
  topDieuKhoan: {height: '30%'},
  textDieuKhoan: {
    textAlign: 'center',
    color: colors.placeholder,
    fontSize: fontSizes.h6,
  },
  botDieuKhoan: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  imgLogo: {
    width: 50,
    height: 50,
  },
  textLogo: {
    fontSize: fontSizes.h6,
    color: colors.placeholder,
    marginBottom: 15,
  },
});
