import { getUUID } from '@utils/getUUID';
import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { PostOrders } from '@api/coincate';
import { Input } from '@components/Input';
import styles from './MainPage.module.scss';

const productsArray = [
  { id: 'price_1MD6tkA9A0Ev8QN3eZFZbbDo', title: 'Heart', price: 10 },
];
export const MainPage: FC = () => {
  const [value, setValue] = useState<number>(1);
  const [loading, setVLoading] = useState<boolean>(false);
  const redirect = async () => {
    const res = await PostOrders({
      order_id: '778',
      price_amount: +`${value * 10}`,
      price_currency: 'EUR',
      receive_currency: 'DO_NOT_CONVERT',
      success_url: 'http://localhost:3000/success',
      cancel_url: 'https://coingate.com/',
      callback: 'http://localhost:3000/main',
      description: 'Your order in crypto',
    });
    setVLoading(!loading);
    alert(`${res.orderable_id}`);
    alert(`${res.order_id}`);
    alert(`${res.id}`);
    window.location.href = `${res.payment_url}`;
    setVLoading(!loading);
  };

  const checkout = async () => {
    await fetch('http://localhost:4001/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items: [{ id: 'price_1MD6tkA9A0Ev8QN3eZFZbbDo', quantity: value }],
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url); // Forwarding user to Stripe
        }
      });
    setVLoading(!loading);
  };

  return (
    <div className={styles.wrap}>
      <Input
        type={'number'}
        value={value}
        onChange={(e) => setValue(+e.target.value ? +e.target.value : 1)}
      />
      <span>{100 - value}</span>
      <span>/{value}</span>
      {loading && <div>Loading...</div>}
      <button onClick={checkout}>BUY A FR(FIAT)</button>
      <br />
      <button onClick={redirect}>BUY A FR(CRYPTO)</button>
    </div>
  );
};
