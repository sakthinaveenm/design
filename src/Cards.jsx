import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import img from "./img.png";
import location from "./Vector.png";
import bookmark from "./Group 8.png";
export default function Cards() {
  return (
    <Card
      sx={{
        maxWidth: "293px",
        maxHeight: "261px",
        borderRadius: "25px",
        backgroundColor: "#ffffff",
      }}
      className="cds"
    >
      <CardActionArea style={{ padding: "10px" }}>
        <div
          style={{
            display: "inline",
            backgroundImage: "url(" + { img } + ")",
            weight: "268",
            height: "170",
          }}
        >
          {/* <img
            component="img"
            weight="268"
            height="170"
            src={img}
            alt="green iguana"
            style={{ borderRadius: "5px" }}
          ></img> */}
          <img
            src={bookmark}
            alt=""
            width="40"
            height="40"
            style={{ zIndex: 20 }}
          />
        </div>
        <CardContent>
          <Typography
            gutterBottom
            variant="p"
            component="div"
            style={{
              fontSize: "15px",
              fontFamily: "Gilroy - SemiBold",
              fontWeight: "bold",
            }}
          >
            Phi phi Islands
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ fontSize: "18" }}
          >
            <img src={location} alt="" style={{ marginRight: "2px" }} />
            Thailand
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions></CardActions>
    </Card>
  );
}
