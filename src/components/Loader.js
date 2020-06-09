import { forwardRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const LoaderContainer = styled.div`
  padding: 20px;
  text-align: center;
  p {
    font-size: 1.5rem;
  }
  display: block;
`;

const Loader = forwardRef(({ children, invisible }, ref) => (
  <LoaderContainer ref={ref} style={{ display: invisible ? `none` : `inline-block`}}>
    <motion.p
      animate={{
        color: ["rgb(82, 67, 170)", "rgb(225, 225, 255)", "rgb(255, 62, 85)"],
      }}
      transition={{
        duration: 4,
        yoyo: Infinity,
      }}
      color={"rgb(23, 43, 77)"}
    >
      <strong style={{ fontFamily: `"Poppins", sans-serif` }}>
        {children}
      </strong>
    </motion.p>
  </LoaderContainer>
));

export default Loader;
