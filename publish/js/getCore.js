import axios from "axios";

export const getCore = async (id) => {
  try {
    const res = await axios({
      method: "get",
      url: `http://127.0.0.1:8000/api/v1/core/${id}`,
      //   data,
    });

    // console.log(res);

    if (res.data.status === "success") {
      console.log("success");
      return res.data.data;
      // // window.setTimeout(() => {
      // //   location.assign(`/${route}`);
      // // }, 500);
    }
  } catch (err) {
    console.log(err.response.data.message);
  }
};

export const getCores = async () => {
  try {
    const res = await axios({
      method: "get",
      url: `http://127.0.0.1:8000/api/v1/core`,
      //   data,
    });

    // console.log(res);

    if (res.data.status === "success") {
      console.log("success");
      return res.data.data.model;
      // // window.setTimeout(() => {
      // //   location.assign(`/${route}`);
      // // }, 500);
    }
  } catch (err) {
    console.log(err.response.data.message);
  }
};
