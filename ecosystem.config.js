module.exports = {
  apps : [{
    name: "cosmo-grocery",
    script: "npm",
    args: "run serve",
    time: true,
    watch: false,
    ignore_watch: ['node_modules', 'vite.config.js', 'index.lock'],
  }],
  exec_mode: "fork"
}
