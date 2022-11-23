import React from "react";

type StatusType = {
  status: "success" | "loading" | "error";
};

const FetchData = ({ status }: StatusType) => {
  if (status === "loading") {
    return <h2>Data Loading</h2>;
  } else if (status === "error") {
    return <h2>Error! Data Note Fetch</h2>;
  }

  return (
    <div>
      <h2>Data Fetch Successfully</h2>
    </div>
  );
};

export default FetchData;
