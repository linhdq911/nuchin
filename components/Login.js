import {
  StyleSheet,
  Text,
  View,
  // TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import {useNavigation} from '@react-navigation/native';
import {TextInput} from 'react-native-paper';

const Login = () => {
    const navigation = useNavigation();
    const [passwordVisible, setPasswordVisible] = useState(true);

  return (
    <View style={styles.main}>
      <TextInput
        placeholder="Username, email, số điện thoại"
        style={[styles.txtInput, {marginTop: 48}]}
      />
      <TextInput
        placeholder="Mật khẩu"
        style={styles.txtInput}
        secureTextEntry={passwordVisible}
        right={
          <TextInput.Icon
            name={passwordVisible ? 'eye' : 'eye-off'}
            onPress={() => setPasswordVisible(!passwordVisible)}
          />
        }
      />
      <TouchableOpacity
        style={{marginBottom: 12}}
        onPress={() => {
          navigation.navigate('ForgotPassword');
        }}>
        <Text style={{textAlign: 'left', fontWeight: 'bold'}}>
          Quên mật khẩu?
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.touchLog, {marginBottom: 21}]}
        onPress={() => {
          navigation.navigate('BottomTabNav');
        }}>
        <Text style={styles.txtTouch}>Đăng nhập</Text>
      </TouchableOpacity>

      <Text style={{fontWeight: 'bold'}}>Hoặc</Text>

      <TouchableOpacity
        style={[
          styles.touchLog,
          {
            backgroundColor: '#395185',
            marginTop: 17,
            marginBottom: 20,
            flexDirection: 'row',
          },
        ]}>
        <Image
          source={require('../image/Vector.png')}
          style={{marginRight: 29.28}}
        />
        <Text style={styles.txtTouch}>Đăng nhập bằng Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.touchLog,
          {backgroundColor: '#FFFFFF', flexDirection: 'row',elevation:6,},
        ]}>
        <Image
          source={require('../image/flat-color-icons_google.png')}
          style={{marginRight: 18}}
        />
        <Text style={[styles.txtTouch, {color: 'black'}]}>
          Đăng nhập bằng Google
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#ffff',
    height: '100%',
    alignItems: 'center',
  },
  txtInput: {
    width: 347,
    height: 58,
    borderWidth: 1,
    borderColor: '#C4C4C4',
    backgroundColor: '#FEFBFA',
    marginBottom: 18,
    paddingLeft: 32,
    paddingRight: 32,
    borderBottomEndRadius: 23,
    borderTopEndRadius: 23,
    borderBottomStartRadius: 23,
    borderTopStartRadius: 23,
  },
  touchLog: {
    backgroundColor: '#D04711',
    width: 347,
    height: 61,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 23,
  },
  txtTouch: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#ffff',
  },
});
