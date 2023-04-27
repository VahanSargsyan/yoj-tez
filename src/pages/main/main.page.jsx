import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import { useState } from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import FullScreenDialog from '../../components/dialog/dialog';

import styles from './main.module.css'

const fetchSite = (link, stateHandler, cB) => {
    stateHandler(true);

    return fetch(`/api/?link=${link}`)
        .then(resp => console.log(resp) || resp)
        .then(function (response) {
            return response.text();
        })
        .then(function (html) {
            // const parser = new DOMParser();
            cB({ __html: html });
        })
        .catch(function (err) {
            console.warn('Something went wrong.', err);
        }).finally(() => stateHandler(false));

}


const MainPage = () => {
    const [loading, setLoading] = useState(false);
    const [sitelink, setSitelink] = useState('');
    const [fetchedBody, setFetchedBody] = useState(null);
    const [isDialogOpen, setDialogOpen] = useState(false);

    const afterFetch = (html) => {
        console.log(html)
        setFetchedBody(html);
        setDialogOpen(true);
    }

    return (
        <div className={styles.section}>
            <TextField
                disabled={loading}
                value={sitelink}
                onChange={(e) => setSitelink(e.target.value)}
                size="small"
                id="outlined-search"
                label="Search field"
                type="search"
            />
            <LoadingButton
                size="big"
                onClick={() => fetchSite(sitelink, setLoading, afterFetch)}
                loading={loading}
                variant="outlined"
                endIcon={<DownloadIcon />}
                loadingPosition="end"

            >
                <span>Fetch data</span>
            </LoadingButton>
            <FullScreenDialog open={isDialogOpen} setOpen={setDialogOpen} html={fetchedBody} link={sitelink} />
        </ div>
    );
};

export default MainPage;