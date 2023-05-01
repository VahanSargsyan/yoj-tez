const express = require('express');
const request = require('request');

const PORT = process.env.PORT || 3001;

const app = express();

const timeoutInMilliseconds = 10 * 1000


app.get("/api", (req, res) => {
    const { link } = req.query;

    const opts = {
        url: link,
        timeout: timeoutInMilliseconds
    }

    request(opts, (err, resp, body) => {
        if (err) {
            console.dir(err)
            return
        }
        res.json({ body });
    })
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});