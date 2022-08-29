import { Dispatch, SetStateAction } from 'react';
import './Search.scss';

interface SearchProps {
    filter: string;
    setFilter: Dispatch<SetStateAction<string>>
}

const Search = ({ filter, setFilter }: SearchProps) => {
    return (
        <div className='search-container border'>
            <img 
                className='search-container-img' 
                src={'assets/search.png'} 
                alt='search' 
            />
            <input
                className='search-container-input' 
                type='text' 
                placeholder='Search or start new chat' 
                value={filter}
                onChange={(event) => setFilter(event.target.value)}
            />
        </div>
    );
};

export default Search;
