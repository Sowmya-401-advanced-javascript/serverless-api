'use strict';

const dynamoose = require('dynamoose');

const peopleSchema = new dynamoose.Schema({
    'id': String,
    'height': Number,
    'nice': { type:Boolean, default: true},
    'names': {
        "type": Array,
        "schema": [String]
    }
});

module.exports = dynamoose.model('people', peopleSchema);