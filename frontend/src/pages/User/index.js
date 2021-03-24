/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { withRouter } from 'react-router-dom';
import Layout from '../../layouts/BasicLayout';
import UserTree from './Tree';
import styles from './index.module.less';

class User extends React.Component {
  render() {
    return (
      <Layout>
        <div className={styles.titleHandler}>
          <h1>TreeView / TableView</h1>
        </div>
        <div>
          <UserTree />
        </div>
      </Layout>
    );
  }
}

export default withRouter((props) => <User {...props} />);
