import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/main/main.component';
import { LogoutComponent } from './components/logout/logout.component';
import { LoginComponent } from './components/login/login.component';
import { AuthenticateComponent } from './components/authenticate/authenticate.component';
import { UsersComponent } from './components/users/users.component';
import { MoviesComponent } from './components/movies/movies.component';
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatCardModule} from "@angular/material/card";
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from "@angular/material/form-field";
import {MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, MatBottomSheetModule} from "@angular/material/bottom-sheet";
import {MAT_RADIO_DEFAULT_OPTIONS, MatRadioModule} from "@angular/material/radio";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {MatDialogModule} from "@angular/material/dialog";

import {MatGridListModule} from "@angular/material/grid-list";

import {MatSelectModule} from "@angular/material/select";
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';

import { HttpClientModule } from '@angular/common/http';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { Apollo, ApolloModule } from 'apollo-angular';
import { environment } from 'src/environments/environment';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { GraphQLModule } from './graphql.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    LogoutComponent,
    LoginComponent,
    AuthenticateComponent,
    UsersComponent,
    MoviesComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    UserDetailComponent,
    MovieDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatBottomSheetModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatDialogModule,
    MatGridListModule,
    MatSelectModule,
    HttpClientModule,
    FormsModule,
    ApolloModule,
    HttpClientModule,
    GraphQLModule
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}},
    {provide: MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
    {provide: MAT_RADIO_DEFAULT_OPTIONS, useValue: { color: 'accent' }}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
