 **DynamoDB - Bikes**: We use DynamoDB to store and manage our bike product catalog and have hosted all those data in Amazon EC2 instance. You can find the product data for bikes in the following regions:
- **Base URL** - ```http://3.27.11.248:3031/bikes/all/<region>```
 There are three endpoints ```IN``` for India, ```US-NC``` for United States, ```IE``` for Ireland region.
  
   - **India Region**: [DynamoDB Toys Catalog - IN](http://3.27.11.248:3031/bikes/all/IN)
   - **USA Region**: [DynamoDB Toys Catalog - US](http://3.27.11.248:3031/bikes/all/US-NC)
   - **Ireland Region**: [DynamoDB Toys Catalog - IE](http://3.27.11.248:3031/bikes/all/IE)

-Sample response for Bike Service in India region
```
[
   {
      "tireSize": "700c",
      "imageUrl": "https://media.karousell.com/media/photos/products/2022/8/10/trek_domane_sl6_52cm_2022_1660134947_4c7bc733_progressive",
      "productDescription": "A high-performance road bike with carbon frame and Shimano components.",
      "rating": 4.7,
      "gearSystem": "Shimano Ultegra",
      "brakeType": "Disc",
      "suspensionType": "Front",
      "frameMaterial": "Carbon",
      "price": 3067.99,
      "productId": 9001,
      "productName": "Trek Domane SL 6"
   }
]
```
- **Team URL** - This is another URL which shows the team members who has worked on this ```http://3.27.11.248:3031/bikes/team```
```
{
   "name": "Bike Service team",
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