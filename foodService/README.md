- **DynamoDB - Food**: We use DynamoDB to store and manage our food product catalog and have hosted all those data in Amazon EC2 instance. You can find the product data for food in the following regions:
- **Base URL** - ```http://34.228.227.174:3032/foodService/all/<region>```
 There are three endpoints ```IN``` for India, ```US-NC``` for United States, ```IE``` for Ireland region.
  
   - **India Region**: [DynamoDB Toys Catalog - IN](http://34.228.227.174:3032/foodService/all/IN)
   - **USA Region**: [DynamoDB Toys Catalog - US](http://34.228.227.174:3032/foodService/all/US-NC)
   - **Ireland Region**: [DynamoDB Toys Catalog - IE](http://34.228.227.174:3032/foodService/all/IE)

-Sample response for food Service in India region
```
[
   {
      "imageUrl": "https://th.bing.com/th/id/OIP.SsTZzKZsondVrpz7t7SJQQHaE8?w=306&h=204&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      "productDescription": "Warm chocolate brownie topped with vanilla ice cream, chocolate sauce, and whipped cream.",
      "dateOfManufacture": "2023-10-04",
      "vegetarian": true,
      "rating": 4.9,
      "calories": 800,
      "price": 8.25,
      "productId": 7,
      "bestBefore": "2023-11-04",
      "productName": "Chocolate Brownie Sundae"
   }
]
```
- **Team URL** - This is another URL which shows the team members who has worked on this ```http://34.228.227.174:3032/foodService/team```
```
{
   "name": "Food Service team",
   "members": {
      "member1": "Kinar",
      "member2": "Vishakha",
      "member3": "Jitin",
      "member4": "krishna",
      "member5": "Saundarya",
      "member6": "Riddhi"
   }
}
```