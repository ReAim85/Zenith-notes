import { useAtomValue } from "jotai";
import { Content, ContentTypeAtom } from "./Atoms";
import { useEffect } from "react";
import { MdOndemandVideo, MdOutlineArticle, MdOutlineAudiotrack, MdOutlineBrokenImage } from "react-icons/md";
import { Card } from "../ui/card";
// import { Card } from "../ui/card";

export const Category = () => {
  const content = useAtomValue(Content);
  const type = useAtomValue(ContentTypeAtom);
  const formatedContent = content.filter((x) => x.type == type);
  let data;
  (formatedContent.length == 0) ? (data = <div className="h-screen font-bold text-4xl text-gray-800 m-auto bg-gray-100">No {type} stored</div>):(data = formatedContent.map((x) => (
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
  )));
  console.log("this is data", formatedContent)
  useEffect(() => {
    console.log(
      "this is contetn",
      content,
      "this is type",
      type,
      "this is formatedContent",
      formatedContent
    );
  }, [content, type, formatedContent]);
  return <div className="flex flex-wrap gap-10 px-13 ml-15">{data}</div>;
};
