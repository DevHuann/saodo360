import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {PanoViewer, SpinViewer} from "@egjs/view360";

@Component({
  selector: 'app-maingate',
  templateUrl: './maingate.component.html',
  styleUrls: ['./maingate.component.scss']
})
export class MaingateComponent implements OnInit {
  demoUrl: string = './assets/img/station24bay.jpg';
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
