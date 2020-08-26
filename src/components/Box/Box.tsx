import styled, { StyledComponentProps } from 'styled-components/macro';
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
  flexbox,
  FlexboxProps,
  position,
  PositionProps,
} from 'styled-system';

export type BoxProps = StyledComponentProps<
  'div',
  React.HTMLProps<HTMLDivElement>,
  SpaceProps &
    LayoutProps &
    ColorProps &
    TypographyProps &
    BorderProps &
    ShadowProps &
    FlexboxProps &
    PositionProps,
  never
>;
const Box = styled.div<BoxProps>`
  ${space}
  ${layout}
  ${color}
  ${typography}
  ${border}
  ${shadow}
  ${flexbox}
  ${position}
`;

export default Box;
