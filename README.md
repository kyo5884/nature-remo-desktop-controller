# Natrue Remo Desktop Controller

![dark](https://user-images.githubusercontent.com/286439/86510243-067ccc00-be29-11ea-839a-d3765faf3289.png)
![light](https://user-images.githubusercontent.com/286439/86510244-0977bc80-be29-11ea-83f5-0dc51a656b7d.png)

![Build/release](https://github.com/kyo5884/nature-remo-desktop-controller/workflows/Build/release/badge.svg?branch=master)

Menubar / Tasktray app for [Nature Remo](https://en.nature.global/en/)

Developed with Vue and Electron

## Usage

⚠WIP⚠ This project is currently developing and may not work correctly.  

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
