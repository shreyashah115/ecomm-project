import React from "react";
import { useState } from "react";
import { Pagination as PaginationANTD } from "antd";
import "antd/dist/antd.css";

const Pagination = ({ productLength }) => {
  const [currPage, setCurrPage] = useState(1);
  const pageSize = 6;

  const updatePage = (page) => {
    if (page < 0) 
      setCurrPage(1)
    else if (page > totalPages) 
      setCurrPage(totalPages)
    else 
      setCurrPage(page)
  }

  console.log(productLength);
  return (
    <nav aria-label="Pagination" className="pagination">
  
      <PaginationANTD defaultCurrent={currPage} total={productLength} defaultPageSize={pageSize} onChange={(page) => setCurrPage(page)} />
      {/* <p>1-6 of {productLength} products found</p>*/}
    </nav>
  );
};

export default Pagination;
