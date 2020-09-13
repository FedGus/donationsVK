import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TypeComponent } from './type/type.component';
import { TargetComponent } from './target/target.component';
import { RegularComponent } from './regular/regular.component';
import { TargetSecondComponent } from './target-second/target-second.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'type', component: TypeComponent},
  {path: 'target', component: TargetComponent},
  {path: 'regular', component: RegularComponent},
  {path: 'targetSecond', component: TargetSecondComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
