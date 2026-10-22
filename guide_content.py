"""Task-focused guide updates, worked examples and primary references."""
GUIDE_DETAILS={
 'compress-photo-for-upload-limit':{
  'updated':'2026-10-22',
  'table':('Common upload limits used by this tool',['Target','Maximum bytes','What to check'],[
   ['100 KB','102,400','File format and required pixel dimensions'],
   ['200 KB','204,800','Whether the portal uses decimal KB instead'],
   ['500 KB','512,000','The actual downloaded file size']]),
  'faq':[
   ('Can I compress to 100 KB without resizing?', 'Leave Allow smaller pixel dimensions unchecked. The tool will try lower JPEG or WebP quality at the original width and height. It may be impossible to meet a small limit with those dimensions; no oversized download is offered.'),
   ('Does a smaller file mean no quality loss?', 'No. JPEG and lossy WebP compression can discard detail. Keeping the same pixel dimensions does not guarantee the same visual quality. Compare faces, edges and small text before using the download.'),
   ('Why is a file below 100 KB still rejected?', 'Check its actual bytes, file format, dimensions and any other upload rules. Some portals use 100,000 bytes for 100 KB. Choose a lower target if necessary; meeting a size limit alone does not guarantee acceptance.')],
  'sources':[
   ('MDN: browser image export and quality settings','https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob'),
   ('MDN: image formats and transparency','https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Image_types')]
 },
 'what-do-i-need-on-my-final':{
  'updated':'2026-10-22',
  'table':('Worked final-exam examples, assuming the final is the only remaining assessment',['Current grade','Target','Final weight','Required final score'],[
   ['70%','60%','40%','45%'],['82%','85%','30%','92%'],['65%','90%','20%','190%: target unreachable'],['90%','60%','20%','−60%: target already met mathematically']]),
  'faq':[
   ('What do I need on my final to pass?', 'Use your course pass mark as the target. For a 70% current average, a 40%-weighted final and a 60% pass mark, completed work contributes 42 points. The exam must contribute 18 more, so 18 ÷ 0.40 = 45% is required. A separate minimum-exam rule can change the result.'),
   ('My gradebook includes the final as zero. Which grade should I enter?', 'Enter the average for completed coursework, excluding the final. A total that counts the missing final as zero is a different number. Check your gradebook settings or calculate the completed-work average before using the calculator.'),
   ('Can I round the required score down?', 'Rounding down can leave your overall grade below the target. Follow your course policy. If the calculated threshold is 86.67% and only whole percentages are possible, 87% reaches it; 86% does not under the same formula.')],
  'sources':[
   ('Canvas student guide: current grades versus total grades','https://community.instructure.com/en/kb/articles/661305-how-do-i-view-my-grades-in-a-current-course')]
 },
 'resize-image-without-stretching':{
  'published':'2026-10-22','updated':'2026-10-22',
  'table':('Proportional resize examples',['Original pixels','New width','Matching height'],[
   ['1600 × 900','800','450'],['1920 × 1080','1200','675'],['1200 × 1800','400','600']]),
  'faq':[
   ('How do I resize a photo without distorting it?', 'Keep the aspect ratio locked and change one dimension. The matching dimension is calculated from the original ratio. Check the image preview after downloading.'),
   ('Can I make a wide photo square without stretching?', 'A wide photo cannot fill a square at its original proportions unless you crop part of it or add empty space. Toolnest resizes pixels; it does not crop or add borders. Prepare a square source separately, or keep the original proportions.'),
   ('Will resizing automatically make the file smaller?', 'Fewer pixels can help, but file size also depends on output format, image detail and compression. A resized PNG can be larger than an original JPEG. Check the reported output size.'),
   ('Can this tool create a 300 DPI file?', 'This tool controls pixel width and height, not print-resolution metadata. Browser canvas exports use 96 DPI metadata where the output format supports it. For a print specification, check both the required pixels and the print workflow.')],
  'sources':[
   ('MDN: canvas export, quality and resolution metadata','https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob'),
   ('MDN: choosing an image format','https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Image_types')]
 }
}

