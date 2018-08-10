'use strict';

const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs')
const URL = 'https://qiita.com/organizations/dotstudio/activities';

axios.get(URL)
    .then((response) => {
        const html = response.data;
        const html_parse = cheerio.load(html);
        const content = html_parse('.media').text(); 
        let articlelist = [];
        html_parse('.media').each(function(i, elem){
            articlelist[i] = {
                title: html_parse(this).find('div.ItemLink__title').text(),
                date: html_parse(this).find('div.ItemLink__info').text(),
                URL: html_parse(this).children('.ItemLink').attr('.data-item-url'),
                author: html_parse(this).find('div.ItemLink__info>a').text(),
                like: html_parse(this).find('ul.ItemLink__status>li').text(),
            }
        });
        console.log(articlelist[0]);

        const articlelistTrimmed = articlelist.filter(n => n != undefined)
        fs.writeFile('articlelist.json',
            JSON.stringify(articlelistTrimmed, null, 4),
            (err) => console.log('File successfully written!'))

    }).catch((err) => {
        console.log('err:',err);
    });
