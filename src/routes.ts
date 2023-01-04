import {Routes} from '@angular/router';
import {Error404Component} from './app/error/404.component';
import {
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventsListsResolver, CreateSessionComponent
} from './app/events';

export const appRoutes: Routes = [
  {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
  {path: 'events', component: EventsListComponent, resolve: {events: EventsListsResolver}},
  {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
  {path: 'events/session/new', component: CreateSessionComponent},
  {path: '404', component: Error404Component},
  {path: '', redirectTo: '/events', pathMatch: 'full'},
  {path: 'user', loadChildren: () => import('./app/user/user.module').then(m => m.UserModule)}
]

//Definim rutele aici
//la resolve handler pasam un obiect care are proprietatea events, si valoarea lui events este setata la
//EventListResolver
//Ceea ce inseamna ca inainte d a rezolva aceasta rutare, cheama EventListResolver. Si cand acel resolver
//se termina, ne returneaza date.Adauga aceste date la ruta ca property named events. Va lua events care
//vor fi returnate de resolver, le va pune intr-o proprietate numita events on route.
