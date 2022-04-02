import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A Pair of Shoes',
        amount: 59.99,
        date: new Date('2021-12-19')
    },
    {
        id: 'e2',
        description: 'A Pair of Trousers',
        amount: 89.99,
        date: new Date('2022-03-29')
    },
    {
        id: 'e3',
        description: 'Some Bananas',
        amount: 29.99,
        date: new Date('2021-12-01')
    },
    {
        id: 'e4',
        description: 'Books',
        amount: 14.99,
        date: new Date('2022-02-01')
    },
    {
        id: 'e5',
        description: 'Food',
        amount: 29.99,
        date: new Date('2022-03-01')
    },
    {
        id: 'e6',
        description: 'A Pair of Shoes',
        amount: 59.99,
        date: new Date('2021-12-19')
    },
    {
        id: 'e7',
        description: 'A Pair of Trousers',
        amount: 89.99,
        date: new Date('2022-03-28')
    },
    {
        id: 'e8',
        description: 'Some Bananas',
        amount: 29.99,
        date: new Date('2021-12-01')
    },
    {
        id: 'e9',
        description: 'Books',
        amount: 14.99,
        date: new Date('2022-02-01')
    },
    {
        id: 'e10',
        description: 'Food',
        amount: 29.99,
        date: new Date('2022-03-01')
    }
]

export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({ description, amount, date }) => { },
    deleteExpense: ({ id }) => { },
    updateExpense: ({ id, description, amount, date }) => { },
});

function expensesReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();
            return [{ ...action.payload, id: id }, ...state];
        case 'UPDATE':
            const updateableExpenseIndex = state.findIndex((expense) => expense.id === action.payload.id);
            const updateableExpense = state[updateableExpenseIndex];
            const updatedItem = { ...updateableExpense, ...action.payload.data };
            const updatedExpenses = [...state];
            updatedExpenses[updateableExpenseIndex] = updatedItem;
            return updatedExpenses;
        case 'DELETE':
            return state.filter((expense) => expense.id !== action.payload);
        default:
            return state;
    }
}


function ExpensesContextProvider({ children }) {
    const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

    function addExpense(expenseData) {
        dispatch({ type: 'ADD', payload: expenseData })
    }
    function deleteExpense(id) {
        dispatch({ type: 'DELETE', payload: id })
    }
    function updateExpense(id, expenseData) {
        dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } })
    }

    const value = {
        expenses: expensesState,
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense
    }

    return <ExpensesContext.Provider value={value} >{children}</ExpensesContext.Provider>
}

export default ExpensesContextProvider