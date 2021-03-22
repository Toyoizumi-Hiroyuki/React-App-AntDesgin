/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import useReactRouter from 'use-react-router';
import { Form, Icon, Input, Button, Checkbox, Alert } from 'antd';
// import { setToken } from '../../utils/auth';
// import request from '../../utils/request';

import styles from './index.module.less';

const userCheck = (username, password) => {
  if (username === 'admin' && password === 'admin') {
    return true;
  }
  return false;
};

const LoginForm = ({ form }) => {
  const { history } = useReactRouter();
  const [error, setError] = useState(false);

  // const handleSubmit = (e) => {
  //  e.preventDefault();
  //  form.validateFields((err, values) => {
  //    setError(false);
  //    if (!err) {
  //      request
  //        .post('/user/login', values)
  //        .then(({ token }) => {
  //          setToken(token);
  //          history.push('/');
  //        })
  //        .catch(() => {
  //          setError(true);
  //        });
  //    }
  //  });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      setError(false);
      const isCheck = userCheck(values.username, values.password);
      if (!err && isCheck) {
        localStorage.setItem('login', 'true');
        history.push('/');
      } else {
        setError(true);
      }
    });
  };

  const { getFieldDecorator } = form;
  return (
    <Form onSubmit={handleSubmit}>
      {error && (
        <Alert
          description="Password Incorrect."
          type="error"
          showIcon
          style={{ marginBottom: 16 }}
        />
      )}
      <span>username: admin, password: admin</span>
      <Form.Item>
        {getFieldDecorator('username', {
          rules: [{ required: true, message: 'Please input your username!' }],
        })(
          <Input
            autocomplete="off"
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
          />,
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Please input your Password!' }],
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
          />,
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('remember', {
          valuePropName: 'checked',
          initialValue: true,
        })(<Checkbox>Remember me</Checkbox>)}
        <Button
          type="primary"
          htmlType="submit"
          className={styles.loginFormButton}
        >
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Form.create({ name: 'login' })(LoginForm);
