import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import "./style.scss";

function Card() {
  const [modal, setModal] = useState(false);
  const [result,setResult] = useState()
  const { data, loading } = useFetch(
    "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts"
  );
  const clickHandler = (data) => {
    setModal(true);
    setResult(data)
  };
  return (
    <div>
      {loading ? (
        <h1 className="loading">Loading...</h1>
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
                  <button onClick={() => clickHandler(item)} className='card-btn'>
                    Learn More
                  </button>
                  {modal === true && (
                    <div className="backShadow">
                      <div className="custom-modal">
                        <div
                          className="delete-icon"
                          onClick={() => setModal(false)}
                        >
                          x
                        </div>
                        <img src={result.thumbnail.small} alt="###" className="modal-img"/>
                        <h2>{result.title}</h2>
                        <br />
                        <p>{result.content}</p>
                        <br />
                        <div className="modal-author">
                        <img className="author-avatar" alt="###" src={result.author.avatar} />
                        <p className="author-name">{result.author.name}-{result.author.role}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="card__body">
                  <h2 className="card__title" onClick={() => clickHandler(item)} >{item.title}</h2>
                  <p className="card__content">{item.content}</p>
                  <div className="author-sec">
                    <img className="author-avatar" alt="" src={item.author.avatar} />
                    <p className="author-name">{item.author.name}-{item.author.role}</p>
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
