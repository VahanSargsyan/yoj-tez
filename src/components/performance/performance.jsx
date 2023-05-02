
import { ProgressChart } from "@opd/g2plot-react";
import { getColorByPercent } from "../../helpers/common";

const dummyData = [
  {
    title: 'First content (FCP)',
    outOf: [10, 10]
  },
  {
    title: 'Speed index (SI)',
    outOf: [1, 10]
  },
  {
    title: 'Largest content (LCP)',
    outOf: [5, 25]
  },
  {
    title: 'Interactive (TTI)',
    outOf: [1, 10]
  },
  {
    title: 'Blocking time (TBT)',
    outOf: [0, 30]
  },
  {
    title: 'Layout shift (CLS)',
    outOf: [3, 15]
  },
]
const Performance = () => {
  return (
    <>
      <h3>Performance <span> 34/100</span></h3>
      <p>
        A website experience free of friction and disruptions is an absolute
        must for improving conversion rates, generating more leads, and increasing revenue.
      </p>

      <div>
        {
          dummyData.map((progress) => {
            const percent = progress.outOf[0] / progress.outOf[1]
            return (
              <>
                <div className="title">
                  <h6>{progress.title}</h6>
                  <span>{`${progress.outOf[0]} / ${progress.outOf[1]}`}</span>
                </div>
                <ProgressChart height={12}
                  width={300}
                  autoFit={false}
                  percent={percent}
                  color={getColorByPercent(percent)} />
              </>
              
            )
          })
        }
      </div>
    </>
  )
}

export default Performance;