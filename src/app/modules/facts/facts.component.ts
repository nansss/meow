import { Component, OnInit } from '@angular/core';
import { FactsService } from '../../services/facts.service';

@Component({
  selector: 'app-facts',
  templateUrl: 'facts.component.html',
  styleUrls: ['facts.component.scss'],
})
export class FactsComponent implements OnInit {
  facts: string[] = [];

  constructor(private factsService: FactsService) {}

  ngOnInit() {
    this.onScroll(20);
  }

  onScroll(onStart: any = null) {
    if (onStart) {
      for (let i = 0; i < onStart; i++) {
        this.getFacts();
      }
    } else {
      this.getFacts();
    }
  }

  private getFacts() {
    this.factsService.getFacts().subscribe((response) => {
      if (this.facts.indexOf(response) === -1) {
        this.facts.push(response);
      } else {
        this.getFacts();
      }
    });
  }
}
