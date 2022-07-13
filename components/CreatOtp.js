import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import AntDesign from 'react-native-vector-icons/AntDesign';

const CreatOtp = () => {
  return (
    <View style={{}}>
      <View style={styles.top}>
        <View style={{alignSelf: 'center', top: 50}}>
          <Image
            source={require('../image/image1.png')}
            style={styles.image1}
          />
        </View>
      </View>

      <View style={styles.forgotCons}>
        <TouchableOpacity
          style={{
            right: '29.37%',
          }}>
          <AntDesign
            style={{
              fontSize: 25,
            }}
            name="left"
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 36,
            color: '#D04711',
            marginHorizontal: 55,
            fontWeight: 'bold',
          }}>
          Xác minh đăng ký
        </Text>

        <View style={{marginTop: 38}}>
          <OTPInputView
            pinCount={5}
            style={styles.otpView}
            codeInputFieldStyle={styles.underlineStyleBase}
            onCodeFilled={value => {
              console.log(value);
            }}
          />
        </View>

        <View style={styles.txtFooter}>
          <Text>
            * Chúng tôi đã gửi cho bạn một tin nhắn gồm 5 chữ số để xác minh đăng ký tài khoản
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text>* Vui lòng chờ tối đã 30s để nhận mã của bạn!</Text>
            <TouchableOpacity style={{}}>
              <Text style={{fontWeight: 'bold', paddingLeft: 8}}>
                Gửi lại mã?
              </Text>
            </TouchableOpacity>
          </View>
          <Text>* Vui lòng nhập mã số xuống ô bên dưới</Text>
        </View>

        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            backgroundColor: '#D04711',
            borderRadius: 1000,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            left: 334,
            top: '100%',
          }}>
          <AntDesign
            style={{
              fontSize: 25,
            }}
            name="arrowright"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreatOtp;

const styles = StyleSheet.create({
  top: {
    backgroundColor: '#D04711',
    width: '100%',
    height: 300,
    borderRadius: 43,
  },
  image1: {
    width: 181,
    height: 181,
    top: '0%',
    bottom: '0%',
  },
  forgotCons: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tip2: {
    width: 290,
    height: 55,
    backgroundColor: '#FEFBFA',
    borderRadius: 23,
    paddingHorizontal: 15,
    borderWidth: 0.5,
    borderColor: '#C4C4C4',
  },
  otpView: {
    width: 335,
    height: 55,
    backgroundColor: '#FEFBFA',
    borderRadius: 23,
    borderWidth: 0.5,
    borderColor: '#C4C4C4',
  },
  underlineStyleBase: {
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
    color: 'black',
    borderBottomColor: '#17BED0',
  },
  txtFooter: {
    marginHorizontal: 48,
    marginVertical: 34,
  },
});
