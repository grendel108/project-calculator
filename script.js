// Verify that calculator's JS file is loaded.
console.log("Retirement Calculator loaded.");

// Server-side calculator: /benefits/Calculators/RetCalc/servlet/retcalcservlets.calculator

// Assign html input elements to JS variables.
let retPlan = document.getElementById("retPlan");
let avgSalary = document.getElementById("avgSalary");
let serviceCredit = document.getElementById("serviceCredit");
let retAge = document.getElementById("retAge");
let estSSABenefit = document.getElementById("estSSABenefit");
let SSAYears = document.getElementById("ssaYears");

// Look up age factor. Both calc functions would use this, so leave as global variable.
// let ageFactor = lookupAgeFactor (retPlan.value, retAge.value);

// Benefit calculation amount.
let retBenefit;

// Assign Submit button and results to JS variable.
let submitElem = document.getElementById("submit");
let resultElem = document.getElementById("results");

// Event listener for Submit button.
// Later, add a function that will call different calc function depending on Plans ABC or Plan E.
submitElem.addEventListener("click", function() {calcPlanABCBenefit(retPlan.value, retAge.value, avgSalary.value, serviceCredit.value)});
// submitElem.addEventListener("click", calcPlanEBenefit);


/////////////// FUNCTION DEFINITIONS ////////////////////
// Plan ABC benefit calculation
function calcPlanABCBenefit (plan_p, age_p, salary_p, serviceCredit_p) {
    // let ageFactor = lookupAgeFactor (plan_p, age_p);
    // Why is this not working if declared outside of function? Never mind. Why not just use the lookup function in the formula itself?

    retBenefit = salary_p * serviceCredit_p * lookupAgeFactor (plan_p, age_p) / 60;
    resultElem.textContent = retBenefit;
}

// Plan E benefit calculation 
function calcPlanEBenefit () {
    retBenefit = avgSalary.value * serviceCredit.value * 0.02 * lookupERA(retAge.value);
    resultElem.textContent = retBenefit;
}

// Look up age factor based on Plan A, B, or C
function lookupAgeFactor (plan, age) {
        return planAFactors[age];
function lookupAgeFactor (plan_p, age_p) {
    if (plan_p === "A") {
        return planAFactors[age_p];
    } else if (plan_p === "B") {
        return planBFactors[age_p];
    } else {
        return planCFactors[age_p];
    }
}

// Looks up ERA factor in Plan E
function lookupERA (age) {
    return eraFactors[age];
}
/////////////////////////////////////////////////////////


////////////// AGE FACTOR TABLES ///////////////////////
// Plan A Age Factors
let planAFactors = {
    50: 0.8850,
    51: 0.9125,
    52: 1.0000,
    53: 1.0447,
    54: 1.1048,
    55: 1.1686
}


// Plan B Age Factors
let planBFactors = {
    50: 0.7454,
    51: 0.7882,
    52: 0.8346,
    53: 0.8850,
    54: 0.9399,
    55: 1.0000
}


// Plan C Age Factors
let planCFactors = {
    50: 0.7091,
    51: 0.7457,
    52: 0.7816,
    53: 0.8181,
    54: 0.8556,
    55: 0.8954
}


let eraFactors = {
        55: 0.3748,
        56: 0.4109,
        57: 0.4511,
        58: 0.4957,
        59: 0.5454,
        60: 0.6009,
        61: 0.6631,
        62: 0.7328,
        63: 0.8113,
        64: 0.8998,
        65: 1.0000
}







// https://www.webmasterworld.com/javascript/4451217.htm

// Added this line locally on Macbook.