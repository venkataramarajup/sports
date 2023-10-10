import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-help-center',
  templateUrl: './help-center.component.html',
  styleUrls: ['./help-center.component.scss']
})
export class HelpCenterComponent implements OnInit {
  searchText: any;
  helptextArray: any = [
    {
      id: 1, question: 'Accordion Item #1', solution: `This is the first item's accordion body. It is shown by default, until the collapse plugin
    adds the appropriate classes that we use to style each element. These classes control the overall
    appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
    CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
    <code>.accordion-body</code>, though the transition does limit overflow`},
    {
      id: 1, question: 'Accordion Item #2', solution: `This is the first item's accordion body. It is shown by default, until the collapse plugin
    adds the appropriate classes that we use to style each element. These classes control the overall
    appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
    CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
    <code>.accordion-body</code>, though the transition does limit overflow`},
    {
      id: 1, question: 'Accordion Item #3', solution: `This is the first item's accordion body. It is shown by default, until the collapse plugin
    adds the appropriate classes that we use to style each element. These classes control the overall
    appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
    CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
    <code>.accordion-body</code>, though the transition does limit overflow`},
    {
      id: 1, question: 'Accordion Item #4', solution: `This is the first item's accordion body. It is shown by default, until the collapse plugin
    adds the appropriate classes that we use to style each element. These classes control the overall
    appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
    CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
    <code>.accordion-body</code>, though the transition does limit overflow`}
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.expandarray = Array(100).fill(false);
    this.expandarray[0] = true;
    this.collapse = Array(100).fill(false);
  }

  selectedcategory(id: any) {
    this.router.navigate(['/HelpCenter/1'])
  }
  expandarray: any = Array(100).fill(false)
  expand(i: any) {
    this.expandarray = Array(100).fill(false);
    if (this.expandarray[i] === false) {
      this.expandarray[i] = true;
    } else {
      this.expandarray[i] = false;
    }
  }
  collapse: any = Array(100).fill(false);

  collapsethebar(i: any) {
    if (this.collapse[i] === true) {
      this.collapse[i] = false;
    } else {
      this.collapse[i] = true;
    }

  }
}
