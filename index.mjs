import "dotenv/config";

import express from "express";

const app = express();

app.get("/", (request, response) => {
  return response.status(403).json({ message: "403 forbidden access" });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
