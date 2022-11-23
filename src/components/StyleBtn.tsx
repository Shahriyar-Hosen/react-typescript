import React, { CSSProperties } from "react";

type BtnStyle = {
  btnStyle: CSSProperties;
};

const StyleBtn = ({ btnStyle }: BtnStyle) => {
  return <button style={btnStyle}>Click Here!</button>;
};

export default StyleBtn;
