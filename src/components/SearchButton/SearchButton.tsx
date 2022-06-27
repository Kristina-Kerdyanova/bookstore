import React from 'react'
import { Search } from '../../assets'
import { StyledSearchButton } from './styles'

export const SearchButton = () => {
    return (
        <StyledSearchButton type="submit">
                <Search />
        </StyledSearchButton>
    )
}
