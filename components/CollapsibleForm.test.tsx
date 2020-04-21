import React from 'react'
import { render } from '@testing-library/react'
import CollapsibleForm from './CollapsibleForm'

const Form = () => (
  <CollapsibleForm title={'Click Me'}>
    <h1>Looks Good</h1>
  </CollapsibleForm>
)

describe('CollapsibleForm', () => {
  test('Should render properly with defaults only', async () => {
    const { getByTestId } = render(<Form />)

    expect(await getByTestId('collapsible-form-toggle')).toBeInTheDocument()
  })

  test('Should render content once toggle is clicked', async () => {
    const { getByTestId, queryByTestId } = render(<Form />)

    expect(await queryByTestId('collapsible-form')).not.toBeInTheDocument()

    const toggle = await getByTestId('collapsible-form-toggle')

    expect(await queryByTestId('collapsible-form')).toBeInTheDocument()
    expect(await getByTestId('collapsible-form')).toHaveTextContent(
      'Looks Good'
    )
  })
})
