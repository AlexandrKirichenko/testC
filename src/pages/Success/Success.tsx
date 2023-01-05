import { Input } from '@components/Input';
import { FC, useState } from 'react';
import styles from './Success.module.scss';

export const Success: FC = () => {
  const [msg, setMsg] = useState<string>('');
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const massage = { msg };
    console.log(massage);
    try {
      await fetch('http://localhost:4001/sendmsg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(massage),
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.wrap}>
      <form onSubmit={handleSubmit}>
        <Input
          type={'text'}
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
        <button>send</button>
      </form>
    </div>
  );
};
