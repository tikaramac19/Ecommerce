import React, { useState } from "react";
import "./pagination.scss";
const Pagination = ({ count, activePage, onChangeHandler }) => {
  const [active, setActive] = useState(activePage);
  const [limit, setLimit] = useState(10);

  const pageArray = Array(Math.floor(count / limit))
    .fill("")
    .map((_, index) => index + 1);

  return (
    <>
      <div className="pagination">
        <div className="forward">
          <button onClick={() => setActive(active === 1 ? active : active - 1)}>
            Previous
          </button>
        </div>
        <div className="pagenumber">
          {active < 5
            ? pageArray.slice(0, 5).map((page, indx) => {
                return (
                  <>
                    <span key={indx.toString()}>
                      <button
                        onClick={() => {
                          onChangeHandler(page);
                          setActive(page);
                        }}
                        className={`${page === active ? "active" : ""}`}
                      >
                        {page}
                      </button>
                    </span>
                  </>
                );
              })
            : pageArray.slice(0, 2).map((page, indx) => {
                return (
                  <>
                    <span key={indx.toString()}>
                      <button
                        onClick={() => {
                          onChangeHandler(page);
                          setActive(page);
                        }}
                        className={`${page === active ? "active" : ""}`}
                      >
                        {page}
                      </button>
                    </span>
                  </>
                );
              })}

          <div>...</div>
          {active >= 5 &&
            active <= Math.floor(count / limit) - 4 &&
            pageArray
              .slice(Math.floor(active - 2), Math.floor(active + 1))
              .map((page) => {
                return (
                  <>
                    <span>
                      <button
                        onClick={() => {
                          onChangeHandler(page);
                          setActive(page);
                        }}
                        className={`${page === active ? "active" : ""}`}
                      >
                        {page}
                      </button>
                    </span>
                  </>
                );
              })}
          <div>...</div>

          {active > Math.floor(pageArray.length) - 4
            ? pageArray
                .slice(pageArray.length - 5, pageArray.length)
                .map((page, index) => {
                  return (
                    <>
                      <span>
                        <button
                          onClick={() => {
                            onChangeHandler(page);
                            setActive(page);
                          }}
                          className={`${page === active ? "active" : ""}`}
                        >
                          {page}
                        </button>
                      </span>
                    </>
                  );
                })
            : pageArray
                .slice(pageArray.length - 2, pageArray.length)
                .map((page, index) => {
                  return (
                    <>
                      <span>
                        <button
                          onClick={() => {
                            onChangeHandler(page);
                            setActive(page);
                          }}
                          className={`${page === active ? "active" : ""}`}
                        >
                          {page}
                        </button>
                      </span>
                    </>
                  );
                })}
        </div>
        <div className="backward">
          <button onClick={(e) => setActive(active + 1)}>Next</button>
        </div>
      </div>
    </>
  );
};

export default Pagination;
