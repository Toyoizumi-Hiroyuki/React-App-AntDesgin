/* eslint-disable no-restricted-globals */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React, { useCallback } from 'react';

import { Layout, Icon, Menu } from 'antd';

import { Link } from 'react-router-dom';
import { logout } from '../../utils/auth';
import 'antd/dist/antd.css';
import styles from './index.module.less';
import logo from '../../assets/home_header.jpg';

const { Content, Footer, Sider, Header } = Layout;

const BasicLayout = ({ children }) => {
  let titlePage;
  switch (location.pathname) {
    case '/home':
      titlePage = 'Home';
      break;
    case '/dashboard':
      titlePage = 'Dashboard';
      break;
    default:
      break;
  }

  const onLogout = useCallback(() => {
    logout();
  }, []);

  return (
    <Layout style={{ minHeight: '100vh' }} className={styles.layoutCustom}>
      <Sider
        collapsible
        reakpoint="lg"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['2']}>
          <Menu.Item key="home">
            <Icon type="home" />
            <span>
              <Link to="/home">Home</Link>
            </span>
          </Menu.Item>
          <Menu.Item key="dashboard">
            <Icon type="dashboard" />
            <span>
              <Link to="/dashboard">Dashboard</Link>
            </span>
          </Menu.Item>
        </Menu>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['2']} />
      </Sider>
      <Layout className={styles.mainCustom}>
        <Header style={{ background: '#fff', padding: 0, textAlign: 'right' }}>
          <h1 className={styles.titleHandler}>{titlePage}</h1>
          <button className={styles.logOut} onClick={onLogout}>
            ログアウト
          </button>
        </Header>
        <Content style={{ padding: '0 0px' }}>
          <div
            style={{
              padding: 0,
              minHeight: 'calc(100vh - 64px - 53px - 69px)',
            }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>©React App</Footer>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
