import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular_ssr';

  constructor(
    private meta: Meta
  ) {
    this.meta.addTags(
      [{
        name: 'keywords',
        content: 'Share video mstandard',
      },
      {
        name: 'og:title',
        content: 'content aaaa'
      },
      {
        name: 'description',
        content: 'Test des',
      },
      {
        name: 'og:image',
        content: 'https://mstandard-api.nal.vn/storage/videos/6520/conversions/52ca533b-e6d2-40fd-8f24-db30a7736d9f-thumbnail.jpg'
      }]
    );

  }
}
