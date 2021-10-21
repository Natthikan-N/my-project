const path = require("path");
const express = require("express");
const routeView = require("./src/route/routeView");
const routeCore = require("./src/route/routeCore");
const routeinnerFinTube = require("./src/route/routeInnerFinTube");
const routeJoint = require("./src/route/routeJoint");
const routeCupPlate = require("./src/route/routeCupPlate");
const routeOuterFin = require("./src/route/routeOuterFin");
const routeSidePlate = require("./src/route/routeSidePlate");
const routePlateHeader = require("./src/route/routePlateHeader");
const routeTankHeader = require("./src/route/routeTankHeader");
const routeSeparator = require("./src/route/routeSeparator");
const routeCap = require("./src/route/routeCap");
const cors = require("cors");

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "publish")));

//middle wares
app.use(express.json());
// app.use((req, res, next) => {
//   console.log("Hello from middle ware");
//   next();
// });

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

//Route

app.use(`/`, routeView);
app.use(`/api/v1/core`, routeCore);
app.use(`/api/v1/innerfintube`, routeinnerFinTube);
app.use(`/api/v1/joint`, routeJoint);
app.use(`/api/v1/cupplate`, routeCupPlate);
app.use(`/api/v1/outerfin`, routeOuterFin);
app.use(`/api/v1/sideplate`, routeSidePlate);
app.use(`/api/v1/plateheader`, routePlateHeader);
app.use(`/api/v1/tankheader`, routeTankHeader);
app.use(`/api/v1/separator`, routeSeparator);
app.use(`/api/v1/cap`, routeCap);

module.exports = app;
