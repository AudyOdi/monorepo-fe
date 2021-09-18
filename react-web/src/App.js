import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";

import { fetchCoinPriceList } from "@audy/coin-prices";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

function App() {
  const [coinPriceList, setCoinPriceList] = useState([]);

  useEffect(() => {
    const getCointPriceData = async () => {
      const apiReponse = await fetchCoinPriceList();
      if (apiReponse.data) {
        setCoinPriceList(apiReponse.data);
      }
    };

    getCointPriceData();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <Card>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 840 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell>Coin Name</TableCell>
                  <TableCell align="right">Price (USD)</TableCell>
                  <TableCell align="right">Market Cap (USD)</TableCell>
                  <TableCell align="right">Supply</TableCell>
                  <TableCell align="right">Volume in 24Hr</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {coinPriceList.map((coin) => {
                  return (
                    <TableRow
                      key={coin.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {coin.name}
                      </TableCell>
                      <TableCell align="right">${coin.priceUsd}</TableCell>
                      <TableCell align="right">${coin.marketCapUsd}</TableCell>
                      <TableCell align="right">{coin.supply}</TableCell>
                      <TableCell align="right">{coin.volumeUsd24Hr}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Card>
    </div>
  );
}

export default App;
