'use strict';

const peopleModel = require('./people.schema');

exports.handler = async (event) => {
    const id = event.pathParameters.id;
    console.log('__id__', id);

    try {
        let data;

        if(id) {
            const list = await peopleModel.query('id').eq(id).limit(1).exec();
            data = list;
        } else {
            data = await peopleModel.scan().exec();
        }
        return {
            statusCode: 200, 
            body: JSON.stringify(data),
        };
    } catch (e) {
        return {
            statusCode: 500,
            response: JSON.stringify(e)
        }
    }
};