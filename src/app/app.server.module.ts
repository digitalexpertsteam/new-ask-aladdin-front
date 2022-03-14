import { NgModule } from '@angular/core';
import { ServerModule , ServerTransferStateModule} from '@angular/platform-server';
import { ɵangular_packages_platform_server_platform_server_c as ServerStylesHost } from '@angular/platform-server';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
export class NoRenderServerStylesHost extends ServerStylesHost {

  onStylesAdded(additions: Set<string>): void {
      // super.onStylesAdded(additions);
      // additions.forEach((s) => console.log(s));
      // ignore styles added
  }
}
@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule,

  ],
  bootstrap: [AppComponent],
  providers: [{
    provide: ServerStylesHost,

}]
})
export class AppServerModule {}
