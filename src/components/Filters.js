import React from "react";
import arrow from "img/svg/arrow.svg";
import storageBed from "img/storage-bed.webp";
import twinBed from "img/twin-bed.webp";
import kidsBed from "img/kids-bed.webp";
import { useState } from "react";
import Results from "components/Results";
import black from "img/bed-large/black.webp";

const Filters = () => {
  const [sortState, setSortState] = useState(`best`);
  const [allFilters, setAllFilters] = useState({
    type: [],
    color: [],
    ratings: 0,
  });

  const filterChange = (event) => {
    console.log("Filter Event", event);

    let filterName = event.target.name;

    let filterValue = event.target.value;
    let checked = event.target.checked;

    if (filterName === `type`) {
      if (checked) {
        setAllFilters({
          ...allFilters,
          type: [...allFilters.type, filterValue],
        });
      } else {
        setAllFilters({
          ...allFilters,
          type: allFilters.type.filter((type) => type !== filterValue),
        });
      }
    } else if (filterName === `color`) {
      if (checked) {
        setAllFilters({
          ...allFilters,
          color: [...allFilters.color, filterValue],
        });
      } else {
        console.log("IN HERE WE BREAK");
        setAllFilters({
          ...allFilters,
          color: allFilters.color.filter((color) => color !== filterValue),
        });
      }
    } else if (filterName === `rating`) {
      if (!event.target.disabled) {
        setAllFilters({
          ...allFilters,
          ratings: Number(filterValue),
        });
      }
    }
  };

  return (
    <main className="products">
      <header className="heading">
        <h1>Products</h1>
        <a href="#" className="main-button dialog">
          <svg
            className="filters-icon"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs></defs>
            <title />
            <g data-name="Layer 2" id="Layer_2">
              <path d="M28,9H11a1,1,0,0,1,0-2H28a1,1,0,0,1,0,2Z" />
              <path d="M7,9H4A1,1,0,0,1,4,7H7A1,1,0,0,1,7,9Z" />
              <path d="M21,17H4a1,1,0,0,1,0-2H21a1,1,0,0,1,0,2Z" />
              <path d="M11,25H4a1,1,0,0,1,0-2h7a1,1,0,0,1,0,2Z" />
              <path d="M9,11a3,3,0,1,1,3-3A3,3,0,0,1,9,11ZM9,7a1,1,0,1,0,1,1A1,1,0,0,0,9,7Z" />
              <path d="M23,19a3,3,0,1,1,3-3A3,3,0,0,1,23,19Zm0-4a1,1,0,1,0,1,1A1,1,0,0,0,23,15Z" />
              <path d="M13,27a3,3,0,1,1,3-3A3,3,0,0,1,13,27Zm0-4a1,1,0,1,0,1,1A1,1,0,0,0,13,23Z" />
              <path d="M28,17H25a1,1,0,0,1,0-2h3a1,1,0,0,1,0,2Z" />
              <path d="M28,25H15a1,1,0,0,1,0-2H28a1,1,0,0,1,0,2Z" />
            </g>
            <g id="frame">
              <rect className="cls-1" height="32" width="32" />
            </g>
          </svg>
          <p>Filters</p>
        </a>

        <form className="filters-large">
          <details>
            <summary>
              Filters
              <img src={arrow} alt="Filters down arrow" width="24" />
            </summary>

            <label htmlFor="sort">Sort by</label>
            <select
              name="sort"
              id="sort"
              aria-label="sort"
              onChange={(e) => setSortState(e.target.value)}
            >
              <option value="best">Best match</option>
              <option value="low">Price: low to high</option>
              <option value="high">Price: high to low</option>
              <option value="ratings">Ratings</option>
            </select>

            <div className="filter-options-large" onInput={filterChange}>
              <div className="type">
                <h4>Type</h4>
                <ol className="filter-list-large">
                  <li>
                    <div className="option">
                      <input
                        type="checkbox"
                        name="type"
                        value="storage"
                        id="storageBeds"
                        aria-label="Storage Beds"
                      />
                      <label
                        htmlFor="storageBeds"
                        className="custom-check type"
                      >
                        <img src={storageBed} alt="" />
                        <p>Storage Beds</p>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="option">
                      <input
                        type="checkbox"
                        name="type"
                        value="twin"
                        id="twinBeds"
                        aria-label="Twin Beds"
                      />
                      <label htmlFor="twinBeds" className="custom-check type">
                        <img src={twinBed} alt="Twin bed" />
                        <p>Twin Beds</p>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="option">
                      <input
                        type="checkbox"
                        name="type"
                        value="full"
                        id="fullBeds"
                      />
                      <label htmlFor="fullBeds" className="custom-check type">
                        <img src={black} alt="Black full bed" />
                        <p>Full Beds</p>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="option">
                      <input
                        type="checkbox"
                        name="type"
                        value="kids"
                        id="kidsBeds"
                        aria-label="Beds for kids"
                      />
                      <label htmlFor="kidsBeds" className="custom-check type">
                        <img src={kidsBed} alt="Kids' bed" />
                        <p>Kids' Beds</p>
                      </label>
                    </div>
                  </li>
                </ol>
              </div>
              <div className="color">
                <h4>Color</h4>
                <ul className="filter-list-large">
                  <li>
                    <div className="option">
                      <input
                        type="checkbox"
                        name="color"
                        value="black"
                        id="colBlack"
                        aria-label="Black colour"
                      />

                      <label htmlFor="colBlack" className="custom-check color">
                        <img
                          title="Black"
                          src="https://images.unsplash.com/photo-1550684376-efcbd6e3f031?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMjUyNjA5OQ&ixlib=rb-1.2.1&q=80&w=400"
                          alt="Black color"
                        />
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="option">
                      <input
                        type="checkbox"
                        name="color"
                        value="white"
                        id="colWhite"
                        aria-label="White color"
                      />
                      <label htmlFor="colWhite" className="custom-check color">
                        <img
                          title="White"
                          src="https://images.unsplash.com/photo-1533628635777-112b2239b1c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMjUyNjI2Mw&ixlib=rb-1.2.1&q=80&w=400"
                          alt="white color"
                        />
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="option">
                      <input
                        type="checkbox"
                        name="color"
                        value="grey"
                        id="colGrey"
                        aria-label="Grey color"
                      />
                      <label htmlFor="colGrey" className="custom-check color">
                        <img
                          title="Grey"
                          src="https://images.unsplash.com/photo-1523878288860-7ad281611901?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMjUyNjc0NA&ixlib=rb-1.2.1&q=85"
                          alt="grey color"
                        />
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="option">
                      <input
                        type="checkbox"
                        name="color"
                        value="beige"
                        id="colBeige"
                        aria-label="Beige color"
                      />
                      <label htmlFor="colBeige" className="custom-check color">
                        <img
                          title="Beige"
                          src="https://images.unsplash.com/photo-1528458909336-e7a0adfed0a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMjUyNjc5Mw&ixlib=rb-1.2.1&q=80&w=400"
                          alt="beige color"
                        />
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="ratings-bar">
                <h4>Ratings (above)</h4>
                <ol className="ratings-list">
                  <li>
                    <label className="custom-radio">
                      <input
                        type="radio"
                        name="rating"
                        value="4"
                        aria-label="Ratings with 4 stars"
                      />

                      <span className="material-icons-round star-rate">
                        {" "}
                        star{" "}
                      </span>
                      <span className="material-icons-round star-rate">
                        {" "}
                        star{" "}
                      </span>
                      <span className="material-icons-round star-rate">
                        {" "}
                        star{" "}
                      </span>
                      <span className="material-icons-round star-rate">
                        {" "}
                        star{" "}
                      </span>
                    </label>
                  </li>
                  <li>
                    <label className="custom-radio">
                      <input
                        type="radio"
                        name="rating"
                        value="3"
                        aria-label="Ratings with 3 stars"
                      />
                      <span className="material-icons-round star-rate">
                        {" "}
                        star{" "}
                      </span>
                      <span className="material-icons-round star-rate">
                        {" "}
                        star{" "}
                      </span>
                      <span className="material-icons-round star-rate">
                        {" "}
                        star{" "}
                      </span>
                    </label>
                  </li>

                  <li>
                    <label className="custom-radio">
                      <input
                        type="radio"
                        name="rating"
                        value="2"
                        aria-label="Ratings with 2 stars"
                      />
                      <span className="material-icons-round star-rate">
                        {" "}
                        star{" "}
                      </span>
                      <span className="material-icons-round star-rate">
                        {" "}
                        star{" "}
                      </span>
                    </label>
                  </li>

                  <li>
                    <label className="custom-radio">
                      <input
                        type="radio"
                        name="rating"
                        value="1"
                        aria-label="Ratings with 1 star"
                      />
                      <span className="material-icons-round star-rate">
                        {" "}
                        star{" "}
                      </span>
                    </label>
                  </li>
                </ol>
              </div>
            </div>
          </details>
        </form>
      </header>
      <Results sortOptions={sortState} allFilters={allFilters} />
    </main>
  );
};

