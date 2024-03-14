import React, { useState } from "react";
import toast from "react-hot-toast";

function useFetchData() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const res = await response.json();
      setData(res);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
      toast.error(error.message);
      console.log(err);
    }
    console.log(data);
  };
  return { fetchData, loading, data, error };
}

export { useFetchData };
