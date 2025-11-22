import React from 'react'
import CircleProgress from './CircleProgress'
import '../styles/CampaignDetails.css'

const CampaignDetails = ({ data = {}, title = "Email Campaign" }) => {
  const safe = v => v ?? 0;

   const createdLabel =
    title === "Email Campaign" ? "Email Created" :
    title === "SMS Campaign" ? "SMS Created" :
    "Created";

  const bigCircleLabel = (
    <div style={{ textAlign: "center", lineHeight: "1.1" }}>
      <div style={{ fontSize: "20px", fontWeight: "700" }}>
        {safe(data.totalCreated)}
      </div>
      <div style={{ fontSize: "11px", marginTop: "2px" }}>
        {createdLabel}
      </div>
    </div>
  );
  return (
    <div className="campaign-details-card">
      <h4>{title}</h4>

      <div className="campaign-content">

        {/* LEFT BIG CIRCLE */}
        <div className="big-circle">
          <CircleProgress
            percentage={safe(data.totalCreated)}
            label={bigCircleLabel}
            size={180}
            color="#0ea5a4"
          />

          <div className="big-circle-text">
            Sent : <strong>{safe(data.sent)}</strong><br /> 
            Opened : <strong>{safe(data.opened)}</strong>
          </div>
        </div>

        {/* RIGHT FOUR SMALL BOXES */}
        <div className="side-stats">

          {/* Links Clicked */}
          <div className="side-item">
            <p className="item-title">Links Clicked</p>

            <CircleProgress
              percentage={80}
              label={24}
              size={70}
              color="#3b82f6"
            />

            <div className="item-info">
              Clicked :  {data.linksClicked?.clicked ?? 0}<br />
              Sent :  {data.linksClicked?.sent ?? 0}
            </div>
          </div>

          {/* Interact Form */}
          <div className="side-item">
            <p className="item-title">Interact Form</p>

            <CircleProgress
              percentage={80}
              label={50}
              size={70}
              color="#06b6d4"
            />

            <div className="item-info">
              Clicked : {data.interactForm?.clicked ?? 0}<br />
              Sent : {data.interactForm?.sent ?? 0}
            </div>
          </div>

          {/* Form Submit */}
          <div className="side-item">
            <p className="item-title">Form Submit</p>

            <CircleProgress
              percentage={80}
              label={50}
              size={70}
              color="#f59e0b"
            />

            <div className="item-info">
              Submitted : {data.formSubmit?.submitted ?? 0}<br />
              Sent : {data.formSubmit?.sent ?? 0}
            </div>
          </div>

          {/* Attachment Open */}
          <div class="side-item">
            <p className="item-title">Attachment Open</p>

            <CircleProgress
              percentage={80}
              label={50}
              size={70}
              color="#ef4444"
            />

            <div className="item-info">
              Opened : {data.attachmentOpen?.opened ?? 0}<br />
              Sent : {data.attachmentOpen?.sent ?? 0}
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default CampaignDetails
