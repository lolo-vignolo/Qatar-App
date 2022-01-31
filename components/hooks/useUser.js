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
    userInfo === USER_STATES.NOT_LOGGED && router.push("/");
  }, [userInfo]);

  return userInfo;
}
