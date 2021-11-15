// Use insert() function to insert the number in textview.
function insert(num) 
{
    document.form1.textview.value = document.form1.textview.value + num;
}

// Use equal() function to return the result based on passed values.
function equal()
{
    var exp = document.form1.textview.value;
    if(exp)
    {
    document.form1.textview.value = eval(exp)
    }
}

/*
    IMPORTANT NOTE:
    need to click the number first and then the percent, 
    radical, squared, pie, sin, tan, or cos button
*/

// Use percent() function to divide the number by 100
function percent(num) 
{
    document.form1.textview.value = document.form1.textview.value /100;
}

// Use percent() function to find the square root of the number
function radical() 
{
    // in built function is used 
    document.form1.textview.value = Math.sqrt(document.form1.textview.value);
}

// Use squareRoot() function to find the result of the number squared
function squared() 
{
    // in built function is used 
    document.form1.textview.value = Math.pow(document.form1.textview.value, 2);
}

// Use sin() function to find the sin of a number
function sin() 
{
    // in built function is used 
    document.form1.textview.value = Math.sin(document.form1.textview.value, 2);
}

// Use cos() function to find the cos of a number
function cos() 
{
    // in built function is used 
    document.form1.textview.value = Math.cos(document.form1.textview.value, 2);
}

// Use tan() function to find the tan of a number
function tan() 
{
    // in built function is used 
    document.form1.textview.value = Math.tan(document.form1.textview.value, 2);
}

// Use pie() function to multiply the number by 3.14
function pie()
{
    document.form1.textview.value = document.form1.textview.value * 3.14;
}
