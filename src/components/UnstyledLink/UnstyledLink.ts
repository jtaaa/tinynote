import styled, { StyledComponentProps } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import {
  space,
  SpaceProps,
  layout,
  LayoutProps,
  color,
  ColorProps,
  border,
  BorderProps,
  shadow,
  ShadowProps,
} from 'styled-system';

type UnstyledLinkProps = StyledComponentProps<
  'div',
  any,
  SpaceProps & LayoutProps & ColorProps & ShadowProps & BorderProps,
  never
>;
const UnstyledLink = styled(Link)<UnstyledLinkProps>`
  color: inherit;
  text-decoration: inherit;
  ${space}
  ${layout}
  ${color}
  ${border}
  ${shadow}
`;

export default UnstyledLink;
