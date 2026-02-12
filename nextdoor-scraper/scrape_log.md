# Nextdoor Scraper Process Log

## Process Overview
1. Navigate to nextdoor.com/news_feed
2. For each post with data-testid="post-body":
   - Read first 100 chars to create unique ID (hash)
   - Check if ID already scraped → if yes, reload page
   - If not scraped:
     - Click data-testid="post-reply-button" to open post
     - Wait for class="comment-container" to appear (retry if >5s)
     - Scroll to load comments
     - Get all href links inside comment-container with /page/
     - Click aria-label="Close expanded post" to close
     - Add ID to list and save

## Run Log

### Run 1: 2026-02-05 17:36 CST (Test Run)

**Config:**
- Target posts: 10
- Browser: OpenClaw-controlled Chrome
- Profile: openclaw

**Results:**
- Posts scraped: 10/10 ✅
- Business page links found: 0
- Errors: 0
- Duration: ~3 minutes

**Posts Processed:**
1. ✅ post_001_tent_homeless - Homeless person asking for tent
2. ✅ post_002_girl_scout_cookies - Looking for Girl Scout cookies
3. ✅ post_003_cat_tracker - Lost/found cat, needs tracker
4. ✅ post_004_botanical_bingo - Cenote's plant swap event
5. ✅ post_005_political_voices - Political commentary
6. ✅ post_006_guitar_lessons - Guitar teacher offering lessons
7. ✅ post_007_ice_activity - News article about ICE
8. ✅ post_008_structural_engineer - Looking for structural engineer
9. ✅ post_009_apartment_surveillance - Warning about car surveillance
10. ✅ post_010_mobile_mechanic - Looking for mobile mechanic

**Notes:**
- No /page/ links found in comments - normal for small sample
- All posts opened/closed successfully
- Comment containers loaded properly
- Sponsored posts (ads) were in the feed but not processed (no post-body)

**Next Steps:**
- Run on larger batch (50-100 posts) to find business page links
- Consider filtering for specific post types (service requests)
- Add timestamp tracking for when to rescrape
