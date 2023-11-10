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
      time: '12:00 AM',
      timeId: '1200'
    },
    {
      id: 1,
      time: '12:30 AM',
      timeId: '1230'
    },
    {
      id: 2,
      time: '01:00 AM',
      timeId: '0100'
    },
    {
      id: 3,
      time: '01:30 AM',
      timeId: '0130'
    },
    {
      id: 4,
      time: '02:00 AM',
      timeId: '0200'
    },
    {
      id: 5,
      time: '02:30 AM',
      timeId: '0230'
    },
    {
      id: 6,
      time: '03:00 AM',
      timeId: '0300'
    },
    {
      id: 7,
      time: '03:30 AM',
      timeId: '0330'
    },
    {
      id: 8,
      time: '04:00 AM',
      timeId: '0400'
    },
    {
      id: 9,
      time: '04:30 AM',
      timeId: '0430'
    },
    {
      id: 10,
      time: '05:00 AM',
      timeId: '0500'
    },
    {
      id: 11,
      time: '05:30 AM',
      timeId: '0530'
    },
    {
      id: 12,
      time: '06:00 AM',
      timeId: '0600'
    },
    {
      id: 13,
      time: '06:30 AM',
      timeId: '0630'
    },
    {
      id: 14,
      time: '07:00 AM',
      timeId: '0700'
    },
    {
      id: 15,
      time: '07:30 AM',
      timeId: '0730'
    },
    {
      id: 16,
      time: '08:00 AM',
      timeId: '0800'
    },
    {
      id: 18,
      time: '08:30 AM',
      timeId: '0830'
    },{
      id: 19,
      time: '09:00 AM',
      timeId: '0900'
    },{
      id: 20,
      time: '09:30 AM',
      timeId: '0930'
    },{
      id: 21,
      time: '10:00 AM',
      timeId: '1000'
    },{
      id: 22,
      time: '10:30 AM',
      timeId: '1030'
    },{
      id: 23,
      time: '11:00 AM',
      timeId: '1100'
    },{
      id: 24,
      time: '11:30 AM',
      timeId: '1130'
    },{
      id: 25,
      time: '12:00 PM',
      timeId: '0000'
    },{
      id: 26,
      time: '12:30 PM',
      timeId: '0030'
    },{
      id: 27,
      time: '01:00 PM',
      timeId: '1300'
    },{
      id: 28,
      time: '01:30 PM',
      timeId: '1330'
    },{
      id: 29,
      time: '02:00 PM',
      timeId: '1400'
    },{
      id: 30,
      time: '02:30 PM',
      timeId: '1430'
    },{
      id: 31,
      time: '03:00 PM',
      timeId: '1500'
    },{
      id: 32,
      time: '03:30 PM',
      timeId: '1530'
    },{
      id: 33,
      time: '04:00 PM',
      timeId: '1600'
    },{
      id: 34,
      time: '04:30 PM',
      timeId: '1630'
    },{
      id: 35,
      time: '05:00 PM',
      timeId: '1700'
    },{
      id: 36,
      time: '05:30 PM',
      timeId: '1730'
    },{
      id: 37,
      time: '06:00 PM',
      timeId: '1800'
    },{
      id: 38,
      time: '06:30 PM',
      timeId: '1830'
    },{
      id: 39,
      time: '07:00 PM',
      timeId: '1900'
    },{
      id: 40,
      time: '07:30 PM',
      timeId: '1930'
    },{
      id: 41,
      time: '08:00 PM',
      timeId: '2000'
    },{
      id: 42,
      time: '08:30 PM',
      timeId: '2030'
    },{
      id: 43,
      time: '09:00 PM',
      timeId: '2100'
    },{
      id: 44,
      time: '09:30 PM',
      timeId: '2130'
    },{
      id: 45,
      time: '10:00 PM',
      timeId: '2200'
    },{
      id: 46,
      time: '10:30 PM',
      timeId: '2230'
    },{
      id: 47,
      time: '11:00 PM',
      timeId: '2300'
    },{
      id: 48,
      time: '11:30 PM',
      timeId: '2330'
    }
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
