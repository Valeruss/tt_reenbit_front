import _ from 'lodash';
import { useState } from 'react';
import './MessageInput.scss';

const MessageInput = ({ sendMessage }: any) => {
    const [ message, setMessage ] = useState('');

    const checkInput = (message: string) => {
        const length = _.words(message).length;
        if (length > 0) 
            return true;
        return false;
    };

    const handleMessage = () => {
        const isValid = checkInput(message);
        
        if (isValid) {
            sendMessage(message);
            setMessage('');
            return;
        }
        return alert('Incorrect message');
    };

    return (
        <div className='messageinput-container border'>
            <input 
                className='messageinput-container-input' 
                type='text' 
                placeholder='Type your message' 
                value={message}
                onChange={(event) => setMessage(event.target.value)}
            />
            <img 
                className='messageinput-container-img border' 
                src={'assets/send.png'} 
                alt='search' 
                onClick={handleMessage} 
            />
        </div>
    );
};

export default MessageInput;
