import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

const StyledAffiliationsSection = styled.section`
  max-width: 900px;
  margin: 0 auto 100px;
  text-align: center;

  .logos {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px; /* Reduced gap from 20px to 10px */

    .logo {
      width: 150px;
      height: auto;
      filter: grayscale(100%);
      transition: filter 0.3s ease;

      &:hover,
      &:focus {
        filter: none;
      }
    }
  }
`;

const Affiliations = () => (
  <StyledAffiliationsSection id="affiliations">
    <h2 className="numbered-heading">Affiliations</h2>
    <div className="logos">
      <a href="https://www.onelifeconsult.com/" target="_blank" rel="noopener noreferrer">
        <StaticImage
          className="logo"
          src="../../images/onelife-logo.png"
          alt="Onelife Consultants logo"
        />
      </a>
      <a
        href="https://www.stanbicbank.co.ug/uganda/personal"
        target="_blank"
        rel="noopener noreferrer">
        <StaticImage className="logo" src="../../images/stanbic.png" alt="Stanbic logo" />
      </a>
      <a href="https://ke.kcbgroup.com/" target="_blank" rel="noopener noreferrer">
        <StaticImage className="logo" src="../../images/kcb-logo.png" alt="KCB logo" />
      </a>
      <a href="https://safebangle.org/" target="_blank" rel="noopener noreferrer">
        <StaticImage className="logo" src="../../images/safe-bangle.png" alt="Safe Bangle logo" />
      </a>
      <a href="https://ranxgroup.com/" target="_blank" rel="noopener noreferrer">
        <StaticImage className="logo" src="../../images/ranx-logo.png" alt="Ranx logo" />
      </a>
      <a href="https://andersjensen.org/" target="_blank" rel="noopener noreferrer">
        <StaticImage
          className="logo"
          src="../../images/i-love-automation-logo.png"
          alt="Ranx logo"
        />
      </a>
    </div>
  </StyledAffiliationsSection>
);

export default Affiliations;
