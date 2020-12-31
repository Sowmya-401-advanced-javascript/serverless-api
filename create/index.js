'use strict';

const uuid = require('uuid').v4;
const peopleModel = require('./people.schema');

exports.handler = async (event) => {
    const { height, nice, names } = JSON.parse(event.body);

    const id = uuid();

    try {
        const record = new peopleModel({ id, height, nice, names });
        const data = await record.save();

        return {
            statusCode: 200,
            body: JSON.stringify(data)
        }

    } catch (e) {
        return {
            statusCode: 500,
            response: e.message
        }
    }

};