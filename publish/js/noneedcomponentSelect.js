import axios from "axios";

export const getPart = async (route) => {
  try {
    const res = await axios({
      method: "get",
      url: `http://127.0.0.1:8000/api/v1/${route}`,
    });

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
