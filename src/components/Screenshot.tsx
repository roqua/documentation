import useBaseUrl from '@docusaurus/useBaseUrl';
import React from "react";

export const Screenshot: React.FC<{src: string}> = ({src}) => {
  return <div className="screenshot" style={{maxWidth: "100%", padding: "10px", border: "1px solid #ccc", margin: "12px auto", textAlign: "center"}}>
    <img src={useBaseUrl(src)} style={{margin: 0}} />
  </div>
}

export default Screenshot
