import React, { FunctionComponent, useState } from "react"
import Paper from "@mui/material/Paper"
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'

import SearchIcon from '@mui/icons-material/Search'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import InputBase from '@mui/material/InputBase'
import Divider from '@mui/material/Divider'

import DirectionsIcon from '@mui/icons-material/Directions'

const TypeSearch: FunctionComponent = () => {


  const [showClearIcon, setShowClearIcon] = useState("none")

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setShowClearIcon(event.target.value === "" ? "none" : "flex");
  }

  const handleClick = (): void => {
    // TODO: Clear the search input
    console.log("clicked the clear icon...")
  }

  return (
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}
        >
            {/* <IconButton sx={{ p: '10px' }} aria-label="menu">
                <MenuIcon />
            </IconButton> */}
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search by Address / Txn Hash / Block / Token / Domai"
                inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
            {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                <DirectionsIcon />
            </IconButton> */}
        </Paper>
  )
}

export default TypeSearch
