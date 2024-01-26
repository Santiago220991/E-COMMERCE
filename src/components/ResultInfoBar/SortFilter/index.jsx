import './SortFilter.css'
import { SearchContext } from '../../../contexts/SearchContext'
import { useContext } from "react";
function SortFilter () {
    const {
        sortProducts
    } = useContext(SearchContext);
    const changeSortValue = (e)=>{
        sortProducts(e.value)
    }
    return (
        <div className='SortFilterContainer'>
            <select name="order" id="order" onChange={(e)=>{changeSortValue(e.target)}}>
                <option value="Name">Name</option>
                <option value="Price_Low">Price: Low to High</option>
                <option value="Price_High">Price: High to Low</option>
            </select>
        </div>
    )
}

export { SortFilter }
