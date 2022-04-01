import React from 'react'
import { FlatList, StyleSheet } from 'react-native'

import ExpenseItem from './ExpenseItem'

function renderExpenseItem(itemData) {
    return <ExpenseItem {...itemData.item} />
}

const ExpensesList = ({ expenses }) => {
    return (
        <FlatList data={expenses} renderItem={renderExpenseItem} keyExtractor={(item) => item.id}></FlatList>
    )
}

export default ExpensesList

const styles = StyleSheet.create({})