
import { serve } from "bun";
// Serve the public folder with your HTML file
serve({
  fetch(req) {
    return new Response(Bun.file("index.html"));
  },
  port: 3000, // Choose a port
});
