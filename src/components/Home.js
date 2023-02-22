import React from 'react'
import back from '../asset/back1.mp4'
import '../components/Home.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import img2 from '../asset/img2.jpg'
import img3 from '../asset/img3.jpg'
import img4 from '../asset/img4.jpg'
import { Link } from 'react-router-dom'


const Newbtn = styled(Button)({
    backgroundColor:'rgb(7, 88, 99)',
    color:'#fff',
    width: '150px',
    height: '50px',
    margin: '40px',
    fontSize: '20px',
    fontWeight:'10px',
    "&:hover":{
        backgroundColor:'#fff',
        color:'rgb(7,88,99)',
        fontWeight:'10px',
    }

})

const Home = () => {
  return (
    <div className='video-back'>
        <video src={back} autoPlay loop muted />
    <div className='contant'>
        <h1> TRVLO <i className='fab fa-typo3'/></h1>
        <h2>Discover New Destination</h2>
        <Link to={"/Services"} className='link' ><Newbtn variant="contained" className="new-btn"> Services</Newbtn></Link>
        <h2>Worlds Best Beach to Go</h2>
        <div className="card-media">
        <Card sx={{ maxWidth: 345 }} className="card">
      <CardMedia
        component="img"
        alt="green iguana"
        height="160"
        image={img2}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Nissi Beach
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Nissi Beach is a popular beach in the resort of Ayia Napa, Cyprus.
         The beach stretches for 500 metres and the water is clean for ever
         
    
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }} className="card">
      <CardMedia
        component="img"
        alt="green iguana"
        height="160"
        image={img3}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Praia da Adraga
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Praia da Adraga is a North Atlantic beach in Portugal, near to the town of Almoçageme,
         Sintra. It has been recommended in British newspapers.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }} className="card">
      <CardMedia
        component="img"
        alt="green iguana"
        height="160"
        image={img4}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Navagio Beach
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Beautiful beach and view from the cliff top is amazing with all the different colours of blue. .
        .. There are couple paths leading to the right from the viewing ...
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        
  </div>
       

    </div>
    </div>
  )
}

export default Home