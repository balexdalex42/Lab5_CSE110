# Alex Tatoian Lab 5
## Explore Questions
1. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.   

You can't unit test the total message feature of a messaging application because a message feature would require multiple things such as making sure the message is valid, gets stored in a correct object format, is requested to be sent correctly, and the message is received on the other side. We can make small unit tests to test the functionality of each of these individual little parts (which should be **isolated** from exterior dependencies, ie: databases). Another problem with unit tests are that they:   

> Cannot test how these individual components interact with each other on an application/feature level.

This feature is too large and is would be dependent on multiple systems, which is why it could not necessarily be isolated and thus not a "unit-testable".

2. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.   
   
You would use a unit test to test the "max message length" feature of a messaging application. This is because testing if a message is more than 80 characters is **isolated**. Meaning as long as you have the message string, it is very easy to test if that message string is valid, thus a unit test would be very applicable for this feature!