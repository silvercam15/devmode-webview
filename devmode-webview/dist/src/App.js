import "./App.css";
import SideBarComponent from "./sideBarComponent/sideBarComponent";
import * as React from "react";
import SpanPageContentsComponent from "./spanPageContents/spanPageContentComponent";
function App() {
    return (React.createElement("div", { className: "App" },
        React.createElement(SideBarComponent, null),
        React.createElement(SpanPageContentsComponent, null)));
}
export default App;
