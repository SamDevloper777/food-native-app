{
  "Customer": {
    "address": "Text",
    "city": "String",
    "state": "String",
    "pincode": "String",
    "profile_image": "Image",
    "created_at": "DateTime"
  },
  "Thali": {
    "name": "String",
    "toppings": "List", 
    "price": "Decimal",
    "description": "Text",
    "calories": "Integer",
    "estimated_time": "String",
    "image": "Image",
    "created_at": "DateTime",
    "updated_at": "DateTime"
  },
  "CartItem": {
    "quantity": "Integer",
    "created_at": "DateTime",
    "updated_at": "DateTime"
  },
  "Order": {
    "total_price": "Decimal",
    "payment_method": "String",
    "payment_status": "Boolean",
    "order_status": "String",
    "created_at": "DateTime",
    "updated_at": "DateTime"
  }
}
