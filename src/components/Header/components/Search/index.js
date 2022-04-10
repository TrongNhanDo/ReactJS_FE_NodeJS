import React, { useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const [keyword, setKeyword] = useState("");
  let navigate = useNavigate();
  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/medicines/${keyword}`);
    } else {
      navigate("/medicines");
    }
  };

  return (
    <Fragment>
      <div className="formSearch">
        <form className="searchBox" onSubmit={searchSubmitHandler}>
          <input
            type="text"
            placeholder="Tìm kiếm một sản phẩm..."
            onChange={(e) => setKeyword(e.target.value)}
          />
          <label>
            <input type="submit" value={""}/>
            <svg
              class="SearchBox_search-icon__2TMqQ"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M18.129 17.1715L15.2645 14.3709L15.1973 14.2688C15.0725 14.1445 14.9018 14.0745 14.7237 14.0745C14.5455 14.0745 14.3748 14.1445 14.25 14.2688C11.8156 16.5021 8.06447 16.6235 5.48435 14.5524C2.90423 12.4814 2.29574 8.86049 4.06242 6.09116C5.8291 3.32183 9.42274 2.26339 12.4601 3.6178C15.4974 4.9722 17.0359 8.31917 16.0552 11.439C15.9846 11.6644 16.0423 11.9095 16.2066 12.082C16.371 12.2545 16.6169 12.3282 16.8519 12.2753C17.0868 12.2224 17.2751 12.0509 17.3457 11.8255C18.518 8.12322 16.7475 4.13898 13.1794 2.45023C9.61143 0.761484 5.31671 1.87504 3.07356 5.07053C0.830408 8.26602 1.312 12.5845 4.20679 15.2323C7.10159 17.8801 11.5408 18.0626 14.6528 15.6618L17.1891 18.1414C17.451 18.3964 17.8745 18.3964 18.1364 18.1414C18.3981 17.8829 18.3981 17.4665 18.1364 17.2079L18.129 17.1715Z"
                fill="#112950"
              ></path>
            </svg>
          </label>
        </form>
      </div>
    </Fragment>
  );
};

export default Search;
