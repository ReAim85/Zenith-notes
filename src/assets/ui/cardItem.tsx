import { FaExternalLinkAlt } from "react-icons/fa";
import type { CardItemProps } from "./interface/Interfaces";
import { MdDeleteOutline } from "react-icons/md";
import axios from "axios";
import { config } from "../config";
import { useContentFetcher } from "../context/contentFetchContext";

export const CardItems = (props: CardItemProps) => {
  const getTagColor = (tag: string) => {
    const colorList = ["#6366f1", "#10b981", "#ef4444", "#f59e0b", "#8b5cf6"];
    const index = String(tag).charCodeAt(0) % colorList.length;
    return colorList[index];
  };
  const { fetchContentData } = useContentFetcher();
  const handleDeleteContent = async (ID: string | number) => {
    try {
      const deleteContnet = await axios.delete(
        `${config.BeApiUrl}/api/v1/content/${ID}`,
        { withCredentials: true }
      );
      console.log(deleteContnet);
      if (deleteContnet.status === 200) {
        fetchContentData();
        alert("Content Deleted Successfully");
      } else {
        alert("Content wasn't Deleted");
      }
    } catch (err) {
      console.log("something went wrong", err);
    }
  };
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 text-2xl font-semibold">
          <div className="text-gray-400">{props.startIcon}</div>
          <div>{props.title}</div>
        </div>
        <div className="pr-5 text-xl flex gap-3">
          <a href={props.link} target="_blank">
            <FaExternalLinkAlt />
          </a>
          <MdDeleteOutline
            className="size-6 cursor-pointer"
            onClick={() => handleDeleteContent(props.itemId)}
          />
        </div>
      </div>
      <div className="text-center text-indigo-800 font-bold text-sm pt-5"></div>
      <div className="pt-5">
        <iframe
          className="w-full h-60 rounded-md overflow-none"
          width="560"
          height="315"
          src={
            props.type == "video"
              ? props.link.replace("watch", "embed").replace("?v=", "/") ||
                undefined
              : props.link
          }
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="flex flex-wrap gap-2 pt-3">
        {
          //@ts-ignore
          (props.tags?.[0] || []).map((tag, index) => (
            <span
              key={index}
              className="text-white text-sm px-3 py-1 rounded-full font-semibold mr-2"
              style={{ backgroundColor: getTagColor(tag) }}
            >
              #{tag}
            </span>
          ))
        }
      </div>
    </div>
  );
};
