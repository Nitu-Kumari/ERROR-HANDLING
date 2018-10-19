# 
TRY
~~~
The try statement  test a block of code for errors.
~~~
# CATCH
~~~
The catch statement handle the error.
~~~
# THROW 
~~~
The throw statement create custom errors.
.throw an exception (throw an error).
The exception can be a JavaScript String, a Number, a Boolean or an Object.

~~~
# FINALLY
~~~
The finally statement execute code, after try and catch, regardless of the result.
~~~

# EXAMPLE

~~~
try {
    Block of code to try
}
catch(err) {
    Block of code to handle errors
} 
finally {
    Block of code to be executed regardless of the try / catch result
}

~~~~

# Error Object
~~~
error object that provides error information when an error occurs.

 error object provides two useful properties: 
. name : Sets or returns an error name
.message: Sets or returns an error message (a string)

*Error Name Values

Six Type of Error name 

Error Name	
* EvalError 	An error has occurred in the eval() function

* RangeError	A number "out of range" has occurred

* ReferenceError	An illegal reference has occurred

* SyntaxError	A syntax error has occurred

* TypeError 	A type error has occurred

* URIError  	An error in encodeURI() has occurred

~~~



