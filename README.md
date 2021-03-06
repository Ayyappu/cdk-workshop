# Welcome to your CDK TypeScript project!

You should explore the contents of this project. It demonstrates a CDK app with an instance of a stack (`CdkWorkshopStack`)
which contains an Amazon SQS queue that is subscribed to an Amazon SNS topic.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template

## Steps

* Clone the repo
* npm i
* npm run watch
* Update **[default]** profile in **.aws\credentials** file
* cdk bootstrap
* cdk synth
* cdk diff
* cdk deploy

# Releases

## [v2.0 - Static hosted S3 Bucket through CloudFront](https://github.com/Ayyappu/cdk-workshop/releases/tag/v2.0)

- Added an S3 bucket
- Uploaded files into the bucket
- Created CloudFront Distribution
- Created CloudFront Origin Access Identity
- Deploy this stack by running cdk deploy
- After deployment, load <CloudFrontDomainName>/rose.jpg in the browser. This will load the file, from S3 bucket, in the browser

## [v1.1 - Lambda and API Gateway are created](https://github.com/Ayyappu/cdk-workshop/releases/tag/v1.1)

After deploy, get the API Gateway url from the console output and run `curl <url>/abc` in bash.

Output: **Hello, CDK! You've hit /abc.**
