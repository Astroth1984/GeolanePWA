import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { DataService } from './data.service';
import { Ref } from './Ref';
// import Swiper core and required modules
import { SwiperComponent, SwiperDirective } from 'ngx-swiper-wrapper';
import { SwiperOptions } from 'swiper';
import { PaginationOptions } from 'swiper/types/components/pagination';
import { ScrollbarOptions } from 'swiper/types/components/scrollbar';

@Component({
  selector: 'app-pass-par-tout',
  templateUrl: './pass-par-tout.component.html',
  styleUrls: ['./pass-par-tout.component.css']
})
export class PassParToutComponent implements OnInit {

  /*Swiper*/
  public show: boolean = true;
  public index!: number;

  // public slides = [
  //   'First slide',
  //   'Second slide',
  //   'Third slide',
  //   'Fourth slide',
  //   'Fifth slide',
  //   'Sixth slide'
  // ];
  public slides = [
    'https://picsum.photos/700/250/?image=27',
    'https://picsum.photos/700/250/?image=22',
    'https://picsum.photos/700/250/?image=61',
    'https://picsum.photos/700/250/?image=23',
    'https://picsum.photos/700/250/?image=24',
    'https://picsum.photos/700/250/?image=26',
    'https://picsum.photos/700/250/?image=41',
    'https://picsum.photos/700/250/?image=28',
    'https://picsum.photos/700/250/?image=21',
    'https://picsum.photos/700/250/?image=20',
    'https://picsum.photos/400/250/?image=75'
  ];
  public type: string = 'component';

  public disabled: boolean = false;

  public config: SwiperOptions = {
    a11y: { enabled: true },
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: false,
    effect: 'fade'
  };

  private scrollbar: ScrollbarOptions = {
    el: '.swiper-scrollbar',
    hide: false,
    draggable: true
  };

  private pagination: PaginationOptions = {
    el: '.swiper-pagination',
    clickable: true,
    hideOnClick: false
  };

  @ViewChild(SwiperComponent, { static: false }) componentRef?: SwiperComponent;
  @ViewChild(SwiperDirective, { static: false }) directiveRef?: SwiperDirective;
  @ViewChild('swiper', { static: false }) swiper!: SwiperComponent;
  /*Swiper */
  dimFormControl = new FormControl('', [
    Validators.required
  ]);
  ref!: Ref[];
  specificRef!: Ref;


  constructor(private dataService: DataService) {

  }

  /*Swiper */

  public toggleType(): void {
    this.type = (this.type === 'component') ? 'directive' : 'component';
  }

  public toggleDisabled(): void {
    this.disabled = !this.disabled;
  }

  public toggleDirection(): void {
    this.config.direction = (this.config.direction === 'horizontal') ? 'vertical' : 'horizontal';
  }

  public toggleSlidesPerView(): void {
    if (this.config.slidesPerView !== 1) {
      this.config.slidesPerView = 1;
    } else {
      this.config.slidesPerView = 2;
    }
  }

  public toggleOverlayControls(): void {
    if (this.config.navigation) {
      this.config.scrollbar = false;
      this.config.navigation = false;

      this.config.pagination = this.pagination;
    } else if (this.config.pagination) {
      this.config.navigation = false;
      this.config.pagination = false;

      this.config.scrollbar = this.scrollbar;
    } else {
      this.config.scrollbar = false;
      this.config.pagination = false;

      this.config.navigation = true;
    }

    if (this.type === 'directive' && this.directiveRef) {
      this.directiveRef.setIndex(0);
    } else if (this.type === 'component' && this.componentRef && this.componentRef.directiveRef) {
      this.componentRef.directiveRef.setIndex(0);
    }
  }

  public toggleKeyboardControl(): void {
    this.config.keyboard = !this.config.keyboard;
  }

  public toggleMouseWheelControl(): void {
    this.config.mousewheel = !this.config.mousewheel;
  }

  public onIndexChange(index: number): void {
    console.log('Swiper index: ', index);
    this.index = index;
  }

  public onSwiperEvent(event: string): void {
    console.log('Swiper event: ', event);
  }
  /****Swiper */

  ngOnInit(): void {
    this.dataService.getRefs().subscribe(refs => {
      this.ref = refs;
      this.dataService.refsData = refs;
      this.ref = this.dataService.filteredListOptions();
    });
  }

  onSelectedOption(e: any) {
    this.getFilteredExpenseList();
  }

  getFilteredExpenseList() {

    if (this.dataService.searchOption.length > 0)
      this.ref = this.dataService.filteredListOptions();
    else {
      this.ref = [];
    }

    console.log(this.ref);
  }





}
