import { useSetAtom } from "jotai";
import { Content } from "../pages/Atoms";
import axios from "axios";
import type { RawContentFromAPI } from "../ui/interface/Interfaces";

export const useContentFetcher = () => {
  const setContentItems = useSetAtom(Content);
  const fetchContentData = async () => {
    try {
      const fetchContent = await axios.get(
        "http://localHost:5000/api/v1/content",
        { withCredentials: true }
      );
      const NewContent = await fetchContent.data.userContent.map(
        (item: RawContentFromAPI) => ({
          text: item.title,
          link: item.link,
          // @ts-ignore
          tags: item.tags.map((tag) => tag.title),
          type: item.type,
          itemId: item._id,
        })
      );
      setContentItems(NewContent);
    } catch (err) {
      console.error("Couldn't fetch Data");
    }
  };

  return { fetchContentData };
};
