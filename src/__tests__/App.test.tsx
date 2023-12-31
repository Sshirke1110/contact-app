
// app.test.js
import { render, screen } from '@testing-library/react'
import App from '../App'
import { MemoryRouter } from 'react-router-dom'

describe('App', () => {
  test('landing on a bad page', () => {
    const badRoute = '/some/bad/route'

    // use <MemoryRouter> when you want to manually control the history
    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>,
    )

    // verify navigation to "no match" route
    expect(screen.getByText(/Not found please click here to Redirect/)).toBeDefined();
  })

})

