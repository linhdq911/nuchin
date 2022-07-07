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

const ForgotPassword = () => {
  return (
    <ScrollView>
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
            right:'29.37%'
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
          Bạn đang muốn lấy lại mật khẩu?
        </Text>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 29}}>
          <TextInput
            placeholder="Nhập số điện thoại hoặc email của bạn"
            style={styles.tip2}
          />
          <TouchableOpacity>
            <Text style={{fontSize: 13, color: '#D96C41', paddingLeft: 4}}>
              Gửi mã
            </Text>
          </TouchableOpacity>
        </View>

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
            * Chúng tôi sẽ gửi cho bạn một tin nhắn gồm 5 chữ số để đặt lại mật
            khẩu mới của bạn!
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
            top: 390,
          }}>
          <AntDesign
            style={{
              fontSize: 25,
            }}
            name="arrowright"
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  top: {
    backgroundColor: '#D04711',
    width: 414,
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
