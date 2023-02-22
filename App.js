/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import TestSvg from './assets/ask-doctor.svg'
import Svg, { Circle } from 'react-native-svg'
import Slider from 'react-native-slider'
const App = () => {
  const [selectedFile, setselectedFile] = useState(null)
  const [sliderVal, setSliderVal] = useState(0)
  const [File, setFile] = useState(null)
  const selectDocument = async () => {
    const file = await DocumentPicker.pick({
      type: [DocumentPicker.types.allFiles],
    });
    if (file) {
      setselectedFile(file[0]);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={'light-content'} backgroundColor="#209797" />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {selectedFile &&
          <>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: "#000" }}>
              {selectedFile.name}
            </Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: "#000" }}>
              {''}
            </Text>
          </>
        }

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={selectDocument}
          style={{ padding: 15, backgroundColor: "#209797", borderRadius: 10, elevation: 5 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: "#fff" }}>
            Select SVG
          </Text>
        </TouchableOpacity>

        <Slider
          value={sliderVal}
          minimumValue={1}
          maximumValue={10}
          onValueChange={setSliderVal}
          style={{ width: '80%' }} />

        <Svg
          viewBox="0 0 100 100"
          height={100}
          width={100}
          strokeWidth={sliderVal}>
          <Circle r={40} cx={50} cy={50} fill='#fff0' stroke={'#000'} />
        </Svg>

      </View>
    </SafeAreaView>
  );
};

export default App;
