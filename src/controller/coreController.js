const Core = require("../model/coreModel");
const factory = require("../../utility/factoryController");
const multer = require("multer");
const sharp = require("sharp");
const Innerfintube = require("../model/innerFinTubeModel");
const Sideplate = require("../model/sidePlateModel");
const Outerfin = require("../model/outerFinModel");
const Plateheader = require("../model/plateHeaderModel");
const Tankheader = require("../model/tankHeaderModel");
const Cupplate = require("../model/cupPlateModel");
const Cap = require("../model/capModel");
const Joint = require("../model/jointModel");
const Separator = require("../model/separatorModel");
const getPartIdmiddleware = require("../../utility/getPartId");

exports.getAllCores = factory.getAll(Core);
exports.getCore = factory.getModel(Core);
exports.updateCore = factory.updateModel(Core);
exports.deleteCore = factory.deleteModel(Core);

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "publish/img/Cores");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `picture-${Date.now()}.${ext}`);
  },
});

// const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    control.log(err);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

exports.uploadCoreImage = upload.single("img");

const multerStorageQpoint = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "publish/img/Q-point");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `Q-Point-${Date.now()}.${ext}`);
  },
});

const uploadQpoint = multer({
  storage: multerStorageQpoint,
  fileFilter: multerFilter,
});

exports.uploadQpointImage = uploadQpoint.single("qpoint");

//this is not work yet
exports.resizeUserPhoto = async (req, res, next) => {
  console.log(req.body);
  console.log(req.file);

  if (!req.file) return next();

  req.file.filename = `picture-${Date.now()}.jpeg`;

  await sharp(req.file.buffer)
    .resize(1000, 1000)
    .toFormat("jpeg")
    .jpeg({ quality: 90 })
    .toFile(`/img/Cores/${req.file.filename}`);

  console.log(req.file);

  next();
};

//Get single part id
exports.getInnerfinId = getPartIdmiddleware.getSinglePartId(Innerfintube);
exports.getOuterfinId = getPartIdmiddleware.getSinglePartId(Outerfin);
exports.getCapId = getPartIdmiddleware.getSinglePartId(Cap);
exports.getJointId = getPartIdmiddleware.getSinglePartId(Joint);

//Get couple part id
exports.getSideplateId = getPartIdmiddleware.getCouplePartId(Sideplate);
exports.getPlateHeaderId = getPartIdmiddleware.getCouplePartId(Plateheader);
exports.getTankHeaderId = getPartIdmiddleware.getCouplePartId(Tankheader);
exports.getCupPlateId = getPartIdmiddleware.getCouplePartId(Cupplate);

//Get Small part id
exports.getSeparatorId = getPartIdmiddleware.getSmallPartId(Separator);

//Get Core id
exports.getCoreId = getPartIdmiddleware.getSinglePartId(Core);
exports.getCoreIdId = getPartIdmiddleware.getCoreId(Core);

const reStructure = (ojb) => {
  // console.log(ojb);
  const core = {
    model: ojb.model,
    partNo: ojb.partNo,
    sideplates: { parts: [] },
    plateheaders: { parts: [] },
    tankheaders: { parts: [] },
    cupplates: { parts: [] },
    separators: { parts: [] },
    coreProperties: {},
    slug: ojb.model.split(" ").join("-"),
  };

  const singlePartField = ["innerfintubes", "outerfins", "joint", "cap"];

  const couplePartField = [
    "sideplates",
    "plateheaders",
    "tankheaders",
    "cupplates",
  ];

  const smallPartField = ["separators"];

  //field in coreProperties
  //coreWidth coreHeight coreArea qrCode kanbanColor
  const coreProperitesFields = [
    "coreWidth",
    "coreHeight",
    "coreArea",
    "qrCode",
    "kanbanColor",
  ];

  Object.keys(ojb).forEach((el) => {
    if (coreProperitesFields.includes(el)) {
      core.coreProperties[el] = ojb[el];
    }
  });

  //field of innerfin outerfin cap joint
  singlePartField.map((val) => {
    Object.keys(ojb).forEach((el) => {
      if (el.split("_")[0] == val) {
        if (el.split("_")[1] == "detail") {
          core[el.split("_")[0]] = { detail: ojb[el] };
        }

        if (el.split("_")[1] == "qty") {
          Object.assign(core[el.split("_")[0]], { amount: ojb[el] });
        }
      }
    });
  });

  //field of couple part => sideplate plateheader tankheader cupplate
  couplePartField.map((val) => {
    Object.keys(ojb).forEach((el) => {
      if (el.split("_")[0] == val) {
        core[el.split("_")[0]].parts.push({ detail: ojb[el] });
      }
    });
  });

  //field of small part
  smallPartField.map((val) => {
    Object.keys(ojb).forEach((el) => {
      if (el.split("_")[0] == val) {
        if (ojb[el].amount) {
          core[el.split("_")[0]].parts.push(ojb[el]);
        }
      }
    });
  });
  return core;
};

exports.createCore = async (req, res) => {
  try {
    const newCore = reStructure(req.body);
    if (req.file)
      Object.assign(newCore, { img: `/img/Cores/${req.file.filename}` });

    const model = await Core.create(newCore);

    res.status(200).json({
      status: "success",
      data: { model },
    });
  } catch {
    res.status(404).json({
      status: "fail",
      message: "page not found",
      data: { model },
    });
  }
};

exports.updateCoreAPI = async (req, res) => {
  try {
    console.log("hello from controller");
    console.log(req.body);
    // req.id = req.partNo;
    // console.log(req.body);
    const newCore = reStructure(req.body);
    console.log(newCore);
    // Object.assign(newCore, { img: `/img/Cores/${req.file.filename}` });
    if (req.file)
      Object.assign(newCore, { img: `/img/Cores/${req.file.filename}` });

    const core = await Core.findByIdAndUpdate(req.body.id, newCore);

    res.status(200).json({
      status: "success",
      data: { core },
    });
  } catch {
    res.status(404).json({
      status: "fail",
      message: "page not found",
      data: { model },
    });
  }
};

const reStructureQpoint = (ojb) => {
  return {
    id: ojb.partNo,
    qpoint: {
      qpoint: {
        issue: ojb.issue,
        img: ojb.img,
      },
    },
  };
};

exports.updateQPoint = async (req, res) => {
  try {
    if (req.file)
      Object.assign(req.body, { img: `/img/Q-Point/${req.file.filename}` });
    const newQPoint = reStructureQpoint(req.body);

    const core = await Core.findByIdAndUpdate(newQPoint.id, newQPoint.qpoint, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      data: core,
    });
  } catch {
    res.status(404).json({
      status: "fail",
      message: "page not found",
    });
  }
};
