import React, {useState, useContext, createContext, } from "react";
const MyContext = createContext();
const initialState = {
    Calendar: false,
    KanbanBoard: false,
    Editor: false,
    theme: false,
    LineChart: false,
    selectedComponent: null,
};
export const ContextProvider = ({ children }) => {
  const [myState, setMyState] = useState(initialState);
  const [currentColor, setCurrentColor] = useState();
  const [currentMode, setCurrentMode] = useState('Light');

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
  }
  const setColor = (e) => {
    setCurrentColor(e.target.value);
  
    localStorage.setItem('themeMode', e.target.value);
  }
  
  return (
    <MyContext.Provider value={{ 
      myState, setMyState,
      currentColor, currentMode,
      setMode, setColor,
      
     }}>
      {children}
    </MyContext.Provider>
  );
};

export const useStateContext = ()=> useContext(MyContext);