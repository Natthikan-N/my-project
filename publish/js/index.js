// //const bootstrap = require("bootstrap");
// import "../../node_modules/bootstrap/js/dist/util.js";
// import "bootstrap/js/dist/modal";
// import "bootstrap/dist/js/bootstrap.bundle.min";
// import "pdfjs-dist/legacy/build/pdf.js";
// import "pdfjs-dist/webpack";

import "@babel/polyfill";
import FormData from "form-data";
import { createNewComponent } from "./createComponent";
import { getPart } from "./componentSelect";
import { createNewCore } from "./createNewCore";

import {
  innerfintubePartNo,
  outerfinPartNo,
  plateheaderPartNo,
  sideplatePartNo,
  tankheaderPartNo,
} from "./partNo";

console.log("Hello from Mars");

//Create New component
const innerfinform = document.querySelector(".addnewinnnerfintube");
const outerfinform = document.querySelector(".addnewouterfin");
const cupplateform = document.querySelector(".addnewcupplate");
const separatorform = document.querySelector(".addseparator");
const capform = document.querySelector(".addcap");
const jointform = document.querySelector(".addjoint");
const compoform = document.querySelector(".addnewcompo");

//Create New Core
const coreform = document.querySelector(".createCore");
const btnCreateNewCorePage = document.getElementById("btn-creatNewCore");

//Component Select in create core page
const innerfintubelist = document.getElementById("innerfintubelist");
const outerfinlist = document.getElementById("outerfinlist");
const sideplatetoplist = document.getElementById("sideplatetoplist");
const sideplatebuttomlist = document.getElementById("sideplatebuttomlist");
const plateheadertoplist = document.getElementById("plateheadertoplist");
const plateheaderbuttomlist = document.getElementById("plateheaderbuttomlist");
const tankheadertoplist = document.getElementById("tankheadertoplist");
const tankbuttomlist = document.getElementById("tankheaderbuttomlist");
const cupplatelowerlist = document.getElementById("cupplatelowerlist");
const cupplateupperlist = document.getElementById("cupplateupperlist");
const jointlist = document.getElementById("jointlist");
const caplist = document.getElementById("caplist");

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

if (compoform) {
  compoform.addEventListener("submit", (e) => {
    e.preventDefault();

    const partNo = document.getElementById("partNo").value;
    const side = document.getElementById("side").value;

    switch (partNo.slice(2).split("-")[0]) {
      case sideplatePartNo:
        createNewComponent({ partNo, side }, "sideplate");
        break;
      case plateheaderPartNo:
        createNewComponent({ partNo, side }, "plateheader");
        break;
      case tankheaderPartNo:
        createNewComponent({ partNo, side }, "tankheader");
        break;
      default:
        console.log("Not our current part no");
    }
  });
}

window.addEventListener("load", (e) => {
  e.preventDefault();

  selectorlist(innerfintubelist, "innerfintube");
  selectorlist(outerfinlist, "outerfin");
  selectorlist(sideplatetoplist, "sideplate");
  selectorlist(sideplatebuttomlist, "sideplate");
  // selectorlist(sideplatebuttomlist, "sideplate");
  selectorlist(plateheadertoplist, "plateheader");
  selectorlist(plateheaderbuttomlist, "plateheader");
  selectorlist(tankheadertoplist, "tankheader");
  selectorlist(tankbuttomlist, "tankheader");
  selectorlist(cupplatelowerlist, "cupplate");
  selectorlist(cupplateupperlist, "cupplate");
  selectorlist(jointlist, "joint");
  selectorlist(caplist, "cap");
});

const selectorlist = (element, route) => {
  //clear element and add default value
  element.innerHTML = "";
  element.insertAdjacentHTML(
    "beforeend",
    `<option value="default">Select Part No</option>`
  );

  //add part no in list
  const getPartList = async function () {
    const part = await getPart(route);

    part.map((val) => {
      element.insertAdjacentHTML(
        "beforeend",
        `<option value="${val.partNo}">${val.partNo}</option>`
      );
    });
  };

  getPartList();
};

if (coreform) {
  coreform.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("hi form click");
    const form = new FormData(coreform);
    // form.append("coreWidth", document.getElementById("width").value);
    // form.append("coreHeight", document.getElementById("height").value);
    // form.append("coreArea", document.getElementById("area").value);
    form.append("img", document.getElementById("coreImg").files[0]);

    // coreStructure(form);
    createNewCore(form);
  });
}
