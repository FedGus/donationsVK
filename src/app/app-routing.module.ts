import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TypeComponent } from './type/type.component';
import { RegularComponent } from './regular/regular.component';
import { PreviewComponent } from './preview/preview.component';
import { TargetSecondComponent } from './target-second/target-second.component';
import { TargetComponent } from './target/target.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'type', component: TypeComponent},
  {path: 'regular', component: RegularComponent},
  {path: 'preview', component: PreviewComponent},
  {path: 'target', component: TargetComponent},
  {path: 'target_sec', component: TargetSecondComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
