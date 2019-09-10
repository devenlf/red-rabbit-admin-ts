import * as React from "react";
import { renderRoutes } from "react-router-config";
import { LocaleProvider } from 'antd';
import zhCN from 'antd/es/locale-provider/zh_CN';



import "./App.css";

class App extends React.Component<any, any> {
  public render() {
    return (
      <LocaleProvider locale={zhCN}>
        <div className="App">
          {renderRoutes(this.props.route.routes)}
        </div>
      </LocaleProvider>
    );
  }
}

export default App;
