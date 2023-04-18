import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import List from "./List";

export default function Home() {
  const [data, setData] = useState([]);
  const getCorona = async () => {
    const json = await (
      await fetch(
        `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=8265dd5b73e3b4cab03f7bde0996adca&targetDt=20230417`
      )
    ).json();
    setData(json.boxOfficeResult.dailyBoxOfficeList);
    console.log(json.boxOfficeResult.dailyBoxOfficeList);
  };
  useEffect(() => {
    getCorona();
  }, []);

  return (
    <div>
      {data.map((m) => (
        <List key={m.rnum} movieNm={m.movieNm} openDt={m.openDt} />
      ))}
    </div>
  );
}
