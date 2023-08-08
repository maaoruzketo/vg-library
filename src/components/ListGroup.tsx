import { MouseEvent } from "react";

function ListGroup() {
  let items = ["Tokyo", "Beirut", "Stockton", "London", "Austin"];
  //items = [];

  //   const getMessage = () => {
  //     items.length === 0 ? <p>No Item found</p> : null;
  //   };

  //Event Handler
  const handleClick = (event: MouseEvent) =>  console.log(event);

  

  return (
    <>
      <h1>List</h1>

      {/* {items.length === 0 ? <p>No Item found</p> : null} */}
      {items.length === 0 && <p>No Item found</p>}

      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
