import React from 'react';
import ChildPageLayout from '../../components/common/ChildPageLayout';

export default function AnalyticsIntelligencePage() {
  const journey = [
    { step: 'Connect', description: 'Bring healthcare data together.' },
    { step: 'Understand', description: 'Create meaningful context.' },
    { step: 'Identify', description: 'Find the opportunities that matter.' },
    { step: 'Prioritize', description: 'Focus on what needs attention.' },
    { step: 'Act', description: 'Put intelligence into workflows.' },
    { step: 'Outcome', description: 'Measure what changes.' }
  ];

  const capabilities = [
    'Executive Cockpits & Real-Time KPI Monitoring Across Clinical & Financial Domains',
    'PMPM / PMPY Financial & Cost Analytics with Provider Performance Scoring',
    'Population Health Analytics, Utilization Monitoring & Predictive Risk Insights',
    'Care Management, Referral & Value-Based Care Outcome Analytics',
    'Custom Dashboards, Configurable Reports & Drill-Down / Drill-Through Analysis',
    'Scheduled Report Distribution, Benchmarking & Ad-Hoc Reporting'
  ];

  const siblings = [
    { label: 'Population Health', path: '/solutions/population-health' },
    { label: 'Care Management', path: '/solutions/care-management' },
    { label: 'Risk Adjustment', path: '/solutions/risk-adjustment' }
  ];

  return (
    <ChildPageLayout
      category="Solutions"
      categoryPath="/solutions"
      title="Analytics & Intelligence"
      eyebrow="ANALYTICS HUB"
      headline="Turn healthcare data into decisions."
      supporting="Guardian transforms connected healthcare data into meaningful clinical and operational intelligence, helping organizations understand what is happening, identify opportunities, and decide what to do next."
      ctaText="Explore Analytics & Intelligence"
      journey={journey}
      journeyTitle="Analytics & Intelligence: Data to Outcome Journey"
      journeySubtitle="How Guardian transforms raw healthcare data into operational and clinical action"
      capabilities={capabilities}
      capabilitiesTitle="Key Capabilities"
      capabilitiesSubtitle="What Guardian helps healthcare organizations achieve with analytics"
      heroVisualBadge="Executive Cockpits & Cost Tracking"
      heroImage="/images/product-ui/ui-pop-health-analytics.png"
      mockupUrl="Analytics"
      contextType="analytics-intelligence"
      siblings={siblings}
      closingHeadline="Turn healthcare data into actionable intelligence."
      closingText="Guardian connects analytics with healthcare workflows and expertise so information can move from a report or dashboard into a meaningful decision."
    />
  );
}
