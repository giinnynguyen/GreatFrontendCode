// https://www.greatfrontend.com/questions/javascript/array-filter
/**
 * @template T
 * @param { (value: T, index: number, array: Array<T>) => boolean } callbackFn
 * @param {any} [thisArg]
 * @return {Array<T>}
 */
Array.prototype.myFilter = function (callbackFn, thisArg) {
  const result = [];
    for (let i = 0; i < this.length; i++) {
        if (this[i] !== null && callbackFn.call(thisArg, this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};
/**
+ Filter() nhận tham số là một callbackFn -> callbackFn sẽ được execute cho từng phần tử của mảng, callbackFn trả về giá trị truthy/falsy
+ Filter() trả về một mảng chứa các phần tử thoả điều kiện của callbackFn
+ Filter() ko làm thay đổi mảng gốc, nó tạo ra một bản copy mới 

Lack-knowledge: 
+ call(): hàm này nhận vào tham số đầu tiên là thisArg, đây sẽ là giá trị biến this trong hàm này 
hàm apply() cũng tương tự call(), khác cái là apply() nhận vào tham số thứ 2 là một mảng, còn call() 2nd argument dưới dạng liệt kê.
call(this, arg1, arg2, arg3…) or call(this, …args)
apply(this, arrs[])
**/
