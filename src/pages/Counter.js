import React, { useMemo, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Footer from "../components/commons/Footer";
import Headlesslayout from "../components/layouts/Headlesslayout";

const Counter = () => {
  // pathVariable
  const { seq } = useParams();

  const navigate = useNavigate();

  const [num, setNum] = useState(0);

  const increase = () => setNum((prev) => prev + 1);

  return (
    <Headlesslayout>
      <div>
        <div>카운터페이지</div>
        <div>클릭수 {num}</div>
        <div>
          <button onClick={increase}>클릭</button>
        </div>
        {/* <Link to={"/"}>메인으로 이동</Link> */}
        <button onClick={() => navigate("/")}>메인 페이지</button>
        <Footer />
      </div>
    </Headlesslayout>
  );
};

export default Counter;

//  main -> 공공데이터를 리스트로 출력 (라우팅기능)
//  counter -> 클릭한 화면 디테일 이동

//  url 링크(end point) : https://apis.data.go.kr/6260000/AttractionService/getAttractionKr?
//  ?암호키 : serviceKey=L4O6Jd5locofQV0Sa674EwMQ4GyHi380DNlzkWVMQLw8O2LvzNMvBKe1RxTj4jssgmQKPrDvinJFtSOIs9KmbA
//  &페이지 번호 : &pageNo=1 -> 메인(main)
//  &데이터 출력 개수 : &numOfRows=10
//  &결과값 json형태로 출력 : &resultType=json
//  데이터의 총합 값 : totalCount -> 디테일(counter)

// package.json는 하나의 설정 파일이라고 보면된다.
