# Use case: 2 Create truck

## Characteristic information
__Goal in Context:__ The driver need to create a truck object to make calculations on it.

__Scope:__ LCG Software Application

__Level:__ Primary task

__Preconditions:__ Driver has created an account.

__Success End Condition:__ The driver has created a Truck object inside the application.

__Failed End Condition:__ The truck object is not created.

__Primary Actor:__ Truck driver

__Trigger:__ Truck driver clicks "create new Truck" button.

## Main success scenario
1. Driver is given choice between "download truck details by license number" or "manual input".
2. Driver selects "download truck details by license number".
3. Driver enters license number
4. App successfully downloads truck details.
5. Driver is prompted to give the truck a name
6. Driver is prompted to give the truck an image
7. Driver has successfully created a truck object

## Extensions
2a. Driver chooses manual input
1. App creates an empty truck
2. See use case #4.

4a. App failed to download all truck details:
1. App asks driver to fill the details manually.
2. User accepts or rejects
2. If accepts, see Use case #4.

4b. App failed to download some truck details:
1. App asks driver to fill the details manually.
2. User accepts or rejects. [user accepts]
3. App fills truck creation form with downloaded details
4. See use case #4

5a. Driver doesn't give name
1. If brand is downloaded, name is brand.
2. Else: Truck number 1

6a. No image given
1. App sets gray truck image.

## Sub-variations
Not available