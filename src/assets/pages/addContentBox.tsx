import { useAtom } from "jotai";
import { AddContentActive, ContentValues, TagsArray } from "./Atoms";
import { Button } from "../ui/button";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";
import { config } from "../config";
import { useContentFetcher } from "../context/contentFetchContext";

export const AddContentModal = () => {
  const { fetchContentData } = useContentFetcher();
  const [isActive, setIsActive] = useAtom(AddContentActive);
  const [content, setContent] = useAtom(ContentValues);
  const [tags, setTags] = useAtom(TagsArray);
  const arrayOfTags = tags.split(", ");
  const submitHandler = async () => {
    try {
      content.tags = arrayOfTags;
      const postContent = await axios.post(
        `${config.BeApiUrl}/api/v1/content`,
        content,
        {
          withCredentials: true,
        }
      );

      if (postContent.status === 200) {
        fetchContentData();
      } else {
        alert("An error occured");
      }
      setIsActive(false);
      setTags("");
    } catch (err) {
      console.log(err);
    }
  };
  // console.log("content Here :", content);
  return (
    <div>
      {isActive ? (
        <div className="flex justify-center items-center w-screen h-screen bg-black/50 fixed top-0 left-0">
          <div className="w-full max-w-sm p-4 bg-indigo-300 border border-gray-200 rounded-lg shadow-sm">
            <form
              className="space-y-6"
              action="#"
              // onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex">
                <h5 className="text-xl font-bold text-indigo-600 text-center">
                  Add Content to your Second Brain
                </h5>
                <RxCross2
                  className="size-5 cursor-pointer"
                  onClick={() => setIsActive(false)}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-semibold text-indigo-600">
                  Title
                </label>
                <input
                  name="title"
                  value={content.title}
                  onChange={(e) =>
                    setContent((prev) => ({
                      ...prev,
                      //@ts-ignore
                      [e.target.name]: e.target.value,
                    }))
                  }
                  type="text"
                  className="bg-indigo-200 border border-indigo-300 text-indigo-600 text-sm rounded-lg block w-full p-2.5"
                  placeholder="e.g. 'My Awesome Blog Post'"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-semibold text-indigo-600">
                  link
                </label>
                <input
                  name="link"
                  value={content.link}
                  //@ts-ignore
                  onChange={(e) =>
                    setContent((prev) => ({
                      ...prev,
                      //@ts-ignore
                      [e.target.name]: e.target.value,
                    }))
                  }
                  type="text"
                  className="bg-indigo-200 border border-indigo-300 text-indigo-600 text-sm rounded-lg block w-full p-2.5"
                  placeholder="e.g. https://www.example.com"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-semibold text-indigo-600 ">
                  Tags
                </label>
                <input
                  name="tags"
                  value={tags}
                  //@ts-ignore
                  onChange={(e) => setTags(e.target.value)}
                  type="text"
                  className="bg-indigo-200 border border-indigo-300 text-indigo-600 text-sm rounded-lg block w-full p-2.5"
                  placeholder="e.g. 'react, javascript, frontend'"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-semibold text-indigo-600">
                  Type
                </label>
                <select
                  className="bg-indigo-200 border border-indigo-300 text-indigo-600 text-sm rounded-lg block w-full p-2.5"
                  name="type"
                  value={content.type}
                  onChange={(e) =>
                    setContent((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value,
                    }))
                  }
                >
                  <option value="">Select Content Type</option>
                  <option value="video">video</option>
                  <option value="image">image</option>
                  <option value="audio">audio</option>
                  <option value="article">article</option>
                </select>
              </div>
              <div className="flex items-start">
                <div className="flex items-start"></div>
              </div>
              <div className="">
                <Button
                  size="md"
                  text="Submit"
                  variant="primary"
                  onClick={submitHandler}
                />
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
};
