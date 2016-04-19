/**
 * Main application
 */


var React = require('react');

// Flux elements
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

// Components
var SearchForm = require('./SearchForm.jsx');
var SearchResults = require('./SearchResults.jsx');


function getAppState() {
    return {
        searchText: AppStore.getSearchText(),
        results: AppStore.getResults()
    };
}


var App = React.createClass({

    getInitialState: function() {
        return getAppState();
    },

    componentDidMount: function() {
        AppStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        AppStore.removeChangeListener(this._onChange);
    },

    // Update view state when change is received
    _onChange: function() {
        this.setState(getAppState());
    },

    render: function() {
        return (
            <div>
                <SearchForm />
                <SearchResults searchText={this.state.searchText} results={this.state.results} />
            </div>
        );
    }

});

module.exports = App;
