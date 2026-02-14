# SKILL.md — Prospector Lead Generation

## Description

Prospector finds local business leads by scraping Nextdoor, Yelp, and Google Maps. Use it to find businesses in any industry for any purpose — sales, partnerships, outreach, research, or anything else.

**Use cases:**
- Selling websites/marketing services (use "no website" filter)
- Selling software or tools to local businesses
- Finding partnership opportunities
- Building vendor/supplier lists
- Local business research
- Finding service providers
- Any B2B local outreach

## Prerequisites

- OpenClaw with browser automation enabled
- Nextdoor account (logged in via OpenClaw browser)
- Internet connection for Yelp/Google Maps scraping

## Commands

### Lead Discovery
- `"Find [industry] leads in [location]"` — Run full discovery (any business)
- `"Find [industry] in [location] without websites"` — Filter to no-website leads only
- `"Find highly-rated [industry] in [location]"` — Filter to 4+ star businesses
- `"Scrape Nextdoor for [industry] in [location]"` — Nextdoor only
- `"Search Yelp for [industry] in [location]"` — Yelp only
- `"Search Google Maps for [industry] in [location]"` — Google Maps only

### Lead Management
- `"Show my leads"` — Display current pipeline
- `"Show hot leads"` — Filter to HOT only
- `"Filter leads by [criteria]"` — Filter by industry, location, score, status
- `"Qualify [business name]"` — Run full qualification
- `"Check if [business name] has a website"` — Website check only
- `"Update [business] status to [status]"` — Change lead status

### Outreach
- `"Draft outreach for [business name]"` — Create personalized message
- `"Draft outreach for [business name] about [your offer]"` — Custom offer angle
- `"Draft follow-up for [business name]"` — Create follow-up
- `"Show outreach templates for [industry]"` — Display templates

### Pipeline
- `"Export leads to CSV"` — Generate spreadsheet export
- `"Show pipeline summary"` — Status breakdown
- `"Log outreach to [business]: [message summary]"` — Record sent message

## Workflow

### 1. Lead Discovery

**Nextdoor Scraping:**
1. Open browser (profile='openclaw')
2. Navigate to nextdoor.com
3. Search for "[industry] recommendation" or "[industry] needed"
4. For each post:
   - Extract the request details
   - Scan ALL replies for business mentions
   - Capture: business name, who recommended, context
5. Store raw leads in `leads/raw/nextdoor-[date].json`

**Yelp Scraping:**
1. Navigate to yelp.com/search
2. Search category + location
3. Filter by "no website" if available, or check manually
4. Extract: business name, phone, address, rating, review count
5. Store in `leads/raw/yelp-[date].json`

**Google Maps Scraping:**
1. Navigate to google.com/maps
2. Search "[industry] near [location]"
3. For each result, check if "Website" field exists
4. Extract: business name, phone, address, rating
5. Store in `leads/raw/gmaps-[date].json`

### 2. Lead Qualification

For each discovered lead, check these **core criteria** (always):

```
□ Business active?
  → Recent reviews (within 3 months)?
  → Recent posts/activity?
  → Phone answered / voicemail not full?
  
□ Contact info available?
  → Phone number?
  → Email?
  → Physical address?

□ Good reputation?
  → Rating 4+ stars?
  → Positive review sentiment?
```

**Optional criteria** (based on what your human is looking for):

```
□ Website check (for web designers):
  → Google "[business name] [location]"
  → Has website? Quality: Good / Bad / None
  
□ Size indicators (for B2B sales):
  → Review count (more = bigger)
  → Multiple locations?
  → Employee count if visible?

□ Recency (for new business outreach):
  → Recently opened?
  → "New on Yelp" badge?
```

**Default Scoring (general leads):**
- 🔥 **HOT** = Active + contact found + good ratings
- 🟡 **WARM** = Active but missing contact OR mixed reviews
- ⚪ **COLD** = Inactive or no contact info

**Website-Seller Scoring (when filtering for no-website):**
- 🔥 **HOT** = No website + active + phone/email found
- 🟡 **WARM** = Bad website + active OR no website + no direct contact
- ⚪ **COLD** = Has decent website

### 3. Pipeline Storage

Master file: `leads/pipeline.json`

