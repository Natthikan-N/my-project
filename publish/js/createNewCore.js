import axios from "axios";

export const createNewCore = async (data) => {
  console.log(data);
  try {
    const res = await axios({
      method: "post",
      url: `http://127.0.0.1:8000/api/v1/core`,
      data: data,
    });

    console.log(res);

    if (res.data.status === "success") {
      alert("added");
      window.setTimeout(() => {
        location.assign(`/`);
      }, 500);
    }
  } catch (err) {
    console.log(err.response.data.message);
  }
};
