import * as React from "react";

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = (props) => {
  return (
    <div className="fixed top-0 bg-blue-400 w-full h-20 py-3">
      <div className="container m-auto text-center">
        <h1 className="text-white">this is a Header</h1>
      </div>
    </div>
  );
};

export default Header;
