import axios from "axios";

export const getCore = async (id) => {
  try {
    const res = await axios({
      method: "get",
      url: `http://127.0.0.1:8000/api/v1/core/${id}`,
    });

    if (res.data.status === "success") {
      console.log("success");
      return res.data.data;
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
    });

    if (res.data.status === "success") {
      console.log("success");
      return res.data.data.model;
    }
  } catch (err) {
    console.log(err.response.data.message);
  }
};
