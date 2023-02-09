
const cheerio = require('cheerio');
const axios = require("axios");
//const { title } = require('process');

const URL = 'https://tengrinews.kz/';
const newses_data = [];

async function getNews(){
    try{
        const response = await axios.get(URL);
        const $=cheerio.load(response.data);

        var news= $('.tn-main-news-item');
        news.each( function(){
            title = $(this).find("span").text();
            img = $(this).find("div picture img").attr('src');
            time= $(this).find("ul li time").text();

            newses_data.push({title, img, time})
        });
        console.log(newses_data);
    }
    catch(error){
        console.error(error)
    }
}

getNews();