import "./App.css";
import { Button } from "./assets/ui/button";
import { Sidebar } from "./assets/ui/sidebar";
import { FaPlus, FaShareAlt } from "react-icons/fa";

function App() {
  return (
    <div className="flex">
      <div id="sidebar">
        <Sidebar />
      </div>
      <div id="hero" className="w-[calc(100vw-200px)]">
        <div id="top-bar" className="flex justify-between p-15">
          <div className="text-3xl font-bold text-gray-800">All Notes</div>
          <div className="flex gap-5">
            <Button
              text="Share Brain"
              variant="secondary"
              onClick={() => console.log("noting rn")}
              size="md"
              startIcon={<FaShareAlt />}
            />
            <Button
              text="Add Content"
              variant="primary"
              onClick={() => console.log("noting rn")}
              size="md"
              startIcon={<FaPlus />}
            />
          </div>
        </div>
        <div id="top-bar"></div>
      </div>
    </div>
  );
}

export default App;
