# Design model
## Usage case
(Use case #1, #2, #3, #4)
1. App waits for __driver__ to take action.
2. Driver clicks on __calculator__.
3. App says that driver must create a __truck__ before he can use the __calculator__.
4. The driver clicks go back.
5. The driver clikcs __truck manager__.
6. The driver clicks "create new truck".
7. The driver is greeted with a number of input fields to input numbers.
8. The app responds by saying if the __truck__ is valid.
9. The driver clicks done.
10. The app saves the truck to __persistence__.
10. The driver goes to the menu.
11. The driver clicks calculator.
12. The driver must choose a truck from a scroll view.
13. The driver is shown a screen with the truck information and an input field.
14. The driver inputs the weight into the field.
15. The answer appears on a label in the view.
16. The driver closes the app.
17. The driver opens app.
18. The driver clicks truck manager.
19. The driver clicks on the truck to come to the truck edit page
20. The driver edits the truck
21. The driver clicks done.

## Nouns
* Driver
* Calculator
* Truck
* Truck manager
* Persistence

## Domain model
~~~plantuml
@startuml
object Calculator {

}

object Truck {
    - vehicleCard:VehicleCard
}

object TruckManager {

}

object VehicleCard {
    - axleloads
    - axledisatnces
    - payloads
    - deadweights
}


TruckManager "1" --> "*" Truck : contains

Calculator "1" --> "1" Truck : Uses

Truck o-- VehicleCard

@enduml
~~~