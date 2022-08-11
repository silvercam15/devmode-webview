import "./App.css";
import SideBarComponent from "./sideBarComponent/sideBarComponent";
import * as React from "react";
import SpanPageContentsComponent from "./spanPageContents/spanPageContentComponent";

function App() {
  return (
    <div className="App">
      <SideBarComponent></SideBarComponent>
      <SpanPageContentsComponent />
    </div>
  );
}

export default App;
