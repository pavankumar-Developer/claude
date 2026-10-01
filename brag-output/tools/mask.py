"""Privacy masking for Parkmed screenshots.
Boxes are in *display* coordinates (as viewed at <=2000px wide) and scaled by S.
  blur:    heavy blur over personal data (names, IDs, plates, photos)
  replace: paint over with sampled bg and draw fictional text
"""
import sys, json
from PIL import Image, ImageDraw, ImageFilter, ImageFont
SRC = sys.argv[1]; DST = sys.argv[2]
FONT = "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf"
FONTB = "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf"

def blur(im, b, s):
    x0,y0,x1,y1 = [int(v*s) for v in b]
    x1=min(x1,im.width); y1=min(y1,im.height)
    reg = im.crop((x0,y0,x1,y1))
    w,h = reg.size
    k = max(8, min(w,h)//2)
    reg = reg.resize((max(1,w//k), max(1,h//k)), Image.BILINEAR).resize((w,h), Image.BILINEAR)
    reg = reg.filter(ImageFilter.GaussianBlur(max(3, k//2)))
    im.paste(reg, (x0,y0))

def replace(im, b, s, text, size, color, bold=True, bg=None):
    x0,y0,x1,y1 = [int(v*s) for v in b]
    d = ImageDraw.Draw(im)
    if bg is None:
        bg = im.getpixel((x1-2, y0+2))
    d.rectangle((x0,y0,x1,y1), fill=bg)
    f = ImageFont.truetype(FONTB if bold else FONT, int(size*s))
    th = f.getbbox("Ag")[3]
    d.text((x0+2, y0 + ((y1-y0)-th)//2), text, font=f, fill=color)

spec = json.load(open(sys.argv[3]))[sys.argv[4]]
im = Image.open(SRC).convert("RGB")
S = spec.get("s", 1.0)
for op in spec.get("ops", []):
    if op[0] == "blur": blur(im, op[1], S)
    elif op[0] == "rep": replace(im, op[1], S, op[2], op[3], tuple(op[4]), op[5] if len(op)>5 else True)
if "crop" in spec:
    x0,y0,x1,y1 = [int(v*S) for v in spec["crop"]]
    im = im.crop((x0,y0,x1,y1))
im.save(DST, optimize=True)
print(DST, im.size)
