// //const bootstrap = require("bootstrap");
// import "../../node_modules/bootstrap/js/dist/util.js";
// import "bootstrap/js/dist/modal";
// import "bootstrap/dist/js/bootstrap.bundle.min";
// import "pdfjs-dist/legacy/build/pdf.js";
// import "pdfjs-dist/webpack";

import "@babel/polyfill";
import FormData from "form-data";
import { createNewComponent } from "./createComponent";
// import { getPart } from "./componentSelect";
import { createNewCore } from "./createNewCore";
import { updateQPoint } from "./updateQPoint";
import { getCore, getCores } from "./getCore";
import { updateCore } from "./updateCore";

// import {
//   innerfintubePartNo,
//   outerfinPartNo,
//   plateheaderPartNo,
//   sideplatePartNo,
//   tankheaderPartNo,
// } from "./partNo";

// console.log("Hello from Mars");

//Create New Part
const innerfinform = document.querySelector(".addnewinnnerfintube");
const outerfinform = document.querySelector(".addnewouterfin");
const cupplateform = document.querySelector(".addnewcupplate");
const separatorform = document.querySelector(".addseparator");
const capform = document.querySelector(".addcap");
const jointform = document.querySelector(".addjoint");
const compoform = document.querySelector(".addnewcompo");

//Create New Core
const coreform = document.querySelector(".createCore");

//Component Select in create core page
// const innerfintubelist = document.getElementById("innerfintubelist");
// const outerfinlist = document.getElementById("outerfinlist");
// const sideplatetoplist = document.getElementById("sideplatetoplist");
// const sideplatebuttomlist = document.getElementById("sideplatebuttomlist");
// const plateheadertoplist = document.getElementById("plateheadertoplist");
// const plateheaderbuttomlist = document.getElementById("plateheaderbuttomlist");
// const tankheadertoplist = document.getElementById("tankheadertoplist");
// const tankbuttomlist = document.getElementById("tankheaderbuttomlist");
// const cupplatelowerlist = document.getElementById("cupplatelowerlist");
// const cupplateupperlist = document.getElementById("cupplateupperlist");
// const jointlist = document.getElementById("jointlist");
// const caplist = document.getElementById("caplist");

//Q-point
const qpointForm = document.querySelector(".update-qpoint__form");
const searchCoreBtn = document.getElementById("searchCore");
const searchCoreText = document.getElementById("searchText");
const qpointRender = document.getElementById("qpoint-render");
const renderpartNo = document.getElementById("qpoint-part-no");
const rendermodel = document.getElementById("qpoint-model");

// To Create New Part
if (innerfinform) {
  innerfinform.addEventListener("submit", (e) => {
    e.preventDefault();

    const partNo = document.getElementById("partNo").value;
    const length = document.getElementById("length").value;

    createNewComponent({ partNo, length }, "innerfintube");
  });
}

if (outerfinform) {
  outerfinform.addEventListener("submit", (e) => {
    e.preventDefault();

    const partNo = document.getElementById("partNo").value;
    const length = document.getElementById("length").value;
    const pitch = document.getElementById("pitch").value;
    const wave = document.getElementById("wave").value;
    const slit = document.getElementById("slit").value;

    createNewComponent({ partNo, length, pitch, wave, slit }, "outerfin");
  });
}

if (cupplateform) {
  cupplateform.addEventListener("submit", (e) => {
    e.preventDefault();

    const partNo = document.getElementById("partNo").value;
    const side = document.getElementById("side").value;

    createNewComponent({ partNo, side }, "cupplate");
  });
}

if (separatorform) {
  separatorform.addEventListener("submit", (e) => {
    e.preventDefault();

    const partNo = document.getElementById("partNo").value;
    const func = document.getElementById("function").value;

    createNewComponent({ partNo, func }, "separator");
  });
}

if (capform) {
  capform.addEventListener("submit", (e) => {
    e.preventDefault();

    const partNo = document.getElementById("partNo").value;

    createNewComponent({ partNo }, "cap");
  });
}

