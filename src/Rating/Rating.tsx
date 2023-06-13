import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import  styles from './Rating.module.css'

interface RatingProps {
    rate: number;
    value: number;
    changeValue: Dispatch<SetStateAction<number>>
}

export const Rating: FC<RatingProps> =({ rate, value, changeValue}) => {
    const handleClick = () => {
        changeValue(rate)
    }
    const ratingClasses = `${styles.ratingItem} ${rate <= value ? ` ${styles.ratingFilled}` : ''}`;
    return (
        <div
            className={ratingClasses}
            //className={rate <= value ? styles.ratingFilled : styles.ratingItem}
            onClick={handleClick}
        >
            {rate}
        </div>
)
}