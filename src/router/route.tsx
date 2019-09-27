// import About from "../views/about/about";
import ErrorBox from "../views/error";
import Home from "../views/home/index";
import ReviewSiteList from "../views/site-list/reviewSiteList";
import CoinSet from "../views/site-system/coin-set/coinSet";
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
        {
          path: "/site-system/order-set",
          key:'2-2',
          name: "订单去重",
          component: CoinSet
        },
        {
          path: "/site-system/token-set",
          key:'2-3',
          name: "设置TOKEN",
          component: CoinSet
        },
        {
          path: "/site-system/middle-page",
          key:'2-4',
          name: "中间页管理",
          component: CoinSet
        },
        {
          path: "/site-system/holiday",
          key:'2-5',
          name: "节假日配置",
          component: CoinSet
        },
        {
          path: "/site-system/advertising",
          key:'2-6',
          name: "成功页广告投放",
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