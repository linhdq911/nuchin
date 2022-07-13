import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Setting = () => {
    const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.mainSet}>
        <TouchableOpacity style={styles.touchSet}>
          <Text style={styles.txtSet}>Thông tin và tài khoản</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchSet}>
          <Text style={styles.txtSet}>Ngôn ngữ và khu vực</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchSet}>
          <Text style={styles.txtSet}>Phương thức thanh toán</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchSet}>
          <Text style={styles.txtSet}>Giới thiệu bạn bè</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchSet}>
          <Text style={styles.txtSet}>Trung tâm trợ giúp</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchSet}>
          <Text style={styles.txtSet}>Điều khoản và chính sách</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchSet}>
          <Text style={styles.txtSet}>Gửi phản hồi</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: '#D04711',
            width: '50%',
            height: 39,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 20,
          }}>
          <Text
            style={{
              color: '#000000',
              fontSize: 18,
            }}
            onPress={() => {
              navigation.navigate('TabTop');
            }}>
            Đăng xuất
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Setting;

const styles = StyleSheet.create({
  mainSet: {
    backgroundColor: '#ffff',
    height: '100%',
    alignItems: 'center',
  },
  touchSet: {
    width: '90%',
    height: 60,
    backgroundColor: '#Ffff',
    width: '90%',
    height: 60,
    justifyContent: 'center',
    marginVertical: 15,
    borderRadius: 22,
    paddingHorizontal: 20,
    elevation: 22,
  },
  txtSet: {
    color: '#000000',
    fontSize: 16,
  },
});
