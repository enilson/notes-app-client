const config = {
 /*  s3: {
    REGION: "YOUR_S3_UPLOADS_BUCKET_REGION",
    BUCKET: "YOUR_S3_UPLOADS_BUCKET_NAME",
  }, */
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://2yoyn13fkc.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_shEHJc493",
    APP_CLIENT_ID: "og3gq7jdobma086jnlucm3tc3",
    IDENTITY_POOL_ID: "us-east-1:5683fec1-fb4e-4c10-8dde-ab749401bab8",
  },
};

export default config;