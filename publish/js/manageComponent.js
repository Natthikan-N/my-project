import axios from "axios";

export const createNewComponent = async (datas, route) => {
  try {
    const res = await axios({
      method: "post",
      url: `http://127.0.0.1:8000/api/v1/${route}`,
      data: datas,
    });

    if (res.data.status === "success") {
      alert("added");
      window.setTimeout(() => {
        location.assign(`/${route}`);
      }, 500);
    }
  } catch (err) {
    console.log(err.response.data.message);
  }
};

export const updateComponent = async (datas, route) => {
  try {
    const res = await axios({
      method: "patch",
      url: `http://127.0.0.1:8000/api/v1/${route}`,
      data: datas,
    });

    if (res.data.status === "success") {
      alert("added");
      window.setTimeout(() => {
        location.assign(`/${route}`);
      }, 500);
    }
  } catch (err) {
    console.log(err.response.data.message);
  }
};
