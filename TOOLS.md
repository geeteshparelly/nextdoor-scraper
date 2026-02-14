# TOOLS.md - Local Notes

Skills define _how_ tools work. This file is for _your_ specifics — the stuff that's unique to your setup.

## GitHub

- **Username:** geeteshparelly
- **Email:** geetesh.parelly@gmail.com
- **Auth:** PAT stored in Windows Credential Manager (`git:https://github.com`)
- **Repo creation:** Use GitHub API with PAT (gh CLI not installed yet - blocked by Windows Installer)

### New Project Workflow
1. Create folder in workspace
2. `git init`
3. Create repo via GitHub API: `curl -H "Authorization: token $PAT" https://api.github.com/user/repos -d '{"name":"repo-name"}'`
4. Add remote: `git remote add origin https://github.com/geeteshparelly/repo-name.git`
5. Initial commit and push

## What Goes Here

Things like:

- Camera names and locations
- SSH hosts and aliases
- Preferred voices for TTS
- Speaker/room names
- Device nicknames
- Anything environment-specific

## Examples

```markdown
### Cameras

- living-room → Main area, 180° wide angle
- front-door → Entrance, motion-triggered

### SSH

- home-server → 192.168.1.100, user: admin

### TTS

- Preferred voice: "Nova" (warm, slightly British)
- Default speaker: Kitchen HomePod
```

## Why Separate?

Skills are shared. Your setup is yours. Keeping them apart means you can update skills without losing your notes, and share skills without leaking your infrastructure.

---

Add whatever helps you do your job. This is your cheat sheet.
