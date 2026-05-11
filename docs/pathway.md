# Pathway
## Stage 1 - Content and Design [Completed]
- Begin writing out the planned content and save it in content-draft.md
- Wire frame the website using figma.
- Send wire and content that's planned to Compliance for review and approval.
- Finish out mock ups of the desktop and mobile website.
- Update GitHub with basic information for now.

## Stage 2 - Build Website Locally [In Progress]
- Start building out the website locally.
- Nuxt scaffolding
- Build out the pages
- Implement the design system
- Add footer
- Add nav
- Push to GitHub
- Test responsiveness via Lighthouse (95 and above required to pass)
- Update README.md
- Push to GitHub

## Stage 3 - Build AWS Infrastructure
- To do once compliance has signed off.
- Write Terraform: S3 Bucket (private), CloudFront distribution, ACM Certificate, Origin Access Control, CloudFront response headers policy with security headers, CloudFront function for URL rewrites.
- ACM cert validation CNAME to Cloudflare

## Stage 4 - DNS Cutover with Cloudflare
- Create CNAME record
- Set proxy to DNS only
- Post propogation, upload dist/ to S3 for initial deployment.

## Stage 5 - CI/CD with GitHub Actions + OIDC
- IAM OIDC for GitHub AWS link.
- On push to main -> run nuxt generate -> sync to S3 -> create CloudFront invalidation
- Add status badge to README.md

## Stage 6 - Polish
- Use securityheaders.com and tweak headers until A+
- Also tweak using Mozilla Observatory
- Verify repo organization, README architecture (diagram), pin repo on GitHub profile

## Stage 7 - Observability
- Once site is stable, enable CloudFront standard logs to a seperate S3 bucket.
- Create Athena database and external table for log bucket with partition projection.
- Write queries: top pages, traffic by country, cache hit ratio over time, 4xx errors by path
- Save queries: analytics/queries/
- Potential: CloudWatch dashboard linked to projects page

## Stage 8 - Subdomain Prep
- Create terraform module pattern for each project's CloudFront and S3 setup
- Document in repo for future use.
