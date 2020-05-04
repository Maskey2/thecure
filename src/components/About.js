import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './../index.css';
import { Container, Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    bg: {
        height: '500px'
    },
    title: {
        fontSize: '70px',
        fontFamily: 'Quicksand',
        textAlign: 'center',
        color: '#575656',
        [theme.breakpoints.down('sm')]: {
            fontSize: '75px',
            textAlign: 'center'
        },
    },
    subtitle: {
        fontSize: '30px',
        fontFamily: 'Courgette',
        textAlign: 'center',
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
}));

export default function About() {
    const classes = useStyles();
    return (
        <div id="about" className={classes.bg}>
            <p className={classes.title}>About</p>
            <Container maxWidth="md" component="main">
                <Grid container spacing={3} alignItems="center" justify="center">
                    <Grid item xs={12} sm={12} md={6}>
                        <img src="https://www.nami.org/NAMI/media/NAMI-Media/BlogImageArchive/2019/therapy-concepts-blog.jpeg" style={{ height: '300px' }} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        We are here to provide you the best experience on therapy. We promote the importance of mental health and its necessity for a sucessful life. We are here to listen and understand you. Sound like you? Call us at 985-21092765 and book an appointment today!
             </Grid>
                </Grid>
            </Container>
        </div>
    )
}

