import { $host } from './index';

export const fetchChats = async () => {
    const { data } = await $host.get('api/chats/');
    return data;
};

export const setLastUpdate = async (updateData: {}) => {
    const { data } = await $host.post('api/chats/update', updateData);
    return data;
};
