import React from 'react'
import { StyleSheet, View } from 'react-native'
import { FlatList } from 'react-native-web'

import ExpensesList from './ExpensesList'
import ExpensesSummary from './ExpensesSummary'

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
        date: new Date('2022-01-19')
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
    }
]

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
    return (
        <View>
            <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
            <ExpensesList expenses={DUMMY_EXPENSES} />
        </View>
    )
}

export default ExpensesOutput

const styles = StyleSheet.create({})