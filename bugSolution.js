```javascript
//Correct usage of $inc operator for updating a field
db.collection.updateOne({"_id":ObjectId("65156789012345678901")},{$inc:{counter: 1}})
```