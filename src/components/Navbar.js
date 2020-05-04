import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    link: {
        fontFamily: 'Poppins',
        fontSize: '20px',
        textDecoration: 'none',
        color: 'grey',
        padding: '0px 10px',
        display: 'flex',
        justifyContent: 'center',
        '&:hover': {
            transform: 'scale(1.1)',
            transition: 'transform .3s ease',
            color: 'black',
        },
    },
}));

function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}


ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

function ElevateAppBar(props) {
    const classes = useStyles();


    return (
        <React.Fragment>
            <ElevationScroll {...props}>
                <AppBar className={classes.root} position="sticky" style={{
                    backgroundColor: 'white',
                    color: 'white', height: '55px',
                }}>
                    <Toolbar style={{ display: 'flex', justifyContent: 'center' }}>
                        <Typography variant="subheading" color="inherit">
                            <Link to="/" className={classes.link}>HOME
                            </Link>
                        </Typography>
                        <Typography variant="subheading" color="inherit" >
                            <a href="/#about" className={classes.link}>ABOUT
                            </a>
                        </Typography>
                        <Typography variant="subheading" color="inherit" >
                            <Link to="/users" className={classes.link}>USERS
                            </Link>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
        </React.Fragment>
    );
};


export default ElevateAppBar;