import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const CreatAcc = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.main2}>
      <View style={{flexDirection: 'row', marginTop: 52}}>
        <Text style={{fontSize: 36, color: '#D04711', marginRight: 100}}>
          Đăng ký
        </Text>

        <TouchableOpacity style={[styles.touchFb, {marginRight: 16}]}>
          <TouchableOpacity style={styles.touchFb2}>
            <Image
              source={require('../image/Vector.png')}
              style={{width: 13.67, height: 26.32}}
            />
          </TouchableOpacity>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.touchFb, {}]}>
          <TouchableOpacity>
            <Image
              source={require('../image/flat-color-icons_google.png')}
              style={{width: 33, height: 33}}
            />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
          placeholder="Họ tên"
          style={[styles.txtInput, {marginTop: 20}]}
        />
        <TextInput
          placeholder="Số điện thoại"
          style={[styles.txtInput, {marginTop: 10}]}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Mật khẩu"
          style={[styles.txtInput, {marginTop: 10}]}
        />
        <TextInput
          placeholder="Nhập lại mật khẩu"
          style={[styles.txtInput, {marginTop: 10}]}
        />
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center',}}>
        <TouchableOpacity
          style={{
            width: 183,
            height: 58,
            backgroundColor: '#D04711',
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            navigation.navigate('CreatOtp');
          }}>
          <Text style={{fontSize: 17, color: '#F6F6F9', fontWeight: 'bold'}}>
            Đăng ký
          </Text>
        </TouchableOpacity>
        <View>
          <Text>Bạn đã có tài khoản?</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 14}}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreatAcc;

const styles = StyleSheet.create({
  main2: {
    alignItems: 'center',
    backgroundColor:'#ffff',
    height:'100%'
  },
  touchFb: {
    backgroundColor: '#ffff',
    width: 45,
    height: 45,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation:6
  },
  touchFb2: {
    backgroundColor: 'blue',
    width: 31,
    height: 31,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtInput: {
    width: 347,
    height: 58,
    borderWidth: 1,
    borderRadius: 23,
    borderColor: '#C4C4C4',
    backgroundColor: '#FEFBFA',
    marginBottom: 18,
    paddingLeft: 32,
    paddingRight: 32,
  },
});
