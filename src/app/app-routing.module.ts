import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './pages/characters/characters.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    component: CharactersComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {
}
