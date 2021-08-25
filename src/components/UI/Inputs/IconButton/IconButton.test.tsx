import { fireEvent, render } from '../../../../utilities/testing/testing'
import IconButton from './IconButton'

describe('IconButton', () => {

    it('should render component', () => {
        const label = 'label'
        const iconTestId = 'icon'

        const { getByLabelText, getByTestId } = render(
            <IconButton
                label={label}
                size="md"
                onClick={() => {}}
                isDisabled={false}
                isInverted={false}
            >
                <div data-testid={iconTestId} />
            </IconButton>
        )

        getByLabelText(label)
        getByTestId(iconTestId)
    })

    it('should execute click handler when clicked', () => {
        const label = 'label'
        const mockOnClick = jest.fn()

        const { getByLabelText } = render(
            <IconButton
                label={label}
                size="md"
                onClick={mockOnClick}
                isDisabled={false}
                isInverted={false}
            >
                <div />
            </IconButton>
        )
        const iconButton = getByLabelText(label)

        fireEvent.click(iconButton)
        expect(mockOnClick).toHaveBeenCalled()
    })

    it('should not execute click handler when clicked if disabled', () => {
        const label = 'label'
        const mockOnClick = jest.fn()

        const { getByLabelText } = render(
            <IconButton
                label={label}
                size="md"
                onClick={mockOnClick}
                isDisabled
                isInverted={false}
            >
                <div />
            </IconButton>
        )
        const iconButton = getByLabelText(label)

        fireEvent.click(iconButton)
        expect(mockOnClick).not.toHaveBeenCalled()
    })
})
