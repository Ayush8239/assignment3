import React from "react";
import Panel from "../components/Panel";
import { useStateContext } from "../contexts/ContextProvider";
import "../globals.css";

function Dashboard() {
  const { myState, currentMode } = useStateContext();

  return (
    <div className={`${currentMode === "Dark" ? "dark-mode" : ""} h-screen`}>
      <div className="flex w-full h-full">
        <div className="w-1/4 bg-gray-200 dark:bg-gray-900 p-5">
          <Panel />
        </div>
        <div className="w-3/4 p-5">
          <div className="h-full bg-white dark:bg-gray-800 rounded-lg p-5">
            {myState.selectedComponent?myState.selectedComponent: "Welcome to the Dashboard"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
