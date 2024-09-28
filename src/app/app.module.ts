import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { PipeComponent } from './pipe/pipe.component';
import { TwoWayDbComponent } from './two-way-db/two-way-db.component';
import { FormsModule } from '@angular/forms';
import { CalculateComponent } from './calculate/calculate.component';
import { DirectivePracticeComponent } from './directive-practice/directive-practice.component';
import { StructuralDirectComponent } from './structural-direct/structural-direct.component';
import { NgswitchExampleComponent } from './ngswitch-example/ngswitch-example.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    DatabindingComponent,
    PipeComponent,
    TwoWayDbComponent,
    CalculateComponent,
    DirectivePracticeComponent,
    StructuralDirectComponent,
    NgswitchExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
