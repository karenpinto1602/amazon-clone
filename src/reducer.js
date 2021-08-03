
export const initialState = {
    basket: [],
    user: null,
};

/* Selector */
/* Through this, total amount is calculated to display in the card */
export const getBasketTotal = (basket) => 
    basket?.reduce((amount,item) => item.price + amount,0);


const reducer = (state,action) => {
    console.log(action);
    switch(action.type){
        case "ADD_TO_BASKET":
            return{
                ...state,
                basket: [...state.basket, action.item]
            };
        case "REMOVE_FROM_BASKET":           
            const index = state.basket.findIndex(
             (basketItem) => basketItem.id === action.id
            );
            if(index>=0){
                state.basket.splice(index,1);
            }
            else{
               console.warn(
                   `Cant remove product id (id: ${action.id}) as it's not in the basket`
               ) 
            }
            return {
                ...state,
                basket: state.basket
            };
        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: []
            }

        case 'SET_USER':
            return{
                ...state,
                user: action.user
            }          
        default:
            return state;
    }
};

export default reducer;