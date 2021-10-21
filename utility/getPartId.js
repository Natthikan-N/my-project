exports.getSinglePartId = (Part) => async (req, res, next) => {
  try {
    console.log(req.body);
    const part = await Part.find();

    Object.keys(req.body).forEach((el) => {
      console.log(req.body[el]);

      part.map((val) => {
        if (val.partNo == req.body[el]) {
          req.body[el] = val._id;
        }
      });
    });
    // res.status(200).json({
    //   status: "success",
    //   //   results: part.length,
    //   data: { part },
    // });
  } catch {
    res.status(404).json({
      status: "fail",
      message: "page not found",
    });
  }
  next();
};

exports.getCouplePartId = (Part) => async (req, res, next) => {
  try {
    const part = await Part.find();
    let partIdArr = [];
    let partKeyArr = [];

    Object.keys(req.body).forEach((el) => {
      part.map((val) => {
        if (val.partNo == req.body[el]) {
          partKeyArr.push(el);
          partIdArr.push(val._id);
        }
      });
    });

    console.log(partKeyArr);
    console.log(partIdArr);

    partIdArr.map((el, i) => {
      req.body[partKeyArr[i]] = el;
    });
    // res.status(200).json({
    //   status: "success",
    //   //   results: part.length,
    //   data: { part },
    // });
  } catch {
    res.status(404).json({
      status: "fail",
      message: "page not found",
    });
  }
  next();
};

exports.getSmallPartId = (Part) => async (req, res, next) => {
  try {
    const part = await Part.find();

    let partIdArr = [];
    let partKeyArr = [];
    let partAmount = [];

    Object.keys(req.body).forEach((el) => {
      part.map((val) => {
        if (val.partNo == `TG47684-${el.split("_")[1]}`) {
          partKeyArr.push(el);
          partIdArr.push(val._id);
          partAmount.push(req.body[el]);
        }
      });
    });

    partIdArr.map((el, i) => {
      req.body[partKeyArr[i]] = { detail: el, amount: partAmount[i] };
    });
    // res.status(200).json({
    //   status: "success",
    //   //   results: part.length,
    //   data: { part },
    // });
  } catch {
    res.status(404).json({
      status: "fail",
      message: "page not found",
    });
  }
  next();
};
