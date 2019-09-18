const express = require('express');
const GoogleSpreadsheet = require('google-spreadsheet');
const creds = require('../client_secret.json');
const  spreadSheets = require('../config/keys')

const router = express.Router();

router.get("/", (req, res) => {
    var doc = new GoogleSpreadsheet(spreadSheets.management);

    // Authentication
    doc.useServiceAccountAuth(creds, (err) => {
        doc.getInfo((err, info) => {
            sheet = info.worksheets[1];
            console.log('sheet', sheet)
            doc.getRows(sheet.id, {

            }, (err, rows) => {
                console.log(err);
                res.send(rows.map(row => {
                    const { program, cohort, name, email, module , sprint, day  } = row
                    return { program, cohort, name, email , module , sprint , day }

                }))
            })
        })

    });
});

module.exports = router;