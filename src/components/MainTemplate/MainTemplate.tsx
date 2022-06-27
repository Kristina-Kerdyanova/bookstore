import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { StyledMainTemplate, Container } from './styles';

export const MainTemplate = () => {
    return (
        <StyledMainTemplate>
            <Container>
                <Header />
                <Outlet />
                <Footer />
            </Container>
        </StyledMainTemplate>
    );
};





