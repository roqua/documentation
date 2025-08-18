import CodeBlock from '@theme/CodeBlock';
import React from 'react';
import RequestTabs from './RequestTabs';
import styles from "./Snapshot.module.css";

const STATUSES = {
  200: '200 OK',
  201: '201 Created',
  202: '202 Accepted',
  204: '204 No Content',
  205: '205 Reset Content',
  301: '301 Moved Permanently',
  302: '302 Found',
  307: '307 Temporary Redirect',
  304: '304 Not Modified',
  401: '401 Unauthorized',
  403: '403 Forbidden',
  404: '404 Not Found',
  405: '405 Method not allowed',
  409: '409 Conflict',
  422: '422 Unprocessable Entity',
  500: '500 Server Error',
  502: '502 Bad Gateway'
}

type Snapshot = {
  request: {
    request_method: string;
    path: string;
  },
  response: {
    status: number;
    headers: any;
    body: any;
  }
}

export const Request = ({snapshot}) => {
  return <>
    <h3>Sample request</h3>
    <RequestTabs request={snapshot.request} />
  </>
}

export const Response = ({snapshot}) => {
  return <>
    <h3>Sample response</h3>
  </>
}

export const Headers = ({snapshot}) => {
  const { response: { status } } = snapshot;
  const classNames = (status === 204 || status === 404) ? 'headers no-response' : 'headers';
  const lines = [
    `${snapshot.request.request_method} ${snapshot.request.path}`,
    `Status: ${STATUSES[status] || status}`
  ];

  return <pre className={styles.headers}>
    <code>
      { lines.join("\n") }
    </code>
  </pre>;
}

export const JsonBody = ({json}) => (
  <CodeBlock language="json">
      {JSON.stringify(json, null, 2)}
  </CodeBlock>
);

export const Snapshot = ({children, json}) => (
  <div>
    <Request snapshot={json} />
    <JsonBody json={json['response']['body']} />
  </div>
);

export default Snapshot;
