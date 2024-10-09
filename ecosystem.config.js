
module.exports = {
  apps: [
    {
      name: "Project_Backend",
      script: "server.js",
      watch: true,
      node_args: "--max_old_space_size=16000",
      // log: "./log/combined.outerr0.log",
      // output: "log/pm2/out.log",
      // error: "log/pm2/error.log",
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
      },
<<<<<<< HEAD
      env_production: {
        NODE_ENV: "production",
        PORT: 5050,
        exec_mode: "cluster_mode",
      }
    }, 
    // {
    //   name: 'worker',
    //   script: 'worker.js'
    // }
=======
      log_date_format: "YYYY-MM-DD HH:mm:ss",
    },
>>>>>>> 7ceb599ad412801be5a46ced7262ee9710698de5
  ],
  logrotate: {
    enabled: true,
    // Rotate logs daily
    rotateInterval: "0 0 * * *",
    // Keep 30 days of logs
    retain: "30",
    // Log files path
    filePath: "log/pm2",
    // Compress rotated logs
    compress: true,
  },
};
