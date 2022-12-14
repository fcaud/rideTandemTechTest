# Tech Test Notes

## Assumptions & Decisions

- Split Card into own component (in components folder for future scalability).
- Added utils for api service call and types file.
- Endpoint did not have 'nonOperationalDays' data so added data to existing endpoint.
- Bus data fetched on mount and at intervals of 10s. API will not be called if previous request has not resolved, for example if it is a slow connection (e.g. in rural area with poor internet/signal).
- I have left the CSS in one file, but would split out to component specific files. If this were a bigger application I would use a pre-processor such as SASS and make use of variables and nesting.

## Suggestions for further implementation

- Sort on departing soonest (implemented)
- Replace 'Park Road' with current location of the user
- Filter/search for particular bus service
- Show user error message if bad requests
- Show user 'no services in your area' if no services returned
- Add linting for 'web'
- Map showing service routes and bus location (if available).
- Ability to click in to bus for more details, e.g. future stops
- Future days scheduling
- Show delays to user
- Use colours to highlight to user key info - e.g. delay in red, 'due' in pop colour
- Loading states when no data and fetching data in progress (but still showing stale data)
- Consider if due times should countdown if connection lost
