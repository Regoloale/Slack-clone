import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

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

            {/* Header right */}
        </HeaderContainer>
    );
}

export default Header;

const HeaderContainer = styled.div` // headercontainer is a div 
`;

const HeaderLeft = styled.div``;

const HeaderAvatar = styled(Avatar)` // We can style component we imported
    
`;