/* eslint-disable no-continue */
/* eslint-disable spaced-comment */
/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Tree, Col, Table } from 'antd';
import styles from './index.module.less';

const treeUserData = [
  {
    title: 'Company1',
    key: '0',
    children: [
      {
        title: '営業部',
        key: '0/0',
        children: [
          {
            title: 'User1',
            key: '0/0/U-User1',
          },
          {
            title: 'User2',
            key: '0/0/U-User2',
          },
          {
            title: 'User3',
            key: '0/0/U-User3',
          },
        ],
      },
      {
        title: 'システム部',
        key: '0/1',
        children: [
          {
            title: 'User4',
            key: '0/1/U-User4',
          },
          {
            title: 'User5',
            key: '0/1/U-User5',
          },
        ],
      },
      {
        title: '総務部',
        key: '0/2',
      },
    ],
  },
  {
    title: 'Company2',
    key: '1',
    children: [
      {
        title: '札幌営業所',
        key: '1/0',
        children: [
          {
            title: '営業部',
            key: '1/0/0',
            children: [
              {
                title: 'User6',
                key: '1/0/0/U-User6',
              },
              {
                title: 'User7',
                key: '1/0/0/U-User7',
              },
            ],
          },
        ],
      },
      {
        title: '本社',
        key: '1/1',
      },
      {
        title: '大阪営業所',
        key: '1/2',
      },
    ],
  },
];

const UserTree = () => {
  //const [expandedKeys, setExpandedKeys] = useState(['C-1-0-0']);
  //const [checkedKeys, setCheckedKeys] = useState(['U-1-0-0-User6']);
  const [expandedKeys, setExpandedKeys] = useState([]);
  const [checkedKeys, setCheckedKeys] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [autoExpandParent, setAutoExpandParent] = useState(true);
  const [dataSource, setDataSource] = useState([]);

  const onExpand = (expandedKeysValue) => {
    console.log('onExpand', expandedKeysValue); // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded children keys.
    setExpandedKeys(expandedKeysValue);
    setAutoExpandParent(false);
  };
  const getDepartment = (ownNode) => {
    return '';
  };

  const onCheck = (checkedKeysValue, info) => {
    console.log('onCheck', info);
    setCheckedKeys(checkedKeysValue);
    if (checkedKeysValue.length < 1) {
      setDataSource([]);
    } else {
      const data = [];
      for (let i = 0; i < info.checkedNodes.length; i++) {
        if (info.checkedNodes[i].key.match(/U-/)) {
          const nameSplit = info.checkedNodes[i].key.split('-');
          const userName = nameSplit[nameSplit.length - 1];
          data.push({
            key: i,
            name: userName,
            department: getDepartment(info.checkedNodes[i]),
          });
        }
      }
      setDataSource(data);
    }
  };

  const onSelect = (selectedKeysValue, info) => {
    console.log('onSelect', info);
    setSelectedKeys(selectedKeysValue);
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Department',
      dataIndex: 'department',
    },
  ];

  return (
    <>
      <Col span={8} className={styles.userTree}>
        <Tree
          checkable
          onExpand={onExpand}
          expandedKeys={expandedKeys}
          autoExpandParent={autoExpandParent}
          onCheck={onCheck}
          checkedKeys={checkedKeys}
          onSelect={onSelect}
          selectedKeys={selectedKeys}
          treeData={treeUserData}
        />
      </Col>
      <Col span={15} className={styles.userTable}>
        <Table columns={columns} dataSource={dataSource} />
      </Col>
    </>
  );
};

export default UserTree;
