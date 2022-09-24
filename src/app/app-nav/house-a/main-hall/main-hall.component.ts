import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {PanoViewer} from "@egjs/view360";

@Component({
  selector: 'app-main-hall',
  templateUrl: './main-hall.component.html',
  styleUrls: ['./main-hall.component.scss']
})
export class MainHallComponent implements OnInit {
  demoUrl: string = './assets/img/360.jpg';
  @ViewChild("myPanoViewer") ref!: ElementRef;

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    const obj = this.ref.nativeElement;
    console.log(obj);
    const panoViewer = new PanoViewer(obj, {
      image: this.demoUrl,
      projectionType:"equirectangular",
      showPolePoint:true,
    });
  }

}
