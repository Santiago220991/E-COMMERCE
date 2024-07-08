import { useContext } from 'react';
import { SearchContext } from '../../../contexts/SearchContext'
import './Search.css'
import loupe from '/src/assets/loupe.png';

function Search () {
    const {
        searchValue,
        setSearchValue,
    } = useContext(SearchContext);

    return (
        <div className='SearchContainer'>
            <input
                placeholder='Search...'
                value={searchValue}
                onChange={(event) => {
                    setSearchValue(event.target.value);
                }}
            />
            <img src={loupe}/>
        </div>
    )
}

export { Search }