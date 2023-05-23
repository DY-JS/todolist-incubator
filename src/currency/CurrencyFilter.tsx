import React from "react";
import {Currencies} from "./types";
import {Button} from "./Button";

type FilterProps = {
    chooseCurrency: Function;
    filter: Function
}

export function CurrencyFilter({chooseCurrency, filter}: FilterProps) {

    return (
        <>
            <Button chooseCurrency={chooseCurrency} filter={filter} title={Currencies.RUBLS}/>
            <Button chooseCurrency={chooseCurrency} filter={filter} title={Currencies.Dollars}/>
        </>

    );
}
