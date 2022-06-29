# iTunes Album Search

This was built in approx. 5 hours.

Additional libraries used

- react-router
- styled-components

## Structure

This demonstrates a light version of my preferred project structure when additional state management is not required.

`screens` are responsible for data fetching
`components` are presentational

For speed of development I've colocated some of the StyledComponents in the same files as the components they affect / contain. On a larger project, these would likely be imported from separate files.

I'd also usually avoid hard-coded spacing, color, and font values. Ideally, these would be defined in a themes.js file and accessed in the styled components for the sake of consistency.
