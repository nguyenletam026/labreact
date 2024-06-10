import React from 'react';
import { Button, Dialog, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
//import './Dashboard.scss';
import { toast } from 'react-toastify';

function AddStaff({ data }) {
	const navigate = useNavigate();
	const baseUrl = 'https://6666d505a2f8516ff7a524d7.mockapi.io/lab7/api';

	const validationSchema = yup.object().shape({
		name: yup.string().max(50, 'Name must be at most 30 characters').required('Name is required'),
		trailer: yup.string().required('Club is required'),
		release: yup
			.number()
			.typeError('Cost must be a number')
			.positive('Cost must be a positive number')
			.min(1, 'Cost must be greater than or equal to 1')
			.required('Cost is required'),
		info: yup.string().optional('Optional')
	});

	const formik = useFormik({
		initialValues: {
			id: '',
			img: '',
			name: '',
			trailer: '',
			release: '',
			info: ''
		},
		validationSchema,
		onSubmit: (values) => {
			const staff = {
				id: values.id,
				img: values.img,
				name: values.name,
				trailer: values.trailer,
				release: values.release,
				info: values.info
			};
			fetch(baseUrl, {
				method: 'POST',
				headers: {
					'content-type': 'application/json'
				},
				body: JSON.stringify(staff)
			})
				.then((res) => {
					toast.success('Add successfully!');
					navigate('/dashboard');
				})
				.catch((err) => {
					console.log(err.message);
				});
		}
	});

	return data ? (
		<form className="add-container" onSubmit={formik.handleSubmit}>
			<div style={{backgroundColor: "white"}}>
				<div className="form-title">
					<h2>Add New Film</h2>
				</div>
				<div className="form-body">
					<div className="form-group">
						<TextField
							fullWidth
							id="filled-basic"
							label="Avatar"
							variant="filled"
							value={formik.values.img}
							onChange={formik.handleChange}
							name="img"
						/>
					</div>
					<div className="form-group">
						<TextField
							fullWidth
							id="filled-basic"
							label="Name"
							variant="filled"
							value={formik.values.name}
							onChange={formik.handleChange}
							name="name"
							error={formik.errors.name}
							helperText={formik.errors.name}
						/>
					</div>
					<div className="form-group">
						<TextField
							fullWidth
							id="filled-basic"
							label="Trailer"
							variant="filled"
							value={formik.values.trailer}
							onChange={formik.handleChange}
							name="trailer"
							error={formik.errors.trailer}
							helperText={formik.errors.trailer}
						/>
					</div>
					<div className="form-group">
						<TextField
							fullWidth
							id="filled-basic"
							label="Cost"
							variant="filled"
							value={formik.values.release}
							onChange={formik.handleChange}
							name="release"
							error={formik.errors.release}
							helperText={formik.errors.release}
						/>
					</div>
					<div className="form-group">
						<TextField
							fullWidth
							id="filled-basic"
							label="Details"
							variant="filled"
							value={formik.values.info}
							onChange={formik.handleChange}
							name="info"
							error={formik.errors.info}
							helperText={formik.errors.info}
						/>
					</div>
					<div className="form-group">
						<div className="save-btn">
							<Button variant="contained" type="submit" disabled={!formik.isValid}>
								Save
							</Button>
							
						</div>
						<div className="cancel-btn">
							<Link to="/dashboard">
								<Button
									variant="contained"
									color="error"
									onClick={() => toast.warning('Cancel Create staff!')}
								>
									Cancel
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</form>
	) : null;
}

export default AddStaff;
