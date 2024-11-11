'use client'
 
import { useActionState } from 'react'
import { createUser } from '@/app/actions'
 
const initialState = {
  message: '',
}
 
export function Signup() {
  const [state, formAction] = useActionState(createUser, initialState)
 
  return (
    <form action={formAction}>
      <label htmlFor='email'>Email</label>
      <input type='text' id='email' name='email' required />
      <p aria-live='polite'>{state?.message}</p>
      <button type='button'>Sign up</button>
    </form>
  )
}