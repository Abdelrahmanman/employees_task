import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators, NgForm, FormControl } from '@angular/forms';
import { Employee } from './shared/models/employee/employee.model';
import { EmployeesService } from 'src/app/core/services/srv1/employees/employees.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public employees: Array<Employee> = [];
  public showForm: boolean;
  public NotValid: boolean;


  public employeeForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private employeesService: EmployeesService,
  ) {
    this.employees  = this.employeesService.employees;
    this.showForm   = this.employeesService.showForm;
    this.NotValid   = this.employeesService.NotValid;
  }


  ngOnInit() {
    // ______ start build employee form __________
    this.employeeForm = this.formBuilder.group({
      employee_id: [{value:null,disabled: true}, [Validators.required] ],
      employee_name: ["", [Validators.required,Validators.pattern('[a-zA-Z ]*')] ],
      employee_salary: ["", [Validators.required] ],
      employee_age: ["", [Validators.required]]
    })    
    // ______ end Build employee form __________    
  }

  openEditEmployeeDialog(emp){
    this.employeesService.toggleTheForm();
    this.showForm   = this.employeesService.showForm;
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
    this.employeesService.toggleTheForm();
    this.showForm   = this.employeesService.showForm;
  }


  onEmpFormSubmit(employeeForm){
    this.employeesService.onEmpFormSubmit(employeeForm);
    this.employees  = this.employeesService.employees;
    this.showForm   = this.employeesService.showForm;
    this.NotValid   = this.employeesService.NotValid;
  }

  deleteEmployee(emp_id:number){
    this.employeesService.deleteEmployee(emp_id);
    this.employees = this.employeesService.employees;
  }


  cancelTheForm(){
    this.employeesService.showForm = false;
    this.showForm   = this.employeesService.showForm;
    this.employeeForm.reset();
  }

  ngOnDestroy() {
    
  }
}
