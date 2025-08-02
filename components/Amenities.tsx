import Image from "next/image";
import React from "react";

const amenities = [
  {
    name: "Spacious car parking",
    image: "/amenities/car_parking.png",
  },
  {
    name: "Swimming Pool",
    image: "/amenities/swimming_pool.png",
  },
  {
    name: "State of the art gym",
    image: "/amenities/gym.png",
  },
  {
    name: "24/7 security",
    image: "/amenities/security.png",
  },
  {
    name: "Ground reception lobby",
    image: "/amenities/reception.png",
  },
  {
    name: "Clubhouse",
    image: "/amenities/clubhouse.png",
  },
  {
    name: "Passenger and cargo lift",
    image: "/amenities/lifts.png",
  },
  {
    name: "Corridors",
    image: "/amenities/corridors.png",
  },
];

const Amenities = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-[#FDF6F3] to-white w-full h-full pt-5 hidden lg:block ">
        <div className="bg-[#BD314C] h-1 w-[40vw] absolute mt-16"></div>
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-5xl  text-[#725054] font-gentium-plus mb-5 mt-10">
            Amenities
          </h1>
          <div className="flex flex-col items-center justify-center gap-10 py-15">
            <div className="flex flex-row items-center justify-between w-[50vw]">
              {amenities.slice(0, 4).map((amenity) => (
                <Image
                  src={amenity.image}
                  alt={amenity.name}
                  width={100}
                  height={100}
                  key={amenity.name}
                />
              ))}
            </div>
            <div className="flex flex-row items-center justify-between w-[50vw]">
              {amenities.slice(4, 8).map((amenity) => (
                <Image
                  src={amenity.image}
                  alt={amenity.name}
                  width={100}
                  height={100}
                  key={amenity.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-[#FDF6F3] to-white w-full h-full pb-10 md:hidden">
        <div className="bg-[#BD314C] h-1 w-[20vw] absolute mt-15.5"></div>
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-5xl  text-[#725054] font-gentium-plus mb-5 mt-10">
            Amenities
          </h1>
          <Image
            src="/Rectangle_mobile.png"
            alt="3bhk"
            className="w-full h-full object-cover"
            width={1000}
            height={1000}
          />
          <div className="flex flex-col items-center justify-center gap-10 py-10">
            <div className="flex flex-row items-center justify-between w-[70vw]">
              {amenities.slice(0, 2).map((amenity) => (
                <Image
                  src={amenity.image}
                  alt={amenity.name}
                  width={100}
                  height={100}
                  key={amenity.name}
                />
              ))}
            </div>
            <div className="flex flex-row items-center justify-between w-[70vw]">
              {amenities.slice(2, 4).map((amenity) => (
                <Image
                  src={amenity.image}
                  alt={amenity.name}
                  width={100}
                  height={100}
                  key={amenity.name}
                />
              ))}
            </div>
            <div className="flex flex-row items-center justify-between w-[70vw]">
              {amenities.slice(4, 6).map((amenity) => (
                <Image
                  src={amenity.image}
                  alt={amenity.name}
                  width={100}
                  height={100}
                  key={amenity.name}
                />
              ))}
            </div>
            <div className="flex flex-row items-center justify-between w-[70vw]">
              {amenities.slice(6, 8).map((amenity) => (
                <Image
                  src={amenity.image}
                  alt={amenity.name}
                  width={100}
                  height={100}
                  key={amenity.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Amenities;
