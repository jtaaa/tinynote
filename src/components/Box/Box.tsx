import styled from 'styled-components/macro';
import {
  space,
  layout,
  color,
  SpaceProps,
  LayoutProps,
  ColorProps,
} from 'styled-system';

type BoxProps = SpaceProps | LayoutProps | ColorProps;
const Box = styled.div<BoxProps>`
  ${space}
  ${layout}
  ${color}
`;

export default Box;
