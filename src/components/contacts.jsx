import React from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import users from "../constants/users";

const Contacts = () => {
  return (
    <div className="parentDiv">
      {console.log(users[0].email, "email")}
      <div className="header">
        <h1>Robo Space</h1>
        <input className="searchFilter" type="text" placeholder="Search here" />
        <span className="filterIcon">
          <FilterListIcon />
        </span>
      </div>
      <div className="body">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={users[0].avatar}
            alt="robo img"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {users[0].first_name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {users[0].email}
              </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Show More</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};
export default Contacts;
