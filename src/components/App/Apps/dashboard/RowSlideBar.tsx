import Stack from "@mui/material/Stack"

const MenuSideBarRow = () => {
    return (
        <Stack 
            direction='column'
            alignItems="center"
            spacing={3}
            justifyContent="flex-end"
            sx={{
                height: '100vh',
                width: '5rem',
                backgroundColor: mode === 'light' ? '#f0eddd': '#2d2d1e'
                }}
        >
            {LanguageFireButton(setAnchorEl, locale)}
            <ProforeIcon />
        </Stack>
    )
}