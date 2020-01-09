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
const TextInput = styled.textarea<TextInputProps>`
  ${space}
  ${layout}
  ${typography}
  padding: 0;
  border: none;

  &:focus {
    outline: none;
  }
`;

export default TextInput;
