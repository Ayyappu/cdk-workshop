import { ABSENT, expect as expectCDK, haveResource } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as CdkWorkshop from '../lib/cdk-workshop-stack';

// npm run build && npx jest

test('S3 bucket is created', () => {
  const app = new cdk.App();
  const stack = new CdkWorkshop.CdkWorkshopStack(app, 'MyTestStack');
  expectCDK(stack).to(haveResource('AWS::S3::Bucket', {
    BucketName: 'cdk-workshop-website-bucket',
    ShouldNotExist: ABSENT
  }));
});

test('CloudFront Distribution is created', () => {
  const app = new cdk.App();
  const stack = new CdkWorkshop.CdkWorkshopStack(app, 'MyTestStack');
  expectCDK(stack).to(haveResource('AWS::CloudFront::Distribution'));
});

test('CloudFront OriginAccessIdentity is created', () => {
  const app = new cdk.App();
  const stack = new CdkWorkshop.CdkWorkshopStack(app, 'MyTestStack');
  expectCDK(stack).to(haveResource('AWS::CloudFront::CloudFrontOriginAccessIdentity'));
}); 