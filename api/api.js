export default function (req, res) {
  res.setHeader("Content-Type", "text/html");
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Music Server</title>
        <style>
          body, html {
            height: 100%;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
						text-align: center;
						background-color:  #181818;
          }
					.gradient-text{
						background: linear-gradient(90deg, #ff7e5f, #feb47b);
						background-clip: text;
						-webkit-background-clip: text;
						-webkit-text-fill-color: transparent;
						}
        </style>
      </head>
      <body>
        <h1 class="gradient-text">
					Hello World! This is the root for all my projects APIs.
				</h1>
      </body>
    </html>
  `);
}
