import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import { TodoApp } from './components/TodoApp';





const divRoot = document.querySelector('#root');

const root = createRoot(divRoot);

root.render( 

<TodoApp/>,



);

