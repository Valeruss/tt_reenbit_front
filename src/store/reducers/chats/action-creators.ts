import { IChatItem } from '../../../models';
import { ChatsActionEnum, SetChatsAction, SetSelectedChatIDAction } from './types';

export const ChatsActionCreators = {
  setSelectedChatID: (payload: String): SetSelectedChatIDAction => ({
    type: ChatsActionEnum.SET_SELECTED_CHAT_ID,
    payload,
  }),
  setChats: (payload: IChatItem[]): SetChatsAction => ({
    type: ChatsActionEnum.SET_CHATS,
    payload,
  }),
};
