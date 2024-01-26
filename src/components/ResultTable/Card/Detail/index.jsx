import { Rating } from "../../../Filter/RatingFilter/Rating"
import roundRating from "../../../../utils/rounding"
import './Detail.css'

function Detail ({title, price, rate }) {
    return (
        <div className="DetailsCardContainer">
            <h3><strong>{title}</strong></h3>
            <Rating stars={roundRating(rate)}/>
            <h3><strong>${price}</strong></h3>
        </div>
    )
}

export { Detail }
