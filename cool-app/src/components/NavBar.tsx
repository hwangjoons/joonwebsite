import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const StyledTypography = styled(Typography)({
    flexGrow: 1,
    color: 'black',
});

const StyledButton = styled(Button)({
    color: 'black',
    margin: '0 8 px',
});

const TransparentAppBar = styled(AppBar)({
    backdropFilter: 'blur(10px)',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    boxShadow: 'none',
    display: 'flex',
    justifyContent: 'center',
});

const CenteredToolbar = styled(Toolbar)({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    gap: '50px',

});

const NavBar: React.FC = () => {
    return (
        <div>
            <TransparentAppBar position="static">
                <CenteredToolbar>
                    <StyledButton color="inherit">About</StyledButton>
                    <StyledButton color="inherit">Portfolio</StyledButton>
                    <StyledButton color="inherit">Contact</StyledButton>
                </CenteredToolbar>
            </TransparentAppBar>
        </div>
    );
};

export default NavBar;