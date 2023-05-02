import { RingProgressChart } from "@opd/g2plot-react"
import { spawn } from "child_process"
import { getColorByPercent } from "../../helpers/common"

const CriteriaScoreCard = ({ percent, title, cons, pros }) => {
  return (
    <div>
      <div className="chartcontainer">
        <RingProgressChart percent={percent} color={
          getColorByPercent(percent)
        } progressStyle={{
          lineCap: 'round',
        }} />
        <h3>{title}</h3>
      </div>
      <div>
        <div className="cons">
          <h3>Cons</h3>
          {
            cons?.map((con) => <span>+ {con}</span>)
          }
        </div>
        <div className="pros">
        <h3>Pros</h3>
          {
            pros?.map((pro) => <span>- {pro}</span>)
          }
        </div>
      </div>
    </div>
  )
}

export default CriteriaScoreCard