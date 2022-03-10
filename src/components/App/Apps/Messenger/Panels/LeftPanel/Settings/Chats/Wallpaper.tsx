import styled from "styled-components";
import Header from "../../Header";

const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
`

const StyledContent = styled.div`
  height: calc(100% - 50px);
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
`

const StyledWallpaperGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 100px);
  grid-template-rows: repeat(2, 100px);
  grid-gap: 10px;
`

const StyledWallpaperBox = styled.div`
  width: 100px;
  height: 100px;
  content: '';
  background-color: red;
  display: flex;
`

const Wallpaper = () => {
    return (
        <StyledContainer>
            <Header/>
            <StyledContent>
                <StyledWallpaperGrid>
                    <StyledWallpaperBox/>
                    <StyledWallpaperBox/>
                    <StyledWallpaperBox/>
                    <StyledWallpaperBox/>
                </StyledWallpaperGrid>
            </StyledContent>
        </StyledContainer>
    )
}

export default Wallpaper