# Website Builder Export Playbook

## Overview

When a user closes a deal with a lead, they can export the lead data in a format that pastes directly into Website Builder.

---

## Export Command

User says:
- "Export [Business] for Website Builder"
- "Get website info for [Business]"
- "Prepare [Business] for site build"

---

## Export Format

Generate this formatted output:

```
=== PROSPECTOR LEAD EXPORT ===

BUSINESS INFO
Business: [Name from pipeline]
Industry: [Detected industry]
Phone: [Phone number]
Location: [City, State]
Website: [Current URL or "none"]

SOURCE INFO
Platform: [Nextdoor/Yelp/Google Maps]
Rating: [Stars if available]
Reviews: [Count if available]
Found: [Date discovered]

SERVICES DETECTED
[List any services mentioned in notes or listing]

ADDITIONAL NOTES
[Any relevant details from qualification]

=== PASTE INTO WEBSITE BUILDER ===
```

---

## How to Generate Export

1. Look up the lead in `pipeline.json`
2. Pull all available fields
3. Format using template above
4. Tell user to paste this into Website Builder

---

## Example

**User:** "Export Martinez Plumbing for Website Builder"

**Output:**
```
=== PROSPECTOR LEAD EXPORT ===

BUSINESS INFO
Business: Martinez Plumbing
Industry: plumbing / home-services
Phone: (512) 555-1234
Location: Austin, TX
Website: none

SOURCE INFO
Platform: Nextdoor
Rating: Recommended by 12 neighbors
Reviews: N/A
Found: 2026-02-13

SERVICES DETECTED
- Residential plumbing
- Emergency repairs
- Water heater installation

ADDITIONAL NOTES
- Owner: Carlos Martinez
- 15 years in business
- Licensed and insured
- Mentioned by neighbor as "fast and reliable"

=== PASTE INTO WEBSITE BUILDER ===
```

**Then say:**
"Copy this and tell Website Builder: 'Build a site with this info' — it'll generate a professional website for Martinez Plumbing."

---

## What Website Builder Needs

At minimum, export must include:
- Business Name
- Industry
- Phone Number
- Location

Nice to have:
- Services list
- Years in business
- Any trust indicators (licensed, insured, ratings)
- Owner name
- Any unique selling points from notes

---

## Integration Flow

```
PROSPECTOR                    WEBSITE BUILDER
    |                               |
    |  1. Find leads                |
    |  2. Qualify leads             |
    |  3. Close deal                |
    |                               |
    |  4. "Export for Website       |
    |      Builder"                 |
    |          |                    |
    |          v                    |
    |   [Export Format]  ---------> |
    |                               |  5. Build website
    |                               |  6. Deploy
    |                               |  7. Deliver to client
```

---

## Bulk Export

For multiple leads:
- "Export all hot leads for Website Builder"
- Generates one export block per lead
- User can build sites in batch

---

## Notes

- Always include source platform (builds trust)
- Include rating/reviews when available
- Pull service details from any notes
- Mention if no website exists (that's why they're a lead!)
