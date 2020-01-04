import React, { useState } from 'react';
import Overlay from 'components/Overlay';
import Centered from 'components/Centered';
import Box from 'components/Box';
import Divider from 'components/Divider';
import Button from 'components/buttons/Button';
import UnstyledButton from 'components/buttons/UnstyledButton';
import GreatPrimer from 'components/text/GreatPrimer';
import { useAuth } from 'modules/firebase';
import { useTranslation } from 'utils/i18next';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import uiConfig from './uiConfig';

const LoginButton = () => {
  const { Trans } = useTranslation('LoginButton');
  const [overlayVisible, setOverlayVisible] = useState(false);
  const auth = useAuth();

  return (
    <>
      <Button onClick={() => setOverlayVisible(true)}>
        <Trans i18nKey="login">Login</Trans>
      </Button>
      <Overlay visible={overlayVisible} setVisible={setOverlayVisible}>
        <Centered>
          <Box width={[1, 400]} p={3} textAlign="center">
            <GreatPrimer>Sign in or create an account</GreatPrimer>
            <Divider />
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
            <UnstyledButton onClick={() => setOverlayVisible(false)}>
              <em>Or continue without signing in</em>
            </UnstyledButton>
          </Box>
        </Centered>
      </Overlay>
    </>
  );
};

export default LoginButton;
