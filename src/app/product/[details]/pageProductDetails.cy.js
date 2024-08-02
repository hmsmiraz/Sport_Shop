import React from 'react'
import ProductDetails from './page'

describe('<ProductDetails />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ProductDetails />)
  })
})