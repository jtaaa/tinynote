import styled from 'styled-components/macro';
import {
  space,
  SpaceProps,
  layout,
  LayoutProps,
  typography,
  TypographyProps,
} from 'styled-system';

type TextInputProps = SpaceProps & LayoutProps & TypographyProps;
const TextInput = styled.input<TextInputProps>`
  ${space}
  ${layout}
  ${typography}
  padding: 0;
  border: none;
  cursor: text;

  &:focus {
    outline: none;
  }
`;

export default TextInput;
