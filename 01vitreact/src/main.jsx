import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'



/*const element="goodman"

const anotherElement = React.createElement(
  'a',
  {href:'https://google.com' , target:'_blank'},
  'abgsdh', element
)*/

createRoot(document.getElementById('root')).render(
  //anotherElement
  <App/>
)
