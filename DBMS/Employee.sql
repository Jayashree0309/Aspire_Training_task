-- Title: Employee Table
-- Author: S.Jayashree
-- Created Date: 02.04.2024
-- Last modified Date: 02.04.2024
-- Reviewed By:
-- Reviewed Date: 



CREATE TABLE `mydb1`.`employee` (
  `EmployeeId` INT NOT NULL,
  `Name` VARCHAR(60) NOT NULL,
  `Department` VARCHAR(50) NULL,
  `DepartmentID` INT NOT NULL,
  `DOB` DATE NULL,
  `Designation` VARCHAR(45) NULL,
  `Address` VARCHAR(60) NULL,
  `ContactNo` VARCHAR(10) NULL,
  `Email` VARCHAR(45) NULL,
  PRIMARY KEY (`EmployeeId`),
 );


INSERT INTO employee (EmployeeId, Name, Department, DepartmentId, DOB, Designation,Address, ContactNo, Email)
VALUES(1011,'Sharma','Development',1,'2001-09-08','Software Engineer','43,K.K.Road,Vpm','9923653289','sharma@gmail.com');

SELECT * FROM mydb1.employee;

-- Joins

SELECT * From employee right join department on employee.DepartmentID=department.DepartmentId;

SELECT * From employee left join department on employee.DepartmentID=department.DepartmentId;

update employee set Designation='Team Lead' where EmployeeId=1011;

delete from employee where EmployeeId=1014;


CREATE TABLE `mydb1`.`department` (
  `DepartmentId` INT NOT NULL,
  `Department` VARCHAR(45) NOT NULL,
  `EmployeeId` INT NOT NULL,
  PRIMARY KEY (`DepartmentId`),
);

INSERT INTO `mydb1`.`department` (`DepartmentId`, `Department`, `EmployeeId`) VALUES ('1', 'Development', '1011');

SELECT * FROM mydb1.department;

SELECT Name,Email,ContactNo FROM employee INNER JOIN department ON employee.DepartmentId=department.DepartmentId;


