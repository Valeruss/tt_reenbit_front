import axios from 'axios';
import { $host } from './index';

const sleep = (duration: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration)
    });
}

export const fetchMessagesByChatID = async (chatID: string) => {
    const { data } = await $host.get('api/messages/' + chatID);
    return data;
};

export const fetchLastMessageByChatID = async (chatID: string) => {
    const { data } = await $host.get('api/messages/' + chatID + '/last');
    return data;
}

export const createMessage = async (message: {}) => {
    const { data } = await $host.post('api/messages/create', message);
    return data;
};

export const createAnswerMessage = async () => {
    const answerDelay = 11000;
    const { data: { value } } = await axios.get('https://api.chucknorris.io/jokes/random');
    
    await sleep(answerDelay);
    return value;
}
