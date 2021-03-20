import React from 'react';
import { Tooltip } from 'antd';

import styles from './index.module.less';

const ProgressBar = ({ height = 12, data = [], colors = [], total }) => {
  const values = [];
  data.forEach((value) => {
    values.push((value / total) * 100);
  });

  const render = () => {
    return (
      <div style={{ height }}>
        <div className={styles.wrap}>
          {values.map((value, i) => {
            return (
              <div
                key={i}
                style={{
                  background: colors[i],
                  width: `${value}%`,
                  height,
                }}
              />
            );
          })}
        </div>
      </div>
    );
  };

  return render();
};

export default ProgressBar;
