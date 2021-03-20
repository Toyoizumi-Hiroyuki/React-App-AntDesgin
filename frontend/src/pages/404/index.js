/* eslint-disable react/prop-types */
import React from 'react';
import { Result, Button } from 'antd';

const Page404 = ({ history }) => {
  // const { history } = useReactRouter;

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button
          onClick={() => {
            history.push('/');
          }}
          type="primary"
        >
          Back Home
        </Button>
      }
    />
  );
};

export default Page404;
