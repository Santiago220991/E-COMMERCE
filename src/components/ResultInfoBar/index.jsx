import { ResultPreview } from './ResultPreview'
import { SortFilter } from './SortFilter'
import { Cart } from '../Cart'
import './ResultInfoBar.css'

function ResultInfoBar () {
    return (
        <div className='ResultInfoBarContainer'>
            <ResultPreview />
            <SortFilter />
            <Cart />
        </div>
    )
}

export { ResultInfoBar }