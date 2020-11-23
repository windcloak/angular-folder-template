import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppCustomPreloader } from './app.routing-loader';
import { HomeModule } from '../app/modules';

const routes: Routes = [{
    path: '',
    loadChildren: () => import('./modules/module').then(mod => mod.HomeModule),
    data: { preload: true }
},
{
    path: '**',
    redirectTo: ''
}];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: AppCustomPreloader, relativeLinkResolution: 'legacy' })],
    exports: [RouterModule],
    providers: [AppCustomPreloader]
})
export class AppRoutingModule { }
