import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(private route: ActivatedRoute) {
    // Access the 'id' parameter
    this.route.params.subscribe(params => {
      const id = params['id'];
      // Use 'id' for whatever purpose you need.
    });
  }
}
