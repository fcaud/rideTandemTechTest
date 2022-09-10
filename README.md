# Tech Test Notes

## Assumptions & Decisions

- Split Card into own component
- Added utils for api service call and types file
- Endpoint did not have days bus not in service so added data to existing endpoint
- Bus data fetched on mount and at intervals of 10s. API will not be called if previous request has not resolved, if slow connection (e.g. in rural area with poor internet/signal).
- If bus is 1min away shows as 'Due'.

## Suggestions for further implementation

- Sort on departing soonest (implemented)
- Replace 'Park Road' with current location of the user
- Filter/search for particular bus service
- Show user error message if bad requests
- Show user 'no services in your area' if no services returned
- Add linting for 'web'
