import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from '@modules/patron/create/create.component';
import { IndexComponent } from '@modules/patron/index/index.component';

const routes: Routes = [
      { path: 'patrones', redirectTo: 'patrones/index', pathMatch: 'full'},
      { path: 'patrones/index', component: IndexComponent },
      //{ path: 'patrones/:id', component: ViewComponent },
      { path: 'patrones/nuevo', component: CreateComponent },
      //{ path: 'patrones/:id/editar', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
