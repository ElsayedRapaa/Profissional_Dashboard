import React from "react";
import "./listTable.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const rows = [
  {
    id: 1143155,
    product: "Acer Nitro 5",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "John Smith",
    date: "1 March",
    amount: 785,
    method: "Cash on Delivery",
    status: "Approved",
  },
  {
    id: 2235235,
    product: "Playstation 5",
    img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
    customer: "Michael Doe",
    date: "1 March",
    amount: 900,
    method: "Online Payment",
    status: "Pending",
  },
  {
    id: 2342353,
    product: "Redragon S101",
    img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "John Smith",
    date: "1 March",
    amount: 35,
    method: "Cash on Delivery",
    status: "Pending",
  },
  {
    id: 2357741,
    product: "Razer Blade 15",
    img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "Jane Smith",
    date: "1 March",
    amount: 920,
    method: "Online",
    status: "Approved",
  },
  {
    id: 2342355,
    product: "ASUS ROG Strix",
    img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "Harold Carol",
    date: "1 March",
    amount: 2000,
    method: "Online",
    status: "Pending",
  },
];

function ListTable() {
  return (
    <TableContainer component={Paper} className="list_Table">
      <div className="title">Last Transactions</div>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="table_Header">Traking ID</TableCell>
            <TableCell className="table_Header">Product</TableCell>
            <TableCell className="table_Header">Customer</TableCell>
            <TableCell className="table_Header">Date</TableCell>
            <TableCell className="table_Header">Amount</TableCell>
            <TableCell className="table_Header">Payment Method</TableCell>
            <TableCell className="table_Header">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" className={`table_Item`}>
                {row.id}
              </TableCell>
              <TableCell className={`table_Item`}>
                <span className="table_Product">
                  <img src={row.img} alt={row.product} className="img" />
                  <span className="table_Product_Text">{row.product}</span>
                </span>
              </TableCell>
              <TableCell className={`table_Item`}>{row.customer}</TableCell>
              <TableCell className={`table_Item`}>{row.date}</TableCell>
              <TableCell className={`table_Item`}>${row.amount}</TableCell>
              <TableCell className={`table_Item`}>{row.method}</TableCell>
              <TableCell className={`table_Item`}>
                <span className={`table_Status ${row.status}`}>
                  {row.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ListTable;
