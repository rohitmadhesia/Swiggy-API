import { useEffect, useState } from "react";

const useOnline = () => {
  const [online, setOnline] = useState(true);

  useEffect(() => {
    window.addEventListener("online", (event) => {
      setOnline(true);
    });
    window.addEventListener("offline", (event) => {
      setOnline(false);
    });
  });
  return online;
};

export default useOnline;
