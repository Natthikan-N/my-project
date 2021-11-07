import "@babel/polyfill";
import FormData from "form-data";
import { createNewComponent, updateComponent } from "./manageComponent";
// import { getPart } from "./componentSelect";
import { createNewCore } from "./createNewCore";
import { updateQPoint } from "./updateQPoint";
import { getCore, getCores } from "./getCore";
import { updateCore } from "./updateCore";

//Create New Part
const innerfinform = document.querySelector(".addnewinnnerfintube");
const outerfinform = document.querySelector(".addnewouterfin");
const cupplateform = document.querySelector(".addnewcupplate");
const separatorform = document.querySelector(".addseparator");
const capform = document.querySelector(".addcap");
const jointform = document.querySelector(".addjoint");
const sideplateform = document.getElementById("sideplateform");
const plateheaderform = document.getElementById("plateheaderform");
const tankheaderform = document.getElementById("tankheaderform");

//Create New Core
const coreform = document.querySelector(".createCore");

//Update Component part
const updateInnerfinForm = document.querySelector(
  ".update-component__Innerfintubeform"
);
const updateOuterFinForm = document.querySelector(
  ".update-component__Outerfinform"
);

const updateCupPlateForm = document.querySelector(
  ".update-component__Cupplateform"
);

const updateSeparatorForm = document.querySelector(
  ".update-component__Separatorform"
);

const updateTankHeaderForm = document.querySelector(
  ".update-component__TankHeaderform"
);

const updatePlateHeaderForm = document.querySelector(
  ".update-component__PlateHeaderform"
);

const updateSidePlateForm = document.querySelector(
  ".update-component__SidePlateform"
);

const updateJointForm = document.querySelector(".update-component__Jointform");

const updateCapForm = document.querySelector(".update-component__Capform");

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
    createNewComponent(componentForm(innerfinform), "innerfintube");
  });
}

if (outerfinform) {
  outerfinform.addEventListener("submit", (e) => {
    e.preventDefault();
    createNewComponent(componentForm(outerfinform), "outerfin");
  });
}

if (cupplateform) {
  cupplateform.addEventListener("submit", (e) => {
    e.preventDefault();
    createNewComponent(componentForm(cupplateform), "cupplate");
  });
}

if (separatorform) {
  separatorform.addEventListener("submit", (e) => {
    e.preventDefault();
    createNewComponent(componentForm(separatorform), "separator");
  });
}

if (capform) {
  capform.addEventListener("submit", (e) => {
    e.preventDefault();
    createNewComponent(componentForm(capform), "cap");
  });
}

if (jointform) {
  jointform.addEventListener("submit", (e) => {
    e.preventDefault();
    createNewComponent(componentForm(jointform), "joint");
  });
}

if (sideplateform) {
  sideplateform.addEventListener("submit", (e) => {
    e.preventDefault();
    createNewComponent(componentForm(sideplateform), "sideplate");
  });
}

if (plateheaderform) {
  plateheaderform.addEventListener("submit", (e) => {
    e.preventDefault();
    createNewComponent(componentForm(plateheaderform), "plateheader");
  });
}

if (tankheaderform) {
  tankheaderform.addEventListener("submit", (e) => {
    e.preventDefault();
    createNewComponent(componentForm(tankheaderform), "tankheader");
  });
}

const componentForm = (formElement) => {
  const form = new FormData(formElement);
  form.append("componentImg", document.getElementById("compoImg").files[0]);

  return form;
};

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
    const form = new FormData(updateCoreform);
    form.append("img", document.getElementById("coreImg").files[0]);
    updateCore(form);
  });
}

if (updateInnerfinForm) {
  updateInnerfinForm.addEventListener("submit", (e) => {
    e.preventDefault();
    updateComponent(componentForm(updateInnerfinForm), "innerfintube");
  });
}

if (updateOuterFinForm) {
  updateOuterFinForm.addEventListener("submit", (e) => {
    e.preventDefault();
    updateComponent(componentForm(updateOuterFinForm), "outerfin");
  });
}

if (updateCupPlateForm) {
  updateCupPlateForm.addEventListener("submit", (e) => {
    e.preventDefault();
    updateComponent(componentForm(updateCupPlateForm), "cupplate");
  });
}

if (updateSeparatorForm) {
  updateSeparatorForm.addEventListener("submit", (e) => {
    e.preventDefault();
    updateComponent(componentForm(updateSeparatorForm), "separator");
  });
}

if (updateTankHeaderForm) {
  updateTankHeaderForm.addEventListener("submit", (e) => {
    e.preventDefault();
    updateComponent(componentForm(updateTankHeaderForm), "tankheader");
  });
}

if (updatePlateHeaderForm) {
  updatePlateHeaderForm.addEventListener("submit", (e) => {
    e.preventDefault();
    updateComponent(componentForm(updatePlateHeaderForm), "plateheader");
  });
}

if (updateSidePlateForm) {
  updateSidePlateForm.addEventListener("submit", (e) => {
    e.preventDefault();
    updateComponent(componentForm(updateSidePlateForm), "sideplate");
  });
}

if (updateCapForm) {
  updateCapForm.addEventListener("submit", (e) => {
    e.preventDefault();
    updateComponent(componentForm(updateCapForm), "cap");
  });
}

if (updateJointForm) {
  updateJointForm.addEventListener("submit", (e) => {
    e.preventDefault();
    updateComponent(componentForm(updateJointForm), "joint");
  });
}
