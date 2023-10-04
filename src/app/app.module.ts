import { NgModule } from '@angular/core';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Route } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { AuthGuard } from './auth/auth.guard';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TokenInterceptor } from './auth/token.interceptor';
// import { AppService } from './services/app.service';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AppSerivceService } from './app.service';



const rotte: Route[] = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },


  {
    path: 'dashboard',
    component: DashboardComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'register',
    component: RegisterComponent
  },
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(rotte),
    // JwtModule.forRoot({
    //   config: {
    //     tokenGetter: () => localStorage.getItem('token'), // Modifica 'access_token' con 'token'
    //     allowedDomains: ['localhost:3001'], // Rimuovi 'http://' e '/auth/login'
    //     disallowedRoutes: []
    //   }
    // })
  ],
  providers: [
    AppSerivceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
