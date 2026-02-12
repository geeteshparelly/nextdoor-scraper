// Nextdoor Scraper - Browser Evaluation Functions
// Use these with OpenClaw's browser act/evaluate tool
// DO NOT use with Playwright - these are for OpenClaw browser control only

// ============================================
// 1. GET ALL POSTS WITH data-testid="post-body"
// ============================================
const getAllPosts = `(() => {
  const posts = document.querySelectorAll('[data-testid="post-body"]');
  const results = [];
  posts.forEach((p, i) => {
    const text = p.innerText.substring(0, 100);
    results.push({
      index: i,
      text: text,
      hasReplyBtn: !!document.querySelectorAll('[data-testid="post-reply-button"]')[i]
    });
  });
  return JSON.stringify(results);
})()`;

// ============================================
// 2. CLICK POST BY INDEX
// ============================================
const clickPostByIndex = (index) => `(() => {
  const btns = document.querySelectorAll('[data-testid="post-reply-button"]');
  if(btns[${index}]) {
    btns[${index}].scrollIntoView({block: 'center'});
    btns[${index}].click();
    return 'clicked';
  }
  return 'not found';
})()`;

// ============================================
// 3. CHECK IF COMMENT CONTAINER EXISTS
// ============================================
const checkCommentContainer = `(() => {
  const container = document.querySelector('.comment-container');
  return container ? 'found' : 'not found';
})()`;

// ============================================
// 4. SCROLL COMMENTS AND GET /PAGE/ LINKS
// ============================================
const scrollAndGetLinks = `(() => {
  const container = document.querySelector('.comment-container');
  let links = [];
  if(container) {
    // Scroll to load more comments
    container.scrollTop = container.scrollHeight;
    
    // Get all business page links
    const anchors = container.querySelectorAll('a[href*="/page/"]');
    links = [...new Set([...anchors].map(l => l.href))];
  }
  return JSON.stringify({links: links});
})()`;

// ============================================
// 5. CLOSE EXPANDED POST
// ============================================
const closePost = `(() => {
  const closeBtn = document.querySelector('[aria-label="Close expanded post"]');
  if(closeBtn) {
    closeBtn.click();
    return 'closed';
  }
  return 'not found';
})()`;

// ============================================
// 6. COMBINED: GET LINKS AND CLOSE
// ============================================
const getLinksAndClose = `(() => {
  const container = document.querySelector('.comment-container');
  let links = [];
  if(container) {
    container.scrollTop = container.scrollHeight;
    const anchors = container.querySelectorAll('a[href*="/page/"]');
    links = [...new Set([...anchors].map(l => l.href))];
  }
  const closeBtn = document.querySelector('[aria-label="Close expanded post"]');
  if(closeBtn) closeBtn.click();
  return JSON.stringify({links: links});
})()`;

// ============================================
// 7. CHECK IF POST IS AD/SPONSORED
// ============================================
const isSponsored = (index) => `(() => {
  const posts = document.querySelectorAll('[data-testid="post-body"]');
  const post = posts[${index}];
  if(!post) return 'not found';
  
  // Check parent elements for "Sponsored" text
  let parent = post.parentElement;
  for(let i = 0; i < 5; i++) {
    if(parent && parent.innerText.includes('Sponsored')) {
      return 'sponsored';
    }
    parent = parent?.parentElement;
  }
  return 'not sponsored';
})()`;

// ============================================
// USAGE NOTES
// ============================================
/*
These functions are designed for use with OpenClaw's browser tool:

browser action=act request={kind: "evaluate", fn: "<function_string>"}

Example workflow:
1. Navigate to nextdoor.com/news_feed
2. Run getAllPosts to get list
3. For each post index:
   a. Run clickPostByIndex(i)
   b. Wait 2 seconds
   c. Run checkCommentContainer (retry if not found)
   d. Run getLinksAndClose
   e. Wait 1 second
4. Save results to JSON

DO NOT import this file into Node.js/Playwright.
These are string templates for browser evaluate() calls.
*/
