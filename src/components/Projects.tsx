import {Button, Grid, Paper, Typography, Box} from "@mui/material";
import Image from "next/image";

export default function Projects(projects: any) {
const {title, description, image, link} = projects.project;


    return (


                <Grid item sx={
                    {
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        padding: '0 2rem',
                        flexWrap: 'nowrap',
                    }
                }>
                    <Paper elevation={3} sx={
                        {
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            padding: '1rem',
                            flexWrap: 'nowrap',
                            width: '30rem',
                            backgroundColor: '#B9C9CB',

                        }
                    }>
                        <Typography variant="h4" gutterBottom sx={
                            {
                                fontWeight: '100',
                                textAlign: 'center',
                                fontSize: '1.3rem',
                            }
                        }>
                            {title}
                        </Typography>
                        <Box sx={
                            {
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                flexWrap: 'nowrap',
                                position: 'relative',
                                width: '100%',
                                height: '18rem',
                                borderRadius: '1rem',
                                overflow: 'hidden',
                            }
                        }>
                            <Image src={image} style={
                                {
                                    position: 'absolute',
                                    top: '0',
                                    left: '0',
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                }
                            } fill  alt={'Project 1'}/>
                        </Box>


                        <Typography variant="h4" gutterBottom sx={
                            {
                                fontWeight: '100',
                                textAlign: 'center',
                                fontSize: '.8rem',
                                paddingBottom: '1rem',
                                // Make the text pop out more
                                textShadow: '0 0 0.2rem #C4D2D4',
                            }
                        }>
                            {description}
                        </Typography>
                        <Button variant="contained" sx={
                            {
                                fontWeight: '100',
                                textAlign: 'center',
                                fontSize: '.8rem',

                            }
                        }
                        onClick={() => window.open(link, '_blank')}
                        >
                            View Project
                        </Button>
                    </Paper>
                </Grid>
    )
}


