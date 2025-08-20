import React from "react";

function FooLinks({
  title,
  l1,
  l2,
  l3,
  l4,
  l5,
  href1,
  href2,
  href3,
  href4,
  href5,
}) {
  return (
    <div className="col-6 col-lg-3">
      <div className="nav-column">
        <h6>{title}</h6>
        <nav className="footer-nav">
          <a href={href1}>{l1}</a>
          <a href={href2}>{l2}</a>
          <a href={href3}>{l3}</a>
          <a href={href4}>{l4}</a>
          <a href={href5}>{l5}</a>
        </nav>
      </div>
    </div>
  );
}

export default FooLinks;
