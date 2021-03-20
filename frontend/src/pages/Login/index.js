/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { withRouter } from 'react-router-dom';

import { Card, Row, Col } from 'antd';
import Layout from '../../layouts/BlankLayout';
import LoginForm from './LoginForm';

const Login = () => {
  return (
    <Layout>
      <div>
        <Row justify="center" type="flex">
          <Col span={8}>
            <Card>
              <LoginForm />
            </Card>
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export default withRouter((props) => <Login {...props} />);
