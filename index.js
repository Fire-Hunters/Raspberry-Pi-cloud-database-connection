import fs from 'fs';
import { gonder } from './mail.js';
import { update } from './update.js';


const islem = () => {
    fs.readFile('durum.txt', 'utf-8', async function (err, data) {
        console.log(Date.now)
        if (err) throw err;
        if (String(data) == 1) {
            await gonder()
            await update(data)
        }
        else {
            await update(data)
        }
    });
}

setInterval(islem,10000)
