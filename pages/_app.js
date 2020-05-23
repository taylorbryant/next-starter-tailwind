import "../css/index.css";

import PropTypes from "prop-types";
import React from "react";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.propTypes = {
  Component: PropTypes.node,
  pageProps: PropTypes.object,
};

export default MyApp;
