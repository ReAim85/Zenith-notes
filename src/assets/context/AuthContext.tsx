import axios from "axios";
import { useEffect } from "react";
import { config } from "../config";
import { useAtom, useSetAtom } from "jotai";
import { BeShareLinkAtom, IsLoggedIn, IsSharedAtom, Loading, User } from "../pages/Atoms";

export const AuthContext = () => {
  const [user, setUser] = useAtom(User);
  const setLoading = useSetAtom(Loading);
  const setIsLoggedIn = useSetAtom(IsLoggedIn);
  const setIsShared = useSetAtom(IsSharedAtom)
  const setShareLink = useSetAtom(BeShareLinkAtom)
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const fetchDetails = await axios.get(
          `${config.BeApiUrl}/api/v1/auth/me`,
          { withCredentials: true }
        );
        const username = fetchDetails.data.message.username;
        const isShared = fetchDetails.data.message.share;
        const shareLink = fetchDetails.data.message.shareKey;
        setUser(username);
        setIsShared(isShared);
        setShareLink(shareLink)
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    if (user) {
      setIsLoggedIn(true);
    }
  }, [user]);
};
