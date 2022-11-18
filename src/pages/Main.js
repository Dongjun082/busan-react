import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import Headlayout from "../components/layouts/Headlayout";

const Main = () => {
  const { search } = useLocation();

  const [attrs, setAttrs] = useState([]);

  const navigate = useNavigate();

  const getPageNo = useMemo(() => {
    const queryString = new URLSearchParams(search);
    let pageNo = "1";
    if (
      queryString.get("pageNo") != null &&
      !isNaN(queryString.get("pageNo"))
    ) {
      pageNo = queryString.get("pageNo");
    }
    return pageNo;
  }, [search]);

  const getAttrs = () => {
    axios
      .get(
        `https://apis.data.go.kr/6260000/AttractionService/getAttractionKr?serviceKey=1Fj8POIv%2F5rggOSJJa6R51pc2xmIZp0ekKtdUiHRf%2Fb%2Fe7j2lgC3EZWw7E2OBA9D0HTXAfILCsWk76Fm6ROBDg%3D%3D&pageNo=${getPageNo}&numOfRows=10&resultType=json`
      )
      .then((respones) => {
        console.log(respones.data.getAttractionKr.item);
        setAttrs(respones.data.getAttractionKr.item);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  };

  useEffect(() => {
    getAttrs();
  }, [getPageNo]);

  return (
    <Headlayout>
      <div>
        <div>Main페이지</div>

        <Container>
          <Row>
            <Col>
              <Button
                className="me-3"
                variant="dark"
                onClick={() => navigate(`/?pageNo=${parseInt(getPageNo) - 1}`)}
              >
                prew
              </Button>
              <Button
                variant="dark"
                onClick={() => navigate(`/?pageNo=${parseInt(getPageNo) + 1}`)}
              >
                prew
              </Button>
            </Col>
          </Row>

          <Row className="row-cols-1 row-cols-md-2 row-cols-xl-3 row-cols-xxl-4">
            {attrs.map((value, index) => {
              return (
                <Col key={index}>
                  <Card className="mb-5">
                    <Card.Img variant="top" src={value.MAIN_IMG_THUMB} />
                    <Card.Body>
                      <Card.Title>{value.MAIN_TITLE}</Card.Title>
                      <Card.Text
                        style={{ height: "100px", overflow: "hidden" }}
                      >
                        {value.ITEMCNTNTS}
                      </Card.Text>
                      {/* <Button variant="primary" onClick=(() => navigate(`/?UC_SEQ=${counter(UC_SEQ)}`))>자세히 보기</Button> */}
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
        <button onClick={() => navigate("/Counter")}>카운터로 이동</button>
      </div>
    </Headlayout>
  );
};

export default Main;
// https://medium.com/@_diana_lee/react-react-router-%EC%A0%81%EC%9A%A9%ED%95%9C-react-%EC%95%B1%EC%9D%84-github-pages%EB%A1%9C-%EB%B0%B0%ED%8F%AC%ED%95%98%EB%8A%94-%EB%B2%95-5f6119c6a5d9
