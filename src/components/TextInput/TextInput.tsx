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
import TextareaAutosize from 'react-autosize-textarea';

type TextInputProps = SpaceProps & LayoutProps & TypographyProps & FlexProps;
const TextInput = styled(TextareaAutosize)<TextInputProps>`
  ${space}
  ${layout}
  ${typography}
  ${flex}
  padding: 0;
  border: none;
  cursor: text;
  background: none;
  color: inherit;
  resize: none;

  &:focus {
    outline: none;
  }
`;

export default TextInput;
