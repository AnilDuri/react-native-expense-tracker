import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Input from './Input'

const ExpenseForm = () => {
    function amountChangedHandler() {

    }

    return (
        <View style={styles.formStyle}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.inputsRow}>
                <Input
                    label="Amount"
                    style={styles.rowInput} textInputConfig={{
                        keyboardType: 'decimal-pad',
                        onChangeText: amountChangedHandler
                    }} />
                <Input
                    label="Date"
                    style={styles.rowInput}
                    textInputConfig={{
                        placeholder: 'YYYY-MM-DD',
                        maxLength: 10,
                        onChangeText: () => { }
                    }} />
            </View>
            <Input label="Description" textInputConfig={{
                multiline: true,
                //autoCapitalize: 'none'
                //autoCorrect: false default is true
            }} />
        </View>
    )
}

export default ExpenseForm

const styles = StyleSheet.create({
    formStyle: {
        marginTop: 40
    },
    inputsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowInput: {
        flex: 1
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 24,
        textAlign: 'center'
    }
})