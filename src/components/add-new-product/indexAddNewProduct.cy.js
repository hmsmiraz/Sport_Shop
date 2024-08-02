import React from 'react'
import AddNewProduct from './index'

describe('<AddNewProduct />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AddNewProduct />)
    
  })
})