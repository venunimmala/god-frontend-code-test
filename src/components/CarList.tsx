import React from "react";
import Slider from "react-slick";
import CarouselButtons from "./CarouselButtons";
import CardComponent from "./Card";
import settings from "../common/Utils";

export interface Car {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
}

interface Cars {
  carsList: any;
  slideRef: any;
  selectedCar : any;
}
const CarListComponent: React.FC<Cars> = ({ carsList, slideRef , selectedCar }) => {

  const searchCar = carsList.filter((car: { bodyType: any; }) => car.bodyType == selectedCar);
  const carArray = selectedCar ? searchCar : carsList;
  return (
    <>
      <Slider ref={slideRef} {...settings}>
        {carArray.map((car: Car, index: number) => {
          return (
            <CardComponent
              key={index}
              id={car.id}
              modelName={car.modelName}
              bodyType={car.bodyType}
              modelType={car.modelType}
              imageUrl={car.imageUrl}
            />
          );
        })}
      </Slider>
      <CarouselButtons slideRef={slideRef} />
    </>
  );
};

export default CarListComponent;