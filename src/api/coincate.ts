import axios, { AxiosRequestConfig } from 'axios';
import { string } from 'yup';

const axiosInstance = axios.create({
  baseURL: 'https://api-sandbox.coingate.com/v2',
  headers: {
    Accept: 'application/json',
    authorization: 'Bearer 2sY_M4UvRB12N3bZdSRznzFKB1rvbng_rHcM8b8V"',
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
export const PostOrders = async (params: PostOrdersProps) => {
  const axiosRequestConfig: AxiosRequestConfig = {
    method: 'POST',
    url: '/orders',
    params,
  };

  const response = await axiosInstance.request(axiosRequestConfig);
  return response.data;
};
