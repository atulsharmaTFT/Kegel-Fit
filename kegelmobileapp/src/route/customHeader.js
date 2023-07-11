import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icons from '../libs/icons';
import { Colors ,Fonts, Metrics} from '../Themes';

const CustomHeader = ({ navigation, title }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
   
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={toggleDrawer}>
        <Icons
            name={"menu"}
            type={"Ionicons"}
            style={{
              fontSize:Fonts.twenty2,
              color: Colors.purpleK,
            }}
            />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: Colors.purpleK,
    padding: Metrics.rfv(15),
  },
  title: {
    color: Colors.purpleK,
    fontSize: Fonts.twenty,
    marginLeft: Metrics.rfv(10),
  },
});

export default CustomHeader;
