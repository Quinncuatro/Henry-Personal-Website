import React from "react"

let now = new Date();
let year = now.getFullYear();

export default () => (
  <div>
    <hr />
    <p>&copy; {year} Henry Quinn</p>
  </div>
)

