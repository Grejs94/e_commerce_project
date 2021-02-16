Fake Allegro site using Typescript

I used my own boilerplate

I fetched data from https://fakestoreapi.com

Data are vert poor so i expanded this data by using functions to create expanded data

I use Redux RTK to handle component state

For style I use CSS in js - styled-components-emotion

some important 3rd party libraries are:

- react-router-dom
- material-ul
- emotion-normalize
- react-loader-spinner
- react-responsive-carousel
- js-cookie

To pretend that i have immutable objects, I use Cookie to store the data after when they are made (I know this is not the right solution, but as I mentioned before, I used functions that use Math.random to generate the data. I didn't want to have parameters for other elements every time pres F5)
