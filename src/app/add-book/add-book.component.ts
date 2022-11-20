import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addbookForm = new FormGroup({
    bookidForm: new FormControl('', [Validators.required]),
    bookNmForm: new FormControl('', [Validators.required]),
    authorForm: new FormControl('', [Validators.required]),
    avlBooksForm: new FormControl('', [Validators.required,Validators.pattern('[0-9]*')]),
  });

  formValue: any[] = [];
  tblVal: boolean = false;

  errorMsg: boolean = false;

  
  addbook() {

    var bookid = this.addbookForm.get('bookidForm')?.value;
    var bookname = this.addbookForm.get('bookNmForm')?.value;
    var author = this.addbookForm.get('authorForm')?.value;
    var avlBooks = this.addbookForm.get('avlBooksForm')?.value;

    // console.log(this.addbookForm.value);
    console.log(this.addbookForm.valid);

    //  var Formvalue = this.addbookForm.value;
    // console.log(this.formValue);

    if (this.addbookForm.valid) {
      this.tblVal = true;

    this.formValue.push({
      _bookid: bookid,
      _bookname: bookname,
      _author: author,
      _avlBooks: avlBooks
    });
    this.errorMsg=false;
    this.addbookForm.reset();
    } else {
      
      this.errorMsg=true;
    }
  
    console.log(this.formValue);
  }
del(delval:number){
  this.formValue.splice(delval,1)
}

}
