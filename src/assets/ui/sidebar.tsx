import { SidebarComponent } from "./sidebaritem";
import {
  MdOndemandVideo,
  MdOutlineAudiotrack,
  MdOutlineImage,
  MdOutlineArticle,
} from "react-icons/md";
import { LuBrain } from "react-icons/lu";

export const Sidebar = () => {
  return (
    <div className="bg-gray-100 text-white w-80 space-y-6 py-7 px-4 h-screen">
      <div className="flex items-center gap-2">
        <LuBrain className="size-9 text-indigo-800" />
        <span className="text-2xl font-bold text-gray-800">Second Brain</span>
      </div>
      <div className="py-7 px-4 space-y-10">
        <SidebarComponent text="Images" icon={<MdOutlineImage />} />
        <SidebarComponent text="Videos" icon={<MdOndemandVideo />} />
        <SidebarComponent text="Articles" icon={<MdOutlineArticle />} />
        <SidebarComponent text="Audios" icon={<MdOutlineAudiotrack />} />
      </div>
    </div>
  );
};
