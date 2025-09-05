import { useParams } from "react-router-dom";
import { SharedPageComp } from "./sharedPageCardComponent";

export const SharedPage = () => {
  const { BrainId } = useParams<{ BrainId: string }>();
  return (
    <div>
      <div id="top-bar" className="flex justify-between p-15">
        <div className="text-4xl font-bold text-gray-800">All Contents</div>
        <div className="flex gap-5"></div>
      </div>
      <div id="hero">
        <SharedPageComp BrainId={BrainId} />
      </div>
    </div>
  );
};
