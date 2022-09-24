import styled from "styled-components";
import Header from "../../Header";
import Wallpaper_1 from '../../../../../../../../assets/messenger/wallpaper/messenger-wallpaper-1.jpg'
import Wallpaper_2 from '../../../../../../../../assets/messenger/wallpaper/messenger-wallpaper-2.jpg'
import Wallpaper_3 from '../../../../../../../../assets/messenger/wallpaper/messenger-wallpaper-3.jpg'
import Wallpaper_4 from '../../../../../../../../assets/messenger/wallpaper/messenger-wallpaper-4.jpg'
import {useState} from "react";

type StyledWallpaperBoxProps = {
	imageSrc?: string,
	width?: string,
	height?: string
}

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

export const StyledWallpaperBox = styled.label<StyledWallpaperBoxProps>`
  background-image: ${props => props.imageSrc ? `url("${props.imageSrc}")` : null};
  background-position: center top;
  width: ${props => props?.width || '100px'};
  height: ${props => props?.height || '100px'};
  content: '';
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
						<StyledWallpaperBox imageSrc={Wallpaper_1}/>
						<StyledWallpaperRadio type="radio" checked={selected == 1}
						                      onChange={() => setSelected(1)}/>
					</StyledWallpaperSelection>
					<StyledWallpaperSelection>
						<StyledWallpaperBox imageSrc={Wallpaper_2}/>
						<StyledWallpaperRadio type="radio" checked={selected == 2}
						                      onChange={() => setSelected(2)}/>
					</StyledWallpaperSelection>
					<StyledWallpaperSelection>
						<StyledWallpaperBox imageSrc={Wallpaper_3}/>
						<StyledWallpaperRadio type="radio" checked={selected == 3}
						                      onChange={() => setSelected(3)}/>
					</StyledWallpaperSelection>
					<StyledWallpaperSelection>
						<StyledWallpaperBox imageSrc={Wallpaper_4}/>
						<StyledWallpaperRadio type="radio" checked={selected == 4}
						                      onChange={() => setSelected(4)}/>
					</StyledWallpaperSelection>
				</StyledWallpaperGrid>
			</StyledContent>
		</StyledContainer>
	)
}

export default Wallpaper
