# Persistance

The LTP app requires data saved as JSON files.

## API calls
Under are the listed API calls

### Trucks

~~~json
{
    "trucks":[
        {
            "name": "Truck1",
            "number": "VS32678",
            "vehicleCard": {
                "tillatt aksellast":[4150, 7700],
                "egenvekt aksel": [2390, 4100],
                "akselavstand":[5600, 1350],
                "tillatt nyttelast":5800
            }
        }
    ]
}
~~~


### User
~~~json
{
    "user":{
        "username":"bob",
        "password":"bob1(hashed)"
    }    
}
~~~