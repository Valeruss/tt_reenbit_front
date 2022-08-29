import { ChatsAction, ChatsActionEnum, ChatsState } from './types';

const initialState: ChatsState = {
    selectedChatID: '0',
    chats: [],
};

export default function ChatsReducer (state = initialState, action: ChatsAction): ChatsState {
    switch (action.type) {
        case ChatsActionEnum.SET_SELECTED_CHAT_ID:
            return { ...state, selectedChatID: action.payload };
        case ChatsActionEnum.SET_CHATS:
            return { ...state, chats: action.payload };
        default:
            return state;
    }
}