def enrich_guides(guides):
 updates={
  'compress-photo-for-upload-limit':(
   'Compress Images to 100 KB or 200 KB: Upload Guide',
   'Fit a photo under an upload limit, keep required pixel dimensions and check the real output size before submitting.',[
    ('Start with the complete upload rules','Write down the accepted format, maximum file size and required width and height. A 100 KB cap and a 600 × 600 pixel requirement are separate tests. The file can meet one and fail the other. If a portal requires JPEG, choose JPEG even if a WebP export would be smaller. Keep the original image while you prepare a copy.'),
    ('Compress while keeping the original dimensions','Open Compress image to KB and choose your JPG, PNG or WebP source. Select an accepted output format and enter 100, 200 or another limit. Leave Allow smaller pixel dimensions unchecked when the original dimensions must stay fixed. Press Compress to target. The tool searches lower quality settings and offers a download only when the encoded file fits its byte limit.'),
    ('Understand what keeping dimensions means','A 1600 × 900 image can remain 1600 × 900 while the saved file gets smaller. That does not mean its detail is unchanged. Lower JPEG or WebP quality can introduce soft edges and visible artifacts. Read the output dimensions and size, then inspect the downloaded image. The same quality setting produces different file sizes for different images.'),
    ('If the target cannot be reached','First check whether the destination permits a different format. If it permits fewer pixels, resize the image proportionally or enable smaller dimensions and try again. If it requires fixed pixels, do not reduce them just to pass the byte limit. A very detailed image and a very small cap may be incompatible at acceptable quality. Toolnest reports when it cannot fit the target instead of offering a file that exceeds it.'),
    ('Check bytes, not just the rounded KB label','Toolnest uses 1 KB = 1,024 bytes, so 100 KB means 102,400 bytes. A destination may instead enforce 100,000 bytes or display a rounded value. For a strict 100,000-byte cap, a target of 97 KB means at most 99,328 bytes in this tool. Check the downloaded file properties and the destination’s actual rule rather than relying on the rounded size alone.'),
    ('Choose the next tool for the remaining problem','If only the pixel dimensions are wrong, use Image resizer with the aspect ratio locked. If only the format is wrong, use Image converter to create a real JPEG, PNG or WebP file. Renaming an extension does not change its encoding. Do not repeatedly recompress an already degraded copy; return to the original when possible.')]),
  'what-do-i-need-on-my-final':(
   'What Grade Do I Need on My Final to Pass?',
   'Calculate the final exam score needed to pass or reach a target grade, with weighted examples and gradebook checks.',[
    ('Use three numbers from your course','You need your current average for completed work, the final exam’s percentage weight and your target course grade. This calculation assumes the final is the only ungraded component. If a project or another exam is still missing, combine the remaining work appropriately or use the weighted-grade calculator to model all components. Use the pass threshold from your syllabus rather than assuming one percentage works everywhere.'),
    ('Check whether the displayed grade excludes missing work','A gradebook’s current average and its total after ungraded work is included can differ. In Canvas, the current-grade calculation can be limited to graded assignments, while the total includes graded and ungraded assignments. Inspect the setting and your course weights before copying a number. If unsure, ask your instructor which figure represents completed coursework excluding the final.'),
    ('Rearrange the weighted-average formula','Overall grade = current × (1 − weight) + final × weight. Write weight as a decimal: a 30% final uses 0.30. Solving for the exam gives required final = [target − current × (1 − weight)] ÷ weight. Use percentages consistently for current, target and final. A final worth zero percent cannot change your grade and cannot be used as the divisor.'),
    ('Worked example: the score needed to pass','Suppose completed work averages 70%, the final counts for 40%, and the course pass mark is 60%. Completed work contributes 70 × 0.60 = 42 percentage points. You need 60 − 42 = 18 more points from the final. Divide by its 0.40 weight: a 45% final gives 42 + 45 × 0.40 = 60% overall. This is a course-pass calculation, not a claim that 45% passes the exam itself.'),
    ('Worked example: reaching a higher target','With a current average of 82%, a 30%-weighted final and an 85% target, completed work contributes 57.4 points. The final must add 27.6 points, so 27.6 ÷ 0.30 = 92% is required. A final score of 90% would give 84.4% overall. Use the calculator’s what-if table to compare realistic scores before planning how much improvement is needed.'),
    ('Interpret results above 100% or below zero','A result above 100% means the target cannot be reached with an ordinary 0–100% final under these assumptions. For example, current 65%, target 90% and weight 20% require 190%. A result below zero means completed work already reaches the target mathematically. It does not excuse missing a compulsory exam or override a minimum final-exam mark.'),
    ('Apply course rules before treating the result as final','Check minimum exam marks, attendance, dropped assessments, extra credit and rounding. A course may require a minimum exam score even when the weighted average passes. Keep full precision until the final step and follow the institution’s rounding rule. US, UK, Canadian and Australian institutions can use different scales; this percentage formula does not determine an official GPA, letter grade or degree classification.')])
 }
 for index,g in enumerate(guides):
  if g[0] in updates:
   title,description,sections=updates[g[0]]
   guides[index]=(g[0],title,g[2],description,sections,g[5])
 guides.append((
  'resize-image-without-stretching','Resize Images Without Stretching: Pixel Size Guide','Images',
  'Change an image’s width and height proportionally. Use worked pixel examples and understand when resizing, cropping or compression is needed.',[
   ('Separate pixels, file size and print resolution','Pixel dimensions describe the image grid, such as 1600 × 900. File size describes stored bytes, such as 200 KB. DPI describes how pixels are mapped to a physical print size. Changing one value does not guarantee a required value for the others. Start with the destination’s exact requirements so you choose the right operation.'),
   ('Lock the aspect ratio before changing a dimension','The aspect ratio is width divided by height. With Keep aspect ratio selected in Image resizer, enter a new width or height and let the other dimension update. For a 1600 × 900 source, a width of 800 becomes a height of 450. The shape stays the same while the image has fewer pixels. Download and check the result at its intended display size.'),
   ('Calculate a matching dimension yourself','New height = original height × new width ÷ original width. For 1920 × 1080 resized to 1200 pixels wide, the height is 1080 × 1200 ÷ 1920 = 675. For a portrait image of 1200 × 1800 resized to 400 wide, the height is 600. The tool rounds to whole pixels, so some original ratios can only be approximated at small sizes.'),
   ('When the requested shape is different','A 16:9 photo cannot fill a square without changing the visible content, adding space or stretching. Forcing it to 800 × 800 with the ratio unlocked changes its shape. Crop to a square or add a border in a suitable editor first if the destination needs a square. Toolnest’s resizer changes dimensions; it does not crop, remove a background or add borders.'),
   ('Choose the output for the image and destination','Use an accepted output format. JPEG replaces transparency with white in the resizer. PNG can retain transparency, while WebP provides another option when supported by the destination. A smaller pixel grid does not guarantee a smaller file: re-encoding into a different format can increase the bytes. Check the size shown after processing.'),
   ('Fit a byte limit after setting required pixels','If the image has the right pixel dimensions but exceeds an upload cap, use Compress image to KB with dimension reduction disabled. If the portal requires 800 × 450, keep those pixels while trying a lower quality setting. If it also requires particular print-resolution metadata, use an appropriate print workflow; this browser resizer is not a DPI metadata editor.')
  ],['image-resizer','aspect-ratio-calculator','compress-image-to-size']))
