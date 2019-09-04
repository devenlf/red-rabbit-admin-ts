import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";
import 'antd/dist/antd.css';

import './index.css';
import routeConfig from "./router/route";
import { renderRoutes } from "react-router-config";

ReactDOM.render(
  <HashRouter>{renderRoutes(routeConfig)}</HashRouter>,
  document.getElementById('root') as HTMLElement
);
