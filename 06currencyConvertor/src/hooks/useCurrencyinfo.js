import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://open.er-api.com/v6/latest/${currency.toUpperCase()}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch currency info");
        }
        return res.json();
      })
      .then((res) => {
        setData(res.rates);
      })
      .catch((error) => {
        console.error("Error fetching currency data:", error);
        setData({});
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
