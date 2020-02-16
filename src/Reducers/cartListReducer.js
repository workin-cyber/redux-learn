export default (state = [], action) => {
    if (action.type == 'ADD_TO_CART')
        return [...state, action.payload]
    return state
}