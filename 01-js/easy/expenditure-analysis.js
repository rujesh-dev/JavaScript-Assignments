/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  //  const transactions = [
  //           {
  //               id: 1,
  //               timestamp: 1656076800000,
  //               price: 10,
  //               category: 'Food',
  //               itemName: 'Pizza',
  //           },
  //           {
  //               id: 1,
  //               timestamp: 1656076800000,
  //               price: 10,
  //               category: 'Food',
  //               itemName: 'Pizza',
  //           },
  //            {
  //               id: 1,
  //               timestamp: 1656076800000,
  //               price: 10,
  //               category: 'Travel',
  //               itemName: 'Pizza',
  //           },
  //       ];
  const result = {};
  let sum =0;
  for(let val of transactions){
    const {category, price} = val;

    if(!result[category]){
      result[category] =0;
    }
      result[category] +=price;
    
 
   
    
    // result.push({"product":val.category, "amount":val.price});
  }
  // console.log(sum);

  const finalArr = [];
   for(let val in result){
  finalArr.push({"category":val, "totalSpent":result[val]}) 
  }
    return finalArr;
}

// console.log(calculateTotalSpentByCategory());


module.exports = calculateTotalSpentByCategory;