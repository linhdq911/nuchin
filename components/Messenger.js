import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';

const Messager = [
  {
    id: '1',
    userName: 'Quang Linh',
    userImg: require('../image/hinh-nen-hoa-may-tinh-hoa-hong-2.jpg'),
    messageTime: '4 mins ago',
    messageText: 'uây dồi uây Toro quần kinh',
  },
  {
    id: '2',
    userName: 'Son',
    userImg: require('../image/hinh-nen-hoa-may-tinh-hoa-hong-2.jpg'),
    messageTime: '4 mins ago',
    messageText: 'uây dồi uây Toro quần kinh',
  },
  {
    id: '3',
    userName: 'Canh',
    userImg: require('../image/hinh-nen-hoa-may-tinh-hoa-hong-2.jpg'),
    messageTime: '4 mins ago',
    messageText: 'uây dồi uây Toro quần kinh',
  },
  {
    id: '4',
    userName: 'Vu baby',
    userImg: require('../image/hinh-nen-hoa-may-tinh-hoa-hong-2.jpg'),
    messageTime: '4 mins ago',
    messageText: 'uây dồi uây Toro quần kinh',
  },
  {
    id: '5',
    userName: 'Dong',
    userImg: require('../image/hinh-nen-hoa-may-tinh-hoa-hong-2.jpg'),
    messageTime: '4 mins ago',
    messageText: 'uây dồi uây Toro quần kinh',
  },
  {
    id: '6',
    userName: 'Quang Linh',
    userImg: require('../image/hinh-nen-hoa-may-tinh-hoa-hong-2.jpg'),
    messageTime: '4 mins ago',
    messageText: 'uây dồi uây Toro quần kinh',
  },
  {
    id: '7',
    userName: 'Son',
    userImg: require('../image/hinh-nen-hoa-may-tinh-hoa-hong-2.jpg'),
    messageTime: '4 mins ago',
    messageText: 'uây dồi uây Toro quần kinh',
  },
  {
    id: '8',
    userName: 'Canh',
    userImg: require('../image/hinh-nen-hoa-may-tinh-hoa-hong-2.jpg'),
    messageTime: '4 mins ago',
    messageText: 'uây dồi uây Toro quần kinh',
  },
  {
    id: '9',
    userName: 'Vu baby',
    userImg: require('../image/hinh-nen-hoa-may-tinh-hoa-hong-2.jpg'),
    messageTime: '4 mins ago',
    messageText: 'uây dồi uây Toro quần kinh',
  },
  {
    id: '10',
    userName: 'Dong',
    userImg: require('../image/hinh-nen-hoa-may-tinh-hoa-hong-2.jpg'),
    messageTime: '4 mins ago',
    messageText: 'uây dồi uây Toro quần kinh',
  },
];

const Messenger = () => {
  const navigation = useNavigation();

  const [loading, setLoading] = useState(true);
  // if (loading) {
  //       setLoading(false);
  //     }
  setTimeout(loading => {
    setLoading(false);
  }, 2000);

  return (
    <View style={{backgroundColor: '#ffff'}}>
      {loading ? (
        <SkeletonPlaceholder>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{width: 60, height: 60, borderRadius: 50}} />
            <View style={{marginLeft: 20}}>
              <View style={{width: 120, height: 20, borderRadius: 4}} />
              <View
                style={{marginTop: 6, width: 80, height: 20, borderRadius: 4}}
              />
            </View>
          </View>
        </SkeletonPlaceholder>
      ) : (
        <>
          <View style={styles.search}>
            {/* <FontAwesome5
            style={{
              fontSize: 17,
              left:20,
            }}
            name="search"
            /> */}
            <TextInput
              placeholder="Tìm kiếm cuộc trò chuyện"
              style={styles.tipSearch}
            />
          </View>
          
          <FlatList
            data={Messager}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View style={{}}>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    marginHorizontal: 20,
                    marginVertical: 12,
                    borderBottomWidth: 1,
                    borderBottomColor: '#000',
                    paddingBottom: 10,
                  }}
                  onPress={() => {
                    navigation.navigate('ChatMess');
                  }}>
                  <View>
                    <Image
                      source={item.userImg}
                      style={{width: 60, height: 60, borderRadius: 1000}}
                    />
                  </View>

                  <View
                    style={{
                      marginLeft: 15,
                    }}>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={{fontSize: 18, color: '#000000'}}>
                        {item.userName}
                      </Text>
                      <Text style={{color: '#565656', fontSize: 12, left: 20}}>
                        {item.messageTime}
                      </Text>
                    </View>

                    <Text>{item.messageText}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          />
        </>
      )}
    </View>
  );
};

export default Messenger;

const styles = StyleSheet.create({
  search: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  tipSearch: {
    borderWidth: 1,
    width: '90%',
    borderRadius: 22,
    backgroundColor: '#EAEAEA',
    paddingHorizontal: 60,
  },
});
