import * as cdk from '@aws-cdk/core';
import { Bucket, IBucket } from '@aws-cdk/aws-s3';
import { BucketDeployment, Source } from '@aws-cdk/aws-s3-deployment';
import { Distribution } from '@aws-cdk/aws-cloudfront';
import * as origins from '@aws-cdk/aws-cloudfront-origins';

export class CdkWorkshopStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create S3 bucket
    const cdkWorkshopS3Bucket : IBucket = new Bucket(this, 'CdkWorkshopWebsiteBucket', {
      bucketName: 'cdk-workshop-website-bucket'
    });

    // Upload file 1 to the bucket above
    const imageRose = new BucketDeployment(this, 'DeployFiles', {
      sources: [Source.asset('./files/images')],
      destinationBucket: cdkWorkshopS3Bucket
    });

    // Create a CloudFront distribution
    const cloudFrontDistribution = new Distribution(this, 'CdkWorkshopCloudFrontDistribution', {
      defaultBehavior: { origin: new origins.S3Origin(cdkWorkshopS3Bucket) },
    });
  }
}
