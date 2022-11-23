import React, { useState } from "react";

type User = {
  id: number;
  name: string;
};

const State1 = () => {
  // const [data, setData] = useState<null | string>(null);
  const [data, setData] = useState<null | User>(null);

  const handleSetData = () => {
    // setData("Anisul islam");
    setData({ id: 101, name: "anisul islam" });
    console.log(data);
  };

  return (
    <div>
      <h1>UseState Future value</h1>
      <button onClick={handleSetData}>set data</button>
      {/* {data && <p>{data}</p>} */}
      <p>{data?.id}</p>
      <p>{data?.name}</p>
    </div>
  );
};

export default State1;
