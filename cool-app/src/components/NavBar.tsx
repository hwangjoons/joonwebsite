import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import { Link } from 'react-scroll';

import { StyledAppBar, CenteredToolbar, StyledButton } from '../styles';

interface NavBarProps {
    onContactClick: () => void;
}

const StyledTypography = styled(Typography)({
    flexGrow: 1,
    color: 'black',
});


const NavBar: React.FC = ({ onContactClick }) => {
    return (
        <div>
            <StyledAppBar position="static">
                <CenteredToolbar>
                    <StyledButton color="inherit">
                        <Link to="personal_statement" smooth={false}>
                            About
                        </Link>    
                    </StyledButton>
                    <StyledButton color="inherit">
                        Portfolio
                    </StyledButton>
                    <StyledButton color="inherit">
                        <Link to="contact" smooth={false}>
                            Contact
                        </Link>
                    </StyledButton>
                </CenteredToolbar>
            </StyledAppBar>
        </div>
    );
};

export default NavBar;