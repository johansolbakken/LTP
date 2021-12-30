# Use case: 4 Driver edit truck

## Characteristic information
__Goal in Context:__ The driver must update the details of a truck object.

__Scope:__ LCG Software Application

__Level:__ Subfunction

__Preconditions:__ The truck object must exist

__Success End Condition:__ All input fields have valid content.

__Failed End Condition:__ There exist an input field with invalid contents.

__Primary Actor:__ The truck driver

__Trigger:__ Manual creation of a new truck, edit existing truck or failed automatic download of truck details.

## Main success scenario
1. Driver edits all fields
2. All fields are valid
3. Driver exits edit-mode

## Extensions
2a. Fields are not valid
1. Display error message to driver
2. Driver either fix invalid input or exit

## Sub-variations
Not available
