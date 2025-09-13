import React from "react";
import { Link } from "react-router-dom";
// import cities from "../utils/TopCities.json";
import { useState } from "react";

const cities = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Hyderabad",
  "Ahmedabad",
  "Chennai",
  "Kolkata",
  "Surat",
  "Pune",
  "Jaipur",
  "Lucknow",
  "Kanpur",
  "Nagpur",
  "Indore",
  "Thane",
  "Bhopal",
  "Visakhapatnam",
  "Pimpri & Chinchwad",
  "Patna",
  "Vadodara",
  "Ghaziabad",
  "Ludhiana",
  "Agra",
  "Nashik",
  "Faridabad",
  "Meerut",
  "Rajkot",
  "Kalyan & Dombivali",
  "Vasai Virar",
  "Varanasi",
  "Srinagar",
  "Aurangabad",
  "Dhanbad",
  "Amritsar",
  "Navi Mumbai",
  "Allahabad",
  "Ranchi",
  "Haora",
  "Coimbatore",
  "Jabalpur",
  "Gwalior",
  "Vijayawada",
  "Jodhpur",
  "Madurai",
  "Raipur",
  "Kota",
  "Guwahati",
  "Chandigarh",
  "Solapur",
  "Hubli and Dharwad",
  "Bareilly",
  "Moradabad",
  "Karnataka",
  "Gurgaon",
  "Aligarh",
  "Jalandhar",
  "Tiruchirappalli",
  "Bhubaneswar",
  "Salem",
  "Mira and Bhayander",
  "Thiruvananthapuram",
  "Bhiwandi",
  "Saharanpur",
  "Gorakhpur",
  "Guntur",
  "Bikaner",
  "Amravati",
  "Noida",
  "Jamshedpur",
  "Bhilai Nagar",
  "Warangal",
  "Cuttack",
  "Firozabad",
  "Kochi",
  "Bhavnagar",
  "Dehradun",
  "Durgapur",
  "Asansol",
  "Nanded Waghala",
  "Kolapur",
  "Ajmer",
  "Gulbarga",
  "Jamnagar",
  "Ujjain",
  "Loni",
  "Siliguri",
  "Jhansi",
  "Ulhasnagar",
  "Nellore",
  "Jammu",
  "Sangli Miraj Kupwad",
  "Belgaum",
  "Mangalore",
  "Ambattur",
  "Tirunelveli",
  "Malegoan",
  "Gaya",
  "Jalgaon",
  "Udaipur",
  "Maheshtala",
];
function RestaurentsNearMe() {
  const [text, settext] = useState("");
  // const [city, setcity] = useState(cities)
  const handleFilter = (e) => {
    settext(e.target.value);
  };

  const filterCities = cities.filter((city, index) =>
    city.toLowerCase().includes(text.toLowerCase())
  );

  return (
    <>
      <div className="container m-5">
        <input
          type="text"
          className="form-control  "
          id="restaurentsearch"
          value={text}
          placeholder="Search for your City......."
          onChange={handleFilter}
        />

        <div className="container pt-3 mt-3">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {filterCities.map((city, index) => (
              <div className="container-sm" key={index}>
                <div className="list-group">
                  <Link
                    to="*"
                    className="list-group-item list-group-item-action p-3 m-1 content1"
                    aria-current="true"
                  >
                    {city}
                    <span> &rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default RestaurentsNearMe;
