import {useSelector, Provider} from 'react-redux';
import store from './src/Store';
import {NavigationContainer} from '@react-navigation/native';
import {AuthStack, MainStack, OnboardingStack} from './src/route';

function App() {
  // const { token } = useSelector((state) => state?.user);

  const MainPage = () => {
    let onBoardingDone = false;
    let token = false;
    return (
      <>
        {!onBoardingDone ? (
          <OnboardingStack />
        ) : token ? (
          <MainStack />
        ) : (
          <AuthStack />
        )}
      </>
    );
  };

  return (
    // <Provider store={store}>
    <NavigationContainer>
      <MainPage />
    </NavigationContainer>
    // </Provider>r
  );
}

export default App;
