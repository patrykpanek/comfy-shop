import React from 'react';
import styled from 'styled-components';

const Error = () => {
  return (
    <Wrapper>
      <div className="section-center section">
        <h2>there was an error...</h2>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
`;

export default Error;
