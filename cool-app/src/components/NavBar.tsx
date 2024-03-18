import React from 'react';
import '../css/Navbar.css';

// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
import { AppBar, Toolbar, TypographyClassKey, Button } from '@mui/material';
// import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import { Link } from 'react-scroll';
// import { makeStyles } from '@mui/system';

import { StyledAppBar, CenteredToolbar, StyledButton } from '../styles';

interface NavBarProps {
    onContactClick: () => void;
}

// const StyledTypography = styled(Typography)({
//     flexGrow: 1,
//     color: 'black',
// });

// const useStyles = makeStyles((theme) => ({}));

const NavBar: React.FC = ({ onContactClick }) => {
    // const classes = useStyles();

    return (
        <div>
            <StyledAppBar className="navbar" position="fixed">
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