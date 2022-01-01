# Sequence diagram

~~~plantuml
@startuml
actor Driver
actor Application
actor Calculator
actor TruckManager 
actor Truck 
actor VehicleCard
actor Persistence

' Calculator
opt showCalculator()
    Driver -> Application : showCalculator()
    Application -> Calculator : setup()
    Calculator -> TruckManager : setup()
    TruckManager -> Persistence : readTrucksFromFile()
    Persistence -> TruckManager : [trucks:Truck[]]
    Calculator -> TruckManager : getTruckCount():int
    return TruckManager.count
    alt TruckManager.count = 0
        Application <- Calculator : [You need to create a truck]
        Driver <- Application : [You need to create a truck]
    else TruckManager.count < 0
        Application -> Driver : [Please select truck]
        Driver -> Application : selectTruck(truck:Truck)
        Application -> Calculator : setTruck(truck:Truck)
        Calculator -> TruckManager : isTruckValid(truck:Truck):bool
        TruckManager -> Truck : getVehicleCard()
        Truck -> TruckManager : [vehicleCard:VehicleCard]
        Calculator <- TruckManager : [isValid:bool]
        alt isValid == false
            Calculator -> Application : [Truck is not valid]
            Application -> Driver : [Truck is not valid]
            opt edit truck
                Driver -> Application : [edit truck in truckmanager]
            else do nothing
                Application -> Driver : [Can't calculate LCG for invalid truck]
            end
        else isValid == true
            Calculator -> Application : [Please input weight]
            Application -> Driver : [Please input weight]
            Driver -> Application : setWeight(weight)
            Application -> Calculator : calculateLCG(weight)
            Calculator -> Application : [result]
            alt raised exception
                Application -> Driver : [Input was invalid]
            else result was number
                Application -> Driver : [result]
            end
        end
    end

' Truck manager
else showTruckManager()
    Driver -> Application : showTruckManager()
    Application -> TruckManager : setup()
    TruckManager -> Persistence : readTrucksFromFile()
    Persistence -> TruckManager : [trucks:Truck[]]
    Application -> TruckManager : getTruckList():Truck[]
    TruckManager -> Application : [trucks:Truck[]]
    Application -> Driver : [shows available trucks]

    opt create new truck
        Driver -> Application : createNewTruck()
        Application -> TruckManager : createNewTruck()
        TruckManager -> Truck : create()
        Truck -> VehicleCard : create()
        Truck -> TruckManager : [new_truck]
        TruckManager -> TruckManager : setCurrenTruck(new_truck)
        
    else click on existing truck to edit
        Driver -> Application : editTruck(truck:Truck)
        Application -> TruckManager : setCurrentTruck(truck:Truck)
    end

    TruckManager -> Application : [ready for data]
    Application -> Driver : [fill out form]
    Driver -> Application : done()
    Application -> TruckManager : done():bool
    TruckManager -> Application : [isValid]
    alt isValid = false
        Driver <- Application : [Truck is invalid]
    else truck is valid
        Application -> Driver : [saved truck]
    end
end


@enduml
~~~