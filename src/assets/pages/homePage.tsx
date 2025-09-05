import { FaCheck, FaPlus, FaShareAlt } from "react-icons/fa";
import { Sidebar } from "../ui/sidebar";
import { Button } from "../ui/button";
import { HomeCardComp } from "./homePageCardComponent";
import {
  AddContentActive,
  BeShareLinkAtom,
  IsSharedAtom,
  ShareLinkAtom,
  SwitchToCatogery,
} from "./Atoms";
import { atom, useAtom, useAtomValue, useSetAtom } from "jotai";
import { AddContentModal } from "./addContentBox";
import copy from "copy-to-clipboard";
import axios from "axios";
import { config } from "../config";
import { Category } from "./categoryPage";

const ShareToolTipAtom = atom(false);
const CopiedAtom = atom(false);

export const HomePage = () => {
  const setAddContentShow = useSetAtom(AddContentActive);
  const [showToolTip, setShowToolTip] = useAtom(ShareToolTipAtom);
  const [isShared, setIsShared] = useAtom(IsSharedAtom);
  const [ShareLink, setShareLink] = useAtom(ShareLinkAtom);
  const BeShareLink = useAtomValue(BeShareLinkAtom);
  const [copied, setCopied] = useAtom(CopiedAtom);
  const isCatogery = useAtomValue(SwitchToCatogery);

  // console.log(showToolTip);

  return (
    <div>
      <div className="flex bg-gray-100 h-full">
        <AddContentModal />
        <div id="sidebar">
          <Sidebar />
        </div>
        <div id="top-bar" className="w-[calc(100vw-200px)]">
          <div id="top-bar" className="flex justify-between p-15">
            <div className="flex items-center gap-4 text-4xl font-bold text-gray-800">
              All Contents
              <label
                className="cursor-pointer mt-2 flex items-center gap-1"
                onFocus={() => setShowToolTip(true)}
                onBlur={() => setShowToolTip(false)}
              >
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={isShared}
                  onChange={async () => {
                    try {
                      const fetchShareLink = await axios.post(
                        `${config.BeApiUrl}/api/v1/brain/share`,
                        { Switch: !isShared },
                        { withCredentials: true }
                      );
                      setShareLink(fetchShareLink.data.SharableLink);
                      setIsShared(!isShared);
                    } catch (err) {
                      console.log(err);
                    }
                  }}
                />
                <div className="relative w-11 h-6 bg-gray-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                {showToolTip ? (
                  <div className="absolute p-2 text-sm bg-gray-800 ml-15 text-white rounded shadow-lg w-48">
                    Toggle this to turn Content sharing On and Off.
                  </div>
                ) : null}
              </label>
            </div>
            <div className="flex gap-5">
              <Button
                text="Share Brain"
                variant="secondary"
                onClick={() => {
                  {
                    if (!isShared) {
                      setShowToolTip(true);
                      setTimeout(() => {
                        setShowToolTip(false);
                      }, 5000);
                    }
                  }
                  //@ts-ignore
                  {
                    ShareLink == ""
                      ? copy(`${config.FeShareUrl}/${BeShareLink}`)
                      : //@ts-ignore
                        copy(`${config.FeShareUrl}/${BeShareLink}`);
                  }
                  {
                    setCopied(true),
                      setTimeout(() => {
                        setCopied(false);
                      }, 3000);
                  }
                }}
                size="lg"
                startIcon={
                  <div className="relative h-4 w-4">
                    <FaShareAlt
                      className={`absolute inset-0 transition-all duration-300 ease-in-out ${
                        copied ? "opacity-0 scale-75" : "opacity-100 scale-100"
                      }`}
                    />
                    <FaCheck
                      className={`absolute inset-0 transition-all duration-300 ease-in-out ${
                        copied ? "opacity-100 scale-100" : "opacity-0 scale-75"
                      }`}
                    />
                  </div>
                }
              />
              <Button
                text="Add Content"
                variant="primary"
                onClick={() => setAddContentShow(true)}
                size="lg"
                startIcon={<FaPlus />}
              />
            </div>
          </div>
          <div id="hero" className="">
            {isCatogery ? <Category /> : <HomeCardComp />}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
