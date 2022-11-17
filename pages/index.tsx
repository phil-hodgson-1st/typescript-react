import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Box, Heading, keyframes } from '@chakra-ui/react';

export default function Home() {
  const spinner = keyframes`
  from {transform: rotateY(0deg) rotateX(0deg);}
  to {transform: rotateY(359deg) rotateX(359deg);}
`;

  return (
    <div className={styles.container}>
      <Head>
        <title>Awesome Awwwards App Prototype</title>
        <meta name="description" content="#itsallaboutwinningawards" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Heading as="h1" size="2xl" sx={{ color: 'white' }}>
          Awesome Awwwards App Prototype
        </Heading>
        <Box
          sx={{
            margin: '100px auto',
            width: '200px',
            height: '200px',
            perspective: '800px',
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '100%',
              position: 'relative',
              transformStyle: 'preserve-3d',
              transition: '2s',
              animation: `${spinner} 10s infinite linear`,
              background: 'black',
            }}
          >
            <Box
              sx={{
                width: 'inherit',
                height: 'inherit',
                position: 'absolute',
                transition: '2s',
                boxShadow: '0px 0px 130px #59f',
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#111',
                opacity: 0.7,
                lineHeight: '200px',
                color: '#fff',
                fontSize: '0px',
                fontWeight: '800',
                transform: 'translate3d(0, 0, 100px)',
              }}
              className="cube-face front"
            >
              Front
            </Box>
            <Box
              sx={{
                width: 'inherit',
                height: 'inherit',
                position: 'absolute',
                transition: '2s',
                boxShadow: '0px 0px 130px #59f',
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#111',
                opacity: 0.7,
                lineHeight: '200px',
                color: '#fff',
                fontSize: '0px',
                fontWeight: '800',
                transform: 'rotateY(180deg) translate3d(0, 0, 100px)',
              }}
              className="cube-face back"
            >
              Back
            </Box>
            <Box
              sx={{
                width: 'inherit',
                height: 'inherit',
                position: 'absolute',
                transition: '2s',
                boxShadow: '0px 0px 130px #59f',
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#111',
                opacity: 0.7,
                lineHeight: '200px',
                color: '#fff',
                fontSize: '0px',
                fontWeight: '800',
                transform: 'rotateY(-90deg) translate3d(0, 0, 100px)',
              }}
              className="cube-face left"
            >
              Left
            </Box>
            <Box
              sx={{
                width: 'inherit',
                height: 'inherit',
                position: 'absolute',
                transition: '2s',
                boxShadow: '0px 0px 130px #59f',
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#111',
                opacity: 0.7,
                lineHeight: '200px',
                color: '#fff',
                fontSize: '0px',
                fontWeight: '800',
                transform: 'rotateY(90deg) translate3d(0, 0, 100px)',
              }}
              className="cube-face right"
            >
              Right
            </Box>
            <Box
              sx={{
                width: 'inherit',
                height: 'inherit',
                position: 'absolute',
                transition: '2s',
                boxShadow: '0px 0px 130px #59f',
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#111',
                opacity: 0.7,
                lineHeight: '200px',
                color: '#fff',
                fontSize: '0px',
                fontWeight: '800',
                transform: 'rotateX(90deg) translate3d(0, 0, 100px)',
              }}
              className="cube-face top"
            >
              Top
            </Box>
            <Box
              sx={{
                width: 'inherit',
                height: 'inherit',
                position: 'absolute',
                transition: '2s',
                boxShadow: '0px 0px 130px #59f',
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#111',
                opacity: 0.7,
                lineHeight: '200px',
                color: '#fff',
                fontSize: '0px',
                fontWeight: '800',
                transform: 'rotateX(-90deg) translate3d(0, 0, 100px)',
              }}
              className="cube-face bottom"
            >
              Bottom
            </Box>
          </Box>
        </Box>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
