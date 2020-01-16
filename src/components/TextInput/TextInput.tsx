import styled from 'styled-components/macro';
import {
  space,
  SpaceProps,
  layout,
  LayoutProps,
  typography,
  TypographyProps,
  flex,
  FlexProps,
} from 'styled-system';

type TextInputProps = SpaceProps & LayoutProps & TypographyProps & FlexProps;
const TextInput = styled.input<TextInputProps>`
  ${space}
  ${layout}
  ${typography}
  ${flex}
  padding: 0;
  border: none;
  cursor: text;

  &:focus {
    outline: none;
  }
`;

export default TextInput;
