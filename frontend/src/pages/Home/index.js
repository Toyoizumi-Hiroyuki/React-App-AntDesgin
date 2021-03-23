/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import moment from 'moment';
import { Row, Col, Icon } from 'antd';
import Layout from '../../layouts/BasicLayout';
import styles from './index.module.less';

class Home extends React.Component {
  render() {
    return (
      <Layout>
        <div>
          <Row>
            <Col span={16}>
              <h1 className={styles.titleHandler}>Welocome to React App</h1>
            </Col>
            <Col span={8}>
              <h1 className={styles.lastLoginHandler}>
                Last login :
                {moment(new Date(), 'Asia/Tokyo').format('YYYY/MM/DD HH:mm:ss')}
              </h1>
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <div className={styles.rowPanel}>
                <Link to="/home" className={styles.btnPanel}>
                  <div className={styles.leftPanel}>
                    <h3>Home</h3>
                    <p>あああああああ</p>
                  </div>
                  <div className={styles.iconHandler}>
                    <Icon
                      type="right-circle"
                      className={styles.iconHandlerItem}
                    />
                  </div>
                </Link>
                <Link to="/dashboard" className={styles.btnPanel}>
                  <div className={styles.leftPanel}>
                    <h3>Dashboard</h3>
                    <p>いいいいいいい</p>
                  </div>
                  <div className={styles.iconHandler}>
                    <Icon
                      type="right-circle"
                      className={styles.iconHandlerItem}
                    />
                  </div>
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </Layout>
    );
  }
}

export default withRouter((props) => <Home {...props} />);
