export interface IChatItem {
    _id: string;
    name: string;
    avatar: string;
    lastUpdate: number;
}

export interface IMessage {
    _id: string;
    chatID: string;
    message: string;
    sender: string;
    date: number;
    __v: number;
}
