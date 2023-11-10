import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbDate, NgbCalendar, NgbDateParserFormatter, NgbInputDatepicker, NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('datepicker', { static: false }) datepicker!: NgbDatepicker | undefined;
  title = 'poddle';

  fromDate = null;
  timePickerDate:any = {
    year:2023,
    month:4,
    day:14
  };

headerDate:any =null;

  selectedDate!: string;
  daysOfWeek: string[] = [];
  times:any[]=[
    {
      id: 0,
      time: '8:00 AM',
      timeId: '800'
    },
    {
      id: 1,
      time: '8:30 AM',
      timeId: '830'
    },
    {
      id: 2,
      time: '9:00 AM',
      timeId: '900'
    },
    {
      id: 3,
      time: '9:30 AM',
      timeId: '930'
    },
    {
      id: 4,
      time: '10:00 AM',
      timeId: '1000'
    },
    {
      id: 5,
      time: '10:30 AM',
      timeId: '1030'
    },
    {
      id: 6,
      time: '11:00 AM',
      timeId: '1100'
    },
    {
      id: 7,
      time: '11:30 AM',
      timeId: '1130'
    },
    {
      id: 8,
      time: '12:00 AM',
      timeId: '1200'
    },
    {
      id: 9,
      time: '12:30 AM',
      timeId: '1230'
    },
    {
      id: 10,
      time: '01:00 PM',
      timeId: '0100'
    },
    {
      id: 11,
      time: '01:30 PM',
      timeId: '0130'
    },
    {
      id: 12,
      time: '02:00 PM',
      timeId: '0200'
    },
    {
      id: 13,
      time: '02:30 PM',
      timeId: '0230'
    },
    {
      id: 14,
      time: '03:00 PM',
      timeId: '0300'
    },
    {
      id: 15,
      time: '03:30 PM',
      timeId: '0330'
    },
    {
      id: 16,
      time: '04:00 PM',
      timeId: '0400'
    },
    {
      id: 17,
      time: '04:30 PM',
      timeId: '0430'
    },
  ];
  row:any[]=[1,2,3,4,4,4,4,4,4,4,4]
  dates: any[] = [];


  events:any[] = [];
d: any;


  constructor() {
    const currentDate = new Date();
    this.selectedDate = currentDate.toISOString().slice(0, 10);
  }

  ngOnInit() {
    this.updateGrid();
  }

  // HEADER FUNCTIONALITIES
  updateGrid() {
    console.log(this.timePickerDate);

    const monthString = this.timePickerDate.month.toString().padStart(2, '0');
    const dayString = this.timePickerDate.day.toString().padStart(2, '0');
    const formattedDates = `${this.timePickerDate.year}-${monthString}-${dayString}`;
    const inputDate = new Date(formattedDates);
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = inputDate.toLocaleDateString('en-US', options);
    const formattedDateWithoutCommas = formattedDate.replace(/,(?=\s\d)/g, '');
    this.headerDate = formattedDateWithoutCommas;



    this.dates = [];
    const selectedDate = new Date(this.selectedDate);
    const firstDayOfWeek = new Date(selectedDate);
    firstDayOfWeek.setDate(selectedDate.getDate() - (selectedDate.getDay() + 6) % 7); // Start from the most recent Monday

    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(firstDayOfWeek);
      currentDate.setDate(currentDate.getDate() + i);
      this.daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
      const day = this.daysOfWeek[i];
      const date = currentDate.getDate();
      const month = currentDate.toLocaleString('default', { month: 'short' });
      var data = {
        date: `${day} ${date}`,
        dateId: `${day}-${date}${currentDate.getMonth() + 1}${currentDate.getFullYear()}`
      }
      this.dates.push(data);
      // this.dates[i] = `${day} ${month} ${date}`;
    }
  }

  previousWeek() {
    const selectedDate = new Date(this.selectedDate);
    selectedDate.setDate(selectedDate.getDate() - 7);
    this.selectedDate = selectedDate.toISOString().slice(0, 10);
    this.updateGrid();
  }

  nextWeek() {
    const selectedDate = new Date(this.selectedDate);
    selectedDate.setDate(selectedDate.getDate() + 7);
    this.selectedDate = selectedDate.toISOString().slice(0, 10);
    this.updateGrid();
  }
  addEvent(){
    var event = {
      date:"11.09.2023",
      time:'9.30',
    }
  }

  onDateSelection(event:any){

  }
  toggle(){

  }
  isRange(){

  }




}
