import { useEffect, useState } from "react";

const useDataFetch = () => {
  const [appData, setAppData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("/appInfo.json")
      .then((res) => res.json())
      .then((data) => setAppData(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return [appData, loading, error];
};

export default useDataFetch;
