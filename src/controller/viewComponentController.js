exports.getComponentPart = (Part) => async (req, res, next) => {
  try {
    const part = await Part.findById(req.params.id);

    res.status(200).render("component", {
      title: `Part No : ${part.partNo}`,
      part,
    });
  } catch {
    res.status(404).json({
      status: "fail",
      message: "page not found",
    });
  }
  next();
};

exports.getAllProperties = (Component) => async (req, res, next) => {
  try {
    const component = await Component.find();

    res.status(200).render("innerfintube", {
      title: "Component",
      component,
    });
  } catch {
    res.status(404).json({
      status: "fail",
      message: "page not found",
    });
  }
  next();
};

// exports.createComponent = (Part) => async (req, res) => {
//   try {
//     // const part = await Part.create(req.body);

//     res.status(200).render("addComponent", {
//       title: `Part No:${part.partNo}`,
//       part,
//     });
//   } catch {
//     res.status(404).json({
//       status: "fail",
//       message: "page not found",
//     });
//   }
//   next();
// };
