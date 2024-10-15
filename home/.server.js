import express from "express"
const app = express()
const port = 3000

// Define a simple route
app.get("/", (_req, res) => {
  res.send("Hello World!")
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
