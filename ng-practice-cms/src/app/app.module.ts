import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { PagesComponent } from './components/pages/pages.component';

import { RouterModule, Routes } from '@angular/router';
import { AdminPagesComponent } from './components/admin-pages/admin-pages.component';
import { PageService } from './services/page.service';
import { AdminAddPageComponent } from './components/admin-add-page/admin-add-page.component';
import { FormsModule } from '@angular/forms';
import { AdminEditPageComponent } from './components/admin-edit-page/admin-edit-page.component';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component'
import { SidebarService } from './services/sidebar.service';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RegisterComponent } from './components/register/register.component';
import { UserService } from './services/user.service';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';

const appRoutes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'admin/pages', component: AdminPagesComponent },
  { path: 'admin/add-page', component: AdminAddPageComponent },
  { path: 'admin/edit-page/:id', component: AdminEditPageComponent },
  { path: 'admin/sidebar', component: AdminSidebarComponent },

  { path: ':page', component: PagesComponent },
  { path: '', component: PagesComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PagesComponent,
    AdminPagesComponent,
    AdminAddPageComponent,
    AdminEditPageComponent,
    AdminSidebarComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    AdminNavbarComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    BrowserModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [PageService, SidebarService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
