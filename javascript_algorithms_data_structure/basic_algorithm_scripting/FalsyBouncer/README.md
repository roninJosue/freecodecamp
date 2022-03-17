## Falsy Bouncer
Remove all falsy values from an array.
Falsy values in JavaScript are ```false```, ```null```, ```0```, ```""```, ```undefined```, and ```NaN```.
Hint: Try converting each value to a Boolean.

### Tests
* ```bouncer([7, "ate", "", false, 9])``` should return ```[7, "ate", 9]```.
* ```bouncer(["a", "b", "c"])``` should return ```["a", "b", "c"]```.
* ```bouncer([false, null, 0, NaN, undefined, ""])``` should return ```[]```.
* ```bouncer([null, NaN, 1, 2, undefined])``` should return ```[1, 2]```.