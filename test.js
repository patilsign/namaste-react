const restList = {
     data: [
       {
         img_url: "",
         restName: "KFC",
         cuisines: ["Burgers", "pizza", "chips", "finger chips"],
         deliveryTime: 30,
         avgRating: 4.5,
       },
       {
         img_url: "",
         restName: "Bavarchi",
         cuisines: ["Burgers", "pizza", "chips", "finger chips"],
         deliveryTime: 30,
         avgRating: 4.5,
       },
       {
         img_url: "",
         restName: "Paradice",
         cuisines: ["Burgers", "pizza", "chips", "finger chips"],
         deliveryTime: 30,
         avgRating: 4.5,
       },
       {
         img_url: "",
         restName: "DOminos",
         cuisines: ["Burgers", "pizza", "chips", "finger chips"],
         deliveryTime: 30,
         avgRating: 4.5,
       },
       {
         img_url: "",
         restName: "Manaco",
         cuisines: ["Burgers", "pizza", "chips", "finger chips"],
         deliveryTime: 30,
         avgRating: 4.5,
       },
       {
         img_url: "",
         restName: "Pizzahut",
         cuisines: ["Burgers", "pizza", "chips", "finger chips"],
         deliveryTime: 30,
         avgRating: 4.5,
       },
     ],
   };
img_url="https://b.zmtcdn.com/data/pictures/4/19982534/1e983c74000b2d5490e9d38baff441f5_featured_v2.jpg?output-format=webp"
restList.data.map( (resto,index) => {
     //console.log(index, resto);
     resto.img_url = img_url
});
console.log(restList.data);
