/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import Slider from 'react-native-slider';

const App = () => {
  const [sliderVal, setSliderVal] = useState(0);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={'light-content'} backgroundColor="#209797" />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

        <Slider
          value={sliderVal}
          minimumValue={1}
          maximumValue={10}
          onValueChange={setSliderVal}
          style={{ width: '50%' }} />

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
