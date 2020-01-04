import React, { useState } from 'react';
import Overlay from 'components/Overlay';
import Centered from 'components/Centered';
import Box from 'components/Box';
import Divider from 'components/Divider';
import Button from 'components/buttons/Button';
import UnstyledButton from 'components/buttons/UnstyledButton';
import GreatPrimer from 'components/text/GreatPrimer';
import { useAuth, useUser } from 'modules/firebase';
import { useTranslation } from 'utils/i18next';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import uiConfig from './uiConfig';

const AuthButton: React.FC = () => {
  const { Trans } = useTranslation('AuthButton');
  const [overlayVisible, setOverlayVisible] = useState(false);
  const auth = useAuth();
  const user = useUser();

  const buttonText = !user ? (
    <Trans i18nKey="signIn">Sign in</Trans>
  ) : (
    <Trans i18nKey="signOut">Sign out</Trans>
  );

  const onButtonClick = async () => {
    if (!user) {
      setOverlayVisible(true);
    } else {
      await auth.signOut();
    }
  };

  return (
    <>
      <Button onClick={onButtonClick}>{buttonText}</Button>
      <Overlay visible={overlayVisible} setVisible={setOverlayVisible}>
        <Centered>
          <Box width={[1, 400]} p={3} textAlign="center">
            <GreatPrimer>
              <Trans i18nKey="signInOrCreateAccount">
                Sign in or create an account
              </Trans>
            </GreatPrimer>
            <Divider />
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
            <UnstyledButton onClick={() => setOverlayVisible(false)}>
              <Trans i18nKey="orContinue">
                <em>Or continue without signing in</em>
              </Trans>
            </UnstyledButton>
          </Box>
        </Centered>
      </Overlay>
    </>
  );
};

export default AuthButton;
