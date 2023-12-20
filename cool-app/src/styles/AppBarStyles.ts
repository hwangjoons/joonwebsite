// AppBarStyles.ts

import { styled } from '@mui/system';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

export const StyledAppBar = styled(AppBar)({
    backdropFilter: 'blur(10px)',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    boxShadow: 'none',
    display: 'flex',
    justifyContent: 'center',
});

export const CenteredToolbar = styled(Toolbar)({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    gap: '50px',

});

export const StyledButton = styled(Button)({
    color: 'black',
    margin: '0 8 px',
});