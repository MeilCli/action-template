# action-template
This repository is my GitHub Action Repository template

## Usage of this template
1. use this template
1. rename package at `package.json`
1. change labels use `.github/labels.yml` and [MobileAct/GithubLabelSetUpper](https://github.com/MobileAct/GithubLabelSetUpper)
   - change `bug` and `question` labels before GithubLabelSetUpper, because it tool has bug case insensitive
1. add bot account token `MEILCLI_BOT`(`public_repo` scope)
1. add branch protection rule `master`
   - `Require pull request reviews before merging`
     - `Dismiss stale pull request approvals when new commits are pushed`
     - `Require review from Code Owners`
   - `Require status checks to pass before merging`
     - change `build` to required
1. add branch protection rule `v*`
1. change setting to off
   - Wikis
   - Projects
   - Allow rebase merging
1. change setting to on
    - Automatically delete head branches
1. remove comment out `release.yml` schedule cron
1. add metrics
   - create gist
   - add secrets
   - change repository
   - update README

### For without MeilCli
changelist:
- CodeOwner
- Dependabot
- secret name at `ci.yml` and `merge.yml`
- license copyright
- add metrics

## Contributes
[<img src="https://gist.github.com/MeilCli/a868dd04410c3db570788e6449f48f81/raw/6f528257820a27dfcb81f4fae023a8c734aed21f/metrics_contributors.svg">](https://github.com/MeilCli/action-template/graphs/contributors)

### Could you want to contribute?
see [Contributing.md](./.github/CONTRIBUTING.md)

## License
[<img src="https://gist.github.com/MeilCli/a868dd04410c3db570788e6449f48f81/raw/6f528257820a27dfcb81f4fae023a8c734aed21f/metrics_licenses.svg">](LICENSE.txt)

### Using
- [actions/toolkit](https://github.com/actions/toolkit), published by [MIT License](https://github.com/actions/toolkit/blob/master/LICENSE.md)