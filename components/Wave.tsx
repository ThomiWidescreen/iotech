import React from "react";

export default function Wave({
  fill,
  d,
  viewBox,
  id,
}: {
  fill: string;
  d: string;
  viewBox: string;
  id?: string;
}) {
  return (
    <svg id={id || ""} xmlns="http://www.w3.org/2000/svg" viewBox={viewBox}>
      <path fill={fill} fillOpacity="1" d={d}></path>
    </svg>
  );
}
