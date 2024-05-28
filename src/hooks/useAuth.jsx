import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";

const useAuth = () => {
  const auth = useContext(AuthContext); // If we are not create useAuth hook, we would have to use useContext(AuthContext) in every component where we need to access the auth object.
  return auth;
};

export default useAuth;
