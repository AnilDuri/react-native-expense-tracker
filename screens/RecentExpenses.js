import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'

import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import LoadingOverlay from '../components/UI/LoadingOverlay'
import { ExpensesContext } from '../store/expenses-context'
import { getDateMinusDays } from '../util/date'
import { fetchExpenses } from '../util/http'

const RecentExpenses = () => {
  const [isLoading, setIsLoading] = useState(true);
  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    async function getExpenses() {
      setIsLoading(true);
      const expenses = await fetchExpenses();
      setIsLoading(false);
      expensesCtx.setExpenses(expenses);
    }
    getExpenses();
  }, [])

  if (isLoading) {
    return <LoadingOverlay />
  }

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return (expense.date > date7DaysAgo) && (expense.date <= today);
  })

  return (
    <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 days" fallbackText="No expenses registered for the last 7 days" />
  )
}

export default RecentExpenses

const styles = StyleSheet.create({})
