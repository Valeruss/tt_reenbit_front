import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import MessageInput from './MessageInput';
import IncomingMessage from './IncomingMessage';
import OutgoingMessage from './OutgoingMessage';
import { useEffect, useState } from 'react';
import { IMessage } from '../../models';
import { createAnswerMessage, createMessage, fetchMessagesByChatID } from '../../http/messagesAPI';
import { setLastUpdate } from '../../http/chatsAPI';
import { EventsActionCreators } from '../../store/reducers/events/action-creators';
import useSound from 'use-sound';
import './Chat.scss';

enum Sounds {
    NewMessage = '/media/new_message.mp3',
    SendMessage = '/media/send_message.mp3',
};

const Chat = () => {
    const dispatch = useDispatch();

    const [ isTyping, setIsTyping ] = useState(false);
    const [ messages, setMessages ] = useState<IMessage[]>([]);

    const selectedChatID = useSelector((state: any) => state.chats.selectedChatID);
    const update = useSelector((state: any) => state.events.update);
    const chats = useSelector((state: any) => state.chats.chats);
    const mate = _.find(chats, (chat) => chat._id === selectedChatID);

    const [ playNewMessage ] = useSound(Sounds.NewMessage, { volume: 0.25 });
    const [ playSendMessage ] = useSound(Sounds.SendMessage, { volume: 0.25 });

    const handleAnswer = () => {
        setIsTyping(true);
        createAnswerMessage()
            .then((value) => {
                const answerMessage = {
                    message: value,
                    chatID: selectedChatID,
                    date: Date.now(),
                    sender: 'bot',
                };
                createMessage(answerMessage)
                    .then(() => { 
                            setIsTyping(false);

                            setLastUpdate({ 
                                _id: answerMessage.chatID, 
                                lastUpdate: answerMessage.date 
                            }).then(() => dispatch(EventsActionCreators.update(!!update)));

                            playNewMessage();
                    })
                    .then(() => dispatch(EventsActionCreators.update(!update)));
            })
            .catch(error => {
                alert('Chuck Norris went wrong');
                console.log(error);
            });
    }

    const sendMessage = async (messageText: string) => {
        const newMessage = { 
            message: messageText, 
            chatID: selectedChatID, 
            date: Date.now(), 
            sender: 'me' 
        };

        createMessage(newMessage)
            .then(() => {
                setLastUpdate({ 
                    _id: newMessage.chatID, 
                    lastUpdate: newMessage.date 
                }).then(() => dispatch(EventsActionCreators.update(!update)));
            })
            .then(() => {
                playSendMessage();
                handleAnswer();
            })
            .catch(error => {
                alert('Something went wrong');
                console.log(error);
            });
    };

    const handleTime = (timeString: string) => {
        const [ hours, minutes ] = _.split(timeString, ':');

        if (Number(hours) < 12) {
            const validTime = `${hours}:${minutes} AM`; 
            return validTime;
        }
        const validTime = `${Number(hours)-12}:${minutes} PM`;
        return validTime;
    };

    const handleDate = (dateNum: number) => {
        const date = new Date(dateNum);

        const [, , day, year, time] = _.split(String(date), ' ');
        const validMonth = date.getMonth();
        const validTime = handleTime(time); 

        const validDate = `${validMonth}/${year.slice(2)}/${day}, ${validTime}`;
        return validDate;
    };

    useEffect(() => {
        fetchMessagesByChatID(selectedChatID)
            .then(data => setMessages(data));
    }, [selectedChatID, update]);


    useEffect(() => {
        document
            .querySelector('#move-to')
            ?.scrollIntoView({ block: 'center', behavior: 'smooth' });
    });



    return selectedChatID === '0' ? (
        <div className='select-chat'>Select chat</div>
    ) : (
        <div className='chat-container'>

            <div className='chat-container-header border-bottom'>
                <img src={ `assets/${mate?.avatar}` } alt='avatar' width={50} />
                <span className='name'>{ mate?.name }</span>
                {isTyping && <span className='typing-div'>typing...</span> }
            </div>

            <div className='chat-container-body border-bottom' id='asd'>
                {messages.map((message) => {
                    const validDate = handleDate(message.date);
                    return message.sender !== 'me' ? (
                        <div className={`message attach-left`} key={message._id}>
                            <IncomingMessage message={message} mate={mate} validDate={validDate} />
                        </div> 
                    ) : (
                        <div className={`message attach-right`} key={message._id}>
                            <OutgoingMessage message={message} validDate={validDate} />
                        </div>
                    )
                })}
                <div id='move-to'></div>
            </div>

            <div className='chat-container-input'>
                <div className='chatlist-container-header border-bottom'>
                    <MessageInput 
                        sendMessage={sendMessage}
                    />
                </div>
            </div>

        </div>
    );
};

export default Chat;
