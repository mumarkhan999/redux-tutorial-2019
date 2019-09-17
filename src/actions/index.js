export const increment = () => {
    return {
        type: 'INCREMENT'
    };
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

export const incrementByAny = (anyIncre) => {
    return {
        type: 'INCREMENT_BY_ANY',
        payload: anyIncre
    }
}
