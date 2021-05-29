// import React, { Component, useState } from 'react';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
// import TableFooter from '@material-ui/core/TableFooter';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import { TablePagination } from '@material-ui/core';
import users from '../../users.json';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function UsersListPage({ getUserId }) {
  const classes = useStyles();

  // const [page, setPage] = useState(0);
  // const [rowsPerPage, setRowsPerPage] = useState(5);
  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };
  // const handleChangeRowsPerPage = event => {
  //   setRowsPerPage(+event.target.value);
  //   setPage(0);
  // };

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Last Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Gender</TableCell>
              <TableCell align="right">ip-address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(
              ({ id, first_name, last_name, email, gender, ip_address }) => (
                <TableRow key={id} onClick={getUserId} id={id}>
                  <TableCell component="th" scope="row">
                    {first_name}
                  </TableCell>
                  <TableCell align="right">{last_name}</TableCell>
                  <TableCell align="right">{email}</TableCell>
                  <TableCell align="right">{gender}</TableCell>
                  <TableCell align="right">{ip_address}</TableCell>
                </TableRow>
              ),
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        // component=“div”
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      /> */}
    </>
  );
}
