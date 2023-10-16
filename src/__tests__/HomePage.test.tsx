
import { render, screen, waitFor } from '@testing-library/react'
import HomePage from '../layout/HomePage'

describe('App', () => {

    test('check heading', () => {
        render(<HomePage />)
        const heading = screen.getByTestId('heading-main')
        expect(heading).toBeDefined()
    })
    test('check heading', async () => {

    })
})

