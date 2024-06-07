import React, { useEffect } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { themeColors } from "../data/dummyData";

const Theme = () => {
  const { setColor, setMode, currentMode, currentColor } = useStateContext();

  const handleColorChange = (color) => {
    const event = { target: { value: color } };
    setColor(event);
  };

  useEffect(() => {
    if (currentMode === "Dark") {
      handleColorChange(themeColors[4].color);
    }
  }, [currentMode]);

  return (
    <div className="p-4">
      <h1 className="text-2xl text-slate-600 font-bold mb-4">Themes</h1>
      <div className="mt-4 flex items-center gap-4">
        <input
          type="radio"
          id="light"
          name="theme"
          value="Light"
          className="hidden"
          onChange={setMode}
          checked={currentMode === "Light"}
        />
        <label
          htmlFor="light"
          className={`cursor-pointer py-2 px-6 rounded-full transition-colors duration-300 ${
            currentMode === "Light"
              ? "bg-slate-900 text-white shadow-lg"
              : "bg-gray-200 text-gray-900"
          }`}
        >
          Light
        </label>
        <input
          type="radio"
          id="dark"
          name="theme"
          value="Dark"
          className="hidden"
          onChange={setMode}
          checked={currentMode === "Dark"}
        />
        <label
          htmlFor="dark"
          className={`cursor-pointer py-2 px-6 rounded-full transition-colors duration-300 ${
            currentMode === "Dark"
              ? "bg-slate-900 text-white shadow-lg"
              : "bg-gray-200 text-gray-900"
          }`}
        >
          Dark
        </label>
      </div>
      <h2 className="text-xl text-slate-600 font-bold mt-8">Theme Colors</h2>
      <div className="flex gap-3 flex-wrap mt-4">
        {themeColors.map((item, index) => (
          <button
            className={`rounded-full w-8 h-8 transition-transform duration-300 ${
              currentColor === item.color ? "border-4 border-slate-700 scale-110" : ""
            }`}
            key={index}
            style={{ backgroundColor: item.color }}
            onClick={() => handleColorChange(item.color)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Theme;
