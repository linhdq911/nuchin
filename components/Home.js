import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';

const pic = [
  {
    name: 'Pic_1',
    img: require('../image/banhMi.png'),
  },
  {
    name: 'Pic_2',
    img: require('../image/banhMi.png'),
  },
  {
    name: 'Pic_3',
    img: require('../image/banhMi.png'),
  },
];

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const ratio = 414 / 407;

const Home = () => {
  return (
    <SafeAreaView style={styles.main}>
      <View>
        <View>
          <Text>Home</Text>
          <Text>số 1 Trịnh Văn Bô, Nam Từ Liêm...</Text>
        </View>
        <View>
          <TextInput placeholder="Tìm kiếm" style={styles.tipSearch} />
        </View>
      </View>
      {/* <View style={styles.bigView}> */}
        <Swiper
          autoplay={true}
          paginationStyle={{
            bottom: windowWidth / ratio - 50,
          }}
          style={{}}
          dotStyle={styles.dot}
          activeDotStyle={styles.dot}>
          {pic.map((item, index) => (
            <View key={index} style={styles.PicView}>
              <Image
                style={styles.img}
                resizeMode={item.name == 'Pic_5' ? 'cover' : 'contain'}
                source={item.img}
              />
              <View />
            </View>
          ))}
        </Swiper>
      {/* </View> */}
      
      <View>
        <Text>cfgh</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#ffff',
    height: '100%',
    flex: 1,
    paddingHorizontal:20
  },
  tipSearch: {
    width: '90%',
    height: 39,
    backgroundColor: '#F3F3F3',
    borderRadius: 25,
    marginHorizontal: 20,
    paddingHorizontal: 20,
  },
  img: {
    width: '100%',
    height: 191,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    top: 60.5,
  },
  PicView: {
    flex: 1,
  },
  bigView: {
    // width: windowWidth * 1,
    aspectRatio: ratio,
    backgroundColor: '#F2EFEF',
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: '#ABA8A8',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 1,
    elevation: 3,
    top: 23,
  },
});
