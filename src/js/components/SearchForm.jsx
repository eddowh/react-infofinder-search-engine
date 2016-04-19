/**
 * Search form.
 */


var React = require('react');

// Flux elements
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');


var SearchForm = React.createClass({

    searchText: function(e) {
        e.preventDefault();

        var search = {
            text: this.refs.text.value.trim()
        };

        AppActions.searchText(search);
    },


    render: function() {
        return (
            <div>
                <form onSubmit={this.searchText} className="well">
                    <div className="form-group">
                        <label>Search for something...</label>
                        <input type="text" className="form-control" ref="text" />
                    </div>
                </form>
            </div>
        );
    }

});

module.exports = SearchForm;
