import React, { useState } from 'react';
import CodeBlock from '@theme/CodeBlock';
import { formatHttpRequest, formatCurlCommand, formatPowerShellCommand, RequestData } from './RequestFormatters';
import styles from './RequestTabs.module.css';

interface RequestTabsProps {
  request: RequestData;
}

type TabType = 'http' | 'curl' | 'powershell';

const TABS = [
  { id: 'http' as TabType, label: 'HTTP', language: 'http' },
  { id: 'curl' as TabType, label: 'cURL', language: 'bash' },
  { id: 'powershell' as TabType, label: 'PowerShell', language: 'powershell' },
];

export const RequestTabs: React.FC<RequestTabsProps> = ({ request }) => {
  const [activeTab, setActiveTab] = useState<TabType>('http');

  const getFormattedRequest = (tabType: TabType): string => {
    switch (tabType) {
      case 'http':
        return formatHttpRequest(request);
      case 'curl':
        return formatCurlCommand(request);
      case 'powershell':
        return formatPowerShellCommand(request);
      default:
        return '';
    }
  };

  const handleTabClick = (tabId: TabType) => {
    setActiveTab(tabId);
  };

  const handleKeyDown = (event: React.KeyboardEvent, tabId: TabType) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setActiveTab(tabId);
    }
  };

  return (
    <div className={styles.requestTabs}>
      <div className={styles.tabList} role="tablist" aria-label="Request format options">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tab} ${activeTab === tab.id ? styles.tabActive : ''}`}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`tabpanel-${tab.id}`}
            id={`tab-${tab.id}`}
            tabIndex={activeTab === tab.id ? 0 : -1}
            onClick={() => handleTabClick(tab.id)}
            onKeyDown={(e) => handleKeyDown(e, tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      {TABS.map((tab) => (
        <div
          key={tab.id}
          className={`${styles.tabPanel} ${activeTab === tab.id ? styles.tabPanelActive : styles.tabPanelHidden}`}
          role="tabpanel"
          id={`tabpanel-${tab.id}`}
          aria-labelledby={`tab-${tab.id}`}
          tabIndex={0}
        >
          {activeTab === tab.id && (
            <CodeBlock language={tab.language} title={`${tab.label} Request`}>
              {getFormattedRequest(tab.id)}
            </CodeBlock>
          )}
        </div>
      ))}
    </div>
  );
};

export default RequestTabs;