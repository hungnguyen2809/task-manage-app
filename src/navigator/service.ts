import {
  CommonActions,
  DrawerActions,
  NavigationContainerRef,
  NavigationProp,
  NavigationState,
  PartialState,
  Route,
  StackActions,
  useNavigation,
} from '@react-navigation/native';

type ResetState =
  | PartialState<NavigationState>
  | NavigationState
  | (Omit<NavigationState, 'routes'> & { routes: Omit<Route<string>, 'key'>[] });

interface IConfig {
  navigator?: NavigationContainerRef<any>;
}

const config: IConfig = {};

export const useAppNavigation = () => useNavigation<NavigationProp<any>>();

export function setNavigator(navRef: NavigationContainerRef<any>): void {
  config.navigator = navRef;
}

function navigate(name: string, params?: object, merge?: boolean): void {
  if (config.navigator && name) {
    const action = CommonActions.navigate({ name, params, merge });
    config.navigator.dispatch(action);
  }
}

function goBack(): void {
  if (config.navigator) {
    const action = CommonActions.goBack();
    config.navigator.dispatch(action);
  }
}

function reset(state: string | ResetState): void {
  if (typeof state === 'string') {
    state = { routes: [{ name: state }] };
  }
  if (config.navigator) {
    const action = CommonActions.reset(state);
    config.navigator.dispatch(action);
  }
}

function setParams(params: Partial<{}>): void {
  if (config.navigator) {
    const action = CommonActions.setParams(params);
    config.navigator.dispatch(action);
  }
}

function push(name: string, params?: object): void {
  if (config.navigator) {
    const action = StackActions.push(name, params);
    config.navigator.dispatch(action);
  }
}

function replace(name: string, params?: object): void {
  if (config.navigator) {
    const action = StackActions.replace(name, params);
    config.navigator.dispatch(action);
  }
}

function toggleDrawer(): void {
  config.navigator?.dispatch(DrawerActions.toggleDrawer());
}

function canGoBack(): boolean {
  return config.navigator?.canGoBack() || false;
}

function resetRoot(state?: PartialState<NavigationState> | NavigationState) {
  return config.navigator?.resetRoot(state);
}

function getParent(id?: string) {
  return config.navigator?.getParent(id);
}

function getRootState() {
  return config.navigator?.getRootState();
}

function getCurrentRoute() {
  return config.navigator?.getCurrentRoute();
}

export const navigationService = {
  push,
  reset,
  goBack,
  replace,
  navigate,
  setParams,
  canGoBack,
  toggleDrawer,
  resetRoot,
  getParent,
  getRootState,
  getCurrentRoute,
};
