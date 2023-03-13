import React from "react";
import user from "../data/user";

function Links() {
  return (
    <div id="links">
      <h3>Links</h3>
      <a href= {user.links.github}>https://github.com/liza</a>
      <a href= {user.links.linkedin}>https://www.linkedin.com/in/liza/</a>
    </div>
  );
}

export default Links;