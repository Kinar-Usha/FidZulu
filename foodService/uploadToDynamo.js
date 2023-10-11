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


const jsonData = [
  {
    "productId": 2001,
    "productName": "Oreo",
    "productDescription": "Creamier Inside",
    "price": 100.00,
    "rating": 4.5,
    "dateOfManufacture": "27-08-2022",
    "bestBefore": "27-08-2023",
    "calories": 405,
    "vegetarian": true,
    "imageUrl": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.walmart.ca%2Fen%2Fip%2FOreo-Original-Sandwich-Cookies-270G%2F6000202891572&psig=AOvVaw07ZStAnZRvI_Ig9rNxmyv5&ust=1697044187143000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCJjIsrL864EDFQAAAAAdAAAAABAG"
  },
  {
    "productId": 1,
    "productName": "Spaghetti Bolognese",
    "productDescription": "Classic Italian pasta with rich tomato and meat sauce.",
    "price": 12.99,
    "rating": 4.7,
    "dateOfManufacture": "2023-10-05",
    "bestBefore": "2023-11-05",
    "calories": 550,
    "vegetarian": false,
    "imageUrl": "https://th.bing.com/th/id/R.71e5ee10494e8e6d5eac4d37522cce78?rik=h%2bgC25jVa8Rz%2bg&riu=http%3a%2f%2fwww.lipstickblogger.com%2fwp-content%2fuploads%2f2017%2f01%2fSpaghetti_1-1024x1024.jpg&ehk=bPjAigndBci4s4YDtmGcGRlLZom9Quh1j8C5HV%2beGFE%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    "productId": 2,
    "productName": "Margherita Pizza",
    "productDescription": "Traditional Italian pizza with tomato sauce, mozzarella cheese, and basil.",
    "price": 9.99,
    "rating": 4.5,
    "dateOfManufacture": "2023-10-02",
    "bestBefore": "2023-11-02",
    "calories": 800,
    "vegetarian": true,
    "imageUrl": "https://th.bing.com/th/id/OIP.LKy0BwjT2gAGgo0kF6Uo7AHaLH?pid=ImgDet&rs=1"
  },
  {
    "productId": 3,
    "productName": "Caesar Salad",
    "productDescription": "Fresh romaine lettuce, croutons, parmesan cheese, and Caesar dressing.",
    "price": 7.49,
    "rating": 4.3,
    "dateOfManufacture": "2023-10-03",
    "bestBefore": "2023-11-03",
    "calories": 350,
    "vegetarian": true,
    "imageUrl": "https://th.bing.com/th/id/OIP.w4r5rpVWHIRAdJ4u1skaIgHaLH?pid=ImgDet&rs=1"
  },
  {
    "productId": 4,
    "productName": "Sushi Combo",
    "productDescription": "Assorted sushi rolls with soy sauce, wasabi, and pickled ginger.",
    "price": 14.99,
    "rating": 4.8,
    "dateOfManufacture": "2023-10-01",
    "bestBefore": "2023-11-01",
    "calories": 600,
    "vegetarian": false,
    "imageUrl": "https://th.bing.com/th/id/OIP.Lo0GWNiv6YC8wW6WDspL4wHaHa?pid=ImgDet&rs=1"
  },
  {
    "productId": 5,
    "productName": "Chicken Curry",
    "productDescription": "Spicy chicken curry with aromatic spices and basmati rice.",
    "price": 11.99,
    "rating": 4.6,
    "dateOfManufacture": "2023-09-28",
    "bestBefore": "2023-10-28",
    "calories": 700,
    "vegetarian": false,
    "imageUrl": "https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Curry-recipe-750x750.jpg"
  },
  {
    "productId": 6,
    "productName": "Vegetable Stir Fry",
    "productDescription": "Fresh mixed vegetables stir-fried in a savory sauce served with rice.",
    "price": 8.99,
    "rating": 4.4,
    "dateOfManufacture": "2023-09-30",
    "bestBefore": "2023-10-30",
    "calories": 450,
    "vegetarian": true,
    "imageUrl": "https://natashaskitchen.com/wp-content/uploads/2020/08/Vegetable-Stir-Fry-2.jpg"
  },
  {
    "productId": 7,
    "productName": "Chocolate Brownie Sundae",
    "productDescription": "Warm chocolate brownie topped with vanilla ice cream, chocolate sauce, and whipped cream.",
    "price": 6.99,
    "rating": 4.9,
    "dateOfManufacture": "2023-10-04",
    "bestBefore": "2023-11-04",
    "calories": 800,
    "vegetarian": true,
    "imageUrl": "https://th.bing.com/th/id/OIP.SsTZzKZsondVrpz7t7SJQQHaE8?w=306&h=204&c=7&r=0&o=5&dpr=1.5&pid=1.7"
  },
  {
    "productId": 8,
    "productName": "Grilled Salmon",
    "productDescription": "Grilled salmon fillet served with roasted vegetables and lemon butter sauce.",
    "price": 13.99,
    "rating": 4.7,
    "dateOfManufacture": "2023-09-29",
    "bestBefore": "2023-10-29",
    "calories": 600,
    "vegetarian": false,
    "imageUrl": "https://th.bing.com/th/id/OIP.WY9ouVsrDfXq412pKTgvUwHaLH?w=204&h=306&c=7&r=0&o=5&dpr=1.5&pid=1.7"
  },
  {
    "productId": 9,
    "productName": "Penne Arrabbiata",
    "productDescription": "Penne pasta in a spicy tomato and chili sauce.",
    "price": 10.49,
    "rating": 4.6,
    "dateOfManufacture": "2023-10-02",
    "bestBefore": "2023-11-02",
    "calories": 480,
    "vegetarian": true,
    "imageUrl": "https://th.bing.com/th/id/OIP.tbUKqeJh-UISmBRMQz72OQHaLH?w=204&h=374&c=7&r=0&o=5&dpr=1.5&pid=1.7"
  },
  {
    "productId": 10,
    "productName": "Mushroom Risotto",
    "productDescription": "Creamy risotto with mushrooms, parmesan cheese, and fresh herbs.",
    "price": 11.99,
    "rating": 4.5,
    "dateOfManufacture": "2023-10-03",
    "bestBefore": "2023-11-03",
    "calories": 600,
    "vegetarian": true,
    "imageUrl": "https://th.bing.com/th/id/OIP.6Z_VSYhIP230uxl63_MttwHaLH?w=204&h=306&c=7&r=0&o=5&dpr=1.5&pid=1.7"
  },
  {
    "productId": 11,
    "productName": "Beef Burger",
    "productDescription": "Juicy beef patty with lettuce, tomato, cheese, and pickles in a sesame seed bun.",
    "price": 9.99,
    "rating": 4.4,
    "dateOfManufacture": "2023-10-01",
    "bestBefore": "2023-11-01",
    "calories": 700,
    "vegetarian": false,
    "imageUrl": "https://th.bing.com/th/id/OIP.iN-9xto68tq_sTB0hD0ydwHaE7?w=306&h=204&c=7&r=0&o=5&dpr=1.5&pid=1.7"
  },
  {
    "productId": 12,
    "productName": "Fruit Salad",
    "productDescription": "Fresh mixed fruits served with a drizzle of honey and a sprinkle of mint.",
    "price": 6.49,
    "rating": 4.3,
    "dateOfManufacture": "2023-09-28",
    "bestBefore": "2023-10-28",
    "calories": 300,
    "vegetarian": true,
    "imageUrl": "https://th.bing.com/th/id/OIP.pTCGAp47Ofu1UbTYfxcgtgHaLH?w=204&h=306&c=7&r=0&o=5&dpr=1.5&pid=1.7"
  },
  {
    "productId": 13,
    "productName": "Beef Tacos",
    "productDescription": "Soft corn tortillas filled with seasoned beef, lettuce, cheese, and salsa.",
    "price": 8.99,
    "rating": 4.7,
    "dateOfManufacture": "2023-09-30",
    "bestBefore": "2023-10-30",
    "calories": 550,
    "vegetarian": false,
    "imageUrl": "https://th.bing.com/th/id/OIP.YSX6Z5Ui0-uOz-B3BNYfIgHaKX?w=211&h=295&c=7&r=0&o=5&dpr=1.5&pid=1.7"
  },
  {
    "productId": 14,
    "productName": "Chicken Caesar Wrap",
    "productDescription": "Grilled chicken, romaine lettuce, parmesan cheese, and Caesar dressing wrapped in a flour tortilla.",
    "price": 7.99,
    "rating": 4.6,
    "dateOfManufacture": "2023-10-04",
    "bestBefore": "2023-11-04",
    "calories": 500,
    "vegetarian": false,
    "imageUrl": "https://th.bing.com/th/id/OIP.HFHrmZf8aI4L74LYY2S-rQHaKp?w=208&h=299&c=7&r=0&o=5&dpr=1.5&pid=1.7"
  },
  {
    "productId": 15,
    "productName": "Cheese Platter",
    "productDescription": "Assorted cheeses, crackers, grapes, and nuts for a delightful snack.",
    "price": 15.99,
    "rating": 4.8,
    "dateOfManufacture": "2023-10-05",
    "bestBefore": "2023-11-05",
    "calories": 600,
    "vegetarian": true,
    "imageUrl": "https://th.bing.com/th/id/OIP.yj0lsGkIN5QtZi3Jo9rc7wHaGR?w=271&h=229&c=7&r=0&o=5&dpr=1.5&pid=1.7"
  }



];

// DynamoDB table name
const tableName = 'fz_food';

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
