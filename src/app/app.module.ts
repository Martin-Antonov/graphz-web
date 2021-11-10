import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TopMenuComponent} from './components/top-menu/top-menu.component';
import {BottomMenuComponent} from './components/bottom-menu/bottom-menu.component';
import {LeftMenuComponent} from './components/left-menu/left-menu.component';
import {RightMenuComponent} from './components/right-menu/right-menu.component';
import {GraphzComponent} from './graphz/graphz.component';
import {AngularDraggableModule} from 'angular2-draggable';
import {ClickOutsideModule} from 'ng-click-outside';
import {ErrorLogComponent} from './shared/components/error-log/error-log.component';
import {ClickableXComponent} from './shared/components/clickable-x/clickable-x.component';
import {DraggableWindowComponent} from './shared/components/draggable-window/draggable-window.component';
import {SquareButtonComponent} from './shared/components/square-button/square-button.component';
import {HotkeyModule} from 'angular2-hotkeys';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    BottomMenuComponent,
    LeftMenuComponent,
    RightMenuComponent,
    GraphzComponent,
    ErrorLogComponent,
    ClickableXComponent,
    DraggableWindowComponent,
    SquareButtonComponent,
  ],
  imports: [
    BrowserModule,
    AngularDraggableModule,
    ClickOutsideModule,
    BrowserAnimationsModule,
    HotkeyModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
