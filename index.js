import fs from 'fs';
import {gonder} from './mail.js';
import {insert} from './insert.js';

fs.readFile('durum.txt', 'utf-8',async function (err, data) {

    if (err) throw err;
    if (String(data) == 1) {
    // await   gonder()
insert()
    }
});