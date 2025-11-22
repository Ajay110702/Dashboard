import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart, ArcElement, Tooltip } from 'chart.js'
import '../styles/CircleProgress.css'

Chart.register(ArcElement, Tooltip)

const CircleProgress = ({ percentage = 50, color = '#3b82f6', size = 100, label }) => {
  const data = {
    datasets: [{
      data: [percentage, 100 - percentage],
      backgroundColor: [color, '#e6e6e6'],
      borderWidth: 0,
      cutout: '78%',
      radius: '100%'
    }]
  }

  const options = {
    rotation: -90,
    circumference: 360,
    maintainAspectRatio: false,
    plugins: {
      tooltip: { enabled: false }
    }
  }

  return (
    <div className="circle-wrap" style={{ width: size, height: size }}>
      <Doughnut data={data} options={options} />
      <div className="circle-center">
        <div className="circle-value">{label ?? `${percentage}`}</div>
      </div>
    </div>
  )
}

export default CircleProgress
