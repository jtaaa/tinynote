import styled from 'styled-components/macro';
import {
  space,
  SpaceProps,
  layout,
  LayoutProps,
  color,
  ColorProps,
  typography,
  TypographyProps,
  border,
  BorderProps,
  shadow,
  ShadowProps,
} from 'styled-system';

type BoxProps = SpaceProps &
  LayoutProps &
  ColorProps &
  TypographyProps &
  BorderProps &
  ShadowProps;
const Box = styled.div<BoxProps>`
  ${space}
  ${layout}
  ${color}
  ${typography}
  ${border}
  ${shadow}
`;

export default Box;
