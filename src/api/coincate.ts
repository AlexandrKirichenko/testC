import axios, { AxiosRequestConfig } from 'axios';
import { string } from 'yup';

const axiosInstance = axios.create({
  baseURL: 'https://api-sandbox.coingate.com/v2',
  headers: {
    Accept: 'application/json',
    authorization: 'Bearer GaTHXSf1RHAZvgPiuMhe-Sh5Kg9dEBBuDJtGxUwe',
    'Content-Type': 'application/json',
  },
});

interface PostOrdersProps {
  order_id?: string;
  price_amount: number;
  price_currency: string;
  receive_currency: string;
  success_url: string;
  cancel_url: string;
  callback: string;
  description: string;
}
export const PostOrders = async ({
  order_id,
  price_amount,
  price_currency,
  receive_currency,
  success_url,
  cancel_url,
  callback,
  description,
}: PostOrdersProps): Promise<any> => {
  const axiosRequestConfig: AxiosRequestConfig = {
    method: 'POST',
    url: '/orders',
    params: {
      order_id,
      price_amount,
      price_currency,
      receive_currency,
      success_url,
      cancel_url,
      callback,
      description,
    },
  };

  const response = await axiosInstance.request(axiosRequestConfig);
  return response.data;
};
