import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators, NgForm, FormControl } from '@angular/forms';
import { Employee } from './shared/models/employee/employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'new-app';
  public showForm = false;
  public NotValid = false;
  public employees: Array<Employee> = [];

  public employeeForm: FormGroup;
  constructor(
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,

  ) {}


  ngOnInit() {

    // ______ start build employee form __________
    this.employeeForm = this.formBuilder.group({
      employee_id: [{value:null,disabled: true}, [Validators.required] ],
      employee_name: ["", [Validators.required,Validators.pattern('[a-zA-Z ]*')] ],
      employee_salary: ["", [Validators.required] ],
      employee_age: ["", [Validators.required]]
    })    
    // ______ end Build employee form __________


    this.employees = [
        {
          "id": 1,
          "employee_name": "Tiger Nixon",
          "employee_salary": 320800,
          "employee_age": 61
        },
        {
          "id": 2,
          "employee_name": "Garrett Winters",
          "employee_salary": 170750,
          "employee_age": 63
        },
        {
          "id": 3,
          "employee_name": "Ashton Cox",
          "employee_salary": 86000,
          "employee_age": 66
        },
        {
          "id": 4,
          "employee_name": "Cedric Kelly",
          "employee_salary": 433060,
          "employee_age": 22
        },
        {
          "id": 5,
          "employee_name": "Airi Satou",
          "employee_salary": 162700,
          "employee_age": 33
        },
        {
          "id": 6,
          "employee_name": "Brielle Williamson",
          "employee_salary": 372000,
          "employee_age": 61
        },
        {
          "id": 7,
          "employee_name": "Herrod Chandler",
          "employee_salary": 137500,
          "employee_age": 59
        },
        {
          "id": 8,
          "employee_name": "Rhona Davidson",
          "employee_salary": 327900,
          "employee_age": 55
        },
        {
          "id": 9,
          "employee_name": "Colleen Hurst",
          "employee_salary": 205500,
          "employee_age": 39
        },
        {
          "id": 10,
          "employee_name": "Sonya Frost",
          "employee_salary": 103600,
          "employee_age": 23
        }
    ];
    
  }

  openEditEmployeeDialog(emp){
    this.toggleTheForm();
    // ______ start set Value to employees form __________
    this.employeeForm.setValue({
      employee_id: emp.id,
      employee_name: emp.employee_name,
      employee_salary: emp.employee_salary,
      employee_age: emp.employee_age, 
    }) 
    // ______ end set Value to employees form __________
  }

  openAddEmployeeDialog(){
    this.toggleTheForm();
  }

  // ______ start add || update employee form __________
  onEmpFormSubmit(){
    // validation

    if((this.employeeForm.get('employee_name').hasError('pattern'))){      
      this._snackBar.open("", "The name should be alphabetic characters", {
        duration: 2000
      });
      return false;
    }

    if(this.employeeForm.invalid){
      this._snackBar.open("", "All fields are required", {
        duration: 2000
      });
      return false;
    }
    
    if(this.employeeForm.get('employee_name').value.length < 3){
      this._snackBar.open("", "The name have to be at least 3 chars", {
        duration: 2000
      });
      return false;
    }


    if(isNaN(this.employeeForm.get('employee_salary').value)){
      this._snackBar.open("", "The salary have to be a valid number", {
        duration: 2000
      });
      return false;
    }


    if(isNaN(this.employeeForm.get('employee_age').value)){
      this._snackBar.open("", "The age have to be a valid number", {
        duration: 2000
      });
      return false;
    }
    
    
    // end validation

    this.NotValid = false;
    let employeeForm = this.employeeForm.getRawValue();
    if(employeeForm.employee_id) { // update
      employeeForm.id       = employeeForm.employee_id;
      let updateEmp         = this.employees.find(this.findIndexToUpdate, employeeForm.employee_id);
      let index             = this.employees.indexOf(updateEmp);
      this.employees[index] = employeeForm;
      this._snackBar.open("", "Employee successfully updated", {
        duration: 2000
      });
    } else { // add
      // get last id
      if(this.employees[this.employees.length - 1]){
        employeeForm.id = this.employees[this.employees.length - 1].id + 1;
      } else {
        employeeForm.id = 1;
      }
      this.employees.push(employeeForm);
      this._snackBar.open("", "Employee successfully added", {
        duration: 2000
      });
    }
    this.employeeForm.reset();
    this.toggleTheForm();
  }

  findIndexToUpdate(newItem) { 
        return newItem.id === this;        
  }

  // delete employee
  deleteEmployee(emp_id:number) {
    this.employees = this.employees.filter(({ id }) => id !== emp_id);
    this._snackBar.open("", "Employee deleted successfully :)", {
      duration: 2000
    });
  }

  toggleTheForm(){
    this.showForm = this.showForm ? false : true;
  }


  cancelTheForm(){
    this.showForm = false;
    this.employeeForm.reset();
  }

  ngOnDestroy() {
    
  }
}
