import React, { useContext, useLayoutEffect } from 'react'
import { StyleSheet, View } from 'react-native'

import ExpenseForm from '../components/ManageExpense/ExpenseForm'
import IconButton from '../components/UI/IconButton'
import { GlobalStyles } from '../constants/styles'
import { ExpensesContext } from '../store/expenses-context'

const ManageExpense = ({ route, navigation }) => {
  const editedExpenseId = route.params?.expenseId
  const isEditing = !!editedExpenseId;
  const expensesCtx = useContext(ExpensesContext);

  const selectedExpense = expensesCtx.expenses.find((expense) => expense.id === editedExpenseId)

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'EditExpense' : 'Add Expense'
    })
  }, [navigation, isEditing])


  function deleteExpenseHandler() {
    navigation.goBack();
    expensesCtx.deleteExpense(editedExpenseId)
  }
  function cancelHandler() {
    navigation.goBack()

  }
  function confirmHandler(expenseData) {
    isEditing ?
      expensesCtx.updateExpense(editedExpenseId, expenseData) :
      expensesCtx.addExpense(expenseData)
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
        submitButtonLabel={isEditing ? 'Update' : 'Add'}
        defaultValues={selectedExpense} />
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton icon="trash" color={GlobalStyles.colors.error500} size={36} onPress={deleteExpenseHandler} />
        </View>
      )}
    </View>
  )
}

export default ManageExpense

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800
  },
  deleteContainer: {
    marginTop: 16,
    padding: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center'
  },
})