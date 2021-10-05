import logo from "./logo.svg";
import "./App.css";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import menu from "./Rectangle 2.png";
import dashboard from "./Component 16.png";
import profile from "./Component 7.png";
import settings from "./Component 9 (1).png";
import upcoming from "./Component 11.png";
import explore from "./Component 12.png";
import logout from "./Component 10.png";
import shirka from "./Shikra..png";
import searcher from "./Rectangle 1.png";
import filter from "./Filter.png";
import compass from "./compass.png";
import searchbar from "./Search bar.png";
import { CCol, CContainer, CRow } from "@coreui/react";
import carts from "./kudahuvadhoo island.png";
import Cards from "./Cards";
function App() {
  return (
    <>
      <CContainer style={{ padding: 0, margin: 0 }}>
        <CRow>
          <CCol style={{ maxWidth: "80px", maxHeight: "100%", height: "100%" }}>
            <ul className="navig" style={{ width: "80px" }}>
              <li
                className="navig-list"
                style={{ backgroundColor: " #f2f3f8" }}
              >
                <img
                  src={menu}
                  alt=""
                  style={{ width: "80px", height: "80px" }}
                />
              </li>
              <li className="navig-list">
                <img
                  src={dashboard}
                  alt=""
                  style={{ width: "80px", height: "80px", marginTop: "10px" }}
                />
              </li>
              <li className="navig-list">
                <img
                  src={upcoming}
                  alt=""
                  style={{ width: "80px", height: "80px", marginTop: "10px" }}
                />
              </li>
              <li className="navig-list">
                <img
                  src={explore}
                  alt=""
                  style={{ width: "80px", height: "80px", marginTop: "10px" }}
                />
              </li>
              <li className="navig-list">
                <img
                  src={explore}
                  alt=""
                  style={{ width: "80px", height: "80px", marginTop: "10px" }}
                />
              </li>
              <li className="navig-list">
                <img
                  src={settings}
                  alt=""
                  style={{ width: "80px", height: "80px", marginTop: "10px" }}
                />
              </li>
              <li className="navig-list">
                <img
                  src={logout}
                  alt=""
                  style={{ width: "80px", height: "80px", marginTop: "40px" }}
                />
              </li>
            </ul>
          </CCol>
          <CCol xs={9}>
            <nav
              style={{
                backgroundColor: "#f2f3f8",
                width: "100%",
                height: "80px",
              }}
            >
              <img
                src={shirka}
                alt=""
                style={{
                  width: "65px",
                  height: "25px",
                  marginTop: "5px",
                  marginLeft: "40px",
                }}
              />

              <img
                src={searchbar}
                alt=""
                style={{
                  width: "255px",
                  height: "65px",
                  marginTop: "30px",
                  marginLeft: "460px",
                }}
              />
              {/* <img
                src={filter}
                alt=""
                style={{
                  width: "56px",
                  height: "56px",
                  marginTop: "30px",
                  marginRight: "40px",
                }}
              /> */}
            </nav>
            <div
              style={{
                padding: "30px",
                width: "100%",
                display: "flex",
                backgroundColor: "#f1f19",
              }}
            >
              <img src={compass} width="24px" height="24px" />
              <p
                style={{ marginLeft: "5px", color: "grey", fontWeight: "bold" }}
              >
                Explore
              </p>
              <div></div>
            </div>
            <div
              style={{
                padding: "2px",

                width: "100%",
                display: "flex",
              }}
            >
              {/* <img
                src={carts}
                width="500px"
                height="420px"
                style={{ margin: 0, padding: 0 }}
                alt=""
              />
              <img
                src={carts}
                width="500px"
                height="420px"
                style={{ margin: 0, padding: 0 }}
                alt=""
              />
              <img
                src={carts}
                width="500px"
                height="420px"
                style={{ margin: 0, padding: 0 }}
                alt=""
              /> */}
              <Cards />
            </div>
          </CCol>
          <CCol>3 of 3</CCol>
        </CRow>
      </CContainer>
    </>
  );
}

export default App;
