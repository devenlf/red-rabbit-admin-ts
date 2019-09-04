import * as React from 'react';
import { renderRoutes } from "react-router-config";
import { Layout, Row, Col } from 'antd';
import "./index.css";
import SiderBox from '../../component/sider'
const { Header,Footer, Sider, Content } = Layout;


class Home extends React.Component<any,any>{
    componentDidMount() {
        console.dir(this.props);
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
                        <div>账户名:{ }</div>
                        <div>用户ID:{ }</div>
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