import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';

const About = () => {
  return (
    <ScrollView>
      <View style={styles.mainAbout}>
        <View style={styles.cons1}>
          <Text style={{fontSize: 30, color: '#FFFFFF'}}> Thông tin</Text>
        </View>

        <View style={styles.cons2}>
          <View style={{marginHorizontal: 20, flexDirection: 'row'}}>
            <Image
              source={require('../image/hinh-nen-hoa-may-tinh-hoa-hong-2.jpg')}
              style={{width: 89, height: 105, borderRadius: 22}}
            />
            <View style={{marginRight: 80, marginLeft: 10}}>
              <Text style={{color: '#4D4A4A', fontSize: 18}}>Quang Linh</Text>
              <Text style={styles.txt1}>quanglinh09@nuchin.vn</Text>
              <Text style={styles.txt1}>0366 352 519</Text>
              <Text style={styles.txt1}>
                KTX Mỹ Đình 2, Nguyễn Cơ Thạch, Nam Từ Liêm, hà nội
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.touch2}>
          <Text style={styles.txtTouch}>Liên hệ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touch2}>
          <Text style={styles.txtTouch}>Phản hồi & Hoàn tiền</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touch2}>
          <Text style={styles.txtTouch}>Về chúng tôi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touch2}>
          <Text style={styles.txtTouch}>Điều khoản & Chính sách</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>Đánh giá chúng tôi</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Báo cáo lỗi</Text>
        </TouchableOpacity>
        <View style={{flexDirection:'row'}}>
          <Text>Ghé thăm website </Text>
          <TouchableOpacity>
            <Text style={{color:'#D04711'}}>nuchin.com</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default About;

const styles = StyleSheet.create({
  mainAbout: {
    backgroundColor: '#ffff',
    height: '100%',
    alignItems: 'center',
  },
  cons1: {
    backgroundColor: '#D04711',
    width: '100%',
    height: 151,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cons2: {
    backgroundColor: '#FFFFFF',
    elevation: 6,
    width: '90%',
    // position: 'absolute',
    top: '-4%',
    height: 155,
    borderRadius: 22,
    justifyContent: 'center',
  },
  txt1: {
    color: '#000000',
  },
  touch2: {
    backgroundColor: '#FFFFFF',
    elevation: 6,
    width: '90%',
    borderRadius: 22,
    height: 60,
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  txtTouch: {
    fontSize: 16,
    color: '#4D4A4A',
  },
});
