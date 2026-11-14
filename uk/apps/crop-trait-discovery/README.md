# Genefield

_Discover crop genes and traits, with evidence a scientist has reviewed._

**Sector:** Sanità, istruzione, energia, gov · **Manifest:** refused by the runtime contract · **Functional test:** passed (0 checks passed)

## Description given to the app builder

I want Genefield, an AI platform for discovering crop genes and traits for plant breeders. The biology and proprietary data are the product and are ours; I need the software around them. Breeding companies sign up, upload their own genomic and phenotype data, and search public genomic databases. An agent ranks candidate genes for a target trait and writes a report with evidence, reviewed by our scientists before release. Each company sees only its own projects. Annual licence. Roles are company admin, breeder, data scientist and our reviewing scientist. Data uploads include VCF genotype files, field trial phenotype spreadsheets and environmental data; we need a pipeline that handles large genomic files. Breeders can request analyses through a form describing the trait, crop and population, and get email updates as the analysis progresses. Dashboards show projects and candidate genes with confidence. Any results used in UK precision breeding applications are reviewed by our regulatory team. English only.

## Contract errors

- `collection projects: access for unknown role 'user'`
- `collection datasets: access for unknown role 'user'`
- `collection candidate_genes: access for unknown role 'user'`

## Features not expressible today (spec.extensions)

- **large_genomic_files**: The upload field accepts only csv, xlsx and txt up to 15 MB. Large VCF/VCF.gz files are referenced by a storage link and processed in chunks by the agent through the WebRobot MCP pipeline; direct upload of VCF files is not available yet.
- **company_tenancy**: Company isolation is by the project members list (emails). A company-level organisation entity is not modelled; company admins must add colleagues to each project.
