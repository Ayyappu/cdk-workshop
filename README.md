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

## [v1.1](https://github.com/Ayyappu/cdk-workshop/releases/tag/v1.1)

Lambda and API Gateway are created (Unit tests are updated)

After deploy, get the API Gateway url from the console output and run `curl <url>/abc` in bash.

Output: **Hello, CDK! You've hit /abc.**

## [v1.0](https://github.com/Ayyappu/cdk-workshop/releases/tag/v1.0)

Lambda and API Gateway are created

After deploy, get the API Gateway url from the console output and run `curl <url>/abc` in bash.

Output: **Hello, CDK! You've hit /abc.**
