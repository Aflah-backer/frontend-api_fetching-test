import React from "react";
import useFetch from "../../hooks/useFetch";
import "./style.scss";

function Card() {
  const { data, loading } = useFetch(
    "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts"
  );
    const clickHandler = () => {}
  return (
    <div>
      {loading ? (
        <h1>loading</h1>
      ) : (
        <>
            <div className="wrapper">
          {data.map((item, index) => (
              <div className="card" key={item.id}>
                <div className="img-wrapper">
                <img
                  src={item.thumbnail.large}
                  alt="##"
                  className="card__img"
                  />
                  <h4 className="card-text" onClick={()=>clickHandler(item?.id)}>Learn More</h4>
                  </div>
                <div className="card__body">
                  <h2 className="card__title">{item.title}</h2>
                  <p className="card__content">{item.content}</p>
                  <div className="author-sec">
                    <img className="author-avatar" src={item.author.avatar}/>
                    <p className="author-name">{item.author.name}</p>
                  </div>
                </div>
              </div>
          ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
