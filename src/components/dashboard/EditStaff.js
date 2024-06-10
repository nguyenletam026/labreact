import React, { useEffect } from 'react';
import { Button, TextField } from '@mui/material';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import './EditStaff.scss';
const EditStaff = ({ data }) => {
  const { id } = useParams();
  const baseUrl = `https://6666d505a2f8516ff7a524d7.mockapi.io/lab7/api`;

  const validationSchema = yup.object().shape({
    img: yup.string().required('Avatar is required'),
    name: yup.string().required('Name is required'),
    trailer: yup.string().required('Trailer is required'),
    price: yup
      .number()
      .typeError('price must be a number')
      .positive('price must be a positive number')
      .required('price is required'),
    info: yup.string().optional('Details is optional'),
  });

  const formik = useFormik({
    initialValues: {
      id: '',
			img: '',
			name: '',
			trailer: '',
			price: '',
			info: ''
    },
    validationSchema,
    onSubmit: (values) => {
      const staff = {
        img: values.img,
        name: values.name,
        trailer: values.trailer,
        price: parseFloat(values.price),
        info: values.info,
      };
      fetch(`${baseUrl}/${id}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(staff),
      })
        .then((res) => {
          toast.success(`Update staff ID: ${id} successful!`);
          navigate('/dashboard');
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
  });

  useEffect(() => {
    fetch(`${baseUrl}/${id}`)
      .then((response) => response.json())
      .then((data) => {
        formik.setValues({
          img: data.img,
          name: data.name,
          trailer: data.trailer,
          price: data.price.toString(),
          info: data.info,
        });
      })
      .catch((error) => console.log(error.message));
  }, [id]);

  const navigate = useNavigate();

  return (
    <form className="edit-container" onSubmit={formik.handleSubmit}>
      <div className="edit-form">
        <div className="form-title">
          <h2>Edit Movie</h2>
        </div>
        <div className="form-body">
          <div className="form-group">
            <TextField
              fullWidth
              id="img"
              label="Avatar"
              variant="filled"
              {...formik.getFieldProps('img')}
              required
            />
          </div>
          <div className="form-group">
            <TextField
              fullWidth
              id="name"
              label="Name"
              variant="filled"
              {...formik.getFieldProps('name')}
              helperText={formik.errors.name}
              required
            />
          </div>
          <div className="form-group">
            <TextField
              fullWidth
              id="trailer"
              label="Trailer"
              variant="filled"
              {...formik.getFieldProps('trailer')}
              helperText={formik.errors.trailer}
              required
            />
          </div>
          <div className="form-group">
            <TextField
              fullWidth
              id="price"
              label="price"
              variant="filled"
              {...formik.getFieldProps('price')}
              helperText={formik.errors.price}
              required
            />
          </div>
          <div className="form-group">
            <TextField
              fullWidth
              id="info"
              label="Details"
              variant="filled"
              {...formik.getFieldProps('info')}
              helperText={formik.errors.info}
              required
            />
          </div>
          <div className="form-group">
            <div className="update-btn">
              <Button variant="contained" color="success" type="submit">
                Update
              </Button>
            </div>
            <div className="cancel-btn">
              <Link to="/dashboard">
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => toast.warning('Hủy thay đổi!')}
                >
                  Cancel
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default EditStaff;
