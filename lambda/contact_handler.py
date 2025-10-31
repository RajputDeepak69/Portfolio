import json
import boto3
import os
import base64

ses = boto3.client('ses', region_name=os.environ.get('AWS_REGION', 'us-east-1'))

SENDER = os.environ.get('SENDER_EMAIL', '100rajpootking100@gmail.com')
RECIPIENT = os.environ.get('RECIPIENT_EMAIL', 'feb29deepak@gmail.com')

def lambda_handler(event, context):
    try:
        print("Received event:", json.dumps(event))

        body = event.get('body', '')

        if event.get('isBase64Encoded'):
            body = base64.b64decode(body).decode('utf-8')

        try:
            data = json.loads(body)
        except json.JSONDecodeError:
            data = {}

        email = data.get('email')
        message = data.get('message', '')

        cors_headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST',
            'Access-Control-Allow-Headers': 'Content-Type'
        }

        if event.get("requestContext", {}).get("http", {}).get("method") == "OPTIONS":
            return {
                'statusCode': 200,
                'headers': cors_headers,
                'body': json.dumps({'message': 'CORS preflight OK'})
            }

        if not email:
            return {
                'statusCode': 400,
                'headers': cors_headers,
                'body': json.dumps({'error': 'Missing email'})
            }

        subject = f"Portfolio contact from {email}"
        text_body = f"From: {email}\n\nMessage:\n{message}"

        response = ses.send_email(
            Source=SENDER,
            Destination={'ToAddresses': [RECIPIENT]},
            Message={
                'Subject': {'Data': subject},
                'Body': {'Text': {'Data': text_body}}
            }
        )

        return {
            'statusCode': 200,
            'headers': cors_headers,
            'body': json.dumps({
                'message': 'Email sent successfully',
                'messageId': response.get('MessageId')
            })
        }

    except Exception as e:
        print("Error:", str(e))
        return {
            'statusCode': 500,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS,POST',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': json.dumps({'error': str(e)})
        }
