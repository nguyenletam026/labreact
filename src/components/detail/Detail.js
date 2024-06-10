import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import './Detail.css';

const DetailContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  margin: 'auto',
  maxWidth: 1200,
  flexGrow: 1,
  backgroundColor: 'black',
  boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
  marginTop: '60px',
  marginBottom: '50px',
  borderRadius: '20px',
}));

const DetailImage = styled('img')({
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
  borderRadius: '20px',
});

function Detail() {
  const { id } = useParams();
  const [staffs, setStaff] = useState(null);
  const baseUrl = `https://6666d505a2f8516ff7a524d7.mockapi.io/lab7/api`;

  useEffect(() => {
    fetch(`${baseUrl}/${id}`)
      .then((response) => response.json())
      .then((data) => setStaff(data))
      .catch((error) => console.log(error.message));
  }, [id]);

  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  
  const [isFullscreen, setIsFullscreen] = useState(false);
  const closeFullscreenModal = () => {
    setIsFullscreen(false);
  };
  const openFullscreenModal = () => {
    setIsFullscreen(true);
  };

  if (!staffs) {
    return <div>Loading...</div>;
  }

  return (
    <DetailContainer>
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase className="detail-image" sx={{ width: 500, height: 500 }}>
            <DetailImage alt="complex" src={staffs.img} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography variant="h4" className="detail-title">
                {staffs.name}
              </Typography>
              <Typography style={{textAlign: "center",
                                  fontSize: "50px",
                                  color:"white"

              }} gutterBottom>
                Price: {staffs.price}$
              </Typography>
              <Typography gutterBottom style={{color:"white"}}>
                Details: {staffs.info}
              </Typography>
              <Typography>
                <button className="detail-button" onClick={openFullscreenModal}>Watch Trailer</button>
              </Typography>
              {isOpen && (
                <div className="modal">
                  <button onClick={() => setIsOpen(false)}>Close</button>
                </div>
              )}
              {isFullscreen && (
                <div className="fullscreen-modal" onClick={closeFullscreenModal}>
                  <div>
                    <iframe
                      className="fullscreen-video"
                      title="Video"
                      src={`https://www.youtube.com/embed/${staffs.trailer}`}
                      allowFullScreen
                    />
                  </div>
                </div>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </DetailContainer>
  );
}

export default Detail;
