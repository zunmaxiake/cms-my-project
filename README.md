# cms-my-project

## 当前版本的一些api

### 1. 获取cars

- get

  /cars

- response

  ```Array
   [{
	"_id": "5d12c7e5a078ed133836a5ec",
	"size": "midsize",
	"color": "silver",
	"numberOfDoors": 4,
	"price": 30000,
	"mpgHighway": 33,
	"model": "3 Series",
	"mileage": 19269,
	"area": "bayArea",
	"make": "bmw",
	"mpgCity": 22,
	"images": "https://img.lendingcar.com/640x480/inventories/3whjCQsjtJCgsNfxfecZi3F2sxtXCdcPHO/aaee916452b3dfd1fac5ae6b060b8197.jpg",
	"id": "5d12c7e5a078ed133836a5ec",
	"availability": "available",
	"year": 2016,
	"createdAt": "2019-06-26T01:18:29.667Z",
	"updatedAt": "2019-06-26T01:18:29.684Z",
	"__v": 0
   }]
  ```



### 2.获取recommendations

- get

  /recommendations

- response

```Array
[{
	"_id": "5d12c4ecca601b191c146473",
	"id": "5d12c4ecca601b191c146473",
	"description": "品牌为bmw & jeep, 价钱在50w和60w之间，年份在2018和2019之间",
	"createdAt": "2019-06-26T01:05:48.679Z",
	"updatedAt": "2019-06-26T01:05:48.692Z",
	"__v": 0
}]
```



### 3.根据推荐id获取符合该推荐条件的cars

- get

  /recommendationCars/:id

- response

```Array
[{
	"_id": "5d12c7e5a078ed133836a5ec",
	"size": "midsize",
	"color": "silver",
	"numberOfDoors": 4,
	"price": 30000,
	"mpgHighway": 33,
	"model": "3 Series",
	"mileage": 19269,
	"area": "bayArea",
	"make": "bmw",
	"mpgCity": 22,
	"images": "https://img.lendingcar.com/640x480/inventories/3whjCQsjtJCgsNfxfecZi3F2sxtXCdcPHO/aaee916452b3dfd1fac5ae6b060b8197.jpg",
	"id": "5d12c7e5a078ed133836a5ec",
	"availability": "available",
	"year": 2016,
	"createdAt": "2019-06-26T01:18:29.667Z",
	"updatedAt": "2019-06-26T01:18:29.684Z",
	"__v": 0
}]
```