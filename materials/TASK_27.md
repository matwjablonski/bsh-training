## Task 27

Estimation: 20 minutes

- in index.html create contact form with 3 fields: email, name and message
- handle request from that form
- validate all fields:
  - all are required
  - email should be a valid email
  - message should be longer than 50 characters
- remember about sanitizing data
- you can use `express-validator`
- if data are correct - send to browser thankyou page html (you need to prepare it), if not send error page
