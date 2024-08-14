import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';
import PeopleIcon from '@material-ui/icons/People';
import { Link } from 'react-router-dom';

// import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#f5f5f5', // Light grey background for the root container
    },
    menuButton: {
        // marginRight: theme.spacing(2),
        color: '#333', // Dark color for the menu button for better visibility
    },
    title: {
        flexGrow: 1,
        fontSize: '1.5rem', // Larger font size for the title for better readability
        color: '#333', // Dark color for the title text
    },
    btn: {
        marginRight: 20,
        fontSize: '0.875rem', // Font size updated to 14px
        color: 'white',
        backgroundColor: '#007bff', // Blue background for buttons
        borderRadius: '4px', // Rounded corners for buttons
        padding: '8px 16px', // Padding for buttons
        '&:hover': {
            backgroundColor: '#0056b3', // Darker blue on hover
        },
    },
    navLink: {
        textDecoration: 'none',
        color: '#A8DF8E', // Blue color for navigation links
        '&:hover': {
            textDecoration: 'underline', // Underline on hover
        },
    },
    active: {
        backgroundColor: '#ff5722', // Vibrant red for active state
        color: 'white', // White text color for readability
        textDecoration: 'none',
    },
}));

// export default useStyles;


const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Codeforces Analyzer
                    </Typography>
                    <Link exact to="/Codeforces-Analyzer/" className={classes.navLink}>
                        <Button color="inherit" className={classes.btn}>
                            <PersonIcon />
                            Single User
                        </Button>
                    </Link>
                    <Link exact to="/Codeforces-Analyzer/versus"  className={classes.navLink}> 
                        <Button color="inherit" className={classes.btn}>
                            <PeopleIcon />
                            Versus
                        </Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
