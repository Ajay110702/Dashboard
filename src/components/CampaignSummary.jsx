import React from 'react';
import CircleProgress from './CircleProgress';
import '../styles/CampaignSummary.css';

const CampaignSummary = ({
  title = "Campaigns",
  total,
  breakdown = {},
  colors = [],
  totalUserLicenses,
  consumedLicenses,
  lastCampaignDate,
  interactionStats = {}
}) => {

  return (
    <div className="campaign-summary-card">
      
      <div className="summary-head">
        <h3>{title}</h3>
        <div className="summary-right">
          Last Campaign Date: {lastCampaignDate}
        </div>
      </div>

      <div className="summary-body">

        {/* LEFT SECTION */}
        <div className="summary-left">

          {/* Total User Licenses */}
          <div className="big-card">
            <div className="big-number">{totalUserLicenses}</div>
            <div className="big-label">Total User Licenses</div>
          </div>

          <div className="small-cards">

            {/* Consumed Licenses */}
            <div className="small-card">
              <CircleProgress
                percentage={consumedLicenses}
                label={consumedLicenses}
                color="#10b981"
              />
            </div>

            {/* Total Interaction */}
            <div className="small-card">
              <div className="interaction-title">Total Interaction</div>
              <ul className="interaction-list">

                {Object.entries(interactionStats).map(([key, value], i) => (
                  <li key={key}>
                    <span
                      className="dot"
                      style={{ background: colors[i] || "#000" }}
                    ></span>

                    {/* Convert camelCase → Normal Text */}
                    {key
                      .replace(/([A-Z])/g, " $1")
                      .replace(/^./, c => c.toUpperCase())}

                    <strong> {value}</strong>
                  </li>
                ))}

              </ul>
            </div>

          </div>
        </div>

        {/* RIGHT DONUT + LEGEND */}
        <div className="summary-right-campaign">

          <div className="donut-wrap">
            <CircleProgress
              percentage={total}
              label={total}
              color="#7c3aed"
              size={160}
            />
          </div>

          {/* Campaign Type Legend */}
          <div className="legend">
            {Object.entries(breakdown).map(([key, value], i) => (
              <div key={key} className="legend-item">
                <span
                  className="legend-dot"
                  style={{ background: colors[i] || "#aaa" }}
                ></span>
                <span>{key}</span>
                <span className="legend-count">{value}</span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};

export default CampaignSummary;
