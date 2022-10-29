import styled from 'styled-components';

interface Props {
  repeat: number;
  rowGap: number;
}

const Grid = styled('div')<Props>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.repeat}, 2fr);
  column-gap: 15px;
  row-gap: ${(props) => props.rowGap}px;
  align-items: center;
`;

export default Grid;
