import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Logout } from './styles';

export function Header() {
    return (
        <Container>
            <Profile to="/profile">
                <img 
                    src="https://github.com/victormiguelVF.png"
                     alt="Foto do usuário" 
                />

                <div>
                    <span>Bem-vindo,</span>
                    <strong>Victor Miguel</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>
        </Container>
    );
}