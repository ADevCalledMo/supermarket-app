import React from "react";
import classes from "./container.module.scss";

interface childrenProps {
  children: JSX.Element;
}

const Container = ({ children }: childrenProps) => {
  return (
    <>
      <div className={classes.container}>
        {children}
      </div>
    </>
  );
};

export default Container;
