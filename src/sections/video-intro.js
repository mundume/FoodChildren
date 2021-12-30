/** @jsx jsx */
import { useState } from 'react';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { jsx, Box, Container, Grid, Button, Heading, Text } from 'theme-ui';
import Modal, { CloseButton } from 'components/modal/modal';
import ResponsiveIframe from 'components/responsive-iframe';
import Image from 'components/image';
import campusLife from 'assets/images/photo3.jpg';
import play from 'assets/images/icons/play.png';
import paint1 from 'assets/images/paint1.svg';
import paint2 from 'assets/images/paint2.svg';



const VideoIntro = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box as="section" id="about" sx={styles.section}>
      <Container>
        <Box sx={styles.grid}>
          <Box sx={styles.videoWrapper}>
            <Modal isOpen={isOpen}>
              <CloseButton
                onClick={() => setIsOpen(false)}
                size="24px"
                color="#fff"
              />
              <ResponsiveIframe
                src="https://player.vimeo.com/video/394343710?autoplay=1&color=28DDB2&title=0&byline=0&portrait=0"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </Modal>

            <Image
              src={campusLife}
              width="795"
              height="557"
              className="video-banner"
              alt="video banner"
            />
            <Button
              variant="text"
              sx={styles.playPause}
              onClick={() => setIsOpen(true)}
            >
              <Image width="22" height="22" src={play} alt="play" /> Watch Full
              video
            </Button>
          </Box>
          <Box sx={styles.content}>
            <Heading sx={styles.title}>
              About Us
              
            </Heading>
            <Text as="p" sx={styles.summary}>
              Feed A Comrade Initiative (FACI) is a feeding programme for Kenyan University students.The initiative is being statred to adress a starvation problem in Kenyan Universities which often goes unnoticed and neglected.<br/>Many University students in Kenya come from humble background and barely afford two meals a day often just surviving on one meal.<br/> This programme has Started to adress their plight.

            </Text>

            <Box sx={styles.content}>
            <Heading sx={styles.title}>
              <br/>
              Problem Statement
              
            </Heading>
            <Text as="p" sx={styles.summary}>
            University students especially in Nairobi, where the standards of living are unbearable high, face an ignored starvation problem.Most after using the little upkeep money given by parents and from HELB lfor rent and transport are left with hardly nothing to sustain them for the rest of the semester. Most of them only afford one meal which they opt for it to supper. Therefore, breakfast and lunch are foregone meaning they are always starving throughout the school day on campus. This definitely has an effect on their academic productivity and mainly on their mental health.
             

            </Text>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default VideoIntro;

const styles = {
  section: {
    pt: [7, null, null, 6, null, null, 13],
    pb: [0, null, null, 8, null, null, 11],
  },
  grid: {
    display: ['flex', null, null, 'grid'],
    flexDirection: ['column-reverse', null, null, 'unset'],
    gap: '0 30px',
    alignItems: 'center',
    gridTemplateColumns: [
      '1fr',
      null,
      null,
      '1fr',
      '1fr 1fr',
      '600px 1fr',
      '760px 1fr',
    ],
  },
  videoWrapper: {
    textAlign: 'center',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    mt: [2, null, null, 0, 4, 0],
    '.video-banner': {
      maxWidth: ['100%', null, null, null, null, '100%'],
    },
  },
  content: {
    px: [null, null, null, 8, 0],
  },
  playPause: {
    color: 'white',
    fontWeight: 700,
    position: 'absolute',
    padding: '0px',
    bottom: [40, null, null, 70, 100],
    left: '50%',
    transform: 'translateX(-50%)',
    ':focus': {
      outline: 0,
    },
    img: {
      mr: '16px',
    },
  },
  title: {
    color: 'heading',
    fontWeight: 500,
    fontSize: [5, null, null, 10, null, 11],
    lineHeight: 1.53,
    letterSpacing: ['-0.5px', null, null, '-1px'],
    textAlign: ['center', null, null, 'left'],
    span: {
      backgroundSize: 'cover',
      px: 2,
    },
  },
  summary: {
    color: 'textSecondary',
    fontSize: [1, null, null, 2, '15px', 2],
    lineHeight: [1.86, null, null, null, 1.86, 2.25],
    mt: [4, null, null, 5, 3, 5],
    maxWidth: 470,
    textAlign: ['center', null, null, 'left'],
  },
  list: {
    gap: '0 18px',
    gridTemplateColumns: ['repeat(2, 142px)', null, null, 'repeat(2, 180px)'],
    listStyle: 'none',
    mt: [4, null, null, 5, 3, 5],
    p: 0,
    li: {
      fontSize: [0, 1, null, 2, '15px', 2],
      alignItems: 'center',
      color: 'textSecondary',
      display: 'flex',
      lineHeight: [2.81, null, null, null, 2.2, 2.81],
    },
  },
};
