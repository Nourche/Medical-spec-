import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 50px;
  background-color: #f9f9f9;
  min-height: 100vh;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 30px;
  color: #333;
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #666;
`;

const TeamSection = styled.section`
  margin-top: 50px;
`;

const TeamTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 30px;
`;

const TeamMember = styled.div`
  text-align: center;
`;

const MemberImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const MemberName = styled.h3`
  font-size: 18px;
  margin-bottom: 5px;
  color: #333;
`;

const MemberPosition = styled.p`
  font-size: 14px;
  color: #666;
`;

const AboutUsPage = () => {
  return (
    <Container>
      <Content>
        <Title>About Us</Title>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla mauris vel velit tempor, a pretium magna fermentum.
          Sed id magna quis felis fermentum volutpat. Vivamus auctor, purus sit amet placerat interdum, nibh sapien feugiat nisi, in laoreet turpis magna nec lorem.
        </Description>
        <TeamSection>
          <TeamTitle>Our Team</TeamTitle>
          <TeamGrid>
            <TeamMember>
              <MemberImage src="team-member1.jpg" alt="Team Member 1" />
              <MemberName>John Doe</MemberName>
              <MemberPosition>CEO</MemberPosition>
            </TeamMember>
            <TeamMember>
              <MemberImage src="team-member2.jpg" alt="Team Member 2" />
              <MemberName>Jane Smith</MemberName>
              <MemberPosition>Designer</MemberPosition>
            </TeamMember>
            {/* Add more team members as needed */}
          </TeamGrid>
        </TeamSection>
      </Content>
    </Container>
  );
};

export default AboutUsPage;
