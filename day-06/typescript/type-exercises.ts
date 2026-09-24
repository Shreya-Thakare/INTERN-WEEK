import type { Employee } from './employee-types';
const employees: Employee[] = [{id:1,name:'Asha Patil',email:'asha@example.com',department:'Engineering',position:'Developer',salary:65000}];
const getAverageSalary = (items: Employee[]): number => items.reduce((sum,item)=>sum+item.salary,0)/items.length;
console.log(getAverageSalary(employees));
