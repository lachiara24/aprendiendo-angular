module.exports = {
    packages: {
      // `package.json > module` points to a non-existent file (`./ngx-qrcode2.js`).
      // Override it to point to the correct file. 
      'ngx-qrcode2': {
        entryPoints: {
          '.': {
            override: {
              module: './index.js',
            },
          },
        },
      },
    },
  };