import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task';
  card1 = "hello";

  cards = [
    {
      title : 'FREE',
      price : '$0',
      user : 'Single User',
      storage : '5GB Storage',
      projects : 'Unlimited Public Projects',
      access : 'Community Access',
      project : {
          title : 'Unlimited Public Projects',
          available : false
      },
      phone : {
          title : 'Dedicated Phone Support',
          available : false
      },
      subdomain : {
          title : 'Free Subdomain',
          available : false
      },
      status : {
          title : 'Monthly Status Reports',
          available : false
      },
    },
    {
      title : 'PLUS',
      price : '$9',
      user : '5 Users',
      storage : '50GB Storage',
      projects : 'Unlimited Public Projects',
      access : 'Community Access',
      project : {
          title : 'Unlimited Private Projects',
          available : true
      },
      phone : {
          title : 'Dedicated Phone Support',
          available : true
      },
      subdomain : {
          title : 'Free Subdomain',
          available : true
      },
      status : {
          title : 'Monthly Status Reports',
          available : false
      }
    },
    {
      title : 'PRO',
      price : '$49',
      user : 'Unlimited Users',
      storage : '150GB Storage',
      projects : 'Unlimited Public Projects',
      access : 'Community Access',
      project : {
          title : 'Unlimited Private Projects',
          available : true
      },
      phone : {
          title : 'Dedicated Phone Support',
          available : true
      },
      subdomain : {
          title : 'Free Subdomain',
          available : true
      },
      status : {
          title : 'Monthly Status Reports',
          available : true
      }
    }
  ]
}