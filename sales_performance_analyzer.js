// Task 1 Create a Function to Calculate Average Sales
let salesData = [
 { name: 'Alice', sales: [12000, 15000, 13000] },
 { name: 'Bob', sales: [7000, 6000, 7500] },
 { name: 'Charlie', sales: [3000, 4000, 3500] },
  { name: 'Diana', sales: [9000, 8500, 9200] },
    ];
console.log(salesData);
// i was a bit confused for this task
function calculateAverageSales(salesData) {
    totalSales = salesData.reduce((sum, current) => sum + current, 0);
    return totalSales / salesData.length;
}
average = calculateAverageSales(salesData);
console.log(average);

// Task 2 Create a Function to Determine Performance Rating
function determinePerformanceRating(average) {
    if (average > 10000) {
      return "Excellent";
    } else if (average >= 7000 && average <= 10000) {
      return "Good";
    } else if (average >= 4000 && average < 7000) {
      return "Satisfactory";
    } else if (average < 4000) {
      return "Needs Improvement";
    } else {
      // in case of invalid input 
      return "Invalid sales data";
    }
  }

console.log(determinePerformanceRating(average));

// Task 3 Create a Function to Identify Top and Bottom Performers
function findTopAndBottomPreformers(name) {
    let (topPerformer, bottomPerformer) = name.reduce(acc, person) => 
        if person.totalSales > acc.topPreformer.totalSales; {
        return acc;
        } 
        if person.totalSales < acc.botomPerformer.totalSales;
        return acc;
    }
console.log(findTopAndBottomPreformers(name));

// Task 4 Combine Functions to Generate a Performance Report
function generatePerformanceReport(salesData);
let salespeopleWithRatings = salesData.map(person => {
    let averageSales = calculateAverageSales(person.sales);
    let performanceRating = determinePerformanceRating(average);
    
    return {
      name: person.name,
      average: averageSales,
      performanceRating: performanceRating
    };
  });
  
  // Find top and bottom performers
  const { topPerformer, bottomPerformer } = findTopAndBottomPerformers(salesData);
  
  // Format the report
  const report = {
    salespeople: salespeopleWithRatings,
    topPerformer: topPerformer ? {
      name: topPerformer.name,
      totalSales: topPerformer.totalSales
    } 
    bottomPerformer: bottomPerformer ? {
      name: bottomPerformer.name,
      totalSales: bottomPerformer.totalSales
    } 
  };
  
  return report;