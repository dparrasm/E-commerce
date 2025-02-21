import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { userEvent } from "@testing-library/user-event"
import { screen } from '@testing-library/dom'
import Register from './Register'

describe('Register test suite', async () => {
    it('Email does not match the email format', async () => {
        render(<Register />)
        const user = userEvent.setup()
        const emailInput = screen.getByRole('textbox', { name: /email/i })
        await user.type(emailInput, 'wrongemail.com')
        
        const signupButton = screen.getByRole('button', {name: /sign up/i})
        await user.click(signupButton)

        const paragraph = await screen.findByText(/Invalid email format/i);
        expect(paragraph).toBeInTheDocument()
    })
})
