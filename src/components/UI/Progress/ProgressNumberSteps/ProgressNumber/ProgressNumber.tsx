import styled from 'styled-components'

type StyledProgressNumberProps = {
    isActive: boolean
}

const StyledProgressNumber = styled.div<StyledProgressNumberProps>`
  height: 25px;
  width: 25px;
  content: '';
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.isActive ? props.theme.ui.colors.primary : props.theme.ui.colors.background.elevationOne};
  border: 1px solid ${props => props.theme.ui.colors.border.light};
`

const StyledNumberText = styled.p`
  color: white;
  font-size: ${props => props.theme.ui.fontSizes.narrow.xsm};
  width: 100%;
  height: 100%;
  transform: translate(2%, 5%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
`

type ProgressNumberProps = {
    isActive: boolean,
    number: number
}

const ProgressNumber = ({number, isActive}: ProgressNumberProps) => {
    return (
        <StyledProgressNumber isActive={isActive}>
            <StyledNumberText>
                {number}
            </StyledNumberText>
        </StyledProgressNumber>
    )
}

export default ProgressNumber