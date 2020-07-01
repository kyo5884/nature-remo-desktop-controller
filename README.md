# Natrue Remo Desktop Controller

Menubar / Tasktray app for [Nature Remo](https://en.nature.global/en/)

Developed with Vue and Electron

## Usage

⚠WIP⚠

1. Go to https://home.nature.global/
2. Login and allow access
3. Press `generate access token` and copy it
4. Start app. Config file will be opened in text editor
5. Paste it. Now your config file is like this:

```
{
	"api_token": "12345abcde..."
}
```

6. Restart app.

## Development

```bash
# Install Dependencies
yarn install

# Start Electron with hot reloading
yarn electron:serve

# Compiles and minifies for production,
# and generate installers in dist_electron directory
yarn electron:build
```

## License

MIT

## Author

kyo5884 - [kyo5884.com](https://kyo5884.com/)
