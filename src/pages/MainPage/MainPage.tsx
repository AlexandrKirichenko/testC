import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { PostOrders } from '@api/coincate';
import { Input } from '@components/Input';
import styles from './MainPage.module.scss';

export const MainPage: FC = () => {
  const [value, setValue] = useState<number>(1);

  const redirect = async () => {
    const res = await PostOrders({
      price_amount: +`${value * 10}`,
      price_currency: 'EUR',
      receive_currency: 'DO_NOT_CONVERT',
    });
    window.location.href = `${res.payment_url}`;
    console.log(res);
  };

  return (
    <div className={styles.wrap}>
      <Input
        type={'number'}
        value={value}
        onChange={(e) => setValue(+e.target.value)}
      />
      <div>{value}</div>
      <button onClick={redirect}>BUY A FRACTION</button>
    </div>
  );
};
