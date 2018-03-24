/*
function bekfast(name, age) {
	alert("I like " + name +". ");
	alert(name + ", which he is " + age + " years old, is awesome.");
}

var age = prompt("Yo age");
var name = prompt("Yo name");
bekfast(name, age);
*/

function chudnovsky(digits) {
    Decimal.precision = digits + 2;

    function factorial(n) {
        var i = 2, r = new Decimal(1);
        for ( ; i <= n; r = r.times(i++) );
        return r;
    }

    // The number of decimal digits the algorithm generates per iteration.
    var digits_per_iteration = 14.1816474627254776555;
    var iterations = ( digits / digits_per_iteration ) + 1;

    var a = new Decimal(13591409);
    var b = new Decimal(545140134);
    var c = new Decimal(-640320);

    var numerator, denominator;
    var sum = new Decimal(0);

    for ( var k = 0; k < iterations; k++ ) {

        // (6k)! * (13591409 + 545140134k)
        numerator = factorial( 6*k ).times( a.plus( b.times(k) ) );

        // (3k)! * (k!)^3 * -640320^(3k)
        denominator = factorial(3*k).times( factorial(k).pow(3) ).times( c.pow(3*k) );

        sum = sum.plus( numerator.div(denominator) );
    }

    // pi = ( sqrt(10005) * 426880 ) / sum
    return Decimal.sqrt(10005).times(426880).div(sum).toSD(digits);
}





function piCalc() {
    
    
    var pi = chudnovsky(2000);
    
    alert("hi");
    alert(pi);
    
}

