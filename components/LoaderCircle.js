import React from "react";
import cn from "classnames";
import styles from "../styles/components/LoaderCircle.module.scss";

const Loader = ({ className }) => {
  return <div className={cn(styles.loader, className)}></div>;
};

export default Loader;
