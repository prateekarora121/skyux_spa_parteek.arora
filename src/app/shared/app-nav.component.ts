import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss']
})
export class AppNavComponent {
  public nav = [
    // {
    //   titleKey: 'app_nav_home',
    //   path: '/'
    // },
    // {
    //   titleKey: 'About',
    //   path: '/about'
    // },
    // {
    //   titleKey: 'User',
    //   path: '/user'
    // },
    {
      titleKey: 'User Grid',
      path: '/user-data-entry-grid'
    }
  ];
}
