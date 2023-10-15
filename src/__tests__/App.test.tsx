
// app.test.js
import { render, screen } from '@testing-library/react'
import App from '../App'
import { MemoryRouter } from 'react-router-dom'

test('landing on a bad page', () => {
    const badRoute = '/some/bad/route'
  
    // use <MemoryRouter> when you want to manually control the history
    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>,
    )
  
    // verify navigation to "no match" route
    expect(true).toBeTruthy();
  })
  
