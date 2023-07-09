import React from "react";
import "./App.css";
import { Sidebar } from "./Sidebar";
import { Containt } from "./Containt";
import { MobileVSideBar } from "./MobileVSideBar";

function App() {
  const [toggle, setToggle] = React.useState<boolean>(true);
  const [togglem, setToggleM] = React.useState<boolean>(false);
  const [pageNo, setPage] = React.useState<number>(0);
  const Toggle = () => {
    setToggle(!toggle);
  };
  const ToggleM = () => {
    setToggleM(!togglem);
  };
  const SetPageNumber = (id: number) => {
    setPage(id);
  };
  return (
    <div className="container-fluid" style={{ backgroundColor: "#282430" }}>
      <div className="row">
        {toggle && (
          <div
            className="col-2"
            id="sidebar"
            style={{
              height: "100vh",
              backgroundColor: "white",
              width: "250px",
            }}
          >
            <Sidebar SetPageNumber={SetPageNumber} />
          </div>
        )}
        <div className="col">
          <Containt Toggle={Toggle} ToggleM={ToggleM} pageNo={pageNo} togglem ={togglem} SetPageNumber={SetPageNumber}/>
        </div>
      </div>
    </div>
  );
}

export default App;
