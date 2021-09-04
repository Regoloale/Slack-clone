import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpIcon from '@material-ui/icons/Help';

function Header() {
    return (
        <HeaderContainer>

            {/* Header left */}
            <HeaderLeft>
                <HeaderAvatar 
                    // TODO: add onclick
                />
                <AccessTimeIcon />
            </HeaderLeft>

            {/* Header search */}
            <HeaderSearch>
                <SearchIcon />
                <input placeholder='Search' />
            </HeaderSearch>

            {/* Header right */}
            <HeaderRight>
                <HelpIcon />
            </HeaderRight>

        </HeaderContainer>
    );
}

export default Header;

const HeaderContainer = styled.div` // headercontainer is a div 
    display: flex;
    position: fixed;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    background-color: var(--slack-color);
`;

const HeaderSearch = styled.div`
    flex: 0.4;
    border-radius: 6px;
    background-color: #421f44;
    text-align: center;
    display: flex;
    padding: 0 50px;
    color: gray;
    border: 1px gray solid;

    > input {
        background-color: transparent;
        border: none;
        text-align: center;
        min-width: 30vw;
        outline: 0;
        color: white;
    }

`;

const HeaderLeft = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    margin-left: 20px;

    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 30px;
    }
`;

const HeaderRight = styled.div`
    flex: 0.3;
    display: flex;
    color: white;
    align-items: flex-end;

    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 20px;
    }
`;


const HeaderAvatar = styled(Avatar)` // We can style component we imported
    cursor: pointer;

    :hover {
        opacity: 0.8;
    }
`;