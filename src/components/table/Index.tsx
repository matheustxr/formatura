import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  name: string,
  tangua: string,
  patos: string,
  biguacu: string,
  itajai: string,
  parana: string
) {
  return { name, tangua, patos, biguacu, itajai, parana };
}

const rows = [
  createData(
    "Umidade e substâncias voláteis (máx.)",
    "10%",
    "10%",
    "10%",
    "8%",
    "10%"
  ),
  createData(
    "Proteína Bruta (mín.)",
    "55,0% - 68,0%",
    "55,0% - 64,0%",
    "54,0% - 60,0%",
    "54,0% - 60,0%",
    "55,0% - 62,0%"
  ),
  createData("Extrato Etéreo (mín.)", "4,0%", "4,0%", "6,0%", "6,0%", "4,0%"),
  createData(
    "Matéria Mineral (máx.)",
    "22,0 - 28,0%",
    "28,0 - 32,0%",
    "23,0% - 30,0%",
    "23,0% - 30,0%",
    "23,0 - 28,0%"
  ),
  createData(
    "Cloreto exp em NaCl (máx.)",
    "5,0%",
    "5,0%",
    "5,0%",
    "5,0%",
    "5,0%"
  ),
  createData("FFA (máx.)", "10,0%", "10,0%", "10,0%", "10,0%", "10,0%"),
  createData(
    "TVN (máx.)",
    "150 mg/100 g",
    "150 mg/100 g",
    "150 mg/100 g",
    "150 mg/100 g",
    "150 mg/100 g"
  ),
  createData(
    "Histamina (máx.)",
    "1.000 ppm",
    "1.000ppm",
    "1.000pm",
    "1.000ppm",
    "1.000pm"
  ),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              {" "}
              <strong>Parâmetros</strong>{" "}
            </TableCell>
            <TableCell align="right">
              {" "}
              <strong>Tanguá</strong>{" "}
            </TableCell>
            <TableCell align="right">
              {" "}
              <strong> Patos de Minas</strong>{" "}
            </TableCell>
            <TableCell align="right">
              {" "}
              <strong> Biguaçu</strong>{" "}
            </TableCell>
            <TableCell align="right">
              {" "}
              <strong>Itajaí </strong>{" "}
            </TableCell>
            <TableCell align="right">
              {" "}
              <strong> Paranacity</strong>{" "}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.tangua}</TableCell>
              <TableCell align="right">{row.patos}</TableCell>
              <TableCell align="right">{row.biguacu}</TableCell>
              <TableCell align="right">{row.itajai}</TableCell>
              <TableCell align="right">{row.parana}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
