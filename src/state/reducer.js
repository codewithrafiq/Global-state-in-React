export const initialState = {
    num1: 0,
    num2: 10,
};

export const reducer = (state, action) => {
    switch (action) {
        case 'addNum1':
            return {
                ...state,
                num1: state.num1 + 1,
            }
        case 'addNum2':
            return {
                ...state,
                num2: state.num2 + 1,
            }
    }
}