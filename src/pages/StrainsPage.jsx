import axios from "axios";
import { useState, useEffect,  } from "react";
import { Link, useNavigate } from "react-router-dom";
import heart from "../assets/images/heart1.png";


const StrainsPage = () => {
  const [strainsArray, setStrainsArray] = useState([]);
  const navigate = useNavigate()
  
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/strains`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
      .then((axiosResponse) => {
        console.log(axiosResponse.data);
        setStrainsArray(axiosResponse.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main>
      <h1>Strains</h1>
      {strainsArray.map((strains) => {
        return (
          <>
            <Link to={`/strains/${strains.id}`}>
              <p>{strains.strain}</p>
              <img src={strains.imgThumb} />
            </Link>

            <img
              className="heart"
              src={heart}
              // onClick={() => {
              //   axios
              //     .post(
              //       `http://localhost:3001/strains/${strains.id}/add-favorite`,
              //       null,
              //       {
              //         headers: {
              //           authorization: `Bearer ${localStorage.getItem(
              //             "authToken"
              //           )}`,
              //         },
              //       }
              //     )

              //     .then((response) => {
              //     navigate("/profile")
              //     console.log(response.data);
              //     })
              //     .catch((err) => console.log(err));
              // }}
            />
          </>
        );
      })}
      {/* {strainsArray.map(strains  => {
                return <StrainsDetailsPage key={strains._id}></StrainsDetailsPage>
                    
            })} */}
    </main>
  );
};

export default StrainsPage;
