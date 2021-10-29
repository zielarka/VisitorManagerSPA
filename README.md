# VisitorManagerSPA

An application for displaying entries based on a given time frame. 

![Bez tytułu](https://user-images.githubusercontent.com/92297647/139380894-dda60b85-c6d0-497f-8214-388040743f24.png)


## Development server

First, use `npm install` to add the missing libraries.
To open an application use `ng serve` the default port used will be 4200 
If you want to use a different port use the command `ng serve --port 8080`

## Data set
By default, the application uses the Mockup API which generates random numbers representing the number of visits each time.


If you want to use a different dataset, change the Base Api URL adapting the date data to the given format. 
`src\environments\environment.ts`
`BASE_API_URL`

| KEY | VALUE | 
| :---: | :---: | 
| startDate | dateTime | 
| endDate | dateTime | 


## Build

Run `ng build --prod` to build the project. The build artifacts will be stored in the `dist/` directory.

