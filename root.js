export default function GET(request) {
  const { res } = request; // Ensure response object is correctly referenced
  res.setHeader("Content-Type", "text/html");
  res.send(`
  <!DOCTYPE html>
  <html>
	<head>
	  <title>Backend APIs</title>
	  <style>
		body, html {
		  height: 100%;
		  margin: 0;
		  display: flex;
		  justify-content: center;
		  align-items: center;
		  text-align: center;
		  background-color: #181818;
		  display: flex;
		  flex-direction: column;
		}
		.gradient-text {
		  background: linear-gradient(90deg, #ff7e5f, #feb47b);
		  background-clip: text;
		  -webkit-background-clip: text;
		  -webkit-text-fill-color: transparent;
		}
		a,
		.green {
		  text-decoration: none;
		  color: hsla(160, 100%, 37%, 1);
		  transition: 0.4s;
		  padding: 3px;
		}

		@media (hover: hover) {
		  a:hover {
			background-color: hsla(160, 100%, 37%, 0.2);
		  }
		}
	  </style>
	</head>
	<body>
	  <h1 class="gradient-text">
		Hello World! Welcome to my Backend API.
	  </h1>
	</body>
  </html>
`);
}
