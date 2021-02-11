import { useEffect, useState, useRef } from "react";

export const useFetch = (url) => {
  const isCurrent = useRef(true);
  const [state, setState] = useState({ data: null, loading: true });

  useEffect(() => {
    // called when the component is going to unmount
    return () => {
      isCurrent.current = false;
    };
  }, []);

  useEffect(() => {
    setState((state) => ({ data: state.data, loading: true }));
    fetch(url)
      .then((res) => res.text())
      .then((text) => {
        // setTimeout(() => {
        if (isCurrent.current) {
          setState({ data: text, loading: false });
        }
        // }, 2000);
      });
  }, [url, setState]);

  return state;
};
