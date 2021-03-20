/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { withRouter } from 'react-router-dom';

import { Row, Col, Card } from 'antd';

import Layout from '../../layouts/BasicLayout';
import Line from './Line';
import Pie from './Pie';
import Table from './Table';

class Home extends React.Component {
  render() {
    return (
      <Layout>
        <Row gutter={16} style={{ marginBottom: 16 }}>
          <Col md={8}>
            <Card title="Item Categories">
              <Pie />
            </Card>
          </Col>
          <Col md={16}>
            <Card title="Contribution">
              <Line />
            </Card>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col md={24}>
            <Card title="Items">
              <Table />
            </Card>
          </Col>
        </Row>
      </Layout>
    );
  }
}

export default withRouter((props) => <Home {...props} />);
