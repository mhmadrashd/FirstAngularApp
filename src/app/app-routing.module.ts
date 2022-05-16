import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LOGINComponent } from './login/login.component';
import { PostsComponent } from './posts/posts.component';
import { ProductsComponent } from './products/products.component';
import { SignupComponent } from './signup/signup.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'Products',component: ProductsComponent},
  {path: 'Users',component: UsersComponent},
  {path: 'Posts',component: PostsComponent},
  {path: 'SignUp',component: SignupComponent},
  {path: 'Login',component: LOGINComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
