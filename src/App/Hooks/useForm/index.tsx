/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useState } from 'react'
import { ITarget, IUseForm } from './../../Types/HookTypes'

/**
 * useForm Custom Hook
 *
 * receives an object of initial values
 *
 * returns an array with the values, the values handler and the reset to initial values function handler
 *
 * @param {*} initialState {Object}
 * @return {*} [values, setValues, resetValues] {IUseForm}
 *
 */
export const useForm = (initialState: any): IUseForm => {
  const [values, setValues] = useState(initialState)

  const reset = (newFormState = initialState) => setValues(newFormState)

  const handleInputChange = ({ target }: { target: ITarget }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    })
  }
  return [values, handleInputChange, reset]
}
