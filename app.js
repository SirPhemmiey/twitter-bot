const Twitter = require('twitter');
const config = require('./config/config');
const T = new Twitter(config);

//set up your params
const params = {
    q: '#nodejs',
    count: 10,
    result_type: 'recent',
    lang: 'en'
}

T.get('search/tweets', params, function(err, data, response) {
    if (!err) {
        //do something magical here
        //loop through the results
        for (let i = 0; i < data.statuses.length; i++) {
            //get the id of each tweet
            let id = {
                id: data.statuses[i]
            }
            //try to mark the results favourite
            T.post('favorite/create', id, function(err, response) {
                //if the fav fails log the err
                if (err) {
                    console.log(err[0].message);
                }
                else {
let username = response.user.screen_name;
let tweet_id = response.id_str;
console.log('Favorited', `https://twitter.com/${username}/status/${tweet_id}`)

                }
            })
        }
    
    }
    else {
        console.log(err)
    }
})