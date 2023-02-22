import React from 'react'
import '../components/Home.css'
import bg from '../asset/Waves.mp4'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img2 from '../asset/hotel.jpg'
import img3 from '../asset/food.jpg'

const services = () => {
  return (
    <div className='video-back'>
        <video src={bg} autoPlay loop muted />
    <div className='contant -ser'>
      <h1>  Our services</h1>
      <div className='Services'>
      
        <Card sx={{ maxWidth: 345 }} className="card">
      <CardMedia
        component="img"
        alt="green iguana"
        height="300"
        image={img2}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Best Hotel
        </Typography>
        <Typography variant="body2" color="text.secondary">
        all room are neet and clean for you . and sanetaiser 
         
    
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
        height="300"
        image={img3}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Best Food
        </Typography>
        <Typography variant="body2" color="text.secondary">
       Vegan or non-Vegan  no wores all food and brevarage are avilable.
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

export default services