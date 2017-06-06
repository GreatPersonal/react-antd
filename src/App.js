import React, { Component } from 'react';
import './App.css';
import Welcome from './Component/Welcome';
import Add_album from './Component/Add_album';
import AlbumList from './Component/AlbumList';
import 'antd/dist/antd.min.css';
import {Layout,Menu,Icon} from 'antd';
const {Header,Content,Footer,Sider}= Layout;
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
class App extends Component {
  render() {
    return (
    <Router>
        <Layout style={{ height: '100vh' }}>
            <Sider style={{ overflow: 'auto' }}>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                    <Menu.Item key="1">
                        <Link to="/">
                        <Icon type="user" />
                        <span className="nav-text">首页</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/album">
                            <Icon type="user" />
                            <span className="nav-text">专辑管理</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/add_album">
                            <Icon type="upload" />
                            <span className="nav-text">新增专辑</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Icon type="bar-chart" />
                        <span className="nav-text">nav 4</span>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Icon type="cloud-o" />
                        <span className="nav-text">nav 5</span>
                    </Menu.Item>
                    <Menu.Item key="6">
                        <Icon type="appstore-o" />
                        <span className="nav-text">nav 6</span>
                    </Menu.Item>
                    <Menu.Item key="7">
                        <Icon type="team" />
                        <span className="nav-text">nav 7</span>
                    </Menu.Item>
                    <Menu.Item key="8">
                        <Icon type="shop" />
                        <span className="nav-text">nav 8</span>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header style={{ background: '#fff', padding: 0 }} />
                <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                    <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                       <Route exact path="/" component={Welcome}/>
                        <Route path="/album" component={AlbumList}/>
                        <Route path="/add_album" component={Add_album}/>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©2016 Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    </Router>
    )
  }
}

export default App;
