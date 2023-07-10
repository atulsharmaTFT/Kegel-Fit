import React, { useCallback } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import Foundation from "react-native-vector-icons/Foundation";

import EvilIcons from "react-native-vector-icons/EvilIcons";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome5Pro from "react-native-vector-icons/FontAwesome5Pro";
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Octicons from "react-native-vector-icons/Octicons";
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  View,
  Text,
} from "react-native";
import Ripple from "react-native-material-ripple";
import { Colors, Metrics } from "../Themes";
import debounce from "debounce";
export const loadAllIcons = () => {
  AntDesign.loadFont();
  Entypo.loadFont();
  Foundation.loadFont();
  Feather.loadFont();
  EvilIcons.loadFont();
  FontAwesome.loadFont();
  FontAwesome5.loadFont();
  FontAwesome5Pro.loadFont();
  Ionicons.loadFont();
  SimpleLineIcons.loadFont();
  Fontisto.loadFont();
  MaterialIcons.loadFont();
  MaterialCommunityIcons.loadFont();
  Octicons.loadFont();
};
const data = {
  AntDesign: (props) => (
    <AntDesign name={props.name} size={props.size} style={props.style} disabled={props.disabled}/>
  ),
  Entypo: (props) => (
    <Entypo name={props.name} size={props.size} style={props.style} disabled={props.disabled}/>
  ),
  Foundation: (props) => <Foundation name={props.name} style={props.style} disabled={props.disabled}/>,
  EvilIcons: (props) => (
    <EvilIcons name={props.name} size={props.size} style={props.style} disabled={props.disabled}/>
  ),
  Feather: (props) => (
    <Feather name={props.name} size={props.size} style={props.style} disabled={props.disabled}/>
  ),
  FontAwesome: (props) => <FontAwesome name={props.name} style={props.style} disabled={props.disabled}/>,
  FontAwesome5: (props) => (
    <FontAwesome5 name={props.name} size={props.size} style={props.style} disabled={props.disabled}/>
  ),
  FontAwesome5Pro: (props) => (
    <FontAwesome5Pro name={props.name} style={props.style} disabled={props.disabled}/>
  ),
  Ionicons: (props) => <Ionicons name={props.name} style={props.style} disabled={props.disabled}/>,
  Fontisto: (props) => <Fontisto name={props.name} style={props.style} disabled={props.disabled}/>,
  MaterialIcons: (props) => (
    <MaterialIcons name={props.name} size={props.size} style={props.style} disabled={props.disabled} />
  ),
  MaterialCommunityIcons: (props) => (
    <MaterialCommunityIcons
      name={props.name}
      size={props.size}
      style={props.style}
      disabled={props.disabled}
    />
  ),
  SimpleLineIcons: (props) => (
    <SimpleLineIcons name={props.name} style={props.style} disabled={props.disabled} />
  ),
  Octicons: (props) => (
    <Octicons name={props.name} style={props.style} size={props.size} />
  ),
};

export default function Icons(props) {
  if (!props.name) return null;
  else if (props.type && props.isRippleShow) {
    return (
      <Ripple
        style={{
          height: Metrics.rfv(50),
          width: Metrics.rfv(50),
          justifyContent: "center",
          alignItems: "center",
        }}
        rippleColor={Colors.grayVariant}
        rippleOpacity={1.5}
        rippleDuration={600}
        rippleCentered={true}
        rippleContainerBorderRadius={50}
        rippleSize={100}
        rippleFades={true}
        onPress={props.onPress}
        disabled={props.disabled}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {data[props.type](props)}
        </View>
      </Ripple>
    );
  } else if (props.type) {
    return (
      <TouchableOpacity
        disabled={!props.onPress || props.disabled}
        // onPress={props.onPress && useCallback(debounce(props.onPress), [])}
        onPress={props.onPress && debounce(props.onPress)}
        style={[props.tStyle, props.containerSt]}
        onStartShouldSetResponder={() => true}
        hitSlop={props.hitSlop}
      >
        {data[props.type](props)}
      </TouchableOpacity>
    );
  }
  return <AntDesign {...props} />;
}
