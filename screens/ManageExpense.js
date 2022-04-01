import React, { useLayoutEffect } from 'react'
import { Button, StyleSheet, View } from 'react-native'

import IconButton from '../components/UI/IconButton'
import { GlobalStyles } from '../constants/styles'

const ManageExpense = ({ route, navigation }) => {
  const editedExpenseId = route.params?.expenseId
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'EditExpense' : 'Add Expense'
    })
  }, [navigation, isEditing])


  function deleteExpenseHandler() {

  }

  return (
    <View style={styles.container}>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton icon="trash" color={GlobalStyles.colors.error500} size={36} onPress={deleteExpenseHandler} />
        </View>
      )}
      {/* <Button></Button> */}
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
  }
})