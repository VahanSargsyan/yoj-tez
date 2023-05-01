import { normalizeLink } from '../../helpers/common';
import styles from './siteMetinfoBox.module.css'

const SiteMetinfoBox = ({ link, html }) => {
	console.log(link)
	return (
		<>
			<p>{link} This is how khuy yevo znayet te inch</p>
			<img className={styles.icon} src={
				`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${normalizeLink(link)}&size=64`
			} alt="" />
			<span>{normalizeLink(link)}</span>
			<div>
				<span>Մեքենաների առք վաճառք ու խույ եվո ինչ</span>
			</div>
		</>
	)
}

export default SiteMetinfoBox;