import {Routes, Route} from 'react-router-dom'
import GtaIII from './pages/GtaIII'
import GtaVC from './pages/GtaVC'
import GtaSA from './pages/GtaSA'

function Router(){
    return(
        <Routes>
            <Route path='GtaIII' element={<GtaIII/>}/>
            <Route path='GtaVC' element={<GtaVC/>}/>
            <Route path='GtaSA' element={<GtaSA/>}/>
        </Routes>
    )
}

export default Router