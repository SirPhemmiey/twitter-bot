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
        }
    
    }
    else {
        console.log(err)
    }
})