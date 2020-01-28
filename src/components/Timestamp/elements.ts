import styled from 'styled-components/macro';
import Box from 'components/Box';

export const TimestampContainer = styled(Box)``;
TimestampContainer.defaultProps = {
  display: 'flex',
  alignItems: 'stretch',
};

export const LabelContainer = styled(Box)``;
LabelContainer.defaultProps = {
  p: 2,
  borderRadius: 4,
  borderTopRightRadius: 0,
  borderBottomRightRadius: 0,
};

export const TimestampCopyContainer = styled(Box)``;
TimestampCopyContainer.defaultProps = {
  p: 2,
  borderRadius: 4,
  borderTopLeftRadius: 0,
  borderBottomLeftRadius: 0,
};
