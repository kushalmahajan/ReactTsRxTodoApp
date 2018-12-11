const ADD = "PING";
const DELETE = "PONG";
const UPDATE = "UPDATE";
const TOGGLE_TODO = "TOGGLE_TODO"; 

const initialState = {
  list: [],
  visibilityFilter: 'SHOW_ALL'
};
const todosReducer = (state = initialState, action) => {
    const { list } = state;
    switch (action.type) {
        case ADD:
            return { list: [...list, action.item] };
        case DELETE:
            return { 
            list:  list.filter(item => item.id !== action.id)
            };
        case UPDATE:
            return {
                list: list.map(item => {
                    if(item.id !== action.id) return item;
                    return { ...item, ...action.payload};
                })
            }
        case TOGGLE_TODO:
            return { list: list.map(item => {
                if (item.id !== action.id) return item;
                return { ...item, completed: !item.completed };
            }) };
        default:
        return state;
    }
};
export default todosReducer;
