import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { PostOrders } from '@api/coincate';
import styles from './MainPage.module.scss';

export const MainPage: FC = () => {
  useEffect(() => {
    const load = async () => {
      const res = await PostOrders({
        price_amount: 1,
        price_currency: 'BTC',
        receive_currency: 'BTC',
      });
      console.log(res);
    };
    load();
  }, []);

  return <div className={styles.wrap}>hpooh</div>;
};
