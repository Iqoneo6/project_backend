module.exports = {
  apps: [
    {
      name: 'Pm2',
      script: 'server.js',
      instances: 'max', // Or a specific number
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        // Add other environment variables if needed
      }
    }
  ]
};
