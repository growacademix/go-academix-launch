## Plan: Replace hero video with uploaded testimonial

### The better way you asked about
Storing a 91 MB video in the repo is not ideal. I will use **Lovable Assets**, which uploads the video to Lovable's CDN and stores a small `.asset.json` pointer in the project instead. This gives faster global delivery and keeps the repo lightweight.

### What I will do
1. **Transcode the uploaded video for web**
   - Use ffmpeg (already installed) to convert the 91 MB 1440p source into a smaller 720p H.264/AAC MP4.
   - This keeps the file under a few MB while still looking crisp in the hero section.
2. **Upload to Lovable Assets CDN**
   - Run `lovable-assets create --file <compressed-video> --filename hero-video.mp4`.
   - Save the output to `src/assets/hero-video.mp4.asset.json`.
3. **Update the hero video player**
   - In `src/components/Hero.tsx`, import the new CDN asset pointer.
   - Set the video to `autoplay muted loop playsInline` and keep visible controls so users can pause/unmute if they want.
4. **Remove the old video binary**
   - Delete `src/assets/hero-video.mp4` (the 15 MB current file) since it will be replaced.
5. **Verify**
   - Run a build to confirm the import resolves and the app compiles correctly.

### Expected result
Hero section shows the new testimonial video, muted autoplay, no giant file in the repo.