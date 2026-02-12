# Nextdoor Scraper - Process Documentation

## Overview
This scraper extracts posts from Nextdoor's news feed using browser automation via OpenClaw's browser tool. It does NOT use Playwright or any other browser automation library directly - it uses OpenClaw's built-in browser control.

## Requirements
- OpenClaw with browser control enabled
- Logged-in Nextdoor account in the browser
- Chrome browser (controlled by OpenClaw)

## Process Flow

### 1. Navigate to Feed
```
Navigate to: https://nextdoor.com/news_feed
```

### 2. Find Posts
Look for elements with `data-testid="post-body"`. If an element doesn't have this attribute, it's not a real post (likely an ad or sponsored content).

### 3. For Each Post:

#### a. Create Unique ID
- Read the first 100 characters of the post text
- Generate a unique ID based on this text (hash or descriptive slug)

#### b. Check for Duplicates
- If the ID already exists in `scraped_ids.json`, the feed has cycled
- Reload the page by navigating to `nextdoor.com/news_feed` again
- This prevents scraping the same posts twice

#### c. Open Post Detail View
- Click the `data-testid="post-reply-button"` element
- This opens the expanded post view

#### d. Wait for Comments to Load
- Wait for `class="comment-container"` to appear
- If it doesn't appear within 5 seconds, retry or skip

#### e. Scroll to Load More Comments
- Scroll inside the comment-container to trigger lazy loading
- `container.scrollTop = container.scrollHeight`

#### f. Extract Page Links
- Find all `<a>` elements inside `.comment-container`
- Filter for hrefs containing `/page/` (business pages)
- These are business/service provider pages mentioned in comments

#### g. Close the Post
- Click element with `aria-label="Close expanded post"`

#### h. Save Data
- Add post data to `scraped_posts.json`
- Add unique ID to `scraped_ids.json`

### 4. Repeat
Continue until target number of posts is reached or feed cycles.

## File Structure

```
nextdoor-scraper/
├── scraped_posts.json    # Full post data with links
├── scraped_ids.json      # List of scraped post IDs (dedup)
├── scrape_log.md         # Run log
├── SCRAPER_PROCESS.md    # This file
└── scraper_functions.js  # Reusable JS snippets
```

## Key Selectors

| Element | Selector |
|---------|----------|
| Post body | `[data-testid="post-body"]` |
| Reply/comment button | `[data-testid="post-reply-button"]` |
| Comment container | `.comment-container` |
| Business page links | `a[href*="/page/"]` |
| Close button | `[aria-label="Close expanded post"]` |

## Notes

1. **Ads/Sponsored**: Elements with "Sponsored" text should be skipped
2. **News Articles**: Posts from publishers (MySA, KVUE) have different structure
3. **Rate Limiting**: Wait 1-2 seconds between posts to avoid detection
4. **Session**: Must be logged into Nextdoor in the browser

## Test Run Results (2026-02-05)

- Posts scraped: 10
- Business page links found: 0 (no commenters linked to /page/ URLs)
- Time taken: ~3 minutes
- Status: SUCCESS

The lack of /page/ links is normal - not every post has commenters who are business pages. Run on more posts to find business leads.
