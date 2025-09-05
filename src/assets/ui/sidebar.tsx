import { SidebarComponent } from "./sidebaritem";
import {
  MdOndemandVideo,
  MdOutlineAudiotrack,
  MdOutlineImage,
  MdOutlineArticle,
} from "react-icons/md";
import { LuBrain } from "react-icons/lu";
import { useSetAtom } from "jotai";
import { SwitchToCatogery } from "../pages/Atoms";

export const Sidebar = () => {
  const setIsSharedCatogery = useSetAtom(SwitchToCatogery);
  return (
    <div className="bg-white text-white w-100 space-y-6 py-7 px-4 h-full border-r border-slate-300">
      <div
        className="flex items-center gap-2 fixed cursor-pointer"
        onClick={() => setIsSharedCatogery(false)}
      >
        <LuBrain className="size-15 text-indigo-800 cursor-pointer" />
        <span className="text-4xl font-bold text-gray-800">Second Brain</span>
      </div>
      <div className="px-8 mt-35 space-y-6 fixed">
        <SidebarComponent text="Images" icon={<MdOutlineImage />} />
        <SidebarComponent text="Videos" icon={<MdOndemandVideo />} />
        <SidebarComponent text="Articles" icon={<MdOutlineArticle />} />
        <SidebarComponent text="Audios" icon={<MdOutlineAudiotrack />} />
      </div>
    </div>
  );
};
