import os
import requests
from PIL import Image
import io

# Create images directory if it doesn't exist
os.makedirs("assets/images", exist_ok=True)

def download_and_resize_image(url, filename, size=(800, 600)):
    """Download an image from URL and resize it"""
    try:
        response = requests.get(url)
        response.raise_for_status()
        
        img = Image.open(io.BytesIO(response.content))
        img = img.resize(size, Image.Resampling.LANCZOS)
        img.save(f"assets/images/{filename}", quality=95)
        print(f"Downloaded and saved {filename}")
    except Exception as e:
        print(f"Error downloading {filename}: {str(e)}")

# Download technology-themed background images
tech_images = [
    {
        "url": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1950&q=80",
        "filename": "coding-background.jpg"
    },
    {
        "url": "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1950&q=80",
        "filename": "developer-workspace.jpg"
    },
    {
        "url": "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1868&q=80",
        "filename": "modern-tech.jpg"
    },
    {
        "url": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1950&q=80",
        "filename": "laptop-coding.jpg"
    },
    {
        "url": "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1950&q=80",
        "filename": "data-science.jpg"
    }
]

print("Downloading technology-themed images...")
for img_data in tech_images:
    download_and_resize_image(img_data["url"], img_data["filename"])

# Create a profile image with technology theme
def create_technology_profile():
    """Create a technology-themed profile image"""
    # Create a new image with gradient background
    img = Image.new('RGB', (400, 400), color='#0f2027')
    
    # Add gradient effect manually by drawing lines
    for y in range(400):
        # Calculate gradient color
        r = int(15 + (31 - 15) * y / 400)  # From #0f2027 to #2193b0
        g = int(32 + (147 - 32) * y / 400)
        b = int(39 + (177 - 39) * y / 400)
        for x in range(400):
            img.putpixel((x, y), (r, g, b))
    
    # Save the image
    img.save("assets/images/profile-tech.jpg", quality=95)
    print("Created technology-themed profile image")

create_technology_profile()

print("All images downloaded and created successfully!")