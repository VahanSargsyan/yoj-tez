import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import { useState } from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import FullScreenDialog from '../../components/dialog/dialog';

const fetchSite = (link, stateHandler, cB) => {
    stateHandler(true);

    return fetch(link)
        .then(function (response) {
            return response.text();
        })
        .then(function (html) {
            // const parser = new DOMParser();
            cB({__html: html});
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
        setFetchedBody(html);
        setDialogOpen(true);
    }

    return (
        <>
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
            <FullScreenDialog open={isDialogOpen} setOpen={setDialogOpen} html={fetchedBody} link={sitelink}/>
        </>
    );
};

export default MainPage;