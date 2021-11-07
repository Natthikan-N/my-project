exports.getAll = (Model) => async (req, res, next) => {
  try {
    const model = await Model.find();

    res.status(200).json({
      status: "success",
      results: model.length,
      data: { model },
    });
  } catch {
    res.status(404).json({
      status: "fail",
      message: "page not found",
    });
  }
  next();
};

exports.getModel = (Model) => async (req, res, next) => {
  try {
    const model = await Model.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: model,
    });
  } catch {
    res.status(404).json({
      status: "fail",
      message: "page not found",
    });
  }
  next();
};

exports.createModel = (Model) => async (req, res) => {
  try {
    const model = await Model.create(req.body);

    res.status(200).json({
      status: "success",
      data: { model },
    });
  } catch {
    const model = await Model.create(req.body);
    res.status(404).json({
      status: "fail",
      message: "page not found",
      data: { model },
    });
  }
};

exports.updateModel = (Model) => async (req, res) => {
  try {
    const model = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: model,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "page not found",
    });
  }
};

exports.deleteModel = (Model) => async (req, res) => {
  try {
    await Model.findByIdAndDelete(req.params.id, req.body);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "page not found",
    });
  }
};

exports.createComponent = (Component, fileFolder) => async (req, res) => {
  try {
    if (req.file)
      Object.assign(req.body, {
        img: `/img/${fileFolder}/${req.file.filename}`,
      });

    const component = await Component.create(req.body);

    res.status(200).json({
      status: "success",
      data: { component },
    });
  } catch {
    res.status(404).json({
      status: "fail",
      message: "page not found",
      data: { component },
    });
  }
};

exports.updateComponent = (Component, fileFolder) => async (req, res) => {
  try {
    if (req.file)
      Object.assign(req.body, {
        img: `/img/${fileFolder}/${req.file.filename}`,
      });
    const component = await Component.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
  } catch {
    res.status(404).json({
      status: "fail",
      message: "page not found",
      data: { component },
    });
  }
};

exports.updateExitingComponent =
  (Component, fileFolder) => async (req, res) => {
    try {
      if (req.file)
        Object.assign(req.body, {
          img: `/img/${fileFolder}/${req.file.filename}`,
        });

      const component = await Component.findByIdAndUpdate(
        req.body.id,
        req.body
      );

      res.status(200).json({
        status: "success",
        data: { component },
      });
    } catch {
      res.status(404).json({
        status: "fail",
        message: "page not found",
      });
    }
  };
