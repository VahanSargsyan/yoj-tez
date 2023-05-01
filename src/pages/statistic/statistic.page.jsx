import { useAppSelector } from "../../app/hooks";
import Overview from "../../components/overview/overview";
import Sidebar from "../../components/sidebar/sidebar";
import SiteMetinfoBox from "../../components/site-metainfo-box/siteMetainfBox";
import { selectLink, selectHistory } from "../../store/evaluateSlice"

import styles from "./statistic.module.css"

const StatisticPage = () => {
const link = useAppSelector(selectLink);

  return (
    <div className={styles.pageLayout}>
      <Sidebar />
      <div className={styles.content}>
        <SiteMetinfoBox link={link || 'https://pornhub.com'} html={{ __html: 'the best site ever made' }} />
        <Overview />
      </div>
    </div>
  )
}

export default StatisticPage;