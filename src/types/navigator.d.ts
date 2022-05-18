declare namespace iNavigator {
  type BottomParamList = {
    Home: undefined;
    Calendar: undefined;
    Focus: undefined;
    Profile: undefined;
  };

  type RootParamList = {
    Intro: undefined;
    OnBoarding: undefined;
    GetStart: undefined;
    Login: undefined;
    Register: undefined;
    FingerPrintScanner: undefined;
    Main: {
      screen: keyof BottomParamList;
    };
  }
}