//anagram
//input(('utsav','vasut'), true)
//input(('utsav','uusatv), false)
console.log(getFrequency('uutsav', 'vuastu'))
function getFrequency(string1, string2) {
    var count1 = {}
    var count2 = {}
    var low = string1.toLowerCase()
    var low1 = string2.toLowerCase()
    for (var i = 0; i < low.length; i++) {
        var character1 = low.charAt(i)
        if (count1[character1]) {
            count1[character1]++
        }
        else {
            count1[character1] = 1
        }
    }
    for (var i = 0; i < low1.length; i++) {
        var character2 = low1.charAt(i)
        if (count2[character2]) {
            count2[character2]++
        }
        else {
            count2[character2] = 1
        }
    }
    var attributes1 = Object.keys(count1)
    var attributes2 = Object.keys(count2)
    if (attributes1.length !== attributes2.length) {
        return false
    }
    for (i = 0; i < attributes1.length; i++) {
        var value = attributes1[i]
        if (count1[value] !== count2[value]) {
            return false
        }
    }
    return true
}


//maximum streak
//input[1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1]
// '1' has the maximum streak of '7' so
//output: 7
function streak(number) {
    var element
    var count
    var maxCount = 0
    var index
    var actualIndex
    for (var i = 0; i < number.length; i++) {
        if (element == number[i]) {
            count++
        } else {
            count = 1
            index = i
        }
        element = number[i]
        if (count > maxCount) {
            actualIndex = index
            maxCount = count
        }
        console.log(actualIndex)
    }
    return maxCount
}


//equal number of 'x' and 'o'
//input(('xxoo'), true)
//input(('xXoO), true)
//input(('XoO), false)
//input(('XXo'), false)
function XO(str) {
    var count1 = 0
    var count2 = 0
    var string = str.toLowerCase()
    for (var i = 0; i < str.length; i++) {
        if (string.charAt(i) === 'x') {
            count1 = count1 + 1
        }
    }
    for (var j = 0; j < str.length; j++) {
        if (string.charAt(j) === 'o') {
            count2 = count2 + 1
        }
    }
    if (count1 === count2) {
        return true
    }
    else {
        return false
    }
}


//swap numbers
//input [a,b] = [2,3]
//output [a,b] = [3,2]
console.log(swap(4, 1))
function swap(a, b) {
    var temp = 0
    temp = a
    a = b
    b = temp
    return [a, b]
}


//palindrome for number
//input((12321), true)
//output((12322), false)
console.log(palindrome(23443))
function palindrome(number) {
    var numberPassed = number.toString()
    console.log(char)
    for (var i = 0; i < numberPassed.length; i++) {
        for (var j = numberPassed.length - 1; j >= i; j--) {
            var char = numberPassed[i]
            var char1 = numberPassed[j]
            if (char === char1) {
                return 'number is palindrome'
            }
            else {
                return false
            }
        }
    }
}



//find unique number
//input[1,1,1,1,1,2,1,1,1,1,1]
//output 2
console.log(findUniq([1, 1, 1, 1, 2, 1, 1, 1, 1, 1]))
function findUniq(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = arr.length - 1; j >= 1; j--) {
            if (arr[i] !== arr[j]) {
                return arr[j]
            }
        }
    }
}


//capitalize each first letter in a sentence
//input('utsav baral')
//output('Utsav Baral')
console.log(uppercase('utsav baral'))
function uppercase(string) {
    var splitStr = string.split(' ')
    console.log(splitStr)
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1)
    }
    return (splitStr.join(' '))
}


//sum of two small numbers in an array
//input[4,2,1,,5,6] output: 3
//input[6,5,9,3,7] output: 8
console.log(sumTwoSmallestNumbers([29, 1, 2]))
function sumTwoSmallestNumbers(numbers) {
    small = numbers[0]
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] <= small) {
            var small = numbers[i]
        }
    }
    console.log(small)
    small1 = numbers[1]
    for (var j = 0; j < numbers.length; j++) {
        if (numbers[j] != small) {
            if (numbers[j] < small1)
                var small1 = numbers[j]
        }
    }
    console.log(small1)
    return small + small1
}

