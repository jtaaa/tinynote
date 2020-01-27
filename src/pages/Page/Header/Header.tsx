import React from 'react';
import { Link } from 'react-router-dom';
import Box from 'components/Box';
import BackIcon from 'components/icons/BackIcon';
import UnstyledButton from 'components/buttons/UnstyledButton';
import { HeaderContainer } from './elements';
import { Action } from './types';

export type HeaderProps = {
  back?: string;
  actions?: Action[];
};
const Header: React.FC<HeaderProps> = ({ back, actions = [] }) => {
  return (
    <HeaderContainer
      height={64}
      p={3}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box>
        {back && (
          <Link to={back}>
            <BackIcon />
          </Link>
        )}
      </Box>
      <Box>
        {actions.map(action => (
          <UnstyledButton key={action.id} onClick={action.onClick}>
            {action.icon}
          </UnstyledButton>
        ))}
      </Box>
    </HeaderContainer>
  );
};

export default Header;
