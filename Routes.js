import {Routes, Route} from 'react-router-dom'
import { Login } from "./login"
import { App } from "./App"
import { Palyer } from './Player'
export function Pages_Routing(){
return(
    
    <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/app' element={<App/>}/>
        <Route path='/play/:id' element={<Palyer/>}/>
        
    </Routes>
    
   
)
}