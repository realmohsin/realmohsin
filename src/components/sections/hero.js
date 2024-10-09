import { email } from "@config";
import { usePrefersReducedMotion } from "@hooks";
import { loaderDelay, navDelay } from "@utils";
import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;

  @media (max-width: 480px) and (min-height: 700px) {
    /* padding-bottom: 10vh; */
  }

  h1 {
    margin: 40px 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 40px 0 20px 2px;
    }
  }

  h3 {
    margin-top: 10px;
    color: var(--slate);
    line-height: 0.9;

    @media (max-width: 480px) {
      margin-top: 5px;
    }
  }

  p {
    margin: 20px 0 0;
    max-width: 500px;

    /* @media (max-width: 480px) {
      margin-top: 15px;
    } */
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;

    @media (max-width: 480px) {
      margin-top: 25px;
    }
  }

  .fadeup {
    width: 100%;
  }

  .button-and-image {
    display: flex;
    width: 100%;
    justify-content: space-between;

    @media (max-width: 480px) {
      flex-direction: column;
    }
  }

  .button-container {
    @media (max-width: 480px) {
      margin-bottom: 50px;
    }
  }

  .img {
    margin-right: 100px;

    @media (max-width: 480px) {
      margin-right: 0px;
      transform: translateY(50px);
    }
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Welcome to</h1>;
  const two = <h2 className="big-heading">Mohsin Consulting.</h2>;
  const three = (
    <h3 className="big-heading">For premier software solutions.</h3>
  );
  const four = (
    <>
      <p>
        Let us help you gain a competitive advantage from your software and
        online presence.
      </p>
      <p>
        {/* I'm a software engineer who specializes in building and designing
      exceptional digital products - from websites to custom applications.
      &nbsp;I help discerning businesses gain a competitive advantage from their
      online presence. */}
      </p>
    </>
  );
  const five = (
    <div className="button-and-image">
      <div className="button-container">
        <a href={`mailto:${email}`} className="email-link">
          Get In Touch
        </a>
      </div>
      <div className="img">
        <StaticImage
          src="../../images/rocket-mobile.png"
          width={500}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF", "PNG"]}
          alt="Headshot"
        />
      </div>
    </div>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms`, width: "100%" }}>
                  {item}
                </div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
