import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb,Card, Col, Row } from 'antd';
import QrReader from 'react-qr-reader';
//import Registro from './registro';
import Tablita from './tabla';
import Registro from './mensaje';
const { Header, Content, Footer, Sider } = Layout;


class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      delay: 300,
      result: 'No result',
    }
    this.handleScan = this.handleScan.bind(this)
  }

  handleScan(data){
    if(data){
      this.setState({
        result: data,
      })
    }
  }
  handleError(err){
    console.error(err)
  }
  render(){
    return(
      <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">Sistema de Registro por codigo QR</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Layout style={{ padding: '24px 0', background: '#fff' }}>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <QrReader
              delay={this.state.delay}
              onError={this.handleError}
              onScan={this.handleScan}
              style={{ width: '100%' }}
              />
              <Card title="Usuario Encontrado" bordered={false}>{ this.state.result }</Card>
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
        <div style={{ background: '#ECECEC', padding: '30px' }}>
          <Row gutter={16}>
            <Col span={8}>
              <Card title="Registro de Usuario" bordered={false}>
                {/* TODO */}
                <Registro />
              </Card>
            </Col>
            <Col span={16}>
              <Card title="Alumnos Registrados" bordered={false}>
                <Tablita />
              </Card>
            </Col>
          </Row>
        </div>
        </Content>
      </Layout>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      QRegister ©2016 Created by Bertin Reyes Fonseca
    </Footer>
  </Layout>

    )
  }
}
  
export default App;