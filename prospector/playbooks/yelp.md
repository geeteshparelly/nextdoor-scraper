# Yelp Scraping Playbook

## Why Yelp

Yelp is valuable because:
- Comprehensive business listings
- Ratings and reviews show quality
- Contact info often listed (phone, address)
- Many small businesses are ON Yelp but don't have their own website

## Strategy

Find businesses that:
1. Are listed on Yelp (someone created a page)
2. Have reviews (they're active)
3. DON'T have a website linked
4. Have phone numbers listed

## Step-by-Step Process

1. **Navigate to Yelp Search**
   ```
   browser action='navigate' targetUrl='https://www.yelp.com/search?find_desc=[industry]&find_loc=[location]'
   ```
   
   Example: `https://www.yelp.com/search?find_desc=lawn+care&find_loc=Austin,+TX`

2. **Scan search results**
   - Each listing shows: name, rating, review count, category
   - Click into promising ones (good ratings, decent reviews)

3. **On each business page, extract:**
   - Business name
   - Phone number (usually visible)
   - Address
   - Rating & review count
   - **Check for "Website" link** — if missing = potential lead
   - Hours of operation
   - Photos (indicates active business)

4. **Qualification check:**
   - No website link? → Potential HOT lead
   - Has website link? → Note it, might be bad quality
   - No phone? → SKIP (can't contact)
   - 1-2 stars? → SKIP (bad business)

5. **Extract data:**
   ```json
   {
     "name": "Joe's Lawn Care",
     "yelp_url": "https://yelp.com/biz/...",
     "phone": "512-555-1234",
     "address": "Austin, TX 78704",
     "rating": 4.5,
     "review_count": 23,
     "website": null,
     "categories": ["Lawn Services", "Landscaping"],
     "discovered_at": "2026-02-13"
   }
   ```

6. **Store raw data:**
   - Save to `leads/raw/yelp-YYYY-MM-DD.json`

## Search Tips

**Good search terms:**
- Use specific industry terms: "lawn care", "plumber", "house cleaning"
- Add qualifiers: "lawn care service", "residential plumber"

**Filters to use (if available):**
- Sort by: "Highest Rated" (quality leads)
- Distance: Start with 10-25 miles

**Pagination:**
- Yelp shows ~10 results per page
- Go through 3-5 pages for good coverage
- Diminishing returns after page 5

## Identifying Website-Less Businesses

On a Yelp business page:
- Look for "Website" in the sidebar/info section
- If it shows a website → they have one (might still be bad)
- If no website shown → HIGH PRIORITY lead
- Sometimes shows Facebook instead of website → still a lead

## Sample Output

```json
{
  "source": "yelp",
  "scraped_at": "2026-02-13T18:30:00Z",
  "location": "Austin, TX",
  "industry": "lawn-care",
  "leads": [
    {
      "name": "Green Thumb Landscaping",
      "yelp_url": "https://yelp.com/biz/green-thumb-landscaping-austin",
      "phone": "512-555-5678",
      "address": "2100 S Lamar Blvd, Austin, TX 78704",
      "rating": 4.8,
      "review_count": 47,
      "website": null,
      "has_photos": true,
      "years_in_business": 5
    }
  ]
}
```

## Rate Limiting

- Don't scrape too fast — Yelp may block
- Space out requests: 2-3 seconds between page loads
- If you see CAPTCHA, stop and wait 30+ minutes
- Do 20-30 businesses per session max
