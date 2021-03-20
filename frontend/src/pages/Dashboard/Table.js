import React from 'react';
import { Table, Tag } from 'antd';
import { color } from '../../echartsTheme';

import ProgressBar from './ProgressBar';

const TableChart = () => {
  const dataSource = [
    {
      key: '1',
      name: 'Qiitaのストック数を確認できる拡張機能を作った話',
      url: 'https://qiita.com/tonio0720/items/fefcdd5b88cdf239a5a1',
      tags: ['Qiita', 'JavaScript', 'QiitaAPI', 'chrome-extension', 'Vue.js'],
      likes: 175,
    },
    {
      key: '2',
      name:
        'Slack + Electron + Socket.ioを使ってニコニコ動画風にメッセージを表示する',
      url: 'https://qiita.com/tonio0720/items/bd6362d27084738bbfe2',
      tags: ['JavaScript', 'Socket.io', 'ネタ', 'Slack', 'Electron'],
      likes: 70,
    },
    {
      key: '3',
      name: 'チームの1年間のいいね数をD3.jsを使ってアニメーションで可視化する',
      url: 'https://qiita.com/tonio0720/items/2548d810e37c442aa540',
      tags: ['Qiita', 'JavaScript', 'd3.js', 'QiitaAPI', '可視化'],
      likes: 54,
    },
    {
      key: '4',
      name: 'Nodejsを使ってSeleniumでChromeを動かす',
      url: 'https://qiita.com/tonio0720/items/70c13ad304154d95e4bc',
      tags: ['JavaScript', 'Node.js', 'Chrome', 'WebDriver', 'Selenium'],
      likes: 45,
    },
    {
      key: '5',
      name:
        'これさえあればWEBアプリが簡単に作れる！Nuxt・Express・Vuetifyを使ったログイン画面の実装テンプレ',
      url: 'https://qiita.com/tonio0720/items/b4449e31ee3c06553a6e',
      tags: ['JavaScript', 'Express', 'Vue.js', 'nuxt.js', 'vuetifyjs'],
      likes: 30,
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
