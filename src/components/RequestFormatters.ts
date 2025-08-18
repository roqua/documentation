/**
 * Utility functions for formatting API requests in different formats
 */

const BASE_URL = 'https://api.example.com';

export interface RequestData {
  request_method: string;
  path: string;
  body?: any;
}

/**
 * Formats a request as a plain HTTP request
 */
export function formatHttpRequest(request: RequestData): string {
  const { request_method, path, body } = request;
  const hasBody = body && Object.keys(body).length > 0 && ['POST', 'PUT', 'PATCH'].includes(request_method.toUpperCase());
  
  let httpRequest = `${request_method.toUpperCase()} ${path} HTTP/1.1\n`;
  httpRequest += `Host: api.example.com\n`;
  
  if (hasBody) {
    httpRequest += `Content-Type: application/json\n`;
  }
  
  httpRequest += `Authorization: Bearer YOUR_API_TOKEN\n`;
  
  if (hasBody) {
    httpRequest += `\n${JSON.stringify(body, null, 2)}`;
  }
  
  return httpRequest;
}

/**
 * Formats a request as a cURL command
 */
export function formatCurlCommand(request: RequestData): string {
  const { request_method, path, body } = request;
  const hasBody = body && Object.keys(body).length > 0 && ['POST', 'PUT', 'PATCH'].includes(request_method.toUpperCase());
  const url = `${BASE_URL}${path}`;
  
  let curlCommand = `curl -X ${request_method.toUpperCase()} "${url}" \\\n`;
  curlCommand += `  -u "username:password"`;
  
  if (hasBody) {
    curlCommand += ` \\\n  -H "Content-Type: application/json"`;
    curlCommand += ` \\\n  -d '${JSON.stringify(body, null, 2)}'`;
  }
  
  return curlCommand;
}

/**
 * Formats a request as a PowerShell Invoke-RestMethod command
 */
export function formatPowerShellCommand(request: RequestData): string {
  const { request_method, path, body } = request;
  const hasBody = body && Object.keys(body).length > 0 && ['POST', 'PUT', 'PATCH'].includes(request_method.toUpperCase());
  const url = `${BASE_URL}${path}`;
  
  let psCommand = `$username = "username"\n`;
  psCommand += `$password = "password"\n`;
  psCommand += `$base64AuthInfo = [Convert]::ToBase64String([Text.Encoding]::ASCII.GetBytes(("{0}:{1}" -f $username, $password)))\n\n`;
  
  psCommand += `$headers = @{\n`;
  psCommand += `    "Authorization" = "Basic $base64AuthInfo"\n`;
  
  if (hasBody) {
    psCommand += `    "Content-Type" = "application/json"\n`;
  }
  
  psCommand += `}\n\n`;
  
  if (hasBody) {
    psCommand += `$body = @{\n`;
    
    // Convert JSON body to PowerShell hashtable syntax
    const bodyEntries = Object.entries(body).map(([key, value]) => {
      if (typeof value === 'object' && value !== null) {
        const nestedEntries = Object.entries(value).map(([nestedKey, nestedValue]) => {
          return `        ${nestedKey} = "${nestedValue}"`;
        }).join('\n');
        return `    ${key} = @{\n${nestedEntries}\n    }`;
      } else {
        return `    ${key} = "${value}"`;
      }
    }).join('\n');
    
    psCommand += bodyEntries;
    psCommand += `\n} | ConvertTo-Json\n\n`;
  }
  
  psCommand += `Invoke-RestMethod -Uri "${url}" \`\n`;
  psCommand += `  -Method ${request_method.toUpperCase()} \`\n`;
  psCommand += `  -Headers $headers`;
  
  if (hasBody) {
    psCommand += ` \`\n  -Body $body`;
  }
  
  return psCommand;
}