import React from 'react'
import { FlatList, StyleSheet, Text } from 'react-native'

function renderExpenseItem(itemData) {
    return <Text>{itemData.item.description}</Text>
}

const ExpensesList = ({ expenses }) => {
    return (
        <FlatList data={expenses} renderItem={renderExpenseItem} keyExtractor={(item) => item.id}></FlatList>
    )
}

export default ExpensesList

const styles = StyleSheet.create({})