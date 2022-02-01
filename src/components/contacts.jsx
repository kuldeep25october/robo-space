import React from "react";
import FilterListIcon from '@mui/icons-material/FilterList';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
const Contacts = () => {
    return (
      <div className="parentDiv">
                <div className="header">
                    <h1>Robo Space</h1>
                    <input className="searchFilter" type='text' placeholder="Search here" />
                    <span className="filterIcon"><FilterListIcon /></span>
                </div>
            <div className="body">
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        // image="https://robohash.org/1"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              
              <Button size="small">Show More</Button>
            </CardActions>
          </Card>
                </div>
            </div>
  )
}
export default Contacts;