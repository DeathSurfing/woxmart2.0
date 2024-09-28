'use server'

import { NextResponse } from 'next/server'

type ContactFormData = {
  name: string
  email: string
  message: string
}

export async function sendContactForm(data: ContactFormData) {
  // In a real application, you would send this data to your backend or an email service
  console.log('Received contact form submission:', data)

  // Simulate a delay to mimic an API call
  await new Promise(resolve => setTimeout(resolve, 1000))

  // For demonstration purposes, we'll just return a success response
  // In a real application, you would handle errors and return appropriate responses
  return NextResponse.json({ success: true })
}