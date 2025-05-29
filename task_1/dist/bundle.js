/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StudentClass: () => (/* binding */ StudentClass),
/* harmony export */   printTeacher: () => (/* binding */ printTeacher)
/* harmony export */ });
var teacher3 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};
console.log(teacher3);
var teacher4 = {
    firstName: 'Jane',
    lastName: 'Smith',
    fullTimeEmployee: true,
    yearsOfExperience: 5,
    location: 'New York',
    contract: true,
    rating: 4.7,
    department: 'Computer Science',
};
console.log(teacher4);
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);
function printTeacher(firstName, lastName) {
    return "".concat(firstName.charAt(0), ". ").concat(lastName);
}
console.log(printTeacher("John", "Doe"));
console.log(printTeacher("Jane", "Smith"));
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());

var student = new StudentClass("Alice", "Johnson");
console.log(student.displayName());
console.log(student.workOnHomework());

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ0dBLElBQU0sUUFBUSxHQUFZO0lBQ3hCLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLGdCQUFnQixFQUFFLEtBQUs7SUFDdkIsUUFBUSxFQUFFLEtBQUs7SUFDZixRQUFRLEVBQUUsUUFBUTtJQUNsQixRQUFRLEVBQUUsS0FBSztDQUNoQixDQUFDO0FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUV0QixJQUFNLFFBQVEsR0FBWTtJQUN4QixTQUFTLEVBQUUsTUFBTTtJQUNqQixRQUFRLEVBQUUsT0FBTztJQUNqQixnQkFBZ0IsRUFBRSxJQUFJO0lBQ3RCLGlCQUFpQixFQUFFLENBQUM7SUFDcEIsUUFBUSxFQUFFLFVBQVU7SUFDcEIsUUFBUSxFQUFFLElBQUk7SUFDZCxNQUFNLEVBQUUsR0FBRztJQUNYLFVBQVUsRUFBRSxrQkFBa0I7Q0FDL0IsQ0FBQztBQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7QUFNdEIsSUFBTSxTQUFTLEdBQWM7SUFDM0IsU0FBUyxFQUFFLE1BQU07SUFDakIsUUFBUSxFQUFFLEtBQUs7SUFDZixRQUFRLEVBQUUsUUFBUTtJQUNsQixnQkFBZ0IsRUFBRSxJQUFJO0lBQ3RCLGVBQWUsRUFBRSxFQUFFO0NBQ3BCLENBQUM7QUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBTWhCLFNBQVMsWUFBWSxDQUFDLFNBQWlCLEVBQUUsUUFBZ0I7SUFDOUQsT0FBTyxVQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLGVBQUssUUFBUSxDQUFFLENBQUM7QUFDL0MsQ0FBQztBQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBVzNDO0lBSUUsc0JBQVksU0FBaUIsRUFBRSxRQUFnQjtRQUM3QyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDO0lBRUQscUNBQWMsR0FBZDtRQUNFLE9BQU8sbUJBQW1CLENBQUM7SUFDN0IsQ0FBQztJQUVELGtDQUFXLEdBQVg7UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQzs7QUFFRCxJQUFNLE9BQU8sR0FBRyxJQUFJLFlBQVksQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztBQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgaW50ZXJmYWNlIFRlYWNoZXIge1xuICByZWFkb25seSBmaXJzdE5hbWU6IHN0cmluZztcbiAgcmVhZG9ubHkgbGFzdE5hbWU6IHN0cmluZztcbiAgZnVsbFRpbWVFbXBsb3llZTogYm9vbGVhbjtcbiAgeWVhcnNPZkV4cGVyaWVuY2U/OiBudW1iZXI7XG4gIGxvY2F0aW9uOiBzdHJpbmc7XG4gIFtwcm9wTmFtZTogc3RyaW5nXTogYW55O1xufVxuXG5jb25zdCB0ZWFjaGVyMzogVGVhY2hlciA9IHtcbiAgZmlyc3ROYW1lOiAnSm9obicsXG4gIGZ1bGxUaW1lRW1wbG95ZWU6IGZhbHNlLFxuICBsYXN0TmFtZTogJ0RvZScsXG4gIGxvY2F0aW9uOiAnTG9uZG9uJyxcbiAgY29udHJhY3Q6IGZhbHNlLFxufTtcblxuY29uc29sZS5sb2codGVhY2hlcjMpO1xuXG5jb25zdCB0ZWFjaGVyNDogVGVhY2hlciA9IHtcbiAgZmlyc3ROYW1lOiAnSmFuZScsXG4gIGxhc3ROYW1lOiAnU21pdGgnLFxuICBmdWxsVGltZUVtcGxveWVlOiB0cnVlLFxuICB5ZWFyc09mRXhwZXJpZW5jZTogNSxcbiAgbG9jYXRpb246ICdOZXcgWW9yaycsXG4gIGNvbnRyYWN0OiB0cnVlLFxuICByYXRpbmc6IDQuNyxcbiAgZGVwYXJ0bWVudDogJ0NvbXB1dGVyIFNjaWVuY2UnLFxufTtcblxuY29uc29sZS5sb2codGVhY2hlcjQpO1xuXG5pbnRlcmZhY2UgRGlyZWN0b3JzIGV4dGVuZHMgVGVhY2hlciB7XG4gIG51bWJlck9mUmVwb3J0czogbnVtYmVyO1xufVxuXG5jb25zdCBkaXJlY3RvcjE6IERpcmVjdG9ycyA9IHtcbiAgZmlyc3ROYW1lOiAnSm9obicsXG4gIGxhc3ROYW1lOiAnRG9lJyxcbiAgbG9jYXRpb246ICdMb25kb24nLFxuICBmdWxsVGltZUVtcGxveWVlOiB0cnVlLFxuICBudW1iZXJPZlJlcG9ydHM6IDE3LFxufTtcblxuY29uc29sZS5sb2coZGlyZWN0b3IxKTtcblxuaW50ZXJmYWNlIHByaW50VGVhY2hlckZ1bmN0aW9uIHtcbiAgKGZpcnN0TmFtZTogc3RyaW5nLCBsYXN0TmFtZTogc3RyaW5nKTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRUZWFjaGVyKGZpcnN0TmFtZTogc3RyaW5nLCBsYXN0TmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGAke2ZpcnN0TmFtZS5jaGFyQXQoMCl9LiAke2xhc3ROYW1lfWA7XG59XG5cbmNvbnNvbGUubG9nKHByaW50VGVhY2hlcihcIkpvaG5cIiwgXCJEb2VcIikpO1xuY29uc29sZS5sb2cocHJpbnRUZWFjaGVyKFwiSmFuZVwiLCBcIlNtaXRoXCIpKTtcblxuZXhwb3J0IGludGVyZmFjZSBTdHVkZW50Q29uc3RydWN0b3Ige1xuICBuZXcoZmlyc3ROYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcpOiBTdHVkZW50Q2xhc3NJbnRlcmZhY2U7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3R1ZGVudENsYXNzSW50ZXJmYWNlIHtcbiAgd29ya09uSG9tZXdvcmsoKTogc3RyaW5nO1xuICBkaXNwbGF5TmFtZSgpOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBTdHVkZW50Q2xhc3MgaW1wbGVtZW50cyBTdHVkZW50Q2xhc3NJbnRlcmZhY2Uge1xuICBmaXJzdE5hbWU6IHN0cmluZztcbiAgbGFzdE5hbWU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZykge1xuICAgIHRoaXMuZmlyc3ROYW1lID0gZmlyc3ROYW1lO1xuICAgIHRoaXMubGFzdE5hbWUgPSBsYXN0TmFtZTtcbiAgfVxuXG4gIHdvcmtPbkhvbWV3b3JrKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdDdXJyZW50bHkgd29ya2luZyc7XG4gIH1cblxuICBkaXNwbGF5TmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmZpcnN0TmFtZTtcbiAgfVxufVxuXG5jb25zdCBzdHVkZW50ID0gbmV3IFN0dWRlbnRDbGFzcyhcIkFsaWNlXCIsIFwiSm9obnNvblwiKTtcbmNvbnNvbGUubG9nKHN0dWRlbnQuZGlzcGxheU5hbWUoKSk7XG5jb25zb2xlLmxvZyhzdHVkZW50LndvcmtPbkhvbWV3b3JrKCkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9