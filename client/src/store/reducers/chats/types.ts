import { IChatItem } from "../../../models";

export interface ChatsState {
    selectedChatID: String;
    chats: IChatItem[] | [];
};

export enum ChatsActionEnum {
    SET_SELECTED_CHAT_ID = 'SET_SELECTED_CHAT_ID',
    SET_CHATS = 'SET_CHATS',
};

export interface SetSelectedChatIDAction {
    type: ChatsActionEnum.SET_SELECTED_CHAT_ID;
    payload: String;
};

export interface SetChatsAction {
    type: ChatsActionEnum.SET_CHATS;
    payload: IChatItem[];
}

export type ChatsAction = 
    SetSelectedChatIDAction |
    SetChatsAction;