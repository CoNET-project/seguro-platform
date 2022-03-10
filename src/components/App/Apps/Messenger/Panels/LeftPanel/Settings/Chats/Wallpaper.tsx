import styled from "styled-components";
import Header from "../../Header";
import {randomColor} from "../../../../../../../../utilities/utilities";
import {useState} from "react";

const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
`

const StyledContent = styled.div`
  height: calc(100% - 50px);
  width: 100%;
  padding: 30px 10px;
  display: flex;
  justify-content: center;
`

const StyledWallpaperGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 125px);
  grid-template-rows: repeat(2, 125px);
  grid-gap: 10px;
`

const StyledWallpaperSelection = styled.div`
  width: 100%;
  height: 100%;
  content: '';
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledWallpaperBox = styled.div`
  width: 100px;
  height: 100px;
  content: '';
  background-color: ${props => randomColor()};
  display: flex;
`

const StyledWallpaperRadio = styled.input`
  margin-top: 10px;
`

const Wallpaper = () => {

    const [selected, setSelected] = useState(1)


    return (
        <StyledContainer>
            <Header/>
            <StyledContent>
                <StyledWallpaperGrid>
                    <StyledWallpaperSelection>
                        <StyledWallpaperBox/>
                        <StyledWallpaperRadio type="radio" defaultChecked={selected == 1}
                                              onClick={() => setSelected(1)}/>
                    </StyledWallpaperSelection>
                    <StyledWallpaperSelection>
                        <StyledWallpaperBox/>
                        <StyledWallpaperRadio type="radio" defaultChecked={selected == 2}
                                              onClick={() => setSelected(2)}/>
                    </StyledWallpaperSelection>
                    <StyledWallpaperSelection>
                        <StyledWallpaperBox/>
                        <StyledWallpaperRadio type="radio" defaultChecked={selected == 3}
                                              onClick={() => setSelected(3)}/>
                    </StyledWallpaperSelection>
                    <StyledWallpaperSelection>
                        <StyledWallpaperBox/>
                        <StyledWallpaperRadio type="radio" defaultChecked={selected == 4}
                                              onClick={() => setSelected(4)}/>
                    </StyledWallpaperSelection>
                </StyledWallpaperGrid>
            </StyledContent>
        </StyledContainer>
    )
}

export default Wallpaper