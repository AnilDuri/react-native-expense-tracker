import React, { useContext, useLayoutEffect } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

import Button from '../components/UI/Button'
import IconButton from '../components/UI/IconButton'
import { GlobalStyles } from '../constants/styles'
import { ExpensesContext } from '../store/expenses-context'

const ManageExpense = ({ route, navigation }) => {
  const editedExpenseId = route.params?.expenseId
  const isEditing = !!editedExpenseId;
  const expensesCtx = useContext(ExpensesContext);

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
  function confirmHandler() {
    isEditing ?
      expensesCtx.updateExpense(editedExpenseId, { description: 'Test!!', amount: 20.99, date: new Date('2022-04-12') }) :
      expensesCtx.addExpense({ description: 'Test', amount: 19.99, date: new Date('2022-04-13') })
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      
      <View style={styles.buttons}>
        <Button mode="flat" onPress={cancelHandler} style={styles.button}>Cancel</Button>
        <Button onPress={confirmHandler} style={styles.button}>{isEditing ? 'Update' : 'Add'}</Button>
      </View>
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

  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  deleteContainer: {
    marginTop: 16,
    padding: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center'
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8
  }
})