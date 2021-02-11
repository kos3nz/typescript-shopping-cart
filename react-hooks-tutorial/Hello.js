import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { useFetch } from "./useFetch";
import { useMeasure } from "./useMeasure";

export const Hello = () => {
  // const renders = useRef(0);
  // ページをrefleshしてもローカルストレージのcount keyからvalueを取ってくるのでreflesh前の値がでる
  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  );

  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  const [rect, divRef] = useMeasure([data]);

  return (
    <div style={{ display: "flex" }}>
      <div ref={divRef}>{!data ? "loading..." : data}</div>
      <pre>{JSON.stringify(rect, null, 2)}</pre>
      <div>count: {count}</div>
      <button onClick={() => setCount((c) => c + 1)}>increment</button>
    </div>
  );
};
