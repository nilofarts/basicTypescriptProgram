import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-factorial',
  templateUrl: './factorial.component.html',
  styleUrls: ['./factorial.component.css']
})
export class FactorialComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //factorial
  factorial(x) {
    if (x === 0) {
      return 1;
    }
    else {
      return x * this.factorial(x - 1);
    }

  }
  submit() {
    console.log(this.factorial(5));
  }

  arr = [1, 2, 4, 5, 4, 7];

  //unigue value in array
  uniques(arr) {
    debugger;
    var a = [];
    for (var i = 0, l = arr.length; i < l; i++)
      debugger;
    if (a.indexOf(arr[i]) === -1 && arr[i] !== '')
      a.push(arr[i]);
    return a;
  }
  submitArr() {
    console.log(this.uniques(this.arr))
  }

  //to get the integers in range (x, y).
  range(start_value, end_value) {
    debugger;
    if (end_value - start_value === 2) {
      debugger;
      return [start_value + 1];
    }
    else {
      debugger;
      var list = this.range(start_value, end_value - 1);
      list.push(end_value - 1);
      return list;
    }
  };

  submitRange() {
    console.log(this.range(2, 5));
  }

  exponent(x, y) {
    if (x === 0) {
      return 1;
    }
    else {
      return Math.pow(x, y);

    }
  }
  submitExponent() {
    console.log(this.exponent(2, 3));
  }

  a1 = [1, 3, 6, 8, 0, 5];
  //sort merge program
  sort(a1) {
    if (a1 === 0) { return 1 }
    else {
      return this.a1.sort();
    }

  }
  submitSort() {
    console.log(this.sort(this.a1));
  }

  isEqual() {
    var a = [1, 2, 3, 5];
    var b = [1, 2, 3, 5];
    // if length is not equal
    if (a.length != b.length)
      return "False";
    else {
      // comapring each element of array
      for (var i = 0; i < a.length; i++)
        if (a[i] != b[i])
          return "False";
      return "True";
    }
  }


}

