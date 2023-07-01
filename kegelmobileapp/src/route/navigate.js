import {createNavigationContainerRef} from '@react-navigation/native';
import {StackActions} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    // Perform navigation if the react navigation is ready to handle actions
    navigationRef.navigate(name, params);
  } else {
    // You can decide what to do if react navigation is not ready
    // You can ignore this, or add these actions to a queue you can call later
  }
}

export const changeStack = stackName => {
  resetRoot(stackName);
};

export function push(...args) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(args));
  }
}

const resetRoot = routeName => {
  navigationRef.current?.resetRoot({
    index: 0,
    routes: [{name: routeName}],
  });
};

export const getRoute = () => {
  if (navigationRef.isReady()) {
    const state = navigationRef.current;
  }
};

export function getCurrentRoute() {
  if (navigationRef.current && navigationRef.current) {
    let rootState = navigationRef.current.getRootState();
    let route = rootState.routes[rootState?.index];
    while (route.state) {
      route = route.state.routes[route?.state?.index];
    }
    return route;
  }
}
