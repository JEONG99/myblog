import styled from 'styled-components';

const ResponsiveBlock = styled.div`
  padding-left: 16px;
  padding-righ: 16px;
  width: 1024px;
  margin: 0 auth;
  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Responsive = ({ children, ...rest }) => {
  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default Responsive;
