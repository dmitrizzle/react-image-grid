import styled from 'styled-components';

export default styled.aside`
  display: none;
  position: absolute;
  overflow: hidden;
  z-index: 1;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.33);
  color: #fff;

  & > p {
    opacity: .5;
    font-family: ${props=> props.theme.typography.text.font};
  }
`;
