import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './presentation/routers/MainRouter'
import { HttpFetcherWrapperImpl } from './data/wrappers/HttpFetchWrapperImpl'
import { AxiosHttpWrapperImpl } from './data/datasources/http/AxiosHttpFetchWrapperImpl'
import { CONFIG } from './core/config'

const fetcher = new HttpFetcherWrapperImpl(AxiosHttpWrapperImpl.getInstance())

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
