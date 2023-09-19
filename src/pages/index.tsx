import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import {Button, Grid, Typography} from "@mui/material";
import NavigationBar from "@/components/NavigationBar";
import { useMediaQuery } from "@mui/material";
import Projects from "@/components/Projects";
import React from "react";

export default function Home() {
    const projects = [
        {
            title: 'Vashon Build',
            description: '                            I was responsible for the design, migration, build, and optimization of the company\'s website. With a strong understanding of website design and development best practices, I worked closely with the Vashon Build team to create a website that accurately reflected their brand and effectively showcased their products and services.\n',
            image: '/projects/Screenshot 2023-03-01 at 15-51-59 Vashon Build Serving Vashon Island.png',
            link:'https://www.vashonbuild.com/'
        },
        {
            title: 'StudySync',
            description: 'I designed and built StudySync, a tool to help students take more efficient notes in class. The app uses OpenAI\'s Whisper to transcribe meetings and lectures. The app is built with Next.js, React, and MongoDB.',
            image: '/projects/Screenshot 2023-03-01 at 20-48-07 StudySync.png',
            link:'https://www.studysync.life/'
        },
        {
            title: 'Optimized Horizons',
            description: "I worked with a small team of people interested in designing and building a company that provided SEO opportunities to companies. The project started in Figma where I designed and created a website that satisfied the clients interests. I then built the website using Next.js and React.",
            image: '/projects/Screenshot 2023-09-19 at 3.07.03 PM.png',
            link:'https://op-horizons.vercel.app/'
        },
        {
            title: 'Documentation AI',
            description: "I worked on a personal project which aimed to give developers a new way to interface with their documentation through the use of GPT-3. The project included a fully functional website, custom react component and complex backend work with PineConeDB and JavaScript.",
            image: '/projects/Screenshot 2023-09-19 at 3.12.32 PM.png',
            link:'https://ai-doc-one.vercel.app/',
        }

    ]

    const isMobile = useMediaQuery('(max-width: 800px)');
  return (
    <>
      <Head>
        <title>Owen Kruse | Developer | Student |</title>
        <meta name="description" content="Owen Kruse Portfolio Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
            <NavigationBar/>
          <Grid container sx={
              {
                  backgroundColor: '#D7C1BB',
                  backgroundImage: 'url(/OwenKruse_NextJS_Modern_Clean_Portfolio_Template_showcasing_a_m_0b789b66-b910-4c4e-9bbb-b6a0711ecbeb.png)',
                  minHeight: '100vh',
                  width: '100%',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                  // If it is a mobile device, then the background image should be cropped to the right and down
                    backgroundPosition: isMobile ? '23%' : 'flex-start',
              }
          }>
              <Grid container item sx={
                    {
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        height: '100%',
                        padding: '0 2rem',
                        flexWrap: 'nowrap',
                        maxWidth: isMobile ? '100%' : '35%',
                    }
              }>
                <Grid item sx={
                    {
                        display: 'flex',
                        paddingTop: '12rem',
                    }
                }>
                    <Typography variant="h2"  sx={
                        {
                            color: '#2B3530',
                            fontWeight: '300',
                        }
                    } >
                        Owen Kruse
                    </Typography>
                </Grid>
                <Grid item xs={12} sx={
                    {
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        flexWrap: 'nowrap',
                    }
                }>
                    <Typography variant="h4" gutterBottom sx={
                        {
                            color: '#0B1015',
                            fontWeight: '100',
                            textAlign: 'center',
                            fontSize: '.8rem',
                            marginBottom: '2rem',
                        }
                    }>
                         Developer | Student
                    </Typography>
                </Grid>
                <Grid item xs={12} >
                    <Typography variant="h4" gutterBottom sx={
                        {
                            color: '#0B1015',
                            fontWeight: '100',
                            fontSize: '1rem',
                            textAlign: 'left',
                            backgroundColor: isMobile ? 'rgba(255,255,255,0.47)' : 'transparent',
                            padding: isMobile ? '1rem' : '0',
                            borderRadius: isMobile ? '1rem' : '0',
                        }
                    }>
                        Welcome to my developer portfolio website! I am a computer science student at Western Washington University and a software developer with a passion for creating innovative and efficient solutions to complex problems. Here, you will find a showcase of my past projects, technical skills, and professional experience.
                    </Typography>
                </Grid>
                  <Grid item xs={12} sx={
                        {
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%',
                            paddingTop: '1rem',
                            paddingBottom: '1rem',

                        }
                  }>
                     <Button
                     variant={'outlined'}
                     // Scroll down to the projects section 100vh
                        onClick={() => window.scrollTo({top: 1000, behavior: 'smooth'})}
                     >View Projects</Button>
                  </Grid>
                </Grid>
            </Grid>
          <Grid container sx={
              {
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  paddingTop: '5rem',
                  paddingBottom: '5rem',
                  minHeight: '100vh',
                  background: 'linear-gradient(90deg, #DCE4E5 0%, #DBE2E4 0%, #C7CFD0 100%)',
              }
          }>
          {projects.map((project, index) => {
              return (

        <Projects project={project} key={index}/>
                )
          })}
            </Grid>
      </main>
    </>
  )
}
