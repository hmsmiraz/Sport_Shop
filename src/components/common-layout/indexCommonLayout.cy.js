import React from 'react'
import CommonLayout from './index'

describe('<CommonLayout />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CommonLayout />)
  })
})