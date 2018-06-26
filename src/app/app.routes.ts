import {RouterModule , Routes } from '@angular/router';
import { AboutComponent , PortafolioComponent , ProductoComponent , SearchComponent} from './components/index.paginas'

const APP_ROUTES : Routes = [
	{ path:'home', component:PortafolioComponent},
	{ path:'about', component:AboutComponent},
	{ path:'producto/:id', component:ProductoComponent},
	{ path:'buscar/:termino', component:SearchComponent},
	{ path:'**', pathMatch:'full', redirectTo :''},
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{useHash:true});