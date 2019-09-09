import * as React from 'react';
import { renderRoutes } from "react-router-config";
import { Layout, Row, Col } from 'antd';
import "./index.css";
import api from "../../api/api"
import SiderBox from '../../component/sider'
const { Header,Footer, Sider, Content } = Layout;
interface homeState {
    userInfo:{
        name:string,
        userId:number|string
    }
}

class Home extends React.Component<any,homeState>{
    constructor(props:any){
        super(props);
        this.state={
            userInfo:{
                name:'',
                userId:''
            }
        }
    }
    async componentDidMount() {
        let {code,data} = await api.getUserInfo().then((config)=>{
            return config.data
        })
        if(code==200){
            this.setState({
                userInfo:{name:data.username,userId:data.id}
            })
        }
      }
    render(){
        return(
            <div className="all-box">
                <Layout className="layout-box">
                <Header className="head-position">
                    <Row className="head-box" type="flex" justify="space-around" align="middle">
                        <Col span={12}>
                        <img src="assets/imgs/common/ic_logo_onlinebusiness@2x.png"></img>
                        </Col>
                        <Col span={12} className="user-info">
                        <div>账户名:{this.state.userInfo.name}</div>
                        <div>用户ID:{this.state.userInfo.userId}</div>
                        </Col>
                    </Row>
                </Header>
                <Layout className="box-content">
                    <Sider>
                      <SiderBox></SiderBox>
                    </Sider>
                    <Layout>
                    <Content>
                      {renderRoutes(this.props.route.routes)}
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                    </Layout>
                </Layout>
                </Layout>
               <div>
               </div>
            </div>
        )
    }
}


export default Home;