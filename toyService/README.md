   **DynamoDB - Toys**: We use DynamoDB to store and manage our toys product catalog and have hosted all those data in Amazon EC2 instance. You can find the product data for toys in the following regions:
- **Base URL** - ```http://18.232.164.138:3033/toys/all/<region>```
 There are three endpoints ```IN``` for India, ```US-NC``` for United States, ```IE``` for Ireland region.
  
   - **India Region**: [DynamoDB Toys Catalog - IN](http://18.232.164.138:3033/toys/all/IN)
   - **USA Region**: [DynamoDB Toys Catalog - US](http://18.232.164.138:3033/toys/all/US-NC)
   - **Ireland Region**: [DynamoDB Toys Catalog - IE](http://18.232.164.138:3033/toys/all/IE)

-Sample response for the India region
```
[
   {
      "imageUrl": "https://www.hexir.com/product_images/import/toy/toy_plush_MLP_OF_PinkiePie_12in_1.jpg",
      "productDescription": "Collect five cool monster trucks for thrilling races and stunts.",
      "manufacturer": "Mattel",
      "rating": 4.6,
      "recommendedAge": "3+",
      "price": 23.59,
      "productId": 2013,
      "material": "Die-cast Metal",
      "productName": "Hot Wheels Monster Trucks 5-Pack"
   }
]
```
- **Team URL** - This is another URL which shows the team members who has worked on this ```http://18.232.164.138:3033/toys/team```
```
{
   "name": "Toy Service team",
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