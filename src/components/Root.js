import {Outlet} from 'react-router-dom'
import MainNavigation from './MainNavigation';
import { FavoriteProvider } from '../contexts/FavoriteContext';
import '../styling/styles.scss';

const RootLayout = ()=>{
    return(
        <div >
            <MainNavigation />
            <FavoriteProvider>
                <Outlet />
            </FavoriteProvider>
            
        </div>
    )
}

export default RootLayout;