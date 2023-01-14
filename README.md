# Why did i choose this libs?

## UI library
I assume that a big portion of users are using the site on the mobile and dont have access to 4G. so the lib size is a deciding factor but at the same time base on what we have there are several component that we need or we might need in future. 
* input with an icon
* dropdown
* s simple table
* skeleton loading

there 3 popular library : Antd, Material UI, Chakra UI\
comparison : [https://npmtrends.com/@chakra-ui/react-vs-@mui/material-vs-antd]\
based on the npm comparison, all of them are promising but one thing is for sure and the chakra ui is having less open issue

bundle size :
* Material ui (136KB): [https://bundlephobia.com/package/@mui/material@5.11.4]
* Antd (378KB): [https://bundlephobia.com/package/antd@5.1.4]
* Chakra ui (194KB): [https://bundlephobia.com/package/@chakra-ui/react@2.4.8]

and we have to take the ease of use into consideration. based on experience Antd and Chakra UI is easier to use from other ones.
based on what we have (and i assume being on the market on the right time is having higher importance comparing to how fast the site loads if we can have partially performance optimization), Chakra UI is the better choice.

** although this decision needs more inforamtion but just for the sake of knowing how the process works, i wrote my though process **

## state manager
Zustand: its a small size library which is easy to use. its using hooks and its look is pretty similar to redux toolkit but less boiler plate code

---

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
