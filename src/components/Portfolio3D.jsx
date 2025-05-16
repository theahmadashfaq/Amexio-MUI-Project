import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Box, Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/system';
function Model({ url }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

// Rotating Cube Component
function RotatingCube() {
  const meshRef = useRef();
  useFrame(() => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });
  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#EC6E28" />
    </mesh>
  );
}

// Styled Components
const HeroSection = styled('section')({
  height: '100vh',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
});

const SectionTitle = styled(Typography)({
  fontSize: '4rem',
  fontWeight: 700,
  marginBottom: '2rem',
  background: 'linear-gradient(90deg, #000, #EC6E28)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
});

const Floating3DContainer = styled('div')({
  position: 'absolute',
  right: '10%',
  width: '40vw',
  height: '40vw',
  maxWidth: '500px',
  maxHeight: '500px',
});
export const Portfolio3D = () => {
  return (
     <div>
      {/* Navigation */}
      <Box sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '24px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1000,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
      }}>
        <Typography variant="h6">YourName</Typography>
        <Box sx={{ display: 'flex', gap: '24px' }}>
          <Button color="inherit">Work</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Contact</Button>
        </Box>
      </Box>

      {/* Hero Section */}
      <HeroSection>
        <Container>
          <Box sx={{ maxWidth: '600px' }}>
            <SectionTitle variant="h1">
              Creative 3D Portfolio
            </SectionTitle>
            <Typography variant="body1" sx={{ mb: 4, fontSize: '1.2rem' }}>
              I build immersive 3D experiences and interactive web solutions.
            </Typography>
            <Button variant="contained" sx={{ 
              bgcolor: '#EC6E28',
              '&:hover': { bgcolor: '#d45a1a' },
              padding: '12px 32px',
              fontSize: '1rem'
            }}>
              View My Work
            </Button>
          </Box>
        </Container>

        <Floating3DContainer>
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <RotatingCube />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </Floating3DContainer>
      </HeroSection>

      {/* Work Section */}
      <section style={{ padding: '100px 40px', backgroundColor: '#f9f9f9' }}>
        <Container>
          <Typography variant="h2" sx={{ mb: 6, fontWeight: 700 }}>
            Selected Works
          </Typography>
          
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            {[1, 2, 3].map((item) => (
              <Box key={item} sx={{ 
                height: '400px',
                borderRadius: '8px',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                '&:hover .3d-preview': {
                  transform: 'scale(1.05)',
                }
              }}>
                <Canvas className="3d-preview" style={{
                  transition: 'transform 0.5s ease',
                  height: '100%',
                  width: '100%',
                }}>
                  <ambientLight intensity={0.5} />
                  <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                  <RotatingCube />
                  <OrbitControls enableZoom={false} />
                </Canvas>
                <Box sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '20px',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                  color: 'white'
                }}>
                  <Typography variant="h5">Project {item}</Typography>
                  <Typography variant="body2">3D Interactive Experience</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </section>
    </div>
  )
}
