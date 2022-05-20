import React from "react";
import { Link } from "react-router-dom";

export default function List({ news }) {
  return (
    <div style={{ paddingTop: "10px" }}>
      {news?.map((item) => (
        <div key={item.objectID}>
          {item && item.title ? (
            <div className="row">
              <Link to={`hn/${item.objectID}`}>
                <p className="title">
                  {item.title}
                  <a
                    href={item.url}
                    className={"url"}
                    target="_blank"
                    rel="noreferrer"
                  >{`(${item.url})`}</a>
                </p>
                <p className="stats">
                  <span className="stat">{item.points}</span>
                  <span className="stat"> | </span>
                  <span className="stat">{item.author}</span>
                  <span className="stat"> | </span>
                  <span className="stat">{item.num_comments} comments</span>
                </p>
              </Link>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
