import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import Camera from './camera';
import PropTypes from 'prop-types';
const { Header, Sider, Content } = Layout;



class Main extends Component {
  state = {
    collapsed: false,
  };
  static PropTypes = {
      data : PropTypes.string.isRequired
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
      const { data } = this.props
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Camera />
          </Menu> 
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            <p> {data} </p>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Main;