import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Button from '../../components/UI/Button'
import Input from './Input'

const ExpenseForm = ({ onCancel, onSubmit, submitButtonLabel }) => {
    const [inputValues, setInputValue] = useState({ amount: '', date: '', description: '' });

    function inputChangedHandler(inputIdentifier, enteredAmount) {
        setInputValue((currentInputValue) => {
            return {
                ...currentInputValue,
                [inputIdentifier]: enteredAmount
            }
        });
    }

    function submitHandler() {
        const expenseHandler = {
            amount: +inputValues.amount,
            date: new Date(inputValues.date),
            description: inputValues.description
        }
        onSubmit(expenseHandler)
    }

    return (
        <View style={styles.formStyle}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.inputsRow}>
                <Input
                    label="Amount"
                    style={styles.rowInput} textInputConfig={{
                        keyboardType: 'decimal-pad',
                        onChangeText: inputChangedHandler.bind(this, 'amount'),
                        value: inputValues.amount
                    }} />
                <Input
                    label="Date"
                    style={styles.rowInput}
                    textInputConfig={{
                        placeholder: 'YYYY-MM-DD',
                        maxLength: 10,
                        onChangeText: inputChangedHandler.bind(this, 'date'),
                        value: inputValues.date
                    }} />
            </View>
            <Input label="Description" textInputConfig={{
                multiline: true,
                //autoCapitalize: 'none'
                //autoCorrect: false default is true
                onChangeText: inputChangedHandler.bind(this, 'description'),
                value: inputValues.description
            }} />
            <View style={styles.buttons}>
                <Button mode="flat" onPress={onCancel} style={styles.button}>Cancel</Button>
                <Button onPress={submitHandler} style={styles.button}>{submitButtonLabel}</Button>
            </View>
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
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8
    }
})