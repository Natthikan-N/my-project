import axios from "axios";

export const updateQPoint = async (data) => {
  console.log("hi form updateQpoint js");
  //   console.log(file);
  //   console.log(data);
  try {
    const res = await axios({
      method: "patch",
      url: `http://127.0.0.1:8000/api/v1/core/updateqpoint`,
      data: data,
    });

    // console.log(res);

    if (res.data.status === "success") {
      alert("added");
      window.setTimeout(() => {
        location.assign(`/qpointlist`);
      }, 500);
    }
  } catch (err) {
    console.log(err.response.data.message);
  }
};
