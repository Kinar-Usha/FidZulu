const AWS = require('aws-sdk');
const async = require('async');
require('dotenv').config();
// Configure your AWS credentials
AWS.config.update({
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  });

const docClient = new AWS.DynamoDB.DocumentClient();


const jsonData =[
    {
      "productId": 2001,
      "productName": "Lego Classic Bricks Set",
      "productDescription": "A creative set of colorful Lego bricks for building various structures.",
      "price": 29.99,
      "rating": 4.8,
      "recommendedAge": "6+",
      "manufacturer": "Lego",
      "material": "Plastic",
      "imageUrl": "https://m.media-amazon.com/images/I/81QTjlln0xL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      "productId": 2002,
      "productName": "Barbie Dreamhouse",
      "productDescription": "A dreamhouse for Barbie and her friends to live and play in style.",
      "price": 99.99,
      "rating": 4.5,
      "recommendedAge": "3+",
      "manufacturer": "Mattel",
      "material": "Plastic",
      "imageUrl": "https://dvh1deh6tagwk.cloudfront.net/finder-au/wp-uploads/2020/10/Barbie-Dreamhouse_Supplied_1800x1000.jpg"
    },
    {
      "productId": 2003,
      "productName": "Hot Wheels 10-Car Pack",
      "productDescription": "A set of 10 Hot Wheels cars for exciting racing adventures.",
      "price": 14.99,
      "rating": 4.7,
      "recommendedAge": "3+",
      "manufacturer": "Mattel",
      "material": "Die-cast Metal",
      "imageUrl": "https://m.media-amazon.com/images/I/81KH1eRZuQL.jpg"
    },
    {
      "productId": 2004,
      "productName": "Nerf N-Strike Elite Blaster",
      "productDescription": "A high-powered Nerf blaster for epic foam dart battles.",
      "price": 24.99,
      "rating": 4.6,
      "recommendedAge": "8+",
      "manufacturer": "Hasbro",
      "material": "Plastic",
      "imageUrl": "https://m.media-amazon.com/images/I/81QTjlln0xL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      "productId": 2005,
      "productName": "LEGO Star Wars Millennium Falcon",
      "productDescription": "Build the iconic Millennium Falcon from Star Wars with LEGO bricks.",
      "price": 149.99,
      "rating": 4.9,
      "recommendedAge": "9+",
      "manufacturer": "Lego",
      "material": "Plastic",
      "imageUrl": "https://m.media-amazon.com/images/I/71xOILhwQgL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      "productId": 2006,
      "productName": "Paw Patrol Ultimate Rescue Fire Truck",
      "productDescription": "Join the Paw Patrol pups on rescue missions with this fire truck playset.",
      "price": 39.99,
      "rating": 4.4,
      "recommendedAge": "3+",
      "manufacturer": "Spin Master",
      "material": "Plastic",
      "imageUrl": "https://i5.walmartimages.com/asr/6f157c27-bcc4-4ead-badd-99580deafca6_1.ee6a497f4d52cf6d0cb3157be593ef0d.jpeg"
    },
    {
      "productId": 2007,
      "productName": "My Little Pony Pinkie Pie Plush",
      "productDescription": "A soft and huggable Pinkie Pie plush toy for My Little Pony fans.",
      "price": 19.99,
      "rating": 4.2,
      "recommendedAge": "3+",
      "manufacturer": "Hasbro",
      "material": "Plush",
      "imageUrl": "https://www.hexir.com/product_images/import/toy/toy_plush_MLP_OF_PinkiePie_12in_1.jpg"
    },
    {
      "productId": 2008,
      "productName": "Transformers Optimus Prime Figure",
      "productDescription": "Lead the Autobots with this action figure of Optimus Prime from Transformers.",
      "price": 34.99,
      "rating": 4.8,
      "recommendedAge": "6+",
      "manufacturer": "Hasbro",
      "material": "Plastic",
      "imageUrl": "https://www.hexir.com/product_images/import/toy/toy_plush_MLP_OF_PinkiePie_12in_1.jpg"
    },
    {
      "productId": 2009,
      "productName": "Dora the Explorer Adventure Backpack",
      "productDescription": "Explore with Dora using her adventure backpack and accessories.",
      "price": 12.99,
      "rating": 4.1,
      "recommendedAge": "3+",
      "manufacturer": "Nickelodeon",
      "material": "Plastic",
      "imageUrl": "https://www.hexir.com/product_images/import/toy/toy_plush_MLP_OF_PinkiePie_12in_1.jpg"
    },
    {
      "productId": 2010,
      "productName": "LEGO Friends Heartlake City Amusement Park",
      "productDescription": "Visit the Heartlake City Amusement Park with LEGO Friends mini-dolls.",
      "price": 79.99,
      "rating": 4.7,
      "recommendedAge": "7+",
      "manufacturer": "Lego",
      "material": "Plastic",
      "imageUrl": "https://example.com/toys/2010"
    },
    {
      "productId": 2011,
      "productName": "Play-Doh Creative Fun Set",
      "productDescription": "Unleash your creativity with this Play-Doh set featuring various colors.",
      "price": 9.99,
      "rating": 4.3,
      "recommendedAge": "2+",
      "manufacturer": "Hasbro",
      "material": "Play-Doh",
      "imageUrl":"https://www.hexir.com/product_images/import/toy/toy_plush_MLP_OF_PinkiePie_12in_1.jpg"
    },
    {
      "productId": 2012,
      "productName": "Fisher-Price Little People Farm Playset",
      "productDescription": "Explore farm life with this interactive Little People playset.",
      "price": 24.99,
      "rating": 4.0,
      "recommendedAge": "1+",
      "manufacturer": "Fisher-Price",
      "material": "Plastic",
      "imageUrl": "https://www.hexir.com/product_images/import/toy/toy_plush_MLP_OF_PinkiePie_12in_1.jpg"
    },
    {
      "productId": 2013,
      "productName": "Hot Wheels Monster Trucks 5-Pack",
      "productDescription": "Collect five cool monster trucks for thrilling races and stunts.",
      "price": 19.99,
      "rating": 4.6,
      "recommendedAge": "3+",
      "manufacturer": "Mattel",
      "material": "Die-cast Metal",
      "imageUrl": "https://www.hexir.com/product_images/import/toy/toy_plush_MLP_OF_PinkiePie_12in_1.jpg"
    },
    {
      "productId": 2014,
      "productName": "Baby Alive Sweet Tears Baby Doll",
      "productDescription": "Care for the Baby Alive doll that cries real tears and has interactive features.",
      "price": 29.99,
      "rating": 4.4,
      "recommendedAge": "3+",
      "manufacturer": "Hasbro",
      "material": "Plastic",
      "imageUrl": "https://www.hexir.com/product_images/import/toy/toy_plush_MLP_OF_PinkiePie_12in_1.jpg"
    },
    {
      "productId": 2015,
      "productName": "LEGO Technic Porsche 911 GT3 RS",
      "productDescription": "Build a detailed replica of the Porsche 911 GT3 RS with LEGO Technic.",
      "price": 299.99,
      "rating": 4.9,
      "recommendedAge": "3+",
      "manufacturer": "Lego",
      "material": "Plastic",
      "imageUrl": "https://m.media-amazon.com/images/I/81QTjlln0xL._AC_UF1000,1000_QL80_.jpg"
      }
  ]

// DynamoDB table name
const tableName = 'fz_toys';

// Function to upload data to DynamoDB
function uploadToDynamoDB(item, callback) {
  const params = {
    TableName: tableName,
    Item: item,
  };

  docClient.put(params, (err, data) => {
    if (err) {
      console.error('Error:', err);
    } else {
      console.log('Uploaded:', item.productId);
    }

    callback(err, data);
  });
}

// Use the async library to upload the data in parallel
async.each(
  jsonData,
  uploadToDynamoDB,
  (err) => {
    if (err) {
      console.error('One or more items failed to upload.');
    } else {
      console.log('All items uploaded successfully.');
    }
  }
);
