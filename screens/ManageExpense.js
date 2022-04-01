import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ManageExpense = ({ route, navigation }) => {
  const editedExpenseId = route.params?.expenseId
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'EditExpense' : 'Add Expense'
    })
  }, [navigation, isEditing])


  return (
    <View>
      <Text>ManageExpenses</Text>
    </View>
  )
}

export default ManageExpense

const styles = StyleSheet.create({})