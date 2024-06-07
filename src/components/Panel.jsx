import React, { useEffect } from "react";
import { SlCalender } from "react-icons/sl";
import { BsKanbanFill } from "react-icons/bs";
import { BiSolidColorFill } from "react-icons/bi";
import { FaChartLine } from "react-icons/fa";
import { FaChartArea } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import { FaChartPie } from "react-icons/fa";
import { BsTable } from "react-icons/bs";
import { useStateContext } from "../contexts/ContextProvider";
import MyKanbanBoard from "./MyKanbanBoard";
import Calendar from './Calendar';
import Table from "./Table";
import LineChart from "./charts/LineChart";
import AreaChart from "./charts/AreaChart";
import BarChart from "./charts/BarChart";
import PieChart from "./charts/PieChart";
import Theme from "./Theme";
import '../../src/globals.css';

const Panel = () => {
  const appItems = [
    { icon: <SlCalender />, label: "Calendar", component: <Calendar /> },
    { icon: <BsKanbanFill />, label: "Kanban Board", component: <MyKanbanBoard /> },
    { icon: <BsTable />, label: "Table", component: <Table /> },
    { icon: <BiSolidColorFill />, label: "Change Theme", component: <Theme /> },
  ];

  const chartsItems = [
    { icon: <FaChartLine />, label: "LineChart", component: <LineChart /> },
    { icon: <FaChartArea />, label: "AreaChart", component: <AreaChart /> },
    { icon: <VscGraph />, label: "BarChart", component: <BarChart /> },
    { icon: <FaChartPie />, label: "PieChart", component: <PieChart /> },
  ];

  const { setMyState, currentColor, currentMode } = useStateContext();

  useEffect(() => {
    if (!currentColor && currentMode === 'Dark') {
      const defaultThemeColor = "#3f51b5";
      setMyState((prevState) => ({
        ...prevState,
        currentColor: defaultThemeColor,
      }));
    }
  }, [currentColor, currentMode, setMyState]);

  const handleAppClick = (component) => {
    setMyState((prevState) => ({
      ...prevState,
      selectedComponent: component,
    }));
  };

  const handleChartClick = (component) => {
    setMyState((prevState) => ({
      ...prevState,
      selectedComponent: component,
    }));
  };

  const darkenColor = (color) => {
    if (!color) return color; 
    const colorHex = color.replace('#', '');
    const r = parseInt(colorHex.substring(0, 2), 16);
    const g = parseInt(colorHex.substring(2, 4), 16);
    const b = parseInt(colorHex.substring(4, 6), 16);
    const factor = 0.7;
    const darkenedColor = `rgb(${Math.floor(r * factor)}, ${Math.floor(g * factor)}, ${Math.floor(b * factor)})`;
    return darkenedColor;
  };

  const backgroundColor = currentMode === 'Dark' ? darkenColor(currentColor || "#ffffff") : currentColor;

  return (
    <div className={`relative h-screen ${
      currentMode === "Dark" ? "bg-gray-900 text-white" : "bg-white text-black"
    }`}
    >
      <div className="relative h-full flex flex-col gap-4">
        {appItems.map((item, index) => (
          <div
            key={index}
            className={`app-item bg-slate-200 hover:bg-blue-300 rounded-2xl p-3 cursor-pointer ${
              currentMode === "Dark" ? "text-white" : "text-black"
            }`}
            style={{ backgroundColor: currentMode === 'Dark' ? darkenColor(currentColor || "#ffffff") : currentColor }}
            onClick={() => handleAppClick(item.component)}
          >
            <h3 className="text-base gap-3 font-semibold">
              {item.icon} {item.label}
            </h3>
            <p className="text-xs">about app...</p>
          </div>
        ))}
        <div className="flex flex-col gap-4 mt-10">
          {chartsItems.map((item, index) => (
            <div
              key={index}
              className={`rounded-2xl bg-slate-200 p-3 text-center hover:bg-blue-300 cursor-pointer ${
                currentMode === "Dark" ? "text-white" : "text-black"
              }`}
              style={{ backgroundColor: currentMode === 'Dark' ? darkenColor(currentColor || "#ffffff") : currentColor }}
              onClick={() => handleChartClick(item.component)}
            >
              <h3 className="text-base gap-3 font-semibold">
                {item.icon} {item.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Panel;
