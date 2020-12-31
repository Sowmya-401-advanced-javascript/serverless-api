'use strict';

const peopleModel = require('./people.schema');

exports.handler = async (event) => {
    const id = event.pathParameters.id;
    console.log('__id__', id);
    const { height, nice, names } = JSON.parse(event.body);


    if (!id) {
        return {
            statusCode: 500,
            response: "An id is required"
        };
    }

    try {
        let record = { 
            height, 
            nice, 
            names,
        };
        // const record = new peopleModel({ id, height, nice, names });
        const data = await peopleModel.update({'id': id}, record);

        return {
            statusCode: 200,
            body: JSON.stringify(data)
        }

    } catch (error) {
        return {
            statusCode: 500,
            response: e.message
        }
    }

};

