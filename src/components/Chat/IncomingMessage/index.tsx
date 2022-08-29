import { IChatItem, IMessage } from '../../../models';
import './IncomingMessage.scss';

interface MessageProps {
    message: IMessage;
    mate: IChatItem;
    validDate: string;
}

const IncomingMessage = ({ message, mate, validDate }: MessageProps) => {
    return (
        <div className='incoming-container'>
            <div className='incoming-container-avatar'>
                <img src={`assets/${mate.avatar}`} alt='avatar' width={50} />
            </div>
            <div className='incoming-container-content'>
                <div className='content-message'>{ message.message }</div>
                <div className='content-date'>{ validDate }</div>
            </div>
        </div>
    );
};

export default IncomingMessage;
