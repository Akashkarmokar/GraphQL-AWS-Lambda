/**
 * Import External Libraries
 */
import { APIGatewayProxyEvent, Handler } from 'aws-lambda'



/**
 * Import Internal Libraries
 */


export const handler:Handler = async (event: APIGatewayProxyEvent) => {
  console.log(event)
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v3.0! Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };
};
