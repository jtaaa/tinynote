import styled from 'styled-components/macro';
import Box from 'components/Box';

export const TimestampContainer = styled(Box)``;
TimestampContainer.defaultProps = {
  m: 2,
};

export const LabelContainer = styled(Box)``;
LabelContainer.defaultProps = {
  display: 'inline',
  p: 2,
  borderRadius: 4,
  borderTopRightRadius: 0,
  borderBottomRightRadius: 0,
  bg: 'secondary/mid',
};

export const TimestampCopyContainer = styled(Box)``;
TimestampCopyContainer.defaultProps = {
  display: 'inline',
  p: 2,
  borderRadius: 4,
  borderTopLeftRadius: 0,
  borderBottomLeftRadius: 0,
  bg: 'secondary/light',
};