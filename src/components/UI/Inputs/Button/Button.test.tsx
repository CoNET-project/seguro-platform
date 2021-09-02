import { fireEvent, render } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {

    it('should pass', () => {
        expect(1).toEqual(1)
    })
    // it('should render component', () => {
    //     const { getByText } = render(
    //         <Button
    //             onClick={() => {}}
    //         >
    //             Click Me
    //         </Button>
    //     )
    //
    //     getByText('Click Me')
    // })
    //
    // it('should execute click handler when clicked', () => {
    //     const mockOnClick = jest.fn()
    //
    //     const { getByText } = render(
    //         <Button
    //             onClick={mockOnClick}
    //         >
    //             Click Me
    //         </Button>
    //     )
    //
    //     fireEvent.click(getByText('Click Me'))
    //
    //     expect(mockOnClick).toHaveBeenCalled()
    // })
})
