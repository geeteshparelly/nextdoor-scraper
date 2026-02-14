# Google Maps Scraping Playbook

## Why Google Maps

Google Maps is essential because:
- Most comprehensive local business data
- Shows if website exists (or doesn't)
- Phone numbers and addresses readily available
- Reviews indicate business quality and activity

## Strategy

Find businesses that:
1. Appear in Google Maps results
2. Have a Google Business Profile
3. NO website listed (or bad/outdated one)
4. Have phone numbers
5. Have recent reviews (active)

## Step-by-Step Process

1. **Navigate to Google Maps**
   ```
   browser action='navigate' targetUrl='https://www.google.com/maps/search/[industry]+[location]'
   ```
   
   Example: `https://www.google.com/maps/search/lawn+care+austin+tx`

2. **Scan the results list**
   - Left panel shows business listings
   - Each shows: name, rating, category, status (open/closed)

3. **Click into each business**
   - Opens detailed view with full info

4. **Check for website:**
   - Look for "Website" button/link
   - If present → has website (note URL, check quality later)
   - If absent → NO WEBSITE = hot lead
   - Sometimes shows Facebook/Instagram instead → still a lead

5. **Extract data:**
   ```json
   {
     "name": "Austin Pro Lawn Care",
     "google_maps_url": "https://maps.google.com/...",
     "phone": "512-555-9876",
     "address": "4521 N Lamar Blvd, Austin, TX 78751",
     "rating": 4.6,
     "review_count": 89,
     "website": null,
     "hours": "Mon-Sat 7am-6pm",
     "categories": ["Lawn care service"],
     "discovered_at": "2026-02-13"
   }
   ```

6. **Store raw data:**
   - Save to `leads/raw/gmaps-YYYY-MM-DD.json`

## Search Variations

**By industry:**
- "lawn care near austin tx"
- "plumber austin texas"
- "house cleaning service 78704"

**By specificity:**
- Broad: "contractors austin" (many results, mixed quality)
- Specific: "fence installer south austin" (fewer, more targeted)

**Using zip codes:**
- "landscaping 78704" (targets specific neighborhood)
- Good for covering an area systematically

## Reading Google Maps Results

**On the listing card:**
- ⭐ Rating + review count
- Category (e.g., "Lawn care service")
- Open/Closed status
- Sometimes shows "Website" or phone preview

**On the detail panel:**
- Full address
- Phone number (click to see)
- Website (if they have one)
- Hours of operation
- Reviews
- Photos
- "Suggest an edit" (indicates unclaimed listing = opportunity)

## Identifying Hot Leads

**Best leads have:**
- ✅ No website button visible
- ✅ Phone number listed
- ✅ 4+ star rating
- ✅ 10+ reviews
- ✅ Recent reviews (within 3 months)
- ✅ Photos (shows active business)

**Skip if:**
- ❌ No phone number
- ❌ "Permanently closed"
- ❌ Below 3 stars (bad business)
- ❌ No reviews (might not be real)
- ❌ Chain/franchise (not our target)

## Unclaimed Listings = Bonus Opportunity

If you see "Claim this business" or "Own this business?":
- This business hasn't claimed their Google listing
- They DEFINITELY need help with online presence
- Even hotter lead than just "no website"

## Sample Output

```json
{
  "source": "google-maps",
  "scraped_at": "2026-02-13T18:30:00Z",
  "location": "Austin, TX",
  "industry": "lawn-care",
  "leads": [
    {
      "name": "Ramirez Landscaping",
      "google_maps_url": "https://maps.google.com/...",
      "phone": "+1-512-555-3333",
      "address": "South Austin, TX",
      "rating": 4.9,
      "review_count": 156,
      "website": null,
      "listing_claimed": false,
      "recent_review": "2026-02-10",
      "photos": 24
    }
  ]
}
```

## Rate Limiting

- Google is more forgiving than Yelp
- Still space out: 1-2 seconds between clicks
- If results seem limited, you may be soft-blocked
- Switch to different searches or wait
- 30-50 businesses per session is reasonable
