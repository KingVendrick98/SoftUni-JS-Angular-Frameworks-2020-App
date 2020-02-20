import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private toastr: ToastrService) {

  }

  ngOnInit(): void {

  }

  showSuccess() {
    this.toastr.success(`We appreciate you contacting us / SellAndGo.
     One of our colleagues will get back in touch with you soon!`)
    setTimeout(location.reload.bind(location), 5000);
  }

}