```json
{
  "leads": [
    {
      "id": "unique-id",
      "name": "Business Name",
      "industry": "lawn-care",
      "location": "Austin, TX",
      "source": "nextdoor",
      "sourceUrl": "url-where-found",
      "phone": "512-555-1234",
      "email": null,
      "address": "123 Main St",
      "website": null,
      "websiteQuality": "none",
      "score": "hot",
      "status": "new",
      "notes": "Recommended by 3 people in Oak Hill neighborhood",
      "discoveredAt": "2026-02-13",
      "lastContact": null,
      "nextFollowUp": null
    }
  ]
}
```

**Statuses:** `new` → `contacted` → `replied` → `meeting` → `closed` | `dead`

### 4. Outreach Generation

When drafting outreach:

1. Check lead's industry → load appropriate template
2. Personalize with:
   - Business name
   - How you found them (the recommendation)
   - Something specific about them
   - Your offer
   - Clear CTA
3. Keep under 100 words for initial contact
4. Offer value, not pressure

See `templates/cold-messages/` for industry templates.

### 5. Follow-Up Sequence

Standard timing:
- **Day 0:** Initial outreach
- **Day 3:** Follow-up #1 (shorter, reference first message)
- **Day 7:** Follow-up #2 (add value, maybe different angle)
- **Day 14:** Final attempt (last chance framing)

Track in `leads/outreach-log.md`

## File Structure

```
leads/
  ├── pipeline.json        # Master database
  ├── hot-leads.csv        # Export of hot leads
  ├── outreach-log.md      # Message history
  └── raw/                  # Raw scrape data
      ├── nextdoor-*.json
      ├── yelp-*.json
      └── gmaps-*.json

templates/
  ├── cold-messages/       # By industry
  ├── follow-ups/          # Sequence templates
  └── voicemail/           # Call scripts
```

## Industries Supported

**Home & Property:**
- General contractors, HVAC, plumbing, electrical, roofing
- Painting, drywall, flooring, remodeling
- Cleaning (house, carpet, windows), pest control
- Moving, junk removal, storage

**Outdoor:**
- Lawn care, landscaping, tree service
- Pool service, irrigation, fencing
- Pressure washing, gutter cleaning
- Snow removal (seasonal)

**Automotive:**
- Mechanics, oil change, tire shops
- Auto detailing, car wash
- Body shops, dent repair
- Towing, roadside assistance

**Personal Care:**
- Hair salons, barber shops
- Nail salons, spas, estheticians
- Tattoo & piercing, makeup artists
- Massage therapists

**Food & Beverage:**
- Restaurants, cafes, bars
- Food trucks, catering
- Bakeries, meal prep
- Coffee shops, juice bars

**Health & Fitness:**
- Personal trainers, gyms
- Yoga, pilates, martial arts
- Chiropractors, physical therapy
- Nutrition coaches

**Pet Services:**
- Grooming, boarding, daycare
- Dog walking, pet sitting
- Training, vet clinics
- Pet photography

**Events & Entertainment:**
- DJs, bands, musicians
- Photographers, videographers
- Event planners, coordinators
- Florists, balloon artists
- Party rentals, photo booths

**Professional Services:**
- Accountants, bookkeepers
- Lawyers, notaries
- Insurance agents
- Real estate photographers

**Childcare & Education:**
- Daycares, nannies
- Tutors, test prep
- Music/art teachers
- Driving schools

**Skilled Trades:**
- Welders, fabricators
- Carpenters, cabinet makers
- Upholsterers, seamstresses
- Locksmiths

## Error Handling

**Nextdoor login issues:**
- Ensure logged in via OpenClaw browser first
- Check if session expired, re-login if needed

**Rate limiting:**
- Space out scraping (don't hit same platform too fast)
- If blocked, wait 30 minutes and retry
- Rotate between platforms

**No results found:**
- Try broader search terms
- Try different location radius
- Check if platform has data for that area

## Best Practices

1. **Quality over quantity** — 10 qualified leads > 100 garbage ones
2. **Personalize everything** — Templates are starting points, not copy-paste
3. **Track religiously** — Every contact logged, every status updated
4. **Follow up** — Most deals close on follow-up 2-4, not first contact
5. **Respect "no"** — Mark as dead and move on, don't harass
6. **Celebrate wins** — Log closed deals, learn what worked

## Metrics to Track

- Leads discovered per session
- Hot/Warm/Cold ratio
- Contact rate (outreach sent / leads found)
- Reply rate (replies / outreach sent)
- Close rate (deals / replies)
- Revenue per lead source
