import {AppBar, Button, IconButton, Toolbar, Typography} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function NavigationBar() {
    return (
        <AppBar position="static" sx={
            {
                position: 'absolute',
                // Transparent background
                backgroundColor: 'transparent',
            }
        }>
            <Toolbar variant="dense" >
                <Typography variant="h6" color="inherit" component="div" sx={
                    {
                        flexGrow: 1,
                        color: '#5b5a5a',
                    }
                }>
                    Portfolio
                </Typography>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ ml: 1 }}
                    onClick={() => {
                        window.open("https://github.com/OwenKruse")
                    }}
                >
                    <GitHubIcon />
                </IconButton>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ ml: 1 }}
                    onClick={() => {
                        window.open("https://www.linkedin.com/in/owen-kruse-844ba4263/")
                    }}
                >
                    <LinkedInIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}