export default Filters;

// mobile filters -- fix later

{
  /* <div id="popup1" className="overlay">
        <div className="popup">
          <h2>
            Filters
            <span>
              <a className="close" href="#">
                &times;
              </a>
            </span>
          </h2>

          <div className="content">
            <form name="filters" className="filters-2">
              <div className="filter-options-small">
                <div className="type">
                  <h4>Type</h4>
                  <ol className="filter-list-large">
                    <li>
                      <div className="option">
                        <input
                          type="checkbox"
                          name="type"
                          value="storage"
                          id="storageBeds"
                        />
                        <label
                          htmlFor="storageBeds"
                          className="custom-check type"
                        >
                          Beds with Storage
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="option">
                        <input
                          type="checkbox"
                          name="type"
                          value="twin"
                          id="twinBeds"
                        />
                        <label htmlFor="twinBeds" className="custom-check type">
                          Twin Beds
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="option">
                        <input
                          type="checkbox"
                          name="type"
                          value="full"
                          id="fullBeds"
                        />
                        <label htmlFor="fullBeds" className="custom-check type">
                          Full Beds
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="option">
                        <input
                          type="checkbox"
                          name="type"
                          value="kids"
                          id="kidsBeds"
                        />
                        <label htmlFor="kidsBeds" className="custom-check type">
                          Kids Beds
                        </label>
                      </div>
                    </li>
                  </ol>
                </div>
                <div className="color">
                  <h4>Color</h4>
                  <ul className="filter-list-large">
                    <li>
                      <div className="option">
                        <input
                          type="checkbox"
                          name="color"
                          value="black"
                          id="colBlack"
                        />

                        <label
                          htmlFor="colBlack"
                          className="custom-check color"
                        >
                          <img
                            title="Black"
                            src="https://images.unsplash.com/photo-1550684376-efcbd6e3f031?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMjUyNjA5OQ&ixlib=rb-1.2.1&q=80&w=400"
                            alt="Black color"
                          />
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="option">
                        <input
                          type="checkbox"
                          name="color"
                          value="white"
                          id="colWhite"
                        />
                        <label
                          htmlFor="colWhite"
                          className="custom-check color"
                        >
                          <img
                            title="White"
                            src="https://images.unsplash.com/photo-1533628635777-112b2239b1c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMjUyNjI2Mw&ixlib=rb-1.2.1&q=80&w=400"
                            alt="white color"
                          />
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="option">
                        <input
                          type="checkbox"
                          name="color"
                          value="grey"
                          id="colGrey"
                        />
                        <label htmlFor="colGrey" className="custom-check color">
                          <img
                            title="Grey"
                            src="https://images.unsplash.com/photo-1523878288860-7ad281611901?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMjUyNjc0NA&ixlib=rb-1.2.1&q=85"
                            alt="grey color"
                          />
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="option">
                        <input
                          type="checkbox"
                          name="color"
                          value="beige"
                          id="colBeige"
                        />
                        <label
                          htmlFor="colBeige"
                          className="custom-check color"
                        >
                          <img
                            title="Beige"
                            src="https://images.unsplash.com/photo-1528458909336-e7a0adfed0a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMjUyNjc5Mw&ixlib=rb-1.2.1&q=80&w=400"
                            alt="beige color"
                          />
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="ratings-bar">
                  <h4>Ratings (above)</h4>
                  <ol>
                    <li>
                      <label className="custom-radio">
                        <input type="radio" name="rating" value="4" />

                        <span className="material-icons-round star-rate">
                          star
                        </span>
                        <span className="material-icons-round star-rate">
                          star
                        </span>
                        <span className="material-icons-round star-rate">
                          star
                        </span>
                        <span className="material-icons-round star-rate">
                          star
                        </span>
                      </label>
                    </li>
                    <li>
                      <label className="custom-radio">
                        <input type="radio" name="rating" value="3" />
                        <span className="material-icons-round star-rate">
                          star
                        </span>
                        <span className="material-icons-round star-rate">
                          star
                        </span>
                        <span className="material-icons-round star-rate">
                          star
                        </span>
                      </label>
                    </li>

                    <li>
                      <label className="custom-radio">
                        <input type="radio" name="rating" value="2" />
                        <span className="material-icons-round star-rate">
                          star
                        </span>
                        <span className="material-icons-round star-rate">
                          star
                        </span>
                      </label>
                    </li>

                    <li>
                      <label className="custom-radio">
                        <input type="radio" name="rating" value="1" />
                        <span className="material-icons-round star-rate">
                          star
                        </span>
                      </label>
                    </li>
                  </ol>
                </div>
              </div>
              <button type="submit" value="submit">
                Apply
              </button>
            </form>
          </div>
        </div>
      </div>
   
    */
}
