import { Logo } from '../../assets'
import { Nav } from '../Nav/Nav'
import { Search } from '../Search/Search'
import { StyledHeader, StyledLink } from './styled'


export const Header = () => {
    return (
        <StyledHeader>
            <StyledLink to={'/'}>
                <Logo />
            </StyledLink>
            <Search />
            <Nav />
        </StyledHeader>
    )
}
