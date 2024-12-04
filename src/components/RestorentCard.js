const RestorentCard = (props) => {
     const { restName, avgRating, cuisines, img_url, deliveryTime } =
       props.restData;
     return (
       <div className="res-card">
         <img alt="res-img" src={img_url}></img>
         <h4>{restName}</h4>
         <h5>{avgRating}</h5>
         <h5>{deliveryTime}</h5>
         <h5>{cuisines.join(" ")}</h5>
       </div>
     );
   };

   export default RestorentCard