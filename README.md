# ROVER

## Execution
After all, run ```npm install``` to install all the needed dependencies.

To execute the program you will need to fill the input.txt with your sample data and run ```npm start```.

To execute the test just run ```npm test```.

## Design

The entire program resolve around two concepts, actors and actions, acttor keep state, and are able to change this state, actions are a runnable code(and all of those must have a execute method), this actions will manipulate actors, change them, and sometimes, create other actions. Actors can not create actions.
I started this with a simplification of clean architecture, and in the end i keep only the usecases, the entities and the repositories with other names, but the concept is the same. I do not follow it strictly in this project because of the size of it, but if he grow the changed needs to adapt it to clean arch is minimal, and easy to be made.
