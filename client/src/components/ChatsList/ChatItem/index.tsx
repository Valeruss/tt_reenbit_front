import _ from 'lodash';
import { useEffect, useState } from 'react';
import { fetchLastMessageByChatID, fetchMessagesByChatID } from '../../../http/messagesAPI';
import { IChatItem, IMessage } from '../../../models';
import { useSelector } from 'react-redux';
import './ChatItem.scss';

interface ChatItemProps {
    chat: IChatItem;
}

const ChatItem = ({ chat }: ChatItemProps) => {
    const [ lastMessage, setLastMessage ] = useState<IMessage>();
    const update = useSelector((state: any) => state.events.update);
    
    useEffect(() => {
        fetchLastMessageByChatID(chat._id)
            .then(data => setLastMessage(data));
    }, [ update ]);
    
    const handleMessage = () => {
        const maxLength = 70;

        if (lastMessage?.message?.length! > maxLength) {
            return (
                _.truncate(lastMessage?.message, { 
                    'length': maxLength, 
                    'separator': ' ',
                })
            );
        };
        return lastMessage?.message;
    };

    const handleDate = () => {
        const date = new Date(lastMessage?.date!);
        const [, month, day, year] = _.split(String(date), ' ');
        const result = `${month} ${day}, ${year}`;
        return result;
    }

    return (
        <div className='chatitem-container'>
            <div className='chatitem-container-avatar'>
                <img src={`assets/${chat.avatar}`} alt='avatar' width={50} />
            </div>
            <div className='chatitem-container-text'>
                <div className='name'>{ chat.name }</div>
                <div className='message'>{ handleMessage() }</div>
            </div>
            <div className='chatitem-container-date'>{ handleDate() }</div>
        </div>
    );
};

export default ChatItem;
