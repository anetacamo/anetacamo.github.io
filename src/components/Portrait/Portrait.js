import React from 'react';
import styles from './Portrait.module.scss';

const Portrait = () => {
  return (
    <>
      <div className={styles.portrait}>
        <img src='/images/me.png' alt='aneta camo portrait' />
      </div>

      <div className={`${styles.portrait} ${styles.second}`}>
        <img src='/images/intro.png' alt='aneta camo portrait' />
      </div>
    </>
  );
};

export default Portrait;
