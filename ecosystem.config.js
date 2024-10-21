module.exports = {
  apps: [
    {
      name: "Project_backend",
      script: "server.js",
      // watch: true,
      node_args: "--max_old_space_size=16000",
      log: "./log/combined.outerr0.log",
      output: "./log/pm2/out.log",
      error: "./log/pm2/error.log",
      ignore_watch: [
        "log",
        "log/",
        ".node-gyp",
        ".node-gyp/",
        ".pm2",
        ".pm2/",
        "public",
        "public/",
        "xml_file/*",
      ],
      env: {
        NODE_ENV: "production", // Note: "env" instead of "env_prod"
        PORT:5000,
        exec_mode : "cluster"

      },
      log_date_format: "YYYY-MM-DD HH:mm:ss",
    },
  ],
  logrotate: {
    enabled: true,
    // Rotate logs daily
    rotateInterval: "0 0   *",
    // Keep 30 days of logs
    retain: "30",
    // Log files path
    filePath: "log/pm2",
    // Compress rotated logs
    compress: true,
  },
};