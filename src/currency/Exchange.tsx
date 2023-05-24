import {useState} from "react";
import {CurrencyFilter} from "./CurrencyFilter";
import {Currencies, CurrencyItem} from "./types";

export const Exchange = () => {
    const data = [
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ];

    const [money, setMoney] = useState<CurrencyItem[]>(data);
    const [currency, setCurrency] = useState<string | null>(null);

    const filter = (filter: Currencies) => {
        switch (filter) {
            case Currencies.Dollars: {
                setMoney(data.filter(c => c.banknots === Currencies.Dollars))
                return;
            }

            case Currencies.RUBLS: {
                setMoney(data.filter(c => c.banknots === Currencies.RUBLS))
                return;
            }
        }
    }

    return (
        <>
            {
                money.map(m => {
                    return<p key={m.number}>{m.banknots}-{m.value}-{m.number}</p>
                })
            }
            <CurrencyFilter chooseCurrency={setCurrency} filter={filter}/>
        </>

    );

}