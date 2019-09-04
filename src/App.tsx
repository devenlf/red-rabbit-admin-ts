import * as React from "react";
import { renderRoutes } from "react-router-config";

import "./App.css";

class App extends React.Component<any, any> {
  public render() {
    return (
        <div className="App">
          {renderRoutes(this.props.route.routes)}
        </div>
    );
  }
}

export default App;
