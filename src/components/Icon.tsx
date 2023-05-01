import useBaseUrl from '@docusaurus/useBaseUrl';
import React from "react";
import styles from "./Icon.module.css";

export const Icon = ({name}) => (
  <img className={styles.icon} src={useBaseUrl(`/icons/${name}.png`)} alt={name} />
);

export default Icon;
