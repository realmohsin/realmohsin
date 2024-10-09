import { srConfig } from "@config";
import { usePrefersReducedMotion } from "@hooks";
import sr from "@utils/sr";
import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const StyledAboutSection = styled.section`
  /* max-width: 900px; */

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 250px));
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: "▹";
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  /* max-width: 300px; */

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      /* mix-blend-mode: multiply; */
      /* filter: grayscale(100%) contrast(1); */
      /* transition: var(--transition); */
    }

    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      /* background-color: var(--navy);
      mix-blend-mode: screen; */
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    "10+ Years of Experience",
    "12 Team Members",
    "100+ Projects Completed",
    "50+ Unique Clients",
    "95% Retention Rate",
    "Clients in 5+ Countries",
  ];

  return (
    <StyledAboutSection id="who-we-are" ref={revealContainer}>
      <h2 className="numbered-heading">Who We Are</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              At Mohsin Consulting, we assist enterprises in their digital
              transformation journeys and help businesses turn ideas into
              products.
            </p>

            <p>
              As a leading software development company, our team of developers,
              designers, marketers, and business analysts collaborates with
              business and technology leaders to expand their teams and create
              innovative solutions that address their unique challenges.
            </p>

            <p>By the numbers: </p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/who-we-are.jpg"
              width={500}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
