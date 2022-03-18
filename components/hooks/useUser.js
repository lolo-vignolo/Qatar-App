import { isAuthentificationChanged } from "../../firebase/client";
import { useRouter } from "next/router";

import { useEffect, useState } from "react";

export const USER_STATES = {
  NOT_LOGGED: null,
  NOT_KNOW: undefined,
};

export default function useUser() {
  const [userInfo, setUser] = useState(USER_STATES.NOT_KNOW);
  const router = useRouter();

  useEffect(() => {
    isAuthentificationChanged((user) => setUser(user));
  }, []);

  useEffect(() => {
    const setUserInfo = () =>{
      userInfo === USER_STATES.NOT_LOGGED && router.push("/");
    }
    setUserInfo()

  }, [userInfo]);

  
  return userInfo;
}





