import React from 'react'
import { userStats, emailCampaign, smsCampaign } from "../data/staticData.js";
import CampaignSummary from './CampaignSummary'
import CampaignDetails from './CampaignDetails'
import '../styles/Dashboard.css'

const Dashboard = () => {

  
  const colors = ['#3b82f6','#f97316','#f59e0b','#10b981','#7c3aed','#06b6d4'];

  return (
    <div className="dashboard-root">
      <div className="top-cards">
        <CampaignSummary
          title="Dashboard"
          total={userStats.totalCampaigns}
          breakdown={userStats.campaignTypes}
          colors={colors}
          totalUserLicenses={userStats.totalUserLicenses}
          consumedLicenses={userStats.consumedLicenses}
          lastCampaignDate={userStats.lastCampaignDate}
          interactionStats={userStats.interactionStats}
        />
      </div>

      <div className="campaign-sections">
        <div className="campaign-left">

          <CampaignDetails 
            data={emailCampaign}
            title="Email Campaign"
          />

          <CampaignDetails 
            data={smsCampaign}
            title="SMS Campaign"
          />

        </div>
      </div>
    </div>
  )
}

export default Dashboard;
