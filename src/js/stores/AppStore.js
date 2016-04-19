var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var AppAPI = require('../utils/appAPI.js');
var AppConstants = require('../constants/AppConstants');
var AppDispatcher = require('../dispatcher/AppDispatcher');

var CHANGE_EVENT = 'change';


var _results = [];
var _searchText = '';


var AppStore = assign({}, EventEmitter.prototype, {

    getSearchText: function() {
        return _searchText;
    },

    setSearchText: function(search) {
        _searchText = search.text;
    },

    getResults: function() {
        return _results;
    },

    setResults: function(results) {
        _results = results;
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
        this.on('change', callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    }

});


AppDispatcher.register(function(payload) {

    var action = payload.action;

    switch (action.actionType) {

        case AppConstants.SEARCH_TEXT:
            console.log("Searching text ...");

            // API interaction
            AppAPI.searchText(action.search);

            // Update search results in views
            AppStore.setSearchText(action.search);

            // emit changes
            AppStore.emit(CHANGE_EVENT);
            break;

        case AppConstants.RECEIVE_RESULTS:
            AppStore.setResults(action.results);

            // emit changes
            AppStore.emit(CHANGE_EVENT);
            break;

    }

    return true;

});


module.exports = AppStore;
