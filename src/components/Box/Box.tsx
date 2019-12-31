import styled from 'styled-components/macro';
import {
  space,
  layout,
  color,
  typography,
  SpaceProps,
  LayoutProps,
  ColorProps,
  TypographyProps,
} from 'styled-system';

type BoxProps = SpaceProps | LayoutProps | ColorProps | TypographyProps;
const Box = styled.div<BoxProps>`
  ${space}
  ${layout}
  ${color}
  ${typography}
`;

export default Box;
