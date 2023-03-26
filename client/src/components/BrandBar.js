import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Button, ButtonGroup, Card, ListGroup, Row} from "react-bootstrap";

const BrandBar = observer( () => {
  const {device} = useContext(Context)

  return (
    <ButtonGroup>
      {device.brands.map((brand) =>
        <Button
          style={{cursor: "pointer"}}
          key={brand.id}
          active={brand.id === device.selectedBrand.id}
          onClick={() => device.setSelectedBrand(brand)}
        >
          {brand.name}
        </Button>
      )}
    </ButtonGroup>
  );
});

export default BrandBar;