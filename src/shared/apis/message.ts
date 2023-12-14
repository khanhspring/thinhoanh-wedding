import api from '../client';

const messageApi = {
  addMessage: (tableId: string, params: AddMessageReq[]) =>
    api.post(`/v1/rows/${tableId}`, params, { baseURL: 'https://v1.appbackend.io' }),
};

export default messageApi;
