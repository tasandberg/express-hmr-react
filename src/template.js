function htmlPage() {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <title>Bbsteps Yall</title>
      </head>
      <body>
        <div id="root"></div>
        <script type="text/javascript" src="vendor.bundle.js"></script>
        <script type="text/javascript" src="reactHot.bundle.js"></script>
        <script type="text/javascript" src="app.bundle.js"></script>
      </body>
    </html>
  `
}

module.exports = htmlPage
