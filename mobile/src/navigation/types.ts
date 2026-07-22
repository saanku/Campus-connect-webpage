export type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
  OtpVerification: { email?: string };
  ForgotPassword: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Feed: undefined;
  Chat: undefined;
  Notes: undefined;
  More: undefined;
};

export type MoreStackParamList = {
  MoreHome: undefined;
  Marketplace: undefined;
  Events: undefined;
  Profile: undefined;
  Admin: undefined;
};
