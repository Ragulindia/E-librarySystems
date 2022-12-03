import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { from } from 'rxjs';
import { BookPrice } from '../model/bookprice';

@Component({
  selector: 'app-price-details',
  templateUrl: './price-details.component.html',
  styleUrls: ['./price-details.component.css']
})
export class PriceDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  bookPriceForm = new FormGroup({
    categorySelect: new FormControl('--select--')
  });




  allBook1: boolean = false;
  motivationBook1: boolean = false;
  novelBook1: boolean = false;
  comicBook1: boolean = false;


  books() {
    var selectValue = this.bookPriceForm.controls.categorySelect.value;
    console.log(selectValue);
    if (selectValue == '--select--') {
      this.allBook1 = false;
      this.motivationBook1 = false;
      this.novelBook1 = false;
      this.comicBook1 = false;
    }
    else if (selectValue == 'allbooks') {
      this.allBook1 = true;
      this.motivationBook1 = false;
      this.novelBook1 = false;
      this.comicBook1 = false;
    }
    else if (selectValue == 'Motivational') {
      this.allBook1 = false;
      this.motivationBook1 = true;
      this.novelBook1 = false;
      this.comicBook1 = false;
    }
    else if (selectValue == 'Novel') {
      this.allBook1 = false;
      this.motivationBook1 = false;
      this.novelBook1 = true;
      this.comicBook1 = false;
    }
    else if (selectValue == 'comic') {
      this.allBook1 = false;
      this.motivationBook1 = false;
      this.novelBook1 = false;
      this.comicBook1 = true;
    }


  }
  priceSubmit() {
    var selectValue1 = this.bookPriceForm.controls.categorySelect.value;
    // console.log(selectValue1);
  }

  // allbooks() {
  //   this.allBook1 = true;
  //   this.motivationBook1 = false;
  //   this.novelBook1 = false;
  //   this.comicBook1 = false;
  // }
  // motivationalbooks() {
  //   this.motivationBook1 = true;
  //   this.allBook1 = false;
  //   this.novelBook1 = false;
  //   this.comicBook1 = false;
  // }
  // novelbooks() {
  //   this.novelBook1 = true;
  //   this.allBook1 = false;
  //   this.motivationBook1 = false;
  //   this.comicBook1 = false;
  // }
  // comicbooks() {
  //   this.comicBook1 = true;
  //   this.allBook1 = false;
  //   this.motivationBook1 = false;
  //   this.novelBook1 = false;

  // }




  allBooks: BookPrice[] = [
    {
      bookId: 1001,
      bookName: 'Atomic Habits',
      bookAuthor: 'James Clear',
      bookPrice: 450
    },
    {
      bookId: 1002,
      bookName: 'Lord of Rings',
      bookAuthor: 'J.R.R.Tolkien',
      bookPrice: 750
    },
    {
      bookId: 1003,
      bookName: 'The 5AM Club',
      bookAuthor: 'Robin sharma',
      bookPrice: 350
    },
    {
      bookId: 1004,
      bookName: 'Psychology of Money',
      bookAuthor: 'MOrgan Housel',
      bookPrice: 1050
    },
    {
      bookId: 1005,
      bookName: 'Harry potter',
      bookAuthor: 'j.k.Rowling',
      bookPrice: 1750
    },
    {
      bookId: 1006,
      bookName: 'Rich Dad Poor Dad',
      bookAuthor: 'Robert kiyosaki',
      bookPrice: 900
    },
    {
      bookId: 1007,
      bookName: 'A Million Thoughts',
      bookAuthor: 'Astha anand',
      bookPrice: 350
    },
    {
      bookId: 1008,
      bookName: 'The secret',
      bookAuthor: 'Rhonda byrne',
      bookPrice: 700
    },
    {
      bookId: 1009,
      bookName: 'The Magic',
      bookAuthor: 'J.R.R.Tolkien',
      bookPrice: 650
    },
    {
      bookId: 1010,
      bookName: 'Think like a Monk',
      bookAuthor: 'Jay shetty',
      bookPrice: 700
    },
    {
      bookId: 1011,
      bookName: 'Mindset',
      bookAuthor: 'Dr.Carol',
      bookPrice: 850
    },
    {
      bookId: 1012,
      bookName: 'Do Epic Shit',
      bookAuthor: 'Ankur Warikoo',
      bookPrice: 900,
    },
    {
      bookId: 1013,
      bookName: 'Deep work',
      bookAuthor: 'Cal newport',
      bookPrice: 780,
    },
    {
      bookId: 1014,
      bookName: 'Eat that Frog',
      bookAuthor: 'Brian tracy',
      bookPrice: 500,
    },
    {
      bookId: 1015,
      bookName: 'Invisible Man',
      bookAuthor: 'Ralph Elliso',
      bookPrice: 599,
    },
  ]
  motivationalBooks: BookPrice[] = [
    {
      bookId: 2001,
      bookName: 'Atomic Habits',
      bookAuthor: 'James Clear',
      bookPrice: 450
    },
    {
      bookId: 2002,
      bookName: 'Life whitout limits',
      bookAuthor: 'Nick bujicic',
      bookPrice: 999
    },
    {
      bookId: 2003,
      bookName: 'Autobiography of YOGI',
      bookAuthor: 'Parmhansa Yagananda',
      bookPrice: 450
    },
    {
      bookId: 2004,
      bookName: 'Think and Grow Rich',
      bookAuthor: 'Napoleon Hill',
      bookPrice: 450
    },
    {
      bookId: 2005,
      bookName: 'The Power of Positive Thinking',
      bookAuthor: 'Norman Vincent Peale',
      bookPrice: 399
    },
    {
      bookId: 2006,
      bookName: 'The MounTain Is You',
      bookAuthor: 'Brianna Wiest',
      bookPrice: 450
    },
  ]

  novelBooks: BookPrice[] = [
    {
      bookId: 3001,
      bookName: 'Invisible Man',
      bookAuthor: 'Ralph Ellison',
      bookPrice: 1150
    },
    {
      bookId: 3002,
      bookName: 'Ponniyin Selvan-1',
      bookAuthor: 'Kalki Krishnamurthi',
      bookPrice: 550
    }, {
      bookId: 3003,
      bookName: 'Ponniyin Selvan-2',
      bookAuthor: 'Kalki Krishnamurthi',
      bookPrice: 350
    },
    {
      bookId: 3004,
      bookName: 'Ponniyin Selvan-3',
      bookAuthor: 'Kalki Krishnamurthi',
      bookPrice: 300
    },
    {
      bookId: 3005,
      bookName: 'Ponniyin Selvan-4',
      bookAuthor: 'Kalki Krishnamurthi',
      bookPrice: 550
    },
    {
      bookId: 3006,
      bookName: 'Ponniyin Selvan-5',
      bookAuthor: 'Kalki Krishnamurthi',
      bookPrice: 750
    },
    {
      bookId: 3007,
      bookName: 'Velpari-1',
      bookAuthor: 'S.Venkatesan',
      bookPrice: 650
    },
    {
      bookId: 3007,
      bookName: 'Velpari-2',
      bookAuthor: 'S.Venkatesan',
      bookPrice: 850
    },
  ]
  comicBooks: BookPrice[] = [

    {
      bookId: 4001,
      bookName: 'El Deafo',
      bookAuthor: 'Cece Bell',
      bookPrice: 200,
    },
    {
      bookId: 4002,
      bookName: 'Smile',
      bookAuthor: 'Raina Telgemeier',
      bookPrice: 200,
    },
    {
      bookId: 4003,
      bookName: 'New Kit',
      bookAuthor: 'Jerry Craft',
      bookPrice: 300,
    },
    {
      bookId: 4004,
      bookName: 'Dog Man:Fetch-22',
      bookAuthor: 'Dav Pilkey',
      bookPrice: 180,
    },
    {
      bookId: 4005,
      bookName: 'Dog Man:Unleashed',
      bookAuthor: 'Dav Pilkey',
      bookPrice: 170,
    },
  ]

  purchase(buybook:number)
  {
    this.allBooks.splice(buybook,1)
  }
  

}
