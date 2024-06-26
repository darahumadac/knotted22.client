import { faL } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const fetchVenues = async () => {
  try {
    const response = await fetch("http://localhost:5190/api/venues");
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};

const Venues = () => {
  const [venues, setVenues] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  const getVenues = () => {
    setErr(null);
    setLoading(true);

    fetchVenues()
      .then((venues) => {
        // console.log(venues);
        setVenues(venues);
      })
      .catch((err) => {
        setErr(err);
      })
      .finally(() => setLoading(false));
  };

  useEffect(getVenues, []);

  if (err) {
    return (
      <div className="d-flex justify-content-center align-items-center align-middle mt-5">
        <div className="d-block text-center">
          <p className="h1 fw-bold">Uh oh!</p>
          <p className="fs-4">An error occurred. Please try again</p>
          <button
            type="button"
            className="btn btn-outline-primary rounded-pill mt-2"
            onClick={getVenues}
          >
            <span className="d-inline-block px-2 text-center">OK</span>
          </button>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="object-fit-cover spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
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
