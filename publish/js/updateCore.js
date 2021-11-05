import axios from "axios";

export const updateCore = async (data) => {
  console.log("hi form updatecore js");
  // console.log(file);
  //   console.log(data);
  try {
    const res = await axios({
      method: "patch",
      url: `http://127.0.0.1:8000/api/v1/core/updatecore`,
      data: data,
    });

    console.log(res);

    if (res.data.status === "success") {
      alert("update");
      window.setTimeout(() => {
        location.assign(`/coredetail`);
      }, 500);
    }
  } catch (err) {
    console.log(err.response.data.message);
  }
};
