export const PrivateRoute = ({ children, isAllow }) => {
  if (!isAllow) {
    //redirect
  }
  return { children };
};
