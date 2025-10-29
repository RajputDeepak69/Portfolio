import json, boto3, os
ses = boto3.client('ses', region_name=os.environ.get('AWS_REGION', 'us-east-1'))
SENDER = os.environ.get('SENDER_EMAIL', '100rajpootking100@gmail.com')
RECIPIENT = os.environ.get('RECIPIENT_EMAIL', 'feb29deepak@gmail.com')
def lambda_handler(event, context):
    try:
        body = event.get('body') or ''
        if event.get('isBase64Encoded'):
            import base64
            body = base64.b64decode(body).decode('utf-8')
        data = json.loads(body) if isinstance(body, str) and body.strip().startswith('{') else {}
        email = data.get('email')
        message = data.get('message','')
        if not email:
            return {'statusCode':400, 'body':'Missing email'}
        subj = f"Portfolio contact from {email}"
        text = f"From: {email}\n\nMessage:\n{message}"
        response = ses.send_email(Source=SENDER, Destination={'ToAddresses':[RECIPIENT]}, Message={'Subject':{'Data':subj}, 'Body':{'Text':{'Data':text}}})
        return {'statusCode':200, 'body': json.dumps({'messageId': response.get('MessageId')})}
    except Exception as e:
        return {'statusCode':500, 'body': str(e)}