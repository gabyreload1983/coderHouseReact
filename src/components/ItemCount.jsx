import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  useEffect(() => {
    if (stock) {
      setCount(initial);
    } else {
      setCount(0);
    }
  }, []);

  const increment = () => {
    if (count < stock) setCount(count + 1);
  };

  const decrement = () => {
    if (count > initial) setCount(count - 1);
  };

  return (
    <ButtonGroup className="w-100">
      <Button
        variant="outline-danger"
        size="sm"
        onClick={decrement}
        disabled={count === initial || stock === 0 ? true : false}
      >
        -
      </Button>
      <span className="p-2 border">{count}</span>
      <Button
        variant="outline-success"
        size="sm"
        onClick={increment}
        disabled={count === stock ? true : false}
      >
        +
      </Button>

      <Button
        variant="outline-primary"
        size="sm"
        onClick={() => onAdd(count)}
        disabled={stock ? false : true}
      >
        Agregar al carrito
      </Button>
    </ButtonGroup>
  );
}

export default ItemCount;
