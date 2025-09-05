import { atom } from "jotai";
import type { ContentData } from "../ui/interface/Interfaces";

export const LoginDetails = atom({
  username: "",
  password: "",
});

export const User = atom<string>();
export const Loading = atom<boolean>(true);
export const IsLoggedIn = atom<boolean>(false);
export const Content = atom([
  {
    itemId: 0,
    text: "",
    link: "",
    tags: "",
    type: "",
  },
]);
export const SharedContent = atom([
  {
    itemId: 0,
    text: "",
    link: "",
    tags: "",
    type: "",
  },
]);
export const OembeddingLink = atom("");
export const AddContentActive = atom(false);
export const TagsArray = atom("");

export const ContentValues = atom<ContentData>({
  type: "",
  link: "",
  title: "",
  tags: [],
});

export const ContentTypeAtom = atom<string>()
export const IsSharedAtom = atom<boolean>(false)
export const ShareLinkAtom = atom()
export const BeShareLinkAtom = atom()
export const SwitchToCatogery = atom(false)

