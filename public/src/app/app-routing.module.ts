
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';
import { ListComponent } from './list/list.component';
import { ShowComponent } from './show/show.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'pets',component: ListComponent},
    { path: 'pets/new',component: NewComponent },
    { path: 'pets/edit/:id', component: EditComponent },
    { path: 'pets/show/:id', component: ShowComponent },
    { path: '', pathMatch: 'full', redirectTo: '/pets' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// const routes: Routes = [
//     { path: 'product',component: ProductComponent, children: [
//         { path: 'details/:id', component: ProductDetailComponent },
//     ]},
//     { path: 'review',component: ReviewComponent, children: [
//         { path: 'details/:id', component: ReviewDetailComponent },
//     ]},
//     { path: '', pathMatch: 'full', redirectTo: '/product' },
// ];

