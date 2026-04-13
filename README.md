# bobeart.github.io

## This is my public facing site

### Hello World!

# Claude Usage

I want to document how I use AI when making this website. I keep seeing reports or posts online from individuals who are always talking about using AI and vibecoding a project but never detailing the process they went through. Maybe I'm not that observant, but in any case I figure I will document how I used it.

## Initialize Website (Sonnet 4.6)

- `I want to make a very simple web page written in html, javascript and css that just displays the text "Robert Harrison's portfolio". The site will be hosted on a github pages website.`
  - CLAUDE initilized a single html file with a styling and displayed the page on the side view panel.
- `can you break out the styling into a separate css file`
  - CLAUDE did as asked and broke out the styling into a separate CSS file.
    - NOTE: I wanted to refer back to the old html file and compare what was in the styling there vs what CLAUD inserted and found that it stuck with the same file and overwrote that. Very interesting.

## Add About Me Section (Sonnet 4.6)

- `I want to add in the ability to scroll down to an about me section of the website, how would implement this?`
  - Claude gave me three options. Option 1 was purely html with an anchor link; Option 2 was a smooth scroll with an arrow button; and Option 3 was a javascript scroll with smooth animation. It recommended a combination of options 2 and 3 with 3's Intersection Observer.
- `I want to change the color scheme, any suggestions. I wish there was at least some blue in there`
  - Claude Presented a few options and I tested them out to see what looked best to me.
  - I also asked it to lighten the about me text (mid) variable and it did just that
- `I want to make the about me page have content describing myself. I want 1 paragraph focusing on my career. I will write a second paragraph detailing my interests and hobbies on my own. Attached is my resume and also here is a link to my linkedIn Profile`
  - I wanted to work with Claude on writing a section on my career portion. This resulted in a good initial starting point for me to edit the about me on my career. I do not believe it actually went to my linkedin page. If Claude did, it left no indication that it had done so, maybe I needed to be more specific in the prompting. I had it rewrite some senetences and then edited it on my own to make it sound more like me. I then went ahead and wrote about my hobbies and interests on my own, but still had it insert the words into the document. So far it has done exactly as asked. Though to be fair, none of what I have asked it to do so far is beyond the pale in my eyes.
