import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Details() {
  const [newsData, setNewsData] = useState(null);
  const params = useParams();

  const fetchDetails = async (id) => {
    const { data } = await axios(`http://hn.algolia.com/api/v1/items/${id}`);
    setNewsData(data);
  };

  useEffect(() => {
    fetchDetails(params.objectId);
  }, [params]);

  return (
    <div className="detail">
      {newsData ? (
        <>
          <p className="title">
            {newsData.title}
            <a
              href={newsData.url}
              className={"url"}
              target="_blank"
              rel="noreferrer"
            >{`(${newsData.url})`}</a>
          </p>
          <p className="stats">
            <span className="stat">{newsData.points}</span>
            <span className="stat" style={{ margin: "0px 10px" }}>
              |
            </span>
            <span className="stat">{newsData.author}</span>
            <span className="stat" style={{ margin: "0px 10px" }}>
              |
            </span>
            <span className="stat">
              {moment(newsData.created_at, "YYYYMMDD").fromNow()}
            </span>
          </p>
          <p
            style={{
              fontWeight: "bold",
            }}
          >
            Comments
          </p>
          {newsData.children.map((comment) => (
            <div className="comment">
              <p
                dangerouslySetInnerHTML={{ __html: comment?.text }}
                className="title"
              ></p>
              <p className="stats">
                <span className="stat">{comment.author}</span>
                <span className="stat" style={{ margin: "0px 10px" }}>
                  |
                </span>
                <span className="stat">
                  {moment(comment.created_at, "YYYYMMDD").fromNow()}
                </span>
              </p>
            </div>
          ))}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
