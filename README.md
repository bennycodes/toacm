Quick Start:

---

Set up dependencies:

`npm i -g serverless`

`npm i`

`brew install awscli` (or pip equivalent)

Configure AWS:
Get your access key id and secret key from the AWS console

Follow the steps listed here: https://docs.aws.amazon.com/cli/latest/reference/configure/

`aws configure --profile toacm` (append --profile toacm to any aws command to use this profile)

Deploy (example):

`serverless deploy -v --profile bennycodes --env dev`

Remove deployment (example):

`serverless remove --profile bennycodes --env dev`