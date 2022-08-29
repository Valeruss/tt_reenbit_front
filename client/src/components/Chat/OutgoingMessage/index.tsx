import { IMessage } from '../../../models';
import './OutgoingMessage.scss';

interface MessageProps {
    message: IMessage;
    validDate: string;
}

const OutgoingMessage = ({ message, validDate }: MessageProps) => {
    return (
        <div className='outcoming-container'>
            <div className='outcoming-container-content'>
                <div className='content-message'>{ message.message }</div>
                <div className='content-date'>{ validDate }</div>
            </div>
        </div>
    );
};

export default OutgoingMessage;
