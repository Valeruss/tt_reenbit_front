import _ from 'lodash';
import { IChatItem } from '../../models';
import Search from './Search';
import ChatItem from './ChatItem';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ChatsActionCreators } from '../../store/reducers/chats/action-creators';
import { getAuth, signOut } from 'firebase/auth';
import { AuthActionCreators } from '../../store/reducers/auth/action-creators';
import './ChatList.scss';

const ChatList = () => {
    const auth = getAuth();
    const dispatch = useDispatch();

    const [ filter, setFilter ] = useState<string>('');
    const [ chats, setChats ] = useState<IChatItem[]>([]);

    const allChats = useSelector((state: any) => state.chats.chats);
    const selectedChatID = useSelector((state: any) => state.chats.selectedChatID);

    const setSelectedChatID = (chatID: string) => {
        dispatch(ChatsActionCreators.setSelectedChatID(chatID));
    };

    const singOutUser = () => {
        signOut(auth);
        dispatch(AuthActionCreators.setIsAuth(false));
    };

    useEffect(() => {
        setChats(allChats);
    }, [allChats]);

    return (
        <div className='chatlist-container border-right'>
            
            <div className='chatlist-container-header border-bottom'>
                <div className='header'>
                    <img 
                        src={'assets/defaultAvatar.png'} 
                        width={'10%'} height={'10%'} 
                        alt='avatar' 
                    />
                    <img 
                        className='logout'
                        onClick={singOutUser}
                        src={'assets/logout.png'}
                        width={'5%'} height={'5%'}
                        alt='logout'
                    />
                </div>
                <Search filter={filter} setFilter={setFilter}/>
            </div>

            <div className='chatlist-container-body'>
                <div className='txt'>Chats</div>
                <div className='chats'>
                    {_.reverse(_.sortBy(chats, (chat) => chat.lastUpdate))
                        .filter(chat => chat.name.includes(filter))
                        .map((chat) => {
                            const selectedChatClass = classNames({
                                'selected-chat': chat._id === selectedChatID 
                            });
                            return ( 
                                <div 
                                    className={`border-bottom ${selectedChatClass}`} 
                                    key={chat._id}
                                    onClick={() => setSelectedChatID(chat._id)}
                                >
                                    <ChatItem chat={chat} />
                                </div> 
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default ChatList;
