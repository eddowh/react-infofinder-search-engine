var AppActions = require('../actions/AppActions');


function create_duckduckgo_api_url(search_text, format = 'json', pretty = true) {
    base_url = 'http://api.duckduckgo.com/';
    return base_url + '?q=' + search_text + '&format=' + format + '&pretty=' + (pretty === true ? 1 : 0);
}

module.exports = {

    searchText: function(search) {
        console.log("API searching for: " + search.text);

        url = create_duckduckgo_api_url(search.text);

        $.ajax({
            url: url,
            dataType: 'jsonp',
            cache: false,
            success: function(data) {
                AppActions.receiveResults(data.RelatedTopics);
            }.bind(this),
            error: function(xhr, status, err) {
                console.log(err)
            }.bind(this)
        });
    }

}
