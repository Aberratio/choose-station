import styled from "styled-components";

export const TableHeader = styled.div`
  display: flex;
  border-radius: 4px 4px 0 0;
  border-bottom: solid 2px black;
  background-color: #b3c7fc;

  font-weight: 700;
  text-align: center;

  & {
    padding: 10px 0;
  }
`;

export const TableBody = styled.div`
  display: flex;
  flex-direction: column;

  padding: 5px;
  border-radius: 0 0 4px 4px;
`;

export const TableRow = styled.div`
  display: flex;
  margin-bottom: 10px;

  &:nth-child(odd) {
    background-color: rgb(230 234 246);
  }
`;

export const TableCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 250px;
  padding: 3px 5px;
  border: none;
  border-right: 1px solid black;

  text-align: center;

  &:first-child {
    text-align: left;
  }

  &:last-child {
    border: none;
  }
`;

export const Table = styled.div`
  max-width: 600px;
  margin-top: 30px;
  border: solid 2px black;
  border-radius: 4px;
`;
