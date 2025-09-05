import {
  MdOndemandVideo,
  MdOutlineArticle,
  MdOutlineBrokenImage,
  MdOutlineAudiotrack,
} from "react-icons/md";
import { Card } from "../ui/card";
import { useEffect } from "react";
import { useAtomValue } from "jotai";
import { Content } from "./Atoms";
import { useContentFetcher } from "../context/contentFetchContext";

export const HomeCardComp = () => {
  const {fetchContentData} = useContentFetcher();
  const contentItems = useAtomValue(Content);

  useEffect(() => {
    fetchContentData()
  }, []);

  const data = contentItems.map((x) => (
    //@ts-ignore
    <Card
      key={x.itemId}
      itemId={x.itemId}
      text={x.text}
      startIcon={
        x.type === "video" ? (
          <MdOndemandVideo />
        ) : x.type === "audio" ? (
          <MdOutlineAudiotrack />
        ) : x.type === "article" ? (
          <MdOutlineArticle />
        ) : x.type === "image" ? (
          <MdOutlineBrokenImage />
        ) : null
      }
      link={x.link}
      type={x.type}
      tags={[x.tags]}
    />
  ));
  return <div className="flex flex-wrap gap-10 px-13 ml-15">{data}</div>;
};
