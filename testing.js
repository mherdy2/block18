// Unit Tests:
// A function called "multiplication" that returns the product of the two input numbers.
// Expect multiplication(2, 3) to be a number
// Expect multiplication(2, 3) to be equal to 6
// Expect multiplication(-2, 3) to be equal to -6
// Expect multiplication(2, 0) to be equal to 0
// Expect multiplication("a", 3) to be an error
// Expect multiplication(2) to be an error
// Expect multiplication() to be an error
// A function called "concatOdds" takes two arrays of integers as arguments. It should return a single array that only contains the odd numbers, in ascending order, from both of the arrays.
// Expect concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]) to be an array
// Expect concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]) to be equal to [-1, 1, 3, 9, 15]
// Expect concatOdds([], []) to be an empty array
// Expect concatOdds([2, 4, 6], [1, 3, 5]) to be equal to [1, 3, 5]
// Expect concatOdds([2, 4, 6], [2, 4, 6]) to be an empty array
// Expect concatOdds([2, 4, 6], "not an array") to be an error
// Expect concatOdds("not an array", [2, 4, 6]) to be an error
// Expect concatOdds([1, 1, 1], [3, 3, 3]) to be equal to [1, 3]

// Functional Tests:
// A shopping cart checkout feature that allows a user to check out as a guest (without an account),
//  or as a logged-in user. They should be allowed to do either, but should be asked if they want to create an account or log in if they check out as a guest.

// When a user adds an item to their cart, it should be reflected in the cart total.
// When a user removes an item from their cart, it should be reflected in the cart total.
// When a user checks out as a guest, they should be asked for their shipping and billing information.
// When a user checks out as a guest and fills in all required fields, their order should be placed and they should receive an order confirmation.
// When a user checks out as a guest but leaves required fields blank, they should be prompted to fill in all required fields.
// When a user logs in and goes to their cart, their previously added items should be in their cart.
// When a user logs in and goes to their cart, their previously added items should be reflected in the cart total.
// When a user logs in and goes to the checkout page, their shipping and billing information should be pre-filled if they have saved it before.
// When a user logs in and goes to the checkout page, they should have the option to save their shipping and billing information for future purchases.
// When a user logs in and goes to the checkout page, they should be able to choose a saved payment method or enter a new one.
// When a user logs in and goes to the checkout page, their order should be placed and they should receive an order confirmation.
// When a user logs in and goes to the checkout page but leaves required fields blank, they should
