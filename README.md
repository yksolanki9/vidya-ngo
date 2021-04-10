## About this project
This is a simple React app built using Material-ui which integrated with [Razorpay](https://razorpay.com/docs/) payment gateway. You can check out this project [here](https://fast-sands-20773.herokuapp.com/).

## Test Cards and UPI Details

Follow these steps to use the test card details:

* Click on Donate button
* On the Checkout, select Card as the payment method.
* Enter the card details. This depends on the flow you are testing.
* Enter any random CVV.
* Enter any future date as the expiry date.
* Click Pay. A sample payment page is displayed.
    * Click Success to make the payment successful.
    * Click Failure to fail the payment.

### Test Card for Domestic Payment

| Card Network | Card Number | CVV | Expiry Date |
|--------------|-------------|-----|-------------|
| Mastercard | 5104 0600 0000 0008 | Random CVV | Any future date |
| Visa | 4111 1111 1111 1111 | Random CVV | Any future date |

### Test Card for International Payments

| Card Network | Card Number | CVV | Expiry Date |
|--------------|-------------|-----|-------------|
| Mastercard | 5555 5555 5555 4444 | Random CVV | Any future date |
| Mastercard | 5105 1051 0510 5100 | Random CVV | Any future date |
| Visa | 4012 8888 8888 1881 | Random CVV | Any future date |
| Visa | 4000 1841 8621 8826 | Random CVV | Any future date |

### Test UPI ID

Follow these steps to use the test card details:

* On the Checkout, select UPI as the payment method.
* Enter the UPI ID.
    * Test payment success flow using success@razorpay.
    * Test payment failure flow using failure@razorpay.