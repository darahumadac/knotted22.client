import { faL } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const getVenues = async () => {
  const response = await fetch("http://localhost:5190/api/venues");
  const data = await response.json();
  return data;
};

const Venues = () => {
  const [venues, setVenues] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getVenues()
      .then((venues) => {
        // console.log(venues);
        setVenues(venues);
      })
      .catch((err) => {
        return `something went wrong: ${err}`;
      })
      .finally(() => setLoading(false));
  }, []);

  {
    if (isLoading) {
      return (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="object-fit-cover spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      );
    }
  }

  return (
    <div className="mt-2 row row-cols-1 row-cols-md-2 g-4">
      {venues.map((venue) => {
        const { id, name, description } = venue;
        return (
          <div key={id} className="col">
            <div className="card">
              <img
                src="https://placehold.co/150x100?text=image+not+found"
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">
                  {description ||
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, sit!"}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Venues;
