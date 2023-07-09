import React from "react";
import { Dashboard } from "./Dashboard";
import { Org } from "./Org";
import { MobileVSideBar } from "./MobileVSideBar";
interface props {
  Toggle: () => void;
  ToggleM: () => void;
  pageNo: number;
  togglem: boolean;
  SetPageNumber: (id: number) => void;
}
export const Containt = ({
  Toggle,
  ToggleM,
  pageNo,
  togglem,
  SetPageNumber,
}: props) => {
  const renderCmp = () => {
    switch (pageNo) {
      case 0:
        return <Dashboard />;
      case 1:
        return <Org />;
    }
  };
  // const SetPageNumberD= (id:number) =>{
  //     SetPageNumber(id);
  // }
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg"
        style={{ position: "relative", left: "0", backgroundColor: "#282430" }}
      >
        <div className="container-fluid">
          <button
            id="desktopIcon"
            className="btn"
            onClick={Toggle}
            style={{ color: "white" }}
          >
            <i className="fas fa-sliders-h" style={{ color: "#ffffff" }}></i>
          </button>
          <button
            id="mobileIcon"
            className="btn"
            onClick={ToggleM}
            style={{ color: "white" }}
          >
            <i className="fas fa-sliders-h" style={{ color: "#ffffff" }}></i>
          </button>
        </div>
      </nav>
      <div className="row">
        <div className="col-12" style={{marginBottom:'10px'}}>
          {togglem && <MobileVSideBar SetPageNumber={SetPageNumber} />}
        </div>
        <div className="col-12">
          <div
            style={{
              backgroundColor: "#282430",
              height: "90vh",
              overflowY: "scroll",
            }}
          >
            {renderCmp()}
          </div>
        </div>
      </div>
    </div>
  );
};
