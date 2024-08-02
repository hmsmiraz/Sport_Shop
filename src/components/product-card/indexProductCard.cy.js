import React from 'react'
import ProductCard from './index'

describe('<ProductCard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ProductCard />)
  })
})