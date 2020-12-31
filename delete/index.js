'use strict';

const peopleModel = require('./people.schema');

exports.handler = async (event) => {
    const id = event.pathParameters.id;
  

    if (!id) {
        return {
            statusCode: 500,
            response: "An id is required"
        };
    }

    try {
        // const record = new peopleModel({ id, height, nice, names });
        const data = await peopleModel.delete({'id': id});
        console.log('__Deleted__', data);

        return {
            statusCode: 200,
            body: 'This data no longer exists!'
        };

    } catch (error) {
        return {
            statusCode: 500,
            response: e.message
        }
    }

};