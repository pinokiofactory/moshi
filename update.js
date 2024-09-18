module.exports = {
  run: [{
    method: "shell.run",
    params: {
      venv: "env",
      message: "{{platform === 'darwin' ? 'pip install -U moshi_mlx': 'pip install -U moshi'}}"
    }
  }]
}
