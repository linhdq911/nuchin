import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React, {useEffect} from 'react';
import Swiper from 'react-native-swiper';
import {useNavigation} from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const pic = [
  {
    name: 'Pic_1',
    img: require('../image/nungiaohang1.png'),
    title: 'Hãy để Nunchin giải quyết bữa trưa cho bạn',
  },
  {
    name: 'Pic_2',
    img: require('../image/Group_389.png'),
    title: 'Tự chọn bữa trưa từng ngày theo sở thích',
  },
  {
    name: 'Pic_3',
    img: require('../image/Ellipse_12.png'),
    title: 'Nunchin sẽ giao tận bữa trưa đến tay bạn',
  },
];
const ratio = 414 / 407;

const WelcomeScr2 = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{backgroundColor: '#ffff',height:'100%'}}>
      <View style={{top: 29, left: 311, position: 'absolute'}}>
        <TouchableOpacity style={{}}>
          <Text
            style={{
              fontSize: 16,
              textAlign: 'left',
              letterSpacing: 0.01,
              fontWeight: 'bold',
              color: '#3D2B2B',
            }}>
            Bỏ qua
          </Text>
        </TouchableOpacity>
      </View>
      {/* <View style={{backgroundColor: 'blue', top: 53, }}> */}
      <View style={styles.bigView}>
        <Swiper
          autoplay={true}
          // paginationStyle={{
          //   bottom: windowWidth / ratio - 30,
          // }}
          dotStyle={styles.dot}
          activeDotStyle={styles.dot}>
          {pic.map((item, index) => (
            <View key={index} style={styles.PicView}>
              <View style={{marginHorizontal: 60, marginVertical: 18}}>
                <Text
                  style={{
                    color: '#1C1C1C',
                    fontSize: 24,
                    textAlign: 'center',
                  }}>
                  {item.title}
                </Text>
              </View>
              <Image
                style={styles.img}
                resizeMode={item.name == 'Pic_5' ? 'cover' : 'contain'}
                source={item.img}
              />
              <View />
            </View>
          ))}
        </Swiper>
      </View>

      <View style={{alignItems: 'center', top: 150}}>
        <TouchableOpacity
          style={styles.addUser}
          onPress={() => {
            navigation.navigate('TabTop');
          }}>
          <Text style={styles.txt1}>Tạo tài khoản mới</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touch2}
          onPress={() => {
            navigation.navigate('TabTop');
          }}>
          <Text style={styles.txt2}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScr2;

const styles = StyleSheet.create({
  addUser: {
    width: 335,
    height: 50,
    backgroundColor: '#D04711',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    // top: 300,
  },
  txt1: {
    position: 'absolute',
    fontSize: 14,
    color: '#FFFFFF',
  },
  txt2: {
    fontSize: 16,
    color: '#D04711',
    // top: '84.15%',
  },
  touch2: {
    bottom: '13.17%',
    top: 33,
  },
  bigView: {
    width: windowWidth * 1,
    aspectRatio: ratio,
    top: 53,
  },
  img: {
    width: '100%',
    height: '60%',
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    top: 60.5,
  },
  PicView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
