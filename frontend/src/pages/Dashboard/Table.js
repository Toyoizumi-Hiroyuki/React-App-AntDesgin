import React from 'react';
import { Table, Tag } from 'antd';
import { color } from '../../echartsTheme';

import ProgressBar from './ProgressBar';

const TableChart = () => {
  const dataSource = [
    {
      key: '1',
      name: 'ACM + CloudFrontでLightsailをHTTPS化するまでの備忘録',
      url: 'https://qiita.com/Toyoizumi-Hiroyuki/items/64740c0558698b1f373c',
      tags: ['AWS', 'CloudFront', 'Lightsail', 'CertificateManager'],
      likes: 8,
    },
    {
      key: '2',
      name: 'Macにpyenv + AnacondaでPython環境作成の備忘録',
      url: 'https://qiita.com/Toyoizumi-Hiroyuki/items/a03305f290aa04e1b2f5',
      tags: ['Python', 'Mac', 'Anaconda'],
      likes: 14,
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render(name, record) {
        return (
          <div>
            <div>{name}</div>
            <a href={record.url}>{record.url}</a>
          </div>
        );
      },
    },
    {
      title: 'Tags',
      dataIndex: 'tags',
      key: 'tags',
      render(tags) {
        return (
          <div>
            {tags.map((tag, i) => {
              return <Tag key={i}>{tag}</Tag>;
            })}
          </div>
        );
      },
    },
    {
      title: 'Likes',
      dataIndex: 'likes',
      key: 'likes',
      width: 200,
      render(likes) {
        return (
          <div>
            {likes}
            <ProgressBar colors={color} data={[likes]} total={175} />
          </div>
        );
      },
    },
  ];

  return <Table dataSource={dataSource} columns={columns} pagination={false} />;
};

export default TableChart;
