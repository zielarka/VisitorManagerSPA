# VisitorManagerSPA

An application for displaying entries based on a given time frame. 

## Development server

First, use `npm install` to add the missing libraries.
To open an application use `ng serve` the default port used will be 4200 
If you want to use a different port use the command `ng serve --port 8080`

## Data set
By default, the application uses the Mockup API which generates random numbers representing the number of visits each time.
Example: `https://opticounter.pl/apicountsv3/Mockup/?startDate=2021-06-25+07%3a18%3a28&endDate=2021-07-02+07%3a18%3a28`

If you want to use a different dataset, change the Base Api URL adapting the date data to the given format. 
`src\environments\environment.ts`
`BASE_API_URL:'https://opticounter.pl/apicountsv3/Mockup'`

| KEY | VALUE | 
| :---: | :---: | 
| startDate | dateTime | 
| endDate | dateTime | 


## Build

Run `ng build --prod` to build the project. The build artifacts will be stored in the `dist/` directory.

