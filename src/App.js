import ImagesList from './components/imagesList/ImagesList';
import Nav from './components/Nav';
import { Container } from '@mui/material';
import AuthContext from './context/AuthContext';
import Modal from './components/Modal';
import MainNotification from './components/MainNotification';
import Loading from './components/Loading';
import Verification from './components/user/Verification';

export const metadata = {
  title: 'Prashanti Academy SEE Batch 2080',
  description: 'A simple collection of images of SEE Batch 2080 students from Prashanti Academy.',
}

function App() {
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center', mt: '3rem' }}>
      <AuthContext>
        <Loading />
        <Modal />
        <Verification />
        <MainNotification />
        <Nav />
        <ImagesList />
      </AuthContext>
    </Container>
  );
}

export default App;
