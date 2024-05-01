import React from "react";

const PageTitle = ({ Title }) => {
  return (
    <div>
      <h1 className="text-3xl font-extrabold py-5"> {Title.title}</h1>
    </div>
  );
};

export default PageTitle;
