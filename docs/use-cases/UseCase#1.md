# Use case: 1 Calculate load center of gravity (LCG)

## Characteristic information
__Goal in Context:__ The truck driver selects a truck and is prompted to input the payload weight, and receives the LCG.

__Scope:__ LCG Software Application

__Level:__ Primary task

__Preconditions:__ There exists a valid truck and the payload weight should be greater than or equal to 0.

__Success End Condition:__ The truck driver obtains LCG number.

__Failed End Condition:__ Truck driver does not obtain LCG number.

__Primary Actor:__ Truck driver

__Trigger:__ Calculation request

## Main success scenario
1. Driver enters calculator.
2. Driver selects truck.
3. Driver input the payload weight
4. Driver reads the LCG number.

## Extensions

2a. There are no trucks
1. Display error message to driver
2. Make him create a truck object

3a. Payload weight is larger than max:
1. Display error message to driver
2. Make driver input new payload weight

3b. Payload weight is less than 0:
1. Display error message to driver
2. Make driver input new payload weight
 

## Sub-variations
Not available