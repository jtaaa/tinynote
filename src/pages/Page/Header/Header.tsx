import React from 'react';
import Box from 'components/Box';
import UnstyledLink from 'components/UnstyledLink';
import BackIcon from 'components/icons/BackIcon';
import UnstyledButton from 'components/buttons/UnstyledButton';
import GreatPrimer from 'components/text/GreatPrimer';
import { HeaderContainer } from './elements';
import { Action } from './types';

export type HeaderProps = {
  back?: string;
  title?: string;
  actions?: Action[];
  extension?: React.ReactNode;
  lifted?: boolean;
};
const Header: React.FC<HeaderProps> = ({
  back,
  title,
  actions = [],
  extension,
  lifted,
}) => {
  return (
    <HeaderContainer variant={lifted ? 'lifted' : undefined}>
      <Box
        height={64}
        p={3}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          {back && (
            <UnstyledLink to={back}>
              <BackIcon />
            </UnstyledLink>
          )}
        </Box>
        <GreatPrimer>{title}</GreatPrimer>
        <Box>
          {actions.map(action => (
            <UnstyledButton key={action.id} onClick={action.onClick}>
              {action.icon}
            </UnstyledButton>
          ))}
        </Box>
      </Box>
      {extension}
    </HeaderContainer>
  );
};

export default Header;
