import { type ReactElement } from "react";
import { ContentTypeAtom, SwitchToCatogery } from "../pages/Atoms";
import { useSetAtom } from "jotai";

interface SidebarComponentProps {
  text: string;
  icon: ReactElement;
  navigate?: ReactElement;
}

export const SidebarComponent = (props: SidebarComponentProps) => {
  const setContentType = useSetAtom(ContentTypeAtom);
  const setIsSharedCatogery =  useSetAtom(SwitchToCatogery)

  // console.log(contentType);
  return (
    <div
      id="Sidebar-component"
      className="font-semibold text-2xl text-gray-600 cursor-pointer"
    >
      <div
        className="flex items-center py-3 px-5 gap-2 w-80 hover:bg-gray-200"
        onClick={() =>{
          setContentType(
            //just shut up its working >:)
            props.text
              .replace("s", "")
              .replace("I", "i")
              .replace("A", "a")
              .replace("V", "v")
          )
          setIsSharedCatogery(true)
          }
        }
      >
        {props.icon}
        {props.text}
      </div>
    </div>
  );
};
