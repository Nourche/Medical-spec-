import React, { useState } from 'react';
import styled from 'styled-components';

const SlideContainer = styled.div`
  position: relative;
  width: 1000px;
  height: 600px;
  background: #f5f5f5;
  box-shadow: 0 30px 50px #dbdbdb;
  margin: 0 auto;
  overflow: hidden;
`;

const Slide = styled.div`
  display: flex;
  transition: transform 0.5s ease;
`;

const Item = styled.div`
  flex: 0 0 auto;
  width: 200px;
  height: 300px;
  border-radius: 20px;
  box-shadow: 0 30px 50px #505050;
  background-position: 50% 50%;
  background-size: cover;
  transition: 0.5s;
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 100px;
  width: 300px;
  text-align: left;
  color: #eee;
  transform: translate(0, -50%);
  font-family: 'system-ui';
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 20px;
`;

const PrevButton = styled(Button)`
  width: 40px;
  height: 35px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  margin: 0 5px;
  border: 1px solid #000;
  transition: 0.3s;

  &:hover {
    background: #ababab;
    color: #fff;
  }
`;

const NextButton = styled(Button)`
  width: 40px;
  height: 35px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  margin: 0 5px;
  border: 1px solid #000;
  transition: 0.3s;

  &:hover {
    background: #ababab;
    color: #fff;
  }
`;

const items = [
  { image: 'images/add.jpg', name: 'Switzerland', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!' },
  { image: 'images/ped.jpg', name: 'Finland', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!' },
  { image: 'images/psych.jpg', name: 'Iceland', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!' },
  { image: 'images/ophtalmo.jpg', name: 'Australia', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!' },
  { image: 'images/gyneco.jpg', name: 'Netherland', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!' },
  { image: 'images/cardio.jpg', name: 'Ireland', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!' }
];

const Hi = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <SlideContainer>
      <Slide style={{ transform: `translateX(-${currentIndex * 220}px)` }}>
        {items.map((item, index) => (
          <Item key={index} style={{ backgroundImage: `url(${item.image})`, left: `${index * 220}px` }}>
            <Content>
              <div className="name">{item.name}</div>
              <div className="des">{item.description}</div>
              <Button>See More</Button>
            </Content>
          </Item>
        ))}
      </Slide>
      <ButtonContainer>
        <PrevButton onClick={prevSlide}><i className="fa-solid fa-arrow-left"></i></PrevButton>
        <NextButton onClick={nextSlide}><i className="fa-solid fa-arrow-right"></i></NextButton>
      </ButtonContainer>
    </SlideContainer>
  );
};

export default Hi;
