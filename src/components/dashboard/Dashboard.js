import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useConfirm } from 'material-ui-confirm';
import { toast } from 'react-toastify';

function Dashboard({ data }) {
  const [staff, setStaff] = useState([]);
  const baseUrl = `https://6666d505a2f8516ff7a524d7.mockapi.io/lab7/api`;
  const confirm = useConfirm();

  useEffect(() => {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => setStaff(data))
      .catch((error) => console.log(error.message));
  }, []);

  const navigate = useNavigate();

  const EditFunction = (id) => {
    navigate('/dashboard/edit/' + id);
  };

  const RemoveFunction = (id) => {
    confirm({
      description: `Are you sure you want to delete ID: ${id}?`,
    })
      .then(() => {
        const deleteUrl = `${baseUrl}/${id}`;
        fetch(deleteUrl, {
          method: 'DELETE',
        })
          .then((response) => {
            if (response.ok) {
              toast.success(`Successfully deleted ID: ${id}`);
              setStaff((prevStaff) => prevStaff.filter((staff) => staff.id !== id));
            } else {
              throw new Error('Failed to delete.');
            }
          })
          .catch((error) => {
            toast.error(error.message);
          });
      })
      .catch(() => {
        toast.warning('Deletion cancelled.');
      });
  };

  return (
    <div>
      {data ? (
        <TableContainer component={Paper} className="dashboard-container">
          <h2 style={{ textAlign: 'center', color: 'red', fontSize: '50px' }}>List of Movie</h2>
          <Link to="/dashboard/add" className="add-btn">
            <Button variant="contained">Create</Button>
          </Link>
          <Table sx={{ minWidth: 650 }} aria-label="simple table" className="staff-table">
            <TableHead>
              <TableRow>
                <TableCell align="center">ID</TableCell>
                <TableCell align="center">Image</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {staff.map((staff) => (
                <TableRow key={staff.id}>
                  <TableCell align="center">{staff.id}</TableCell>
                  <TableCell component="th" scope="row" align="center">
                    <img style={{ width: '100px', height: '100px' }} src={staff.img} alt="" />
                  </TableCell>
                  <TableCell align="center">{staff.name}</TableCell>
                  <TableCell align="center">{staff.price}</TableCell>
                  <TableCell align="center">{staff.cost}</TableCell>
                  <TableCell align="center">
                    <Button
                      variant="outlined"
                      color="success"
                      className="edit-btn"
                      onClick={() => {
                        EditFunction(staff.id);
                      }}
                    >
                      <EditIcon />
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      className="delete-btn"
                      onClick={() => {
                        RemoveFunction(staff.id);
                      }}
                    >
                      <DeleteIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <div
          style={{
            color: 'blue',
            textAlign: 'center',
            fontSize: '30px',
            padding: '20px',
            backgroundColor: 'lightgray',
            borderRadius: '5px',
            fontWeight: 'bold',
          }}
          className="dashboard-container"
        >
          Please login to access the dashboard.
        </div>
      )}
    </div>
  );
}

export default Dashboard;
