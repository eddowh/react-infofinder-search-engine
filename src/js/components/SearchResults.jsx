/**
 * Search results.
 */


var React = require('react');

// Flux elements
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

// Subcomponents
var Result = require('./Result.jsx');


var SearchResults = React.createClass({

    render: function() {

        var results_header = (this.props.searchText != '')
            ? <h2 className="page-header">Results for <b><i>{this.props.searchText}</i></b></h2>
            : ''

        return (
            <div>
                {results_header}
                {
                    this.props.results.map(function(result, i) {
                        if (result.Name) {
                            var category_title = <h3><u>{result.Name}</u></h3>
                            return [category_title].concat(result.Topics.map(function(subresult, j) {
                                return <Result result={subresult} key={j} />
                            }));
                        } else {
                            return <Result result={result} key={i} />;
                        }
                    })
                }
            </div>
        );
    }

});

module.exports = SearchResults;
