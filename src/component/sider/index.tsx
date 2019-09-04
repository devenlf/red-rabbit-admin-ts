import * as React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import route from "../../router/route"
const { SubMenu } = Menu;  
interface MenuList {
    name?:string,
    path:string,
    key?:number|string,
    routes?:[]
}

export default class SiderBox extends React.Component<any,any>{
  constructor(props: any) {
    super(props);
    this.state = { 
        MenuList:route[0].routes
     };
  }
  render() {
    return (
      <Menu mode="inline" key="menu">
        {this.state.MenuList[0].routes.map((item:MenuList)=>{
            if(item.routes){
                return <SubMenu title={item.name} key={item.key}>
                    {item.routes.map((items:MenuList)=>{
                       return <Menu.Item key={items.key}><Link to={items.path}>{items.name}</Link></Menu.Item>
                    })}
                </SubMenu>
            }else{
                return <Menu.Item key={item.key}><Link to={item.path}>{item.name}</Link></Menu.Item>
            }
        })
        }
      </Menu>
    );
  }
}
