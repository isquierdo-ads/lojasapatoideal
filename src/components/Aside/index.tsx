import { Container, Header, LogImg, MenuContainer, MenuItemLink, Title } from './styles'
import logoImg from '../../assets/logo.svg'
import {
    MdDashboard,
    MdArrowDownward,
    MdArrowDropUp,
    MdExitToApp
} from 'react-icons/md'

export const Aside: React.FC = () => {

    return (
        <Container>
            <Header>
                <LogImg src={logoImg} alt='Logo My Wallet' />
                <Title> Loja Sapato Ideal </Title>
            </Header>
            <MenuContainer>
                <MenuItemLink href='#'>
                    <MdDashboard />
                    DashBoard
                </MenuItemLink>

                <MenuItemLink href='#'>
                    <MdArrowDropUp />
                    Entradas
                </MenuItemLink>

                <MenuItemLink href='#'>
                    <MdArrowDownward />
                    Saídas
                </MenuItemLink>

                <MenuItemLink href='#'>
                    <MdExitToApp />
                    Sair
                </MenuItemLink>


            </MenuContainer>
        </Container>
    );
}