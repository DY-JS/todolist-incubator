import {useState} from "react";
import {Rating} from "./Rating";

const RatingContainer = () => {
    const [value, setValue] = useState<number>(0)
    const rates = [1, 2, 3 ,4 ,5];

    return (
        <div>
            {rates.map((rate) => {
                return <Rating key={rate} rate={rate} value={value} changeValue={setValue}/>
            })}
        </div>
    );
};

export default RatingContainer;