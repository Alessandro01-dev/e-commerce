const reviews = [
  // 0: Samsung 55-Inch QLED TV
  { comment: "The 120Hz refresh rate makes gaming so smooth on my PS5.", rating: 5, userIdx: 12, productIdx: 0 },
  { comment: "AI upscaling really improves the quality of older movies.", rating: 5, userIdx: 24, productIdx: 0 },
  { comment: "Colors are vibrant and the Alexa integration is seamless.", rating: 4, userIdx: 5, productIdx: 0 },
  { comment: "Great picture quality for the price, dual LED makes a difference.", rating: 5, userIdx: 33, productIdx: 0 },
  { comment: "Good TV, but the internal speakers could be a bit louder.", rating: 4, userIdx: 41, productIdx: 0 },

  // 1: Sony WH-1000XM5 Headphones
  { comment: "The best noise canceling I've ever experienced, period.", rating: 5, userIdx: 0, productIdx: 1 },
  { comment: "Super lightweight and comfortable for long flights.", rating: 5, userIdx: 18, productIdx: 1 },
  { comment: "Call quality is crystal clear even in windy conditions.", rating: 5, userIdx: 49, productIdx: 1 },
  { comment: "Battery life actually lasts the full 30 hours as advertised.", rating: 4, userIdx: 7, productIdx: 1 },
  { comment: "Premium feel and incredible soundstage. Worth the investment.", rating: 5, userIdx: 29, productIdx: 1 },

  // 2: Amazon Echo Show 10
  { comment: "The way the screen follows you during calls is magic.", rating: 5, userIdx: 3, productIdx: 2 },
  { comment: "Great for following recipes in the kitchen while moving around.", rating: 5, userIdx: 15, productIdx: 2 },
  { comment: "The 13MP camera is a huge upgrade over the smaller models.", rating: 4, userIdx: 27, productIdx: 2 },
  { comment: "Sound quality is surprisingly deep and fills the room.", rating: 5, userIdx: 38, productIdx: 2 },
  { comment: "Sometimes the motion is a bit slow to react, but still cool.", rating: 4, userIdx: 11, productIdx: 2 },

  // 3: XGIMI MoGo 2 Pro Projector
  { comment: "The auto-keystone correction works perfectly every time.", rating: 5, userIdx: 44, productIdx: 3 },
  { comment: "Very compact and the image is bright for its size.", rating: 4, userIdx: 2, productIdx: 3 },
  { comment: "Perfect for outdoor movie nights with the family.", rating: 5, userIdx: 22, productIdx: 3 },
  { comment: "Built-in speakers are clear, but I usually connect a soundbar.", rating: 4, userIdx: 31, productIdx: 3 },
  { comment: "Great portable smart projector, very easy to set up.", rating: 5, userIdx: 9, productIdx: 3 },

  // 4: Canon EOS R6 Mark II
  { comment: "The subject tracking is eerily accurate for wildlife shots.", rating: 5, userIdx: 6, productIdx: 4 },
  { comment: "Stunning 4K60p video quality with no overheating issues yet.", rating: 5, userIdx: 20, productIdx: 4 },
  { comment: "A massive upgrade from my old DSLR. The IBIS is fantastic.", rating: 5, userIdx: 47, productIdx: 4 },
  { comment: "Professional results right out of the box. Highly recommended.", rating: 5, userIdx: 14, productIdx: 4 },
  { comment: "Pricey, but the performance in low light is unmatched.", rating: 4, userIdx: 35, productIdx: 4 },

  // 5: Aura Carver 10.1-inch WiFi Frame
  { comment: "Setup was a breeze and the unlimited storage is a huge plus.", rating: 5, userIdx: 1, productIdx: 5 },
  { comment: "The app makes it so easy to send photos to my parents.", rating: 5, userIdx: 19, productIdx: 5 },
  { comment: "Display is crisp and the auto-brightness works very well.", rating: 4, userIdx: 42, productIdx: 5 },
  { comment: "Elegant design that fits any room decor perfectly.", rating: 5, userIdx: 8, productIdx: 5 },
  { comment: "Lovely way to keep memories alive in the living room.", rating: 5, userIdx: 25, productIdx: 5 },

  // 6: Sonos Era 100
  { comment: "Huge sound from a small speaker. The bass is deep and punchy.", rating: 5, userIdx: 4, productIdx: 6 },
  { comment: "Bluetooth connectivity is a very welcome addition to Sonos.", rating: 5, userIdx: 28, productIdx: 6 },
  { comment: "The soundstage is much wider than the old Sonos One.", rating: 4, userIdx: 16, productIdx: 6 },
  { comment: "Integration with my existing system was flawless.", rating: 5, userIdx: 45, productIdx: 6 },
  { comment: "Expensive, but the acoustic quality is top-tier.", rating: 4, userIdx: 30, productIdx: 6 },

  // 7: Logitech R500s Remote
  { comment: "Simple, ergonomic, and the laser is very bright.", rating: 5, userIdx: 13, productIdx: 7 },
  { comment: "Connected instantly via Bluetooth to my MacBook.", rating: 5, userIdx: 36, productIdx: 7 },
  { comment: "The 20-meter range allows me to move freely during talks.", rating: 4, userIdx: 48, productIdx: 7 },
  { comment: "Tactile buttons make it easy to use without looking down.", rating: 5, userIdx: 21, productIdx: 7 },
  { comment: "Does exactly what it's supposed to do. Very reliable.", rating: 4, userIdx: 39, productIdx: 7 },

  // 8: Samsung T7 Shield 2TB SSD
  { comment: "Blazing fast speeds, perfect for editing 4K video directly.", rating: 5, userIdx: 17, productIdx: 8 },
  { comment: "The rugged case gives me peace of mind when traveling.", rating: 5, userIdx: 46, productIdx: 8 },
  { comment: "Water and dust resistance is a lifesaver for field work.", rating: 5, userIdx: 32, productIdx: 8 },
  { comment: "Small enough to fit in my pocket, yet holds 2TB.", rating: 4, userIdx: 10, productIdx: 8 },
  { comment: "Gets a bit warm during long transfers, but never slows down.", rating: 4, userIdx: 23, productIdx: 8 },

  // 9: Dyson Purifier Cool Gen1
  { comment: "Noticeably improved the air quality in my bedroom.", rating: 5, userIdx: 40, productIdx: 9 },
  { comment: "Quiet enough to leave on while sleeping. Very cooling.", rating: 4, userIdx: 26, productIdx: 9 },
  { comment: "The HEPA filter is excellent for my seasonal allergies.", rating: 5, userIdx: 37, productIdx: 9 },
  { comment: "Sleek design, much better looking than standard fans.", rating: 4, userIdx: 34, productIdx: 9 },
  { comment: "A bit expensive for a fan, but the purification is worth it.", rating: 4, userIdx: 43, productIdx: 9 },

  // 10: Edifier R1280DB Powered Bluetooth Speakers
  { comment: "The wood finish looks premium and the sound is incredibly balanced for the price.", rating: 5, userIdx: 5, productIdx: 10 },
  { comment: "Great connectivity options, switching between Bluetooth and Optical is easy.", rating: 5, userIdx: 21, productIdx: 10 },
  { comment: "Perfect size for a bookshelf or desktop setup. Very punchy bass.", rating: 4, userIdx: 34, productIdx: 10 },
  { comment: "Remote is a bit small but functional. Overall, a solid audio upgrade.", rating: 4, userIdx: 42, productIdx: 10 },
  { comment: "Impressive clarity from the silk dome tweeters. Highly recommended.", rating: 5, userIdx: 11, productIdx: 10 },

  // 11: Blue Yeti USB Microphone
  { comment: "The four pickup patterns make it so versatile for both podcasts and calls.", rating: 5, userIdx: 2, productIdx: 11 },
  { comment: "True plug and play experience. My voice sounds professional immediately.", rating: 5, userIdx: 19, productIdx: 11 },
  { comment: "Sturdy build, though it takes up quite a bit of desk space.", rating: 4, userIdx: 48, productIdx: 11 },
  { comment: "Excellent noise rejection when using the cardioid mode.", rating: 5, userIdx: 30, productIdx: 11 },
  { comment: "A classic for a reason. Best USB mic in this price range.", rating: 4, userIdx: 7, productIdx: 11 },

  // 12: Sony HT-A5000 Dolby Atmos Soundbar
  { comment: "The 360 Spatial Sound Mapping creates an incredible immersive bubble.", rating: 5, userIdx: 14, productIdx: 12 },
  { comment: "Built-in subwoofers are surprisingly powerful, no extra sub needed for me.", rating: 5, userIdx: 33, productIdx: 12 },
  { comment: "Dolby Atmos performance is stellar with 4K movies.", rating: 4, userIdx: 0, productIdx: 12 },
  { comment: "Easy setup with HDMI eARC. Integrates perfectly with my Sony TV.", rating: 5, userIdx: 25, productIdx: 12 },
  { comment: "Expensive, but the soundstage width is unmatched by cheaper bars.", rating: 4, userIdx: 41, productIdx: 12 },

  // 13: Audio-Technica AT-LP60XBT-BK Turntable
  { comment: "Connected to my Bluetooth speakers in seconds. Great for vinyl beginners.", rating: 5, userIdx: 3, productIdx: 13 },
  { comment: "Fully automatic operation is very convenient. No fear of scratching records.", rating: 5, userIdx: 22, productIdx: 13 },
  { comment: "Sound quality is warm and clear. The dual magnet cartridge is excellent.", rating: 4, userIdx: 18, productIdx: 13 },
  { comment: "Sleek black design that fits any modern living room decor.", rating: 5, userIdx: 45, productIdx: 13 },
  { comment: "The belt-drive is quiet and consistent. Very happy with this purchase.", rating: 4, userIdx: 9, productIdx: 13 },

  // 14: Jabra Elite 85t Earbuds
  { comment: "The ANC is top-notch, it really blocks out the office chatter.", rating: 5, userIdx: 12, productIdx: 14 },
  { comment: "12mm speakers deliver deep bass without sacrificing the highs.", rating: 5, userIdx: 37, productIdx: 14 },
  { comment: "Fit is very comfortable for several hours of use. Case is quite pocketable.", rating: 4, userIdx: 1, productIdx: 14 },
  { comment: "Wireless charging works flawlessly with my Qi pad.", rating: 4, userIdx: 28, productIdx: 14 },
  { comment: "Great call quality thanks to the multiple microphones.", rating: 5, userIdx: 49, productIdx: 14 },

  // 15: JBL Flip 6 Waterproof Speaker
  { comment: "Bold sound for such a small device. The bass really thumps.", rating: 5, userIdx: 44, productIdx: 15 },
  { comment: "Used it by the pool all weekend. Completely waterproof as promised.", rating: 5, userIdx: 6, productIdx: 15 },
  { comment: "Battery life easily got me through 12 hours of playtime.", rating: 4, userIdx: 15, productIdx: 15 },
  { comment: "The 2-way speaker system makes the vocals sound very crisp.", rating: 5, userIdx: 29, productIdx: 15 },
  { comment: "Very rugged and portable. Perfect for hiking trips.", rating: 4, userIdx: 8, productIdx: 15 },

  // 16: Focusrite Scarlett 2i2 4th Gen
  { comment: "The new preamps are incredibly clean and quiet. A studio essential.", rating: 5, userIdx: 20, productIdx: 16 },
  { comment: "Auto Gain feature is a lifesaver for setting levels quickly.", rating: 5, userIdx: 47, productIdx: 16 },
  { comment: "Build quality is solid and the halo indicators are very helpful.", rating: 5, userIdx: 4, productIdx: 16 },
  { comment: "Latency is virtually non-existent at 192kHz. Exceptional performance.", rating: 4, userIdx: 31, productIdx: 16 },
  { comment: "The best entry-level interface just got even better.", rating: 5, userIdx: 13, productIdx: 16 },

  // 17: Pure Evoke H3 DAB+ Digital Radio
  { comment: "The real wood finish looks beautiful on my bedside table.", rating: 5, userIdx: 26, productIdx: 17 },
  { comment: "DAB+ reception is crystal clear. 40 presets are more than enough.", rating: 4, userIdx: 38, productIdx: 17 },
  { comment: "Vivid color display is easy to read even from across the room.", rating: 5, userIdx: 10, productIdx: 17 },
  { comment: "Bluetooth streaming works perfectly with my phone apps.", rating: 5, userIdx: 43, productIdx: 17 },
  { comment: "Simple to operate and the sound is warm and rich.", rating: 4, userIdx: 16, productIdx: 17 },

  // 18: 1Mii B06 Pro Bluetooth Receiver
  { comment: "Incredible range! I can move around the whole house without dropouts.", rating: 5, userIdx: 24, productIdx: 18 },
  { comment: "AptX Low Latency makes a huge difference for watching TV movies.", rating: 5, userIdx: 46, productIdx: 18 },
  { comment: "Breathed new life into my old analog receiver. Setup was instant.", rating: 5, userIdx: 23, productIdx: 18 },
  { comment: "The 3D audio feature adds a nice sense of space to the sound.", rating: 4, userIdx: 32, productIdx: 18 },
  { comment: "Solid antennas and stable connection. Best receiver I've owned.", rating: 4, userIdx: 17, productIdx: 18 },

  // 19: Sennheiser HD 600 Open Back Headphones
  { comment: "The most natural soundstage I've ever heard. Pure audiophile joy.", rating: 5, userIdx: 35, productIdx: 19 },
  { comment: "Unmatched mid-range clarity. Vocals feel like they are in the room.", rating: 5, userIdx: 40, productIdx: 19 },
  { comment: "Very comfortable for long listening sessions due to the lightweight build.", rating: 5, userIdx: 27, productIdx: 19 },
  { comment: "Requires a good amp to shine, but once powered, they are incredible.", rating: 4, userIdx: 39, productIdx: 19 },
  { comment: "A timeless classic for studio monitoring and critical listening.", rating: 5, userIdx: 11, productIdx: 19 },

  // 20: Logitech G915 TKL Wireless Keyboard
  { comment: "The low-profile switches feel amazing for both typing and gaming. Worth every penny.", rating: 5, userIdx: 12, productIdx: 20 },
  { comment: "Battery life is insane even with RGB on. The build quality is top-tier aluminum.", rating: 5, userIdx: 34, productIdx: 20 },
  { comment: "LIGHTSPEED wireless is indistinguishable from wired. Zero lag detected.", rating: 5, userIdx: 7, productIdx: 20 },
  { comment: "Very sleek design, saves so much desk space without the numpad.", rating: 4, userIdx: 21, productIdx: 20 },
  { comment: "Great keyboard, but the micro-USB charging in 2024 is a bit disappointing.", rating: 4, userIdx: 45, productIdx: 20 },

  // 21: Logitech G PRO X SUPERLIGHT Mouse
  { comment: "It's so light it feels like I'm moving air. My aim has genuinely improved.", rating: 5, userIdx: 0, productIdx: 21 },
  { comment: "The HERO 25K sensor is incredibly precise. No spin-outs or jitter at all.", rating: 5, userIdx: 18, productIdx: 21 },
  { comment: "Clean design without unnecessary buttons. The PTFE feet glide so smoothly.", rating: 5, userIdx: 49, productIdx: 21 },
  { comment: "Best gaming mouse I've ever owned. Simple, light, and deadly accurate.", rating: 5, userIdx: 26, productIdx: 21 },
  { comment: "Battery lasts forever. I only charge it once every two weeks.", rating: 4, userIdx: 8, productIdx: 21 },

  // 22: LG UltraGear 34-Inch Curved Monitor
  { comment: "The UltraWide resolution completely changes the immersion in open-world games.", rating: 5, userIdx: 4, productIdx: 22 },
  { comment: "160Hz on a 34-inch panel is buttery smooth. FreeSync works perfectly with my card.", rating: 5, userIdx: 23, productIdx: 22 },
  { comment: "Colors are great for a VA panel, and the curve is just right for this size.", rating: 4, userIdx: 39, productIdx: 22 },
  { comment: "Excellent for multitasking during the day and gaming at night.", rating: 5, userIdx: 15, productIdx: 22 },
  { comment: "Stand is a bit large, but the screen quality is fantastic for the price.", rating: 4, userIdx: 42, productIdx: 22 },

  // 23: Secretlab Titan Evo Gaming Chair
  { comment: "The lumbar support system is the best I've used. No more back pain after 8 hours.", rating: 5, userIdx: 11, productIdx: 23 },
  { comment: "Setup was very easy. The magnetic head pillow is a brilliant touch.", rating: 5, userIdx: 29, productIdx: 23 },
  { comment: "Firm but supportive. This isn't a soft couch, it's a professional ergonomic tool.", rating: 5, userIdx: 47, productIdx: 23 },
  { comment: "The hybrid leatherette feels very durable and premium to the touch.", rating: 4, userIdx: 2, productIdx: 23 },
  { comment: "Pricey, but my back thanks me every day. 4D armrests are a game changer.", rating: 4, userIdx: 31, productIdx: 23 },

  // 24: Sony DualSense Wireless Controller
  { comment: "The haptic feedback in games like Astrobot is something you have to feel to believe.", rating: 5, userIdx: 33, productIdx: 24 },
  { comment: "Adaptive triggers add so much tension and realism to shooters and racing games.", rating: 5, userIdx: 6, productIdx: 24 },
  { comment: "Ergonomics are a big step up from the DualShock 4. Fits the hand perfectly.", rating: 5, userIdx: 19, productIdx: 24 },
  { comment: "Built-in mic is handy for quick chats, and the touch pad is responsive.", rating: 4, userIdx: 41, productIdx: 24 },
  { comment: "Battery life could be better, but the features make it the best controller out there.", rating: 4, userIdx: 10, productIdx: 24 },

  // 25: Meta Quest 3 128GB VR Headset
  { comment: "The mixed reality passthrough is stunningly clear. Playing in my living room is wild.", rating: 5, userIdx: 22, productIdx: 25 },
  { comment: "Huge upgrade over the Quest 2. The pancake lenses make everything look crisp.", rating: 5, userIdx: 46, productIdx: 25 },
  { comment: "Hand tracking has improved significantly. Very comfortable with the slim design.", rating: 4, userIdx: 3, productIdx: 25 },
  { comment: "The Infinite Display resolution makes reading text in VR finally viable.", rating: 5, userIdx: 38, productIdx: 25 },
  { comment: "Powerful hardware, though I recommend getting a third-party head strap for comfort.", rating: 4, userIdx: 13, productIdx: 25 },

  // 26: Razer Seiren V2 Pro Microphone
  { comment: "My voice sounds much deeper and professional. The high-pass filter is great.", rating: 5, userIdx: 25, productIdx: 26 },
  { comment: "Plug and play simplicity with studio-grade 24-bit recording quality.", rating: 5, userIdx: 5, productIdx: 26 },
  { comment: "The gain limiter prevents me from clipping when I get too loud during streams.", rating: 5, userIdx: 43, productIdx: 26 },
  { comment: "Sleek look on my boom arm. The build quality feels very premium.", rating: 4, userIdx: 17, productIdx: 26 },
  { comment: "Good background noise rejection, though it still picks up some keyboard clicks.", rating: 4, userIdx: 32, productIdx: 26 },

  // 27: Elgato 4K S Capture Card
  { comment: "Zero-latency passthrough is perfect. I don't feel any lag while playing.", rating: 5, userIdx: 14, productIdx: 27 },
  { comment: "Direct SD card recording is a lifesaver for capturing gameplay without a PC.", rating: 5, userIdx: 37, productIdx: 27 },
  { comment: "4K60 HDR capture looks incredible. Setup was effortless on my Windows rig.", rating: 5, userIdx: 1, productIdx: 27 },
  { comment: "HEVC encoding keeps my file sizes manageable without losing quality.", rating: 4, userIdx: 48, productIdx: 27 },
  { comment: "Pricey compared to 1080p cards, but essential for modern consoles.", rating: 4, userIdx: 28, productIdx: 27 },

  // 28: Razer Goliathus Extended Chroma
  { comment: "The RGB strip around the edge looks fantastic with the rest of my Razer gear.", rating: 5, userIdx: 24, productIdx: 28 },
  { comment: "Massive size, fits my keyboard and mouse with plenty of room to spare.", rating: 5, userIdx: 40, productIdx: 28 },
  { comment: "Surface is the perfect balance between speed and control for FPS games.", rating: 4, userIdx: 9, productIdx: 28 },
  { comment: "Rubber base stays put no matter how fast I move my mouse.", rating: 5, userIdx: 16, productIdx: 28 },
  { comment: "Bright lighting and easy to clean. A bit expensive for a cloth pad though.", rating: 4, userIdx: 30, productIdx: 28 },

  // 29: Logitech G Extreme 3D Pro
  { comment: "Perfect for Microsoft Flight Simulator. The twist rudder is very precise.", rating: 5, userIdx: 44, productIdx: 29 },
  { comment: "Incredible value for the price. 12 buttons are plenty for basic flight controls.", rating: 5, userIdx: 20, productIdx: 29 },
  { comment: "The weighted base is solid, it doesn't move during intense dogfights.", rating: 4, userIdx: 35, productIdx: 29 },
  { comment: "Classic design that still holds up. Very comfortable for long flight sessions.", rating: 5, userIdx: 27, productIdx: 29 },
  { comment: "Software is a bit dated, but the hardware works flawlessly on Windows 11.", rating: 4, userIdx: 1, productIdx: 29 },

  // 30: Apple MacBook Air 13-inch M3
  { comment: "The M3 chip is a beast. Everything opens instantly and it never gets hot.", rating: 5, userIdx: 42, productIdx: 30 },
  { comment: "Incredible battery life, I can work all day without even thinking about the charger.", rating: 5, userIdx: 12, productIdx: 30 },
  { comment: "Liquid Retina display is gorgeous. Best laptop for students and office work.", rating: 5, userIdx: 28, productIdx: 30 },
  { comment: "The 16GB of RAM makes multitasking super smooth on macOS.", rating: 4, userIdx: 5, productIdx: 30 },
  { comment: "Pricey, but the build quality and speed justify the cost.", rating: 4, userIdx: 37, productIdx: 30 },

  // 31: Apple iMac 24-inch M3
  { comment: "The 4.5K display is stunning. It's the centerpiece of my home office.", rating: 5, userIdx: 19, productIdx: 31 },
  { comment: "Sleek and thin design. The color-matched accessories are a nice touch.", rating: 5, userIdx: 44, productIdx: 31 },
  { comment: "FaceTime camera is very clear, perfect for professional video calls.", rating: 4, userIdx: 8, productIdx: 31 },
  { comment: "Fast performance for photo editing and daily tasks. Quiet operation.", rating: 5, userIdx: 31, productIdx: 31 },
  { comment: "Wish it had more ports on the back, but otherwise a perfect AIO.", rating: 4, userIdx: 22, productIdx: 31 },

  // 32: Intel NUC 13 Pro Mini PC
  { comment: "Tiny but incredibly powerful. Runs my home server and plex without a hitch.", rating: 5, userIdx: 48, productIdx: 32 },
  { comment: "Support for four 4K monitors is a game changer for my trading setup.", rating: 5, userIdx: 3, productIdx: 32 },
  { comment: "The i7 and 32GB RAM make it a very capable professional workstation.", rating: 5, userIdx: 15, productIdx: 32 },
  { comment: "Very easy to set up and the build quality is solid. Perfect for small desks.", rating: 4, userIdx: 27, productIdx: 32 },
  { comment: "Fan can get a bit loud under heavy load, but performance is top-tier.", rating: 4, userIdx: 10, productIdx: 32 },

  // 33: Apple iPad Air (5th Gen)
  { comment: "The M1 chip makes this tablet feel as fast as a computer.", rating: 5, userIdx: 25, productIdx: 33 },
  { comment: "Center Stage is amazing for video calls while I'm moving around.", rating: 5, userIdx: 1, productIdx: 33 },
  { comment: "The purple color is beautiful and the screen is very responsive.", rating: 4, userIdx: 49, productIdx: 33 },
  { comment: "Perfect balance between the base iPad and the Pro model.", rating: 5, userIdx: 33, productIdx: 33 },
  { comment: "Apple Pencil support makes it a great tool for digital artists.", rating: 4, userIdx: 7, productIdx: 33 },

  // 34: Razer Core X eGPU
  { comment: "Turned my ultrabook into a gaming beast. Setup was plug and play.", rating: 5, userIdx: 21, productIdx: 34 },
  { comment: "Plenty of room for large cards. The 650W PSU is more than enough.", rating: 5, userIdx: 43, productIdx: 34 },
  { comment: "Solid aluminum build. It actually helps cool the GPU quite well.", rating: 4, userIdx: 14, productIdx: 34 },
  { comment: "A bit bulky on the desk, but the performance boost is undeniable.", rating: 4, userIdx: 36, productIdx: 34 },
  { comment: "Great for 3D rendering on a laptop. Thunderbolt connection is stable.", rating: 5, userIdx: 0, productIdx: 34 },

  // 35: Logitech MX Keys S
  { comment: "The typing experience is very tactile and quiet. Best keyboard I've owned.", rating: 5, userIdx: 46, productIdx: 35 },
  { comment: "Smart backlighting is a great feature for working late at night.", rating: 5, userIdx: 13, productIdx: 35 },
  { comment: "Switching between my Mac and PC is instant with the Logi Bolt.", rating: 5, userIdx: 29, productIdx: 35 },
  { comment: "Customizable Smart Actions have really sped up my workflow.", rating: 4, userIdx: 4, productIdx: 35 },
  { comment: "Battery lasts a long time and the build feels very premium.", rating: 5, userIdx: 17, productIdx: 35 },

  // 36: CalDigit TS4 Dock
  { comment: "The holy grail of docks. Every port I could ever need in one cable.", rating: 5, userIdx: 39, productIdx: 36 },
  { comment: "98W charging is enough for my MacBook Pro 16-inch. Flawless.", rating: 5, userIdx: 2, productIdx: 36 },
  { comment: "Expensive, but it's the only dock that handles dual 4K without issues.", rating: 5, userIdx: 45, productIdx: 36 },
  { comment: "SD 4.0 slot is super fast for offloading my camera footage.", rating: 4, userIdx: 18, productIdx: 36 },
  { comment: "Sturdy build and stays cool even with all ports populated.", rating: 4, userIdx: 32, productIdx: 36 },

  // 37: Wacom Intuos Graphics Tablet
  { comment: "Pressure sensitivity is excellent. Feels very natural to draw on.", rating: 5, userIdx: 24, productIdx: 37 },
  { comment: "The battery-free pen is lightweight and perfectly balanced.", rating: 5, userIdx: 11, productIdx: 37 },
  { comment: "Bluetooth connectivity works great, no more cables cluttering my desk.", rating: 4, userIdx: 40, productIdx: 37 },
  { comment: "The ExpressKeys are a lifesaver for shortcuts in Photoshop.", rating: 5, userIdx: 6, productIdx: 37 },
  { comment: "Great entry to mid-level tablet for digital artists and editors.", rating: 4, userIdx: 35, productIdx: 37 },

  // 38: Samsung 990 PRO 1TB SSD
  { comment: "Incredible speeds. My Windows boot time is now almost zero.", rating: 5, userIdx: 20, productIdx: 38 },
  { comment: "Perfect for PS5 expansion. The heatsink fits perfectly.", rating: 5, userIdx: 47, productIdx: 38 },
  { comment: "Handles heavy video editing files without any thermal throttling.", rating: 5, userIdx: 9, productIdx: 38 },
  { comment: "The fastest Gen4 drive on the market. Reliability has been great.", rating: 5, userIdx: 30, productIdx: 38 },
  { comment: "Pricey for 1TB, but the performance is in a league of its own.", rating: 4, userIdx: 16, productIdx: 38 },

  // 39: TP-Link Deco XE75 Pro
  { comment: "Dead zones are completely gone. Full speed in every corner of the house.", rating: 5, userIdx: 41, productIdx: 39 },
  { comment: "Wi-Fi 6E makes a huge difference for my compatible devices.", rating: 5, userIdx: 23, productIdx: 39 },
  { comment: "Setup via the app was incredibly simple. Took less than 10 minutes.", rating: 5, userIdx: 38, productIdx: 39 },
  { comment: "Supports all my 50+ smart home devices without any lag.", rating: 4, userIdx: 13, productIdx: 39 },
  { comment: "Great range and very stable connection. Highly recommended.", rating: 4, userIdx: 26, productIdx: 39 },

  // 40: Apple iPhone 15 Pro Max
  { comment: "The Natural Titanium finish is gorgeous and much lighter than the previous Pro Max.", rating: 5, userIdx: 21, productIdx: 40 },
  { comment: "The 5x optical zoom on the telephoto lens is a game changer for mobile photography.", rating: 5, userIdx: 45, productIdx: 40 },
  { comment: "Action button is very useful for quick shortcuts. Super Retina display is flawless.", rating: 5, userIdx: 3, productIdx: 40 },
  { comment: "Incredible video quality with the new Log recording feature for professionals.", rating: 4, userIdx: 12, productIdx: 40 },
  { comment: "Expensive, but the performance and battery life are unmatched in the Apple lineup.", rating: 4, userIdx: 30, productIdx: 40 },

  // 41: Samsung Galaxy Z Flip5
  { comment: "The new Flex Window is actually useful now! I barely need to open the phone for texts.", rating: 5, userIdx: 8, productIdx: 41 },
  { comment: "Foldable tech has finally matured. The hinge feels solid and the crease is minimal.", rating: 5, userIdx: 27, productIdx: 41 },
  { comment: "So compact in the pocket. It's the perfect conversation starter.", rating: 4, userIdx: 15, productIdx: 41 },
  { comment: "Snapdragon 8 Gen 2 makes it incredibly snappy and fast for multitasking.", rating: 5, userIdx: 39, productIdx: 41 },
  { comment: "Battery life is decent, but don't expect it to last as long as a S23 Ultra.", rating: 4, userIdx: 48, productIdx: 41 },

  // 42: Motorola Moto G85
  { comment: "Excellent value for money. The 120Hz pOLED screen looks premium.", rating: 5, userIdx: 33, productIdx: 42 },
  { comment: "Battery life is fantastic, easily lasts me two days of moderate use.", rating: 5, userIdx: 1, productIdx: 42 },
  { comment: "The Surf Blue color is stunning in person. Very comfortable to hold.", rating: 4, userIdx: 44, productIdx: 42 },
  { comment: "OIS on the 50MP camera helps a lot with night shots. Great mid-ranger.", rating: 4, userIdx: 19, productIdx: 42 },
  { comment: "Charging is fast enough with the 33W TurboPower. Clean Android experience.", rating: 5, userIdx: 6, productIdx: 42 },

  // 43: ASUS ROG Phone 7 Ultimate
  { comment: "The ultimate beast for gaming. The AeroActive cooler actually works.", rating: 5, userIdx: 42, productIdx: 43 },
  { comment: "AirTriggers are so responsive, gives me a huge advantage in PUBG and CoD.", rating: 5, userIdx: 10, productIdx: 43 },
  { comment: "Massive battery. I can game for hours without worrying about the charger.", rating: 5, userIdx: 23, productIdx: 43 },
  { comment: "The front-facing speakers are the best I've ever heard on a phone.", rating: 4, userIdx: 36, productIdx: 43 },
  { comment: "It's heavy and bulky, but that's the price for this kind of power.", rating: 4, userIdx: 5, productIdx: 43 },

  // 44: Xiaomi 13 Ultra
  { comment: "Leica optics make this feel like a real camera that happens to be a phone.", rating: 5, userIdx: 14, productIdx: 44 },
  { comment: "The 1-inch sensor provides natural bokeh that other phones can't replicate.", rating: 5, userIdx: 28, productIdx: 44 },
  { comment: "90W charging is insane, goes from zero to full in about 35 minutes.", rating: 5, userIdx: 47, productIdx: 44 },
  { comment: "Screen is incredibly bright even under direct sunlight. Professional tool.", rating: 4, userIdx: 2, productIdx: 44 },
  { comment: "Software has some bloat, but the camera system makes it worth it.", rating: 4, userIdx: 31, productIdx: 44 },

  // 45: ASUS Zenfone 10
  { comment: "Finally, a powerful phone that I can actually use with one hand!", rating: 5, userIdx: 35, productIdx: 45 },
  { comment: "Don't let the size fool you, the Snapdragon 8 Gen 2 is a powerhouse.", rating: 5, userIdx: 11, productIdx: 45 },
  { comment: "144Hz AMOLED is buttery smooth. Best compact phone on the market.", rating: 4, userIdx: 40, productIdx: 45 },
  { comment: "Gimbal stabilization on the camera is surprisingly effective for video.", rating: 5, userIdx: 22, productIdx: 45 },
  { comment: "Great battery life for such a small chassis. Very impressed.", rating: 4, userIdx: 9, productIdx: 45 },

  // 46: Blackview BV6200 Plus
  { comment: "The battery is a beast. I used it for 4 days on a camping trip without charging.", rating: 5, userIdx: 49, productIdx: 46 },
  { comment: "Ultra-loud speaker is perfect for noisy construction sites. Very rugged.", rating: 5, userIdx: 7, productIdx: 46 },
  { comment: "Dropped it in the mud and washed it off, still works perfectly. Indestructible.", rating: 5, userIdx: 25, productIdx: 46 },
  { comment: "Heavy and thick, but it's built like a tank for outdoor work.", rating: 4, userIdx: 17, productIdx: 46 },
  { comment: "Great reception in remote areas where my other phone failed.", rating: 4, userIdx: 34, productIdx: 46 },

  // 47: Google Pixel 7a
  { comment: "Best camera in this price range. Google's processing is magic.", rating: 5, userIdx: 4, productIdx: 47 },
  { comment: "Tensor G2 makes everything smooth and the AI features are very handy.", rating: 5, userIdx: 26, productIdx: 47 },
  { comment: "The Sea Blue color is beautiful. Perfect size for easy handling.", rating: 4, userIdx: 13, productIdx: 47 },
  { comment: "Clean Android with fast updates. Night Sight photos are incredible.", rating: 5, userIdx: 41, productIdx: 47 },
  { comment: "Bezels are a bit thick, but for the price, you can't complain.", rating: 4, userIdx: 38, productIdx: 47 },

  // 48: Nothing Phone (2)
  { comment: "The Glyph Interface is actually useful for timers and notifications. So unique.", rating: 5, userIdx: 18, productIdx: 48 },
  { comment: "Nothing OS is the cleanest version of Android I've used. Very fast.", rating: 5, userIdx: 46, productIdx: 48 },
  { comment: "Transparent design gets compliments everywhere. Truly stands out.", rating: 4, userIdx: 0, productIdx: 48 },
  { comment: "Solid cameras and great battery life. A very balanced flagship killer.", rating: 5, userIdx: 32, productIdx: 48 },
  { comment: "The LTPO screen is great for saving battery. Love the monochrome icons.", rating: 4, userIdx: 16, productIdx: 48 },

  // 49: OnePlus 12R
  { comment: "80W charging is a life saver. 15 minutes on the plug gives me a full day.", rating: 5, userIdx: 29, productIdx: 49 },
  { comment: "Performance is top-tier. Games run flawlessly on the 120Hz display.", rating: 5, userIdx: 43, productIdx: 49 },
  { comment: "The 5500mAh battery is one of the best in any modern flagship.", rating: 5, userIdx: 1, productIdx: 49 },
  { comment: "ProXDR display is stunning for HDR content. Very bright and vivid.", rating: 4, userIdx: 37, productIdx: 49 },
  { comment: "Great phone, though I wish it had wireless charging.", rating: 4, userIdx: 24, productIdx: 49 },

  // 50: Carhartt Men's Midweight Hooded Sweatshirt
  { comment: "Classic Carhartt quality. It's thick, warm, and the fit is perfect for layering.", rating: 5, userIdx: 14, productIdx: 50 },
  { comment: "The brushed interior is so soft. Best hoodie I've owned for outdoor work.", rating: 5, userIdx: 32, productIdx: 50 },
  { comment: "Heavy-duty material that actually holds up after dozens of washes.", rating: 5, userIdx: 4, productIdx: 50 },
  { comment: "Great handwarmer pocket. It runs a bit large, so consider sizing down.", rating: 4, userIdx: 21, productIdx: 50 },
  { comment: "Solid construction and very warm. Exactly what I expected from the brand.", rating: 4, userIdx: 48, productIdx: 50 },

  // 51: Levi's Men's 511 Slim Fit Selvedge Denim
  { comment: "Selvedge denim for this price is a steal. The quality of the fabric is top-notch.", rating: 5, userIdx: 7, productIdx: 51 },
  { comment: "Perfect slim fit, not too tight but gives a very clean silhouette.", rating: 5, userIdx: 29, productIdx: 51 },
  { comment: "The denim feels stiff at first but breaks in beautifully over time.", rating: 4, userIdx: 13, productIdx: 51 },
  { comment: "Great dark wash that works for both casual and semi-formal settings.", rating: 5, userIdx: 36, productIdx: 51 },
  { comment: "Levis never disappoints with the 511 cut. Very durable stitching.", rating: 4, userIdx: 0, productIdx: 51 },

  // 52: The North Face Men's Dryzzle FUTURELIGHT Jacket
  { comment: "Incredibly breathable for a waterproof jacket. No 'plastic bag' feel at all.", rating: 5, userIdx: 44, productIdx: 52 },
  { comment: "Kept me bone dry during a heavy downpour on my commute. Highly recommend.", rating: 5, userIdx: 18, productIdx: 52 },
  { comment: "Lightweight and packs down easily into my backpack. Great for travel.", rating: 4, userIdx: 2, productIdx: 52 },
  { comment: "The FUTURELIGHT tech is legit. Better than traditional Gore-Tex for high activity.", rating: 5, userIdx: 41, productIdx: 52 },
  { comment: "Expensive, but the recycled materials and performance make it worth it.", rating: 4, userIdx: 25, productIdx: 52 },

  // 53: Uniqlo Men's Extra Fine Merino Crewneck
  { comment: "Unbelievably soft for the price. Looks much more expensive than it is.", rating: 5, userIdx: 9, productIdx: 53 },
  { comment: "The merino wool is thin but very warm. Perfect for layering under a blazer.", rating: 5, userIdx: 49, productIdx: 53 },
  { comment: "Has a nice subtle sheen that makes it look very high-end. Fits true to size.", rating: 5, userIdx: 11, productIdx: 53 },
  { comment: "Naturally resists odors which is great for long days at the office.", rating: 4, userIdx: 33, productIdx: 53 },
  { comment: "Great color selection. It’s my go-to sweater for autumn and winter.", rating: 4, userIdx: 22, productIdx: 53 },

  // 54: Nike Pro Men's Tight Fit Training Top
  { comment: "The Dri-FIT fabric is amazing. Stays light and dry even during heavy cardio.", rating: 5, userIdx: 30, productIdx: 54 },
  { comment: "Great compression feel without being restrictive. The mesh panels really help.", rating: 5, userIdx: 6, productIdx: 54 },
  { comment: "Perfect base layer for the gym or running. The fit is very supportive.", rating: 4, userIdx: 15, productIdx: 54 },
  { comment: "Durable material that doesn't lose its shape after many workouts.", rating: 5, userIdx: 47, productIdx: 54 },
  { comment: "Keeps me cool and focused. Nike Pro is always reliable for training.", rating: 4, userIdx: 3, productIdx: 54 },

  // 55: Tommy Hilfiger Men's Linen Blend Shirt
  { comment: "The linen blend is perfect for summer. Very breezy and comfortable.", rating: 5, userIdx: 20, productIdx: 55 },
  { comment: "Classic Tommy style. Looks great with shorts or chinos for a vacation look.", rating: 5, userIdx: 43, productIdx: 55 },
  { comment: "Relaxed fit that doesn't feel sloppy. High quality fabric and stitching.", rating: 4, userIdx: 12, productIdx: 55 },
  { comment: "Wrinkles a bit as expected with linen, but it adds to the summer charm.", rating: 4, userIdx: 38, productIdx: 55 },
  { comment: "The embroidered logo is a nice subtle detail. Very happy with the purchase.", rating: 5, userIdx: 1, productIdx: 55 },

  // 56: Runcati (London Fog) Double Breasted Trench Coat
  { comment: "Very sophisticated look for the price. The tailored silhouette is spot on.", rating: 5, userIdx: 35, productIdx: 56 },
  { comment: "A great windbreaker for autumn. Fits perfectly over a suit jacket.", rating: 4, userIdx: 8, productIdx: 56 },
  { comment: "The double-breasted design gives it a very timeless, professional vibe.", rating: 5, userIdx: 27, productIdx: 56 },
  { comment: "Fabric feels durable and weather-resistant. Excellent business casual coat.", rating: 4, userIdx: 40, productIdx: 56 },
  { comment: "Looks exactly like the photos. Elegant and functional for rainy days.", rating: 5, userIdx: 17, productIdx: 56 },

  // 57: Champion Men's Heritage Oversized Graphic Tee
  { comment: "Love the heavyweight cotton. It feels like a real vintage shirt from the 90s.", rating: 5, userIdx: 5, productIdx: 57 },
  { comment: "The boxy fit is exactly what I was looking for. Very on-trend right now.", rating: 5, userIdx: 23, productIdx: 57 },
  { comment: "The 7-oz fabric is thick and doesn't get ruined in the dryer. Top quality.", rating: 4, userIdx: 31, productIdx: 57 },
  { comment: "Iconic C logo on the sleeve is a nice touch. Great everyday basic.", rating: 5, userIdx: 46, productIdx: 57 },
  { comment: "Slightly oversized as advertised. If you want a slim fit, size down.", rating: 4, userIdx: 10, productIdx: 57 },

  // 58: Patagonia Men's Nano Puff Vest
  { comment: "Incredibly light but keeps my core very warm. Perfect for hiking.", rating: 5, userIdx: 39, productIdx: 58 },
  { comment: "Windproof and handles light rain with no problem. Great layering piece.", rating: 5, userIdx: 16, productIdx: 58 },
  { comment: "The PrimaLoft insulation is excellent. Love that it's made with recycled materials.", rating: 5, userIdx: 3, productIdx: 58 },
  { comment: "Packs into its own pocket, which is so convenient for travel and camping.", rating: 4, userIdx: 28, productIdx: 58 },
  { comment: "Classic Patagonia look. It’s expensive, but the quality lasts forever.", rating: 4, userIdx: 45, productIdx: 58 },

  // 59: HUGO Men's Slim-Fit Casual Jacket
  { comment: "The minimalist design is exactly what I wanted. Sharp and modern.", rating: 5, userIdx: 24, productIdx: 59 },
  { comment: "Excellent slim fit that isn't too tight. Great for an urban night out.", rating: 5, userIdx: 19, productIdx: 59 },
  { comment: "Very lightweight but feels premium. The zip-front is smooth and sturdy.", rating: 4, userIdx: 42, productIdx: 59 },
  { comment: "Versatile jacket that works with jeans or more formal trousers.", rating: 5, userIdx: 12, productIdx: 59 },
  { comment: "The HUGO logo patch is a nice subtle branding. High-end casual look.", rating: 4, userIdx: 37, productIdx: 59 },

  // 60: Clarks Men's Un Costa Lace Leather Sneakers
  { comment: "Extremely comfortable for daily walking. The leather is premium and very soft.", rating: 5, userIdx: 14, productIdx: 60 },
  { comment: "Minimalist design that works with almost any outfit. Great quality.", rating: 5, userIdx: 32, productIdx: 60 },
  { comment: "The OrthoLite footbed really makes a difference for long days on your feet.", rating: 4, userIdx: 4, productIdx: 60 },
  { comment: "Lightweight and breathable. Exactly what I was looking for in a casual sneaker.", rating: 5, userIdx: 21, productIdx: 60 },
  { comment: "Nice shoes, though they took a day or two to fully break in.", rating: 4, userIdx: 48, productIdx: 60 },

  // 61: Nike Air Zoom Alphafly NEXT% 2
  { comment: "The energy return is insane. I feel like I'm bouncing with every stride.", rating: 5, userIdx: 7, productIdx: 61 },
  { comment: "Best marathon shoes on the planet. Broke my PR the first time I wore them.", rating: 5, userIdx: 29, productIdx: 61 },
  { comment: "The carbon plate gives such a propulsive feel. Truly elite performance.", rating: 5, userIdx: 13, productIdx: 61 },
  { comment: "Very breathable upper, but definitely meant only for racing, not daily jogs.", rating: 4, userIdx: 36, productIdx: 61 },
  { comment: "Expensive, but for serious runners, the speed gain is worth the price.", rating: 5, userIdx: 0, productIdx: 61 },

  // 62: Clarks Men's Chelsea Boots in Premium Suede
  { comment: "Elegant silhouette and the water-resistant suede is a great practical touch.", rating: 5, userIdx: 44, productIdx: 62 },
  { comment: "The tapered look is very stylish. These go perfectly with slim-fit jeans.", rating: 5, userIdx: 18, productIdx: 62 },
  { comment: "Handcrafted quality is evident in the stitching and the heel construction.", rating: 4, userIdx: 2, productIdx: 62 },
  { comment: "Very comfortable for boots. I can wear them all day at the office without issues.", rating: 5, userIdx: 41, productIdx: 62 },
  { comment: "Classic Chelsea style. Fit is true to size and the suede feels premium.", rating: 4, userIdx: 25, productIdx: 62 },

  // 63: Allbirds Men's Tree Runners
  { comment: "Love the eco-friendly materials. They feel light and very breathable.", rating: 5, userIdx: 9, productIdx: 63 },
  { comment: "The eucalyptus fiber is so soft. It's like wearing clouds on your feet.", rating: 5, userIdx: 49, productIdx: 63 },
  { comment: "Machine washable is a game changer for white sneakers. Very convenient.", rating: 4, userIdx: 11, productIdx: 63 },
  { comment: "Simple, sustainable, and stylish. Perfect for summer and warm weather.", rating: 5, userIdx: 33, productIdx: 63 },
  { comment: "Great for walking, though they don't have much arch support for running.", rating: 4, userIdx: 22, productIdx: 63 },

  // 64: Salomon Quest 4 Gore-Tex Hiking Boots
  { comment: "The stability on rocky terrain is unmatched. My ankles feel very secure.", rating: 5, userIdx: 30, productIdx: 64 },
  { comment: "Gore-Tex kept my feet bone dry through multiple stream crossings.", rating: 5, userIdx: 6, productIdx: 64 },
  { comment: "Contagrip sole is incredibly sticky. No slipping on wet surfaces at all.", rating: 5, userIdx: 15, productIdx: 64 },
  { comment: "Heavy-duty boots for serious trekking. The chassis reduces foot fatigue.", rating: 4, userIdx: 47, productIdx: 64 },
  { comment: "Serious protection for multi-day hikes. A bit heavy, but worth it for the support.", rating: 4, userIdx: 3, productIdx: 64 },

  // 65: Converse Chuck Taylor All Star '70 High Top
  { comment: "The '70s version is so much better than the standard one. Thicker canvas!", rating: 5, userIdx: 20, productIdx: 65 },
  { comment: "Iconic look that never goes out of style. The cushioned insole is a big plus.", rating: 5, userIdx: 43, productIdx: 65 },
  { comment: "Sturdier sole and vintage aesthetic. They look great with everything.", rating: 5, userIdx: 12, productIdx: 65 },
  { comment: "Takes me back to the classics. The stitching and materials feel very durable.", rating: 4, userIdx: 38, productIdx: 65 },
  { comment: "Perfect high-top sneaker. Slightly heavier than the regular ones but more stable.", rating: 5, userIdx: 1, productIdx: 65 },

  // 66: Allen Edmonds Men's Park Avenue Oxford Shoes
  { comment: "The definitive dress shoe. The calfskin leather quality is incredible.", rating: 5, userIdx: 35, productIdx: 66 },
  { comment: "Bench-welted construction means these will last for decades if cared for.", rating: 5, userIdx: 8, productIdx: 66 },
  { comment: "Elegant and professional. Essential for every businessman's wardrobe.", rating: 5, userIdx: 27, productIdx: 66 },
  { comment: "Formal and refined. They take a bit to break in, but then they fit like a glove.", rating: 4, userIdx: 40, productIdx: 66 },
  { comment: "Exquisite craftsmanship. You can really see the difference in a handmade shoe.", rating: 5, userIdx: 17, productIdx: 66 },

  // 67: Teva Men's Terra Fi 5 Universal Hiking Sandals
  { comment: "Best sandals for adventure. Rugged grip and they dry very quickly.", rating: 5, userIdx: 5, productIdx: 67 },
  { comment: "The PU midsole provides excellent cushioning for long walks on the trail.", rating: 5, userIdx: 23, productIdx: 67 },
  { comment: "Highly adjustable straps for a secure fit. Great for water activities too.", rating: 4, userIdx: 31, productIdx: 67 },
  { comment: "Very durable rubber outsole. I've used these for years and they still hold up.", rating: 5, userIdx: 46, productIdx: 67 },
  { comment: "Comfortable for all-day wear. Perfect for camping and river crossings.", rating: 4, userIdx: 10, productIdx: 67 },

  // 68: Cole Haan Men's American Classics Penny Loafers
  { comment: "Grand.OS technology makes these the most comfortable loafers I've worn.", rating: 5, userIdx: 39, productIdx: 68 },
  { comment: "Soft, unlined leather gives a very flexible and comfortable fit immediately.", rating: 5, userIdx: 16, productIdx: 68 },
  { comment: "Classic look with modern sneaker-like comfort. Great for the office.", rating: 4, userIdx: 3, productIdx: 68 },
  { comment: "Versatile design that works well with both trousers and jeans.", rating: 5, userIdx: 28, productIdx: 68 },
  { comment: "Lightweight and stylish. I appreciate the high-quality leather finish.", rating: 4, userIdx: 45, productIdx: 68 },

  // 69: Nike Air Force 1 '07 Basketball Shoes
  { comment: "The ultimate streetwear classic. They go with literally everything.", rating: 5, userIdx: 24, productIdx: 69 },
  { comment: "Durable and very supportive. The white leather stays clean with little care.", rating: 5, userIdx: 19, productIdx: 69 },
  { comment: "Iconic style that feels solid on the feet. Great traction on various surfaces.", rating: 4, userIdx: 42, productIdx: 69 },
  { comment: "Timeless design. The pivot-point outsole provides great stability for walking.", rating: 5, userIdx: 12, productIdx: 69 },
  { comment: "A bit heavy for sports, but as a lifestyle shoe, it's unbeatable.", rating: 4, userIdx: 37, productIdx: 69 },

  // 70: Swarovski Matrix Vittore Ring
  { comment: "Absolutely stunning! The rose gold tone is very elegant and the crystals sparkle beautifully.", rating: 5, userIdx: 12, productIdx: 70 },
  { comment: "Perfect for stacking with other rings. The pear cut gives it a unique, expensive look.", rating: 5, userIdx: 34, productIdx: 70 },
  { comment: "Bought this as a gift and she loved it. The half-eternity style is very classy.", rating: 5, userIdx: 7, productIdx: 70 },
  { comment: "Brilliant shine, though I recommend checking the size guide carefully for a perfect fit.", rating: 4, userIdx: 21, productIdx: 70 },
  { comment: "A touch of luxury for everyday wear. Swarovski never fails with their crystal quality.", rating: 4, userIdx: 45, productIdx: 70 },

  // 71: Amberta 925 Sterling Silver Herringbone Necklace
  { comment: "Beautiful Italian craftsmanship. The herringbone pattern sits perfectly flat on the neck.", rating: 5, userIdx: 0, productIdx: 71 },
  { comment: "Very shiny and flexible. The 5mm width is just right—not too thin, not too chunky.", rating: 5, userIdx: 18, productIdx: 71 },
  { comment: "High-quality sterling silver. I've worn it for weeks and it hasn't tarnished at all.", rating: 4, userIdx: 49, productIdx: 71 },
  { comment: "The lobster clasp feels very secure. Great value for a real 925 silver chain.", rating: 5, userIdx: 26, productIdx: 71 },
  { comment: "Stunning piece, but be careful not to kink it as herringbone chains are delicate.", rating: 4, userIdx: 8, productIdx: 71 },

  // 72: Miore 9kt Bicolor Gold Pendant Necklace
  { comment: "A truly exquisite piece. The bicolor gold contrast is subtle and very sophisticated.", rating: 5, userIdx: 4, productIdx: 72 },
  { comment: "The 19 diamonds really catch the light. It's small but very brilliant.", rating: 5, userIdx: 23, productIdx: 72 },
  { comment: "High-end jewelry feel. The anchor chain is delicate but seems quite strong.", rating: 4, userIdx: 39, productIdx: 72 },
  { comment: "Perfect anniversary gift. The handmade quality is evident in the fine details.", rating: 5, userIdx: 15, productIdx: 72 },
  { comment: "Beautiful pendant, though the chain could be a bit thicker for more security.", rating: 4, userIdx: 42, productIdx: 72 },

  // 73: Kate Spade Freshwater Pearl Drop Necklace
  { comment: "The pearl is high quality with a lovely luster. Very feminine and sweet.", rating: 5, userIdx: 11, productIdx: 73 },
  { comment: "Love the rose gold plating. It's a perfect everyday necklace that goes with everything.", rating: 5, userIdx: 29, productIdx: 73 },
  { comment: "Adjustable length is a great feature. Kate Spade packaging is always a plus for gifting.", rating: 4, userIdx: 47, productIdx: 73 },
  { comment: "Simple and elegant. The freshwater pearl looks very natural and chic.", rating: 5, userIdx: 2, productIdx: 73 },
  { comment: "Delicate chain, so handle with care, but the overall look is very classy.", rating: 4, userIdx: 31, productIdx: 73 },

  // 74: Fossil Men's Sterling Silver Signet Ring
  { comment: "Great vintage look with the oxidized finish. Feels heavy and high quality.", rating: 5, userIdx: 33, productIdx: 74 },
  { comment: "Minimalist but bold. It's hard to find good sterling silver rings for men at this price.", rating: 5, userIdx: 6, productIdx: 74 },
  { comment: "Fossil did a great job with the design. It's comfortable for all-day wear.", rating: 4, userIdx: 19, productIdx: 74 },
  { comment: "Solid silver, doesn't turn your finger green. The signet face is the perfect size.", rating: 5, userIdx: 41, productIdx: 74 },
  { comment: "Scratches a bit over time, but it adds to the vintage character of the ring.", rating: 4, userIdx: 10, productIdx: 74 },

  // 75: Pandora Celestial Stars Moonstone Bracelet
  { comment: "The moonstone beads have a beautiful blue flash when the light hits them.", rating: 5, userIdx: 22, productIdx: 75 },
  { comment: "Such a dreamy, celestial vibe. The star charm is a very cute detail.", rating: 5, userIdx: 46, productIdx: 75 },
  { comment: "The toggle clasp is easy to put on by yourself. Very high-quality silver finish.", rating: 4, userIdx: 3, productIdx: 75 },
  { comment: "Natural stones mean every bead is unique. I love the iridescent look.", rating: 5, userIdx: 38, productIdx: 75 },
  { comment: "A bit smaller than I expected, but it looks very delicate and pretty on the wrist.", rating: 4, userIdx: 13, productIdx: 75 },

  // 76: Michael Kors Gold-Tone Hammered Hoop Earrings
  { comment: "The hammered texture makes them look much more expensive and artisanal.", rating: 5, userIdx: 25, productIdx: 76 },
  { comment: "Surprisingly lightweight! I can wear them all day without my ears hurting.", rating: 5, userIdx: 5, productIdx: 76 },
  { comment: "The click-top closure is very secure. I'm not afraid of losing them.", rating: 4, userIdx: 43, productIdx: 76 },
  { comment: "Perfect size for a statement look that isn't too 'over the top'.", rating: 5, userIdx: 17, productIdx: 76 },
  { comment: "Nice gold plating, hasn't faded after several months of frequent use.", rating: 4, userIdx: 32, productIdx: 76 },

  // 77: Puraja Genuine Natural Stone Teardrop Pendant
  { comment: "Beautiful natural crystal. You can really feel the unique energy of the stone.", rating: 5, userIdx: 14, productIdx: 77 },
  { comment: "The hand-polished finish is very smooth. Love the organic mineral patterns.", rating: 5, userIdx: 37, productIdx: 77 },
  { comment: "Great minimalist piece. The adjustable cord is simple but very practical.", rating: 4, userIdx: 1, productIdx: 77 },
  { comment: "A perfect gift for someone who loves natural stones and spiritual jewelry.", rating: 5, userIdx: 48, productIdx: 77 },
  { comment: "The stone is a bit smaller than the photo, but the quality is definitely there.", rating: 4, userIdx: 28, productIdx: 77 },

  // 78: Swarovski Imber Emily Tennis Bracelet
  { comment: "A timeless essential. It's so sparkly it looks like real diamonds.", rating: 5, userIdx: 24, productIdx: 78 },
  { comment: "The fold-over clasp is very secure and easy to use. Fits perfectly.", rating: 5, userIdx: 40, productIdx: 78 },
  { comment: "Elegant and fluid. It drapes beautifully on the wrist for evening events.", rating: 5, userIdx: 9, productIdx: 78 },
  { comment: "The rhodium plating keeps it looking brand new and very shiny.", rating: 4, userIdx: 16, productIdx: 78 },
  { comment: "An absolute classic. Great for both a casual look or a formal night out.", rating: 5, userIdx: 30, productIdx: 78 },

  // 79: Calvin Klein Sculptural Stainless Steel Cuff
  { comment: "Very modern and industrial. The matte finish is a nice change from shiny silver.", rating: 5, userIdx: 44, productIdx: 79 },
  { comment: "High-grade steel, feels very solid and won't bend easily. Minimalist perfection.", rating: 5, userIdx: 20, productIdx: 79 },
  { comment: "Clean lines and architectural design. Fits my style perfectly.", rating: 4, userIdx: 35, productIdx: 79 },
  { comment: "A bold statement piece that is still simple enough for daily wear.", rating: 5, userIdx: 27, productIdx: 79 },
  { comment: "The open cuff design makes it easy to put on. Very comfortable.", rating: 4, userIdx: 1, productIdx: 79 },

  // 80: Junghans Max Bill Automatic
  { comment: "The pinnacle of Bauhaus design. Minimalist, elegant, and perfectly sized at 38mm.", rating: 5, userIdx: 12, productIdx: 80 },
  { comment: "The convex sapphire crystal gives it such a unique look. Truly a piece of art.", rating: 5, userIdx: 34, productIdx: 80 },
  { comment: "Caliber J800.1 is very reliable. The calfskin strap is incredibly soft and premium.", rating: 5, userIdx: 7, productIdx: 80 },
  { comment: "A timeless classic. It looks even better in person than in the photos.", rating: 4, userIdx: 21, productIdx: 80 },
  { comment: "Stunning dress watch, though the power reserve could be a bit longer for the price.", rating: 4, userIdx: 45, productIdx: 80 },

  // 81: Seiko 5 Sports Automatic
  { comment: "Incredible value for an automatic diver. The lume is exceptionally bright at night.", rating: 5, userIdx: 0, productIdx: 81 },
  { comment: "Rock solid build quality. The unidirectional bezel has a very satisfying click.", rating: 5, userIdx: 18, productIdx: 81 },
  { comment: "Great everyday watch. 100m water resistance is perfect for swimming and snorkeling.", rating: 4, userIdx: 49, productIdx: 81 },
  { comment: "The movement is a workhorse. Seiko 5 never let me down in terms of reliability.", rating: 5, userIdx: 26, productIdx: 81 },
  { comment: "Looks much more expensive than it actually is. A must-have for any collector.", rating: 4, userIdx: 8, productIdx: 81 },

  // 82: Citizen Eco-Drive Brycen
  { comment: "Love the Eco-Drive tech. Never having to change a battery is a huge plus.", rating: 5, userIdx: 4, productIdx: 82 },
  { comment: "The military-style nylon strap is very comfortable and rugged. Great field watch vibe.", rating: 5, userIdx: 23, productIdx: 82 },
  { comment: "Accurate chronograph and the tachymeter scale is a nice functional touch.", rating: 4, userIdx: 39, productIdx: 82 },
  { comment: "Solar charging works perfectly even with indoor office lighting.", rating: 5, userIdx: 15, productIdx: 82 },
  { comment: "Solid build, though the case is a bit large for very small wrists.", rating: 4, userIdx: 42, productIdx: 82 },

  // 83: Tissot Chemin Des Tourelles Squelette
  { comment: "Watching the mechanical movement work through the skeleton dial is mesmerizing.", rating: 5, userIdx: 11, productIdx: 83 },
  { comment: "Pure Swiss excellence. The exhibition case back is as beautiful as the front.", rating: 5, userIdx: 29, productIdx: 83 },
  { comment: "High-end luxury feel. The hand-wound movement feels very tactile and traditional.", rating: 5, userIdx: 47, productIdx: 83 },
  { comment: "A real conversation starter. The level of detail in the skeletonization is amazing.", rating: 4, userIdx: 2, productIdx: 83 },
  { comment: "Beautifully finished, but keep in mind you'll need to wind it every day or two.", rating: 4, userIdx: 31, productIdx: 83 },

  // 84: Boderry Voyager Titanium
  { comment: "Titanium makes this watch so light I almost forget I'm wearing it.", rating: 5, userIdx: 33, productIdx: 84 },
  { comment: "Best specs for the price: Titanium, Sapphire, and Automatic movement. Unbeatable.", rating: 5, userIdx: 6, productIdx: 84 },
  { comment: "The 40mm size is perfect. Rugged enough for hiking but looks clean for daily use.", rating: 4, userIdx: 19, productIdx: 84 },
  { comment: "100M water resistance and a day-date complication. The ultimate value field watch.", rating: 5, userIdx: 41, productIdx: 84 },
  { comment: "The nylon strap is high quality, but I might swap it for a leather one later.", rating: 4, userIdx: 10, productIdx: 84 },

  // 85: Fossil Women's Jacqueline
  { comment: "Elegant and slim. The rose gold mesh bracelet is very comfortable and chic.", rating: 5, userIdx: 22, productIdx: 85 },
  { comment: "Minimalist dial makes it very easy to read. Perfect for both work and dinner.", rating: 5, userIdx: 46, productIdx: 85 },
  { comment: "The Roman numerals add a nice sophisticated touch. Lovely gift for my wife.", rating: 4, userIdx: 3, productIdx: 85 },
  { comment: "Adjustable mesh band is great for a custom fit without needing tools.", rating: 5, userIdx: 38, productIdx: 85 },
  { comment: "Beautiful finish, though the rose gold plating needs careful cleaning to stay shiny.", rating: 4, userIdx: 13, productIdx: 85 },

  // 86: Withings Steel HR
  { comment: "Finally, a smartwatch that actually looks like a beautiful analog watch.", rating: 5, userIdx: 25, productIdx: 86 },
  { comment: "25-day battery life is the real deal. I hate charging my watch every night.", rating: 5, userIdx: 5, productIdx: 86 },
  { comment: "The small OLED screen is perfect for subtle notifications without being distracting.", rating: 4, userIdx: 43, productIdx: 86 },
  { comment: "Heart rate tracking seems very accurate compared to my chest strap.", rating: 5, userIdx: 17, productIdx: 86 },
  { comment: "Great hybrid features, though the app sync can sometimes be a bit slow.", rating: 4, userIdx: 32, productIdx: 86 },

  // 87: Casio Vintage A168WG-9
  { comment: "Classic 80s vibes! The gold tone is vibrant and the backlight is iconic.", rating: 5, userIdx: 14, productIdx: 87 },
  { comment: "Small, lightweight, and indestructible. Casio never goes out of style.", rating: 5, userIdx: 37, productIdx: 87 },
  { comment: "The 'Illuminator' light is way better than the old tiny side LEDs. Super clear.", rating: 4, userIdx: 1, productIdx: 87 },
  { comment: "Retro perfection. It’s cheap, reliable, and gets more compliments than my Rolex.", rating: 5, userIdx: 48, productIdx: 87 },
  { comment: "The band can pull arm hairs occasionally, but for this look, it's worth it.", rating: 4, userIdx: 28, productIdx: 87 },

  // 88: Frederique Constant Slimline Moonphase
  { comment: "Exquisite Swiss craftsmanship. The moonphase complication is stunningly executed.", rating: 5, userIdx: 24, productIdx: 88 },
  { comment: "The sunray blue dial is mesmerizing in the sunlight. Truly a luxury timepiece.", rating: 5, userIdx: 40, productIdx: 88 },
  { comment: "Genuine alligator strap feels very high-end. Fits perfectly under a shirt cuff.", rating: 5, userIdx: 9, productIdx: 88 },
  { comment: "Slim profile and very lightweight on the wrist. Exceptional dress watch.", rating: 4, userIdx: 16, productIdx: 88 },
  { comment: "High-end horology for a relatively accessible price compared to other Swiss brands.", rating: 5, userIdx: 30, productIdx: 88 },

  // 89: Swatch Originals Blue Rebel
  { comment: "Bold and fun. The matte blue finish is very modern and eye-catching.", rating: 5, userIdx: 44, productIdx: 89 },
  { comment: "Classic Swatch comfort. The silicone strap is soft and great for sports.", rating: 5, userIdx: 20, productIdx: 89 },
  { comment: "Reliable Swiss quartz movement. The chronograph buttons have a nice feel.", rating: 4, userIdx: 35, productIdx: 89 },
  { comment: "Great for an active lifestyle. Lightweight and water-resistant enough for rain.", rating: 5, userIdx: 27, productIdx: 89 },
  { comment: "The ticking is slightly audible in a quiet room, but otherwise a great casual watch.", rating: 4, userIdx: 1, productIdx: 89 },

  // 90: KPL 21-Inch Large Leather Square Duffel Bag
  { comment: "The leather quality is exceptional for the price. It smells amazing and looks vintage.", rating: 5, userIdx: 14, productIdx: 90 },
  { comment: "Sturdy YKK zippers and plenty of room for a long weekend trip. Very durable.", rating: 5, userIdx: 32, productIdx: 90 },
  { comment: "The canvas lining feels thick and high-quality. Great gym bag as well.", rating: 4, userIdx: 4, productIdx: 90 },
  { comment: "The detachable strap is well-padded. A real eye-catcher at the airport.", rating: 5, userIdx: 21, productIdx: 90 },
  { comment: "Beautiful bag, just keep in mind it's a bit heavy even when empty due to the real leather.", rating: 4, userIdx: 48, productIdx: 90 },

  // 91: Samsonite Guardit 2.0 Laptop Backpack
  { comment: "Perfect for my daily commute. The laptop compartment is very secure and padded.", rating: 5, userIdx: 7, productIdx: 91 },
  { comment: "Minimalist look that fits a professional office environment. The water-resistant fabric works.", rating: 5, userIdx: 29, productIdx: 91 },
  { comment: "The smart sleeve for the suitcase handle is a lifesaver during business travel.", rating: 5, userIdx: 13, productIdx: 91 },
  { comment: "Lots of hidden pockets for cables and chargers. Very well organized.", rating: 4, userIdx: 36, productIdx: 91 },
  { comment: "A solid, no-nonsense backpack. Lightweight and comfortable on the shoulders.", rating: 4, userIdx: 0, productIdx: 91 },

  // 92: Bellroy Tokyo Tote
  { comment: "I love the internal pop pockets! They keep my water bottle upright and out of the way.", rating: 5, userIdx: 44, productIdx: 92 },
  { comment: "Beautiful mix of recycled fabric and leather. It's my go-to bag for work and grocery runs.", rating: 5, userIdx: 18, productIdx: 92 },
  { comment: "Versatile design, easy to switch from tote to shoulder bag. Very chic.", rating: 4, userIdx: 2, productIdx: 92 },
  { comment: "The tech sleeve fits my MacBook perfectly. High-quality construction throughout.", rating: 5, userIdx: 41, productIdx: 92 },
  { comment: "Stylish and functional, though it's a bit smaller than I expected for a 15L bag.", rating: 4, userIdx: 25, productIdx: 92 },

  // 93: Michael Kors Harrison Briefcase
  { comment: "Saffiano leather is the best for work bags—it's truly scratch-resistant and looks brand new.", rating: 5, userIdx: 9, productIdx: 93 },
  { comment: "Very slim and professional. Fits my 14-inch laptop and all my essential documents.", rating: 5, userIdx: 49, productIdx: 93 },
  { comment: "The silver-tone hardware gives it a very modern and clean aesthetic.", rating: 5, userIdx: 11, productIdx: 93 },
  { comment: "Structured design that doesn't collapse when empty. Excellent quality from MK.", rating: 4, userIdx: 33, productIdx: 93 },
  { comment: "Elegant briefcase, but the slim profile means you can't overstuff it with bulkier items.", rating: 4, userIdx: 22, productIdx: 93 },

  // 94: Chrome Industries Citizen Messenger Bag
  { comment: "Bomb-proof construction. The seatbelt buckle is iconic and so satisfying to use.", rating: 5, userIdx: 30, productIdx: 94 },
  { comment: "Completely waterproof. I've ridden through heavy rain and my gear stayed bone dry.", rating: 5, userIdx: 6, productIdx: 94 },
  { comment: "The TPE liner is great for separating my sweaty gym clothes from the rest of my stuff.", rating: 5, userIdx: 15, productIdx: 94 },
  { comment: "The strap is very comfortable for cycling and the reflective details add safety.", rating: 4, userIdx: 47, productIdx: 94 },
  { comment: "Massive 24L capacity. It's a large bag, so make sure you're okay with the size.", rating: 4, userIdx: 3, productIdx: 94 },

  // 95: Fossil Women's Heritage Crossbody Bag
  { comment: "The suede is incredibly soft. I love the vintage, bohemian look of this bag.", rating: 5, userIdx: 20, productIdx: 95 },
  { comment: "Perfect size for a day out. The magnetic closure is strong and the brass hardware is lovely.", rating: 5, userIdx: 43, productIdx: 95 },
  { comment: "Great quality suede and the adjustable strap makes it very comfortable to wear.", rating: 4, userIdx: 12, productIdx: 95 },
  { comment: "Beautifully unlined for that natural feel. It gets better with age.", rating: 5, userIdx: 38, productIdx: 95 },
  { comment: "Love the bag, but be careful with dark denim as it can stain the light suede.", rating: 4, userIdx: 1, productIdx: 95 },

  // 96: Samsonite Omni PC Hardside Luggage
  { comment: "Survived three international flights with barely a scratch. The micro-diamond shell is tough.", rating: 5, userIdx: 35, productIdx: 96 },
  { comment: "The spinner wheels are incredibly smooth, even when the bag is fully packed.", rating: 5, userIdx: 8, productIdx: 96 },
  { comment: "TSA lock is easy to set up. The interior divider makes organization so much simpler.", rating: 4, userIdx: 27, productIdx: 96 },
  { comment: "Lightweight for a hardside case. The expansion feature is great for souvenirs.", rating: 5, userIdx: 40, productIdx: 96 },
  { comment: "Solid luggage for the price. The handle feels a little bit loose, but it works fine.", rating: 4, userIdx: 17, productIdx: 96 },

  // 97: Patagonia Black Hole Duffel Bag 40L
  { comment: "Indestructible. I've thrown this in the back of trucks and it still looks new.", rating: 5, userIdx: 5, productIdx: 97 },
  { comment: "The recycled fabric is thick and very weather-resistant. Perfect for outdoor trips.", rating: 5, userIdx: 23, productIdx: 97 },
  { comment: "The backpack straps are a game changer for carrying heavy loads through airports.", rating: 5, userIdx: 31, productIdx: 97 },
  { comment: "Reinforced handles are very strong. It fits perfectly in overhead compartments.", rating: 4, userIdx: 46, productIdx: 97 },
  { comment: "Great bag, though the ripstop material is quite shiny in person.", rating: 4, userIdx: 10, productIdx: 97 },

  // 98: Eastpak Springer Bum Bag
  { comment: "The classic bum bag. Fits my phone, wallet, and keys with no bulk.", rating: 5, userIdx: 39, productIdx: 98 },
  { comment: "Essential for festivals or traveling. The back pocket is perfect for my passport.", rating: 5, userIdx: 16, productIdx: 98 },
  { comment: "Simple, durable, and adjustable. Eastpak quality is always reliable.", rating: 5, userIdx: 3, productIdx: 98 },
  { comment: "Great for quick errands when I don't want to carry a full backpack.", rating: 4, userIdx: 28, productIdx: 98 },
  { comment: "A bit basic, but it's exactly what I needed for my summer holiday.", rating: 4, userIdx: 45, productIdx: 98 },

  // 99: Kate Spade New York Velvet Evening Clutch
  { comment: "Stunning emerald color. The velvet feels very luxurious and high-end.", rating: 5, userIdx: 24, productIdx: 99 },
  { comment: "Perfect for weddings! The card slots inside mean I don't need a wallet.", rating: 5, userIdx: 19, productIdx: 99 },
  { comment: "The gold-tone chain is a nice weight and detachable for a cleaner look.", rating: 5, userIdx: 42, productIdx: 99 },
  { comment: "Got so many compliments at a formal gala. It's the perfect evening accessory.", rating: 5, userIdx: 12, productIdx: 99 },
  { comment: "Beautiful clutch, though it is quite small—just enough for a phone and lipstick.", rating: 4, userIdx: 37, productIdx: 99 },

  // 100: HOMCOM Relax Armchair with Footrest
  { comment: "Super comfy for reading. The ottoman is the perfect height for my legs.", rating: 5, userIdx: 12, productIdx: 100 },
  { comment: "Love the Scandi look. The grey fabric is breathable and feels high quality.", rating: 5, userIdx: 34, productIdx: 100 },
  { comment: "Sturdy rubberwood legs and very easy to assemble. Fits perfectly in my bedroom.", rating: 4, userIdx: 7, productIdx: 100 },
  { comment: "Thick padding makes it great for long movie nights. Excellent value for money.", rating: 5, userIdx: 21, productIdx: 100 },
  { comment: "Great chair, though the seat is a bit firm at first. It softens up after a week.", rating: 4, userIdx: 45, productIdx: 100 },

  // 101: IKEA DOCKSTA Dining Table
  { comment: "Classic minimalist design. It makes my small dining area look much bigger.", rating: 5, userIdx: 0, productIdx: 101 },
  { comment: "The pedestal base is very stable. Perfect for a morning coffee spot.", rating: 5, userIdx: 18, productIdx: 101 },
  { comment: "Very easy to clean the white surface. Typical IKEA simplicity and style.", rating: 4, userIdx: 49, productIdx: 101 },
  { comment: "Solid table for the price. Assembly was straightforward and quick.", rating: 5, userIdx: 26, productIdx: 101 },
  { comment: "Beautiful circular shape, but be careful with scratches on the white finish.", rating: 4, userIdx: 8, productIdx: 101 },

  // 102: Steelcase Gesture Office Chair
  { comment: "My back pain disappeared after a week. Best ergonomic investment ever.", rating: 5, userIdx: 4, productIdx: 102 },
  { comment: "The 360-degree arms are incredible for switching between typing and using a tablet.", rating: 5, userIdx: 23, productIdx: 102 },
  { comment: "Highly adjustable in every way possible. Built like a tank.", rating: 5, userIdx: 39, productIdx: 102 },
  { comment: "Expensive, but the quality and support for various postures is unmatched.", rating: 5, userIdx: 15, productIdx: 102 },
  { comment: "Professional grade. It’s heavy and premium. Truly supports your whole spine.", rating: 4, userIdx: 42, productIdx: 102 },

  // 103: Nathan James Beacon Wall Mounted Bookcase
  { comment: "The floating look is stunning. It saved so much floor space in my studio.", rating: 5, userIdx: 11, productIdx: 103 },
  { comment: "Solid wood with a beautiful brushed finish. Very easy to mount to the wall.", rating: 5, userIdx: 29, productIdx: 103 },
  { comment: "Rustic bohemian vibes at its best. It holds quite a lot of books securely.", rating: 4, userIdx: 47, productIdx: 103 },
  { comment: "Looks much more expensive than it is. The assembly instructions were very clear.", rating: 5, userIdx: 2, productIdx: 103 },
  { comment: "Great shelf, just make sure you use a stud finder for a secure installation.", rating: 4, userIdx: 31, productIdx: 103 },

  // 104: Zinus Shalini Upholstered Bed Frame
  { comment: "The diamond stitching looks very elegant. The wood slats are very supportive.", rating: 5, userIdx: 33, productIdx: 104 },
  { comment: "Quiet and sturdy. No squeaking at all even with a heavy hybrid mattress.", rating: 5, userIdx: 6, productIdx: 104 },
  { comment: "The tufted headboard is soft and perfect for leaning against while reading.", rating: 4, userIdx: 19, productIdx: 104 },
  { comment: "Incredibly easy to put together. All tools were included in the box.", rating: 5, userIdx: 41, productIdx: 104 },
  { comment: "Excellent bed frame for the price. The upholstery feels durable and soft.", rating: 4, userIdx: 10, productIdx: 104 },

  // 105: Christopher Knight Home Side Table
  { comment: "The slate tile mosaic is beautiful. Each piece feels unique and handcrafted.", rating: 5, userIdx: 22, productIdx: 105 },
  { comment: "Sturdy iron frame. It has survived several storms on my balcony with no rust.", rating: 5, userIdx: 46, productIdx: 105 },
  { comment: "Perfect small size for a garden seating area. Very charming accent piece.", rating: 4, userIdx: 3, productIdx: 105 },
  { comment: "Heavy enough not to blow away in the wind. The colors are very natural.", rating: 5, userIdx: 38, productIdx: 105 },
  { comment: "Lovely table, though the surface is a bit uneven due to the natural slate.", rating: 4, userIdx: 13, productIdx: 105 },

  // 106: JUMMICO Electric Standing Desk
  { comment: "Smooth and quiet motor. The memory presets are a lifesaver for my back.", rating: 5, userIdx: 25, productIdx: 106 },
  { comment: "The integrated USB charger is so convenient for my phone and earbuds.", rating: 5, userIdx: 5, productIdx: 106 },
  { comment: "Perfect size for a home office. The brown tabletop has a nice wood-like texture.", rating: 4, userIdx: 43, productIdx: 106 },
  { comment: "Very stable even at the highest setting. No wobbling while typing.", rating: 5, userIdx: 17, productIdx: 106 },
  { comment: "Assembly took about 45 minutes. Great ergonomic upgrade for a fair price.", rating: 4, userIdx: 32, productIdx: 106 },

  // 107: Kartell Masters Stool
  { comment: "Iconic design that always gets compliments. The soft-touch finish feels great.", rating: 5, userIdx: 14, productIdx: 107 },
  { comment: "Surprisingly comfortable for a plastic stool. The back support is excellent.", rating: 5, userIdx: 37, productIdx: 107 },
  { comment: "Lightweight but very durable. The recycled materials are a huge plus for me.", rating: 4, userIdx: 1, productIdx: 107 },
  { comment: "The 65cm height is perfect for my kitchen island. Very easy to wipe clean.", rating: 5, userIdx: 48, productIdx: 107 },
  { comment: "Stunning silhouette. It’s a piece of art that you can actually sit on.", rating: 4, userIdx: 28, productIdx: 107 },

  // 108: Walker Edison Mid-Century TV Stand
  { comment: "The tapered legs and miter joints give it a perfect 1950s aesthetic.", rating: 5, userIdx: 24, productIdx: 108 },
  { comment: "Cable management cutouts made my living room look so much cleaner.", rating: 5, userIdx: 40, productIdx: 108 },
  { comment: "Fits my 65-inch TV perfectly. The wood finish looks rich and authentic.", rating: 4, userIdx: 9, productIdx: 108 },
  { comment: "Solid and sturdy construction. It feels like it will last a very long time.", rating: 5, userIdx: 16, productIdx: 108 },
  { comment: "Took some time to assemble but the final look is definitely worth the effort.", rating: 4, userIdx: 30, productIdx: 108 },

  // 109: Ashley Centiar Bar Stools (Set of 2)
  { comment: "The bucket seats are very comfortable and supportive. Great industrial vibe.", rating: 5, userIdx: 44, productIdx: 109 },
  { comment: "Faux leather is thick and easy to clean. Perfect for a busy kitchen.", rating: 5, userIdx: 20, productIdx: 109 },
  { comment: "Very sturdy steel frame with a handy footrest. They feel very secure.", rating: 4, userIdx: 35, productIdx: 109 },
  { comment: "Quick assembly and they look amazing at our counter. Great value for a set of two.", rating: 5, userIdx: 27, productIdx: 109 },
  { comment: "Good height and style. The seats are a bit narrow if you prefer more space.", rating: 4, userIdx: 1, productIdx: 109 },

  // 110: KitchenAid Artisan Series Stand Mixer
  { comment: "A kitchen icon for a reason. Built like a tank and mixes everything perfectly.", rating: 5, userIdx: 24, productIdx: 110 },
  { comment: "The Imperial Red is stunning. It’s a piece of art on my countertop.", rating: 5, userIdx: 10, productIdx: 110 },
  { comment: "Heavy-duty and quiet. The 10 speeds give you total control over any dough.", rating: 5, userIdx: 43, productIdx: 110 },
  { comment: "Pricey, but it lasts a lifetime. The included accessories are very professional.", rating: 4, userIdx: 5, productIdx: 110 },
  { comment: "Excellent performance, though it's quite heavy to move around.", rating: 4, userIdx: 31, productIdx: 110 },

  // 111: Caraway Non-Stick Ceramic Cookware Set
  { comment: "Absolutely love the non-stick surface. Eggs slide right off with no oil!", rating: 5, userIdx: 12, productIdx: 111 },
  { comment: "Best looking pans I've ever owned. The cream color and gold handles are gorgeous.", rating: 5, userIdx: 37, productIdx: 111 },
  { comment: "Safe and PFAS-free. It’s great to cook without worrying about chemicals.", rating: 4, userIdx: 1, productIdx: 111 },
  { comment: "They heat up very evenly. The storage organizers included are a game changer.", rating: 5, userIdx: 48, productIdx: 111 },
  { comment: "Great pans, just make sure to hand wash them to preserve the ceramic coating.", rating: 4, userIdx: 28, productIdx: 111 },

  // 112: Ninja Foodi 2-Basket Air Fryer
  { comment: "The dual zone feature is life-changing. Chicken and fries ready at the same time!", rating: 5, userIdx: 8, productIdx: 112 },
  { comment: "Huge 8-quart capacity. I can finally cook for the whole family in one go.", rating: 5, userIdx: 25, productIdx: 112 },
  { comment: "Super easy to clean and the interface is very intuitive.", rating: 4, userIdx: 49, productIdx: 112 },
  { comment: "Makes everything so crispy with very little oil. Use it every single day.", rating: 5, userIdx: 14, productIdx: 112 },
  { comment: "Takes up some counter space, but it replaces so many other appliances.", rating: 4, userIdx: 33, productIdx: 112 },

  // 113: NutriBullet Ultra Personal Blender
  { comment: "The 1200W motor is a beast. It crushes ice and frozen fruit in seconds.", rating: 5, userIdx: 2, productIdx: 113 },
  { comment: "Perfect for morning smoothies. The travel cups are very convenient for work.", rating: 5, userIdx: 19, productIdx: 113 },
  { comment: "Much quieter than my old blender but twice as powerful.", rating: 4, userIdx: 44, productIdx: 113 },
  { comment: "Very easy to rinse and clean. The blades stay sharp even with daily use.", rating: 5, userIdx: 7, productIdx: 113 },
  { comment: "Great personal blender, though the cups are a bit tall for my dishwasher.", rating: 4, userIdx: 30, productIdx: 113 },

  // 114: Wüsthof Classic 7-Piece Knife Block Set
  { comment: "Unmatched German quality. These knives are razor sharp out of the box.", rating: 5, userIdx: 35, productIdx: 114 },
  { comment: "Balanced and comfortable in the hand. Makes prep work feel effortless.", rating: 5, userIdx: 11, productIdx: 114 },
  { comment: "Professional grade high-carbon steel. They hold an edge for a very long time.", rating: 5, userIdx: 40, productIdx: 114 },
  { comment: "The slim block design saves so much space on my small counter.", rating: 4, userIdx: 22, productIdx: 114 },
  { comment: "A serious investment for any home cook, but the durability is worth it.", rating: 5, userIdx: 9, productIdx: 114 },

  // 115: De'Longhi Magnifica EVO Espresso Machine
  { comment: "Coffee shop quality at home. The espresso is rich with perfect crema.", rating: 5, userIdx: 21, productIdx: 115 },
  { comment: "One-touch recipes are so easy to use in the morning when I'm half asleep.", rating: 5, userIdx: 46, productIdx: 115 },
  { comment: "The integrated frother makes the best cappuccinos. Very easy to clean.", rating: 4, userIdx: 3, productIdx: 115 },
  { comment: "Sleek machine that looks great in the kitchen. Grinder is relatively quiet.", rating: 5, userIdx: 38, productIdx: 115 },
  { comment: "Takes a few tries to find your perfect setting, but then it's flawless.", rating: 4, userIdx: 13, productIdx: 115 },

  // 116: Crock-Pot MyTime Slow Cooker
  { comment: "Love the MyTime feature. I can set it for exactly when I want to eat.", rating: 5, userIdx: 47, productIdx: 116 },
  { comment: "6-quart size is perfect for meal prepping for the week.", rating: 5, userIdx: 0, productIdx: 116 },
  { comment: "Automatically switching to warm is a lifesaver when I'm stuck at work.", rating: 4, userIdx: 26, productIdx: 116 },
  { comment: "Consistent heat and very easy to clean. The digital display is bright.", rating: 4, userIdx: 39, productIdx: 116 },
  { comment: "Simple, reliable, and does exactly what a slow cooker should do.", rating: 5, userIdx: 17, productIdx: 116 },

  // 117: Fellow Stagg EKG Electric Kettle
  { comment: "The precision of the pour is incredible. My pour-over coffee has never been better.", rating: 5, userIdx: 36, productIdx: 117 },
  { comment: "Beautiful minimalist design. The matte black finish is very premium.", rating: 5, userIdx: 15, productIdx: 117 },
  { comment: "Variable temperature control is essential for delicate green teas.", rating: 5, userIdx: 42, productIdx: 117 },
  { comment: "Built-in brew stopwatch is a very thoughtful feature for coffee geeks.", rating: 4, userIdx: 6, productIdx: 117 },
  { comment: "Heats up fast, though it is quite expensive for just a kettle.", rating: 4, userIdx: 23, productIdx: 117 },

  // 118: Click and Grow Smart Garden 3
  { comment: "Fresh basil all year round! It’s practically zero maintenance.", rating: 5, userIdx: 27, productIdx: 118 },
  { comment: "The LED lights are bright and the plants grow much faster than in soil.", rating: 5, userIdx: 41, productIdx: 118 },
  { comment: "Perfect for someone like me who forgets to water plants. It's truly smart.", rating: 4, userIdx: 20, productIdx: 118 },
  { comment: "Looks lovely on the countertop. Great way to introduce kids to gardening.", rating: 5, userIdx: 34, productIdx: 118 },
  { comment: "The refill pods can be a bit pricey, but the convenience is worth it.", rating: 4, userIdx: 45, productIdx: 118 },

  // 119: Rubbermaid Brilliance Food Storage Containers
  { comment: "Finally, a container that is actually 100% leak-proof. Truly impressive.", rating: 5, userIdx: 18, productIdx: 119 },
  { comment: "Crystal clear plastic that doesn't stain even with tomato sauce.", rating: 5, userIdx: 46, productIdx: 119 },
  { comment: "The built-in vents are genius for microwaving without splatters.", rating: 5, userIdx: 32, productIdx: 119 },
  { comment: "Stackable design saved so much space in my pantry. Best containers yet.", rating: 5, userIdx: 3, productIdx: 119 },
  { comment: "They look like glass but are much lighter and more durable.", rating: 4, userIdx: 16, productIdx: 119 },

  // 120: Philips Hue Go White and Color Ambiance
  { comment: "Love the portability! I take it to the balcony for evening drinks, the battery lasts well.", rating: 5, userIdx: 14, productIdx: 120 },
  { comment: "Dynamic lighting effects are amazing. It creates a perfect cozy atmosphere in my bedroom.", rating: 5, userIdx: 32, productIdx: 120 },
  { comment: "Very versatile light. Bluetooth control is snappy even without the bridge.", rating: 4, userIdx: 4, productIdx: 120 },
  { comment: "Beautiful colors, but the power cord is a bit short for permanent desk placement.", rating: 4, userIdx: 21, productIdx: 120 },
  { comment: "Excellent build quality and the app is very intuitive for color picking.", rating: 5, userIdx: 48, productIdx: 120 },

  // 121: Artemide Tolomeo Micro Table Lamp
  { comment: "A design icon. The aluminum finish is flawless and the movement is incredibly smooth.", rating: 5, userIdx: 7, productIdx: 121 },
  { comment: "Perfect desk lamp. The spring system is a masterpiece of engineering.", rating: 5, userIdx: 29, productIdx: 121 },
  { comment: "Small version but delivers a lot of light. Fits perfectly on my minimalist desk.", rating: 5, userIdx: 13, productIdx: 121 },
  { comment: "Elegant and functional. It’s expensive, but you are buying a piece of history.", rating: 4, userIdx: 36, productIdx: 121 },
  { comment: "Sturdy and adjustable to any position. Best lighting investment I've made.", rating: 5, userIdx: 0, productIdx: 121 },

  // 122: Nanoleaf Shapes Triangles Smarter Kit
  { comment: "The music sync feature turned my room into a literal nightclub. So much fun!", rating: 5, userIdx: 44, productIdx: 122 },
  { comment: "Installation was easy with the included tape. The touch control is very responsive.", rating: 5, userIdx: 18, productIdx: 122 },
  { comment: "True wall art. The millions of colors allow for infinite customization.", rating: 4, userIdx: 2, productIdx: 122 },
  { comment: "Great for gaming setups. It integrates perfectly with my other smart home devices.", rating: 5, userIdx: 41, productIdx: 122 },
  { comment: "Pricey for plastic panels, but the lighting effect is unlike anything else.", rating: 4, userIdx: 25, productIdx: 122 },

  // 123: Govee RGBIC Floor Lamp
  { comment: "The RGBIC tech is great—having multiple colors on one strip looks fantastic.", rating: 5, userIdx: 9, productIdx: 123 },
  { comment: "Sleek and minimalist. It fits perfectly in the corner without taking up space.", rating: 5, userIdx: 49, productIdx: 123 },
  { comment: "App control is very thorough with tons of preset scenes. Voice control works flawlessly.", rating: 4, userIdx: 11, productIdx: 123 },
  { comment: "Very bright for its size. The music sync mode is a nice bonus for parties.", rating: 5, userIdx: 33, productIdx: 123 },
  { comment: "Excellent value for money compared to other high-end corner lamps.", rating: 4, userIdx: 22, productIdx: 123 },

  // 124: Vecys Modern Nordic Funnel Pendant Lamp
  { comment: "The imitation cement finish looks very realistic and high-end. Love the industrial vibe.", rating: 5, userIdx: 30, productIdx: 124 },
  { comment: "Perfect for over my kitchen island. The design is simple but very effective.", rating: 5, userIdx: 6, productIdx: 124 },
  { comment: "Good quality for the price. The resin material feels solid and durable.", rating: 4, userIdx: 15, productIdx: 124 },
  { comment: "Modern Nordic aesthetic at its best. It was easy to install as well.", rating: 5, userIdx: 47, productIdx: 124 },
  { comment: "Nice lamp, though I wish the cord was slightly longer for higher ceilings.", rating: 4, userIdx: 3, productIdx: 124 },

  // 125: BenQ ScreenBar Monitor Light
  { comment: "Game changer for late night work. No screen glare and saves so much desk space.", rating: 5, userIdx: 20, productIdx: 125 },
  { comment: "The auto-dimming sensor is very accurate. My eyes feel much less tired now.", rating: 5, userIdx: 43, productIdx: 125 },
  { comment: "Fits perfectly on my curved monitor. The light quality is excellent.", rating: 4, userIdx: 12, productIdx: 125 },
  { comment: "Very easy to set up. It’s the best accessory for any home office setup.", rating: 5, userIdx: 38, productIdx: 125 },
  { comment: "A bit expensive for a monitor light, but the build quality is top-tier.", rating: 4, userIdx: 1, productIdx: 125 },

  // 126: Jonathan Y Pagoda Lantern Pendant
  { comment: "The antique gold finish is gorgeous. It looks like a high-end designer piece.", rating: 5, userIdx: 35, productIdx: 126 },
  { comment: "Perfect for my foyer. It creates a beautiful light pattern on the walls.", rating: 4, userIdx: 8, productIdx: 126 },
  { comment: "Classic farmhouse style with a modern twist. The dimmable LED is a great inclusion.", rating: 5, userIdx: 27, productIdx: 126 },
  { comment: "Well-made and sturdy metal construction. Assembly was straightforward.", rating: 4, userIdx: 40, productIdx: 126 },
  { comment: "Stunning lantern, though it is quite large, so measure your space carefully.", rating: 5, userIdx: 17, productIdx: 126 },

  // 127: Lutron Caseta Smart Home Dimmer Starter Kit
  { comment: "The most reliable smart switches I've ever used. Never loses connection.", rating: 5, userIdx: 5, productIdx: 127 },
  { comment: "Integration with HomeKit was instant. Love being able to dim lights from my phone.", rating: 5, userIdx: 23, productIdx: 127 },
  { comment: "A bit more expensive than others, but you don't need a neutral wire, which is a lifesaver.", rating: 5, userIdx: 31, productIdx: 127 },
  { comment: "The bridge is solid and the Pico remotes are very convenient.", rating: 4, userIdx: 46, productIdx: 127 },
  { comment: "Professional grade lighting control. Best smart home upgrade I've made.", rating: 4, userIdx: 10, productIdx: 127 },

  // 128: Brightech Ambience Pro Solar Outdoor Lights
  { comment: "I'm impressed by how long they stay on after a sunny day. Great solar panel.", rating: 5, userIdx: 39, productIdx: 128 },
  { comment: "The warm glow is perfect for patio dinners. They look like real glass Edison bulbs.", rating: 5, userIdx: 16, productIdx: 128 },
  { comment: "Completely waterproof. They’ve survived several heavy storms with no issues.", rating: 5, userIdx: 3, productIdx: 128 },
  { comment: "Easy to hang up and zero electricity cost. Best way to light up the garden.", rating: 4, userIdx: 28, productIdx: 128 },
  { comment: "Lovely ambiance, though they are purely decorative and not for tasks.", rating: 4, userIdx: 45, productIdx: 128 },

  // 129: Kartell Bourgie Table Lamp
  { comment: "Absolute masterpiece. The crystal finish creates incredible reflections in the room.", rating: 5, userIdx: 24, productIdx: 129 },
  { comment: "The height adjustment is a genius feature. Fits any space perfectly.", rating: 5, userIdx: 19, productIdx: 129 },
  { comment: "A perfect blend of Baroque style and modern materials. Truly a statement piece.", rating: 4, userIdx: 42, productIdx: 129 },
  { comment: "The dimming function allows for both bright light and a soft atmospheric glow.", rating: 5, userIdx: 12, productIdx: 129 },
  { comment: "Beautiful lamp, but keep in mind it's made of high-quality plastic, not glass.", rating: 4, userIdx: 37, productIdx: 129 },

  // 130: Brooklinen Classic Core Sheet Set
  { comment: "These sheets are incredibly crisp and cool. Perfect for hot sleepers like me.", rating: 5, userIdx: 12, productIdx: 130 },
  { comment: "Luxury hotel feel at home. The 100% long-staple cotton makes a huge difference.", rating: 5, userIdx: 34, productIdx: 130 },
  { comment: "The percale weave is exactly what I wanted. Stays fresh and breathable all night.", rating: 5, userIdx: 7, productIdx: 130 },
  { comment: "High quality sheets, though they do wrinkle a bit since they are pure cotton.", rating: 4, userIdx: 21, productIdx: 130 },
  { comment: "Very durable and they get softer with every single wash. Highly recommended.", rating: 4, userIdx: 45, productIdx: 130 },

  // 131: TEMPUR Original Low Neck Pillow
  { comment: "Finally found a pillow that actually supports my neck. No more morning stiffness.", rating: 5, userIdx: 0, productIdx: 131 },
  { comment: "The contoured shape is perfect for side sleeping. It feels very firm and supportive.", rating: 5, userIdx: 18, productIdx: 131 },
  { comment: "Great ergonomic design. It took a few nights to get used to, but now I love it.", rating: 4, userIdx: 49, productIdx: 131 },
  { comment: "Authentic Tempur quality. Aligns my head and shoulders perfectly for deep sleep.", rating: 5, userIdx: 26, productIdx: 131 },
  { comment: "Solid pillow, though it is quite firm. Make sure you prefer a structured feel.", rating: 4, userIdx: 8, productIdx: 131 },

  // 132: Eloneo Weighted Blanket
  { comment: "I fall asleep so much faster now. The deep touch pressure is incredibly relaxing.", rating: 5, userIdx: 4, productIdx: 132 },
  { comment: "High-quality cotton fabric. The 11kg weight is well-distributed and not overwhelming.", rating: 5, userIdx: 23, productIdx: 132 },
  { comment: "Helped immensely with my anxiety at night. It feels like a constant gentle hug.", rating: 5, userIdx: 39, productIdx: 132 },
  { comment: "TÜV certified quality you can feel. It doesn't get too hot during the night.", rating: 4, userIdx: 15, productIdx: 132 },
  { comment: "Excellent anti-stress blanket, though it is quite heavy to move around the house.", rating: 4, userIdx: 42, productIdx: 132 },

  // 133: Utopia Bedding Double Duvet Cover
  { comment: "Surprising quality for the price. The microfibre is very soft and comfortable.", rating: 5, userIdx: 11, productIdx: 133 },
  { comment: "The hidden zipper is much better than buttons. The corner ties are very useful.", rating: 5, userIdx: 29, productIdx: 133 },
  { comment: "Stays white and clean after many washes. Very easy to maintain and dries fast.", rating: 4, userIdx: 47, productIdx: 133 },
  { comment: "Simple, elegant, and functional. Fits my 240x220 duvet perfectly.", rating: 5, userIdx: 2, productIdx: 133 },
  { comment: "Good basic set. It's a bit thin, but very breathable and soft on the skin.", rating: 4, userIdx: 31, productIdx: 133 },

  // 134: Uttu Sandwich Pillow
  { comment: "The adjustable height is a genius idea. I removed the middle layer for a perfect fit.", rating: 5, userIdx: 33, productIdx: 134 },
  { comment: "Memory foam that actually stays cool. The bamboo cover is very soft and breathable.", rating: 5, userIdx: 6, productIdx: 134 },
  { comment: "Great for side sleepers. My spine feels much better aligned during the night.", rating: 4, userIdx: 19, productIdx: 134 },
  { comment: "No chemical smell at all. The 3-layer design makes it very versatile for anyone.", rating: 5, userIdx: 41, productIdx: 134 },
  { comment: "Very supportive pillow, though it's a little smaller than a standard sized one.", rating: 4, userIdx: 10, productIdx: 134 },

  // 135: Enetix Silk Satin Pillowcase (Pack of 2)
  { comment: "My hair is much less frizzy in the morning. These are great for skin too!", rating: 5, userIdx: 22, productIdx: 135 },
  { comment: "Lovely light blue color. The satin feels very premium and the zipper is well-hidden.", rating: 5, userIdx: 46, productIdx: 135 },
  { comment: "Great value for a 2-pack. They come in a very nice gift box as well.", rating: 4, userIdx: 3, productIdx: 135 },
  { comment: "Super soft and cooling. I noticed fewer breakouts since I started using these.", rating: 5, userIdx: 38, productIdx: 135 },
  { comment: "Excellent quality, just remember to wash them on a delicate cycle.", rating: 4, userIdx: 13, productIdx: 135 },

  // 136: Amazon Basics Waterproof Mattress Protector
  { comment: "Actually waterproof! Saved my mattress from a coffee spill on day one.", rating: 5, userIdx: 25, productIdx: 136 },
  { comment: "Doesn't make any crinkly noise like other protectors. Very quiet and breathable.", rating: 5, userIdx: 5, productIdx: 136 },
  { comment: "The 45cm deep pocket is great, it stays secure on my thick mattress.", rating: 4, userIdx: 43, productIdx: 136 },
  { comment: "Simple to wash and dry. Gives me peace of mind against allergens and spills.", rating: 5, userIdx: 17, productIdx: 136 },
  { comment: "Great value, though it's a bit tight to get on the first time.", rating: 4, userIdx: 32, productIdx: 136 },

  // 137: Bedsure Fleece Blanket Throw
  { comment: "The softest blanket I've ever owned. The sage green color is beautiful.", rating: 5, userIdx: 14, productIdx: 137 },
  { comment: "Very lightweight but surprisingly warm. Perfect for cuddling on the sofa.", rating: 5, userIdx: 37, productIdx: 137 },
  { comment: "The microfiber flannel is very high quality and doesn't shed at all.", rating: 4, userIdx: 1, productIdx: 137 },
  { comment: "Excellent throw for the price. Stays soft even after multiple machine washes.", rating: 5, userIdx: 48, productIdx: 137 },
  { comment: "Lovely and cozy, though it's more for decoration or light warmth than winter cold.", rating: 4, userIdx: 28, productIdx: 137 },

  // 138: Chilling Home U Shaped Pregnancy Pillow
  { comment: "A lifesaver during my third trimester. Supports my back and bump perfectly.", rating: 5, userIdx: 24, productIdx: 138 },
  { comment: "The cooling jersey cover is a must-have. I don't overheat anymore.", rating: 5, userIdx: 40, productIdx: 138 },
  { comment: "Very comfortable for side sleepers even if you aren't pregnant. Huge size!", rating: 4, userIdx: 9, productIdx: 138 },
  { comment: "Premium filling that doesn't go flat. Great support for hips and knees.", rating: 5, userIdx: 16, productIdx: 138 },
  { comment: "Amazing support, just be prepared as it takes up half of the bed.", rating: 4, userIdx: 30, productIdx: 138 },

  // 139: Silentnight Comfort Control Electric Blanket
  { comment: "Heats up very quickly. The 3 settings are perfect for different cold levels.", rating: 5, userIdx: 44, productIdx: 139 },
  { comment: "Safe and secure on the mattress. No more cold sheets in the winter!", rating: 5, userIdx: 20, productIdx: 139 },
  { comment: "Excellent value for money. The overheat protection gives me peace of mind.", rating: 4, userIdx: 35, productIdx: 139 },
  { comment: "Very easy to operate. The elasticated straps keep it perfectly in place.", rating: 5, userIdx: 27, productIdx: 139 },
  { comment: "Great blanket, though I wish the cord was a little bit longer.", rating: 4, userIdx: 1, productIdx: 139 },

  // 140: iRobot Roomba j7+ Self-Emptying Robot Vacuum
  { comment: "PrecisionVision is no joke. It actually avoided my dog's toy and some loose cables!", rating: 5, userIdx: 12, productIdx: 140 },
  { comment: "The self-empty base is a game changer. I don't have to touch it for weeks.", rating: 5, userIdx: 34, productIdx: 140 },
  { comment: "Smart mapping is very accurate. It learned my floor plan in just two runs.", rating: 5, userIdx: 7, productIdx: 140 },
  { comment: "A bit loud when emptying into the base, but the cleaning performance is top-tier.", rating: 4, userIdx: 21, productIdx: 140 },
  { comment: "Best robot vac I've owned. It handles pet hair on carpets like a pro.", rating: 4, userIdx: 45, productIdx: 140 },

  // 141: Breville The Smart Oven Air Fryer Pro
  { comment: "This replaced my toaster, air fryer, and even my big oven for most meals.", rating: 5, userIdx: 0, productIdx: 141 },
  { comment: "The 13 functions are so versatile. Dehydrating fruit works perfectly.", rating: 5, userIdx: 18, productIdx: 141 },
  { comment: "Heats up incredibly fast. Fitting a whole chicken inside is a huge plus.", rating: 5, userIdx: 49, productIdx: 141 },
  { comment: "Element IQ tech ensures even cooking every time. No cold spots at all.", rating: 4, userIdx: 26, productIdx: 141 },
  { comment: "Professional quality build, though it does take up quite a bit of counter space.", rating: 4, userIdx: 8, productIdx: 141 },

  // 142: Levoit LV600S 6L Ultrasonic Humidifier
  { comment: "The 6L tank lasts forever. I can leave it on all night without worrying.", rating: 5, userIdx: 4, productIdx: 142 },
  { comment: "Love the warm mist option for winter. The app control is super convenient.", rating: 5, userIdx: 23, productIdx: 142 },
  { comment: "Top-fill design makes refilling so much easier and mess-free.", rating: 4, userIdx: 39, productIdx: 142 },
  { comment: "Very quiet operation. Perfect for my large living room and helps with my dry skin.", rating: 5, userIdx: 15, productIdx: 142 },
  { comment: "The aromatherapy feature is a nice touch. Great smart humidifier for the price.", rating: 4, userIdx: 42, productIdx: 142 },

  // 143: Black+Decker HGS Garment Steamer
  { comment: "Heats up in seconds. Perfect for quick touch-ups before heading to work.", rating: 5, userIdx: 11, productIdx: 143 },
  { comment: "The lavender finish is beautiful. Lightweight and very easy to handle.", rating: 5, userIdx: 29, productIdx: 143 },
  { comment: "Continuous steam is powerful enough to remove deep wrinkles from my curtains.", rating: 4, userIdx: 47, productIdx: 143 },
  { comment: "Much better than dragging out the ironing board. Ergonomic and effective.", rating: 5, userIdx: 2, productIdx: 143 },
  { comment: "Good steamer, but you might need to refill the tank if you have a lot of clothes.", rating: 4, userIdx: 31, productIdx: 143 },

  // 144: Comfee' MDDF-20DEN7-WF Dehumidifier
  { comment: "Pulled so much moisture out of my basement in just 24 hours. mold is gone!", rating: 5, userIdx: 33, productIdx: 144 },
  { comment: "Alexa integration works great. I can check the humidity levels from my phone.", rating: 5, userIdx: 6, productIdx: 144 },
  { comment: "The 3L tank is a good size and the swivel wheels make it easy to move around.", rating: 4, userIdx: 19, productIdx: 144 },
  { comment: "Quiet enough to leave in the hallway. The 24-hour timer is very useful.", rating: 5, userIdx: 41, productIdx: 144 },
  { comment: "Solid performance, though the tank can be a bit tricky to slide back in when full.", rating: 4, userIdx: 10, productIdx: 144 },

  // 145: GE Profile Opal Side Tank 2.0
  { comment: "A must-have if you have the Opal ice maker. No more constant refilling!", rating: 5, userIdx: 22, productIdx: 145 },
  { comment: "The magnetic attachment is genius. It stays perfectly in place on the side.", rating: 5, userIdx: 46, productIdx: 145 },
  { comment: "Tripled my ice production. Perfect for hosting summer parties.", rating: 4, userIdx: 3, productIdx: 145 },
  { comment: "Slim design doesn't take up much extra space on the counter. Very practical.", rating: 5, userIdx: 38, productIdx: 145 },
  { comment: "Excellent accessory, though I think it should have been included with the ice maker.", rating: 4, userIdx: 13, productIdx: 145 },

  // 146: Cuisinart CPT-180 4-Slice Toaster
  { comment: "Classic look and toasts very evenly. The dual controls are perfect for my family.", rating: 5, userIdx: 25, productIdx: 146 },
  { comment: "The bagel setting works perfectly—toasts the inside and warms the outside.", rating: 5, userIdx: 5, productIdx: 146 },
  { comment: "Brushed stainless steel finish looks great and is easy to wipe clean.", rating: 4, userIdx: 43, productIdx: 146 },
  { comment: "6 browning settings give you plenty of options for different types of bread.", rating: 5, userIdx: 17, productIdx: 146 },
  { comment: "Solid metal build, feels like it will last a long time in my kitchen.", rating: 4, userIdx: 32, productIdx: 146 },

  // 147: Haier Battery Powered Electric Wine Set
  { comment: "Makes opening wine so effortless. The aerator really improves the flavor.", rating: 5, userIdx: 14, productIdx: 147 },
  { comment: "Complete professional set. The storage base keeps everything organized.", rating: 5, userIdx: 37, productIdx: 147 },
  { comment: "The vacuum caps are a lifesaver for keeping wine fresh for several days.", rating: 4, userIdx: 1, productIdx: 147 },
  { comment: "Great gift for any wine lover. The electric opener is powerful and quiet.", rating: 5, userIdx: 48, productIdx: 147 },
  { comment: "Elegant design, though remember to keep spare batteries on hand just in case.", rating: 4, userIdx: 28, productIdx: 147 },

  // 148: Simplehuman 58 Liter Sensor Trash Can
  { comment: "Voice control is so handy when your hands are full of food scraps.", rating: 5, userIdx: 24, productIdx: 148 },
  { comment: "The motion sensor is very responsive. No more touching a dirty bin lid!", rating: 5, userIdx: 40, productIdx: 148 },
  { comment: "Fingerprint-proof finish actually works. It stays looking clean and shiny.", rating: 4, userIdx: 9, productIdx: 148 },
  { comment: "Liner pocket is a brilliant feature. Changing the bags is now so fast.", rating: 5, userIdx: 16, productIdx: 148 },
  { comment: "Very expensive for a bin, but the convenience and style are top-tier.", rating: 4, userIdx: 30, productIdx: 148 },

  // 149: Presto Dehydro Electric Food Dehydrator
  { comment: "Perfect for making homemade beef jerky. Simple and effective 4-tray system.", rating: 5, userIdx: 44, productIdx: 149 },
  { comment: "I've been drying my own herbs and fruits. It's so much cheaper than buying them.", rating: 5, userIdx: 20, productIdx: 149 },
  { comment: "The see-through cover lets you check progress without losing heat.", rating: 4, userIdx: 35, productIdx: 149 },
  { comment: "Compact and easy to store when not in use. Expandable if you need more space.", rating: 5, userIdx: 27, productIdx: 149 },
  { comment: "Basic but reliable. Great entry-level dehydrator for beginners.", rating: 4, userIdx: 1, productIdx: 149 },

  // 150: CeraVe Hydrating Facial Cleanser
  { comment: "The only cleanser that doesn't leave my skin feeling tight. Truly hydrating.", rating: 5, userIdx: 14, productIdx: 150 },
  { comment: "Perfect for sensitive skin. It’s basic, but it works exactly as promised.", rating: 5, userIdx: 32, productIdx: 150 },
  { comment: "I love the non-foaming texture. My dermatologist recommended it and I'm a fan.", rating: 4, userIdx: 4, productIdx: 150 },
  { comment: "Gentle and effective. It removes daily grime without stripping my moisture barrier.", rating: 5, userIdx: 21, productIdx: 150 },
  { comment: "Good value for money, though it struggle a bit with heavy waterproof makeup.", rating: 4, userIdx: 48, productIdx: 150 },

  // 151: La Roche-Posay Anthelios UVMune 400
  { comment: "The best sunscreen I've ever used. No white cast and it's not greasy at all.", rating: 5, userIdx: 7, productIdx: 151 },
  { comment: "So lightweight it feels like water. It sits perfectly under my foundation.", rating: 5, userIdx: 29, productIdx: 151 },
  { comment: "Very high protection but invisible on the skin. Great for my daily commute.", rating: 5, userIdx: 13, productIdx: 151 },
  { comment: "Fragrance-free and doesn't sting my eyes. A holy grail for summer.", rating: 4, userIdx: 36, productIdx: 151 },
  { comment: "Small bottle but a little goes a long way. Excellent for sun-sensitive skin.", rating: 4, userIdx: 0, productIdx: 151 },

  // 152: Paula's Choice 2% BHA Liquid Exfoliant
  { comment: "This changed my skin texture in just a week. My pores look so much smaller.", rating: 5, userIdx: 44, productIdx: 152 },
  { comment: "Cleared up my blackheads and evened out my skin tone. Absolutely worth the hype.", rating: 5, userIdx: 18, productIdx: 152 },
  { comment: "It's powerful, so I only use it twice a week, but the results are amazing.", rating: 4, userIdx: 2, productIdx: 152 },
  { comment: "The best salicylic acid product out there. Smooths out all my fine lines.", rating: 5, userIdx: 41, productIdx: 152 },
  { comment: "Leaves a slightly tacky feeling for a minute, but the glow is worth it.", rating: 4, userIdx: 25, productIdx: 152 },

  // 153: Neutrogena Hydro Boost Water Gel
  { comment: "My skin drinks this up. The hyaluronic acid keeps me hydrated all day long.", rating: 5, userIdx: 9, productIdx: 153 },
  { comment: "Love the gel texture. It’s so cooling and refreshing, especially in the morning.", rating: 5, userIdx: 49, productIdx: 153 },
  { comment: "Perfect for my combination skin. It doesn't clog my pores or feel heavy.", rating: 4, userIdx: 11, productIdx: 153 },
  { comment: "Absorbs instantly and makes my face feel incredibly smooth and supple.", rating: 5, userIdx: 33, productIdx: 153 },
  { comment: "Smells great, though I wish there was a fragrance-free version for extra sensitivity.", rating: 4, userIdx: 22, productIdx: 153 },

  // 154: Bio-Oil Skincare Body Oil Serum
  { comment: "Noticeably faded my old scars over a few months. Very impressed with this oil.", rating: 5, userIdx: 30, productIdx: 154 },
  { comment: "Best moisturizer for dry elbows and knees. It absorbs surprisingly fast.", rating: 5, userIdx: 6, productIdx: 154 },
  { comment: "A classic for stretch marks. It feels very luxurious and the Vitamin E is great.", rating: 4, userIdx: 15, productIdx: 154 },
  { comment: "Non-comedogenic so I even use it on my dry face patches. Highly recommend.", rating: 5, userIdx: 47, productIdx: 154 },
  { comment: "Greasy if you use too much, but just a couple of drops go a long way.", rating: 4, userIdx: 3, productIdx: 154 },

  // 155: COSRX Advanced Snail 96 Mucin Power Essence
  { comment: "The glow this gives me is unreal! My skin feels so plump and hydrated.", rating: 5, userIdx: 20, productIdx: 155 },
  { comment: "Don't let the 'snail' part scare you, it’s not slimy once it’s on your face.", rating: 5, userIdx: 43, productIdx: 155 },
  { comment: "Amazing for soothing redness and irritation. A staple in my K-beauty routine.", rating: 5, userIdx: 12, productIdx: 155 },
  { comment: "It absorbs very fast and creates a great base for my moisturizer.", rating: 4, userIdx: 38, productIdx: 155 },
  { comment: "Very hydrating, though I found I needed to apply it to damp skin for best results.", rating: 4, userIdx: 1, productIdx: 155 },

  // 156: Garnier Micellar Cleansing Water
  { comment: "The best makeup remover for the price. It doesn't sting my eyes at all.", rating: 5, userIdx: 35, productIdx: 156 },
  { comment: "Lifts away dirt and oil with just one cotton pad. So gentle and effective.", rating: 5, userIdx: 8, productIdx: 156 },
  { comment: "I don't even need to rinse my face after. It feels very clean and refreshed.", rating: 4, userIdx: 27, productIdx: 156 },
  { comment: "Huge bottle that lasts for months. Excellent value for an everyday basic.", rating: 5, userIdx: 40, productIdx: 156 },
  { comment: "Does a great job on light makeup, but you might need two rounds for heavy foundation.", rating: 4, userIdx: 17, productIdx: 156 },

  // 157: Kiehl's Ultra Facial Cream
  { comment: "A winter essential. It strengthens my skin barrier and prevents any flaking.", rating: 5, userIdx: 5, productIdx: 157 },
  { comment: "The squalane makes it feel so rich but it doesn't leave a greasy film.", rating: 5, userIdx: 23, productIdx: 157 },
  { comment: "Keeps my skin hydrated for a full 24 hours. My face has never been softer.", rating: 5, userIdx: 31, productIdx: 157 },
  { comment: "Fast-absorbing and works well for all skin types. Truly an 'ultra' cream.", rating: 4, userIdx: 46, productIdx: 157 },
  { comment: "Expensive but you only need a pea-sized amount for the whole face.", rating: 4, userIdx: 10, productIdx: 157 },

  // 158: L'Oréal Paris Revitalift Pure Hyaluronic Acid Serum
  { comment: "My skin looks much more bouncy and youthful. The wrinkles are less visible.", rating: 5, userIdx: 39, productIdx: 158 },
  { comment: "Intense hydration! This serum re-plumps the skin like magic.", rating: 5, userIdx: 16, productIdx: 158 },
  { comment: "The 1.5% pure HA is very potent. I noticed a difference in just a few days.", rating: 4, userIdx: 3, productIdx: 158 },
  { comment: "Easy to apply and doesn't conflict with my other skincare products.", rating: 5, userIdx: 28, productIdx: 158 },
  { comment: "Good serum, but the glass dropper can be a bit fragile if dropped.", rating: 4, userIdx: 45, productIdx: 158 },

  // 159: Catrice HD Liquid Coverage Foundation Set
  { comment: "Amazing coverage for the price. It looks like a high-end foundation on skin.", rating: 5, userIdx: 24, productIdx: 159 },
  { comment: "The under eye brightener is a lifesaver. It hides my dark circles perfectly.", rating: 5, userIdx: 19, productIdx: 159 },
  { comment: "Truly long-lasting. It stayed in place all day even through a busy work shift.", rating: 4, userIdx: 42, productIdx: 159 },
  { comment: "Vegan and cruelty-free which is a huge plus. The finish is very natural.", rating: 5, userIdx: 12, productIdx: 159 },
  { comment: "The foundation is quite full coverage, so make sure to blend it well.", rating: 4, userIdx: 37, productIdx: 159 },

  // 160: Maybelline New York Lash Sensational Sky High Mascara
  { comment: "Unbelievable length! My lashes literally touch my eyebrows with this.", rating: 5, userIdx: 24, productIdx: 160 },
  { comment: "The brush is so flexible, it reaches every single lash. No clumps at all.", rating: 5, userIdx: 7, productIdx: 160 },
  { comment: "Long-lasting and doesn't smudge during the day. Bamboo extract is a nice plus.", rating: 4, userIdx: 42, productIdx: 160 },
  { comment: "Great volume and limitless length. It's my new favorite everyday mascara.", rating: 5, userIdx: 15, productIdx: 160 },
  { comment: "Amazing impact, though it takes a good oil cleanser to remove it completely.", rating: 4, userIdx: 33, productIdx: 160 },

  // 161: Nyx Professional Makeup Control Drop Foundation
  { comment: "Love the dropper! I can go from a light tint to full coverage so easily.", rating: 5, userIdx: 10, productIdx: 161 },
  { comment: "The matte finish looks very natural, not cakey at all. Perfect for oily skin.", rating: 5, userIdx: 28, productIdx: 161 },
  { comment: "So versatile. I use just a few drops for a 'no-makeup' makeup look.", rating: 4, userIdx: 5, productIdx: 161 },
  { comment: "Great shade range. It blends seamlessly into the skin and stays put.", rating: 5, userIdx: 47, productIdx: 161 },
  { comment: "Good foundation, but make sure to moisturize well if you have dry patches.", rating: 4, userIdx: 19, productIdx: 161 },

  // 162: Rare Beauty Soft Pinch Liquid Blush
  { comment: "The pigment is insane! One tiny dot is enough for both cheeks. Beautiful glow.", rating: 5, userIdx: 12, productIdx: 162 },
  { comment: "Blends like a dream and lasts all day. The dewy finish looks so healthy.", rating: 5, userIdx: 39, productIdx: 162 },
  { comment: "Weightless feel on the skin. It doesn't disrupt the foundation underneath.", rating: 5, userIdx: 2, productIdx: 162 },
  { comment: "The best liquid blush on the market. The colors are so flattering and buildable.", rating: 4, userIdx: 25, productIdx: 162 },
  { comment: "So long-lasting, though you have to blend it quickly before it sets.", rating: 4, userIdx: 41, productIdx: 162 },

  // 163: L'Oréal Paris Infallible 24H Fresh Wear Powder
  { comment: "I was skeptical about a powder foundation, but the coverage is incredible.", rating: 5, userIdx: 3, productIdx: 163 },
  { comment: "Perfect for touch-ups. It mattifies instantly without looking heavy.", rating: 5, userIdx: 18, productIdx: 163 },
  { comment: "Waterproof and sweat-proof as advertised. Stayed perfect through a workout.", rating: 4, userIdx: 46, productIdx: 163 },
  { comment: "Natural look with high coverage. It really does cover like a liquid foundation.", rating: 5, userIdx: 8, productIdx: 163 },
  { comment: "Great for summer heat. Keeps me shine-free for hours. High quality powder.", rating: 4, userIdx: 29, productIdx: 163 },

  // 164: Essence Lash Princess False Lash Effect Mascara
  { comment: "How is this so cheap? It works better than my $30 mascaras. Insane volume.", rating: 5, userIdx: 44, productIdx: 164 },
  { comment: "The viral fame is well-deserved. My lashes look like falsies in two coats.", rating: 5, userIdx: 1, productIdx: 164 },
  { comment: "Defines and separates perfectly. Intense black color and no clumping.", rating: 4, userIdx: 22, productIdx: 164 },
  { comment: "Best budget beauty find ever. Gives great length and drama to the eyes.", rating: 5, userIdx: 36, productIdx: 164 },
  { comment: "Amazing effect, but can flake a little bit by the end of a very long day.", rating: 4, userIdx: 11, productIdx: 164 },

  // 165: Urban Decay Naked Mini Eyeshadow Palette
  { comment: "The perfect travel palette. The matte and shimmer shades are so pigmented.", rating: 5, userIdx: 20, productIdx: 165 },
  { comment: "Crease-free and lasts all day. The metallic finishes are absolutely stunning.", rating: 5, userIdx: 43, productIdx: 165 },
  { comment: "Vegan and cruelty-free. The shades are very blendable and versatile.", rating: 4, userIdx: 6, productIdx: 165 },
  { comment: "Compact but high quality. Everything you need for a full eye look in one mini.", rating: 5, userIdx: 31, productIdx: 165 },
  { comment: "Classic Naked quality. The colors are beautiful, though I wish it had one more dark shade.", rating: 4, userIdx: 14, productIdx: 165 },

  // 166: E.l.f. Cosmetics Power Grip Primer
  { comment: "This primer is like glue for makeup. My foundation literally doesn't move.", rating: 5, userIdx: 17, productIdx: 166 },
  { comment: "Excellent grip! It smoothes out my pores and helps my makeup last 12+ hours.", rating: 5, userIdx: 49, productIdx: 166 },
  { comment: "The gel texture feels very refreshing. Best affordable primer I've ever used.", rating: 4, userIdx: 0, productIdx: 166 },
  { comment: "A little goes a long way. Make sure to pat it in and let it get tacky.", rating: 5, userIdx: 32, productIdx: 166 },
  { comment: "Great for longevity, though the sticky feeling might not be for everyone.", rating: 4, userIdx: 13, productIdx: 166 },

  // 167: Fenty Beauty Gloss Bomb Universal Lip Luminizer
  { comment: "The ultimate lip gloss. The shine is explosive and it's not sticky at all.", rating: 5, userIdx: 27, productIdx: 167 },
  { comment: "Smells like peaches and looks amazing on everyone. Truly a universal shade.", rating: 5, userIdx: 4, productIdx: 167 },
  { comment: "Makes my lips look so much fuller. It's the only gloss I carry in my bag now.", rating: 5, userIdx: 38, productIdx: 167 },
  { comment: "Feels so hydrating on the lips. The applicator is huge and covers in one swipe.", rating: 4, userIdx: 23, productIdx: 167 },
  { comment: "High shine and great comfort, but you do need to reapply after eating.", rating: 4, userIdx: 45, productIdx: 167 },

  // 168: Charlotte Tilbury Holiday Kit - Airbrush Flawless Trio
  { comment: "The setting spray is a miracle worker. My makeup looks airbrushed all day.", rating: 5, userIdx: 35, productIdx: 168 },
  { comment: "The pressed powder is so finely milled, it literally blurs out my pores.", rating: 5, userIdx: 9, productIdx: 168 },
  { comment: "Amazing holiday set. The Lip Duo is the perfect 'your lips but better' color.", rating: 5, userIdx: 48, productIdx: 168 },
  { comment: "Total luxury in a kit. It really gives that flawless, poreless finish.", rating: 4, userIdx: 16, productIdx: 168 },
  { comment: "Expensive but the results are professional. A great way to try her best products.", rating: 4, userIdx: 30, productIdx: 168 },

  // 169: Milani Baked Blush - Luminoso
  { comment: "The most beautiful natural glow. It really does look like a high-end designer blush.", rating: 5, userIdx: 26, productIdx: 169 },
  { comment: "Luminoso is a cult favorite for a reason. The peach tone is perfect for summer.", rating: 5, userIdx: 40, productIdx: 169 },
  { comment: "Baked on terracotta tiles? So cool. The texture is silky and blends perfectly.", rating: 4, userIdx: 37, productIdx: 169 },
  { comment: "Adds a subtle radiance to the cheeks. Very buildable and high quality.", rating: 5, userIdx: 12, productIdx: 169 },
  { comment: "Great color and shimmer, just be careful if you have a lot of skin texture.", rating: 4, userIdx: 21, productIdx: 169 },

  // 170: Omron X3 Comfort Blood Pressure Monitor
  { comment: "The Intelli Wrap cuff makes it so easy to get an accurate reading every time.", rating: 5, userIdx: 14, productIdx: 170 },
  { comment: "Very reliable and simple to use. The display is clear and easy to read.", rating: 5, userIdx: 32, productIdx: 170 },
  { comment: "Great for home monitoring. It feels much more professional than cheaper brands.", rating: 4, userIdx: 7, productIdx: 170 },
  { comment: "The setup was quick. I appreciate the memory function for tracking progress.", rating: 5, userIdx: 21, productIdx: 170 },
  { comment: "Solid build quality. It’s consistent with the readings at my doctor's office.", rating: 4, userIdx: 45, productIdx: 170 },

  // 171: Oral-B Smart 5000 Electric Toothbrush
  { comment: "My teeth have never felt cleaner. The pressure sensor is a life saver for my gums.", rating: 5, userIdx: 3, productIdx: 171 },
  { comment: "The Bluetooth connectivity is actually quite helpful for improving my brushing habits.", rating: 4, userIdx: 28, productIdx: 171 },
  { comment: "Great battery life and the travel case is very convenient for trips.", rating: 5, userIdx: 19, productIdx: 171 },
  { comment: "Love the different modes, especially the sensitive one. Highly recommended.", rating: 5, userIdx: 41, productIdx: 171 },
  { comment: "Powerful motor and the timer ensures I actually brush for the full two minutes.", rating: 4, userIdx: 10, productIdx: 171 },

  // 172: Fitbit Charge 6 Fitness Tracker
  { comment: "The integration with Google Maps is a game changer for my morning runs.", rating: 5, userIdx: 33, productIdx: 172 },
  { comment: "Sleep tracking is incredibly detailed. It really helps me understand my recovery.", rating: 5, userIdx: 15, productIdx: 172 },
  { comment: "Lightweight and stylish. The battery lasts much longer than I expected.", rating: 4, userIdx: 49, productIdx: 172 },
  { comment: "Accurate heart rate monitoring and the haptic button feels very responsive.", rating: 5, userIdx: 2, productIdx: 172 },
  { comment: "Love having Google Wallet on my wrist. Makes post-workout snacks easy to buy.", rating: 4, userIdx: 26, productIdx: 172 },

  // 173: Beurer FT 95 Contactless Thermometer
  { comment: "Fast and hygienic. Perfect for checking the kids' temperature without waking them.", rating: 5, userIdx: 8, productIdx: 173 },
  { comment: "The LED fever alarm is a great visual cue. Very easy to operate.", rating: 4, userIdx: 37, productIdx: 173 },
  { comment: "Syncing with the app helps me keep a perfect log for the pediatrician.", rating: 5, userIdx: 14, productIdx: 173 },
  { comment: "Clean design and very portable. The readings are consistent if you follow the distance guide.", rating: 4, userIdx: 22, productIdx: 173 },
  { comment: "A bit expensive, but the quality and Bluetooth features justify the price.", rating: 4, userIdx: 30, productIdx: 173 },

  // 174: Optimum Nutrition Gold Standard Whey
  { comment: "Best tasting protein on the market. Mixes perfectly with just a spoon.", rating: 5, userIdx: 44, productIdx: 174 },
  { comment: "I've been using this for years. Consistent quality and great macros.", rating: 5, userIdx: 1, productIdx: 174 },
  { comment: "The Double Rich Chocolate flavor is amazing and not too sweet.", rating: 5, userIdx: 18, productIdx: 174 },
  { comment: "No bloating or digestive issues like other brands I've tried.", rating: 4, userIdx: 39, productIdx: 174 },
  { comment: "Great value for a 2kg tub. It’s a staple in my supplement stack.", rating: 5, userIdx: 5, productIdx: 174 },

  // 175: Withings Body+ Smart Scale
  { comment: "Seeing the body composition breakdown is so much better than just weight.", rating: 5, userIdx: 11, productIdx: 175 },
  { comment: "The Wi-Fi sync is seamless. I love that it works with Apple Health.", rating: 5, userIdx: 29, productIdx: 175 },
  { comment: "Very sleek design. It looks great in the bathroom and feels very sturdy.", rating: 4, userIdx: 40, productIdx: 175 },
  { comment: "Accurate and reliable. It recognizes different family members automatically.", rating: 5, userIdx: 6, productIdx: 175 },
  { comment: "The weather forecast feature is a nice little touch every morning.", rating: 4, userIdx: 24, productIdx: 175 },

  // 176: Waterpik Ultra Professional Water Flosser
  { comment: "My dental hygienist noticed the difference immediately. It's so effective.", rating: 5, userIdx: 20, productIdx: 176 },
  { comment: "Much easier than traditional flossing, especially with my braces.", rating: 5, userIdx: 47, productIdx: 176 },
  { comment: "The various tips are great for different needs. The pressure range is perfect.", rating: 4, userIdx: 13, productIdx: 176 },
  { comment: "It’s a bit loud, but the cleaning power is worth the noise.", rating: 4, userIdx: 32, productIdx: 176 },
  { comment: "Leaves my mouth feeling incredibly fresh. Best investment for dental health.", rating: 5, userIdx: 9, productIdx: 176 },

  // 177: Zarbee's Kids Elderberry Gummies
  { comment: "My kids actually ask for these! No struggle to get them to take their vitamins.", rating: 5, userIdx: 31, productIdx: 177 },
  { comment: "I love that they use natural ingredients and no artificial sweeteners.", rating: 5, userIdx: 4, productIdx: 177 },
  { comment: "A must-have for the school season to keep the immune system strong.", rating: 4, userIdx: 17, productIdx: 177 },
  { comment: "Great taste and texture. They don't stick to the teeth like other gummies.", rating: 5, userIdx: 42, productIdx: 177 },
  { comment: "Trusted brand. I feel confident giving these to my toddlers.", rating: 4, userIdx: 25, productIdx: 177 },

  // 178: Compeed Medium Size Blister Plasters
  { comment: "The only thing that allows me to keep walking when I have a blister.", rating: 5, userIdx: 38, productIdx: 178 },
  { comment: "They stay on for days, even through showers and long runs.", rating: 5, userIdx: 23, productIdx: 178 },
  { comment: "Instant pain relief. It’s like a second skin that cushions the area.", rating: 5, userIdx: 46, productIdx: 178 },
  { comment: "A bit pricey for plasters, but they perform far better than generic ones.", rating: 4, userIdx: 16, productIdx: 178 },
  { comment: "Perfect for breaking in new shoes. I always keep a pack in my bag.", rating: 5, userIdx: 43, productIdx: 178 },

  // 179: Renpho Eyeris 3 Eye Massager
  { comment: "This is a lifesaver for my migraines. The heat and pressure are perfect.", rating: 5, userIdx: 35, productIdx: 179 },
  { comment: "So relaxing after a long day of staring at a computer screen.", rating: 5, userIdx: 27, productIdx: 179 },
  { comment: "The voice control is very handy since you can't see the buttons while wearing it.", rating: 4, userIdx: 36, productIdx: 179 },
  { comment: "Bluetooth music is a nice touch, helps me drift off to sleep easily.", rating: 5, userIdx: 12, productIdx: 179 },
  { comment: "The adjustable strap makes it comfortable for any head size.", rating: 4, userIdx: 48, productIdx: 179 },

  // 180: Therabody Theragun Mini (2nd Gen)
  { comment: "Surprisingly powerful for such a small device. It fits perfectly in my gym bag.", rating: 5, userIdx: 22, productIdx: 180 },
  { comment: "The ergonomics are great. I can reach my lower back much easier than with other guns.", rating: 5, userIdx: 41, productIdx: 180 },
  { comment: "Very quiet compared to the first gen. Essential for post-run recovery.", rating: 5, userIdx: 10, productIdx: 180 },
  { comment: "Pricey, but the build quality and the app integration justify it.", rating: 4, userIdx: 33, productIdx: 180 },
  { comment: "Perfect for travel. The battery life is solid and it charges quickly via USB-C.", rating: 5, userIdx: 5, productIdx: 180 },

  // 181: Rituals The Ritual of Sakura Body Scrub
  { comment: "The scent is divine! It leaves my skin feeling incredibly soft and hydrated.", rating: 5, userIdx: 18, productIdx: 181 },
  { comment: "Luxury in a jar. The sugar crystals exfoliate without being too harsh.", rating: 5, userIdx: 44, productIdx: 181 },
  { comment: "I love the cream base; it doesn't leave a greasy residue in the shower.", rating: 4, userIdx: 29, productIdx: 181 },
  { comment: "A little goes a long way. My skin looks so much brighter after using it.", rating: 5, userIdx: 12, productIdx: 181 },
  { comment: "The smell of cherry blossom is so relaxing. A perfect self-care treat.", rating: 4, userIdx: 3, productIdx: 181 },

  // 182: Neom Wellbeing Pod Mini+
  { comment: "I love that it's waterless. No more messy refills in my car or office.", rating: 5, userIdx: 47, productIdx: 182 },
  { comment: "Small but effective. It fills the room with scent much faster than I expected.", rating: 4, userIdx: 16, productIdx: 182 },
  { comment: "The battery lasts for ages. I take it everywhere with me.", rating: 5, userIdx: 38, productIdx: 182 },
  { comment: "Sleek and minimalist design. It looks great on my desk.", rating: 5, userIdx: 7, productIdx: 182 },
  { comment: "A bit loud when it mists, but the fragrance quality is top-notch.", rating: 4, userIdx: 25, productIdx: 182 },

  // 183: Gaiam Yoga Mat - 6mm
  { comment: "The extra thickness is perfect for my knees during floor poses.", rating: 5, userIdx: 31, productIdx: 183 },
  { comment: "Beautiful print and great grip. It doesn't slide around on the hardwood floor.", rating: 5, userIdx: 2, productIdx: 183 },
  { comment: "Very lightweight for how thick it is. Easy to carry to the studio.", rating: 4, userIdx: 49, productIdx: 183 },
  { comment: "Durable and easy to clean. I've been using it daily and it still looks new.", rating: 5, userIdx: 13, productIdx: 183 },
  { comment: "A bit of a plastic smell at first, but it faded quickly after airing out.", rating: 4, userIdx: 20, productIdx: 183 },

  // 184: Pranamat ECO Set
  { comment: "Life-changing for my chronic back pain. It takes a few minutes to get used to, but it works.", rating: 5, userIdx: 35, productIdx: 184 },
  { comment: "High-quality materials. You can really feel the difference of the natural linen.", rating: 5, userIdx: 9, productIdx: 184 },
  { comment: "I use the pillow for my neck every night. It helps me fall asleep so much faster.", rating: 5, userIdx: 46, productIdx: 184 },
  { comment: "Expensive investment, but definitely worth it for deep muscle relaxation.", rating: 4, userIdx: 23, productIdx: 184 },
  { comment: "The lotus spikes are very sharp, but the feeling afterward is pure bliss.", rating: 5, userIdx: 1, productIdx: 184 },

  // 185: Yankee Candle Large Jar - Clean Cotton
  { comment: "The ultimate fresh scent. It makes the whole house smell like laundry day.", rating: 5, userIdx: 11, productIdx: 185 },
  { comment: "Lasts forever! I’ve had mine burning for weeks and it’s still half full.", rating: 5, userIdx: 39, productIdx: 185 },
  { comment: "Classic fragrance that never gets old. Very clean and not overpowering.", rating: 4, userIdx: 27, productIdx: 185 },
  { comment: "Great throw, I can smell it even in the upstairs hallway.", rating: 5, userIdx: 6, productIdx: 185 },
  { comment: "Love the glass jar, I always reuse them for storage afterwards.", rating: 4, userIdx: 14, productIdx: 185 },

  // 186: Muji Ultrasonic Aroma Diffuser
  { comment: "Typical Muji: simple, functional, and beautiful. The mist is very fine.", rating: 5, userIdx: 40, productIdx: 186 },
  { comment: "The light has two settings and creates a very cozy atmosphere at night.", rating: 5, userIdx: 32, productIdx: 186 },
  { comment: "The timer function is very useful for using it before bed.", rating: 4, userIdx: 17, productIdx: 186 },
  { comment: "Quiet operation. I keep it on my nightstand and it doesn't disturb my sleep.", rating: 5, userIdx: 4, productIdx: 186 },
  { comment: "A bit smaller than I expected, but it works well for a medium-sized bedroom.", rating: 4, userIdx: 43, productIdx: 186 },

  // 187: InnoGear Ceramic Diffuser
  { comment: "The ceramic finish looks so much more expensive than plastic ones.", rating: 5, userIdx: 28, productIdx: 187 },
  { comment: "Beautifully handcrafted. It doubles as a piece of decor in my living room.", rating: 5, userIdx: 15, productIdx: 187 },
  { comment: "Works great and the auto-off feature gives me peace of mind.", rating: 4, userIdx: 34, productIdx: 187 },
  { comment: "Simple to use and easy to clean. The mist output is very consistent.", rating: 5, userIdx: 8, productIdx: 187 },
  { comment: "I wish the water capacity was slightly larger, but it’s very elegant.", rating: 4, userIdx: 26, productIdx: 187 },

  // 188: Zen Routine Magnesium Spray + Lotion
  { comment: "The only thing that stops my leg cramps at night. Truly effective.", rating: 5, userIdx: 42, productIdx: 188 },
  { comment: "The lotion is very soothing and doesn't leave my skin feeling sticky.", rating: 5, userIdx: 19, productIdx: 188 },
  { comment: "This magnesium spray doesn't itch as much as other brands I've tried.", rating: 4, userIdx: 21, productIdx: 188 },
  { comment: "Great for recovery after a heavy leg day. My muscles feel much less tight.", rating: 5, userIdx: 36, productIdx: 188 },
  { comment: "The set is a great value. I use the spray for my back and the lotion for my legs.", rating: 4, userIdx: 45, productIdx: 188 },

  // 189: Pukka Organic Herbal Tea - Relax
  { comment: "The most soothing blend I’ve found. Perfect for winding down in the evening.", rating: 5, userIdx: 48, productIdx: 189 },
  { comment: "I love the chamomile and fennel combination. Very gentle on the stomach.", rating: 5, userIdx: 30, productIdx: 189 },
  { comment: "Great taste even without honey. You can tell the ingredients are high quality.", rating: 4, userIdx: 37, productIdx: 189 },
  { comment: "Individual bags stay fresh. A staple in my pantry for stressful days.", rating: 5, userIdx: 24, productIdx: 189 },
  { comment: "The aroma alone is enough to start relaxing you. Very calming.", rating: 4, userIdx: 0, productIdx: 189 },

  // 190: Chanel No. 5 The Body Cream
  { comment: "Pure luxury in a jar. The texture is so rich and the scent lasts all day on the skin.", rating: 5, userIdx: 12, productIdx: 190 },
  { comment: "Expensive, but it leaves my skin feeling like silk. Perfect for layering with the perfume.", rating: 5, userIdx: 48, productIdx: 190 },
  { comment: "The fragrance is classic Chanel. Very moisturizing without being greasy.", rating: 4, userIdx: 23, productIdx: 190 },
  { comment: "A beautiful gift for any Chanel lover. The packaging is stunning on my vanity.", rating: 5, userIdx: 5, productIdx: 190 },
  { comment: "Very delicate scent, not overpowering at all. Great for a subtle evening glow.", rating: 4, userIdx: 31, productIdx: 190 },

  // 191: Dior Sauvage Eau de Toilette
  { comment: "The ultimate compliment getter. It’s fresh, woody, and lasts a long time.", rating: 5, userIdx: 41, productIdx: 191 },
  { comment: "A bit common nowadays, but for a reason—it just smells incredible.", rating: 4, userIdx: 10, productIdx: 191 },
  { comment: "The bergamot opening is so crisp. My go-to fragrance for every day.", rating: 5, userIdx: 28, productIdx: 191 },
  { comment: "Projecting is great, only need a couple of sprays. Very masculine and bold.", rating: 5, userIdx: 3, productIdx: 191 },
  { comment: "Good performance and versatile for any season. Truly a modern classic.", rating: 4, userIdx: 19, productIdx: 191 },

  // 192: Yves Saint Laurent Libre Eau de Parfum - Mini
  { comment: "Perfect size for my purse! I love being able to touch up my scent on the go.", rating: 5, userIdx: 33, productIdx: 192 },
  { comment: "The lavender and orange blossom combo is so unique and powerful.", rating: 5, userIdx: 15, productIdx: 192 },
  { comment: "Such a beautiful bottle even in the mini version. Great for trying the scent.", rating: 4, userIdx: 49, productIdx: 192 },
  { comment: "Smells like freedom and confidence. Highly recommend this travel size.", rating: 5, userIdx: 2, productIdx: 192 },
  { comment: "It’s a splash bottle, so be careful not to spill, but the scent is 10/10.", rating: 4, userIdx: 26, productIdx: 192 },

  // 193: Giorgio Armani Acqua di Giò
  { comment: "The best aquatic fragrance ever made. It’s light, fresh, and timeless.", rating: 5, userIdx: 8, productIdx: 193 },
  { comment: "Reminds me of the Mediterranean. Perfect for summer days and holidays.", rating: 5, userIdx: 37, productIdx: 193 },
  { comment: "Clean and sophisticated. It never feels heavy or dated.", rating: 4, userIdx: 14, productIdx: 193 },
  { comment: "I’ve been wearing this for 10 years and still get asked what it is.", rating: 5, userIdx: 22, productIdx: 193 },
  { comment: "Great office scent. It’s pleasant and doesn't bother people around you.", rating: 4, userIdx: 30, productIdx: 193 },

  // 194: Marc Jacobs Daisy Eau de Toilette
  { comment: "The bottle is so cute! The scent is light, flowery, and very feminine.", rating: 5, userIdx: 44, productIdx: 194 },
  { comment: "Perfect first 'real' perfume. It’s very youthful and sparkling.", rating: 5, userIdx: 1, productIdx: 194 },
  { comment: "Good for daily wear, though I wish it lasted a bit longer on my skin.", rating: 4, userIdx: 18, productIdx: 194 },
  { comment: "A lovely bouquet of wild berries and jasmine. Very fresh for Spring.", rating: 5, userIdx: 39, productIdx: 194 },
  { comment: "Simple and charming. It’s my favorite scent for weekend brunches.", rating: 4, userIdx: 7, productIdx: 194 },

  // 195: Viktor&Rolf Flowerbomb Eau de Parfum
  { comment: "A literal explosion of flowers. It’s very sweet and incredibly long-lasting.", rating: 5, userIdx: 11, productIdx: 195 },
  { comment: "One of my absolute favorites. The patchouli gives it such a nice depth.", rating: 5, userIdx: 29, productIdx: 195 },
  { comment: "Very strong, so a little goes a long way. Truly beautiful and sexy.", rating: 5, userIdx: 40, productIdx: 195 },
  { comment: "The bottle design is iconic. The scent is very warm and addictive.", rating: 4, userIdx: 6, productIdx: 195 },
  { comment: "It’s a bit on the sweet side, but the floral notes balance it out well.", rating: 4, userIdx: 24, productIdx: 195 },

  // 196: Armaf Voyage Bleu Eau de Parfum
  { comment: "Amazing value for money. It smells very similar to a high-end designer brand.", rating: 5, userIdx: 20, productIdx: 196 },
  { comment: "The ginger and mint notes are very refreshing. Great for the gym.", rating: 4, userIdx: 47, productIdx: 196 },
  { comment: "Surprisingly long-lasting for the price. The dry down is very pleasant.", rating: 5, userIdx: 13, productIdx: 196 },
  { comment: "A great blind buy. It’s masculine, fresh, and slightly spicy.", rating: 4, userIdx: 32, productIdx: 196 },
  { comment: "The bottle is heavy and looks good. The scent is punchy and vibrant.", rating: 5, userIdx: 9, productIdx: 196 },

  // 197: Ralph Lauren Polo Blue Eau de Parfum
  { comment: "A more intense and sophisticated version of the original. Very clean.", rating: 5, userIdx: 34, productIdx: 197 },
  { comment: "The vetiver adds a nice masculine touch to the aquatic notes.", rating: 4, userIdx: 4, productIdx: 197 },
  { comment: "Very versatile. I wear it to work and for evening dinners.", rating: 5, userIdx: 17, productIdx: 197 },
  { comment: "Radiant citrus opening that stays fresh for hours. High quality.", rating: 5, userIdx: 42, productIdx: 197 },
  { comment: "Safe bet for a gift. Most men will appreciate this fresh scent profile.", rating: 4, userIdx: 25, productIdx: 197 },

  // 198: Tom Ford Jasmin Rouge Eau de Parfum
  { comment: "The most beautiful jasmine scent I’ve ever encountered. Pure art.", rating: 5, userIdx: 38, productIdx: 198 },
  { comment: "Deep, spicy, and mysterious. This is for someone who wants to stand out.", rating: 5, userIdx: 27, productIdx: 198 },
  { comment: "The price is high, but the quality of the ingredients is undeniable.", rating: 5, userIdx: 46, productIdx: 198 },
  { comment: "Very seductive and rich. It has a beautiful leathery finish.", rating: 4, userIdx: 16, productIdx: 198 },
  { comment: "A masterpiece. It’s a very bold and provocative floral.", rating: 5, userIdx: 43, productIdx: 198 },

  // 199: Paco Rabanne 1 Million Eau de Toilette
  { comment: "The king of party fragrances. It’s loud, sweet, and gets attention.", rating: 5, userIdx: 35, productIdx: 199 },
  { comment: "Instantly recognizable. The cinnamon and leather combo is iconic.", rating: 4, userIdx: 21, productIdx: 199 },
  { comment: "Still one of the best performing scents in my collection after all these years.", rating: 5, userIdx: 36, productIdx: 199 },
  { comment: "The bottle looks like a gold bar, which is cool. Very powerful projection.", rating: 4, userIdx: 45, productIdx: 199 },
  { comment: "Sweet and spicy. Great for cold weather and nights out.", rating: 5, userIdx: 0, productIdx: 199 },

  // 200: Bowflex SelectTech 552 Adjustable Dumbbells
  { comment: "Absolute space saver. Switching weights with the dial is smooth and fast.", rating: 5, userIdx: 14, productIdx: 200 },
  { comment: "The build quality is impressive. Perfect for a complete home gym setup.", rating: 5, userIdx: 32, productIdx: 200 },
  { comment: "A bit bulky for some exercises, but having 15 sets in one is worth it.", rating: 4, userIdx: 7, productIdx: 200 },
  { comment: "Expensive upfront, but cheaper than buying individual dumbbells. Highly recommend.", rating: 5, userIdx: 21, productIdx: 200 },
  { comment: "The grip feels secure and the clicking mechanism is very reassuring.", rating: 4, userIdx: 45, productIdx: 200 },

  // 201: Garmin Forerunner 255 Music
  { comment: "The GPS accuracy is top-tier. Love running without my phone thanks to the music storage.", rating: 5, userIdx: 3, productIdx: 201 },
  { comment: "Best running watch for the price. The training readiness score is surprisingly accurate.", rating: 5, userIdx: 28, productIdx: 201 },
  { comment: "Battery life is solid even with multi-band GPS active. Great for triathletes.", rating: 4, userIdx: 19, productIdx: 201 },
  { comment: "Lightweight on the wrist and the screen is very readable in direct sunlight.", rating: 5, userIdx: 41, productIdx: 201 },
  { comment: "Tons of data for nerds like me. Garmin Connect is a fantastic ecosystem.", rating: 4, userIdx: 10, productIdx: 201 },

  // 202: TRX All-in-One Suspension Training System
  { comment: "Unbelievable how much of a workout you can get with just some straps and a door.", rating: 5, userIdx: 33, productIdx: 202 },
  { comment: "Very high quality. I’ve used cheaper knockoffs and they don't compare to the original TRX.", rating: 5, userIdx: 15, productIdx: 202 },
  { comment: "Portable enough to take on business trips. Sets up in literally seconds.", rating: 4, userIdx: 49, productIdx: 202 },
  { comment: "The exercise guide included is very helpful for beginners. Great for core stability.", rating: 5, userIdx: 2, productIdx: 202 },
  { comment: "Effective but requires some space around the door to move freely.", rating: 4, userIdx: 26, productIdx: 202 },

  // 203: Under Armour Men's Tech 2.0 T-Shirt
  { comment: "The fabric is so soft and it doesn't stick to you when you sweat. My favorite gym shirt.", rating: 5, userIdx: 8, productIdx: 203 },
  { comment: "True to size and very breathable. Dries incredibly fast after a wash.", rating: 5, userIdx: 37, productIdx: 203 },
  { comment: "Simple design but works perfectly. The anti-odor tech actually seems to work.", rating: 4, userIdx: 14, productIdx: 203 },
  { comment: "Great value for the price. I have five of these in different colors now.", rating: 5, userIdx: 22, productIdx: 203 },
  { comment: "Loose fit which I prefer for lifting. Doesn't restrict movement at all.", rating: 4, userIdx: 30, productIdx: 203 },

  // 204: Power Guidance Battle Ropes
  { comment: "Heavy duty as described. These will definitely last a long time in my garage.", rating: 5, userIdx: 44, productIdx: 204 },
  { comment: "The handles are comfortable and don't slip even when my hands are sweaty.", rating: 5, userIdx: 1, productIdx: 204 },
  { comment: "Incredible cardio and shoulder burnout. Best addition to my circuit training.", rating: 4, userIdx: 18, productIdx: 204 },
  { comment: "The protective sleeve is a great touch to prevent fraying on concrete.", rating: 5, userIdx: 39, productIdx: 204 },
  { comment: "Make sure you have a solid anchor point, because these pull quite a bit.", rating: 4, userIdx: 7, productIdx: 204 },

  // 205: Amazon Basics High-Density Foam Roller
  { comment: "Simple and effective. It's very firm, which is exactly what my sore muscles need.", rating: 5, userIdx: 11, productIdx: 205 },
  { comment: "Great price for a basic piece of recovery gear. Does the job perfectly.", rating: 4, userIdx: 29, productIdx: 205 },
  { comment: "Lightweight but hasn't lost its shape after months of daily use.", rating: 5, userIdx: 40, productIdx: 205 },
  { comment: "Standard size and easy to clean. Essential for post-workout stretching.", rating: 4, userIdx: 6, productIdx: 205 },
  { comment: "It’s quite hard, so beginners might find it a bit painful at first.", rating: 4, userIdx: 24, productIdx: 205 },

  // 206: TriggerPoint GRID Foam Roller
  { comment: "The different textures really help target specific knots in my back.", rating: 5, userIdx: 20, productIdx: 206 },
  { comment: "Much better than the standard flat rollers. The compression feels like a real massage.", rating: 5, userIdx: 47, productIdx: 206 },
  { comment: "Solid construction, doesn't feel like it will snap under weight. Very durable.", rating: 4, userIdx: 13, productIdx: 206 },
  { comment: "Portable enough to throw in a suitcase. Helps me stay limber while traveling.", rating: 5, userIdx: 32, productIdx: 206 },
  { comment: "A bit more expensive than others, but the quality of recovery is superior.", rating: 4, userIdx: 9, productIdx: 206 },

  // 207: Withings Body Smart Scale
  { comment: "The Wi-Fi syncing is so convenient. I love seeing my trends in the app.", rating: 5, userIdx: 34, productIdx: 207 },
  { comment: "Body composition metrics are very consistent. Great for tracking fat loss.", rating: 5, userIdx: 4, productIdx: 207 },
  { comment: "The Baby Mode is a clever feature for new parents. Very sleek design.", rating: 4, userIdx: 17, productIdx: 207 },
  { comment: "Works perfectly with MyFitnessPal. Makes tracking my health goals effortless.", rating: 5, userIdx: 42, productIdx: 207 },
  { comment: "The screen is bright and easy to read. High-tech and very accurate.", rating: 4, userIdx: 25, productIdx: 207 },

  // 208: Iron Gym Total Upper Body Workout Bar
  { comment: "Fits perfectly in my standard door frame. No drilling required, which is great.", rating: 5, userIdx: 38, productIdx: 208 },
  { comment: "Very sturdy once in place. I use it daily for chin-ups and hanging leg raises.", rating: 5, userIdx: 23, productIdx: 208 },
  { comment: "Good padding on the handles, doesn't hurt my hands even during long sets.", rating: 4, userIdx: 46, productIdx: 208 },
  { comment: "Versatile enough to use on the floor for deeper push-ups and dips.", rating: 4, userIdx: 16, productIdx: 208 },
  { comment: "Make sure your door trim is strong enough to support your weight.", rating: 4, userIdx: 43, productIdx: 208 },

  // 209: Trideer Cork Yoga Blocks
  { comment: "The weight of the cork makes them much more stable than foam blocks.", rating: 5, userIdx: 35, productIdx: 209 },
  { comment: "Sustainable and eco-friendly. They have a great natural grip even when wet.", rating: 5, userIdx: 27, productIdx: 209 },
  { comment: "Firm support for deep stretches. They don't compress at all under my weight.", rating: 5, userIdx: 36, productIdx: 209 },
  { comment: "No weird chemical smell like the cheap ones. Very high quality finish.", rating: 4, userIdx: 12, productIdx: 209 },
  { comment: "Look beautiful in my home studio. Definitely worth the extra few dollars.", rating: 5, userIdx: 48, productIdx: 209 },

  // 210: Wilson NCAA Final Four Official Basketball
  { comment: "The composite leather feels amazing. It has the perfect amount of grip for indoor courts.", rating: 5, userIdx: 12, productIdx: 210 },
  { comment: "Best indoor ball I've owned. It holds air perfectly and the bounce is very consistent.", rating: 5, userIdx: 34, productIdx: 210 },
  { comment: "Great quality for the price. You can really feel the difference during ball handling drills.", rating: 4, userIdx: 8, productIdx: 210 },
  { comment: "Official NCAA quality. It needs a little breaking in, but then it's perfect.", rating: 5, userIdx: 29, productIdx: 210 },
  { comment: "Excellent grip even when your hands get sweaty. A must-have for serious players.", rating: 4, userIdx: 45, productIdx: 210 },

  // 211: Adidas FIFA World Cup 26 Training Ball
  { comment: "Great training ball. It has a nice weight and the flight trajectory is very stable.", rating: 5, userIdx: 22, productIdx: 211 },
  { comment: "Durable enough for daily practice on grass. The design looks even better in person.", rating: 5, userIdx: 7, productIdx: 211 },
  { comment: "Perfect for kids' practice sessions. It holds its shape well even after heavy use.", rating: 4, userIdx: 15, productIdx: 211 },
  { comment: "Good air retention. I only have to pump it up once every few weeks.", rating: 4, userIdx: 41, productIdx: 211 },
  { comment: "Excellent value. It feels much more expensive than a standard training ball.", rating: 5, userIdx: 3, productIdx: 211 },

  // 212: Spalding NBA Street Outdoor Basketball
  { comment: "The best ball for concrete courts. The rubber cover is incredibly tough.", rating: 5, userIdx: 19, productIdx: 212 },
  { comment: "Deep channels make it easy to grip for crossovers. Perfect for streetball.", rating: 4, userIdx: 48, productIdx: 212 },
  { comment: "I've been using this on asphalt for months and the pebbles are still there.", rating: 5, userIdx: 10, productIdx: 212 },
  { comment: "Great bounce for an outdoor ball. Very reliable and classic Spalding feel.", rating: 5, userIdx: 33, productIdx: 212 },
  { comment: "Good budget option for the park. It can take a beating and keep going.", rating: 4, userIdx: 26, productIdx: 212 },

  // 213: Wilson NFL Super Grip Football
  { comment: "The 'Super Grip' name isn't a lie. It's so easy to spiral this ball.", rating: 5, userIdx: 5, productIdx: 213 },
  { comment: "Perfect size and weight for recreational games. The laces feel very professional.", rating: 5, userIdx: 27, productIdx: 213 },
  { comment: "Great for teaching kids how to throw. It doesn't get slippery in the rain.", rating: 4, userIdx: 38, productIdx: 213 },
  { comment: "High-quality composite material. It feels very close to the official leather ball.", rating: 4, userIdx: 14, productIdx: 213 },
  { comment: "Sturdy construction. We use it every weekend and it still looks new.", rating: 5, userIdx: 49, productIdx: 213 },

  // 214: Molten V5M5000 Flistatec Volleyball
  { comment: "The gold standard for indoor volleyball. The Flistatec tech really improves control.", rating: 5, userIdx: 1, productIdx: 214 },
  { comment: "Best touch of any ball I've played with. Very soft on the arms during receives.", rating: 5, userIdx: 42, productIdx: 214 },
  { comment: "Flight is very predictable, which is great for setting. Worth every penny.", rating: 5, userIdx: 11, productIdx: 214 },
  { comment: "Professional quality. If you play competitively, this is the ball you want.", rating: 4, userIdx: 30, productIdx: 214 },
  { comment: "Great grip for overhand serves. The visibility of the pattern is excellent.", rating: 5, userIdx: 24, productIdx: 214 },

  // 215: Rawlings Official MLB Baseball
  { comment: "Nothing beats the smell and feel of real leather. Great for autographs too.", rating: 5, userIdx: 36, productIdx: 215 },
  { comment: "Perfectly weighted. You can tell it's an official MLB ball by the stitching.", rating: 5, userIdx: 9, productIdx: 215 },
  { comment: "Authentic feel. Used it for a catch and it performs exactly as expected.", rating: 4, userIdx: 21, productIdx: 215 },
  { comment: "The team logo is crisp and clear. Looks great in my display case.", rating: 5, userIdx: 44, productIdx: 215 },
  { comment: "A classic. High quality construction that stands up to hard hits.", rating: 4, userIdx: 13, productIdx: 215 },

  // 216: Babolat Pure Drive Tennis Racquet
  { comment: "Incredible power and spin. My serves have improved significantly with this.", rating: 5, userIdx: 31, productIdx: 216 },
  { comment: "The most versatile racquet out there. Great for baseline players.", rating: 5, userIdx: 6, productIdx: 216 },
  { comment: "Beautiful design and great feel. It's very stable even on off-center hits.", rating: 4, userIdx: 40, productIdx: 216 },
  { comment: "Pricey since it comes unstrung, but it's a professional-grade tool.", rating: 4, userIdx: 17, productIdx: 216 },
  { comment: "Classic Pure Drive feel. Lots of 'pop' and very maneuverable at the net.", rating: 5, userIdx: 47, productIdx: 216 },

  // 217: Franklin Sports NHL Kids Hockey Set
  { comment: "Perfect for my 6-year-old. The sticks are lightweight and the ball is safe.", rating: 5, userIdx: 2, productIdx: 217 },
  { comment: "Great value for a two-stick set. We've had hours of fun in the driveway.", rating: 5, userIdx: 28, productIdx: 217 },
  { comment: "The low-bounce ball is a great inclusion. Sticks are surprisingly durable.", rating: 4, userIdx: 39, productIdx: 217 },
  { comment: "Easy for kids to handle. Perfect introduction to the game of hockey.", rating: 5, userIdx: 20, productIdx: 217 },
  { comment: "A bit short for older kids, but for the intended age range, it's perfect.", rating: 4, userIdx: 35, productIdx: 217 },

  // 218: Everlast Pro Style Training Boxing Gloves
  { comment: "Good wrist support and padding. Great for heavy bag workouts.", rating: 4, userIdx: 23, productIdx: 218 },
  { comment: "The antimicrobial lining really helps with the smell. Very comfortable fit.", rating: 5, userIdx: 43, productIdx: 218 },
  { comment: "Perfect beginner gloves. They offer good protection without being too bulky.", rating: 5, userIdx: 16, productIdx: 218 },
  { comment: "Durable synthetic leather. I've used them for months and no tears yet.", rating: 4, userIdx: 32, productIdx: 218 },
  { comment: "Great value for the price. Excellent for fitness boxing classes.", rating: 5, userIdx: 46, productIdx: 218 },

  // 219: Wilson NCAA Championship Tennis Balls
  { comment: "Consistent bounce and very durable. They last longer than other brands.", rating: 5, userIdx: 4, productIdx: 219 },
  { comment: "The standard for a reason. Great performance on both hard and clay courts.", rating: 5, userIdx: 37, productIdx: 219 },
  { comment: "Good value in the 3-ball can. Felt stays fluffy for several matches.", rating: 4, userIdx: 25, productIdx: 219 },
  { comment: "Excellent visibility. Perfect for high-intensity training sessions.", rating: 5, userIdx: 18, productIdx: 219 },
  { comment: "Reliable pressure and speed. I always keep a few cans in my bag.", rating: 4, userIdx: 0, productIdx: 219 },

  // 220: Giro Fixture MIPS Adult Dirt Cycling Helmet
  { comment: "The MIPS technology gives me great peace of mind. Very comfortable for long trail rides.", rating: 5, userIdx: 11, productIdx: 220 },
  { comment: "Excellent ventilation. My head stays cool even during steep climbs in the sun.", rating: 5, userIdx: 29, productIdx: 220 },
  { comment: "The fit is easily adjustable with the rear dial. Solid construction and looks aggressive.", rating: 4, userIdx: 40, productIdx: 220 },
  { comment: "Great value for a MIPS helmet. The visor is a nice touch for blocking the sun.", rating: 5, userIdx: 6, productIdx: 220 },
  { comment: "Fits perfectly on my larger head. Lightweight enough that I barely notice it's there.", rating: 4, userIdx: 24, productIdx: 220 },

  // 221: Garmin Edge 530 GPS Cycling Computer
  { comment: "The mapping features are incredibly detailed. I never get lost on new trails anymore.", rating: 5, userIdx: 33, productIdx: 221 },
  { comment: "The battery life is outstanding. Easily lasts through my longest weekend rides.", rating: 5, userIdx: 15, productIdx: 221 },
  { comment: "Syncs perfectly with my heart rate monitor and power meter. Data nerd's dream.", rating: 4, userIdx: 49, productIdx: 221 },
  { comment: "The climb pro feature is a game changer for pacing myself on long ascents.", rating: 5, userIdx: 2, productIdx: 221 },
  { comment: "Buttons are responsive even with full-finger gloves on. Very reliable device.", rating: 4, userIdx: 26, productIdx: 221 },

  // 222: Shimano PD-M520 SPD Pedals
  { comment: "The absolute standard for SPD pedals. Indestructible and very easy to clip into.", rating: 5, userIdx: 20, productIdx: 222 },
  { comment: "They shed mud better than any other pedal I've used. Perfect for cyclocross.", rating: 5, userIdx: 47, productIdx: 222 },
  { comment: "Adjustable tension is great for beginners. I started loose and tightened them over time.", rating: 4, userIdx: 13, productIdx: 222 },
  { comment: "Incredible value for the price. These will likely outlast the bike they are on.", rating: 5, userIdx: 32, productIdx: 222 },
  { comment: "Solid engagement and very little maintenance required. A classic for a reason.", rating: 4, userIdx: 9, productIdx: 222 },

  // 223: RockBros Bike Phone Front Frame Bag
  { comment: "The touch screen works perfectly through the plastic. Very handy for following GPS.", rating: 5, userIdx: 34, productIdx: 223 },
  { comment: "Surprisingly waterproof! My phone stayed completely dry during a sudden downpour.", rating: 5, userIdx: 4, productIdx: 223 },
  { comment: "Fits my iPhone Pro Max easily with room for keys and a spare inner tube.", rating: 4, userIdx: 17, productIdx: 223 },
  { comment: "The sun visor actually helps a lot with screen glare during midday rides.", rating: 4, userIdx: 42, productIdx: 223 },
  { comment: "Stays secure on the frame and doesn't wobble. Excellent budget accessory.", rating: 5, userIdx: 25, productIdx: 223 },

  // 224: Schwinn High Timber Mountain Bike
  { comment: "A solid entry-level mountain bike. Great for light trails and neighborhood riding.", rating: 4, userIdx: 38, productIdx: 224 },
  { comment: "The gear changes are smooth for a bike at this price point. Very happy so far.", rating: 4, userIdx: 23, productIdx: 224 },
  { comment: "Sturdy frame and decent suspension. It handles bumpy paths much better than a road bike.", rating: 5, userIdx: 46, productIdx: 224 },
  { comment: "Relatively easy to assemble out of the box. Great value for someone starting out.", rating: 4, userIdx: 16, productIdx: 224 },
  { comment: "The brakes are responsive. It's a heavy bike, but it feels very durable and safe.", rating: 4, userIdx: 43, productIdx: 224 },

  // 225: Kryptonite Evolution Mini-7 U-Lock
  { comment: "Built like a tank. I feel much safer leaving my bike locked up in the city now.", rating: 5, userIdx: 35, productIdx: 225 },
  { comment: "The included cable is perfect for securing the front wheel. Very versatile set.", rating: 5, userIdx: 27, productIdx: 225 },
  { comment: "Small enough to fit in my back pocket or mount easily to the frame. Not too heavy.", rating: 4, userIdx: 36, productIdx: 225 },
  { comment: "The lock mechanism is very smooth and doesn't jam. High quality steel.", rating: 5, userIdx: 12, productIdx: 225 },
  { comment: "Trusted brand for a reason. Registration for the anti-theft protection was easy.", rating: 4, userIdx: 48, productIdx: 225 },

  // 226: Wahoo Fitness KICKR CORE Smart Trainer
  { comment: "The most realistic ride feel I've experienced indoors. Zwift integration is flawless.", rating: 5, userIdx: 14, productIdx: 226 },
  { comment: "Very quiet operation. My family can't even hear it in the next room while I train.", rating: 5, userIdx: 32, productIdx: 226 },
  { comment: "The power accuracy is spot on compared to my on-bike power meter. Great tool.", rating: 5, userIdx: 7, productIdx: 226 },
  { comment: "Setup was straightforward. It has completely transformed my winter training routine.", rating: 4, userIdx: 21, productIdx: 226 },
  { comment: "Solid build, no rocking even during high-wattage sprints. Worth the investment.", rating: 5, userIdx: 45, productIdx: 226 },

  // 227: Vibrelli Bike Floor Pump with Gauge
  { comment: "The valve head is genius. No more switching parts between Presta and Schrader.", rating: 5, userIdx: 3, productIdx: 227 },
  { comment: "Pumps quickly and the gauge is large and very easy to read while standing.", rating: 5, userIdx: 28, productIdx: 227 },
  { comment: "Very stable base. It feels high quality and makes inflation effortless.", rating: 4, userIdx: 19, productIdx: 227 },
  { comment: "The glueless patches included are a nice bonus. Very reliable workshop pump.", rating: 5, userIdx: 41, productIdx: 227 },
  { comment: "Long hose allows me to pump tires while the bike is still on the repair stand.", rating: 4, userIdx: 10, productIdx: 227 },

  // 228: Castelli Men's Entrata V Bib Shorts
  { comment: "The Kiss Air2 pad is incredibly comfortable even after 4 hours in the saddle.", rating: 5, userIdx: 33, productIdx: 228 },
  { comment: "Classic Castelli quality. The compression is just right and the fabric is very breathable.", rating: 5, userIdx: 15, productIdx: 228 },
  { comment: "The leg grippers stay in place perfectly without being too tight. True to size.", rating: 4, userIdx: 49, productIdx: 228 },
  { comment: "Great moisture management. They dry very quickly during mid-ride stops.", rating: 5, userIdx: 2, productIdx: 228 },
  { comment: "Excellent bib straps, they don't dig into the shoulders at all. Highly recommended.", rating: 4, userIdx: 26, productIdx: 228 },

  // 229: CamelBak M.U.L.E. Hydration Pack
  { comment: "The 3L capacity is perfect for long mountain bike epics. The bite valve is the best.", rating: 5, userIdx: 8, productIdx: 229 },
  { comment: "Plenty of room for tools, a spare jacket, and snacks. Very well organized.", rating: 5, userIdx: 37, productIdx: 229 },
  { comment: "The magnetic tube trap is so convenient; the hose just snaps back into place.", rating: 4, userIdx: 14, productIdx: 229 },
  { comment: "Very comfortable harness system. It doesn't bounce around on technical descents.", rating: 5, userIdx: 22, productIdx: 229 },
  { comment: "Durable fabric that survives scrapes against branches. A classic for a reason.", rating: 4, userIdx: 30, productIdx: 229 },

  // 230: Coleman Sundome Camping Tent - 4 Person
  { comment: "Super easy to set up even for a beginner. Stayed perfectly dry during a light rain.", rating: 5, userIdx: 12, productIdx: 230 },
  { comment: "Great ventilation thanks to the large windows. Perfect for summer camping trips.", rating: 4, userIdx: 34, productIdx: 230 },
  { comment: "Fits two adults and two kids comfortably. The door zipper is very smooth and sturdy.", rating: 5, userIdx: 7, productIdx: 230 },
  { comment: "Amazing value for the price. It's lightweight and packs down into a small carry bag.", rating: 5, userIdx: 21, productIdx: 230 },
  { comment: "The ground vent really helps with airflow. A bit tight for 4 adults, but ideal for a small family.", rating: 4, userIdx: 45, productIdx: 230 },

  // 231: Coleman Tabletop 2-in-1 Grill/Stove
  { comment: "The best of both worlds. I can boil coffee on one side and cook bacon on the other.", rating: 5, userIdx: 3, productIdx: 231 },
  { comment: "Very powerful burners. It handles wind quite well and is very easy to clean after use.", rating: 5, userIdx: 28, productIdx: 231 },
  { comment: "Compact design that fits perfectly on a picnic table. Great for tailgating too.", rating: 4, userIdx: 19, productIdx: 231 },
  { comment: "Solid construction. The ignition is reliable and the flame control is very precise.", rating: 5, userIdx: 41, productIdx: 231 },
  { comment: "A bit heavy to carry far, but for car camping, it's the perfect cooking station.", rating: 4, userIdx: 10, productIdx: 231 },

  // 232: Petzl TIKKA Core Rechargeable Headlamp
  { comment: "The rechargeable battery is a game changer. No more carrying spare AAAs everywhere.", rating: 5, userIdx: 33, productIdx: 232 },
  { comment: "Very bright and the beam is nice and wide. Perfect for setting up camp in the dark.", rating: 5, userIdx: 15, productIdx: 232 },
  { comment: "Lightweight and the headband is very comfortable for long night hikes.", rating: 4, userIdx: 49, productIdx: 232 },
  { comment: "The red light mode is great for preserving night vision and not annoying others.", rating: 5, userIdx: 2, productIdx: 232 },
  { comment: "Typical Petzl quality. Durable, simple to operate, and very reliable battery life.", rating: 4, userIdx: 26, productIdx: 232 },

  // 233: LifeStraw Personal Water Filter
  { comment: "An absolute essential for any hiking kit. It's so light you don't even notice it.", rating: 5, userIdx: 8, productIdx: 233 },
  { comment: "Gives great peace of mind when drinking from streams. The water tastes totally clean.", rating: 5, userIdx: 37, productIdx: 233 },
  { comment: "Tested it on a 3-day trek and worked perfectly. Very easy to use and maintain.", rating: 4, userIdx: 14, productIdx: 233 },
  { comment: "Every emergency bag should have one. Incredible technology for a very low price.", rating: 5, userIdx: 22, productIdx: 233 },
  { comment: "Great for ultralight backpacking. It's saved me from carrying liters of extra water.", rating: 4, userIdx: 30, productIdx: 233 },

  // 234: Marmot Trestles Elite Eco 20 Sleeping Bag
  { comment: "Kept me warm even when the temperature dropped near freezing. Very cozy material.", rating: 5, userIdx: 44, productIdx: 234 },
  { comment: "I love that it's made from recycled materials. Marmot really knows how to make gear.", rating: 5, userIdx: 1, productIdx: 234 },
  { comment: "The second zipper at the top is great for ventilation if you get too warm at night.", rating: 4, userIdx: 18, productIdx: 234 },
  { comment: "Roomy enough for a side sleeper. It compresses down surprisingly well for a synthetic bag.", rating: 5, userIdx: 39, productIdx: 234 },
  { comment: "Excellent insulation and the hood fits perfectly to keep the heat in.", rating: 4, userIdx: 5, productIdx: 234 },

  // 235: ThermaRest Z Lite Sol Foam Mattress
  { comment: "Classic for a reason. It's indestructible and you never have to worry about punctures.", rating: 5, userIdx: 11, productIdx: 235 },
  { comment: "The silver coating really does reflect heat back to you. Much warmer than standard foam.", rating: 4, userIdx: 29, productIdx: 235 },
  { comment: "Takes two seconds to deploy. It also doubles as a great seat during trail breaks.", rating: 5, userIdx: 40, productIdx: 235 },
  { comment: "Ultralight and very reliable. Not as plush as air mats, but it will never fail you.", rating: 4, userIdx: 6, productIdx: 235 },
  { comment: "Perfect for fast and light trips. I use it as a standalone or under an air pad in winter.", rating: 5, userIdx: 24, productIdx: 235 },

  // 236: Stanley Classic Legendary Flask - 1.0L
  { comment: "This thing is a tank. Dropped it multiple times and it just has a few scratches.", rating: 5, userIdx: 20, productIdx: 236 },
  { comment: "Kept my coffee piping hot for an entire day of ice fishing. Truly legendary.", rating: 5, userIdx: 47, productIdx: 236 },
  { comment: "The lid works perfectly as a cup. It's completely leak-proof in my backpack.", rating: 4, userIdx: 13, productIdx: 236 },
  { comment: "Timeless design. It’s the same quality my grandfather used. Built to last a lifetime.", rating: 5, userIdx: 32, productIdx: 236 },
  { comment: "Heavy but worth the weight for the insulation performance. A true outdoor icon.", rating: 4, userIdx: 9, productIdx: 236 },

  // 237: Helinox Chair One Portable Chair
  { comment: "I can't believe how comfortable this is given how small it packs down. Incredible.", rating: 5, userIdx: 31, productIdx: 237 },
  { comment: "Worth every cent for the weight savings. It fits inside my daypack easily.", rating: 5, userIdx: 4, productIdx: 237 },
  { comment: "The shock-corded poles make assembly a breeze. Very stable on most surfaces.", rating: 4, userIdx: 17, productIdx: 237 },
  { comment: "Very durable fabric and frame. It's become my favorite piece of luxury camping gear.", rating: 5, userIdx: 42, productIdx: 237 },
  { comment: "A bit pricey for a chair, but the engineering and portability are unmatched.", rating: 4, userIdx: 25, productIdx: 237 },

  // 238: Osprey Atmos AG 65 Backpack
  { comment: "The Anti-Gravity suspension makes 40lbs feel like 20. Best pack I've ever owned.", rating: 5, userIdx: 38, productIdx: 238 },
  { comment: "The ventilation on the back panel is amazing. No more sweaty back on long climbs.", rating: 5, userIdx: 23, productIdx: 238 },
  { comment: "So many pockets and adjustment points. You can really dial in the perfect fit.", rating: 5, userIdx: 46, productIdx: 238 },
  { comment: "The integrated raincover saved my gear during a storm. Very well-thought-out design.", rating: 4, userIdx: 16, productIdx: 238 },
  { comment: "Expensive but the Osprey lifetime warranty makes it a safe long-term investment.", rating: 5, userIdx: 43, productIdx: 238 },

  // 239: Victorinox Swiss Army Huntsman
  { comment: "The perfect size for camping. The wood saw is surprisingly effective for small branches.", rating: 5, userIdx: 35, productIdx: 239 },
  { comment: "Standard Victorinox quality. Every tool is useful and the scissors are very sharp.", rating: 5, userIdx: 27, productIdx: 239 },
  { comment: "I carry this on every hike. It's the ultimate multi-tool for everyday tasks.", rating: 4, userIdx: 36, productIdx: 239 },
  { comment: "Durable and reliable. The blades stay sharp for a long time and are easy to hone.", rating: 5, userIdx: 12, productIdx: 239 },
  { comment: "A classic. Having a corkscrew and a bottle opener is essential for post-hike relaxing.", rating: 4, userIdx: 48, productIdx: 239 },

  // 240: Penn Pursuit IV Spinning Reel and Rod Combo
  { comment: "Great starter kit for saltwater. The rod is sensitive and the reel's drag is very smooth.", rating: 5, userIdx: 14, productIdx: 240 },
  { comment: "Penn quality never disappoints. Handled a 10lb striped bass with no issues at all.", rating: 5, userIdx: 32, productIdx: 240 },
  { comment: "The combo is well-balanced. Excellent value for both beginners and weekend anglers.", rating: 4, userIdx: 7, productIdx: 240 },
  { comment: "HT-100 drag system is legit. It stays cool and consistent during long runs.", rating: 5, userIdx: 21, productIdx: 240 },
  { comment: "A bit heavy for all-day casting, but the durability is top-notch for the price.", rating: 4, userIdx: 45, productIdx: 240 },

  // 241: Shimano Stradic FL Spinning Reel
  { comment: "The smoothest reel I've ever owned. The Hagane gear makes it feel incredibly solid.", rating: 5, userIdx: 3, productIdx: 241 },
  { comment: "Shimano outdid themselves with this one. Casting distance is improved and it's dead silent.", rating: 5, userIdx: 28, productIdx: 241 },
  { comment: "High performance in a compact body. Worth every penny for serious fisherman.", rating: 5, userIdx: 19, productIdx: 241 },
  { comment: "The waterproofing is excellent. I use it in salt and a quick rinse keeps it like new.", rating: 4, userIdx: 41, productIdx: 241 },
  { comment: "Beautiful design and perfect line lay. It’s a workhorse that feels like a luxury item.", rating: 5, userIdx: 10, productIdx: 241 },

  // 242: Abu Garcia Black Max Baitcast Reel
  { comment: "Best budget baitcaster on the market. Very easy to tune and stop the backlashes.", rating: 5, userIdx: 33, productIdx: 242 },
  { comment: "Small, light, and fits perfectly in the hand. Great for flipping and pitching jigs.", rating: 4, userIdx: 15, productIdx: 242 },
  { comment: "4 bearings are enough for a very smooth operation. Really impressed with the MagTrax brake.", rating: 5, userIdx: 49, productIdx: 242 },
  { comment: "Good entry-level reel. It takes some practice, but once set up, it's very reliable.", rating: 4, userIdx: 2, productIdx: 242 },
  { comment: "Excellent value. It performs just as well as reels that cost twice as much.", rating: 5, userIdx: 26, productIdx: 242 },

  // 243: Rapala Original Floater - Silver
  { comment: "A classic for a reason. The balsa wood action is unmatched by plastic lures.", rating: 5, userIdx: 8, productIdx: 243 },
  { comment: "Caught my personal best trout on this. It works in almost any water condition.", rating: 5, userIdx: 37, productIdx: 243 },
  { comment: "Simple but deadly. The wounded minnow shimmy is irresistible to predators.", rating: 4, userIdx: 14, productIdx: 243 },
  { comment: "Every tackle box needs a few of these. Great for topwater or shallow diving.", rating: 5, userIdx: 22, productIdx: 243 },
  { comment: "Lightweight, so you need light tackle to cast it far, but the action is perfect.", rating: 4, userIdx: 30, productIdx: 243 },

  // 244: Plano Guide Series Tackle Bag
  { comment: "The magnetic Dropzone is genius. I never lose my pliers or hooks anymore.", rating: 5, userIdx: 44, productIdx: 244 },
  { comment: "Tons of storage and the included utility boxes are high quality. Very organized.", rating: 5, userIdx: 1, productIdx: 244 },
  { comment: "Rugged material that stands up to sun and salt. The zippers are very heavy duty.", rating: 4, userIdx: 18, productIdx: 244 },
  { comment: "Great size for a day on the boat. It stays put and doesn't slide around the deck.", rating: 5, userIdx: 39, productIdx: 244 },
  { comment: "The molded base keeps everything dry even if there's water on the floor.", rating: 4, userIdx: 5, productIdx: 244 },

  // 245: Garmin Striker Vivid 4cv Fishfinder
  { comment: "The color palettes make it so much easier to distinguish fish from structure.", rating: 5, userIdx: 11, productIdx: 245 },
  { comment: "Perfect size for my kayak. The GPS is very sensitive and accurate.", rating: 4, userIdx: 29, productIdx: 245 },
  { comment: "ClearVü scanning provides amazing detail of what's directly under the boat.", rating: 5, userIdx: 40, productIdx: 245 },
  { comment: "Installation was a breeze. Very intuitive interface even for non-techy people.", rating: 5, userIdx: 6, productIdx: 245 },
  { comment: "Great value fishfinder. It has all the features you actually need without the fluff.", rating: 4, userIdx: 24, productIdx: 245 },

  // 246: KastKing SuperPower Braided Line
  { comment: "Incredible strength for such a small diameter. I can fit way more line on my spool.", rating: 5, userIdx: 20, productIdx: 246 },
  { comment: "Zero stretch means you feel every single nibble. Great for deep water fishing.", rating: 5, userIdx: 47, productIdx: 246 },
  { comment: "Very abrasion resistant. I've pulled it through rocks and logs with no fraying.", rating: 4, userIdx: 13, productIdx: 246 },
  { comment: "It casts like a dream and doesn't hold memory. No more wind knots!", rating: 5, userIdx: 32, productIdx: 246 },
  { comment: "Best bang for your buck in braided line. Reliable and strong.", rating: 4, userIdx: 9, productIdx: 246 },

  // 247: Ugly Stik GX2 Three Piece Spinning Rod
  { comment: "The ultimate travel rod. It fits in my carry-on and performs like a one-piece.", rating: 5, userIdx: 31, productIdx: 247 },
  { comment: "Indestructible as always. The Clear Tip design is great for seeing light bites.", rating: 5, userIdx: 4, productIdx: 247 },
  { comment: "Perfect for backpacking. It’s tough enough to handle larger fish than you’d expect.", rating: 4, userIdx: 17, productIdx: 247 },
  { comment: "Great sensitivity and the guides are very durable. My go-to for road trips.", rating: 5, userIdx: 42, productIdx: 247 },
  { comment: "A bit stiff for very light lures, but a great all-around versatile rod.", rating: 4, userIdx: 25, productIdx: 247 },

  // 248: Berkley PowerBait Power Worms
  { comment: "The scent really works. Fish hold on longer, giving you more time to set the hook.", rating: 5, userIdx: 38, productIdx: 248 },
  { comment: "Classic bass lure. The tail action is great even with a slow retrieve.", rating: 5, userIdx: 23, productIdx: 248 },
  { comment: "Reliable and affordable. I always have a pack of these in my bag.", rating: 4, userIdx: 46, productIdx: 248 },
  { comment: "They are durable enough to catch multiple fish on a single worm.", rating: 5, userIdx: 16, productIdx: 248 },
  { comment: "The rib design seems to hold the scent well. A staple for soft plastic fishing.", rating: 4, userIdx: 43, productIdx: 248 },

  // 249: Gerber Gear Magniplier Saltwater Pliers
  { comment: "The best pliers for saltwater. The offset design is perfect for hook removal.", rating: 5, userIdx: 35, productIdx: 249 },
  { comment: "Corrosion resistance is excellent. Still look brand new after a season on the ocean.", rating: 5, userIdx: 27, productIdx: 249 },
  { comment: "Carbide cutters slice through braid like butter. Very ergonomic grip.", rating: 4, userIdx: 36, productIdx: 249 },
  { comment: "Lightweight but very strong. The finger choil provides great control.", rating: 5, userIdx: 12, productIdx: 249 },
  { comment: "Expensive for pliers, but they are built to last a lifetime in harsh environments.", rating: 4, userIdx: 48, productIdx: 249 },

  // 250: LEGO Icons Bouquet of Roses
  { comment: "A beautiful building experience. They look so realistic on my dining table and never wither.", rating: 5, userIdx: 14, productIdx: 250 },
  { comment: "The perfect gift for someone who loves flowers but lacks a green thumb. Very elegant.", rating: 5, userIdx: 32, productIdx: 250 },
  { comment: "The different stages of bloom are a clever touch. The baby's breath adds a nice delicate feel.", rating: 4, userIdx: 7, productIdx: 250 },
  { comment: "Typical LEGO quality. Clear instructions and the final result is a stunning piece of decor.", rating: 5, userIdx: 21, productIdx: 250 },
  { comment: "Looks great from a distance, though some of the stem connections are a bit visible up close.", rating: 4, userIdx: 45, productIdx: 250 },

  // 251: Barbie Dreamhouse 2023
  { comment: "The slide is massive! My daughter spends hours playing with all the different rooms.", rating: 5, userIdx: 3, productIdx: 251 },
  { comment: "Assembly took a while, but the instructions were clear. The attention to detail is amazing.", rating: 5, userIdx: 28, productIdx: 251 },
  { comment: "So many accessories included. It really allows for endless storytelling possibilities.", rating: 4, userIdx: 19, productIdx: 251 },
  { comment: "The elevator and the pet areas are a huge hit. It's the ultimate gift for any Barbie fan.", rating: 5, userIdx: 41, productIdx: 251 },
  { comment: "It takes up quite a bit of space, but seeing the joy it brings makes it worth every penny.", rating: 4, userIdx: 10, productIdx: 251 },

  // 252: Hot Wheels 50-Car Pack Set
  { comment: "Incredible value for money. There's a great variety of cars with no duplicates in my box.", rating: 5, userIdx: 33, productIdx: 252 },
  { comment: "Perfect for party favors or as a huge starter collection. Each car is individually wrapped.", rating: 5, userIdx: 15, productIdx: 252 },
  { comment: "The quality of the die-cast is as good as ever. My kids love racing them on their tracks.", rating: 4, userIdx: 49, productIdx: 252 },
  { comment: "A dream come true for any little car enthusiast. The storage box is also quite handy.", rating: 5, userIdx: 2, productIdx: 252 },
  { comment: "Classic Hot Wheels. Durable and fast. A few generic fantasy cars, but mostly cool models.", rating: 4, userIdx: 26, productIdx: 252 },

  // 253: Nerf Elite 2.0 Commander RD-6
  { comment: "Reliable and fast. The rotating drum works perfectly and rarely jams.", rating: 5, userIdx: 8, productIdx: 253 },
  { comment: "Great range and accuracy for a smaller blaster. The tactical rails are a fun addition.", rating: 4, userIdx: 37, productIdx: 253 },
  { comment: "Simple to use even for younger kids. Slam fire mode is great for backyard battles.", rating: 5, userIdx: 14, productIdx: 253 },
  { comment: "Solid build quality for the price. It feels sturdy in the hand and shoots quite far.", rating: 4, userIdx: 22, productIdx: 253 },
  { comment: "Includes plenty of darts, but you'll always want more. Very fun for office wars too.", rating: 5, userIdx: 30, productIdx: 253 },

  // 254: Fisher-Price Laugh & Learn Smart Stages Puppy
  { comment: "So soft and the songs are actually quite catchy. My toddler loves hugging him.", rating: 5, userIdx: 44, productIdx: 254 },
  { comment: "The Smart Stages technology is brilliant. It keeps the toy relevant as my baby grows.", rating: 5, userIdx: 1, productIdx: 254 },
  { comment: "Very educational. It helps with colors, body parts, and the alphabet in a fun way.", rating: 4, userIdx: 18, productIdx: 254 },
  { comment: "Durable enough to survive being dropped and dragged around. A classic nursery staple.", rating: 5, userIdx: 39, productIdx: 254 },
  { comment: "The heart lights up and captures his attention immediately. Great for early learning.", rating: 4, userIdx: 5, productIdx: 254 },

  // 255: Play-Doh Kitchen Creations Magical Mixer
  { comment: "The mixer action is very satisfying for the kids. They love making 'cupcakes' for us.", rating: 5, userIdx: 11, productIdx: 255 },
  { comment: "The stampers and molds create really detailed shapes. Keeps them busy for a long time.", rating: 4, userIdx: 29, productIdx: 255 },
  { comment: "Great variety of colors included. The tools are easy for little hands to operate.", rating: 5, userIdx: 40, productIdx: 255 },
  { comment: "A fun twist on traditional Play-Doh play. It really sparks their culinary imagination.", rating: 4, userIdx: 6, productIdx: 255 },
  { comment: "Easy to clean up as long as you don't let it dry inside the mixer. Very cute set.", rating: 5, userIdx: 24, productIdx: 255 },

  // 256: VTech KidiZoom Duo DX Camera
  { comment: "A real camera that is tough enough for a 5-year-old. The dual lens for selfies is a hit.", rating: 5, userIdx: 20, productIdx: 256 },
  { comment: "The games and photo effects are very entertaining. It's more than just a camera.", rating: 4, userIdx: 47, productIdx: 256 },
  { comment: "Battery life is decent. It’s a great way to let them explore photography safely.", rating: 5, userIdx: 13, productIdx: 256 },
  { comment: "The built-in MP3 player is a nice bonus for car trips. The menus are easy to navigate.", rating: 4, userIdx: 32, productIdx: 256 },
  { comment: "The photo quality isn't amazing, but for a kid's toy, it's more than sufficient.", rating: 4, userIdx: 9, productIdx: 256 },

  // 257: Crayola Inspiration Art Case
  { comment: "Everything an aspiring artist needs in one sturdy case. Very organized and portable.", rating: 5, userIdx: 31, productIdx: 257 },
  { comment: "The selection of colors in crayons and markers is fantastic. High quality as expected.", rating: 5, userIdx: 4, productIdx: 257 },
  { comment: "The case keeps everything from getting lost. Perfect for taking to grandma's house.", rating: 4, userIdx: 17, productIdx: 257 },
  { comment: "Washable markers are a lifesaver for my furniture. This set will last a long time.", rating: 5, userIdx: 42, productIdx: 257 },
  { comment: "A great value gift. It looks very impressive when opened with all the colors lined up.", rating: 4, userIdx: 25, productIdx: 257 },

  // 258: Squishmallows Wendy the Frog
  { comment: "The softest plush I've ever felt. Wendy is absolutely adorable and huggable.", rating: 5, userIdx: 38, productIdx: 258 },
  { comment: "My daughter sleeps with it every night. The quality of the fabric is top-tier.", rating: 5, userIdx: 23, productIdx: 258 },
  { comment: "It really does feel like a marshmallow. Authentic and high quality Squishmallow.", rating: 5, userIdx: 46, productIdx: 258 },
  { comment: "Perfect size for travel or lounging on the couch. The color is vibrant and fun.", rating: 4, userIdx: 16, productIdx: 258 },
  { comment: "A bit pricey for a plush, but the 'squish' factor is unlike anything else on the market.", rating: 5, userIdx: 43, productIdx: 258 },

  // 259: Monopoly Classic Board Game
  { comment: "The classic version we all know and love. A must-have for family game nights.", rating: 5, userIdx: 35, productIdx: 259 },
  { comment: "Good quality board and pieces. It's the same game I remember from my childhood.", rating: 4, userIdx: 27, productIdx: 259 },
  { comment: "Great for teaching kids about money and strategy, even if it causes some arguments!", rating: 5, userIdx: 36, productIdx: 259 },
  { comment: "Timeless fun. The tokens are iconic and the gameplay is as engaging as ever.", rating: 4, userIdx: 12, productIdx: 259 },
  { comment: "Simple, effective, and provides hours of entertainment. Every home should have one.", rating: 5, userIdx: 48, productIdx: 259 },

  // 260: Philips Avent Natural Response Baby Bottle Set
  { comment: "Glass bottles are so much better for hygiene. The nipple design really helped with the transition from breastfeeding.", rating: 5, userIdx: 12, productIdx: 260 },
  { comment: "Very sturdy and easy to clean. I love that they don't leak even when the baby isn't actively sucking.", rating: 5, userIdx: 48, productIdx: 260 },
  { comment: "The natural response nipple is great, it actually waits for the baby. No more choking on fast flows.", rating: 4, userIdx: 23, productIdx: 260 },
  { comment: "A bit heavier than plastic, but worth it for the peace of mind. High quality glass.", rating: 5, userIdx: 5, productIdx: 260 },
  { comment: "Best bottles we've tried so far. They feel very premium and the wide neck makes filling easy.", rating: 4, userIdx: 31, productIdx: 260 },

  // 261: Ergobaby Omni 360 All-in-One Baby Carrier
  { comment: "Life-saving for chores! The lumbar support is a game changer for my back pain.", rating: 5, userIdx: 41, productIdx: 261 },
  { comment: "Very versatile. My baby loves facing out to see the world, and it's so easy to adjust.", rating: 4, userIdx: 10, productIdx: 261 },
  { comment: "The fabric is breathable and high quality. It feels very secure and well-made.", rating: 5, userIdx: 28, productIdx: 261 },
  { comment: "A bit bulky to put on by yourself at first, but you get used to it quickly. Very comfortable.", rating: 5, userIdx: 3, productIdx: 261 },
  { comment: "Perfect for long walks. My toddler still fits comfortably and weight is distributed well.", rating: 4, userIdx: 19, productIdx: 261 },

  // 262: Chicco Alfa Lite Lightweight Travel Playard
  { comment: "Unbelievably light! We take it to every hotel stay. It literally snaps open in seconds.", rating: 5, userIdx: 33, productIdx: 262 },
  { comment: "The zip-off fabric is amazing for cleaning up accidents. Very smart design.", rating: 5, userIdx: 15, productIdx: 262 },
  { comment: "Compact enough to fit in any trunk. The mattress is surprisingly padded for a travel cot.", rating: 4, userIdx: 49, productIdx: 262 },
  { comment: "Great for small apartments too. We use it as a safe secondary play area.", rating: 5, userIdx: 2, productIdx: 262 },
  { comment: "Sturdy and safe. It doesn't wobble at all despite being so lightweight.", rating: 4, userIdx: 26, productIdx: 262 },

  // 263: Babybjörn Bouncer Bliss
  { comment: "The only place my baby will actually sit contentedly. The natural rock is so soothing.", rating: 5, userIdx: 8, productIdx: 263 },
  { comment: "Beautiful design and the fabric is so soft. Folds completely flat for storage.", rating: 5, userIdx: 37, productIdx: 263 },
  { comment: "No batteries, no noise, just perfect ergonomic support. Worth every penny.", rating: 4, userIdx: 14, productIdx: 263 },
  { comment: "Expensive but has great resale value. It really helped our baby develop better balance.", rating: 5, userIdx: 22, productIdx: 263 },
  { comment: "Easy to wash the cover. It’s a minimalist's dream—functional and stylish.", rating: 4, userIdx: 30, productIdx: 263 },

  // 264: Fisher-Price Deluxe Kick 'n Play Piano Gym
  { comment: "This gym is iconic for a reason. The songs are so catchy and the baby loves the lights.", rating: 5, userIdx: 44, productIdx: 264 },
  { comment: "Keeps him entertained for ages during tummy time. The piano is a huge hit.", rating: 5, userIdx: 1, productIdx: 264 },
  { comment: "Very durable. We've used it daily for months and it still looks brand new.", rating: 4, userIdx: 18, productIdx: 264 },
  { comment: "Love that the piano can be detached and used separately later on. Great value.", rating: 5, userIdx: 39, productIdx: 264 },
  { comment: "Colorful and engaging. It’s the best developmental toy we bought for the first year.", rating: 4, userIdx: 7, productIdx: 264 },

  // 265: Pampers Pure Protection Baby Diapers
  { comment: "Zero rashes since we switched. They are incredibly soft and feel much more natural.", rating: 5, userIdx: 11, productIdx: 265 },
  { comment: "The wetness indicator is so helpful. Great leak protection for a plant-based diaper.", rating: 5, userIdx: 29, productIdx: 265 },
  { comment: "Pricey compared to standard diapers but worth it for sensitive skin.", rating: 4, userIdx: 40, productIdx: 265 },
  { comment: "No chemical smell at all. They fit perfectly and stay put even when full.", rating: 5, userIdx: 6, productIdx: 265 },
  { comment: "Highly absorbent. We use them overnight without any issues or leaks.", rating: 4, userIdx: 24, productIdx: 265 },

  // 266: Braun ThermoScan 7 Ear Thermometer
  { comment: "Super fast and very accurate. The pre-warmed tip makes it much more comfortable for the baby.", rating: 5, userIdx: 20, productIdx: 266 },
  { comment: "The age precision feature is great because a 'fever' varies by age. Very intuitive.", rating: 5, userIdx: 47, productIdx: 266 },
  { comment: "Used by my doctor so I trust the readings. Essential for any medicine cabinet.", rating: 4, userIdx: 13, productIdx: 266 },
  { comment: "The backlight changes color based on the reading—red is an instant warning.", rating: 5, userIdx: 32, productIdx: 266 },
  { comment: "A bit expensive, but the reliability is worth it when you're worried about a sick child.", rating: 4, userIdx: 9, productIdx: 266 },

  // 267: Hape Pound and Tap Bench
  { comment: "Beautiful wooden toy. My toddler loves hitting the balls and hearing the chime.", rating: 5, userIdx: 34, productIdx: 267 },
  { comment: "The xylophone sounds lovely. It's great that it can be pulled out and played alone.", rating: 4, userIdx: 4, productIdx: 267 },
  { comment: "Excellent for motor skills. Very sturdy and can withstand a lot of rough play.", rating: 5, userIdx: 17, productIdx: 267 },
  { comment: "Non-toxic paint and smooth edges. Hape always delivers great quality toys.", rating: 5, userIdx: 42, productIdx: 267 },
  { comment: "Classic toy that grows with them. Simple, musical, and very engaging.", rating: 4, userIdx: 25, productIdx: 267 },

  // 268: Nanit Pro Smart Baby Monitor
  { comment: "The overhead view is crystal clear. I love the sleep analytics and notifications.", rating: 5, userIdx: 38, productIdx: 268 },
  { comment: "The breathing tracking gives us so much peace of mind at night. High-tech and reliable.", rating: 5, userIdx: 27, productIdx: 268 },
  { comment: "Expensive but the app is fantastic. Being able to check in from anywhere is great.", rating: 5, userIdx: 46, productIdx: 268 },
  { comment: "The stand is very stable and safe. Two-way audio is clear and helpful.", rating: 4, userIdx: 16, productIdx: 268 },
  { comment: "Setup was simple. It’s the best monitor on the market if you want data and safety.", rating: 5, userIdx: 43, productIdx: 268 },

  // 269: Ubbi Steel Diaper Pail
  { comment: "Does not smell at all! The steel really locks in odors better than the plastic ones.", rating: 5, userIdx: 35, productIdx: 269 },
  { comment: "I love that I can use regular trash bags. Saves so much money in the long run.", rating: 5, userIdx: 21, productIdx: 269 },
  { comment: "Sleek and doesn't look like a diaper bin. The sliding lid is very convenient.", rating: 4, userIdx: 36, productIdx: 269 },
  { comment: "The child lock is a great feature. Very durable and easy to keep clean.", rating: 4, userIdx: 45, productIdx: 269 },
  { comment: "Compact but holds a decent amount. Definitely an essential for the nursery.", rating: 5, userIdx: 0, productIdx: 269 },

  // 270: Funko Pop! Star Wars: Darth Vader (Classic)
  { comment: "The dark side never looked so good. Essential for any Star Wars shelf.", rating: 5, userIdx: 14, productIdx: 270 },
  { comment: "Classic mold and the box arrived in mint condition. Perfect for in-box collectors.", rating: 5, userIdx: 32, productIdx: 270 },
  { comment: "It's Vader, what else is there to say? Simple but iconic design.", rating: 4, userIdx: 7, productIdx: 270 },
  { comment: "Great detail on the helmet and cape. A sturdy little figure for the price.", rating: 5, userIdx: 21, productIdx: 270 },
  { comment: "Good quality, though I wish the base was a bit more detailed.", rating: 4, userIdx: 45, productIdx: 270 },

  // 271: Pokémon TCG: Scarlet & Violet—151 Elite Trainer Box
  { comment: "The nostalgia is real! Pulling the original starters felt like being a kid again.", rating: 5, userIdx: 3, productIdx: 271 },
  { comment: "The Snorlax promo card is beautiful. Excellent set of accessories for players.", rating: 5, userIdx: 28, productIdx: 271 },
  { comment: "Managed to pull a rare Charizard! The 151 set is definitely worth the hype.", rating: 5, userIdx: 19, productIdx: 271 },
  { comment: "Great way to start the new series. The card sleeves included are very high quality.", rating: 4, userIdx: 41, productIdx: 271 },
  { comment: "A bit hard to find in stock, but a fantastic collection for any Pokémon fan.", rating: 4, userIdx: 10, productIdx: 271 },

  // 272: Hot Wheels Premium Car Culture: Modern Classics
  { comment: "The Real Riders rubber tires make a huge difference. These feel very premium.", rating: 5, userIdx: 33, productIdx: 272 },
  { comment: "Love the metal-on-metal construction. The paint jobs are flawless on these models.", rating: 5, userIdx: 15, productIdx: 272 },
  { comment: "Excellent selection of 90s icons. A must-have for adult die-cast collectors.", rating: 5, userIdx: 49, productIdx: 272 },
  { comment: "Highly detailed and very accurate to the real cars. Great for display.", rating: 4, userIdx: 2, productIdx: 272 },
  { comment: "Slightly more expensive than standard packs, but the quality justifies it.", rating: 4, userIdx: 26, productIdx: 272 },

  // 273: 2026 Panini FIFA World Cup Starter Bundle
  { comment: "Can't wait for the World Cup! The album is high quality and the stickers look great.", rating: 5, userIdx: 8, productIdx: 273 },
  { comment: "The perfect way to start the collection. My son is already swapping doubles.", rating: 5, userIdx: 37, productIdx: 273 },
  { comment: "Panini never fails with the World Cup sets. The 2026 design is very modern.", rating: 4, userIdx: 14, productIdx: 273 },
  { comment: "Good mix of players in the initial packs. A fun tradition for every tournament.", rating: 5, userIdx: 22, productIdx: 273 },
  { comment: "Classic collecting fun. It’s a bit of a challenge to fill it, but that's the point!", rating: 4, userIdx: 30, productIdx: 273 },

  // 274: LEGO Star Wars Millennium Falcon - 75257
  { comment: "The detail on the exterior is incredible. Much better than previous versions of this scale.", rating: 5, userIdx: 44, productIdx: 274 },
  { comment: "Building it was a blast. The internal play areas are very well thought out.", rating: 5, userIdx: 1, productIdx: 274 },
  { comment: "Sturdy enough to play with, but looks amazing as a display piece. Iconic ship.", rating: 5, userIdx: 18, productIdx: 274 },
  { comment: "The minifigure selection is great, especially Lando and Chewbacca.", rating: 4, userIdx: 39, productIdx: 274 },
  { comment: "A complex build but very rewarding. Every Star Wars fan needs a Falcon.", rating: 5, userIdx: 5, productIdx: 274 },

  // 275: NECA Back to the Future: Marty McFly
  { comment: "The likeness to Michael J. Fox is impressive for this scale. Great articulation.", rating: 5, userIdx: 11, productIdx: 275 },
  { comment: "The accessories are perfect. The tiny camcorder and skateboard are so nostalgic.", rating: 5, userIdx: 29, productIdx: 275 },
  { comment: "NECA always nails the details. The '85 outfit looks exactly like the movie.", rating: 4, userIdx: 40, productIdx: 275 },
  { comment: "Great for dynamic posing. The backpack fits perfectly on his shoulders.", rating: 5, userIdx: 6, productIdx: 275 },
  { comment: "The joints were a bit stiff at first, but loosened up nicely. High-tier collectible.", rating: 4, userIdx: 24, productIdx: 275 },

  // 276: Magic: The Gathering - LOTR Commander Deck
  { comment: "Middle-earth meets Magic perfectly. The deck is well-balanced and fun to play.", rating: 5, userIdx: 20, productIdx: 276 },
  { comment: "The art on these cards is stunning. A must for Tolkien fans and MTG players alike.", rating: 5, userIdx: 47, productIdx: 276 },
  { comment: "Ready to play right out of the box. The display commander is a nice bonus.", rating: 4, userIdx: 13, productIdx: 276 },
  { comment: "Great flavor and mechanics. It really feels like you're leading a Fellowship.", rating: 5, userIdx: 32, productIdx: 276 },
  { comment: "Excellent value for the cards included. The collector booster sample was a nice touch.", rating: 4, userIdx: 9, productIdx: 276 },

  // 277: Tamashii Nations - S.H.Figuarts Super Saiyan God Goku
  { comment: "The best Goku figure in my collection. The paint on the blue hair is radiant.", rating: 5, userIdx: 34, productIdx: 277 },
  { comment: "Articulation is unmatched. You can recreate every fight scene with ease.", rating: 5, userIdx: 4, productIdx: 277 },
  { comment: "The facial expressions are spot on. High-quality premium feel to the plastic.", rating: 4, userIdx: 17, productIdx: 277 },
  { comment: "Tamashii Nations never disappoints with the Dragon Ball line. Worth the price.", rating: 5, userIdx: 42, productIdx: 277 },
  { comment: "Very stable even in complex poses. The shading on the gi is very well done.", rating: 4, userIdx: 25, productIdx: 277 },

  // 278: Marvel Legends Series Iron Man Mark III
  { comment: "The metallic finish is beautiful. It looks like real armor on the shelf.", rating: 5, userIdx: 38, productIdx: 278 },
  { comment: "Classic Mark III design. The blast effects make for great action photography.", rating: 5, userIdx: 23, productIdx: 278 },
  { comment: "Very articulate for a 6-inch figure. The extra hands are easy to swap.", rating: 4, userIdx: 46, productIdx: 278 },
  { comment: "A great tribute to the movie that started the MCU. Durable and well-made.", rating: 4, userIdx: 16, productIdx: 278 },
  { comment: "Excellent sculpt. Captures the look of Tony Stark's early tech perfectly.", rating: 5, userIdx: 43, productIdx: 278 },

  // 279: Funko Pop! Star Wars: The Child
  { comment: "Absolutely adorable! The pose is perfect and it looks great next to Mando.", rating: 5, userIdx: 35, productIdx: 279 },
  { comment: "Every Grogu fan needs this. The big eyes are just too cute to resist.", rating: 5, userIdx: 27, productIdx: 279 },
  { comment: "Classic Pop! style but with great character accuracy. Arrived in a protector.", rating: 4, userIdx: 36, productIdx: 279 },
  { comment: "Small but full of personality. High-quality vinyl and paint work.", rating: 5, userIdx: 12, productIdx: 279 },
  { comment: "A simple and sweet addition to my Star Wars collection. Everyone loves it.", rating: 4, userIdx: 48, productIdx: 279 },

  // 280: Harry Potter and the Philosopher's Stone
  { comment: "A timeless masterpiece. Reading this again as an adult is just as magical as the first time.", rating: 5, userIdx: 12, productIdx: 280 },
  { comment: "The book that started it all. J.K. Rowling's world-building is simply unparalleled.", rating: 5, userIdx: 45, productIdx: 280 },
  { comment: "Perfect for children and adults alike. A fast-paced, imaginative, and heartwarming story.", rating: 5, userIdx: 7, productIdx: 280 },
  { comment: "Classic cover art and great paper quality. Every home library needs a copy of this.", rating: 4, userIdx: 21, productIdx: 280 },
  { comment: "An enchanting start to the series. It's impossible not to fall in love with Hogwarts.", rating: 5, userIdx: 33, productIdx: 280 },

  // 281: Atomic Habits by James Clear
  { comment: "The most practical self-help book I've ever read. The '1% better' rule actually works.", rating: 5, userIdx: 3, productIdx: 281 },
  { comment: "Clear, concise, and easy to apply. It has completely changed how I approach my daily routine.", rating: 5, userIdx: 28, productIdx: 281 },
  { comment: "Great insights into human behavior. A must-read for anyone looking to improve themselves.", rating: 4, userIdx: 19, productIdx: 281 },
  { comment: "Life-changing strategies. The focus on systems rather than goals is a total game changer.", rating: 5, userIdx: 41, productIdx: 281 },
  { comment: "Very well written and engaging. I've recommended this to all my friends and colleagues.", rating: 4, userIdx: 10, productIdx: 281 },

  // 282: The Alchemist by Paulo Coelho
  { comment: "A beautiful, poetic journey about following your dreams. It truly speaks to the soul.", rating: 5, userIdx: 33, productIdx: 282 },
  { comment: "So many profound life lessons packed into a simple story. It's a book I'll read many times.", rating: 5, userIdx: 15, productIdx: 282 },
  { comment: "Magical and inspiring. It reminds you that the universe conspires to help you achieve your legend.", rating: 4, userIdx: 49, productIdx: 282 },
  { comment: "A quick read but it stays with you for a long time. Simple language but deep meaning.", rating: 5, userIdx: 2, productIdx: 282 },
  { comment: "A bit philosophical for some, but I found it very uplifting and full of wisdom.", rating: 4, userIdx: 26, productIdx: 282 },

  // 283: The Subtle Art of Not Giving a F*ck
  { comment: "A refreshing take on self-improvement. No sugar-coating, just honest and raw advice.", rating: 5, userIdx: 8, productIdx: 283 },
  { comment: "Mark Manson’s writing style is hilarious and thought-provoking. Very different from usual fluff.", rating: 4, userIdx: 37, productIdx: 283 },
  { comment: "It helps you prioritize what actually matters in life. Extremely helpful for overthinkers.", rating: 5, userIdx: 14, productIdx: 283 },
  { comment: "Brutally honest. It challenges you to accept your flaws and find happiness in the struggle.", rating: 4, userIdx: 22, productIdx: 283 },
  { comment: "A bit repetitive at times, but the core message is very powerful and necessary today.", rating: 3, userIdx: 30, productIdx: 283 },

  // 284: It Ends with Us by Colleen Hoover
  { comment: "I'm still crying. This story is so emotional and handles difficult topics with such grace.", rating: 5, userIdx: 44, productIdx: 284 },
  { comment: "Powerful and heartbreaking. Lily's strength is inspiring. Colleen Hoover at her best.", rating: 5, userIdx: 1, productIdx: 284 },
  { comment: "A very important read about the complexities of love and abuse. It really makes you think.", rating: 4, userIdx: 18, productIdx: 284 },
  { comment: "I couldn't put it down. The characters feel so real and their pain is palpable.", rating: 5, userIdx: 39, productIdx: 284 },
  { comment: "A beautiful but tough journey. It’s a book that definitely leaves a mark on your heart.", rating: 4, userIdx: 5, productIdx: 284 },

  // 285: The Psychology of Money
  { comment: "Essential reading for anyone. It’s less about math and more about the human mind.", rating: 5, userIdx: 11, productIdx: 285 },
  { comment: "Brilliant short stories that explain complex financial concepts in a very relatable way.", rating: 5, userIdx: 29, productIdx: 285 },
  { comment: "It changed my perspective on wealth and time. Very easy to read and highly informative.", rating: 4, userIdx: 40, productIdx: 285 },
  { comment: "Morgan Housel is a genius. This is the only finance book you'll ever truly need.", rating: 5, userIdx: 6, productIdx: 285 },
  { comment: "Great insights on how to stay wealthy, not just get wealthy. Practical and wise.", rating: 4, userIdx: 24, productIdx: 285 },

  // 286: The Fellowship of the Ring
  { comment: "The peak of high fantasy. Tolkien’s attention to detail and lore is unmatched.", rating: 5, userIdx: 20, productIdx: 286 },
  { comment: "A slow burn but incredibly rewarding. The journey through Middle-earth is epic.", rating: 5, userIdx: 47, productIdx: 286 },
  { comment: "Beautifully written. The bond between the members of the fellowship is so moving.", rating: 4, userIdx: 13, productIdx: 286 },
  { comment: "A classic adventure that defines the genre. A must-read for any fantasy lover.", rating: 5, userIdx: 32, productIdx: 286 },
  { comment: "The language is rich and immersive. It feels like reading actual history.", rating: 4, userIdx: 9, productIdx: 286 },

  // 287: Think and Grow Rich
  { comment: "A classic for a reason. The principles of success outlined here are timeless.", rating: 5, userIdx: 34, productIdx: 287 },
  { comment: "A bit dated in its examples, but the core message about mindset is still 100% relevant.", rating: 4, userIdx: 4, productIdx: 287 },
  { comment: "It’s all about the power of thought. Very motivational and structured for success.", rating: 5, userIdx: 17, productIdx: 287 },
  { comment: "A staple in personal development. It requires focused reading but offers great rewards.", rating: 4, userIdx: 42, productIdx: 287 },
  { comment: "Great for building a success-oriented mindset. Definitely worth the read.", rating: 4, userIdx: 25, productIdx: 287 },

  // 288: Lessons in Chemistry
  { comment: "Elizabeth Zott is my new favorite character! Witty, smart, and completely unapologetic.", rating: 5, userIdx: 38, productIdx: 288 },
  { comment: "A wonderful blend of humor, science, and social commentary. Truly inspiring story.", rating: 5, userIdx: 23, productIdx: 288 },
  { comment: "I loved the 1960s setting and the challenges she overcomes. Very well written.", rating: 4, userIdx: 46, productIdx: 288 },
  { comment: "A fresh and unique perspective on a woman's role in science and society. A joy to read.", rating: 5, userIdx: 16, productIdx: 288 },
  { comment: "Heartwarming and funny. Bonnie Garmus has a fantastic and sharp voice.", rating: 4, userIdx: 43, productIdx: 288 },

  // 289: The 48 Laws of Power
  { comment: "A fascinating look into history and human nature. It's a very eye-opening read.", rating: 5, userIdx: 35, productIdx: 289 },
  { comment: "Cunning and strategic. Even if you don't use the laws, it's good to know them for defense.", rating: 4, userIdx: 21, productIdx: 289 },
  { comment: "Robert Greene is a master researcher. The historical anecdotes are the best part.", rating: 5, userIdx: 36, productIdx: 289 },
  { comment: "A bit dark at times, but undeniably insightful about how power dynamics work.", rating: 4, userIdx: 12, productIdx: 289 },
  { comment: "Very comprehensive. It’s like a textbook for understanding social and political maneuvers.", rating: 4, userIdx: 48, productIdx: 289 },

  // 290: Cricut Explore 4 - Smart Cutting Machine (Seashell)
  { comment: "The Seashell finish is gorgeous! It cuts through vinyl like butter and the speed is incredible.", rating: 5, userIdx: 12, productIdx: 290 },
  { comment: "A major upgrade from my older model. The Design Space integration is smooth and very intuitive.", rating: 5, userIdx: 34, productIdx: 290 },
  { comment: "Perfect for my small business. It handles intricate cardstock designs with amazing precision.", rating: 5, userIdx: 7, productIdx: 290 },
  { comment: "The 2x faster mode saves me so much time on large batches. Definitely worth the investment.", rating: 4, userIdx: 21, productIdx: 290 },
  { comment: "A bit loud when cutting at high speeds, but the results are professional every single time.", rating: 4, userIdx: 45, productIdx: 290 },

  // 291: Winsor & Newton Cotman Watercolor Paint Set
  { comment: "The transparency and lightfastness of these paints are excellent for a student-grade set.", rating: 5, userIdx: 3, productIdx: 291 },
  { comment: "Love the compact studio box. The mixing palette is very well designed and easy to clean.", rating: 5, userIdx: 28, productIdx: 291 },
  { comment: "Great range of colors. They blend beautifully without getting muddy. Perfect for travel.", rating: 4, userIdx: 19, productIdx: 291 },
  { comment: "The included brush is actually high quality, unlike most sets. Very impressed with the value.", rating: 5, userIdx: 41, productIdx: 291 },
  { comment: "Classic Winsor & Newton quality. The pans are easy to swap out once they run out.", rating: 4, userIdx: 10, productIdx: 291 },

  // 292: Prismacolor Premier Colored Pencils - 72 Count
  { comment: "The soft core makes blending colors so easy. The pigments are rich and very vibrant.", rating: 5, userIdx: 33, productIdx: 292 },
  { comment: "Best pencils for shading. They lay down color so smoothly on almost any art paper.", rating: 5, userIdx: 15, productIdx: 292 },
  { comment: "The color selection in the 72-pack is perfect for professional portraits and landscapes.", rating: 4, userIdx: 49, productIdx: 292 },
  { comment: "So buttery! Just be careful when sharpening as the cores are very delicate and soft.", rating: 5, userIdx: 2, productIdx: 292 },
  { comment: "A staple for every artist. These pencils bring my drawings to life with incredible depth.", rating: 4, userIdx: 26, productIdx: 292 },

  // 293: Singer Sterling Edition Heavy Duty 4432
  { comment: "This machine is a beast! It goes through multiple layers of denim without any struggle.", rating: 5, userIdx: 8, productIdx: 293 },
  { comment: "The extra accessory kit in this edition is fantastic. The walking foot alone is a huge plus.", rating: 5, userIdx: 37, productIdx: 293 },
  { comment: "Very fast stitching speed. The metal frame makes it feel very stable even at full power.", rating: 4, userIdx: 14, productIdx: 293 },
  { comment: "The one-step buttonhole is a lifesaver for my garment projects. Very professional finish.", rating: 5, userIdx: 22, productIdx: 293 },
  { comment: "A bit noisy because of the powerful motor, but the durability is unmatched at this price.", rating: 4, userIdx: 30, productIdx: 293 },

  // 294: Posca Paint Markers - Set of 8 (PC-5M)
  { comment: "Posca markers are the best. The coverage is completely opaque and the colors are so bright.", rating: 5, userIdx: 44, productIdx: 294 },
  { comment: "I use these on wood and glass and they never disappoint. The paint dries quickly and matte.", rating: 5, userIdx: 1, productIdx: 294 },
  { comment: "The reversible tip is a great feature for extending the life of the marker. Very versatile.", rating: 4, userIdx: 18, productIdx: 294 },
  { comment: "Excellent for DIY sneaker customizing. The ink doesn't bleed and stays vibrant for a long time.", rating: 5, userIdx: 39, productIdx: 294 },
  { comment: "Great starter set with all the essential colors. Perfect for street art or home decor projects.", rating: 4, userIdx: 5, productIdx: 294 },

  // 295: Bob Ross Basic Painting Set
  { comment: "Everything you need to start your first landscape. The liquid white is the magic ingredient!", rating: 5, userIdx: 11, productIdx: 295 },
  { comment: "High-quality oil paints that hold their shape perfectly for the 'wet-on-wet' technique.", rating: 5, userIdx: 29, productIdx: 295 },
  { comment: "The landscape brush is very sturdy. I felt like Bob himself while painting my happy trees.", rating: 4, userIdx: 40, productIdx: 295 },
  { comment: "A wonderful gift for fans of the show. It makes oil painting feel very accessible and fun.", rating: 5, userIdx: 6, productIdx: 295 },
  { comment: "The knife is perfect for mountains. I wish it included a few more colors, but it's a great start.", rating: 4, userIdx: 24, productIdx: 295 },

  // 296: Speedball Screen Printing Starter Kit
  { comment: "Great introduction to screen printing. The instructions are very clear for a beginner.", rating: 5, userIdx: 20, productIdx: 296 },
  { comment: "The photo emulsion worked perfectly on my first try. My custom t-shirts look professional!", rating: 5, userIdx: 47, productIdx: 296 },
  { comment: "The frame is solid and the squeegee is the right firmness. High quality inks included.", rating: 4, userIdx: 13, productIdx: 296 },
  { comment: "Very fun weekend project. It’s rewarding to see your own designs printed on fabric.", rating: 5, userIdx: 32, productIdx: 296 },
  { comment: "Takes some patience to master the timing, but the kit gives you all the tools to succeed.", rating: 4, userIdx: 9, productIdx: 296 },

  // 297: Dremel 3100-1/15 Rotary Tool Kit
  { comment: "Indispensable for my hobby projects. The variable speed allows for very delicate engraving.", rating: 5, userIdx: 34, productIdx: 297 },
  { comment: "Dremel is the gold standard for rotary tools. It’s powerful, ergonomic, and very reliable.", rating: 5, userIdx: 4, productIdx: 297 },
  { comment: "The 15 accessories cover almost everything I need for sanding and polishing small parts.", rating: 4, userIdx: 17, productIdx: 297 },
  { comment: "Compact and easy to handle. It doesn't vibrate too much even at higher RPMs.", rating: 5, userIdx: 42, productIdx: 297 },
  { comment: "Great for DIY home repairs too. The quick-change system for bits is very convenient.", rating: 4, userIdx: 25, productIdx: 297 },

  // 298: Staedtler Triplus Fineliner Pens - 36 Color Set
  { comment: "I love the triangular shape; my hand doesn't get tired even after hours of adult coloring.", rating: 5, userIdx: 38, productIdx: 298 },
  { comment: "The 'Dry Safe' claim is true! I left one uncapped overnight and it still works perfectly.", rating: 5, userIdx: 23, productIdx: 298 },
  { comment: "Beautiful range of colors. The fine tip is perfect for detailed work and bullet journaling.", rating: 4, userIdx: 46, productIdx: 298 },
  { comment: "The stand-up box is genius. It keeps all the pens organized on my desk while I work.", rating: 5, userIdx: 16, productIdx: 298 },
  { comment: "Great for school and professional use. The ink doesn't bleed through most papers.", rating: 4, userIdx: 43, productIdx: 298 },

  // 299: Mod Podge Water-Based Sealer (16 oz)
  { comment: "The holy grail of crafting! I use it for everything from decoupage to sealing puzzles.", rating: 5, userIdx: 35, productIdx: 299 },
  { comment: "Dries clear and matte as promised. It’s very easy to apply and the clean-up is a breeze.", rating: 5, userIdx: 27, productIdx: 299 },
  { comment: "A little goes a long way. This 16oz jar has lasted me through dozens of small projects.", rating: 4, userIdx: 36, productIdx: 299 },
  { comment: "Best glue for fabric-to-wood projects. It holds strong and provides a great protective finish.", rating: 5, userIdx: 12, productIdx: 299 },
  { comment: "Non-toxic and doesn't have a strong smell, which is great for working indoors with kids.", rating: 4, userIdx: 48, productIdx: 299 },

  // 300: Logitech MX Master 3S Wireless Mouse
  { comment: "The quiet clicks are a game changer for open offices. Best ergonomic mouse I've ever used.", rating: 5, userIdx: 14, productIdx: 300 },
  { comment: "MagSpeed scrolling is addictive. It tracks perfectly even on my glass desk without a mat.", rating: 5, userIdx: 32, productIdx: 300 },
  { comment: "The horizontal scroll wheel is a lifesaver for large Excel sheets and video editing.", rating: 5, userIdx: 8, productIdx: 300 },
  { comment: "Very comfortable for long workdays. The Logi Options+ software allows for great customization.", rating: 4, userIdx: 21, productIdx: 300 },
  { comment: "Premium feel and great battery life. It's expensive but definitely boosts productivity.", rating: 5, userIdx: 45, productIdx: 300 },

  // 301: HP LaserJet Pro M15w Wireless Printer
  { comment: "Incredibly small for a laser printer. It fits perfectly in my bookshelf and prints very fast.", rating: 5, userIdx: 3, productIdx: 301 },
  { comment: "The HP Smart app makes printing from my iPhone seamless. Perfect for a home office.", rating: 4, userIdx: 28, productIdx: 301 },
  { comment: "Fast startup and crisp text quality. It’s exactly what I needed for basic document printing.", rating: 5, userIdx: 19, productIdx: 301 },
  { comment: "Setup was a bit tricky with the Wi-Fi, but once connected, it works like a charm.", rating: 4, userIdx: 41, productIdx: 301 },
  { comment: "Reliable and doesn't take up much space. Great value for a monochrome laser printer.", rating: 4, userIdx: 10, productIdx: 301 },

  // 302: Apple Magic Keyboard with Numeric Keypad
  { comment: "Typical Apple quality. Very slim, stable, and the battery lasts for months on a single charge.", rating: 5, userIdx: 33, productIdx: 302 },
  { comment: "The numeric keypad is essential for my accounting work. The typing feel is very tactile.", rating: 4, userIdx: 15, productIdx: 302 },
  { comment: "Pairs instantly with my Mac. The design is sleek and matches my desk setup perfectly.", rating: 5, userIdx: 49, productIdx: 302 },
  { comment: "The scissor mechanism is quiet and responsive. Much better than the older butterfly keys.", rating: 4, userIdx: 2, productIdx: 302 },
  { comment: "Expensive for a keyboard, but the build quality and wireless reliability are top-notch.", rating: 4, userIdx: 26, productIdx: 302 },

  // 303: Epson EcoTank ET-2810 All-in-One
  { comment: "I've printed hundreds of pages and the ink levels have barely moved. Truly economical.", rating: 5, userIdx: 11, productIdx: 303 },
  { comment: "Filling the tanks is surprisingly easy and mess-free. No more expensive cartridges!", rating: 5, userIdx: 37, productIdx: 303 },
  { comment: "Photo quality is decent for an office printer. The scanner works quickly and clearly.", rating: 4, userIdx: 14, productIdx: 303 },
  { comment: "Great for students or small businesses. The initial cost is high but you save a lot on ink.", rating: 5, userIdx: 22, productIdx: 303 },
  { comment: "The wireless connection is stable and the printing speed is adequate for home use.", rating: 4, userIdx: 30, productIdx: 303 },

  // 304: Western Digital 2TB My Passport
  { comment: "Compact and very fast transfer speeds. I use it to back up my entire laptop monthly.", rating: 5, userIdx: 44, productIdx: 304 },
  { comment: "The password protection gives me peace of mind when carrying sensitive work files.", rating: 5, userIdx: 1, productIdx: 304 },
  { comment: "Reliable storage. I've had several WD drives and they never seem to fail on me.", rating: 4, userIdx: 18, productIdx: 304 },
  { comment: "Slim enough to fit in my laptop bag pocket. Great for travelers and students.", rating: 5, userIdx: 39, productIdx: 304 },
  { comment: "Easy to set up on both Windows and Mac. High capacity in a very small form factor.", rating: 4, userIdx: 5, productIdx: 304 },

  // 305: Blue Yeti USB Microphone
  { comment: "The sound quality is professional grade. My podcast listeners noticed the difference immediately.", rating: 5, userIdx: 20, productIdx: 305 },
  { comment: "Very sturdy build and the gain control on the mic is super useful for streaming.", rating: 5, userIdx: 29, productIdx: 305 },
  { comment: "Plug and play simplicity. The four pickup patterns make it extremely versatile for any room.", rating: 4, userIdx: 40, productIdx: 305 },
  { comment: "Looks great on camera and the mute button is very responsive. The gold standard for USB mics.", rating: 5, userIdx: 6, productIdx: 305 },
  { comment: "A bit heavy and picks up a lot of background noise if you don't adjust the settings properly.", rating: 4, userIdx: 24, productIdx: 305 },

  // 306: Post-it Super Sticky Notes - Energy Boost
  { comment: "They really do stick better than the original ones. They stay put even on vertical surfaces.", rating: 5, userIdx: 13, productIdx: 306 },
  { comment: "The colors are so vibrant! I use them for color-coding my project board and they stand out.", rating: 5, userIdx: 47, productIdx: 306 },
  { comment: "Perfect for reminders on my monitor. They don't curl up or fall off after a few days.", rating: 4, userIdx: 32, productIdx: 306 },
  { comment: "A bit more expensive than generic brands, but the extra sticking power is worth it.", rating: 5, userIdx: 9, productIdx: 306 },
  { comment: "The Energy Boost colors actually make studying a bit more fun. Great quality paper.", rating: 4, userIdx: 17, productIdx: 306 },

  // 307: Logitech C920s HD Pro Webcam
  { comment: "The image quality is sharp and clear. The privacy shutter is a great added feature.", rating: 5, userIdx: 31, productIdx: 307 },
  { comment: "Auto-focus works perfectly even in low light. Much better than my laptop’s built-in camera.", rating: 5, userIdx: 4, productIdx: 307 },
  { comment: "The dual mics capture my voice clearly without needing an external headset for calls.", rating: 4, userIdx: 42, productIdx: 307 },
  { comment: "Classic webcam for a reason. Reliable, easy to mount, and works with every meeting app.", rating: 5, userIdx: 25, productIdx: 307 },
  { comment: "Good software support for adjustments. It’s a solid investment for professional video calls.", rating: 4, userIdx: 34, productIdx: 307 },

  // 308: Fellowes Powershred 79Ci Shredder
  { comment: "Truly jam-proof. I’ve fed it thick stacks and it just powers through without stopping.", rating: 5, userIdx: 38, productIdx: 308 },
  { comment: "Very quiet compared to my old shredder. It handles staples and credit cards easily too.", rating: 5, userIdx: 23, productIdx: 308 },
  { comment: "The safety sensor that stops the motor when hands touch the entry is a great feature.", rating: 5, userIdx: 46, productIdx: 308 },
  { comment: "Heavy-duty and reliable for a home office with lots of paperwork. Large bin capacity.", rating: 4, userIdx: 16, productIdx: 308 },
  { comment: "Expensive, but it's a high-quality machine that won't overheat after just a few minutes.", rating: 5, userIdx: 43, productIdx: 308 },

  // 309: Leitz TruSens Pet Carbon Filter
  { comment: "Noticeable difference in the air quality. It really helps eliminate dog odors in my office.", rating: 5, userIdx: 35, productIdx: 309 },
  { comment: "Easy to install and fits perfectly in my Z-2000. It captures a lot of pet dander.", rating: 5, userIdx: 27, productIdx: 309 },
  { comment: "The air feels much fresher. Essential if you work from home with pets nearby.", rating: 4, userIdx: 36, productIdx: 309 },
  { comment: "A bit pricey for a replacement filter, but the performance is superior to generic ones.", rating: 4, userIdx: 12, productIdx: 309 },
  { comment: "Keeps the office smelling clean even during the winter when windows are closed.", rating: 5, userIdx: 48, productIdx: 309 },

  // 310: Parker Jotter Ballpoint Pen
  { comment: "The classic 'click' is so satisfying. It's a timeless pen that looks much more expensive than it is.", rating: 5, userIdx: 12, productIdx: 310 },
  { comment: "Perfect weight and balance. I've used Jotters for years and the stainless steel finish is indestructible.", rating: 5, userIdx: 34, productIdx: 310 },
  { comment: "Sleek and professional for meetings. The ink flow is consistent and doesn't skip.", rating: 4, userIdx: 7, productIdx: 310 },
  { comment: "A bit slim for very long writing sessions, but perfect for quick notes and everyday carry.", rating: 4, userIdx: 21, productIdx: 310 },
  { comment: "Iconic design. It makes a great gift for students or colleagues entering the workforce.", rating: 5, userIdx: 45, productIdx: 310 },

  // 311: Moleskine Classic Notebook
  { comment: "The ivory paper is so easy on the eyes. It feels like a premium experience every time I open it.", rating: 5, userIdx: 3, productIdx: 311 },
  { comment: "Durable cover that survives being tossed in my bag daily. The expandable pocket is very handy.", rating: 4, userIdx: 28, productIdx: 311 },
  { comment: "The gold standard for notebooks. Simple, elegant, and the elastic closure keeps everything secure.", rating: 5, userIdx: 19, productIdx: 311 },
  { comment: "Paper is a bit thin for heavy fountain pen use, but perfect for ballpoints and pencils.", rating: 4, userIdx: 41, productIdx: 311 },
  { comment: "A bit pricey for a notebook, but the heritage and build quality make it worth it for me.", rating: 4, userIdx: 10, productIdx: 311 },

  // 312: Pilot G2 Premium Rolling Ball Gel Pens
  { comment: "I won't use any other pen. The G2 is incredibly smooth and the rubber grip is very comfortable.", rating: 5, userIdx: 33, productIdx: 312 },
  { comment: "Great value for a 12-pack. The blue ink is vibrant and dries relatively fast for a gel pen.", rating: 5, userIdx: 15, productIdx: 312 },
  { comment: "Reliable and long-lasting. I love that they are refillable so I don't have to throw away the barrels.", rating: 4, userIdx: 49, productIdx: 312 },
  { comment: "The 0.7mm tip is perfect for bold, clear writing. It never feels scratchy on the paper.", rating: 5, userIdx: 2, productIdx: 312 },
  { comment: "Best everyday pens for the office. They just work every single time without fail.", rating: 5, userIdx: 26, productIdx: 312 },

  // 313: Stabilo Boss Original Highlighters - Pastel
  { comment: "These colors are beautiful! Much better than the harsh neon ones for my study notes.", rating: 5, userIdx: 11, productIdx: 313 },
  { comment: "The pastel shades don't bleed through the thin pages of my textbooks. Very aesthetic.", rating: 5, userIdx: 37, productIdx: 313 },
  { comment: "Great desk set. The anti-dry-out tech is real—I often forget the cap off and they still work.", rating: 4, userIdx: 14, productIdx: 313 },
  { comment: "Perfect for bullet journaling. They add a nice touch of color without being overwhelming.", rating: 5, userIdx: 22, productIdx: 313 },
  { comment: "A few of the lighter colors are a bit too faint, but overall a fantastic set for students.", rating: 4, userIdx: 30, productIdx: 313 },

  // 314: Faber-Castell Grip 2011 Mechanical Pencil
  { comment: "The grip dots make it so comfortable to hold. My hand doesn't slip even during long exams.", rating: 5, userIdx: 44, productIdx: 314 },
  { comment: "Excellent build quality. The lead doesn't break easily and the twist-out eraser is very long.", rating: 5, userIdx: 1, productIdx: 314 },
  { comment: "Ergonomic triangular shape is a game changer. It feels very natural in the hand.", rating: 4, userIdx: 18, productIdx: 314 },
  { comment: "Stylish silver finish. It looks very modern and professional on my desk.", rating: 5, userIdx: 39, productIdx: 314 },
  { comment: "The 0.7mm lead is perfect for sketching and general writing. Very reliable mechanical pencil.", rating: 4, userIdx: 5, productIdx: 314 },

  // 315: Leuchtturm1917 A5 Softcover Notebook
  { comment: "Better than Moleskine for bullet journaling! The numbered pages and index are so useful.", rating: 5, userIdx: 20, productIdx: 315 },
  { comment: "The Emerald color is stunning. The paper quality is high and handles most pens well.", rating: 5, userIdx: 29, productIdx: 315 },
  { comment: "Softcover makes it very lightweight for carrying in my purse. Two bookmarks are a nice touch.", rating: 4, userIdx: 40, productIdx: 315 },
  { comment: "The dotted grid is subtle but provides perfect guidance for drawing layouts and charts.", rating: 5, userIdx: 6, productIdx: 315 },
  { comment: "Great flexibility and the expandable pocket is sturdy. My go-to for daily logging.", rating: 4, userIdx: 24, productIdx: 315 },

  // 316: Sharpie Permanent Markers - 24 Count
  { comment: "You can never have too many Sharpies. This assorted pack has every color you'll ever need.", rating: 5, userIdx: 13, productIdx: 316 },
  { comment: "Dries instantly and doesn't smudge. Truly permanent on almost every surface I've tried.", rating: 5, userIdx: 47, productIdx: 316 },
  { comment: "The fine point is precise enough for labeling but bold enough for posters.", rating: 4, userIdx: 32, productIdx: 316 },
  { comment: "Brilliant colors that stay vibrant for a long time. Essential for home and office organization.", rating: 5, userIdx: 9, productIdx: 316 },
  { comment: "Some of the darker colors look a bit similar, but the quality of the ink is unbeatable.", rating: 4, userIdx: 17, productIdx: 316 },

  // 317: Filofax Personal Organiser - Saffiano
  { comment: "The Saffiano finish is so elegant and easy to clean. It keeps my whole life organized.", rating: 5, userIdx: 31, productIdx: 317 },
  { comment: "Classic six-ring system allows for so much customization. I love adding my own inserts.", rating: 5, userIdx: 4, productIdx: 317 },
  { comment: "Sturdy construction and the snap closure is very secure. It fits perfectly in my bag.", rating: 4, userIdx: 42, productIdx: 317 },
  { comment: "Expensive but it's an investment that lasts for years. The cross-grain look is very chic.", rating: 5, userIdx: 25, productIdx: 317 },
  { comment: "The diary layout is clear and helpful. A must-have for anyone who prefers paper planning.", rating: 4, userIdx: 34, productIdx: 317 },

  // 318: Pentel Arts Aquash Water Brush Pens
  { comment: "Incredible for urban sketching. I don't have to carry a separate water jar anymore.", rating: 5, userIdx: 38, productIdx: 318 },
  { comment: "The flow is very easy to control by just squeezing the barrel. The nylon tips hold their shape.", rating: 5, userIdx: 23, productIdx: 318 },
  { comment: "Three different sizes in one pack is a great value. They work perfectly with my watercolor set.", rating: 4, userIdx: 46, productIdx: 318 },
  { comment: "Leak-proof so far! I keep them filled in my travel art kit without any issues.", rating: 5, userIdx: 16, productIdx: 318 },
  { comment: "A bit of a learning curve to get the water flow exactly right, but once you do, they are great.", rating: 4, userIdx: 43, productIdx: 318 },

  // 319: Uni-ball Eye UB-157 - 10 Colors
  { comment: "The ink flow is so smooth and consistent. These are my favorite pens for grading papers.", rating: 5, userIdx: 35, productIdx: 319 },
  { comment: "I love the ink window! I always know when I'm about to run out. The colors are very vibrant.", rating: 5, userIdx: 27, productIdx: 319 },
  { comment: "Waterproof and fade-resistant ink is a big plus for important documents and signatures.", rating: 4, userIdx: 36, productIdx: 319 },
  { comment: "Great variety of colors in the pack. The 0.7mm tip glides across the paper without scratching.", rating: 5, userIdx: 12, productIdx: 319 },
  { comment: "Reliable pens that last a long time. The grip is basic but the writing quality is superior.", rating: 4, userIdx: 48, productIdx: 319 },

  // 320: DeWalt 20V Max Cordless Drill / Driver Kit
  { comment: "DeWalt never disappoints. This drill is powerful yet compact enough for tight cabinet work.", rating: 5, userIdx: 14, productIdx: 320 },
  { comment: "Having two batteries in the kit is a life saver for longer projects. Charges very quickly.", rating: 5, userIdx: 32, productIdx: 320 },
  { comment: "The balance in the hand is perfect. It feels professional and the build quality is rugged.", rating: 4, userIdx: 7, productIdx: 320 },
  { comment: "Used it for a deck project and it drove screws all day without breaking a sweat. Great torque.", rating: 5, userIdx: 21, productIdx: 320 },
  { comment: "Solid entry into the 20V system. The LED light is bright and actually helps in dark corners.", rating: 4, userIdx: 45, productIdx: 320 },

  // 321: Bosch Professional 12V System Screwdriver
  { comment: "The short body makes this my go-to for assembly work. Surprisingly powerful for a 12V.", rating: 5, userIdx: 3, productIdx: 321 },
  { comment: "Perfect for overhead tasks. It's so lightweight that my arm doesn't get tired after an hour.", rating: 5, userIdx: 28, productIdx: 321 },
  { comment: "Professional quality in a small package. The 2-speed gearbox is very useful for precision.", rating: 4, userIdx: 19, productIdx: 321 },
  { comment: "Great battery life. I use it for electrical work and it fits perfectly in my tool pouch.", rating: 5, userIdx: 41, productIdx: 321 },
  { comment: "Bosch blue line is always reliable. It’s small but definitely has that 'pro' feel and durability.", rating: 4, userIdx: 10, productIdx: 321 },

  // 322: Craftsman 102-Piece Tool Kit
  { comment: "The perfect starter kit for a new homeowner. It has every basic tool you'll actually need.", rating: 5, userIdx: 33, productIdx: 322 },
  { comment: "The blow-molded case keeps everything organized. No more digging through a messy bag.", rating: 4, userIdx: 15, productIdx: 322 },
  { comment: "Good quality for the price. The sockets and wrenches feel solid and the finish is decent.", rating: 5, userIdx: 49, productIdx: 322 },
  { comment: "Used it for some basic car maintenance and it worked great. The ratchets are smooth.", rating: 4, userIdx: 2, productIdx: 322 },
  { comment: "Excellent variety. It’s my go-to kit for quick fixes around the house. Very portable.", rating: 5, userIdx: 26, productIdx: 322 },

  // 323: Black+Decker Dustbuster 20V Hand Vacuum
  { comment: "Suction is much stronger than I expected for a handheld. Great for cleaning up car crumbs.", rating: 5, userIdx: 11, productIdx: 323 },
  { comment: "The extendable crevice tool is genius. I can finally reach between the sofa cushions.", rating: 4, userIdx: 37, productIdx: 323 },
  { comment: "Battery lasts long enough to do a full sweep of the stairs. Easy to empty and clean.", rating: 5, userIdx: 14, productIdx: 323 },
  { comment: "The flip-up brush is very convenient for dusting off the blinds. Charges reasonably fast.", rating: 4, userIdx: 22, productIdx: 323 },
  { comment: "A bit loud, but it picks up everything. Much better than the older 12V versions.", rating: 4, userIdx: 30, productIdx: 323 },

  // 324: Makita 18V LXT Cordless Impact Driver
  { comment: "Makita is the king of ergonomics. The grip is so comfortable even for heavy-duty use.", rating: 5, userIdx: 44, productIdx: 324 },
  { comment: "This impact driver is a beast. Drove 3-inch lag bolts effortlessly. No kickback.", rating: 5, userIdx: 1, productIdx: 324 },
  { comment: "The variable speed trigger is very responsive. Great control for delicate tasks.", rating: 4, userIdx: 18, productIdx: 324 },
  { comment: "Reliable and tough. I’ve dropped it a few times on concrete and it still works perfectly.", rating: 5, userIdx: 39, productIdx: 324 },
  { comment: "Love the LXT battery system. The built-in LED stays on for a few seconds after use.", rating: 5, userIdx: 5, productIdx: 324 },

  // 325: Wera Kraftform Micro-Set/12 Sb 1
  { comment: "Best precision screwdrivers I've ever owned. The handles make spinning so fast and easy.", rating: 5, userIdx: 20, productIdx: 325 },
  { comment: "Essential for electronics repair. The tips fit perfectly and don't strip small screws.", rating: 5, userIdx: 29, productIdx: 325 },
  { comment: "Wera engineering is top-tier. The power zone allows for surprisingly high torque.", rating: 4, userIdx: 40, productIdx: 325 },
  { comment: "The pouch is very well made and keeps the set organized. Worth every penny for a pro.", rating: 5, userIdx: 6, productIdx: 325 },
  { comment: "High quality steel. I use them daily for fine mechanical work and they show zero wear.", rating: 5, userIdx: 24, productIdx: 325 },

  // 326: Knipex Plier Wrench 250mm
  { comment: "This tool is pure magic. It replaced an entire set of wrenches in my bag. Truly versatile.", rating: 5, userIdx: 13, productIdx: 326 },
  { comment: "The smooth jaws are perfect for chrome plumbing fixtures. Zero scratches or marks.", rating: 5, userIdx: 47, productIdx: 326 },
  { comment: "German engineering at its best. The adjustment mechanism is fast, secure, and precise.", rating: 5, userIdx: 32, productIdx: 326 },
  { comment: "It provides incredible gripping power. Once you use a Knipex, you can't go back to regular pliers.", rating: 5, userIdx: 9, productIdx: 326 },
  { comment: "Expensive but worth it. It’s the most used tool in my kit for both hex nuts and flat pieces.", rating: 4, userIdx: 17, productIdx: 326 },

  // 327: Dremel Lite 7760 Cordless Rotary Tool
  { comment: "Perfect for light DIY and crafting. Being cordless makes it so much easier to handle.", rating: 5, userIdx: 31, productIdx: 327 },
  { comment: "USB charging is very convenient. I use it for sanding 3D prints and it works great.", rating: 4, userIdx: 4, productIdx: 327 },
  { comment: "The 10-piece kit is a good start. Variable speed gives you the control you need for engraving.", rating: 5, userIdx: 42, productIdx: 327 },
  { comment: "Lightweight and quiet. Not for heavy cutting, but ideal for hobbyist work and detailing.", rating: 4, userIdx: 25, productIdx: 327 },
  { comment: "Great ergonomics. It feels like a large pen in the hand, making precision work easy.", rating: 4, userIdx: 34, productIdx: 327 },

  // 328: Perilogics Magnetic Tool Sheath
  { comment: "Fits my Leatherman Wave perfectly. The magnetic closure is much better than Velcro.", rating: 5, userIdx: 38, productIdx: 328 },
  { comment: "The reinforced belt clip is very secure. It doesn't move at all even when I'm working hard.", rating: 5, userIdx: 23, productIdx: 328 },
  { comment: "Rugged nylon material. I’ve been using it on a construction site and it’s holding up well.", rating: 4, userIdx: 46, productIdx: 328 },
  { comment: "Easy to open and close with one hand. Keeps my multi-tool safe and always accessible.", rating: 5, userIdx: 16, productIdx: 328 },
  { comment: "Good value for a replacement sheath. The magnets are strong and haven't failed once.", rating: 4, userIdx: 43, productIdx: 328 },

  // 329: Worx Landroid L 20V Robotic Mower
  { comment: "Set it and forget it! My lawn has never looked so consistently well-maintained.", rating: 5, userIdx: 35, productIdx: 329 },
  { comment: "The app control is fantastic. I can schedule mows and check status from anywhere.", rating: 5, userIdx: 27, productIdx: 329 },
  { comment: "Navigation is impressive, it handles the narrow corridors in my garden without getting stuck.", rating: 4, userIdx: 36, productIdx: 329 },
  { comment: "Installation took a few hours but it was straightforward. The battery system is very efficient.", rating: 5, userIdx: 12, productIdx: 329 },
  { comment: "Very quiet compared to a gas mower. My neighbors love that it works during the night.", rating: 5, userIdx: 48, productIdx: 329 },

  // 330: Apple Watch Series 10
  { comment: "The thinner design makes a huge difference in comfort. The larger display is stunning.", rating: 5, userIdx: 12, productIdx: 330 },
  { comment: "Best smartwatch on the market. The health features are incredibly accurate and reliable.", rating: 5, userIdx: 45, productIdx: 330 },
  { comment: "The charging is noticeably faster than my old Series 7. Love the new finishes.", rating: 5, userIdx: 8, productIdx: 330 },
  { comment: "A bit expensive, but the integration with the iPhone is unmatched. Essential for me.", rating: 4, userIdx: 21, productIdx: 330 },
  { comment: "Great for sleep tracking, though I still wish the battery lasted more than a full day.", rating: 4, userIdx: 33, productIdx: 330 },

  // 331: Samsung Galaxy Watch 7
  { comment: "The new BioActive sensor seems much more consistent during my high-intensity workouts.", rating: 5, userIdx: 3, productIdx: 331 },
  { comment: "Fast and responsive. Wear OS 5 runs very smoothly on this hardware. Great screen.", rating: 5, userIdx: 28, productIdx: 331 },
  { comment: "The AI health insights provide interesting tips I hadn't considered before. Very smart.", rating: 4, userIdx: 19, productIdx: 331 },
  { comment: "Battery life is decent, getting about two days easily. Fits comfortably on my wrist.", rating: 4, userIdx: 41, productIdx: 331 },
  { comment: "Beautiful AMOLED display. It's the best option for Android users right now.", rating: 5, userIdx: 10, productIdx: 331 },

  // 332: Fitbit Charge 6 Fitness Tracker
  { comment: "Exactly what I needed. Simple, lightweight, and the GPS is very accurate for my runs.", rating: 5, userIdx: 33, productIdx: 332 },
  { comment: "Love having Google Maps on my wrist without the bulk of a full smartwatch.", rating: 5, userIdx: 15, productIdx: 332 },
  { comment: "Great heart rate tracking and the battery lasts almost a full week. Very impressive.", rating: 4, userIdx: 49, productIdx: 332 },
  { comment: "Excellent sleep data. It's much more comfortable to wear to bed than a heavy watch.", rating: 5, userIdx: 2, productIdx: 332 },
  { comment: "The screen is a bit small for reading long notifications, but for fitness, it's perfect.", rating: 4, userIdx: 26, productIdx: 332 },

  // 333: Garmin Venu 3 Smartwatch
  { comment: "The AMOLED display is gorgeous. Finally, a Garmin that looks like a high-end watch.", rating: 5, userIdx: 8, productIdx: 333 },
  { comment: "Body Battery is a feature I can't live without now. It tells me exactly when to rest.", rating: 5, userIdx: 37, productIdx: 333 },
  { comment: "The built-in speaker for calls works surprisingly well. Very clear audio quality.", rating: 4, userIdx: 14, productIdx: 333 },
  { comment: "Best of both worlds: serious fitness tracking and great smart features. Long battery too.", rating: 5, userIdx: 22, productIdx: 333 },
  { comment: "Pricey compared to rivals, but the depth of health data Garmin provides is superior.", rating: 4, userIdx: 30, productIdx: 333 },

  // 334: Oura Ring Gen 4 - Horizon Silver
  { comment: "I hate wearing watches to sleep, so this ring is perfect. The sleep data is incredible.", rating: 5, userIdx: 44, productIdx: 334 },
  { comment: "So discreet and elegant. Most people think it's just a regular ring. Very high tech.", rating: 5, userIdx: 1, productIdx: 334 },
  { comment: "The stress tracking has helped me manage my work-life balance much better. 10/10.", rating: 5, userIdx: 18, productIdx: 334 },
  { comment: "Battery lasts about 5 days. The app is very well designed and easy to understand.", rating: 4, userIdx: 39, productIdx: 334 },
  { comment: "Sizing is crucial, make sure to get the sizing kit first. Otherwise, it's a flawless product.", rating: 4, userIdx: 5, productIdx: 334 },

  // 335: Xiaomi Smart Band 9
  { comment: "Unbeatable value. You get 90% of the features of expensive trackers for a fraction of the cost.", rating: 5, userIdx: 11, productIdx: 335 },
  { comment: "21 days of battery life is not a myth. I literally forget where I put the charger.", rating: 5, userIdx: 29, productIdx: 335 },
  { comment: "The screen is surprisingly bright and fluid. Perfect for tracking steps and basic gym work.", rating: 4, userIdx: 40, productIdx: 335 },
  { comment: "Lightweight and waterproof. I wear it in the pool every day without any issues.", rating: 5, userIdx: 6, productIdx: 335 },
  { comment: "The app could be a bit more polished, but for this price, I really can't complain.", rating: 4, userIdx: 24, productIdx: 335 },

  // 336: Amazfit T-Rex 3 Rugged Smartwatch
  { comment: "This thing is a tank. I've hit it against rocks while climbing and not a scratch.", rating: 5, userIdx: 20, productIdx: 336 },
  { comment: "The battery life is insane for an outdoor watch. Dual-band GPS is very fast to lock.", rating: 5, userIdx: 47, productIdx: 336 },
  { comment: "Great visibility in direct sunlight. Perfect for hiking and camping trips.", rating: 4, userIdx: 13, productIdx: 336 },
  { comment: "A bit bulky for small wrists, but that's expected for a rugged military-grade watch.", rating: 4, userIdx: 32, productIdx: 336 },
  { comment: "Excellent value for an outdoor watch with these specs. Very reliable offline maps.", rating: 5, userIdx: 9, productIdx: 336 },

  // 337: Google Pixel Watch
  { comment: "Beautiful, minimal design. The dome glass looks amazing in person. Fitbit integration is top notch.", rating: 5, userIdx: 31, productIdx: 337 },
  { comment: "The UI is so smooth. Google really nailed the software experience on this one.", rating: 4, userIdx: 4, productIdx: 337 },
  { comment: "Best looking smartwatch for Android. The crown feels very premium and tactile.", rating: 5, userIdx: 17, productIdx: 337 },
  { comment: "Battery gets me through the day, but I have to charge it every night. Accurate tracking though.", rating: 4, userIdx: 42, productIdx: 337 },
  { comment: "Great integration with Google Assistant and Home. Very convenient for a smart home user.", rating: 4, userIdx: 25, productIdx: 337 },

  // 338: Withings ScanWatch 2
  { comment: "I love that it looks like a real watch. The small OLED screen is all I need for stats.", rating: 5, userIdx: 38, productIdx: 338 },
  { comment: "Temperature tracking is a great addition for monitoring my health. Very high build quality.", rating: 5, userIdx: 23, productIdx: 338 },
  { comment: "The battery life is incredible—I haven't charged it in three weeks. True medical-grade tech.", rating: 5, userIdx: 46, productIdx: 338 },
  { comment: "A perfect choice for those who want health data without a distracting screen on their wrist.", rating: 4, userIdx: 16, productIdx: 338 },
  { comment: "The sapphire glass is very scratch-resistant. Elegant enough for formal occasions.", rating: 4, userIdx: 43, productIdx: 338 },

  // 339: Samsung Galaxy Watch 8
  { comment: "The AI features are a significant step up from the previous generation. Very impressed.", rating: 5, userIdx: 35, productIdx: 339 },
  { comment: "The screen is incredibly bright and clear. Wear OS 6 brings some great new features.", rating: 5, userIdx: 27, productIdx: 339 },
  { comment: "Solid and durable. I use it for all my outdoor training and it handles everything perfectly.", rating: 5, userIdx: 36, productIdx: 339 },
  { comment: "Great battery life and the fast charger is a nice inclusion. High-end health sensors.", rating: 4, userIdx: 12, productIdx: 339 },
  { comment: "The graphite finish is very sleek. It's the most complete smartwatch I've ever owned.", rating: 5, userIdx: 48, productIdx: 339 },

  // 340: Ring Video Doorbell (2nd Gen)
  { comment: "Super easy to install and the video quality is crystal clear. Peace of mind in a box.", rating: 5, userIdx: 14, productIdx: 340 },
  { comment: "The motion detection is much improved. I love being able to talk to delivery drivers from my office.", rating: 4, userIdx: 32, productIdx: 340 },
  { comment: "Great battery life so far. The Ring app is very intuitive and the alerts are almost instant.", rating: 5, userIdx: 7, productIdx: 340 },
  { comment: "A classic for a reason. It works perfectly with my Alexa Echo Show to see who is at the door.", rating: 5, userIdx: 21, productIdx: 340 },
  { comment: "Good value, though you really need the Ring Protect subscription to get the most out of it.", rating: 4, userIdx: 45, productIdx: 340 },

  // 341: Arlo Essential XL Spotlight Camera - 3 Pack
  { comment: "The 2K resolution is fantastic. You can actually read license plates clearly.", rating: 5, userIdx: 3, productIdx: 341 },
  { comment: "Color night vision is a game changer. The spotlight is bright enough to deter anyone.", rating: 5, userIdx: 28, productIdx: 341 },
  { comment: "Love that they connect directly to Wi-Fi. No extra hub cluttering up my router area.", rating: 4, userIdx: 19, productIdx: 341 },
  { comment: "Setup was straightforward. The battery life on the XL version is very impressive.", rating: 5, userIdx: 41, productIdx: 341 },
  { comment: "Excellent coverage for the whole house. The two-way audio is clear and loud.", rating: 4, userIdx: 10, productIdx: 341 },

  // 342: Eufy Security SoloCam S340 Kit
  { comment: "No monthly fees is the best part! The solar panels keep the cameras at 100% all the time.", rating: 5, userIdx: 33, productIdx: 342 },
  { comment: "The 360-degree tracking is incredible. It follows people moving across the yard perfectly.", rating: 5, userIdx: 15, productIdx: 342 },
  { comment: "The HomeBase provides plenty of local storage. Dual-cam tech means no more blind spots.", rating: 5, userIdx: 49, productIdx: 342 },
  { comment: "High-quality video and very reliable. Eufy has become my favorite security brand.", rating: 4, userIdx: 2, productIdx: 342 },
  { comment: "A bit of an investment upfront, but you save so much by not paying for cloud storage.", rating: 5, userIdx: 26, productIdx: 342 },

  // 343: Yale Assure Lock 2 Deadbolt
  { comment: "Sleek design that looks great on my modern door. The backlit keypad is very responsive.", rating: 5, userIdx: 8, productIdx: 343 },
  { comment: "Auto-unlock as I walk up to the door is like magic. Very secure and well-built.", rating: 5, userIdx: 37, productIdx: 343 },
  { comment: "The Yale Access App is very reliable. I can give temporary codes to my dog walker easily.", rating: 4, userIdx: 14, productIdx: 343 },
  { comment: "Installation took about 20 minutes with a screwdriver. Integrates perfectly with Apple HomeKit.", rating: 5, userIdx: 22, productIdx: 343 },
  { comment: "The black suede finish is beautiful but does show some fingerprints after a while.", rating: 4, userIdx: 30, productIdx: 343 },

  // 344: Google Nest Cam (Battery)
  { comment: "The person/animal/vehicle detection is very accurate. Fewer false alarms than other brands.", rating: 5, userIdx: 44, productIdx: 344 },
  { comment: "Sturdy and weather-resistant. It handled a heavy storm without any issues at all.", rating: 5, userIdx: 1, productIdx: 344 },
  { comment: "The magnetic mount is super strong but makes it easy to take down for charging.", rating: 4, userIdx: 18, productIdx: 344 },
  { comment: "Integrates perfectly into my Google Home setup. The video quality is smooth and natural.", rating: 5, userIdx: 39, productIdx: 344 },
  { comment: "A bit expensive, but the build quality and software experience are top-tier.", rating: 4, userIdx: 5, productIdx: 344 },

  // 345: Blink Outdoor 4th Gen Mounts
  { comment: "Perfect fit for the Blink cameras. The 360-degree adjustment is much better than the stock ones.", rating: 5, userIdx: 11, productIdx: 345 },
  { comment: "Keeps the camera protected from direct rain and sun. Very easy to install on the siding.", rating: 4, userIdx: 29, productIdx: 345 },
  { comment: "The sync module mount included is a nice bonus. Keeps the cables very tidy.", rating: 5, userIdx: 40, productIdx: 345 },
  { comment: "Plastic feels durable and the black finish matches the camera perfectly. Good value pack.", rating: 4, userIdx: 6, productIdx: 345 },
  { comment: "Simple but effective. Allows for much better viewing angles for my corner-mounted cameras.", rating: 5, userIdx: 24, productIdx: 345 },

  // 346: SimpliSafe 5-Piece Security System
  { comment: "Literally took 15 minutes to set up the whole house. No tools required!", rating: 5, userIdx: 20, productIdx: 346 },
  { comment: "Great basic kit. The sensors are small and discrete. Professional monitoring is affordable.", rating: 5, userIdx: 47, productIdx: 346 },
  { comment: "The base station siren is incredibly loud. Very reliable connection between sensors.", rating: 4, userIdx: 13, productIdx: 346 },
  { comment: "I love that there's no long-term contract. You can turn the monitoring on and off as needed.", rating: 5, userIdx: 32, productIdx: 346 },
  { comment: "Wish it came with one more entry sensor, but it's easy to add extra ones later.", rating: 4, userIdx: 9, productIdx: 346 },

  // 347: Wyze Cam v4 with Color Night Vision
  { comment: "Unbeatable price for 2.5K video. The color night vision is actually better than my expensive cams.", rating: 5, userIdx: 31, productIdx: 347 },
  { comment: "Small but mighty. The built-in spotlight is very handy for seeing visitors at night.", rating: 4, userIdx: 4, productIdx: 347 },
  { comment: "IP65 rating works great. It's survived a freezing winter so far without a glitch.", rating: 5, userIdx: 17, productIdx: 347 },
  { comment: "The Wyze app is fast and the local SD card recording is a huge money saver.", rating: 5, userIdx: 42, productIdx: 347 },
  { comment: "Amazing value. You can buy four of these for the price of one competitor's camera.", rating: 5, userIdx: 25, productIdx: 347 },

  // 348: TP-Link Tapo C520WS Pan/Tilt Camera
  { comment: "The smart tracking is very fluid. It follows my dog around the yard effortlessly.", rating: 5, userIdx: 38, productIdx: 348 },
  { comment: "2K QHD is very sharp. The 360-degree view means I only need one camera for the whole backyard.", rating: 5, userIdx: 23, productIdx: 348 },
  { comment: "Person and vehicle detection for free? That's a huge plus over other brands.", rating: 5, userIdx: 46, productIdx: 348 },
  { comment: "Night vision is bright and the Wi-Fi signal remains strong even far from the router.", rating: 4, userIdx: 16, productIdx: 348 },
  { comment: "Very impressed with the Tapo ecosystem. Setup was a breeze and the app is polished.", rating: 4, userIdx: 43, productIdx: 348 },

  // 349: Yale August Wi-Fi Smart Lock with Keypad
  { comment: "Love being able to check if the door is locked from anywhere. Silver finish is very premium.", rating: 5, userIdx: 35, productIdx: 349 },
  { comment: "The keypad is essential for when I go out for a run without my phone. Always works.", rating: 5, userIdx: 27, productIdx: 349 },
  { comment: "Integration with Alexa and Google Home is flawless. 'Unlock' command with PIN is very secure.", rating: 4, userIdx: 36, productIdx: 349 },
  { comment: "Auto-lock feature gives me peace of mind when I'm in a rush in the morning.", rating: 5, userIdx: 12, productIdx: 349 },
  { comment: "Installation was easy over my existing deadbolt. A very smart and elegant upgrade.", rating: 4, userIdx: 48, productIdx: 349 },

  // 350: Sony Alpha a6400 Mirrorless Camera
  { comment: "The real-time eye autofocus is like magic. Perfect for vlogging and street photography.", rating: 5, userIdx: 12, productIdx: 350 },
  { comment: "Amazing 4K quality in such a compact body. The flip screen is a must-have for solo creators.", rating: 5, userIdx: 28, productIdx: 350 },
  { comment: "Great starter kit. The 16-50mm lens is versatile enough for most daily situations.", rating: 4, userIdx: 7, productIdx: 350 },
  { comment: "Build quality is solid and the menu system is deep. Highly recommended for enthusiasts.", rating: 5, userIdx: 39, productIdx: 350 },
  { comment: "Excellent low-light performance for an APS-C sensor. A very reliable workhorse.", rating: 4, userIdx: 15, productIdx: 350 },

  // 351: Manfrotto Befree Advanced Twist Tripod
  { comment: "Carbon fiber makes it so light for hiking. It's incredibly stable even in windy conditions.", rating: 5, userIdx: 33, productIdx: 351 },
  { comment: "The M-lock twist system is fast and secure. Manfrotto quality is evident in every detail.", rating: 5, userIdx: 2, productIdx: 351 },
  { comment: "Perfect travel companion. It fits easily in my carry-on and the ball head is very fluid.", rating: 4, userIdx: 41, productIdx: 351 },
  { comment: "A bit expensive but worth the investment for the weight savings and durability.", rating: 5, userIdx: 10, productIdx: 351 },
  { comment: "Professional feel and very easy to adjust on uneven ground. Very satisfied.", rating: 4, userIdx: 26, productIdx: 351 },

  // 352: Neewer 5" Ring Light (2 Pack)
  { comment: "Perfect for my Zoom calls. The clip-on design is very sturdy and the light is soft.", rating: 5, userIdx: 11, productIdx: 352 },
  { comment: "Having two lights helps eliminate shadows on my face during live streams. Great value.", rating: 4, userIdx: 49, productIdx: 352 },
  { comment: "The desk tripods are a nice addition. Easy to adjust the brightness and color temperature.", rating: 5, userIdx: 18, productIdx: 352 },
  { comment: "Simple and effective. It makes a huge difference in video quality for remote work.", rating: 4, userIdx: 3, productIdx: 352 },
  { comment: "Good quality for the price. The USB power makes it very convenient to use with my laptop.", rating: 4, userIdx: 29, productIdx: 352 },

  // 353: SanDisk Extreme PRO 128GB SDXC
  { comment: "The only cards I trust for 4K video. I've never had a single failure with SanDisk Pro.", rating: 5, userIdx: 44, productIdx: 353 },
  { comment: "Very fast write speeds, great for burst mode photography. Transferring to PC is a breeze.", rating: 5, userIdx: 6, productIdx: 353 },
  { comment: "Reliable and rugged. 128GB is the sweet spot for a full day of shooting.", rating: 4, userIdx: 22, productIdx: 353 },
  { comment: "V30 rating is accurate. No dropped frames during long video recording sessions.", rating: 5, userIdx: 31, productIdx: 353 },
  { comment: "Great value for a high-performance card. Essential for any serious photographer.", rating: 5, userIdx: 14, productIdx: 353 },

  // 354: Lowepro ProTactic BP 450 AW II
  { comment: "The 4-point access is a lifesaver. I can get to any piece of gear without digging.", rating: 5, userIdx: 20, productIdx: 354 },
  { comment: "Tough as nails. The AW cover protected my gear during a heavy downpour in the mountains.", rating: 5, userIdx: 47, productIdx: 354 },
  { comment: "Very comfortable even when fully loaded with two bodies and multiple lenses.", rating: 5, userIdx: 13, productIdx: 354 },
  { comment: "The modular system on the outside is great for attaching my tripod and water bottle.", rating: 4, userIdx: 32, productIdx: 354 },
  { comment: "Top-tier camera bag. It's bulky, but the protection it offers is unmatched.", rating: 5, userIdx: 9, productIdx: 354 },

  // 355: Neewer 43" 5-in-1 Light Reflector
  { comment: "Essential for outdoor portraits. The gold side gives a beautiful warm glow to skin tones.", rating: 5, userIdx: 35, productIdx: 355 },
  { comment: "The hand grips make it much easier to hold, especially when working alone without an assistant.", rating: 5, userIdx: 27, productIdx: 355 },
  { comment: "Collapses down easily and the carrying bag is sturdy. Very versatile for the price.", rating: 4, userIdx: 36, productIdx: 355 },
  { comment: "The translucent disc is perfect for softening harsh midday sun. A must-have tool.", rating: 5, userIdx: 12, productIdx: 355 },
  { comment: "Good quality zippers and the clamp is surprisingly strong. Great studio addition.", rating: 4, userIdx: 48, productIdx: 355 },

  // 356: Puluz Mini Photo Studio Light Box
  { comment: "Perfect for my Etsy shop! It makes small products look professional instantly.", rating: 5, userIdx: 38, productIdx: 356 },
  { comment: "The LED lights are bright and the high CRI makes the colors very accurate. Great value.", rating: 5, userIdx: 23, productIdx: 356 },
  { comment: "Very easy to assemble and fold back up. The different backgrounds are a nice touch.", rating: 4, userIdx: 46, productIdx: 356 },
  { comment: "It’s small, so check the dimensions, but for jewelry or small electronics, it's perfect.", rating: 5, userIdx: 16, productIdx: 356 },
  { comment: "The light is very even and eliminates almost all shadows. Simple and effective.", rating: 4, userIdx: 43, productIdx: 356 },

  // 357: Røde VideoMic Pro+
  { comment: "The auto-power function is a life saver. I never forget to turn it on anymore.", rating: 5, userIdx: 34, productIdx: 357 },
  { comment: "Crystal clear audio quality. It filters out wind noise and background hum perfectly.", rating: 5, userIdx: 4, productIdx: 357 },
  { comment: "The shock mount is excellent at preventing handling noise from reaching the recording.", rating: 5, userIdx: 17, productIdx: 357 },
  { comment: "Expensive but indispensable for high-quality video production. Røde is the best.", rating: 4, userIdx: 42, productIdx: 357 },
  { comment: "The built-in battery door is much sturdier than the previous version. Great upgrade.", rating: 5, userIdx: 25, productIdx: 357 },

  // 358: Peak Design Slide Camera Strap
  { comment: "The anchor system is brilliant. I can swap the strap between cameras in seconds.", rating: 5, userIdx: 31, productIdx: 358 },
  { comment: "So comfortable even with a heavy setup. The seatbelt material is smooth and durable.", rating: 5, userIdx: 0, productIdx: 358 },
  { comment: "Very easy to adjust the length on the fly. It feels very secure and high quality.", rating: 5, userIdx: 19, productIdx: 358 },
  { comment: "I love that it can be used as a neck, shoulder, or sling strap. Highly versatile.", rating: 4, userIdx: 40, productIdx: 358 },
  { comment: "A bit pricey for a strap, but once you use it, you'll never go back to anything else.", rating: 5, userIdx: 8, productIdx: 358 },

  // 359: Lenspen Elitepro Cleaning Kit
  { comment: "The only thing I use to touch my glass. The carbon tip works wonders on smudges.", rating: 5, userIdx: 13, productIdx: 359 },
  { comment: "Very compact kit that fits in any camera bag pocket. Essential for field work.", rating: 5, userIdx: 47, productIdx: 359 },
  { comment: "The FilterKlear is great for getting spots off my ND filters. Safe and effective.", rating: 4, userIdx: 32, productIdx: 359 },
  { comment: "Good quality microfiber cloth. The whole kit feels professional and well-made.", rating: 4, userIdx: 9, productIdx: 359 },
  { comment: "Way better than using liquids and wipes. It leaves the lenses perfectly clear.", rating: 5, userIdx: 21, productIdx: 359 },

  // 360: Fender Player Series Stratocaster
  { comment: "The classic Strat chime is all there. The 22nd fret is a great addition to the Player series.", rating: 5, userIdx: 12, productIdx: 360 },
  { comment: "Incredible build quality for the price. It feels and sounds like a professional instrument.", rating: 5, userIdx: 34, productIdx: 360 },
  { comment: "The 2-point tremolo stays in tune much better than the old 6-screw version. Love the neck finish.", rating: 4, userIdx: 8, productIdx: 360 },
  { comment: "Versatile pickups that can handle anything from clean blues to hard rock. A beautiful guitar.", rating: 5, userIdx: 29, productIdx: 360 },
  { comment: "Arrived with a great setup right out of the box. The Alnico 5 pickups are very responsive.", rating: 4, userIdx: 45, productIdx: 360 },

  // 361: Yamaha P-45 Compact Digital Piano
  { comment: "The weighted keys feel very realistic. It's the best entry-level digital piano on the market.", rating: 5, userIdx: 3, productIdx: 361 },
  { comment: "Perfect for students. It's slim enough to fit in a small room but sounds like a full grand.", rating: 5, userIdx: 28, productIdx: 361 },
  { comment: "Simple and straightforward. No unnecessary buttons, just a great piano sound and feel.", rating: 4, userIdx: 15, productIdx: 361 },
  { comment: "Lightweight enough to carry to gigs. The GHS action is exactly what I was looking for.", rating: 5, userIdx: 41, productIdx: 361 },
  { comment: "Great value. The built-in speakers are decent, but it sounds incredible through headphones.", rating: 4, userIdx: 10, productIdx: 361 },

  // 362: Audio-Technica ATH-M50x Headphones
  { comment: "The industry standard for a reason. The flat response is perfect for mixing and tracking.", rating: 5, userIdx: 33, productIdx: 362 },
  { comment: "Very comfortable for long studio sessions. The sound isolation is impressive.", rating: 5, userIdx: 15, productIdx: 362 },
  { comment: "The folding design and detachable cables make them very portable. Excellent bass definition.", rating: 4, userIdx: 49, productIdx: 362 },
  { comment: "Built like a tank. I've used mine daily for two years and they still look and sound new.", rating: 5, userIdx: 2, productIdx: 362 },
  { comment: "Great for critical listening. You can hear details in recordings that you'd miss with regular buds.", rating: 4, userIdx: 26, productIdx: 362 },

  // 363: Focusrite Scarlett 2i2 4th Gen
  { comment: "The preamps are so clean. The new Auto Gain feature makes setting levels a breeze.", rating: 5, userIdx: 11, productIdx: 363 },
  { comment: "Solid upgrade from the 3rd gen. The converters are noticeably better and the Air mode is great.", rating: 5, userIdx: 29, productIdx: 363 },
  { comment: "Super low latency. It works perfectly with my DAW and the software bundle is actually useful.", rating: 4, userIdx: 40, productIdx: 363 },
  { comment: "Compact and rugged. The halo indicators are very helpful to avoid clipping during recording.", rating: 5, userIdx: 6, productIdx: 363 },
  { comment: "The best interface for a home studio. Reliable drivers and simple to set up.", rating: 4, userIdx: 24, productIdx: 363 },

  // 364: Shure SM58 Vocal Microphone
  { comment: "Indestructible. It's the only mic I trust for live performances. Clear and punchy.", rating: 5, userIdx: 20, productIdx: 364 },
  { comment: "The proximity effect is perfect for adding warmth to vocals. A true legend for a reason.", rating: 5, userIdx: 47, productIdx: 364 },
  { comment: "Great feedback rejection on loud stages. It just works every time, no matter what.", rating: 4, userIdx: 13, productIdx: 364 },
  { comment: "Essential for every gear bag. You could drop it from a roof and it would still record.", rating: 5, userIdx: 32, productIdx: 364 },
  { comment: "A simple, honest microphone. Excellent for both lead and backing vocals.", rating: 4, userIdx: 9, productIdx: 364 },

  // 365: Akai Professional MPK Mini MK3
  { comment: "The pads are much better than the previous versions. Very responsive for finger drumming.", rating: 5, userIdx: 31, productIdx: 365 },
  { comment: "Perfect for making beats on the go. It fits in my backpack and powers over USB.", rating: 4, userIdx: 4, productIdx: 365 },
  { comment: "The knobs are endless encoders which is great for mapping to my plugins. Small but powerful.", rating: 5, userIdx: 17, productIdx: 365 },
  { comment: "The joystick for pitch and mod is very intuitive. Great starter controller for producers.", rating: 5, userIdx: 42, productIdx: 365 },
  { comment: "The keys are small but have a decent feel. The built-in arpeggiator is a nice bonus.", rating: 4, userIdx: 25, productIdx: 365 },

  // 366: BOSS DS-1 Distortion Pedal
  { comment: "The orange box of legend! It provides that classic 80s rock tone instantly.", rating: 5, userIdx: 38, productIdx: 366 },
  { comment: "Very simple controls. It can go from a light crunch to a full-on fuzz-like distortion.", rating: 5, userIdx: 23, productIdx: 366 },
  { comment: "Great for cutting through a mix during solos. It's built like a brick and will last forever.", rating: 4, userIdx: 46, productIdx: 366 },
  { comment: "An absolute bargain. Every guitarist should own at least one DS-1 in their lifetime.", rating: 5, userIdx: 16, productIdx: 366 },
  { comment: "It can be a bit thin if you crank the tone too high, but overall a great versatile pedal.", rating: 4, userIdx: 43, productIdx: 366 },

  // 367: Martin Authentic Acoustic Strings
  { comment: "These strings last twice as long as regular ones without losing that 'new string' brightness.", rating: 5, userIdx: 35, productIdx: 367 },
  { comment: "The 2.0 treatment doesn't feel slippery like other coated strings. Very natural playability.", rating: 5, userIdx: 27, productIdx: 367 },
  { comment: "Great sustain and rich low end. Custom light gauge is perfect for fingerstyle playing.", rating: 4, userIdx: 36, productIdx: 367 },
  { comment: "Martin quality in every pack. They stay in tune very well and feel great under the fingers.", rating: 5, userIdx: 12, productIdx: 367 },
  { comment: "A bit more expensive than basic strings, but you save money because they don't rust quickly.", rating: 4, userIdx: 48, productIdx: 367 },

  // 368: Marshall Emberton II Speaker
  { comment: "The classic Marshall look in a portable size. The soundstage is surprisingly wide.", rating: 5, userIdx: 14, productIdx: 368 },
  { comment: "Battery life is insane. I used it for an entire weekend camping trip on a single charge.", rating: 5, userIdx: 32, productIdx: 368 },
  { comment: "Rugged and waterproof. It's much louder than it looks and handles rock music perfectly.", rating: 4, userIdx: 7, productIdx: 368 },
  { comment: "The Stack Mode is cool if your friends have one too. Very premium feel to the materials.", rating: 5, userIdx: 21, productIdx: 368 },
  { comment: "Good bass for the size. It's the best looking Bluetooth speaker on the market, hands down.", rating: 4, userIdx: 45, productIdx: 368 },

  // 369: Alesis Nitro Max Drum Kit
  { comment: "The mesh heads are a game changer for quiet practice. My neighbors don't hear a thing.", rating: 5, userIdx: 3, productIdx: 369 },
  { comment: "The Bluetooth feature is great for jamming along to Spotify. The sounds are very realistic.", rating: 5, userIdx: 28, productIdx: 369 },
  { comment: "Easy to assemble and the rack is quite sturdy. Great for beginners or as a practice kit.", rating: 4, userIdx: 19, productIdx: 369 },
  { comment: "Large library of drum kits to choose from. The kick pad feels very natural with a real pedal.", rating: 5, userIdx: 41, productIdx: 369 },
  { comment: "The module is very intuitive. Excellent value for an eight-piece mesh kit.", rating: 4, userIdx: 10, productIdx: 369 },

  // 370: Stentor Student II Violin 4/4 Outfit
  { comment: "Best student violin for the price. The solid tonewoods make a huge difference in sound quality.", rating: 5, userIdx: 15, productIdx: 370 },
  { comment: "The case is very light and the ebony fingerboard feels professional. Perfect for my daughter's lessons.", rating: 5, userIdx: 42, productIdx: 370 },
  { comment: "Great tone for a beginner instrument. The bow is decent, though we might upgrade it later.", rating: 4, userIdx: 8, productIdx: 370 },
  { comment: "Solid construction and arrived well-packaged. It stays in tune surprisingly well.", rating: 4, userIdx: 23, productIdx: 370 },
  { comment: "Recommended by our teacher. It's a reliable instrument that won't break the bank.", rating: 5, userIdx: 31, productIdx: 370 },

  // 371: Yamaha YAS-280 Student Alto Saxophone
  { comment: "The gold standard for beginners. The intonation is perfect across all registers.", rating: 5, userIdx: 12, productIdx: 371 },
  { comment: "Incredible response and very easy to play. Yamaha quality is worth the extra investment.", rating: 5, userIdx: 49, productIdx: 371 },
  { comment: "The adjustable thumb-rest makes it very comfortable for smaller hands. Highly durable.", rating: 5, userIdx: 19, productIdx: 371 },
  { comment: "Excellent resale value. This is the only sax a student will need for many years.", rating: 5, userIdx: 4, productIdx: 371 },
  { comment: "Beautiful bright tone. It’s light but feels very sturdy and well-engineered.", rating: 4, userIdx: 27, productIdx: 371 },

  // 372: Korg B2 Digital Piano (White)
  { comment: "The weighted hammer action feels very close to an actual acoustic piano. Love the white finish.", rating: 5, userIdx: 33, productIdx: 372 },
  { comment: "Simple interface and great speakers. The grand piano sound is very rich and sampled well.", rating: 5, userIdx: 11, productIdx: 372 },
  { comment: "Perfect for my apartment. It’s compact but doesn't sacrifice the playing experience.", rating: 4, userIdx: 38, productIdx: 372 },
  { comment: "The included sustain pedal is a bit basic, but the piano itself is top-tier for the price.", rating: 4, userIdx: 14, productIdx: 372 },
  { comment: "Very elegant design. It’s a joy to play every day and the setup was very easy.", rating: 5, userIdx: 26, productIdx: 372 },

  // 373: Zildjian K Custom Dark Cymbal Set
  { comment: "The ultimate cymbal pack. The Dark Ride has a beautiful wash and the hats are crisp.", rating: 5, userIdx: 44, productIdx: 373 },
  { comment: "Warm, trashy, and very musical. These cymbals blend perfectly with any kit.", rating: 5, userIdx: 1, productIdx: 373 },
  { comment: "Expensive, but these are professional tools. The 16\" crash is incredibly fast and responsive.", rating: 5, userIdx: 22, productIdx: 373 },
  { comment: "Zildjian K's never disappoint. Perfect for jazz, fusion, or even modern rock recording.", rating: 5, userIdx: 36, productIdx: 373 },
  { comment: "Beautiful finish and even better sound. They look and sound like art.", rating: 4, userIdx: 9, productIdx: 373 },

  // 374: Hohner Marine Band 1896 Harmonica
  { comment: "The original blues harp. The pearwood comb gives it a unique, warm tone.", rating: 5, userIdx: 47, productIdx: 374 },
  { comment: "Classic German engineering. It's very responsive and easy to bend notes on.", rating: 5, userIdx: 20, productIdx: 374 },
  { comment: "A bit rough on the lips at first because of the traditional design, but the sound is unbeatable.", rating: 4, userIdx: 13, productIdx: 374 },
  { comment: "Every harmonica player needs one. It's the sound of a hundred years of music.", rating: 5, userIdx: 32, productIdx: 374 },
  { comment: "Solid brass reed plates. It feels like a high-quality instrument in your hand.", rating: 4, userIdx: 41, productIdx: 374 },

  // 375: Meinl Percussion Compact Jam Cajon
  { comment: "Surprisingly big sound for such a compact box. The snare effect is very crisp.", rating: 5, userIdx: 25, productIdx: 375 },
  { comment: "Perfect for acoustic sessions and travel. It’s light but the bass punch is definitely there.", rating: 4, userIdx: 6, productIdx: 375 },
  { comment: "The Baltic birch looks and feels great. Very fun to play at home or in the park.", rating: 5, userIdx: 39, productIdx: 375 },
  { comment: "Excellent portable percussion. It fits easily in a backpack and handles slap tones well.", rating: 5, userIdx: 17, productIdx: 375 },
  { comment: "Good quality for the price. Ideal for acoustic guitarists who want some rhythm support.", rating: 4, userIdx: 43, productIdx: 375 },

  // 376: D'Addario EJ16-3D Phosphor Bronze Strings
  { comment: "My go-to strings for every acoustic I own. Consistent, warm, and they last a long time.", rating: 5, userIdx: 2, productIdx: 376 },
  { comment: "The 3-pack is a great value. They bring my old guitar back to life every time.", rating: 5, userIdx: 34, productIdx: 376 },
  { comment: "Very well-balanced tone. Not too bright, not too dull. The phosphor bronze is perfect.", rating: 4, userIdx: 48, productIdx: 376 },
  { comment: "Standard light gauge makes them very playable. D'Addario quality is always reliable.", rating: 5, userIdx: 10, productIdx: 376 },
  { comment: "I've tried many brands, but I always come back to these for the tone and durability.", rating: 4, userIdx: 29, productIdx: 376 },

  // 377: Vandoren Traditional Alto Sax Reeds
  { comment: "The only reeds I use. The 2.5 strength is perfect for a balanced, professional sound.", rating: 5, userIdx: 18, productIdx: 377 },
  { comment: "Consistently high quality. Almost every reed in the box is playable right away.", rating: 5, userIdx: 40, productIdx: 377 },
  { comment: "Great response in both the high and low registers. Essential for any serious player.", rating: 4, userIdx: 7, productIdx: 377 },
  { comment: "Vandoren is the standard for a reason. Clear, pure sound every time.", rating: 5, userIdx: 24, productIdx: 377 },
  { comment: "A bit more expensive than others, but you get what you pay for in terms of consistency.", rating: 4, userIdx: 30, productIdx: 377 },

  // 378: Kala KA-15S Mahogany Soprano Ukulele
  { comment: "Perfect first ukulele. The mahogany body has a lovely warm sound for a soprano.", rating: 5, userIdx: 46, productIdx: 378 },
  { comment: "The Aquila strings included are high quality and stay in tune well after a few days.", rating: 5, userIdx: 3, productIdx: 378 },
  { comment: "Satin finish is very smooth and the gear tuners make it easy to dial in the pitch.", rating: 4, userIdx: 16, productIdx: 378 },
  { comment: "Great value for money. It doesn't feel like a toy at all, but a real instrument.", rating: 5, userIdx: 35, productIdx: 378 },
  { comment: "Compact and portable. I take it everywhere with me. Very fun and easy to learn.", rating: 4, userIdx: 21, productIdx: 378 },

  // 379: Vic Firth American Classic 5A Drumsticks
  { comment: "The only sticks I buy. Perfectly balanced and the teardrop tip gives a great cymbal sound.", rating: 5, userIdx: 45, productIdx: 379 },
  { comment: "Durable and reliable. They have just the right amount of weight for any style of music.", rating: 5, userIdx: 12, productIdx: 379 },
  { comment: "Vic Firth 5As are the industry standard for a reason. Great feel and grip.", rating: 5, userIdx: 37, productIdx: 379 },
  { comment: "Good longevity even with heavy rimshots. They are consistent from pair to pair.", rating: 4, userIdx: 5, productIdx: 379 },
  { comment: "Simple, effective, and the most versatile sticks out there. Essential for every drummer.", rating: 5, userIdx: 28, productIdx: 379 },

  // 380: Victrola Eastwood II Record Player
  { comment: "The Audio Technica cartridge makes a huge difference in sound compared to other budget players.", rating: 5, userIdx: 14, productIdx: 380 },
  { comment: "Love the retro look combined with modern Bluetooth features. Very easy to set up.", rating: 4, userIdx: 32, productIdx: 380 },
  { comment: "Built-in speakers are decent for a small room, but it sounds amazing when connected to external ones.", rating: 4, userIdx: 7, productIdx: 380 },
  { comment: "The wood finish looks very premium on my shelf. Perfect for starting a vinyl collection.", rating: 5, userIdx: 21, productIdx: 380 },
  { comment: "Compact and stylish. The Vinyl Stream feature is great for using my wireless headphones.", rating: 4, userIdx: 45, productIdx: 380 },

  // 381: Marshall Stanmore III Bluetooth Speaker
  { comment: "The sound is expansive and the bass is incredibly punchy. Truly a rock-and-roll beast.", rating: 5, userIdx: 3, productIdx: 381 },
  { comment: "Beautiful vintage design. It's a statement piece that also happens to be a top-tier speaker.", rating: 5, userIdx: 28, productIdx: 381 },
  { comment: "Pricey, but the build quality and the brass details are stunning. Audio quality is crystal clear.", rating: 5, userIdx: 19, productIdx: 381 },
  { comment: "Marshall never misses. It fills my entire living room with rich, warm sound effortlessly.", rating: 4, userIdx: 41, productIdx: 381 },
  { comment: "Classic aesthetic with modern connectivity. The app controls are simple and effective.", rating: 5, userIdx: 10, productIdx: 381 },

  // 382: Kodak Ektar H35 Half Frame Camera
  { comment: "Getting 72 shots out of a 36-exposure roll is fantastic. The retro grain is beautiful.", rating: 5, userIdx: 33, productIdx: 382 },
  { comment: "So lightweight and fun to use. It's the perfect companion for street photography and trips.", rating: 4, userIdx: 15, productIdx: 382 },
  { comment: "Love the 60s look! The built-in flash works well for indoor party shots.", rating: 5, userIdx: 49, productIdx: 382 },
  { comment: "Simple plastic build but very reliable. A great way to get into analog photography on a budget.", rating: 4, userIdx: 2, productIdx: 382 },
  { comment: "The vertical framing takes some getting used to, but it's very creative and rewarding.", rating: 4, userIdx: 26, productIdx: 382 },

  // 383: Crosley CR6047A-RE 7-in-1 Entertainment Center
  { comment: "A true all-in-one. I can finally play my old CDs and listen to the radio on one device.", rating: 5, userIdx: 11, productIdx: 383 },
  { comment: "The Bluetooth Out feature is brilliant for streaming my records to my soundbar.", rating: 4, userIdx: 37, productIdx: 383 },
  { comment: "Great retro vibes. The turntable works smoothly and the dial has a nice nostalgic feel.", rating: 5, userIdx: 14, productIdx: 383 },
  { comment: "Perfect gift for my parents. They love being able to use all their old media again.", rating: 5, userIdx: 22, productIdx: 383 },
  { comment: "The speakers are okay, but I definitely recommend connecting external ones for better bass.", rating: 4, userIdx: 30, productIdx: 383 },

  // 384: Casio Vintage A168WG-9EF Gold Watch
  { comment: "The ultimate 80s icon. The gold finish is very durable and hasn't faded at all.", rating: 5, userIdx: 44, productIdx: 384 },
  { comment: "So comfortable and lightweight. The EL backlight is very bright and useful at night.", rating: 5, userIdx: 1, productIdx: 384 },
  { comment: "Classic design that goes with everything. A must-have for any watch enthusiast.", rating: 4, userIdx: 18, productIdx: 384 },
  { comment: "Great value for money. It's accurate, reliable, and looks way more expensive than it is.", rating: 5, userIdx: 39, productIdx: 384 },
  { comment: "Simple to set up and the alarm is plenty loud. I love the nostalgic feel on my wrist.", rating: 4, userIdx: 5, productIdx: 384 },

  // 385: SMEG 50's Style Electric Mini Kettle
  { comment: "Pure Italian style. It’s the centerpiece of my kitchen and boils water very quickly.", rating: 5, userIdx: 20, productIdx: 385 },
  { comment: "Expensive for a kettle, but the build quality and the chrome handle are top-tier.", rating: 5, userIdx: 29, productIdx: 385 },
  { comment: "The 0.8L capacity is perfect for a small household. Very quiet operation.", rating: 4, userIdx: 40, productIdx: 385 },
  { comment: "Beautiful pastel colors and the 360-degree base is very convenient to use.", rating: 5, userIdx: 6, productIdx: 385 },
  { comment: "Solid and well-made. It's a luxury item that adds a lot of character to the counter.", rating: 4, userIdx: 24, productIdx: 385 },

  // 386: GPO 746 Rotary Design Retro Phone
  { comment: "The authentic bell ringer is so much better than modern digital ringtones. Very nostalgic.", rating: 5, userIdx: 13, productIdx: 386 },
  { comment: "Looks exactly like the one my grandparents had. The push buttons make it easy to actually use.", rating: 5, userIdx: 47, productIdx: 386 },
  { comment: "A great conversation piece for the hallway. The build quality feels very sturdy and heavy.", rating: 4, userIdx: 32, productIdx: 386 },
  { comment: "Works perfectly with my modern landline. The curly cord is a great retro touch.", rating: 5, userIdx: 9, productIdx: 386 },
  { comment: "The rotary dial look is perfect, though I'm glad it has buttons for quick dialing.", rating: 4, userIdx: 17, productIdx: 386 },

  // 387: Zippo Classic Brushed Chrome Lighter
  { comment: "The sound of the 'click' is unmistakable. It works every time, even in high winds.", rating: 5, userIdx: 31, productIdx: 387 },
  { comment: "A timeless classic. It feels solid in the hand and the brushed chrome doesn't show scratches.", rating: 5, userIdx: 4, productIdx: 387 },
  { comment: "I've had mine for years and it still works like new. The lifetime guarantee is real.", rating: 5, userIdx: 42, productIdx: 387 },
  { comment: "Simple, effective, and reliable. It’s a piece of history that you can actually use daily.", rating: 4, userIdx: 25, productIdx: 387 },
  { comment: "Best lighter on the market. Just make sure to keep it filled with genuine Zippo fluid.", rating: 5, userIdx: 34, productIdx: 387 },

  // 388: Polaroid 600 Refurbished Instant Camera
  { comment: "The ultimate retro experience. The photos have that unique, warm analog look.", rating: 5, userIdx: 38, productIdx: 388 },
  { comment: "Refurbished to perfection. It feels like a brand new camera from the 80s.", rating: 5, userIdx: 23, productIdx: 388 },
  { comment: "The automatic flash is very reliable. A bit expensive to buy film, but worth the memories.", rating: 4, userIdx: 46, productIdx: 388 },
  { comment: "So fun at parties! Everyone loves seeing the photo develop right in front of them.", rating: 5, userIdx: 16, productIdx: 388 },
  { comment: "Classic point-and-shoot. It's bulky but iconic, and the build quality is very nostalgic.", rating: 4, userIdx: 43, productIdx: 388 },

  // 389: Torchstar Green Glass Bankers Desk Lamp
  { comment: "Gives my office an instant 'library' feel. The green glass shade is thick and beautiful.", rating: 5, userIdx: 35, productIdx: 389 },
  { comment: "The brass base is very heavy and stable. The pull chain switch works with a solid click.", rating: 5, userIdx: 27, productIdx: 389 },
  { comment: "Provides a lovely, focused light for reading. A very elegant and classic addition to any desk.", rating: 4, userIdx: 36, productIdx: 389 },
  { comment: "Looks great in my study. The quality of the glass and the metal is much higher than expected.", rating: 5, userIdx: 12, productIdx: 389 },
  { comment: "A bit of a vintage dream. It’s exactly the style I was looking for for my home office.", rating: 4, userIdx: 48, productIdx: 389 },

  // 390: Nixplay 8-inch Smart Digital Picture Frame
  { comment: "The perfect gift for grandparents. I can send photos of the kids directly to their living room from my phone.", rating: 5, userIdx: 14, productIdx: 390 },
  { comment: "Crystal clear display and the motion sensor works perfectly to save energy when no one is in the room.", rating: 5, userIdx: 32, productIdx: 390 },
  { comment: "Setup was a breeze. Love that you can invite the whole family to contribute to the same frame.", rating: 4, userIdx: 7, productIdx: 390 },
  { comment: "High resolution and very sleek design. The app is intuitive and makes sharing memories so easy.", rating: 5, userIdx: 21, productIdx: 390 },
  { comment: "A bit expensive, but the build quality and the cloud features justify the price for a special gift.", rating: 4, userIdx: 45, productIdx: 390 },

  // 391: YETI Rambler 20 oz Tumbler
  { comment: "Indestructible and keeps my coffee hot for hours. The MagSlider lid is a simple but brilliant design.", rating: 5, userIdx: 3, productIdx: 391 },
  { comment: "YETI quality is unmatched. I've dropped it several times and it doesn't have a single dent.", rating: 5, userIdx: 28, productIdx: 391 },
  { comment: "Dishwasher safe is a huge plus for me. The finish doesn't peel or fade over time.", rating: 4, userIdx: 19, productIdx: 391 },
  { comment: "Best tumbler I've ever owned. It fits perfectly in my car's cup holder and stays ice cold all day.", rating: 5, userIdx: 41, productIdx: 391 },
  { comment: "Great gift for anyone who commutes. It's rugged, functional, and looks very professional.", rating: 4, userIdx: 10, productIdx: 391 },

  // 392: Fujifilm Instax Mini 12 Instant Camera
  { comment: "So much fun at parties! The automatic exposure takes the guesswork out of instant photos.", rating: 5, userIdx: 33, productIdx: 392 },
  { comment: "Compact and adorable. The selfie mirror is a great addition for getting the framing right.", rating: 5, userIdx: 15, productIdx: 392 },
  { comment: "Simple point-and-shoot fun. The prints are clear and have that classic nostalgic feel.", rating: 4, userIdx: 49, productIdx: 392 },
  { comment: "Great gift for teenagers. It's easy to use and the pastel colors are very trendy.", rating: 5, userIdx: 2, productIdx: 392 },
  { comment: "Film can get expensive, but the physical memories it creates are worth every cent.", rating: 4, userIdx: 26, productIdx: 392 },

  // 393: Kindle Paperwhite (16 GB)
  { comment: "The warm light is a game changer for reading in bed at night. No more eye strain.", rating: 5, userIdx: 8, productIdx: 393 },
  { comment: "Battery life is incredible. I've been reading for weeks and haven't needed to charge it yet.", rating: 5, userIdx: 37, productIdx: 393 },
  { comment: "The 6.8 inch screen is the perfect size—large enough for text but still very portable.", rating: 4, userIdx: 14, productIdx: 393 },
  { comment: "Waterproof design means I can finally read by the pool or in the bath without worrying.", rating: 5, userIdx: 22, productIdx: 393 },
  { comment: "Glare-free even in direct sunlight. It truly feels like reading real paper. Highly recommended.", rating: 5, userIdx: 30, productIdx: 393 },

  // 394: Life360 Tile Starter Pack
  { comment: "This has saved me so many times. I can finally find my keys in seconds every morning.", rating: 5, userIdx: 44, productIdx: 394 },
  { comment: "The Tile Slim is perfect for my wallet. It's so thin I don't even notice it's there.", rating: 5, userIdx: 1, productIdx: 394 },
  { comment: "Great range and the app is very reliable. The reverse find feature for my phone is essential.", rating: 4, userIdx: 18, productIdx: 394 },
  { comment: "The community find feature actually works! Someone found my lost keys in the park.", rating: 5, userIdx: 39, productIdx: 394 },
  { comment: "Very easy to set up. A practical gift for anyone who is a bit forgetful.", rating: 4, userIdx: 5, productIdx: 394 },

  // 395: Hydro Flask Wide Mouth Bottle
  { comment: "Keeps water ice cold even in a hot car. The flex straw cap is very convenient for the gym.", rating: 5, userIdx: 11, productIdx: 395 },
  { comment: "Durable and stylish. The powder coat finish provides a great grip even when my hands are wet.", rating: 5, userIdx: 29, productIdx: 395 },
  { comment: "Standard professional-grade stainless steel. No metallic taste at all, just pure water.", rating: 4, userIdx: 40, productIdx: 395 },
  { comment: "I love the wide mouth for adding ice cubes easily. It's a staple in my daily routine.", rating: 5, userIdx: 6, productIdx: 395 },
  { comment: "A bit pricey for a water bottle, but the insulation performance is top-tier. Worth it.", rating: 4, userIdx: 24, productIdx: 395 },

  // 396: Sakura Collagen Skin Care Set
  { comment: "A complete pampering experience. The bunny hair band is so cute and the serum feels amazing.", rating: 5, userIdx: 20, productIdx: 396 },
  { comment: "The packaging is beautiful, making it a perfect birthday gift. My skin feels so hydrated.", rating: 5, userIdx: 47, productIdx: 396 },
  { comment: "Great value for five pieces. The facial brush is soft and cleans much better than just hands.", rating: 4, userIdx: 13, productIdx: 396 },
  { comment: "Lovely subtle scent. It didn't irritate my sensitive skin and left it feeling very firm.", rating: 5, userIdx: 32, productIdx: 396 },
  { comment: "Perfect for a self-care night. The makeup bag is a nice bonus for keeping everything organized.", rating: 4, userIdx: 9, productIdx: 396 },

  // 397: Whiskey Stones Gift Set by Royal Reserve
  { comment: "Excellent gift for a whiskey lover. They look very elegant in the glass and don't dilute the drink.", rating: 5, userIdx: 31, productIdx: 397 },
  { comment: "The artisan crafted stones are a conversation piece. They chill the spirits just enough.", rating: 4, userIdx: 4, productIdx: 397 },
  { comment: "High quality set with a nice storage pouch. Perfect for my dad's home bar.", rating: 5, userIdx: 17, productIdx: 397 },
  { comment: "No weird aftertaste from the stones. They are easy to clean and freeze quickly.", rating: 4, userIdx: 42, productIdx: 397 },
  { comment: "A classic and sophisticated gift. The presentation box is very premium and well-made.", rating: 5, userIdx: 25, productIdx: 397 },

  // 398: AeroGarden Grow Anything Seed Pod Kit
  { comment: "I love being able to grow my own rare peppers in my AeroGarden. Everything sprouted perfectly.", rating: 5, userIdx: 38, productIdx: 398 },
  { comment: "Very easy to use. The grow sponges are high quality and the liquid food lasts a long time.", rating: 5, userIdx: 23, productIdx: 398 },
  { comment: "Great way to extend the use of the garden. The domes help keep the humidity just right.", rating: 4, userIdx: 46, productIdx: 398 },
  { comment: "Saves money compared to buying pre-seeded pods. Fun for kids to watch their own seeds grow.", rating: 5, userIdx: 16, productIdx: 398 },
  { comment: "Consistent results every time. It’s a must-have for any indoor gardening enthusiast.", rating: 4, userIdx: 43, productIdx: 398 },

  // 399: Stanley Quencher H2.0 FlowState Tumbler
  { comment: "I finally understand the hype. The handle is so comfortable and it actually fits in my car.", rating: 5, userIdx: 35, productIdx: 399 },
  { comment: "Keeps me hydrated all day. It stays cold for 24 hours just like it says on the box.", rating: 5, userIdx: 27, productIdx: 399 },
  { comment: "The FlowState lid is great—no leaks around the straw. The colors are even prettier in person.", rating: 4, userIdx: 36, productIdx: 399 },
  { comment: "It’s huge, but that's what I needed. Very sturdy and high-quality build as expected from Stanley.", rating: 5, userIdx: 12, productIdx: 399 },
  { comment: "A bit heavy when full, but the insulation is incredible. Perfect for long road trips.", rating: 4, userIdx: 48, productIdx: 399 },

  // 400: Gardena Sileno Minimo - Robotic Lawn Mower
  { comment: "It really is incredibly quiet. I can let it run at night without disturbing the neighbors.", rating: 5, userIdx: 18, productIdx: 400 },
  { comment: "The Bluetooth app is very easy to use. My lawn has never looked so perfectly manicured.", rating: 5, userIdx: 42, productIdx: 400 },
  { comment: "Installation of the boundary wire took some time, but once it's done, it's fully automated.", rating: 4, userIdx: 9, productIdx: 400 },
  { comment: "Handles narrow passages surprisingly well. A great investment for a small to medium garden.", rating: 5, userIdx: 27, productIdx: 400 },
  { comment: "Reliable and efficient. It even works perfectly when it's raining outside.", rating: 4, userIdx: 11, productIdx: 400 },

  // 401: Weber Genesis E-315 Gas Grill
  { comment: "The heat distribution is perfect across the entire grate. Best grill I've ever owned.", rating: 5, userIdx: 33, productIdx: 401 },
  { comment: "Very sturdy build and the PureBlu burners ignite every single time. Weber quality is top-tier.", rating: 5, userIdx: 15, productIdx: 401 },
  { comment: "The porcelain-enameled grates are so easy to clean. Plenty of cooking space for parties.", rating: 4, userIdx: 49, productIdx: 401 },
  { comment: "Assembly instructions were very clear. It looks beautiful on my patio and cooks like a dream.", rating: 5, userIdx: 2, productIdx: 401 },
  { comment: "Expensive, but it's a professional-grade tool that feels like it will last for decades.", rating: 5, userIdx: 26, productIdx: 401 },

  // 402: WORX 22" Cordless Hedge Trimmer
  { comment: "So lightweight! I can trim all my hedges without feeling any fatigue in my arms.", rating: 5, userIdx: 8, productIdx: 402 },
  { comment: "The laser-cut blades provide a very clean cut. Minimal vibration compared to my old one.", rating: 5, userIdx: 37, productIdx: 402 },
  { comment: "Great for quick touch-ups. Just remember to buy the battery separately if you don't have one.", rating: 4, userIdx: 14, productIdx: 402 },
  { comment: "Very easy to maneuver. It handled some thicker branches much better than I expected.", rating: 5, userIdx: 22, productIdx: 402 },
  { comment: "Simple and effective tool. The safety switch is well-placed and easy to operate.", rating: 4, userIdx: 30, productIdx: 402 },

  // 403: Intex PureSpa Chevron Deluxe Hot Tub
  { comment: "Amazing way to relax after work. The setup was surprisingly fast and straightforward.", rating: 5, userIdx: 44, productIdx: 403 },
  { comment: "The app control is so convenient for heating it up before I even get home.", rating: 5, userIdx: 1, productIdx: 403 },
  { comment: "Very comfortable for 4 people. The Chevron design looks very elegant in my backyard.", rating: 4, userIdx: 18, productIdx: 403 },
  { comment: "The cover is very efficient at holding the heat. The bubbles are quite powerful and relaxing.", rating: 5, userIdx: 39, productIdx: 403 },
  { comment: "Great value for a portable spa. The water feels great and the saltwater system is a plus.", rating: 4, userIdx: 5, productIdx: 403 },

  // 404: Vivere Double Cotton Hammock with Stand
  { comment: "The stand is very easy to assemble and feels incredibly stable. Perfect for afternoon naps.", rating: 5, userIdx: 11, productIdx: 404 },
  { comment: "The fabric is soft and the colors are vibrant. It's plenty big enough for two adults.", rating: 5, userIdx: 29, productIdx: 404 },
  { comment: "Love the space-saving design. It fits perfectly on my small deck and is easy to move.", rating: 4, userIdx: 40, productIdx: 404 },
  { comment: "Very high weight capacity. The carry bag is useful for storing it away during the winter.", rating: 5, userIdx: 6, productIdx: 404 },
  { comment: "One of the best purchases for my garden. Durable, comfortable, and looks great.", rating: 5, userIdx: 24, productIdx: 404 },

  // 405: Bosch High Pressure Washer Accessories
  { comment: "Worked perfectly to draw water from my rain barrel. Very easy to connect and use.", rating: 5, userIdx: 20, productIdx: 405 },
  { comment: "Essential kit if you don't have a tap nearby. The self-priming works exactly as advertised.", rating: 4, userIdx: 47, productIdx: 405 },
  { comment: "Good quality hose and filter. It saved me a lot of hassle during my patio cleaning.", rating: 5, userIdx: 13, productIdx: 405 },
  { comment: "Compatible with my EasyAquatak. The filter keeps the pump safe from debris.", rating: 4, userIdx: 32, productIdx: 405 },
  { comment: "Simple accessory that makes the pressure washer much more versatile. Great value.", rating: 5, userIdx: 9, productIdx: 405 },

  // 406: Hozelock Auto Reel hose box
  { comment: "No more messy hoses on the ground! The rewind mechanism is smooth and very reliable.", rating: 5, userIdx: 31, productIdx: 406 },
  { comment: "The safe-lock system is great for peace of mind. Very easy to pull out and use.", rating: 5, userIdx: 4, productIdx: 406 },
  { comment: "Mounting it on the wall was simple. The 20m length is perfect for my garden size.", rating: 4, userIdx: 17, productIdx: 406 },
  { comment: "High quality anti-kink hose. It makes watering the garden a much more pleasant task.", rating: 5, userIdx: 42, productIdx: 406 },
  { comment: "A bit bulky on the wall, but the convenience of the auto-retract is worth it.", rating: 4, userIdx: 25, productIdx: 406 },

  // 407: Fiskars X27 Super Splitting Axe
  { comment: "This axe is incredible. It splits large logs in one hit that my old axe struggled with.", rating: 5, userIdx: 38, productIdx: 407 },
  { comment: "The balance is perfect and the weight is distributed well. Very durable handle.", rating: 5, userIdx: 23, productIdx: 407 },
  { comment: "The blade geometry is genius. It rarely gets stuck in the wood. Highly recommended.", rating: 5, userIdx: 46, productIdx: 407 },
  { comment: "Lightweight but packs a punch. It has made my winter prep much faster and easier.", rating: 4, userIdx: 16, productIdx: 407 },
  { comment: "A must-have for anyone with a fireplace. Fiskars quality is truly top-tier.", rating: 5, userIdx: 43, productIdx: 407 },

  // 408: Kärcher WD 3 Wet and Dry Vacuum
  { comment: "Suction power is amazing for both wet spills and dry dirt. Blower function is very useful.", rating: 5, userIdx: 35, productIdx: 408 },
  { comment: "Very lightweight and easy to roll around. Great for cleaning out the car and the garage.", rating: 5, userIdx: 27, productIdx: 408 },
  { comment: "The 17-liter container is the perfect size. Very easy to empty and the filters last well.", rating: 4, userIdx: 36, productIdx: 408 },
  { comment: "Rugged and simple design. It handles heavy-duty cleaning that my house vacuum can't.", rating: 5, userIdx: 12, productIdx: 408 },
  { comment: "Excellent value for money. Kärcher never fails to deliver reliable cleaning tools.", rating: 4, userIdx: 48, productIdx: 408 },

  // 409: Outdoor Solar String Lights (50ft)
  { comment: "They create such a beautiful atmosphere on my patio. The solar panel works perfectly.", rating: 5, userIdx: 0, productIdx: 409 },
  { comment: "Auto-on at dusk is a great feature. The Edison bulbs have a lovely vintage look.", rating: 5, userIdx: 19, productIdx: 409 },
  { comment: "Waterproof and durable. They survived several heavy storms without any problems.", rating: 4, userIdx: 40, productIdx: 409 },
  { comment: "The 4 lighting modes are a nice touch for different occasions. Very long string.", rating: 5, userIdx: 8, productIdx: 409 },
  { comment: "Great value for 50ft of lights. Easy to hang and they look much more expensive.", rating: 4, userIdx: 21, productIdx: 409 },

  // 410: Furbo 360° Dog Camera: Nanny Bundle
  { comment: "Being able to see my dog and toss treats while I'm at work is a huge stress reliever.", rating: 5, userIdx: 14, productIdx: 410 },
  { comment: "The 360 rotation is smooth and the barking alerts are very accurate. High-quality video.", rating: 5, userIdx: 32, productIdx: 410 },
  { comment: "A bit expensive, but the AI recognition of dog activity is impressive. Night vision is great.", rating: 4, userIdx: 7, productIdx: 410 },
  { comment: "My dog actually recognizes the sound and waits for the treat. Very fun and functional.", rating: 5, userIdx: 21, productIdx: 410 },
  { comment: "The subscription is a bit of a downside, but the hardware itself is top-tier for pet safety.", rating: 4, userIdx: 45, productIdx: 410 },

  // 411: Tractive GPS Tracker for Dogs
  { comment: "The live tracking mode is incredible. I finally feel safe taking my dog off-lead.", rating: 5, userIdx: 3, productIdx: 411 },
  { comment: "Virtual fence alerts work perfectly. It gives me peace of mind when he's in the garden.", rating: 4, userIdx: 28, productIdx: 411 },
  { comment: "Battery lasts several days and the device is truly waterproof. Great for active dogs.", rating: 5, userIdx: 19, productIdx: 411 },
  { comment: "Small enough that my dog doesn't even notice it on his collar. The app is very intuitive.", rating: 5, userIdx: 41, productIdx: 411 },
  { comment: "Worldwide coverage is a big plus for our hiking trips. Worth the small monthly fee.", rating: 4, userIdx: 10, productIdx: 411 },

  // 412: KONG Classic Dog Toy
  { comment: "Indestructible! This is the only toy my heavy chewer hasn't destroyed in ten minutes.", rating: 5, userIdx: 33, productIdx: 412 },
  { comment: "The gold standard for a reason. Stuff it with peanut butter and it keeps them busy for hours.", rating: 5, userIdx: 15, productIdx: 412 },
  { comment: "Great for fetch too because of the unpredictable bounce. Very durable natural rubber.", rating: 4, userIdx: 49, productIdx: 412 },
  { comment: "Easy to clean in the dishwasher. A must-have for every dog owner on the planet.", rating: 5, userIdx: 2, productIdx: 412 },
  { comment: "Simple but effective. It’s been my dog’s favorite toy since he was a puppy.", rating: 5, userIdx: 26, productIdx: 412 },

  // 413: Chuckit! Classic Launcher Ball Thrower
  { comment: "My arm doesn't get tired anymore! I can throw the ball so much further with this.", rating: 5, userIdx: 8, productIdx: 413 },
  { comment: "Keeps my hands clean and away from the slobber. Picking up the ball is so easy.", rating: 5, userIdx: 37, productIdx: 413 },
  { comment: "The ergonomic handle is comfortable and the distance you can get is amazing. Dogs love it.", rating: 4, userIdx: 14, productIdx: 413 },
  { comment: "Very sturdy plastic. It's a staple for our trips to the park or the beach.", rating: 5, userIdx: 22, productIdx: 413 },
  { comment: "Great value for money. It helps tire out my high-energy dog in half the time.", rating: 4, userIdx: 30, productIdx: 413 },

  // 414: PetSafe Drinkwell Multi-Tier Fountain
  { comment: "My cat drinks so much more water now. The multi-tier design is great for multiple pets.", rating: 5, userIdx: 44, productIdx: 414 },
  { comment: "The filtering system works well, the water always smells and tastes fresh for them.", rating: 5, userIdx: 1, productIdx: 414 },
  { comment: "Large capacity means I don't have to refill it every day. Very quiet motor.", rating: 4, userIdx: 18, productIdx: 414 },
  { comment: "Sturdy and easy to take apart for cleaning. The free-falling stream is very enticing.", rating: 5, userIdx: 39, productIdx: 414 },
  { comment: "Great for dogs and cats alike. It has helped keep my senior pet hydrated.", rating: 4, userIdx: 5, productIdx: 414 },

  // 415: Feandrea Multi-Level Cat Tree
  { comment: "My cats absolutely love the plush perches. It's very stable and doesn't wobble at all.", rating: 5, userIdx: 11, productIdx: 415 },
  { comment: "The sisal scratching posts have saved my furniture. The cave is nice and spacious.", rating: 5, userIdx: 29, productIdx: 415 },
  { comment: "Assembly was straightforward with clear instructions. Looks great in my living room.", rating: 4, userIdx: 40, productIdx: 415 },
  { comment: "Perfect height for cats who like to climb. The materials feel soft and high quality.", rating: 5, userIdx: 6, productIdx: 415 },
  { comment: "Great value for the size. It accommodates my two active kittens perfectly.", rating: 4, userIdx: 24, productIdx: 415 },

  // 416: SlowTon No Pull Dog Harness Set
  { comment: "Best harness we've tried. The seat belt attachment is a huge bonus for car safety.", rating: 5, userIdx: 20, productIdx: 416 },
  { comment: "Truly reduces pulling. The mesh is breathable and doesn't seem to irritate his skin.", rating: 5, userIdx: 47, productIdx: 416 },
  { comment: "Adjustable and easy to put on. The bungee leash absorbs shock during walks.", rating: 4, userIdx: 13, productIdx: 416 },
  { comment: "Very secure and well-padded. I feel much more in control during our daily walks.", rating: 5, userIdx: 32, productIdx: 416 },
  { comment: "The reflective strips are great for evening strolls. Excellent quality for the price.", rating: 4, userIdx: 9, productIdx: 416 },

  // 417: BFPETHOME Orthopedic Dog Bed
  { comment: "My senior lab sleeps so much better on this. The foam provides excellent joint support.", rating: 5, userIdx: 31, productIdx: 417 },
  { comment: "The removable cover is a lifesaver. It washes well and the waterproof lining works.", rating: 5, userIdx: 4, productIdx: 417 },
  { comment: "Very large and spacious. The bolstered sides act like a perfect pillow for him.", rating: 4, userIdx: 17, productIdx: 417 },
  { comment: "Non-skid bottom is great for my hardwood floors. Durable and looks comfortable.", rating: 5, userIdx: 42, productIdx: 417 },
  { comment: "A bit more expensive than basic beds, but the orthopedic quality is worth it.", rating: 4, userIdx: 25, productIdx: 417 },

  // 418: Hertzko Self-Cleaning Slicker Brush
  { comment: "Brilliant design! The retraction system makes cleaning the hair off so easy and fast.", rating: 5, userIdx: 38, productIdx: 418 },
  { comment: "Effective at removing loose fur and tangles. My long-haired cat actually enjoys it.", rating: 5, userIdx: 23, productIdx: 418 },
  { comment: "Saves so much time and prevents the mess of flying fur. The handle is very ergonomic.", rating: 4, userIdx: 46, productIdx: 418 },
  { comment: "Does a great job on my double-coated dog. Very sturdy and well-made brush.", rating: 5, userIdx: 16, productIdx: 418 },
  { comment: "Simple, effective, and hygienic. Best grooming tool I've purchased so far.", rating: 4, userIdx: 43, productIdx: 418 },

  // 419: SureFlap Microchip Cat Flap Connect
  { comment: "Finally, no more intruder cats! It works perfectly with her existing microchip.", rating: 5, userIdx: 35, productIdx: 419 },
  { comment: "The app control is so handy. I can lock the cat in for the night from my bed.", rating: 5, userIdx: 27, productIdx: 419 },
  { comment: "Great build quality. It gives me peace of mind knowing exactly when she comes and goes.", rating: 4, userIdx: 36, productIdx: 419 },
  { comment: "A bit technical to install, but the functionality is worth the effort and price.", rating: 5, userIdx: 12, productIdx: 419 },
  { comment: "No more need for annoying collars. It recognizes my cat instantly every time.", rating: 4, userIdx: 48, productIdx: 419 },

  // 420: NOCO Boost GB70 Jump Starter
  { comment: "A lifesaver! It started my 6.0L diesel truck instantly after sitting for weeks in the cold.", rating: 5, userIdx: 12, productIdx: 420 },
  { comment: "The build quality is rugged and the spark-proof technology makes it very safe for anyone to use.", rating: 5, userIdx: 34, productIdx: 420 },
  { comment: "Compact enough to fit under the seat. The built-in flashlight is incredibly bright for night repairs.", rating: 4, userIdx: 7, productIdx: 420 },
  { comment: "Expensive but worth every penny. It holds its charge for months without needing a top-up.", rating: 5, userIdx: 21, productIdx: 420 },
  { comment: "Much better than traditional jumper cables. No need to wait for another car to help you out.", rating: 5, userIdx: 45, productIdx: 420 },

  // 421: Bosch ICON Wiper Blades
  { comment: "The best wipers I've ever bought. They are completely silent and leave zero streaks on the glass.", rating: 5, userIdx: 3, productIdx: 421 },
  { comment: "Super easy to install. They handle heavy rain and snow much better than the factory blades.", rating: 5, userIdx: 28, productIdx: 421 },
  { comment: "ClearMax rubber really makes a difference. Even after six months, they still perform like new.", rating: 4, userIdx: 19, productIdx: 421 },
  { comment: "High quality and worth the extra cost. They don't chatter or skip even at highway speeds.", rating: 5, userIdx: 41, productIdx: 421 },
  { comment: "Solid beam-style design. They conform perfectly to the curve of my windshield.", rating: 4, userIdx: 10, productIdx: 421 },

  // 422: AstroAI Digital Tire Pressure Gauge
  { comment: "Very accurate compared to the cheap analog ones. The backlit screen is great for night use.", rating: 5, userIdx: 33, productIdx: 422 },
  { comment: "The inflator handle is sturdy and the quick connect coupler makes a perfect seal every time.", rating: 5, userIdx: 15, productIdx: 422 },
  { comment: "Makes maintaining tire pressure so much easier. The 0.1 resolution is perfect for precision.", rating: 4, userIdx: 49, productIdx: 422 },
  { comment: "Heavy-duty feel and very reliable. A must-have tool for any garage or emergency car kit.", rating: 5, userIdx: 2, productIdx: 422 },
  { comment: "The digital readout is easy to read and the air release valve is very handy for overfilled tires.", rating: 4, userIdx: 26, productIdx: 422 },

  // 423: Black+Decker 12V Pivot Auto Vacuum
  { comment: "The pivoting nozzle is a game changer for getting under the seats and into tight crevices.", rating: 5, userIdx: 11, productIdx: 423 },
  { comment: "Good suction for a 12V vacuum. It’s very convenient that it plugs right into the lighter socket.", rating: 4, userIdx: 37, productIdx: 423 },
  { comment: "Perfect for quick cleanups of crumbs and pet hair. The cord is long enough to reach the trunk.", rating: 5, userIdx: 14, productIdx: 423 },
  { comment: "Lightweight and easy to store. Much more practical than dragging out the big house vacuum.", rating: 4, userIdx: 22, productIdx: 423 },
  { comment: "Decent power, though it struggles a bit with deeply embedded dirt in the carpets.", rating: 3, userIdx: 30, productIdx: 423 },

  // 424: Nextbase 522GW Dash Cam
  { comment: "1440p video is crystal clear. The magnetic mount makes it so easy to remove when parking.", rating: 5, userIdx: 44, productIdx: 424 },
  { comment: "Alexa integration is actually very useful for hands-free control while driving. Great feature.", rating: 5, userIdx: 1, productIdx: 424 },
  { comment: "The Emergency SOS feature gives me great peace of mind. Very reliable recording and software.", rating: 4, userIdx: 18, productIdx: 424 },
  { comment: "Responsive touchscreen and high-quality build. The wide-angle lens captures everything.", rating: 5, userIdx: 39, productIdx: 424 },
  { comment: "A premium dash cam that works exactly as advertised. Night vision is surprisingly detailed.", rating: 5, userIdx: 5, productIdx: 424 },

  // 425: Meguiar's M205 Mirror Glaze Polish
  { comment: "This polish left my black car looking like a mirror. It removed all the light swirls effortlessly.", rating: 5, userIdx: 20, productIdx: 425 },
  { comment: "Very easy to work with, even for a beginner. No dusting and wipes off very cleanly.", rating: 5, userIdx: 29, productIdx: 425 },
  { comment: "Professional results at home. It provides a deep, rich gloss that lasts a long time.", rating: 4, userIdx: 40, productIdx: 425 },
  { comment: "Works great with a DA polisher. It's the perfect final step for a show-car finish.", rating: 5, userIdx: 6, productIdx: 425 },
  { comment: "Standard Meguiar's quality. A little goes a long way and the results are consistently great.", rating: 4, userIdx: 24, productIdx: 425 },

  // 426: Garmin DriveSmart 65 with Alexa
  { comment: "The large 6.95-inch screen is beautiful and very easy to see while driving. Best GPS yet.", rating: 5, userIdx: 13, productIdx: 426 },
  { comment: "Voice control with Alexa works flawlessly. I love being able to ask for directions hands-free.", rating: 5, userIdx: 47, productIdx: 426 },
  { comment: "Traffic updates are very accurate and have saved me hours of sitting in jams already.", rating: 4, userIdx: 32, productIdx: 426 },
  { comment: "Smart notifications and hands-free calling keep me focused on the road. Very reliable signal.", rating: 5, userIdx: 9, productIdx: 426 },
  { comment: "Great map detail and the points of interest are very helpful during long road trips.", rating: 4, userIdx: 17, productIdx: 426 },

  // 427: Armor All Car Cleaning Wipes
  { comment: "Super convenient for keeping the interior fresh. The 3-pack covers everything from glass to dash.", rating: 5, userIdx: 31, productIdx: 427 },
  { comment: "The glass wipes don't leave streaks and the protectant gives a nice shine without being greasy.", rating: 5, userIdx: 4, productIdx: 427 },
  { comment: "Perfect for quick touch-ups. I keep a pack in the glove box for spills and dust.", rating: 4, userIdx: 42, productIdx: 427 },
  { comment: "Great value for a bundle. They stay moist in the container for a surprisingly long time.", rating: 4, userIdx: 25, productIdx: 427 },
  { comment: "The cleaning wipes are tough on grime but gentle on the surfaces. Good everyday product.", rating: 5, userIdx: 34, productIdx: 427 },

  // 428: ThisWorx Car Vacuum Cleaner 2.0
  { comment: "Surprisingly powerful for such a small unit. The long cord reaches every corner of my SUV.", rating: 5, userIdx: 38, productIdx: 428 },
  { comment: "The included attachments are great for reaching between seats. Love the carry bag.", rating: 5, userIdx: 23, productIdx: 428 },
  { comment: "Integrated LED light is a nice touch for seeing under the seats. Very lightweight and handy.", rating: 4, userIdx: 46, productIdx: 428 },
  { comment: "Excellent for maintaining a clean car between deep cleans. Very easy to empty the filter.", rating: 5, userIdx: 16, productIdx: 428 },
  { comment: "Perfect for travel and RV use. It’s compact but gets the job done efficiently.", rating: 4, userIdx: 43, productIdx: 428 },

  // 429: AstroAI Multimeter Tester
  { comment: "Very fast and accurate. The color screen is a huge upgrade over traditional displays.", rating: 5, userIdx: 35, productIdx: 429 },
  { comment: "The auto-ranging feature works perfectly. Great for both car diagnostics and home electrical.", rating: 5, userIdx: 27, productIdx: 429 },
  { comment: "High build quality and the thermal protection feels safe. A professional tool for a good price.", rating: 4, userIdx: 36, productIdx: 429 },
  { comment: "TRMS measurements are very consistent. The continuity test is fast with a loud buzzer.", rating: 5, userIdx: 12, productIdx: 429 },
  { comment: "Impressive 10000 count resolution. It’s quickly become my favorite meter for troubleshooting.", rating: 4, userIdx: 48, productIdx: 429 },

  // 430: Samsonite Omni PC Hardside Expandable Luggage
  { comment: "Extremely durable. I've taken it on ten flights and it barely has a scratch. The wheels are so smooth.", rating: 5, userIdx: 14, productIdx: 430 },
  { comment: "The expansion feature is a lifesaver for souvenirs. The TSA lock is very easy to set and use.", rating: 5, userIdx: 32, productIdx: 430 },
  { comment: "Very lightweight for a hardshell. It fits perfectly in the overhead bin of most major airlines.", rating: 4, userIdx: 7, productIdx: 430 },
  { comment: "Solid construction and great interior organization. It feels like it will last for many years of travel.", rating: 5, userIdx: 21, productIdx: 430 },
  { comment: "The polycarbonate shell flexes under pressure but doesn't crack. Great value for a Samsonite.", rating: 4, userIdx: 45, productIdx: 430 },

  // 431: Apple AirTag (4-Pack)
  { comment: "Essential for checked luggage! It’s such a relief to see exactly where my bags are in real-time.", rating: 5, userIdx: 3, productIdx: 431 },
  { comment: "Precision finding is incredibly accurate. I use them for my keys and backpack as well.", rating: 5, userIdx: 28, productIdx: 431 },
  { comment: "Setup took literally ten seconds. The Find My network is massive and works everywhere.", rating: 5, userIdx: 19, productIdx: 431 },
  { comment: "A must-have for peace of mind while traveling. The batteries last a long time and are easy to swap.", rating: 4, userIdx: 41, productIdx: 431 },
  { comment: "Great value in the 4-pack. Small, light, and the speaker is loud enough to find items nearby.", rating: 5, userIdx: 10, productIdx: 431 },

  // 432: Osprey Farpoint 40 Men's Travel Backpack
  { comment: "The perfect carry-on backpack. It opens like a suitcase which makes packing and unpacking so easy.", rating: 5, userIdx: 33, productIdx: 432 },
  { comment: "Very comfortable harness and hipbelt. I carried this for miles through Europe without any back pain.", rating: 5, userIdx: 15, productIdx: 432 },
  { comment: "The internal compression straps really help to maximize space. Very durable zippers and fabric.", rating: 4, userIdx: 49, productIdx: 432 },
  { comment: "I love that the straps can be stowed away for checking in the bag. Osprey quality is unbeatable.", rating: 5, userIdx: 2, productIdx: 432 },
  { comment: "Fits perfectly in the overhead lockers. The padded laptop sleeve is very secure and well-placed.", rating: 4, userIdx: 26, productIdx: 432 },

  // 433: Trtl Travel Pillow
  { comment: "Better than any U-shaped pillow I've used. It actually keeps my head from falling forward.", rating: 5, userIdx: 8, productIdx: 433 },
  { comment: "Lightweight and doesn't take up much space. It's much easier to carry than a bulky foam pillow.", rating: 4, userIdx: 37, productIdx: 433 },
  { comment: "I actually managed to sleep on a 12-hour flight for the first time. The support is fantastic.", rating: 5, userIdx: 14, productIdx: 433 },
  { comment: "Takes a couple of tries to wrap it correctly, but once you do, it’s very comfortable and stable.", rating: 4, userIdx: 22, productIdx: 433 },
  { comment: "The fleece material is soft and the internal support is the perfect height for neck alignment.", rating: 5, userIdx: 30, productIdx: 433 },

  // 434: JBL Clip 4: Portable Speaker
  { comment: "Perfect for travel! I clip it to my backpack while hiking. The sound is surprisingly loud and clear.", rating: 5, userIdx: 44, productIdx: 434 },
  { comment: "Truly waterproof. I used it by the pool all week without any issues. Very rugged build.", rating: 5, userIdx: 1, productIdx: 434 },
  { comment: "Battery life is excellent for its size. The carabiner design is much sturdier than the previous model.", rating: 4, userIdx: 18, productIdx: 434 },
  { comment: "Great bass for such a tiny device. It's the perfect companion for solo travelers and beach days.", rating: 5, userIdx: 39, productIdx: 434 },
  { comment: "Compact and stylish. It’s easy to pack and loud enough to fill a hotel room with music.", rating: 4, userIdx: 5, productIdx: 434 },

  // 435: Acer Universal Travel Plug Adapter
  { comment: "The only adapter you'll ever need. The multiple USB-C ports are perfect for charging all my tech.", rating: 5, userIdx: 11, productIdx: 435 },
  { comment: "Worked flawlessly across Europe and the UK. It handles multiple devices at once without overheating.", rating: 5, userIdx: 29, productIdx: 435 },
  { comment: "Very compact for having so many ports. The sliding mechanism for different plugs feels very solid.", rating: 4, userIdx: 40, productIdx: 435 },
  { comment: "High power output, it even charged my tablet quickly. Essential for international travelers.", rating: 5, userIdx: 6, productIdx: 435 },
  { comment: "A bit bulky in some tight outlets, but the versatility is worth it. Great build quality.", rating: 4, userIdx: 24, productIdx: 435 },

  // 436: Hard Storage Case for Anker 737
  { comment: "Fits the power bank and cables perfectly. It provides great protection in my carry-on bag.", rating: 5, userIdx: 20, productIdx: 436 },
  { comment: "The internal mesh pocket is great for keeping the charging cable organized. Very sturdy shell.", rating: 5, userIdx: 47, productIdx: 436 },
  { comment: "High quality zipper and the material feels very durable. A must-have to protect such an expensive battery.", rating: 4, userIdx: 13, productIdx: 436 },
  { comment: "Compact and easy to carry. It doesn't add much bulk but gives a lot of peace of mind.", rating: 5, userIdx: 32, productIdx: 436 },
  { comment: "Simple, effective, and exactly as described. The shockproof design has already saved my battery once.", rating: 4, userIdx: 9, productIdx: 436 },

  // 437: Bagail 8 Set Packing Cubes
  { comment: "Total game changer for organization. I can fit so much more in my suitcase with these.", rating: 5, userIdx: 31, productIdx: 437 },
  { comment: "The laundry bag included is very useful. The zippers are strong and the mesh is breathable.", rating: 5, userIdx: 4, productIdx: 437 },
  { comment: "Great variety of sizes. They make finding things in my bag so much faster during the trip.", rating: 4, userIdx: 17, productIdx: 437 },
  { comment: "Durable fabric that doesn't rip even when stuffed full. The Aqua color is very pretty too.", rating: 5, userIdx: 42, productIdx: 437 },
  { comment: "Highly recommend for anyone who travels. They make repacking a breeze and save so much space.", rating: 4, userIdx: 25, productIdx: 437 },

  // 438: Venture 4th Money Belt
  { comment: "Very slim and comfortable under clothes. I felt much safer walking through crowded tourist areas.", rating: 5, userIdx: 38, productIdx: 438 },
  { comment: "The RFID blocking gives me peace of mind. It’s plenty big enough for two passports and cash.", rating: 5, userIdx: 23, productIdx: 438 },
  { comment: "Soft material that doesn't irritate the skin. The adjustable strap stays in place perfectly.", rating: 4, userIdx: 46, productIdx: 438 },
  { comment: "Much better than a traditional wallet for travel. It’s nearly invisible under a t-shirt.", rating: 5, userIdx: 16, productIdx: 438 },
  { comment: "Lightweight and secure. A very practical and affordable investment for international trips.", rating: 4, userIdx: 43, productIdx: 438 },

  // 439: Grayl GeoPress Water Purifier
  { comment: "Life-saving technology. I used this for a month in South America and never got sick.", rating: 5, userIdx: 35, productIdx: 439 },
  { comment: "So fast! It literally takes seconds to get clean water from a stream. Incredible design.", rating: 5, userIdx: 27, productIdx: 439 },
  { comment: "Built like a tank. It’s heavy, but worth the weight to not have to carry liters of water.", rating: 4, userIdx: 36, productIdx: 439 },
  { comment: "Very easy to use—just fill, press, and drink. The water tastes completely fresh and clean.", rating: 5, userIdx: 12, productIdx: 439 },
  { comment: "Essential for backcountry hiking and travel to countries with questionable tap water.", rating: 5, userIdx: 48, productIdx: 439 },

  // 440: Echo Dot Bundle (5th Gen) + Battery Base
  { comment: "Love the portability! Taking Alexa to the garden for a few hours is a game changer.", rating: 5, userIdx: 12, productIdx: 440 },
  { comment: "The sound quality of the 5th gen is impressive. The battery base fits perfectly.", rating: 5, userIdx: 34, productIdx: 440 },
  { comment: "Deep Sea Blue is a beautiful color. 5 hours of playback is plenty for my needs.", rating: 4, userIdx: 7, productIdx: 440 },
  { comment: "Very convenient bundle. It's great not being tethered to a wall outlet all the time.", rating: 5, userIdx: 21, productIdx: 440 },
  { comment: "The base is a bit bulky, but the added mobility makes it worth the extra size.", rating: 4, userIdx: 45, productIdx: 440 },

  // 441: Philips Hue Essential Starter Kit
  { comment: "The gold standard for smart lighting. The colors are incredibly vibrant and accurate.", rating: 5, userIdx: 3, productIdx: 441 },
  { comment: "The Bridge makes the connection so stable. Never had a single drop-off with these bulbs.", rating: 5, userIdx: 28, productIdx: 441 },
  { comment: "Expensive but worth it. The sync with Spotify and movies creates an amazing atmosphere.", rating: 5, userIdx: 19, productIdx: 441 },
  { comment: "Integration with Apple HomeKit was seamless. The app is very polished and easy to use.", rating: 4, userIdx: 41, productIdx: 441 },
  { comment: "Best smart bulbs on the market. The range of whites from warm to cool is perfect for productivity.", rating: 5, userIdx: 10, productIdx: 441 },

  // 442: Ring Video Doorbell (2nd Gen)
  { comment: "Installation was a breeze. I feel much safer knowing exactly who is at my door.", rating: 5, userIdx: 33, productIdx: 442 },
  { comment: "1080p video is very sharp. The two-way audio is clear enough to talk to delivery drivers.", rating: 4, userIdx: 15, productIdx: 442 },
  { comment: "Great battery life so far. The motion zones are easy to customize to avoid false alerts.", rating: 5, userIdx: 49, productIdx: 442 },
  { comment: "A must-have for any smart home. It works perfectly with my Echo Show in the kitchen.", rating: 5, userIdx: 2, productIdx: 442 },
  { comment: "Solid performance, though I wish the night vision was just a little bit brighter.", rating: 4, userIdx: 26, productIdx: 442 },

  // 443: Google Nest Learning Thermostat (3rd Gen)
  { comment: "It actually paid for itself in energy savings within the first year. Highly intelligent.", rating: 5, userIdx: 8, productIdx: 443 },
  { comment: "The design is gorgeous. It looks like a piece of art on my wall instead of a gadget.", rating: 5, userIdx: 37, productIdx: 443 },
  { comment: "I love that it learns my schedule automatically. I never have to touch it anymore.", rating: 5, userIdx: 14, productIdx: 443 },
  { comment: "The Farsight feature is very cool—it lights up when I walk into the room.", rating: 4, userIdx: 22, productIdx: 443 },
  { comment: "Easy to control from my phone while I'm away. Very reliable and accurate sensors.", rating: 5, userIdx: 30, productIdx: 443 },

  // 444: TP-Link Tapo Smart Plug Mini (4-Pack)
  { comment: "Incredible value for a 4-pack. They are so small they don't block the other outlet.", rating: 5, userIdx: 44, productIdx: 444 },
  { comment: "Setup with Alexa was instant. I use them for my lamps and coffee maker.", rating: 5, userIdx: 1, productIdx: 444 },
  { comment: "No hub required is a huge plus. The schedule feature in the Tapo app works perfectly.", rating: 4, userIdx: 18, productIdx: 444 },
  { comment: "Very reliable connection. They haven't gone offline once since I installed them.", rating: 5, userIdx: 39, productIdx: 444 },
  { comment: "Simple, effective, and cheap. The best way to start automating your home on a budget.", rating: 4, userIdx: 5, productIdx: 444 },

  // 445: Govee RGBIC LED Strip Lights (10m)
  { comment: "The segmented color control is amazing! You can have multiple colors on one strip.", rating: 5, userIdx: 11, productIdx: 445 },
  { comment: "The music sync mode is so much fun for parties. The colors are bright and vivid.", rating: 5, userIdx: 29, productIdx: 445 },
  { comment: "Very easy to install and the adhesive is quite strong. The Govee app is surprisingly deep.", rating: 4, userIdx: 40, productIdx: 445 },
  { comment: "Great length for the price. Works perfectly with Google Assistant for voice control.", rating: 5, userIdx: 6, productIdx: 445 },
  { comment: "Fantastic value. It completely transformed the look of my gaming room setup.", rating: 4, userIdx: 24, productIdx: 445 },

  // 446: Blink Outdoor 4th Gen Camera Mount
  { comment: "Much better than the mounts that come with the cameras. Great range of motion.", rating: 5, userIdx: 20, productIdx: 446 },
  { comment: "The sync module mount keeps things very tidy. Sturdy and weatherproof as advertised.", rating: 5, userIdx: 47, productIdx: 446 },
  { comment: "Very easy to adjust the angle to get the perfect view of my driveway. Good quality.", rating: 4, userIdx: 13, productIdx: 446 },
  { comment: "Provides much more security than the standard clips. Highly recommend for outdoor setups.", rating: 5, userIdx: 32, productIdx: 446 },
  { comment: "Simple but essential upgrade for any Blink user. The 360-degree rotation is very smooth.", rating: 4, userIdx: 9, productIdx: 446 },

  // 447: Nanoleaf Smart LED Ceiling Lights
  { comment: "Matter support makes it very future-proof. The colors are rich and the whites are very crisp.", rating: 5, userIdx: 31, productIdx: 447 },
  { comment: "The brightness level is impressive for a downlight. The music sync is a cool bonus.", rating: 4, userIdx: 4, productIdx: 447 },
  { comment: "Seamless control through my HomePod. It reacts almost instantly to voice commands.", rating: 5, userIdx: 17, productIdx: 447 },
  { comment: "Beautiful design and easy to install. The tunable whites are perfect for changing moods.", rating: 5, userIdx: 42, productIdx: 447 },
  { comment: "A bit pricey for one light, but the technology and color quality are definitely premium.", rating: 4, userIdx: 25, productIdx: 447 },

  // 448: MAMNV Robot Vacuum and Mop
  { comment: "The suction power is insane! It picks up all the pet hair on my hardwood floors easily.", rating: 5, userIdx: 38, productIdx: 448 },
  { comment: "The self-empty base is a lifesaver. I only have to deal with it once every few months.", rating: 5, userIdx: 23, productIdx: 448 },
  { comment: "LiDAR navigation is very smart—it doesn't bump into furniture or get lost under the bed.", rating: 4, userIdx: 46, productIdx: 448 },
  { comment: "The mopping function is surprisingly good for light daily cleaning. Very long runtime.", rating: 5, userIdx: 16, productIdx: 448 },
  { comment: "Great value compared to the big brands. Alexa voice control works perfectly every time.", rating: 4, userIdx: 43, productIdx: 448 },

  // 449: Eve Door & Window Smart Sensor
  { comment: "The reliability of Thread makes this sensor incredibly fast. No lag on notifications.", rating: 5, userIdx: 35, productIdx: 449 },
  { comment: "Privacy is a big deal for me, so I love that this works entirely within Apple HomeKit.", rating: 5, userIdx: 27, productIdx: 449 },
  { comment: "Very discrete design. It’s perfect for automating my hallway lights when I open the front door.", rating: 4, userIdx: 36, productIdx: 449 },
  { comment: "Excellent build quality. It’s very responsive and the setup was just scanning a code.", rating: 5, userIdx: 12, productIdx: 449 },
  { comment: "Battery life is very good. It’s peace of mind knowing the status of my windows from anywhere.", rating: 4, userIdx: 48, productIdx: 449 },

  // 450: Stasher Platinum Silicone Reusable Bag
  { comment: "Best alternative to Ziploc bags. They seal perfectly and I love that they can go in the dishwasher.", rating: 5, userIdx: 14, productIdx: 450 },
  { comment: "Great for sous-vide cooking. The silicone is thick and high quality, worth the initial investment.", rating: 5, userIdx: 32, productIdx: 450 },
  { comment: "So versatile! I use them for snacks, leftovers, and even travel toiletries. Very durable.", rating: 4, userIdx: 7, productIdx: 450 },
  { comment: "Plastic-free and eco-friendly. They take a bit of time to dry inside, but they are fantastic.", rating: 4, userIdx: 21, productIdx: 450 },
  { comment: "Excellent seal. No leaks even with liquids. A must-have for a zero-waste kitchen.", rating: 5, userIdx: 45, productIdx: 450 },

  // 451: Lomi 3 Electric Compost
  { comment: "Life-changing for apartment living. No more smelly food scraps in the trash can!", rating: 5, userIdx: 3, productIdx: 451 },
  { comment: "Quiet and efficient. It turns my kitchen waste into dirt in just a few hours. Amazing tech.", rating: 5, userIdx: 28, productIdx: 451 },
  { comment: "Expensive, but it really reduces our household waste. The dirt is great for my indoor plants.", rating: 4, userIdx: 19, productIdx: 451 },
  { comment: "The design is sleek and fits well on my counter. Very simple to operate and keep clean.", rating: 5, userIdx: 41, productIdx: 451 },
  { comment: "A bit loud on the heavy cycle, but the lack of odor is incredible. Best composter on the market.", rating: 4, userIdx: 10, productIdx: 451 },

  // 452: Jackery SolarSaga 100W Solar Panel
  { comment: "High efficiency even on slightly cloudy days. Pairs perfectly with my Explorer station.", rating: 5, userIdx: 33, productIdx: 452 },
  { comment: "The foldable design makes it so easy to store in the RV. The USB outputs are very handy.", rating: 5, userIdx: 15, productIdx: 452 },
  { comment: "Rugged and well-built for outdoor use. It charges my phone directly in no time.", rating: 4, userIdx: 49, productIdx: 452 },
  { comment: "Great for off-grid camping. It's lightweight and the kickstands are very stable.", rating: 5, userIdx: 2, productIdx: 452 },
  { comment: "Bifacial design really seems to boost the charging speed compared to older models.", rating: 4, userIdx: 26, productIdx: 452 },

  // 453: Reusable Beeswax Wrap - 9 Pack
  { comment: "The fruit patterns are so cute! They work much better than plastic wrap for cheese and veggies.", rating: 5, userIdx: 8, productIdx: 453 },
  { comment: "Great variety of sizes in the pack. They are easy to wash and reuse again and again.", rating: 4, userIdx: 37, productIdx: 453 },
  { comment: "Zero-waste and plastic-free. They smell slightly like honey which is lovely.", rating: 5, userIdx: 14, productIdx: 453 },
  { comment: "They stick well with the warmth of your hands. A perfect sustainable swap for the kitchen.", rating: 4, userIdx: 22, productIdx: 453 },
  { comment: "A few wraps lost their stickiness after several months, but most are still going strong.", rating: 3, userIdx: 30, productIdx: 453 },

  // 454: Rocketbook Core Reusable Smart Notebook
  { comment: "I love being able to digitize my notes instantly. The app works perfectly with the symbols.", rating: 5, userIdx: 44, productIdx: 454 },
  { comment: "The damp cloth erases everything cleanly without leaving 'ghost' marks. Very clever.", rating: 5, userIdx: 1, productIdx: 454 },
  { comment: "Great for students. I've saved so much paper this semester using just one notebook.", rating: 4, userIdx: 18, productIdx: 454 },
  { comment: "The Frixion pen writes smoothly. It’s the perfect bridge between paper and digital.", rating: 5, userIdx: 39, productIdx: 454 },
  { comment: "Letter size is perfect for detailed diagrams. Dries quickly so no smudging while writing.", rating: 4, userIdx: 5, productIdx: 454 },

  // 455: Blueland Clean Home Kit
  { comment: "The bottles look beautiful and the tablets dissolve quickly. Cleaning performance is solid.", rating: 5, userIdx: 11, productIdx: 455 },
  { comment: "I love reducing my plastic waste. The hand soap smells great and doesn't dry out my skin.", rating: 5, userIdx: 29, productIdx: 455 },
  { comment: "The multi-surface cleaner works as well as the leading brands. Very happy with this switch.", rating: 4, userIdx: 40, productIdx: 455 },
  { comment: "Simple, effective, and much better for the environment. The kit is a great value.", rating: 5, userIdx: 6, productIdx: 455 },
  { comment: "Great way to stop buying water in plastic bottles. The bathroom cleaner is quite powerful.", rating: 4, userIdx: 24, productIdx: 455 },

  // 456: Supfine Magnetic Case for iPhone 15
  { comment: "Forest Green color is stunning. MagSafe connection is very strong and secure.", rating: 5, userIdx: 20, productIdx: 456 },
  { comment: "The matte finish feels great and truly resists fingerprints. Dropped it once and no damage.", rating: 5, userIdx: 47, productIdx: 456 },
  { comment: "Translucent look is very sleek. It fits the phone perfectly without adding much bulk.", rating: 4, userIdx: 13, productIdx: 456 },
  { comment: "Military-grade protection that actually looks good. Buttons are very clicky and responsive.", rating: 5, userIdx: 32, productIdx: 456 },
  { comment: "High quality materials. The magnetic alignment makes wireless charging a breeze.", rating: 4, userIdx: 9, productIdx: 456 },

  // 457: Vikings Blade Chieftain 'Odin' Razor
  { comment: "Best shave I've had in years. It’s heavy, well-balanced, and looks like a work of art.", rating: 5, userIdx: 31, productIdx: 457 },
  { comment: "No more expensive plastic cartridges! This safety razor is much better for my skin and the planet.", rating: 5, userIdx: 4, productIdx: 457 },
  { comment: "The travel case is very high quality. The included Swedish blades are incredibly sharp.", rating: 4, userIdx: 17, productIdx: 457 },
  { comment: "It takes a little practice if you're used to disposables, but the results are worth it.", rating: 5, userIdx: 42, productIdx: 457 },
  { comment: "A solid, heavy-duty tool. It feels like it will last a lifetime. Zero irritation or nicks.", rating: 5, userIdx: 25, productIdx: 457 },

  // 458: Three Leaf Recycled Paper Pencils
  { comment: "You can actually see the recycled paper layers. They sharpen very easily and write smoothly.", rating: 5, userIdx: 38, productIdx: 458 },
  { comment: "Wood-free and sustainable. The HB graphite is high quality and perfect for sketching.", rating: 5, userIdx: 23, productIdx: 458 },
  { comment: "The latex-free eraser works surprisingly well. Great for school and very eco-friendly.", rating: 4, userIdx: 46, productIdx: 458 },
  { comment: "A simple way to be more green at work. They feel sturdy and the 10-pack is a good value.", rating: 5, userIdx: 16, productIdx: 458 },
  { comment: "Unique look and feel. They are a great conversation starter about recycled products.", rating: 4, userIdx: 43, productIdx: 458 },

  // 459: Philips AUT9340 Reverse Osmosis System
  { comment: "The water tastes amazing—better than bottled water. The tankless design saves so much space.", rating: 5, userIdx: 35, productIdx: 459 },
  { comment: "Very efficient filtration. I love that there's no standing water, making it much more hygienic.", rating: 5, userIdx: 27, productIdx: 459 },
  { comment: "Installation was straightforward under the sink. The TDS reduction is clearly noticeable.", rating: 4, userIdx: 36, productIdx: 459 },
  { comment: "Great eco-friendly solution for clean water. No more plastic bottles for my family.", rating: 5, userIdx: 12, productIdx: 459 },
  { comment: "High flow rate for a 400 GPD system. It’s quiet and the quality of the faucet is excellent.", rating: 5, userIdx: 48, productIdx: 459 },

  // 460: Giusti - Aceto Balsamico di Modena IGP 3 Gold Medals
  { comment: "The density and sweetness are incredible. A few drops on Parmigiano or strawberries change everything.", rating: 5, userIdx: 14, productIdx: 460 },
  { comment: "Best balsamic I've ever tasted. You can really perceive the honey and vanilla notes from the barrels.", rating: 5, userIdx: 32, productIdx: 460 },
  { comment: "Very rich and complex. It's thick enough to be used as a glaze without reducing it. Truly gourmet.", rating: 5, userIdx: 7, productIdx: 460 },
  { comment: "Expensive but worth it for special occasions. The bottle also makes a beautiful gift for foodies.", rating: 4, userIdx: 21, productIdx: 460 },
  { comment: "A staple in my kitchen. Much better than the watery supermarket versions. Pure Italian excellence.", rating: 5, userIdx: 45, productIdx: 460 },

  // 461: GHIRARDELLI Minis Milk Chocolate Assortment
  { comment: "The perfect bite-sized treat. The sea salt caramel is definitely the standout flavor in the bag.", rating: 5, userIdx: 3, productIdx: 461 },
  { comment: "Ghirardelli milk chocolate is so creamy. Love having these minis for a quick sweet fix.", rating: 5, userIdx: 28, productIdx: 461 },
  { comment: "Great variety. They arrived fresh and none of the pieces were broken or melted. Very high quality.", rating: 4, userIdx: 19, productIdx: 461 },
  { comment: "Excellent for sharing at the office. The individual wrapping keeps them fresh and clean.", rating: 5, userIdx: 41, productIdx: 461 },
  { comment: "Classic Ghirardelli taste. A bit pricey for the size, but you pay for the premium ingredients.", rating: 4, userIdx: 10, productIdx: 461 },

  // 462: Lee Kum Kee Chili Garlic Sauce
  { comment: "The perfect balance of heat and savory garlic. I use it in almost all my stir-fry dishes.", rating: 5, userIdx: 33, productIdx: 462 },
  { comment: "So versatile! Great as a dipping sauce for dumplings or to add a kick to simple noodles.", rating: 5, userIdx: 15, productIdx: 462 },
  { comment: "The 2-pack is a great value because we go through this stuff so fast. Essential pantry item.", rating: 4, userIdx: 49, productIdx: 462 },
  { comment: "Authentic flavor and consistent quality. It’s spicy but doesn't overpower the other ingredients.", rating: 5, userIdx: 2, productIdx: 462 },
  { comment: "A bit saltier than other brands, so be careful when seasoning your dish. Otherwise, perfect.", rating: 4, userIdx: 26, productIdx: 462 },

  // 463: La Tourangelle White & Black Truffle Oil Set
  { comment: "Transform your home cooking into restaurant quality. A tiny drizzle on risotto is magic.", rating: 5, userIdx: 8, productIdx: 463 },
  { comment: "The earthy aroma is very potent. I love having both the white and black oils for different recipes.", rating: 5, userIdx: 37, productIdx: 463 },
  { comment: "Great gift set for home chefs. The quality of the base oil is high and the infusion is balanced.", rating: 4, userIdx: 14, productIdx: 463 },
  { comment: "Excellent on popcorn or fries for a gourmet twist. The bottles are the perfect size for gifting.", rating: 5, userIdx: 22, productIdx: 463 },
  { comment: "Very intense flavor, use sparingly! It adds a wonderful depth to any mushroom-based dish.", rating: 4, userIdx: 30, productIdx: 463 },

  // 464: Manukora Raw Manuka Honey (MGO 600+)
  { comment: "Truly medical-grade honey. It has helped my throat and digestion immensely. Worth the price.", rating: 5, userIdx: 44, productIdx: 464 },
  { comment: "The texture is thick and creamy, and the taste is unique and rich. You can feel the quality.", rating: 5, userIdx: 1, productIdx: 464 },
  { comment: "Fully traceable and authentic. It’s expensive, but for the MGO 600+ rating, it’s a fair deal.", rating: 5, userIdx: 18, productIdx: 464 },
  { comment: "I use a teaspoon a day for immune support. It’s the best Manuka honey I’ve tried so far.", rating: 4, userIdx: 39, productIdx: 464 },
  { comment: "Great for daily wellness. The jar is a bit small, but a little goes a long way with this potency.", rating: 5, userIdx: 5, productIdx: 464 },

  // 465: Smirly Large Bamboo Charcuterie Board Set
  { comment: "The ultimate entertaining set! The hidden drawers for the knives are a brilliant design touch.", rating: 5, userIdx: 11, productIdx: 465 },
  { comment: "Very sturdy and high-quality bamboo. The slate labels are very helpful for identifying cheeses.", rating: 5, userIdx: 29, productIdx: 465 },
  { comment: "Perfect size for a large gathering. It makes any appetizer spread look professional and elegant.", rating: 4, userIdx: 40, productIdx: 465 },
  { comment: "Beautifully packaged, made for a fantastic housewarming gift. Easy to clean and very durable.", rating: 5, userIdx: 6, productIdx: 465 },
  { comment: "Tons of space for meats, cheeses, and fruits. The accessories included are very well-made.", rating: 5, userIdx: 24, productIdx: 465 },

  // 466: Illy Intenso Espresso Ground Coffee
  { comment: "Deep, dark, and full of flavor. The cocoa notes are very prominent and the crema is perfect.", rating: 5, userIdx: 20, productIdx: 466 },
  { comment: "Illy is my favorite coffee brand. The pressurized tins keep the ground coffee incredibly fresh.", rating: 5, userIdx: 47, productIdx: 466 },
  { comment: "Robust profile that isn't too acidic. Perfect for a morning espresso or a strong latte.", rating: 4, userIdx: 13, productIdx: 466 },
  { comment: "Great value in the 3-pack. Consistent roast and perfect grind for my moka pot.", rating: 5, userIdx: 32, productIdx: 466 },
  { comment: "The Intenso roast is perfect for those who like a bold, traditional Italian espresso experience.", rating: 4, userIdx: 9, productIdx: 466 },

  // 467: McCormick Gourmet White Summer Truffle Salt
  { comment: "The aroma when you open the jar is incredible. It elevates simple eggs to a whole new level.", rating: 5, userIdx: 31, productIdx: 467 },
  { comment: "Excellent on roasted potatoes. The truffle flavor is authentic and not chemically at all.", rating: 5, userIdx: 4, productIdx: 467 },
  { comment: "A bit pricey for salt, but a tiny pinch adds so much gourmet flavor. Great for finishing pasta.", rating: 4, userIdx: 17, productIdx: 467 },
  { comment: "The 2-pack is perfect for keeping one and gifting the other. High-quality summer truffles.", rating: 5, userIdx: 42, productIdx: 467 },
  { comment: "Rich and earthy. It’s become a staple finishing touch for almost all my gourmet dishes.", rating: 4, userIdx: 25, productIdx: 467 },

  // 468: Momofuku Extra Spicy Chili Crunch
  { comment: "David Chang knows what he's doing. The crunch is amazing and the extra spice is legit.", rating: 5, userIdx: 38, productIdx: 468 },
  { comment: "Addictive! I put this on everything from pizza to eggs. The garlic and shallots are so flavorful.", rating: 5, userIdx: 23, productIdx: 468 },
  { comment: "Definitely hotter than the original version. Perfect for those who love a real spicy kick.", rating: 4, userIdx: 46, productIdx: 468 },
  { comment: "The texture is the best part. It adds so much character and heat to any simple meal.", rating: 5, userIdx: 16, productIdx: 468 },
  { comment: "Expensive but the 2-pack is worth it. It’s the best chili crisp on the market, period.", rating: 4, userIdx: 43, productIdx: 468 },

  // 469: Fortnum & Mason Darjeeling Tea
  { comment: "The champagne of teas. The floral notes are delicate and the quality is clearly superior.", rating: 5, userIdx: 35, productIdx: 469 },
  { comment: "The tin is iconic and keeps the loose leaves very fresh. A must-have for tea connoisseurs.", rating: 5, userIdx: 27, productIdx: 469 },
  { comment: "Soothing and elegant. It’s perfect for afternoon tea with some light biscuits or scones.", rating: 4, userIdx: 36, productIdx: 469 },
  { comment: "High-quality tippie golden leaves. The flavor is bright, crisp, and very refreshing.", rating: 5, userIdx: 12, productIdx: 469 },
  { comment: "A bit of a luxury, but the experience of brewing a pot of Fortnum’s is incomparable.", rating: 5, userIdx: 48, productIdx: 469 },

  // 470: Oura Ring Gen3 Heritage - Black
  { comment: "Discreet and powerful. The sleep readiness score has completely changed how I plan my workouts.", rating: 5, userIdx: 14, productIdx: 470 },
  { comment: "Titanium build is very tough. I barely feel it on my finger, yet the data it provides is medical grade.", rating: 5, userIdx: 32, productIdx: 470 },
  { comment: "The heart rate tracking is spot on. Much more comfortable than wearing a bulky watch to bed.", rating: 4, userIdx: 7, productIdx: 470 },
  { comment: "Battery life is solid, usually getting a full week. Sizing is key, so definitely use the kit first.", rating: 5, userIdx: 21, productIdx: 470 },
  { comment: "Premium feel and very stylish. It's the best biohacking tool I've invested in this year.", rating: 4, userIdx: 45, productIdx: 470 },

  // 471: Hyperice Normatec 3 Legs
  { comment: "A must-have for serious athletes. The recovery speed after a long run is night and day.", rating: 5, userIdx: 3, productIdx: 471 },
  { comment: "ZoneBoost technology really helps target my sore calves. The app control is very intuitive.", rating: 5, userIdx: 28, productIdx: 471 },
  { comment: "Expensive but worth it if you train daily. It feels like having a personal massage therapist at home.", rating: 5, userIdx: 19, productIdx: 471 },
  { comment: "Compression is powerful and adjustable. Very high-quality build that feels like it will last.", rating: 4, userIdx: 41, productIdx: 471 },
  { comment: "The different levels of pressure allow for a very customized session. My legs feel fresh every morning.", rating: 5, userIdx: 10, productIdx: 471 },

  // 472: WHOOP 4.0 with 12 Month Subscription
  { comment: "No screen means no distractions. I love focusing purely on the strain and recovery metrics.", rating: 5, userIdx: 33, productIdx: 472 },
  { comment: "The coaching insights are brilliant. It tells me exactly when I'm overtraining.", rating: 5, userIdx: 15, productIdx: 472 },
  { comment: "Subscription model is a bit of a commitment, but the data depth is unmatched for performance.", rating: 4, userIdx: 49, productIdx: 472 },
  { comment: "Very lightweight and the haptic alarm is a nice way to wake up without a loud noise.", rating: 5, userIdx: 2, productIdx: 472 },
  { comment: "The app interface is the best in the business. Great for tracking sleep debt and respiratory rate.", rating: 4, userIdx: 26, productIdx: 472 },

  // 473: Hooga Red Light Therapy Device - HG300
  { comment: "Noticed a significant improvement in my skin tone and energy levels after just two weeks.", rating: 5, userIdx: 8, productIdx: 473 },
  { comment: "Solid panel with very bright LEDs. It's the perfect size for targeted treatment on the face or back.", rating: 5, userIdx: 37, productIdx: 473 },
  { comment: "Very effective for reducing inflammation after heavy lifting. Simple to use and very sturdy.", rating: 4, userIdx: 14, productIdx: 473 },
  { comment: "Great entry into RLT. The dual wavelengths work well together for both skin and deep tissue.", rating: 5, userIdx: 22, productIdx: 473 },
  { comment: "A bit heavy for its size, but that just shows the quality of the heat sinks and construction.", rating: 4, userIdx: 30, productIdx: 473 },

  // 474: Luminette 3 Light Therapy Glasses
  { comment: "Saved me from terrible jet lag during my last trip. Being able to move around while using them is key.", rating: 5, userIdx: 44, productIdx: 474 },
  { comment: "Much better than sitting in front of a light box. I wear them while making breakfast.", rating: 5, userIdx: 1, productIdx: 474 },
  { comment: "They definitely help with my winter blues. My mood and energy are noticeably higher in the morning.", rating: 4, userIdx: 18, productIdx: 474 },
  { comment: "Lightweight and fits over my regular glasses easily. Very effective for regulating my sleep cycle.", rating: 5, userIdx: 39, productIdx: 474 },
  { comment: "Battery life is decent and the charging is fast. A very smart design for busy people.", rating: 4, userIdx: 5, productIdx: 474 },

  // 475: Beautyrest Sleeptracker Monitor
  { comment: "I love that I don't have to wear anything to bed. It's completely invisible under the mattress.", rating: 5, userIdx: 11, productIdx: 475 },
  { comment: "The breathing and heart rate data is surprisingly accurate. The app gives very helpful tips.", rating: 5, userIdx: 29, productIdx: 475 },
  { comment: "Alexa integration is cool—I can just ask how I slept without looking at my phone.", rating: 4, userIdx: 40, productIdx: 475 },
  { comment: "Great for couples as it tracks both sides of the bed independently. Very impressive technology.", rating: 5, userIdx: 6, productIdx: 475 },
  { comment: "Setup was a bit finicky with the Wi-Fi, but once connected, it works every single night without fail.", rating: 4, userIdx: 24, productIdx: 475 },

  // 476: iHealth Gluco+ Wireless Smart Monitor
  { comment: "Syncs perfectly with my phone. Makes tracking my levels over time so much easier than a paper log.", rating: 5, userIdx: 20, productIdx: 476 },
  { comment: "The kit is very comprehensive. The lancets are sharp and the monitor is fast and accurate.", rating: 5, userIdx: 47, productIdx: 476 },
  { comment: "Great for travel. It's compact and the app stores all the data for my doctor to see.", rating: 4, userIdx: 13, productIdx: 476 },
  { comment: "No-coding technology is a big plus. The wireless connection is very stable and reliable.", rating: 5, userIdx: 32, productIdx: 476 },
  { comment: "Best smart glucose monitor I've used. The app is clean and the data visualization is helpful.", rating: 4, userIdx: 9, productIdx: 476 },

  // 477: BFP BFP65011700 Health Smart Bracelet
  { comment: "Great budget tracker. It covers all the basics like heart rate and blood pressure accurately.", rating: 5, userIdx: 31, productIdx: 477 },
  { comment: "The waterproof design is a plus. I wear it in the shower and at the gym without any issues.", rating: 4, userIdx: 4, productIdx: 477 },
  { comment: "Simple app and easy to navigate. The sleep monitoring gave me some good insights into my habits.", rating: 5, userIdx: 17, productIdx: 477 },
  { comment: "Lightweight and the battery lasts for several days. Good value for someone starting with fitness tracking.", rating: 4, userIdx: 42, productIdx: 477 },
  { comment: "Vibrant screen and easy to read even in sunlight. A very solid everyday health companion.", rating: 4, userIdx: 25, productIdx: 477 },

  // 478: Muse S Athena: Brain Sensing Headband
  { comment: "The sleep journeys are incredible. It has significantly reduced the time it takes me to fall asleep.", rating: 5, userIdx: 38, productIdx: 478 },
  { comment: "Using neurofeedback for meditation is a game changer. You can actually hear your brain calm down.", rating: 5, userIdx: 23, productIdx: 478 },
  { comment: "The soft fabric is comfortable enough for side sleepers. High-tech and very effective.", rating: 4, userIdx: 46, productIdx: 478 },
  { comment: "The real-time feedback on heart rate and breathing helps deepen my practice. Truly innovative.", rating: 5, userIdx: 16, productIdx: 478 },
  { comment: "Expensive, but for anyone serious about meditation or sleep quality, it's an amazing tool.", rating: 4, userIdx: 43, productIdx: 478 },

  // 479: Cholas Red Light Therapy for Face & Body
  { comment: "The adjustable stand makes it so easy to treat my legs and face at the same time. Very bright.", rating: 5, userIdx: 35, productIdx: 479 },
  { comment: "5-head design provides great coverage. I use it for muscle recovery after long bike rides.", rating: 5, userIdx: 27, productIdx: 479 },
  { comment: "The light quality is excellent. It feels professional and the different brightness levels are useful.", rating: 4, userIdx: 36, productIdx: 479 },
  { comment: "Great for skin health. My face looks much more radiant since I started using it daily.", rating: 5, userIdx: 12, productIdx: 479 },
  { comment: "Sturdy base and the arms are very flexible. A very versatile panel for full body biohacking.", rating: 4, userIdx: 48, productIdx: 479 },

  // 480: Ray-Ban RB2132 New Wayfarer Sunglasses
  { comment: "A timeless classic that fits a bit better than the original. The G-15 lenses are perfect for driving.", rating: 5, userIdx: 12, productIdx: 480 },
  { comment: "Very durable frames. I've dropped them a few times and they still look brand new.", rating: 5, userIdx: 48, productIdx: 480 },
  { comment: "Great fit for smaller faces compared to the classic Wayfarer. Very comfortable for all-day wear.", rating: 4, userIdx: 3, productIdx: 480 },
  { comment: "The polarization really cuts down the glare. Authentic Ray-Ban quality as expected.", rating: 5, userIdx: 27, productIdx: 480 },
  { comment: "Stylish and functional. They go with everything from casual to formal outfits.", rating: 4, userIdx: 19, productIdx: 480 },

  // 481: Oakley Holbrook OO9102 Square Sunglasses
  { comment: "Prizm lenses make colors pop like crazy. Best sunglasses I've owned for hiking.", rating: 5, userIdx: 8, productIdx: 481 },
  { comment: "Super lightweight and they stay put on my face even when I'm active. The bundle kit is a nice bonus.", rating: 5, userIdx: 34, productIdx: 481 },
  { comment: "Love the retro look with modern tech. The white microfiber bag keeps them spotless.", rating: 4, userIdx: 15, productIdx: 481 },
  { comment: "Excellent clarity and very sturdy hinges. Oakley never disappoints with the Holbrook line.", rating: 5, userIdx: 42, productIdx: 481 },
  { comment: "A bit pricey but you definitely get what you pay for in terms of lens technology.", rating: 4, userIdx: 6, productIdx: 481 },

  // 482: GUNNAR - Blue Light Reading Glasses - Vertex
  { comment: "Huge difference for my late-night coding sessions. No more dry eyes or headaches.", rating: 5, userIdx: 22, productIdx: 482 },
  { comment: "The slight amber tint is very soothing. They fit comfortably under my gaming headset.", rating: 4, userIdx: 49, productIdx: 482 },
  { comment: "Lightweight frames that don't pinch. Essential if you spend more than 8 hours at a desk.", rating: 5, userIdx: 11, productIdx: 482 },
  { comment: "Good quality lenses, though the frame feels a bit plastic-heavy. Still, they work as advertised.", rating: 4, userIdx: 30, productIdx: 482 },
  { comment: "Effective at blocking blue light. I've noticed I fall asleep much faster after using these.", rating: 5, userIdx: 5, productIdx: 482 },

  // 483: Persol PO3019S Square Sunglasses
  { comment: "The craftsmanship is unparalleled. You can feel the Italian quality in the acetate frames.", rating: 5, userIdx: 1, productIdx: 483 },
  { comment: "The Meflecto system really works—no pressure on the temples at all. Very elegant design.", rating: 5, userIdx: 39, productIdx: 483 },
  { comment: "A true investment piece. The crystal lenses provide incredible clarity compared to plastic.", rating: 5, userIdx: 14, productIdx: 483 },
  { comment: "Heavy but well-balanced. The silver arrow detail is a subtle mark of class.", rating: 4, userIdx: 26, productIdx: 483 },
  { comment: "Beautiful sunglasses, though they required a slight adjustment at the optician for a perfect fit.", rating: 4, userIdx: 44, productIdx: 483 },

  // 484: Cyxus Blue Light Blocking Glasses
  { comment: "Excellent value for the price. They look just like high-end frames but at a fraction of the cost.", rating: 5, userIdx: 20, productIdx: 484 },
  { comment: "Reduced my eye strain significantly during office hours. Very lightweight and stylish.", rating: 4, userIdx: 33, productIdx: 484 },
  { comment: "The lenses are clear and don't distort colors too much. Great for everyday computer use.", rating: 5, userIdx: 7, productIdx: 484 },
  { comment: "Sturdy enough for the price. I keep a pair at home and one at the office.", rating: 4, userIdx: 41, productIdx: 484 },
  { comment: "Simple, effective, and cheap. Can't really ask for more for basic blue light protection.", rating: 4, userIdx: 16, productIdx: 484 },

  // 485: Smith Lowdown 2 Sunglasses
  { comment: "ChromaPop is the real deal. Everything looks sharper and more vivid through these.", rating: 5, userIdx: 29, productIdx: 485 },
  { comment: "Eco-friendly frames that actually feel premium. The nose pads keep them from sliding down.", rating: 5, userIdx: 2, productIdx: 485 },
  { comment: "Perfect for outdoor activities. They are incredibly light and the polarization is top-tier.", rating: 4, userIdx: 37, productIdx: 485 },
  { comment: "Great coverage and style. I use them for both running and casual weekend outings.", rating: 5, userIdx: 10, productIdx: 485 },
  { comment: "The lenses scratch a bit easily if not careful, but the optical quality is fantastic.", rating: 4, userIdx: 23, productIdx: 485 },

  // 486: Carhartt Billings Safety Glasses
  { comment: "Best safety glasses I've used on the job site. They don't fog up even with a mask on.", rating: 5, userIdx: 45, productIdx: 486 },
  { comment: "Very comfortable for long shifts. The wrap-around design protects from debris at all angles.", rating: 5, userIdx: 18, productIdx: 486 },
  { comment: "Affordable and tough. I don't feel bad if they get beat up, but they hold up surprisingly well.", rating: 4, userIdx: 31, productIdx: 486 },
  { comment: "Clear vision and they stay secure on my head. Essential for any DIY project.", rating: 5, userIdx: 4, productIdx: 486 },
  { comment: "A bit basic in terms of style, but they are safety glasses first and foremost. They do the job.", rating: 4, userIdx: 47, productIdx: 486 },

  // 487: Maui Jim Peahi Polarized Wrap Sunglasses
  { comment: "The best lenses on the market, hands down. The color enhancement is magical.", rating: 5, userIdx: 32, productIdx: 487 },
  { comment: "Perfect for being out on the water. The wrap design blocks every bit of side glare.", rating: 5, userIdx: 13, productIdx: 487 },
  { comment: "Built like a tank. These feel like they could survive anything. Expensive but worth every cent.", rating: 5, userIdx: 40, productIdx: 487 },
  { comment: "The polarization is superior to any other brand I've tried. Ideal for bright sunny days.", rating: 4, userIdx: 21, productIdx: 487 },
  { comment: "Large fit, which is great for me. They stay comfortable even after hours on the boat.", rating: 5, userIdx: 25, productIdx: 487 },

  // 488: Reebok Nitrous Smart Audio Sunglasses
  { comment: "Great for running. I can listen to my podcasts and still hear the traffic around me.", rating: 4, userIdx: 36, productIdx: 488 },
  { comment: "The Bluetooth pairing is seamless. Sound quality is surprisingly good for open-ear audio.", rating: 4, userIdx: 9, productIdx: 488 },
  { comment: "Perfect hybrid of tech and fashion. The polarized lenses are actually high quality.", rating: 5, userIdx: 28, productIdx: 488 },
  { comment: "Battery life lasts through my long rides. Much safer than using traditional earbuds.", rating: 5, userIdx: 35, productIdx: 488 },
  { comment: "Sound can be thin in noisy environments, but for quiet trails, they are excellent.", rating: 4, userIdx: 46, productIdx: 488 },

  // 489: Costa Del Mar Blackfin Polarized Sunglasses
  { comment: "The 580G glass lenses are incredibly clear. Perfect for spotting fish in deep water.", rating: 5, userIdx: 24, productIdx: 489 },
  { comment: "The Hydrolite grip is amazing; they don't move even when I'm sweating in the sun.", rating: 5, userIdx: 38, productIdx: 489 },
  { comment: "Top-notch polarization. My eyes feel so much more relaxed after a day on the coast.", rating: 5, userIdx: 17, productIdx: 489 },
  { comment: "Solid construction and very durable. These are definitely built for serious offshore use.", rating: 4, userIdx: 43, productIdx: 489 },
  { comment: "Best fishing glasses I've ever owned. The clarity and contrast are unmatched.", rating: 5, userIdx: 0, productIdx: 489 },

  // 490: Celestron NexStar 8SE Schmidt-Cassegrain Telescope
  { comment: "The gold standard for hobbyists. The GoTo mount is incredibly accurate once aligned.", rating: 5, userIdx: 12, productIdx: 490 },
  { comment: "Incredible light gathering. I can see the Cassini division on Saturn clearly from my backyard.", rating: 5, userIdx: 45, productIdx: 490 },
  { comment: "Setup takes a bit of practice, but the views of deep-sky nebulae are absolutely breath-taking.", rating: 5, userIdx: 28, productIdx: 490 },
  { comment: "A bit heavy to transport, but the optical quality justifies the weight. A lifetime investment.", rating: 4, userIdx: 7, productIdx: 490 },
  { comment: "The database of 40,000 objects is fantastic. I discover something new every single night.", rating: 5, userIdx: 33, productIdx: 490 },

  // 491: Celestron PowerSeeker 70AZ Refractor Telescope
  { comment: "Great first telescope for my kids. We saw the craters on the moon on our first night out.", rating: 5, userIdx: 3, productIdx: 491 },
  { comment: "Easy to assemble and very lightweight. Perfect for learning the basics of the night sky.", rating: 4, userIdx: 21, productIdx: 491 },
  { comment: "The tripod is a bit shaky in the wind, but for the price, the optics are surprisingly sharp.", rating: 4, userIdx: 15, productIdx: 491 },
  { comment: "Good entry-level kit. The included eyepieces are decent enough to get you started immediately.", rating: 4, userIdx: 48, productIdx: 491 },
  { comment: "Excellent value. It's much better than the cheap 'toy' telescopes you find in department stores.", rating: 5, userIdx: 9, productIdx: 491 },

  // 492: Sky-Watcher Flextube 200 Dobsonian 8-inch Telescope
  { comment: "The collapsible design is a lifesaver for my small car. It holds collimation very well.", rating: 5, userIdx: 31, productIdx: 492 },
  { comment: "Huge aperture for the price. Deep sky objects like the Orion Nebula look spectacular.", rating: 5, userIdx: 14, productIdx: 492 },
  { comment: "Smooth tracking for a manual mount. It's very intuitive to use even for a beginner.", rating: 4, userIdx: 22, productIdx: 492 },
  { comment: "The 8-inch mirror pulls in so much light. It has completely changed my stargazing experience.", rating: 5, userIdx: 40, productIdx: 492 },
  { comment: "Sturdy base and easy to move around. One of the best price-to-performance scopes out there.", rating: 5, userIdx: 6, productIdx: 492 },

  // 493: Celestron SkyMaster 25x100 Binoculars
  { comment: "These things are massive! The view of the Milky Way is immersive and truly stunning.", rating: 5, userIdx: 37, productIdx: 493 },
  { comment: "You absolutely need a heavy-duty tripod for these, but the binocular vision adds so much depth.", rating: 4, userIdx: 2, productIdx: 493 },
  { comment: "Crystal clear optics. Much easier to use for quick sessions than setting up a full telescope.", rating: 5, userIdx: 19, productIdx: 493 },
  { comment: "The light gathering power is insane for binoculars. Great for scanning star clusters.", rating: 4, userIdx: 44, productIdx: 493 },
  { comment: "A bit heavy for long periods, but the BaK-4 prisms provide excellent edge-to-edge clarity.", rating: 5, userIdx: 11, productIdx: 493 },

  // 494: Thames & Kosmos Planetarium Projector
  { comment: "My son loves this in his room. The images from the James Webb telescope are beautiful.", rating: 5, userIdx: 26, productIdx: 494 },
  { comment: "Great educational tool. It’s not a professional projector, but perfect for a night light.", rating: 4, userIdx: 5, productIdx: 494 },
  { comment: "The star maps are fairly accurate and it's very easy for a child to operate independently.", rating: 4, userIdx: 39, productIdx: 494 },
  { comment: "Fun STEM toy. It really sparked an interest in space for my 7-year-old daughter.", rating: 5, userIdx: 1, productIdx: 494 },
  { comment: "The projection is clear in a dark room. Good build quality for a plastic science toy.", rating: 4, userIdx: 24, productIdx: 494 },

  // 495: ZWO ASI2600MC Air Color Camera
  { comment: "Zero amp glow is a game changer for long exposures. The integrated wireless is so convenient.", rating: 5, userIdx: 17, productIdx: 495 },
  { comment: "Incredible resolution and very low noise. My astrophotography has jumped to the next level.", rating: 5, userIdx: 32, productIdx: 495 },
  { comment: "The APS-C sensor size is perfect for most nebulae. Expensive, but worth every penny for pros.", rating: 5, userIdx: 46, productIdx: 495 },
  { comment: "Setup was a breeze with the Air interface. No more cable tangles around my mount.", rating: 4, userIdx: 13, productIdx: 495 },
  { comment: "The cooling system is very efficient, keeping the sensor noise at an absolute minimum.", rating: 5, userIdx: 29, productIdx: 495 },

  // 496: Unistellar eVscope 2 Smart Digital Telescope
  { comment: "I live in a city with heavy light pollution and I can still see galaxies. Pure magic.", rating: 5, userIdx: 8, productIdx: 496 },
  { comment: "The Nikon eyepiece makes it feel like a real telescope while giving you digital power.", rating: 5, userIdx: 35, productIdx: 496 },
  { comment: "Pricey, but the 'Enhanced Vision' technology is unlike anything else on the market.", rating: 4, userIdx: 20, productIdx: 496 },
  { comment: "So simple to use. Point it at the sky, connect the app, and you're seeing nebulas in minutes.", rating: 5, userIdx: 42, productIdx: 496 },
  { comment: "The social features are cool—I love sharing my live captures directly with the community.", rating: 4, userIdx: 10, productIdx: 496 },

  // 497: Meezaa 90mm Refractor Telescope for Adults
  { comment: "Great intermediate scope. The 90mm aperture provides much more detail than 70mm models.", rating: 5, userIdx: 43, productIdx: 497 },
  { comment: "The carry bag is very useful for taking it to dark sky sites. Very happy with the purchase.", rating: 4, userIdx: 16, productIdx: 497 },
  { comment: "Solid optics and the phone adapter works surprisingly well for basic moon photos.", rating: 4, userIdx: 30, productIdx: 497 },
  { comment: "Very impressed with the multi-coated lenses. Chromatic aberration is very minimal.", rating: 5, userIdx: 4, productIdx: 497 },
  { comment: "Good stable tripod and easy to track objects manually. A very reliable outdoor companion.", rating: 4, userIdx: 38, productIdx: 497 },

  // 498: Celestron StarSense Explorer LT 114AZ
  { comment: "The StarSense app is like having a professional astronomer standing right next to you.", rating: 5, userIdx: 27, productIdx: 498 },
  { comment: "I never knew where to look before this. Now I can find any planet in seconds using my phone.", rating: 5, userIdx: 0, productIdx: 498 },
  { comment: "The Newtonian reflector gives bright views. The app alignment is surprisingly robust.", rating: 4, userIdx: 36, productIdx: 498 },
  { comment: "Perfect for beginners who are intimidated by star charts. It makes the hobby accessible.", rating: 5, userIdx: 18, productIdx: 498 },
  { comment: "The mount is basic but the software tech is what you're really paying for. It works great.", rating: 4, userIdx: 49, productIdx: 498 },

  // 499: Baader Planetarium 2" 7.5nm Solar Continuum Filter
  { comment: "Essential for solar observation. It brings out sunspot details that were invisible before.", rating: 5, userIdx: 23, productIdx: 499 },
  { comment: "The contrast enhancement on solar granulation is incredible. Baader quality is top-notch.", rating: 5, userIdx: 41, productIdx: 499 },
  { comment: "Works perfectly with my Herschel wedge. A must-have for serious solar photographers.", rating: 5, userIdx: 14, productIdx: 499 },
  { comment: "Very narrow bandpass, which really helps isolate the features of the sun's photosphere.", rating: 4, userIdx: 25, productIdx: 499 },
  { comment: "Expensive for a filter, but the results in image sharpness are night and day.", rating: 4, userIdx: 47, productIdx: 499 },

];

module.exports = reviews