'use strict'

module.exports.healthcheck = (event, context, callback) => {
  // the response syntax with statuscode and a body conforms to what API Gateway expects
  const response = {
    statusCode: 200,
    body: 'Go Serverless v1.0! Your function executed successfully!'
  }

  callback(null, response)

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
}
