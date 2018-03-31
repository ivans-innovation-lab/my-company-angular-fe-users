import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { NxModule } from "@nrwl/nx";
import { UsersModule } from "@my-company-frontend/users";

@NgModule({
  imports: [BrowserModule, NxModule.forRoot(), UsersModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
