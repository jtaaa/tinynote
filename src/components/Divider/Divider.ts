import styled from 'styled-components/macro';
import { layout, LayoutProps, border, BorderProps } from 'styled-system';

type DividerProps = LayoutProps & BorderProps;
const Divider = styled.hr<DividerProps>`
  ${layout}
  ${border}
`;

Divider.defaultProps = {
  width: 0.5,
  borderColor: 'black',
};

export default Divider;
