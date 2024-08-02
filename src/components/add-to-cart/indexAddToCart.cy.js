import React from 'react'
import AddToCart from './index'

describe('<AddToCart />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AddToCart />)
  })
})