const awsConfig = {
  Auth: {
    region: 'YOUR_AWS_REGION',                   // e.g., 'ap-south-1'
    userPoolId: 'YOUR_USER_POOL_ID',             // e.g., 'ap-south-1_xxx'
    userPoolWebClientId: 'YOUR_APP_CLIENT_ID',   // e.g., 'abcd1234'
  }
};

export default awsConfig;
