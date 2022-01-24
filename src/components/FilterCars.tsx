import React from "react";
import {SelectInput, View} from "vcc-ui";
import CarListComponent from "./CarList";
import {Car} from './CarList';

interface SearchProps {
  cars : any;
  slideRef : any;
}

const FilterCars: React.FC<SearchProps> = ({ cars , slideRef}) => {
  const [selectedCar, setSelectedCar] = React.useState('');

  return (
   <>
    <View>
    <SelectInput className="selectDropdown"
      style={{
        marginBottom: "4rem",
        width: "40%",
        display : 'flex',
        justifyContent : 'center'
      }}
      value={selectedCar}
      name="filter"
      label="Filer by model"
      onChange={(e) => setSelectedCar(e.target.value)}
    >
      {cars.map((car : Car, i : number) => <option value={car.bodyType} key={i}>{car.id}</option>)}
      
    </SelectInput>
    </View>
    <CarListComponent carsList={cars} selectedCar={selectedCar} slideRef={slideRef} />
    </>
  );
};

export default FilterCars;