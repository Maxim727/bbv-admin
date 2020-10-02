import { Component } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {Constructions} from '../../shared/shared'

const ITEMS = Constructions;

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  // add NgbModalConfig and NgbModal to the component providers
  providers: [NgbModalConfig, NgbModal]
})
export class TableComponent {
  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }
  title = 'Найдите ваш медиаборд в городе';
  initialLat = 43.2282987;
  initialLlng = 76.8833408;
  construction = ITEMS;

  open(content) {
    this.modalService.open(content);
  }
}