if (jointform) {
  jointform.addEventListener("submit", (e) => {
    e.preventDefault();

    const partNo = document.getElementById("partNo").value;
    const type = document.getElementById("type").value;

    createNewComponent({ partNo, type }, "joint");
  });
}

// if (compoform) {
//   compoform.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const partNo = document.getElementById("partNo").value;
//     const side = document.getElementById("side").value;

//     switch (partNo.slice(2).split("-")[0]) {
//       case sideplatePartNo:
//         createNewComponent({ partNo, side }, "sideplate");
//         break;
//       case plateheaderPartNo:
//         createNewComponent({ partNo, side }, "plateheader");
//         break;
//       case tankheaderPartNo:
//         createNewComponent({ partNo, side }, "tankheader");
//         break;
//       default:
//         console.log("Not our current part no");
//     }
//   });
// }

// const addNewCore = document.getElementById("core-detail__item-link");
// const createCorePage = document.querySelector(".create-core ");

// window.addEventListener("load", (e) => {
//   e.preventDefault();
//   // console.log(window.document);

//   // selectorlist(innerfintubelist, "innerfintube");
//   // selectorlist(outerfinlist, "outerfin");
//   // selectorlist(sideplatetoplist, "sideplate");
//   // selectorlist(sideplatebuttomlist, "sideplate");
//   // selectorlist(plateheadertoplist, "plateheader");
//   // selectorlist(plateheaderbuttomlist, "plateheader");
//   // selectorlist(tankheadertoplist, "tankheader");
//   // selectorlist(tankbuttomlist, "tankheader");
//   // selectorlist(cupplatelowerlist, "cupplate");
//   // selectorlist(cupplateupperlist, "cupplate");
//   // selectorlist(jointlist, "joint");
//   // selectorlist(caplist, "cap");
// });

// const selectorlist = (element, route) => {
//   //clear element and add default value
//   element.innerHTML = "";
//   element.insertAdjacentHTML(
//     "beforeend",
//     `<option value="default">Select Part No</option>`
//   );

//   //add part no in list
//   const getPartList = async function () {
//     const part = await getPart(route);

//     part.map((val) => {
//       element.insertAdjacentHTML(
//         "beforeend",
//         `<option value="${val.partNo}">${val.partNo}</option>`
//       );
//     });
//   };

//   getPartList();
// };

//To Create New Core
if (coreform) {
  coreform.addEventListener("submit", (e) => {
    e.preventDefault();
    const form = new FormData(coreform);
    form.append("img", document.getElementById("coreImg").files[0]);
    createNewCore(form);
  });
}

if (qpointForm) {
  qpointForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Click from qpoint form");

    const form = new FormData(qpointForm);
    form.append("qpoint", document.getElementById("qpoint-file").files[0]);

    updateQPoint(form);
  });
}

window.addEventListener("hashchange", (e) => {
  e.preventDefault();
  qpointRender.innerHTML = "";
  const id = window.location.hash.slice(1);
  renderQpoint(id);
});

if (searchCoreBtn) {
  searchCoreBtn.addEventListener("click", (e) => {
    e.preventDefault();
    searchCore();
    searchCoreText.innerHTML = "";
  });
}

const renderQpoint = async (id) => {
  const core = await getCore(id);

  rendermodel.innerHTML = core.model;
  renderpartNo.innerHTML = core.partNo;
  qpointRender.innerHTML = "";

  qpointRender.insertAdjacentHTML(
    "beforeend",
    `<img src="${core.qpoint.img}"  alt="qpoint" class="qpoint-viewer__img"> `
  );
};

const searchCore = async () => {
  const cores = await getCores();
  cores.map((val) => {
    if (val.partNo == searchCoreText.value) {
      renderQpoint(val._id);
    }
  });
};

const updateCoreform = document.querySelector(".updateCoreform");

if (updateCoreform) {
  updateCoreform.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("hello from update core form");
    const form = new FormData(updateCoreform);
    form.append("img", document.getElementById("coreImg").files[0]);
    updateCore(form);
  });
}
