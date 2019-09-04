// import About from "../views/about/about";
import ErrorBox from "../views/error";
import Home from "../views/home/index";
import ReviewSiteList from "../views/site-list/reviewSiteList";
import CoinSet from "../views/site-system/coinSet";
import SiteSystem from "../views/site-system/index"
import DataAnylc from "../views/data-anylc/index"
import SiteList from "../views/data-anylc/siteList"
import App from "../App";

import { RouteConfig } from "react-router-config";

export interface MyRouteConfig extends RouteConfig {
  name?: string;
  isShow?: boolean;
  icon?: string;
}

const config: MyRouteConfig[] = [{
  component: App,
  routes: [{
    path: "/",
    component: Home,
    key:'0',
    routes:[
      { 
      path: "/receview-list",
      key:'1',
      name: "审核列表",
      component: ReviewSiteList,
      },
      {
      path: "/site-system",
      key:'2',
      name:"系统设置",
      component: SiteSystem,
      routes:[
        {
          path: "/site-system/coin-set",
          key:'2-1',
          name: "金币设置",
          component: CoinSet
        },
      ]
      },
      {
        path: "/data-anylc",
        name: "数据分析",
        key:'3',
        component: DataAnylc,
        routes:[
          {
            path: "/data-anylc/site-list",
            key:'3-1',
            name: "站点列表",
            component: SiteList
          },
        ]
      }
    ]
  }, {
    path:"/error",
    exact: true,
    component: ErrorBox,
  }]
}]


  export default config;