module.exports = {
  apps: [
    {
      name: "app",
      script: "server.js",
      env: {
        NODE_ENV: "production",
        // Add other environment variables here
      },
    },
  ],
};
