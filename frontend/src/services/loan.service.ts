import axios from 'axios';
import { Sheet } from 'types/loan.types';

export const createApplication = async () => {
  const response = await axios.post(`${process.env.REACT_APP_SERVER}/application`, {});
  return response.data;
}

export const submitApplication = async (data: any) => {
  const response = await axios.put(`${process.env.REACT_APP_SERVER}/application`, data);
  return response.data;
}

export const getBalanceSheet = async (userId: string): Promise<Sheet[]> => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER}/accounting/${userId}`);
  return response.data
}
