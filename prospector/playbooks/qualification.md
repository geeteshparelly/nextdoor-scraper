# Lead Qualification Playbook

## Purpose

Not every business found is worth pursuing. This playbook helps you separate gold from garbage.

## The Qualification Checklist

For each lead, answer these questions:

### 1. Do They Have a Website?

**How to check:**
```
Google: "[Business Name] [City]"
```

**Results:**
- ✅ No website found → HOT (no website at all)
- 🟡 Facebook/Instagram only → WARM (has social, needs real site)
- 🟡 Yelp/Google profile only → WARM (listed but no owned site)
- ⚪ Has a website → Check quality (see below)

### 2. Website Quality Check (if they have one)

Visit their website and score:

| Factor | Good | Bad |
|--------|------|-----|
| Mobile friendly? | Responsive, works on phone | Broken, tiny text, can't navigate |
| Professional look? | Clean, modern, trustworthy | Outdated, cluttered, sketchy |
| Contact info visible? | Phone/email easy to find | Hidden or missing |
| SSL certificate? | https:// (secure) | http:// (not secure) |
| Last updated? | Recent content | "Copyright 2018" in footer |
| Works properly? | Fast, no errors | Broken links, slow, errors |

**Scoring:**
- 0-2 Good factors → Bad website = WARM lead (needs rebuild)
- 3-4 Good factors → Mediocre = might not need you
- 5-6 Good factors → Good website = probably not a lead

### 3. Is the Business Active?

**Signs of activity:**
- ✅ Recent reviews (within 3 months)
- ✅ Recent social media posts
- ✅ Phone is answered / voicemail not full
- ✅ Hours listed as open
- ✅ Recent photos on Google/Yelp

**Red flags:**
- ❌ Last review 2+ years ago
- ❌ "Permanently closed" anywhere
- ❌ Phone disconnected
- ❌ No activity on any platform

### 4. Can You Contact Them?

| Contact Method | Quality |
|---------------|---------|
| Phone number | Best — direct contact |
| Email address | Good — can personalize |
| Contact form | Okay — less personal |
| Social DM only | Weak — often ignored |
| No contact info | Skip — can't reach |

### 5. Are They a Good Fit?

Consider:
- **Size:** Solo operator or small team? (ideal) vs. big company (probably has resources)
- **Type:** Local service business? (ideal) vs. franchise/chain (not our target)
- **Location:** In your service area?
- **Industry:** Something you can help with?

## Lead Scoring Matrix

| Criteria | HOT 🔥 | WARM 🟡 | COLD ⚪ |
|----------|--------|---------|--------|
| Website | None | Bad/outdated | Good |
| Activity | Recent | Some | Unclear |
| Contact | Phone + email | Phone only | None/hard |
| Fit | Perfect | Decent | Poor |

**Final Score:**
- 3-4 HOT factors → 🔥 **HOT LEAD** — Prioritize!
- 2 HOT + 2 WARM → 🟡 **WARM LEAD** — Worth pursuing
- Mostly WARM/COLD → ⚪ **COLD LEAD** — Low priority
- Any "Skip" factor → ❌ **DEAD** — Don't waste time

## Quick Qualification (60-Second Version)

1. Google their name + city (10 sec)
2. Website? Y/N (5 sec)
3. If yes, quick glance — good or bad? (10 sec)
4. Phone number visible anywhere? (5 sec)
5. Recent reviews on Google/Yelp? (15 sec)
6. Score: HOT / WARM / COLD / SKIP (5 sec)

## Recording Qualification

Update `leads/pipeline.json`:

```json
{
  "name": "Joe's Lawn Care",
  "website": null,
  "websiteQuality": "none",
  "phone": "512-555-1234",
  "email": null,
  "lastReview": "2026-02-01",
  "googleRating": 4.7,
  "score": "hot",
  "qualifiedAt": "2026-02-13",
  "qualificationNotes": "No website, 47 reviews on Google, phone listed"
}
```

## Don't Waste Time On

- Big companies with marketing departments
- Franchises (Papa John's, ServiceMaster, etc.)
- Businesses with great websites already
- Businesses with no contact info
- Businesses in decline (bad reviews, closing signs)
- Anyone who's already said no

## Batch Qualification

For efficiency, qualify in batches:

1. Export all raw leads from scraping
2. Open Google in one tab
3. Go through each lead — 60 seconds max
4. Mark HOT/WARM/COLD/SKIP immediately
5. Only research HOT leads deeper
6. Move WARM to follow-up later list
