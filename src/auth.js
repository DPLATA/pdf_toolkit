// auth.js
import supabase from './supabaseClient'

// Sign up function
export async function signUp(email, password) {
  const { user, error } = await supabase.auth.signUp({
    email,
    password
  })
  if (error) {
    throw error
  }
  return user
}

// Login function
export async function login(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })
  if (error) {
    throw error
  }
  return { data, error }

}

// Logout function
export async function signOut() {
  const { error } = await supabase.auth.signOut()
  if (error) {
    throw error
  }
}

