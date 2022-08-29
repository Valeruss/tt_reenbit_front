import { useEffect } from 'react';
import ChatList from '../../components/ChatsList';
import Chat from '../../components/Chat';
import { fetchChats } from '../../http/chatsAPI';
import { useDispatch } from 'react-redux';
import { ChatsActionCreators } from '../../store/reducers/chats/action-creators';
import { useSelector } from 'react-redux';
import './Home.scss';

const Home = () => {
    const dispatch = useDispatch();
    const update = useSelector((state: any) => state.events.update);


    useEffect(() => {
        fetchChats().then(data => {
            dispatch(ChatsActionCreators.setChats(data));
        });
    }, [ update ]);

    return (
        <div className='container'>
            <ChatList />
            <Chat />
        </div>
    );
};

export default Home;
