export default function List({
  movieNm,
  openDt,
  rnum,
  rank,
  audiCnt,
  audiAcc,
}) {
  return (
    <div>
      <h2>
        영화 제목 : {movieNm} <br />
      </h2>
      <h3>개봉일 : {openDt}</h3>
      <h3>박스 오피스 순위 : {rank}</h3>
      <h3>그날의 관객수 : {audiCnt}</h3>
      <h3>누적 관객 수 : {audiAcc}</h3> <br />
    </div>
  );
}
