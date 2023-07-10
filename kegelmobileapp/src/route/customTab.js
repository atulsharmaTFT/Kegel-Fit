import React from 'react';
import { View, TouchableOpacity, StyleSheet , Text} from 'react-native';
import Icons from '../libs/icons';
import { Colors, Fonts, Metrics } from '../Themes';

const CustomTabBar = ({ state, descriptors, navigation }) => {
    const icons = [
        { name: "home", type: "AntDesign", color: Colors.purpleK },
        { name: "dumbbell", type: "MaterialCommunityIcons", color: Colors.purpleK },
        { type: "Ionicons", name: "md-stats-chart", color: Colors.purpleK },
        { name: "blogger", type: "Fontisto", color: Colors.purpleK },
      ];
  return (
    <View style={styles.tabContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const iconName = isFocused ? 'home' : 'home-outline';
        const tabName = route.name;
        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={styles.tabButton}
          >
            <Icons
            name={icons[index].name}
            type={icons[index].type}
            containerSt={index == 2 && styles.todayIcon}
            style={{
              fontSize:Fonts.twenty2,
              color: isFocused ? icons[index].color : Colors.gray,
            }}
            />
            <Text style={[styles.tabText, isFocused && styles.tabTextFocused]}>
              {tabName}
            </Text>
            
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    height: Metrics.rfv(60),
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: 'transparent',
  },
  tabButton: {
    flex: 1,
    backgroundColor:Colors.shadowColorWhite,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    marginTop: Metrics.rfv(4),
    fontSize: Fonts.twelve,
    color: Colors.gray2,
  },
  tabTextFocused: {
    fontSize:Fonts.twelve,
    color:Colors.purpleK  
  },
});

export default CustomTabBar;
