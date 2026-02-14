# Nextdoor Scraping Playbook

## Why Nextdoor

Nextdoor is a goldmine because:
- Real neighbors recommending real businesses
- High trust — these are vetted recommendations
- Local focus — exactly where SMBs operate
- Businesses mentioned often DON'T have websites

## Prerequisites

- Logged into Nextdoor via OpenClaw browser (profile='openclaw')
- Valid Nextdoor account in target area (or nearby)

## Search Strategy

### Search Queries That Work

**Direct recommendation requests:**
- `"looking for [industry]"`
- `"need a [industry]"`
- `"recommend [industry]"`
- `"anyone know a good [industry]"`
- `"[industry] recommendations"`

**Examples by industry:**
- Lawn care: "looking for lawn care", "need landscaper", "yard work recommendations"
- Plumbing: "recommend plumber", "need a plumber", "plumbing help"
- Cleaning: "house cleaner recommendations", "looking for cleaning service"

### Step-by-Step Process

1. **Navigate to Nextdoor**
   ```
   browser action='navigate' targetUrl='https://nextdoor.com'
   ```

2. **Search for recommendations**
   ```
   browser action='snapshot' — find search box
   browser action='act' kind='type' text='[industry] recommendations'
   browser action='act' kind='press' key='Enter'
   ```

3. **Filter to posts (not businesses)**
   - Look for the "Posts" tab/filter
   - We want recommendation threads, not business listings

4. **For each relevant post:**
   - Click into the post
   - Read the original request
   - Scan ALL comments for business mentions
   - Look for patterns:
     - "I use [Business Name]"
     - "Try [Business Name]"
     - "[Business Name] did great work for us"
     - Phone numbers in replies
   - Note who recommended (adds social proof for outreach)

5. **Extract data:**
   ```json
   {
     "business_name": "Joe's Lawn Care",
     "industry": "lawn-care",
     "source_post": "https://nextdoor.com/...",
     "recommended_by": "Sarah M. in Oak Hill",
     "context": "Multiple neighbors recommended for weekly mowing",
     "phone": "512-555-1234",  // if mentioned
     "discovered_at": "2026-02-13"
   }
   ```

6. **Store raw data:**
   - Save to `leads/raw/nextdoor-YYYY-MM-DD.json`

## Tips for Better Results

**Timing:**
- Recommendation posts peak on weekends and evenings
- Search recent posts (last 30 days) for active businesses

**Location:**
- If your Nextdoor is in Austin, you see Austin area
- For other cities, you'd need an account there (or friend's help)

**Volume:**
- One good search session = 10-30 business mentions
- Quality varies — some are legit, some are friends/family

**Red flags to skip:**
- Businesses with no specific name (just "my guy")
- Mentions with no way to identify/contact
- Obvious spam or self-promotion

## Handling Edge Cases

**Private/closed posts:**
- Some posts may be neighborhood-locked
- Can only access if you're in that neighborhood

**Business pages vs mentions:**
- Nextdoor has business pages — those likely HAVE websites
- Focus on organic mentions in recommendation threads

**No results:**
- Try different search terms
- Try broader industry terms
- Some areas just have less activity

## Sample Output

```json
{
  "source": "nextdoor",
  "scraped_at": "2026-02-13T18:30:00Z",
  "location": "Austin, TX",
  "industry": "lawn-care",
  "leads": [
    {
      "name": "Martinez Lawn Service",
      "mentions": 3,
      "recommended_by": ["Sarah M.", "John D.", "Lisa K."],
      "context": "Affordable, reliable, does Oak Hill area",
      "phone": "512-555-1234",
      "source_urls": ["https://nextdoor.com/..."]
    }
  ]
}
```
