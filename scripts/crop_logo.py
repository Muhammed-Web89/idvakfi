from PIL import Image
import os

# Paths
input_path = '/Users/abdulloh/.gemini/antigravity-ide/brain/52a37802-df19-4965-8be3-c03cce6aa52b/media__1782570256694.png'
public_dir = '/Users/abdulloh/islami davet wakfı 2/idvakfi/public'
app_dir = '/Users/abdulloh/islami davet wakfı 2/idvakfi/app'

# Load image
im = Image.open(input_path)

# Bounding box of the icon part (x from 0 to 312)
icon_part = im.crop((0, 0, 312, im.height))
bbox = icon_part.getbbox() # (40, 28, 312, 266)

# Make it square
y1 = 28 - 17
y2 = 266 + 17
icon_cropped = im.crop((40, y1, 312, y2))

# Ensure output directories exist
os.makedirs(public_dir, exist_ok=True)
os.makedirs(app_dir, exist_ok=True)

# Save cropped icon
icon_cropped.save(os.path.join(public_dir, 'logo-icon.png'))
icon_cropped.save(os.path.join(app_dir, 'icon.png'))

# Save full logo
im.save(os.path.join(public_dir, 'logo.png'))

print("Marka logoları başarıyla kaydedildi!")
