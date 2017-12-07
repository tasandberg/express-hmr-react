export default function(appString) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <title>Bbsteps Yall</title>
        <link rel='stylesheet' type='text/css' href='assets/style.css' />
      </head>
      <body>
        <div id="root">${appString}</div>
        <script type="text/javascript" src="assets/vendor.js"></script>
        <script type="text/javascript" src="assets/app.js"></script>
      </body>
    </html>
  `
}
