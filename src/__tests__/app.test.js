import React from 'react'
import{ render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from '../App.js'
import Results from '../components/results/results.js'

it('should render a list of APIs', async () => {
  const results = {
      "Luke Skywalker": "http://swapi.dev/api/people/1/",
      "Darth Vader": "http://swapi.dev/api/people/4/",
    }
    render (<Results results={results} count={82} />);

    const count = screen.getAllByRole('heading');
    expect(count).toHaveTextContent('Count: 82');
  
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(2);
    expect(items[0]).toHaveTextContent('Luke Skywalker');
    expect(items[0]).toContainHTML('<a href="http://swapi.dev/api/people/1/">');
    expect(items[1]).toHaveTextContent('Darth Vader');
    expect(items[1]).toContainHTML('<a href="http://swapi.dev/api/people/4/">');
    
  }
,)