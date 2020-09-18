import React from 'react'
import{ rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from '../App.js'

const server = setupServer(
  rest.get('*', (req, res, ctx) => {
    return res(ctx.json({ 
      results: [
        { name: 'foo' },
        { name: 'bar' }  
      ]
    }))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

it('loads and displays names', async () => {
  render(<App />);

  screen.getByText('RESTy')

const urlInput = screen.getByPlaceholderText('http://api.url.here');
fireEvent.change(urlInput, {event:{target: 'https://swapi.dev/api/people'}})

fireEvent.click(screen.getByText('Get it!'));

screen.debug();


})