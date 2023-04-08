# Utilities

This is a tool back of random useful functions.



### Getting Started

- `npm install @r-t-p/utilities`  From then you can 

- `npm run test` - Runs the test runner
- `npm run build` - Builds using `tsc` from configs in the `tsconfig.json`
- `npm run dev` - Runs build and watches

### Versioning

These commands should be run from the master branch when ready to bump a version.
Bumping a version will commit the bump and push it up as long as pushing tags up for release.

- `npm run bump` - Bumps current version i.e. `1.2.4` would bump to `1.2.5`
- `npm run bump-minor` - Bumps Minor version i.e. `1.2.4` would bump to `1.3.0`
- `npm run bump-major` - Bumps current version i.e. `1.2.4` would bump to `2.0.0`
