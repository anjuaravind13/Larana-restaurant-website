import axios from "axios";
import React, { useEffect, useState } from "react";
import "./SearchByLetter.css";
import { button, div } from "framer-motion/client";

function SearchByLetter() {
  const [data, setData] = useState([]);
  const [letter, setLetter] = useState("a");

 
  useEffect(() => {
    if (!letter) return;

    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
      .then((result) => {
        setData(result.data.meals || []); 
      })
      .catch((err) => {
        console.error(err);
      });
  }, [letter]);

  
  const changeLetter = (newLetter) => {
    setLetter(newLetter);
  };

  return (
    <div className="menu-for-searchbyletter">
     
      <div className="letters">
        <h3>Browse Meals from Our Wide Variety of Food</h3>
        <h2>
          {Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)).map(
            (char) => (
              <button
                key={char}
                className={`letter-button ${letter === char.toLowerCase() ? "active" : ""}`}
                onClick={() => changeLetter(char.toLowerCase())}
              >
                {char}
              </button>
            )
          )}
        </h2>
      </div>

      {/* Meals List Section */}
      <div className="searchList">
        {data.length > 0 ? (
          data.map((obj) => (
            <div key={obj.idMeal} className="searchListDetails">
              <img src={obj.strMealThumb} alt={obj.strMeal} />
              <div>
                <h3>{obj.strMeal}</h3>
                <h5>{obj.strCategory}</h5>
                <p>{obj.strArea}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">No meals found for "{letter.toUpperCase()}".</p>
        )}
      </div>
    </div>
  );
}

export default SearchByLetter;




// import axios from "axios";
// import { data, div } from "framer-motion/client";
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "./SearchByLetter.css"

// function SearchByLetter() {
//   const [data, setData] = useState([]);
//   const [letter,setLetter] =useState("a")
 
//   useEffect(() => {
//     if(!letter) return;
//     axios
//       .get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
//       .then((result) => {
//         console.log(result);
//         setData(result.data.meals);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [letter]);

//   function changeLetter() {
//     setLetter("id");
    
//   }

//   return (
//     <div className="menu-for-searchbyletter">
//       <div className="letters" id="letters">
//         <h3>Browse Meals Our wide Variety of Food</h3>
//         <br />
//         <h2>

//           <a href="">A</a> /
//           <a id="b" href="" onClick={changeLetter}>B</a> /
//           <a href="">C</a> /<a href="">D</a>{" "}
//           /<a href="">E</a> /<a href="">F</a> /<a href="">G</a> /
//           <a href="">H</a> /<a href="">I</a> /<a href="">J</a> /<a href="">K</a>{" "}
//           /<a href="">L</a> /<a href="">M</a> /<a href="">N</a> /
//           <a href="">O</a> /<a href="">P</a> /<a href="">Q</a> /<a href="">R</a>{" "}
//           /<a href="">S</a> /<a href="">T</a> /<a href="">U</a> /
//           <a href="">V</a> /<a href="">W</a> /<a href="">X</a> /<a href="">Y</a>{" "}
//           /<a href="">Z</a>
//         </h2>
//       </div>


{/* <div>
  {
    alpha.map((l)=>{

      return(
        <button onClick={()=>{changeLetter(l)}}>{l}</button>
      )
    })
  }
</div> */}

//       <div className="searchList">
//         {data.map((obj, index) => {
//           return (
//             <div key={obj?.idMeal} className="searchListDetails">
//               <img src={obj?.strMealThumb} alt="" />
//               <div>
//               <h3>{obj?.strMeal}</h3>
//               <h5>{obj?.strCategory}</h5>
//               <p>{obj?.strArea}</p>
//               </div>
              
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default SearchByLetter;
