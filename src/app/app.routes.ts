import { Routes } from '@angular/router';
import { MsgEnviadaComponent } from './components/msg-enviada/msg-enviada.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {path: '',
     title:'Home', component: HomeComponent},
    {path: 'msgEnv', component: MsgEnviadaComponent}
];
