import {
  Contact,
  Hero,
  Layout,
  OurIndustries,
  OurWork,
  WhatWeDo,
  WhoWeAre,
} from "@components";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <StyledMainContainer className="fillHeight">
      <Hero />
      <WhoWeAre />
      <WhatWeDo />
      <OurWork />
      <OurIndustries />
      <Contact />
    </StyledMainContainer>
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
