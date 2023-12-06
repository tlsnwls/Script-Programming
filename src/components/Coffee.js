import { Col, Container, Row } from 'react-bootstrap';
import data from './coffee.json';
import { useState, useEffect } from 'react';

function Coffee(props) {
  const [items, setItems] = useState([]); // 빈 배열로 초기화
  
  useEffect(() => {
    // 데이터가 객체라고 가정하고 객체를 배열로 변환하는 예시
    const dataArray = data['Espresso'];
    setItems(dataArray);
  }, [data]);

  return (
    <div>
      <span>
      <CardList items={items} />
      </span>
    </div>
  );
}

function CardList({ items }) {
  return (
    <Container>
      <Row>
        {items && items.map((item, index) => (
          <Col key={index} style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <img src={item.imgurl} alt={item.name} width="auto" height="auto" />
              <p style={{ fontStyle: 'normal', margin: '0', fontSize: '15px' }}>{item.name}</p>
              <hr />
              <p>{item.description}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}


export default Coffee;
