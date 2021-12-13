type ListProps<T> = {
    items: T[]
    onClick: (value: T) => void
}

export const List = <T extends {id: number, first: string, last: string}>({ items, onClick}: ListProps<T>) => {
    return (
        <div>
            <h2>List of Items</h2>
            {items.map((item, index) => {
                console.log(index, item)
                return(
                    <div key={item.id} onClick={() => onClick(item)}>{item.first} {item.last}</div>
                )
            })}
        </div>
    )
}