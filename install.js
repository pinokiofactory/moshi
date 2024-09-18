module.exports = {
  run: [
    // Edit this step with your custom install commands
    {
      method: "shell.run",
      params: {
        venv: "env",                // Edit this to customize the venv folder path
        message: [
          "conda install -y -c conda-forge rust",
          "{{platform === 'darwin' ? 'pip install moshi_mlx': 'pip install moshi'}}"
        ],
      }
    },
//    {
//      method: "fs.link",
//      params: {
//        venv: "env"
//      }
//    }
  ]
}

