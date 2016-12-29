# gmail-selfie
Gmail Selfie is a tool for producing a personal archive of your gmail experience. When run, it uses a headless browser to log into your gmail, take a screenshot of your inbox, and upload the resulting image to S3. It is intended to be run via cron multiple times per day over an extended period of time.

IMPORTANT: This tool doesn't support two-factor authorization and is wildly insecure unless used responsibly.

![gmail-selfie](https://marcdacosta.github.io/gmail-selfie-2.gif)

### Requirements
- `node-js` runtime
- `aws-sdk` node library
- `phantomjs` runtime 
- `Amazon AWS` API key and S3 bucket (optional)


### Instructions
  - Update the following variables with your information  
  `scrape.js/GMAIL-LOGIN`  
  `scrape.js/GMAIL-PWD`  
  `gmail-selfie.js/aws_accessKeyId`  
  `gmail-selfie.js/aws_secretAccessKey`  
  `gmail-selfie.js/aws_s3bucket`
  
  - Run the script `node gmail-selfie.js`
  - Repeat (via cron or other scheduler)

