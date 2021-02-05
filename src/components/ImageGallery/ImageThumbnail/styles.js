import styled from 'styled-components';

export const ImageThumbnailWrapper = styled.div`
  cursor: pointer;
  border: 4px solid
    ${props => (props.isActive ? 'hsla(18, 99%, 70%, 1.00)' : '#eee')};
`;
