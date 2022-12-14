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
  price_amount: number;
  price_currency: string;
  receive_currency: string;
}
export const PostOrders = async ({
  price_amount,
  price_currency,
  receive_currency,
}: PostOrdersProps): Promise<any> => {
  const axiosRequestConfig: AxiosRequestConfig = {
    method: 'POST',
    url: '/orders',
    params: { price_amount, price_currency, receive_currency },
  };

  const response = await axiosInstance.request(axiosRequestConfig);
  return response.data;
};
