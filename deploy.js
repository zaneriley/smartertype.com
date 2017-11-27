const s3 = require("s3");
const CREDS = require("/Users/zaneriley/s3-creds.js");

const client = s3.createClient({
  maxAsyncS3: 20,     // this is the default
  s3RetryCount: 1,    // this is the default
  s3RetryDelay: 1000, // this is the default
  multipartUploadThreshold: 20971520, // this is the default (20 MB)
  multipartUploadSize: 15728640, // this is the default (15 MB)
  s3Options: {
    accessKeyId: CREDS.accessKeyId,
    secretAccessKey: CREDS.secretAccessKey,
    region: "us-west",
    s3BucketEndpoint: true,
    endpoint: "smartertype.com.s3-website-us-west-1.amazonaws.com"
    // endpoint: 's3.yourdomain.com',
    // sslEnabled: false
    // any other options are passed to new AWS.S3()
    // See: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html#constructor-property
  },
});

const params = {
  localDir: "out/static",
  deleteRemoved: true, // default false, whether to remove s3 objects
                       // that have no corresponding local file.
  s3Params: {
    Bucket: "smartertype.com",
    Prefix: "/out",
    // other options supported by putObject, except Body and ContentLength.
    // See: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#putObject-property
  }
};

const uploader = client.uploadDir(params);

uploader.on('error', function(err) {
  console.error("unable to sync:", err.stack);
});

uploader.on('progress', function() {
  console.log("progress", uploader.progressAmount, uploader.progressTotal);
});

uploader.on('end', function() {
  console.log("done uploading");
});