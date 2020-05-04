import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import './../index.css';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
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
    pStyle: {
        fontSize: '100px',
        fontFamily: 'Quicksand',
        position: 'absolute',
        top: '30%',
        left: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#575656',
        [theme.breakpoints.down('sm')]: {
            fontSize: '75px',
            textAlign: 'center'
        },
    },
    subpStyle: {
        fontSize: '30px',
        fontFamily: 'Courgette',
        position: 'absolute',
        top: '50%',
        left: '5%',
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
        [theme.breakpoints.down('sm')]: {
            fontSize: '20px',
            textAlign: 'center',
            left: 0
        },
        [theme.breakpoints.down('lg')]: {
            fontSize: '25px',
            top: '60%'
        },
    },
    button: {
        fontSize: '20px',
        fontFamily: 'Poppins',
        position: 'absolute',
        top: '60%',
        left: '6%',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
        [theme.breakpoints.down('sm')]: {
            fontSize: '20px',
        },
        [theme.breakpoints.down('lg')]: {
            fontSize: '25px',
            top: '70%'
        },
    }
}));

export default function Mainimg() {
    const classes = useStyles();
    return (
        <div>
            <div className="bg"></div>
            <h1 className={classes.pStyle}>We Care</h1>
            <p className={classes.subpStyle}> <em>"We are here to listen and provide the best help"</em></p>
            <Button variant="outlined" size="large" color="primary" className={classes.button}>
                SIGN UP
        </Button>
        </div>
    )
}
