import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import {Styles} from '../../stylesheets/UserDetails';
import GenderButton from '../../components/UI/Button/GenderButton';
import Button from '../../components/UI/Button/Button';

const Male_Image = require('../../assets/male_gender.png');
const Female_Image = require('../../assets/female_gender.png');
const UserDetails = () => {
  const [selectedScreen, setSelectedScreen] = useState(0);
  const [userData, setUserData] = useState({gender: ''});
  const handlePressGenderButton = data => {
    setUserData({...userData, gender: data});
  };
  const handleContinue = () => {
    setSelectedScreen(prevScreen => prevScreen + 1);
  };
  const GenderTab = () => {
    return (
      <View style={Styles.genderContainer}>
        <View style={Styles.titleContainer}>
          <Text style={Styles.title}>
            Gender Identity: "Embrace Your Unique Fitness Approach!"
          </Text>
        </View>
        <View style={Styles.genderIconContainer}>
          <Image
            style={
              userData?.gender === 'male'
                ? Styles.selectedGenderImage
                : Styles.genderImage
            }
            source={Male_Image}></Image>
          <Image
            style={
              userData?.gender === 'female'
                ? Styles.selectedGenderImage
                : Styles.genderImage
            }
            source={Female_Image}></Image>
        </View>
        <View style={Styles.genderButtonContainer}>
          <GenderButton
            handlePress={handlePressGenderButton}
            gender={userData?.gender}
          />
        </View>
        <View style={Styles.otherButtonContainer}>
          <Button
            onPress={handleContinue}
            titleStyle={Styles.buttonTitle}
            style={Styles.continueButton}
            title="Continue"></Button>
        </View>
      </View>
    );
  };
  const AgeTab = () => {
    return (
      <View>
        <Text>AgeTab</Text>
      </View>
    );
  };
  const WeightTab = () => {
    return (
      <View>
        <Text>WeightTab</Text>
      </View>
    );
  };
  const HeightTab = () => {
    return (
      <View>
        <Text>HeightTab</Text>
      </View>
    );
  };
  const ActivityTab = () => {
    return (
      <View>
        <Text>ActivityTab</Text>
      </View>
    );
  };
  const Details = [
    {
      index: 0,
      name: 'Gender',
      description: 'Gender Identity: Embrace Your Unique Fitness Approach!',
      content: GenderTab(),
    },
    {
      index: 1,
      name: 'Age',
      description: 'Enter Your Age: Unlock the Power of Time!',
      content: AgeTab(),
    },
    {
      index: 2,
      name: 'Weight',
      description: "Weight Matters: Let's Assess Your Fitness Journey!",
      content: WeightTab(),
    },
    {
      index: 3,
      name: 'Height',
      description: 'Height Check: Stand Tall on Your Path to Wellness!',
      content: HeightTab(),
    },
    {
      index: 4,
      name: 'Activity',
      description: 'Activity Assessment: Discover Your Exercise Intensity!',
      content: ActivityTab(),
    },
  ];
  return (
    <View style={Styles.container}>
      <View style={Styles.contentContainer}>
        {Details[selectedScreen].content}
      </View>
      <View style={Styles.indexContainer}>
        <Text style={Styles.indexText}>{selectedScreen}/5</Text>
      </View>
    </View>
  );
};

export default UserDetails;
