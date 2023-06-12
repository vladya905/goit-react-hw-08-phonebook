const userEmail = state => state.user.profile.email;
const isFetchingCurrentUser = state => state.user.isFetchingCurrentUser;
const isLogin = state => state.user.isLogin;
const isLoading = state => state.user.isLoading;
const getToken = state => state.user.token;
const errorRegister = state => state.user.errors.register;
const errorLogin = state => state.user.errors.login;
const errorLogout = state => state.user.errors.logout;

export {
  userEmail,
  isFetchingCurrentUser,
  isLogin,
  isLoading,
  getToken,
  errorRegister,
  errorLogin,
  errorLogout,
};
