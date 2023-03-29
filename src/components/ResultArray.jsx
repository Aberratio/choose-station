import {
  Table,
  TableHeader,
  TableCell,
  TableBody,
  TableRow,
} from "./ResultArray.styled";

const ResultArray = ({ csvArray }) => {
  return (
    <>
      {csvArray.length > 0 ? (
        <Table>
          <TableHeader>
            <TableCell>Adres</TableCell>
            <TableCell>Łączny dystans</TableCell>
            <TableCell>Koszt tankowania</TableCell>
          </TableHeader>
          <TableBody>
            {csvArray.map((item, i) => (
              <TableRow key={i}>
                <TableCell>{item.address}</TableCell>
                <TableCell>{item.allDistance}</TableCell>
                <TableCell>{item.neededFuelCosts}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : null}
    </>
  );
};

export default ResultArray;
