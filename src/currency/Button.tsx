type ButtonProps = {
    filter: Function;
    chooseCurrency: Function,
    title: string
}

export function Button({chooseCurrency, filter, title}: ButtonProps) {
    const clickHandler = (title: string) => {
        chooseCurrency(title);
        filter(title)
    }

    return (
        <button
            onClick={() => clickHandler(title)}>
            {title}
        </button>
    )
}