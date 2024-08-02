import React from 'react'
import HomeButton from './index'

describe('<HomeButton />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<HomeButton />)
  })
})