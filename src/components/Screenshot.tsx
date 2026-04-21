import useBaseUrl from '@docusaurus/useBaseUrl';
import React from "react";

export const Screenshot: React.FC<{src: string}> = ({src}) => {
  return <div className="screenshot" style={{maxWidth: "100%", width: "fit-content", padding: "10px", border: "1px solid #ccc", margin: "12px auto", textAlign: "center"}}>
    <img src={useBaseUrl(src)} style={{margin: 0, display: "block"}} />
  </div>
}

export const ScreenshotRow: React.FC<{children: React.ReactNode}> = ({children}) => {
  return <div style={{display: "flex", gap: "12px", justifyContent: "center", margin: "12px 0"}}>
    {children}
  </div>
}

export default Screenshot
