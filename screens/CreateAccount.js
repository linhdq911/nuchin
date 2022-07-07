import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import React from 'react';
const CreateAccount = () => {
  return (
    <SafeAreaView>
      <View style={styles.top}>
        <View style={{ alignSelf: 'center', top:87 }}>
          <Image
            source={require('../image/image1.png')}
            style={styles.image1}
          />
        </View>
        {/* <TabTop/> */}
      </View>
    </SafeAreaView>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({
  top: {
    backgroundColor: '#D04711',
    width: 414,
    height: 345,
    borderRadius: 43,
  },
  image1: {
    width: 181,
    height: 181,
    top:'0%',
    bottom:'0%',
  },
});
