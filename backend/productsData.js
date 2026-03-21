const products = [
  {
    "title": "Samsung 55-Inch Class QLED 4K Q70C Series Dual LED Smart TV",
    "description": "Quantum Processor 4K with AI Upscaling, Motion Xcelerator Turbo+ 120Hz, and built-in Alexa for a seamless smart home integration.",
    "price": 649,
    "category": "Electronics",
    "brand": "Samsung",
    "image": "https://m.media-amazon.com/images/I/81WAYexPw4L._AC_SX679_.jpg",
    "stock": 15,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Sony WH-1000XM5 Wireless Industry Leading Noise Canceling Headphones",
    "description": "Auto Noise Canceling Optimizer, 30-hour battery life, and crystal-clear hands-free calling with 8 microphones and Precise Voice Pickup technology.",
    "price": 299,
    "category": "Electronics",
    "brand": "Sony",
    "image": "https://m.media-amazon.com/images/I/51FvhumQETL._AC_SX679_.jpg",
    "stock": 40,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Amazon Echo Show 10 (3rd Gen) | HD Smart Display with Motion",
    "description": "10.1-inch HD screen designed to move with you. Features a 13MP camera with auto-framing and motion to keep you in view during video calls.",
    "price": 129.5,
    "category": "Electronics",
    "brand": "Amazon",
    "image": "https://m.media-amazon.com/images/I/61wl9r6y+vL._AC_UL640_FMwebp_QL65_.jpg",
    "stock": 25,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "XGIMI MoGo 2 Pro Portable Projector 1080p",
    "description": "Compact smart projector with 400 ISO Lumens, ISA 2.0 technology for seamless auto-keystone correction, and built-in professional speakers.",
    "price": 180,
    "category": "Electronics",
    "brand": "XGIMI",
    "image": "https://m.media-amazon.com/images/I/61QY4m9q--L._AC_SX679_.jpg",
    "stock": 12,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Canon EOS R6 Mark II Mirrorless Camera with RF 24-105mm Lens",
    "description": "High-performance 24.2 MP Full-Frame sensor, 4K60p video, and advanced subject tracking for professional photography and cinematography.",
    "price": 1250,
    "category": "Electronics",
    "brand": "Canon",
    "image": "https://m.media-amazon.com/images/I/71VC7ZcnycL._AC_SX679_.jpg",
    "stock": 8,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Aura Carver 10.1-inch WiFi Digital Photo Frame",
    "description": "HD display with unlimited cloud storage. Easily send photos and videos from your phone to the frame using the Aura app.",
    "price": 89.99,
    "category": "Electronics",
    "brand": "Aura",
    "image": "https://m.media-amazon.com/images/I/71R58cDGEZL._AC_SX679_.jpg",
    "stock": 50,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": true,
    "discountPrice": 71.93
  },
  {
    "title": "Sonos Era 100 Wireless Smart Speaker with Bluetooth",
    "description": "Next-gen acoustics with WiFi, Bluetooth, and line-in connectivity. Features custom waveguides for a wider soundstage and deep bass.",
    "price": 145,
    "category": "Electronics",
    "brand": "Sonos",
    "image": "https://m.media-amazon.com/images/I/619SmYo+h6L._AC_SX679_.jpg",
    "stock": 30,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Logitech R500s Class 1 USB & Bluetooth Laser Presentation Remote Control",
    "description": "Class 1 laser pointer with 20-meter range. Connects via USB receiver or Bluetooth Low Energy. Features a comfortable ergonomic design with three-button layout for seamless slide navigation.",
    "price": 59,
    "category": "Electronics",
    "brand": "Logitech",
    "image": "https://m.media-amazon.com/images/I/412C7WzBHUL._AC_SX679_.jpg",
    "stock": 60,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Samsung T7 Shield 2TB Portable SSD - Rugged Design",
    "description": "Ultra-fast read speeds up to 1050MB/s. IP65 rated for water and dust resistance, with a durable rubberized outer for extra protection.",
    "price": 215,
    "category": "Electronics",
    "brand": "Samsung",
    "image": "https://m.media-amazon.com/images/I/81-KGaD8ExL._AC_SX679_.jpg",
    "stock": 45,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Dyson Purifier Cool Gen1 HEPA Air Purifier and Fan",
    "description": "Fully sealed HEPA filter system captures 99.97% of particles as small as 0.3 microns. Air Multiplier technology cools and purifies simultaneously.",
    "price": 199.5,
    "category": "Electronics",
    "brand": "Dyson",
    "image": "https://m.media-amazon.com/images/I/612JqWnA64L._AC_SX679_.jpg",
    "stock": 20,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Edifier R1280DB Powered Bluetooth Bookshelf Speakers",
    "description": "Classic wood finish bookshelf speakers with 4-inch bass driver and silk dome tweeter. Features Bluetooth, Optical, and RCA inputs with remote control.",
    "price": 159.99,
    "category": "Audio",
    "brand": "Edifier",
    "image": "https://m.media-amazon.com/images/I/71zmXSlm0hL._AC_SX679_.jpg",
    "stock": 22,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Blue Yeti USB Microphone for Recording and Streaming",
    "description": "Professional condenser microphone with four pickup patterns for crystal clear vocals, podcats, and YouTube recording. Plug and play on Mac and PC.",
    "price": 129,
    "category": "Audio",
    "brand": "Logitech G",
    "image": "https://m.media-amazon.com/images/I/61egnO8q6ZL._AC_SX679_.jpg",
    "stock": 15,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Sony HT-A5000 5.1.2ch Dolby Atmos Soundbar",
    "description": "Premium soundbar with dual built-in subwoofers and S-Force Pro Front Surround. Support for 360 Spatial Sound Mapping and HDMI eARC.",
    "price": 698,
    "category": "Audio",
    "brand": "Sony",
    "image": "https://m.media-amazon.com/images/I/61xUHCM63KL._AC_SX679_.jpg",
    "stock": 10,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Audio-Technica AT-LP60XBT-BK Fully Automatic Bluetooth Turntable",
    "description": "Belt-drive 3-speed record player with wireless Bluetooth connectivity. High-fidelity audio with dual magnet phono cartridge.",
    "price": 219,
    "category": "Audio",
    "brand": "Audio-Technica",
    "image": "https://m.media-amazon.com/images/I/51vjNLnU9JL._AC_SX679_.jpg",
    "stock": 18,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Jabra Elite 85t True Wireless Bluetooth Earbuds",
    "description": "Advanced Active Noise Cancellation with 12mm speakers for big sound and powerful bass. Up to 25 hours of battery with wireless charging case.",
    "price": 149.99,
    "category": "Audio",
    "brand": "Jabra",
    "image": "https://m.media-amazon.com/images/I/613ldmDJLvL._AC_SX679_.jpg",
    "stock": 55,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "JBL Flip 6 Waterproof Portable Bluetooth Speaker",
    "description": "IP67 waterproof and dustproof speaker with 2-way speaker system. Features bold sound and 12 hours of playtime on a single charge.",
    "price": 99.95,
    "category": "Audio",
    "brand": "JBL",
    "image": "https://m.media-amazon.com/images/I/614hQXmNSkL._AC_SX679_.jpg",
    "stock": 30,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Focusrite Scarlett 2i2 4th Gen USB Audio Interface",
    "description": "High-resolution 24-bit/192kHz recording interface for musicians. Features 2 mic/line inputs with redesigned preamps and Auto Gain.",
    "price": 199,
    "category": "Audio",
    "brand": "Focusrite",
    "image": "https://m.media-amazon.com/images/I/51qJYqPV1YL._AC_SX679_.jpg",
    "stock": 25,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Pure Evoke H3 DAB+ Digital Radio with Bluetooth",
    "description": "Compact digital and FM radio with 40 presets and Bluetooth streaming. High-quality real wood finish with a vivid color display.",
    "price": 119,
    "category": "Audio",
    "brand": "Pure",
    "image": "https://m.media-amazon.com/images/I/71lvoJYgzSL._AC_SX679_.jpg",
    "stock": 40,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "1Mii B06 Pro Long Range Bluetooth Receiver",
    "description": "Upgrade your home stereo with Bluetooth 5.0 and aptX Low Latency. Features dual antennas for 197ft long range and Hi-Fi 3D audio.",
    "price": 39.99,
    "category": "Audio",
    "brand": "1Mii",
    "image": "https://m.media-amazon.com/images/I/51lWbiO973L._AC_SY879_.jpg",
    "stock": 100,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Sennheiser HD 600 Open Back Professional Headphones",
    "description": "Audiophile-grade open back headphones with neodymium magnets and lightweight aluminum voice coils for natural, accurate soundstage.",
    "price": 349,
    "category": "Audio",
    "brand": "Sennheiser",
    "image": "https://m.media-amazon.com/images/I/81kznjfYOUL._AC_SX679_.jpg",
    "stock": 5,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Logitech G915 TKL Tenkeyless Wireless Mechanical Gaming Keyboard",
    "description": "LIGHTSPEED wireless delivers pro-grade performance with flexibility and freedom from cords. Low-profile mechanical switches and per-key LIGHTSYNC RGB.",
    "price": 199.99,
    "category": "Gaming",
    "brand": "Logitech G",
    "image": "https://m.media-amazon.com/images/I/61Axkz81mRL._AC_SX679_.jpg",
    "stock": 25,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Logitech G PRO X SUPERLIGHT Wireless Gaming Mouse",
    "description": "Designed with the world's leading pros, weighing under 63 grams. HERO 25K sensor for incredibly precise, fast and consistent control.",
    "price": 129,
    "category": "Gaming",
    "brand": "Logitech G",
    "image": "https://m.media-amazon.com/images/I/51GXWO654+L._AC_SX679_.jpg",
    "stock": 50,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "LG UltraGear 34G630A 34-Inch Curved Gaming Monitor",
    "description": "UltraWide QHD (3440 x 1440) VA display with 160Hz refresh rate and 1ms MBR. Features AMD FreeSync Premium and a 3-side virtually borderless design for immersive gaming.",
    "price": 549.99,
    "category": "Gaming",
    "brand": "LG",
    "image": "https://m.media-amazon.com/images/I/71cC3QK+41L._AC_SX679_.jpg",
    "stock": 15,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": true,
    "discountPrice": 341.07
  },
  {
    "title": "Secretlab Titan Evo Black3 Gaming Chair",
    "description": "Award-winning ergonomic design featuring NEO™ Hybrid Leatherette and 4-way L-ADAPT™ lumbar support. Includes a magnetic memory foam head pillow and 4D metal armrests for ultimate professional comfort.",
    "price": 549,
    "category": "Gaming",
    "brand": "Secretlab",
    "image": "https://m.media-amazon.com/images/I/51HHjm67W4L._AC_SX679_.jpg",
    "stock": 20,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Sony PlayStation DualSense Wireless Controller - White",
    "description": "Experience haptic feedback and adaptive triggers on PS5. Includes a built-in microphone and create button for capturing epic moments.",
    "price": 69.99,
    "category": "Gaming",
    "brand": "Sony",
    "image": "https://m.media-amazon.com/images/I/418ZL-WW1EL._AC_SX679_.jpg",
    "stock": 100,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Meta Quest 3 128GB All-In-One VR Headset",
    "description": "Breakthrough mixed reality with powerful hardware. 4K+ Infinite Display and Touch Plus controllers for precise haptic interactions.",
    "price": 499,
    "category": "Gaming",
    "brand": "Meta",
    "image": "https://m.media-amazon.com/images/I/61WXF7wg36L._AC_SX679_.jpg",
    "stock": 10,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Razer Seiren V2 Pro Professional USB Microphone",
    "description": "Dynamic microphone with high-pass filter and analog gain limiter. Professional-grade 24-bit recording for clear, natural voice for streaming.",
    "price": 149.99,
    "category": "Gaming",
    "brand": "Razer",
    "image": "https://m.media-amazon.com/images/I/71RZ5+nfTlL._AC_SX679_.jpg",
    "stock": 35,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Elgato 4K S - External Capture Card",
    "description": "Cutting-edge capture solution with standalone SD card recording and zero-latency passthrough. Features HEVC hardware encoding for smaller file sizes and high-fidelity 4K60 HDR10 capture.",
    "price": 179.99,
    "category": "Gaming",
    "brand": "Elgato",
    "image": "https://m.media-amazon.com/images/I/51n-AAn1UBL._AC_SX679_.jpg",
    "stock": 20,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Razer Goliathus Extended Chroma Gaming Mouse Pad",
    "description": "Micro-textured cloth surface for speed and control. Powered by Razer Chroma RGB with 16.8 million colors and synchronization.",
    "price": 59.99,
    "category": "Gaming",
    "brand": "Razer",
    "image": "https://m.media-amazon.com/images/I/71Gv0FxJOWL._AC_SX679_.jpg",
    "stock": 150,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Logitech G Extreme 3D Pro Joystick for Flight Simulator",
    "description": "Precision twist rudder control with 12 programmable buttons and an 8-way hat switch. Stable weighted base for intense flight maneuvers.",
    "price": 39.99,
    "category": "Gaming",
    "brand": "Logitech G",
    "image": "https://m.media-amazon.com/images/I/514dR5oFC2L._AC_SX679_.jpg",
    "stock": 30,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Apple MacBook Air 13-inch Laptop with M3 chip",
    "description": "Strikingly thin and fast with 8-core CPU and 10-core GPU. Features 16GB Unified Memory, 512GB SSD, and up to 18 hours of battery life with Liquid Retina display.",
    "price": 1299,
    "category": "Computers",
    "brand": "Apple",
    "image": "https://m.media-amazon.com/images/I/71CLpiC+kOL._AC_SX679_.jpg",
    "stock": 20,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Apple iMac 24-inch All-in-One Desktop with 4.5K Retina Display",
    "description": "Powerful M3 chip with 8-core CPU and GPU. Features a stunningly thin design, 1080p FaceTime HD camera, and color-matched Magic Keyboard and Mouse.",
    "price": 1799,
    "category": "Computers",
    "brand": "Apple",
    "image": "https://m.media-amazon.com/images/I/71Y2rxlPiYL._AC_SX679_.jpg",
    "stock": 12,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Intel NUC 13 Pro Mini PC - 13th Gen Intel Core i7",
    "description": "Ultra-compact workstation with 32GB DDR5 RAM, 1TB SSD, and support for quad 4K displays. Professional performance for home office and business.",
    "price": 749,
    "category": "Computers",
    "brand": "Intel",
    "image": "https://m.media-amazon.com/images/I/61w86N2XSzL._AC_SX679_.jpg",
    "stock": 25,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Apple iPad Air (5th Generation) 10.9-inch with M1 Chip",
    "description": "Powerful performance in a thin, light design. 10.9-inch Liquid Retina display, 12MP Ultra Wide front camera with Center Stage, and Apple Pencil support.",
    "price": 599,
    "category": "Computers",
    "brand": "Apple",
    "image": "https://m.media-amazon.com/images/I/71OTzAMXQhL._AC_SX679_.jpg",
    "stock": 40,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Razer Core X External Graphics Card Enclosure (eGPU)",
    "description": "Boost your laptop's performance with Thunderbolt connection. Supports full-length PCIe desktop graphics cards with a massive 650W power supply and aluminum cooling for high-end gaming and 3D rendering.",
    "price": 299,
    "category": "Computers",
    "brand": "Razer",
    "image": "https://m.media-amazon.com/images/I/61t5oZklfBL._AC_SX679_.jpg",
    "stock": 15,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Logitech MX Keys S Wireless Illuminated Keyboard",
    "description": "Low-profile mechanical-feel keys with smart backlighting. Pairs with up to 3 devices via Bluetooth or Logi Bolt, featuring customizable Smart Actions.",
    "price": 99,
    "category": "Computers",
    "brand": "Logitech",
    "image": "https://m.media-amazon.com/images/I/71g1gu7Cd6L._AC_SX679_.jpg",
    "stock": 60,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "CalDigit TS4 Thunderbolt 4 Docking Station - 18 Ports",
    "description": "The ultimate connectivity solution with 98W Power Delivery. Supports dual 4K or single 8K displays, featuring SD 4.0 and multiple USB-C ports.",
    "price": 399,
    "category": "Computers",
    "brand": "CalDigit",
    "image": "https://m.media-amazon.com/images/I/61H0-EsoK7L._AC_SY879_.jpg",
    "stock": 35,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Wacom Intuos Graphics Drawing Tablet (Medium)",
    "description": "Versatile graphic tablet with 4,096 levels of pressure sensitivity. Features 4 customizable ExpressKeys, Bluetooth connectivity, and a battery-free pen for natural digital sketching and photo editing.",
    "price": 199,
    "category": "Computers",
    "brand": "Wacom",
    "image": "https://m.media-amazon.com/images/I/61T4kMUQKrL._AC_SX679_.jpg",
    "stock": 18,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Samsung 990 PRO NVMe M.2 SSD 1TB with Heatsink",
    "description": "PCIe Gen4 speeds up to 7450 MB/s. Optimized for high-end gaming, video editing, and PlayStation 5 with integrated thermal control.",
    "price": 115,
    "category": "Computers",
    "brand": "Samsung",
    "image": "https://m.media-amazon.com/images/I/81YYujAspoL._AC_SX679_.jpg",
    "stock": 80,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "TP-Link Deco XE75 Pro Wi-Fi 6E Mesh System (3-Pack)",
    "description": "Tri-Band mesh Wi-Fi covering up to 7,200 sq. ft. Eliminates dead zones with speeds up to 5400 Mbps and supports over 200 connected devices.",
    "price": 449,
    "category": "Computers",
    "brand": "TP-Link",
    "image": "https://m.media-amazon.com/images/I/41t6Q20pDjL._AC_SX679_.jpg",
    "stock": 22,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Apple iPhone 15 Pro Max 256GB - Natural Titanium",
    "description": "6.7-inch Super Retina XDR display with ProMotion. Aerospace-grade titanium design with an advanced 48MP main camera and Cinematic video mode.",
    "price": 1199,
    "category": "Smartphones",
    "brand": "Apple",
    "image": "https://m.media-amazon.com/images/I/81izs2I2UvL._AC_SX679_.jpg",
    "stock": 25,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Samsung Galaxy Z Flip5 5G - Graphite 512GB",
    "description": "Revolutionary foldable glass display with a 3.4-inch Flex Window for quick notifications. Compact, pocket-sized design with a powerful Snapdragon 8 Gen 2 chip.",
    "price": 999,
    "category": "Smartphones",
    "brand": "Samsung",
    "image": "https://m.media-amazon.com/images/I/61kF9bAmg4L._AC_SX679_.jpg",
    "stock": 15,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Motorola Moto G85 5G - 12/256GB Surf Blue",
    "description": "6.67-inch pOLED FHD+ 120Hz display with Snapdragon 6s Gen 3 performance. Features a 50MP main camera with OIS, 5000mAh long-lasting battery, and 33W TurboPower charging on Android 14.",
    "price": 299,
    "category": "Smartphones",
    "brand": "Motorola",
    "image": "https://m.media-amazon.com/images/I/71TjhTy+FML._AC_SX679_.jpg",
    "stock": 30,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "ASUS ROG Phone 7 Ultimate - 16GB RAM 512GB",
    "description": "The ultimate gaming phone with AeroActive Portal cooling, AirTrigger ultrasonic buttons, and a massive 6000mAh battery for marathon sessions.",
    "price": 849,
    "category": "Smartphones",
    "brand": "ASUS",
    "image": "https://m.media-amazon.com/images/I/81AEx3xiLOL._AC_SX679_.jpg",
    "stock": 20,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Xiaomi 13 Ultra 5G - Leica Optics Professional Camera",
    "description": "Featuring a massive 1-inch Sony IMX989 sensor and Leica Summicron lens system for studio-quality mobile photography. 90W hyper-fast charging.",
    "price": 1050,
    "category": "Smartphones",
    "brand": "Xiaomi",
    "image": "https://m.media-amazon.com/images/I/51sSxH1yigL._AC_SX679_.jpg",
    "stock": 12,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "ASUS Zenfone 10 5G - 5.9-Inch Compact Design",
    "description": "The most powerful small phone on the market. One-handed 5.9-inch 144Hz AMOLED display with Snapdragon 8 Gen 2 performance.",
    "price": 699,
    "category": "Smartphones",
    "brand": "ASUS",
    "image": "https://m.media-amazon.com/images/I/71Rox1fSb3L._AC_SX679_.jpg",
    "stock": 40,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Blackview BV6200 Plus Rugged Smartphone 11000mAh",
    "description": "Indestructible rugged phone with a massive 11000mAh battery and ultra-loud 98dB speaker. Features 24GB RAM (expanded), 128GB storage, and a 6.56-inch HD+ display. IP68/IP69K certified for extreme outdoor use.",
    "price": 249.99,
    "category": "Smartphones",
    "brand": "Blackview",
    "image": "https://m.media-amazon.com/images/I/81VFO1XUu1L._AC_SX679_.jpg",
    "stock": 18,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Google Pixel 7a 5G - 128GB Sea Blue (Unlocked)",
    "description": "6.1-inch OLED display with 90Hz refresh rate. Powered by Google Tensor G2 and Titan M2 security chip. Features a 64MP dual rear camera system for incredible low-light photos and 4K video.",
    "price": 379,
    "category": "Smartphones",
    "brand": "Google",
    "image": "https://m.media-amazon.com/images/I/71qwFCzGNpL._AC_SX679_.jpg",
    "stock": 60,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Nothing Phone (2) - 256GB Dark Gray",
    "description": "Innovative Glyph Interface with a 6.7-inch LTPO OLED display. Powered by Snapdragon 8+ Gen 1 with a unique transparent design and 50MP dual cameras.",
    "price": 599,
    "category": "Smartphones",
    "brand": "Nothing",
    "image": "https://m.media-amazon.com/images/I/71pdHhgLWoL._AC_SX679_.jpg",
    "stock": 25,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "OnePlus 12R - 16GB RAM 256GB Iron Gray",
    "description": "Flagship performance with a 120Hz ProXDR display and 4th Gen LTPO. Features ultra-fast 80W SUPERVOOC charging and a massive 5500mAh battery.",
    "price": 499,
    "category": "Smartphones",
    "brand": "OnePlus",
    "image": "https://m.media-amazon.com/images/I/61JzJjiAv5L._AC_SX679_.jpg",
    "stock": 30,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Carhartt Men's Midweight Hooded Logo Sweatshirt",
    "description": "Premium heavy-weight cotton blend with a brushed interior for warmth. Features a front handwarmer pocket and stretchable, spandex-reinforced rib-knit cuffs.",
    "price": 65,
    "category": "Clothing",
    "brand": "Carhartt",
    "image": "https://m.media-amazon.com/images/I/71OG5R-tfYL._AC_SY879_.jpg",
    "stock": 80,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Levi's Men's 511 Slim Fit Selvedge Denim Jeans",
    "description": "A modern slim with room to move. These jeans are crafted from premium selvedge denim for a clean, tailored look that ages beautifully.",
    "price": 110,
    "category": "Clothing",
    "brand": "Levi's",
    "image": "https://m.media-amazon.com/images/I/61mrFvyZY9L._AC_UL640_FMwebp_QL65_.jpg",
    "stock": 45,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "The North Face Men's Dryzzle FUTURELIGHT Jacket",
    "description": "Breathable-waterproof, seam-sealed shell made with recycled materials. Engineered for maximum protection and comfort during urban commutes.",
    "price": 185,
    "category": "Clothing",
    "brand": "The North Face",
    "image": "https://m.media-amazon.com/images/I/4168ioqW08L._AC_SX679_.jpg",
    "stock": 20,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Uniqlo Men's 100% Extra Fine Merino Crewneck Sweater",
    "description": "Ethically sourced high-quality merino wool. Features a glossy sheen and a smooth feel, with natural anti-microbial and temperature-regulating properties.",
    "price": 49.9,
    "category": "Clothing",
    "brand": "Uniqlo",
    "image": "https://m.media-amazon.com/images/I/71JUMslQ1oL._AC_SX679_.jpg",
    "stock": 35,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Nike Pro Men's Tight Fit Short-Sleeve Training Top",
    "description": "Moisture-wicking Dri-FIT fabric keeps you cool and dry. High-stretch material with mesh panels for ventilation during high-intensity workouts.",
    "price": 35,
    "category": "Clothing",
    "brand": "Nike",
    "image": "https://m.media-amazon.com/images/I/51H3mG8mNVL._AC_SY879_.jpg",
    "stock": 120,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Tommy Hilfiger Men's Linen Blend Short Sleeve Shirt",
    "description": "A breezy blend of linen and cotton for superior summer comfort. Features a relaxed fit with a classic button-down collar and embroidered logo.",
    "price": 55,
    "category": "Clothing",
    "brand": "Tommy Hilfiger",
    "image": "https://m.media-amazon.com/images/I/619Vas8gYRL._AC_SY879_.jpg",
    "stock": 65,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Runcati Men's Slim Fit Double Breasted Trench Coat",
    "description": "Classic medium-long business casual overcoat featuring a sophisticated double-breasted design. Crafted from windproof fabric, perfect for autumn weather with a modern tailored silhouette.",
    "price": 69.99,
    "category": "Clothing",
    "brand": "London Fog",
    "image": "https://m.media-amazon.com/images/I/615K-ax6D3L._AC_SX679_.jpg",
    "stock": 15,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Champion Men's Heritage Oversized Graphic Tee",
    "description": "Heavyweight 7-oz. cotton jersey for a vintage feel. Features a boxy fit with dropped shoulders and the iconic C logo patch on the sleeve.",
    "price": 32,
    "category": "Clothing",
    "brand": "Champion",
    "image": "https://m.media-amazon.com/images/I/51GMipNnXUL._AC_SX679_.jpg",
    "stock": 200,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Patagonia Men's Nano Puff Vest",
    "description": "Warm, windproof, and water-resistant. Uses 60-g PrimaLoft Gold Insulation Eco wrapped in a 100% recycled polyester shell.",
    "price": 189,
    "category": "Clothing",
    "brand": "Patagonia",
    "image": "https://m.media-amazon.com/images/I/71Qb6PwWL3L._AC_UL640_FMwebp_QL65_.jpg",
    "stock": 50,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "HUGO Men's Slim-Fit Casual Jacket",
    "description": "A versatile and lightweight jacket with a clean, minimalist design. Features a slim-fit silhouette, zip-front closure, and the iconic HUGO logo patch. Perfect for a sharp, contemporary urban look.",
    "price": 79,
    "category": "Clothing",
    "brand": "Hugo Boss",
    "image": "https://m.media-amazon.com/images/I/71vGAfn5pXL._AC_SY879_.jpg",
    "stock": 30,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Clarks Men's Un Costa Lace Leather Sneakers",
    "description": "A clean, minimalist sneaker crafted from premium full-grain leather. Features a lightweight EVA outsole and a removable OrthoLite® footbed for high-performance cushioning and breathable comfort.",
    "price": 90,
    "category": "Shoes",
    "brand": "Clarks",
    "image": "https://m.media-amazon.com/images/I/611ZyyD1SpL._AC_SY695_.jpg",
    "stock": 40,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Nike Air Zoom Alphafly NEXT% 2 Running Shoes",
    "description": "Propulsive carbon plate and ZoomX responsive foam for maximum energy return. Engineered for elite marathon performance and speed.",
    "price": 275,
    "category": "Shoes",
    "brand": "Nike",
    "image": "https://m.media-amazon.com/images/I/71krYcYY29L._AC_SY695_.jpg",
    "stock": 25,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Clarks Men's Chelsea Boots in Premium Suede",
    "description": "Water-resistant suede with elastic side panels and a stacked leather heel. Handcrafted for a sleek, tapered silhouette and all-day comfort.",
    "price": 160,
    "category": "Shoes",
    "brand": "Clarks",
    "image": "https://m.media-amazon.com/images/I/61S76bI1VvL._AC_SY695_.jpg",
    "stock": 18,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": true,
    "discountPrice": 126.32
  },
  {
    "title": "Allbirds Men's Tree Runners Eco-Friendly Trainers",
    "description": "Upper made from FSC-certified eucalyptus tree fiber. Lightweight, breathable, and machine washable with a sugarcane-based foam sole.",
    "price": 105,
    "category": "Shoes",
    "brand": "Allbirds",
    "image": "https://m.media-amazon.com/images/I/71fRLaVWigL._AC_SY695_.jpg",
    "stock": 50,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Salomon Quest 4 Gore-Tex Waterproof Hiking Boots",
    "description": "Gore-Tex lining and Contagrip outsole for ultimate grip. Features a 4D Advanced Chassis to reduce fatigue on multi-day trekking.",
    "price": 230,
    "category": "Shoes",
    "brand": "Salomon",
    "image": "https://m.media-amazon.com/images/I/81gMgXKEnQL._AC_SY695_.jpg",
    "stock": 15,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Converse Chuck Taylor All Star '70 High Top",
    "description": "Durable 12oz cotton canvas with a vulcanized rubber sole. Features the original 1970s silhouette with updated ortholite cushioning.",
    "price": 85,
    "category": "Shoes",
    "brand": "Converse",
    "image": "https://m.media-amazon.com/images/I/51O-na0d2DL._AC_SY695_.jpg",
    "stock": 100,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Allen Edmonds Men's Park Avenue Oxford Shoes",
    "description": "Elegant closed-lacing dress shoes in premium calfskin leather. Bench-welted construction for durability and a refined professional profile.",
    "price": 395,
    "category": "Shoes",
    "brand": "Allen Edmonds",
    "image": "https://m.media-amazon.com/images/I/61TsDCViI2L._AC_SY695_.jpg",
    "stock": 12,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": true,
    "discountPrice": 248.04
  },
  {
    "title": "Teva Men's Terra Fi 5 Universal Hiking Sandals",
    "description": "Quick-dry webbing with multiple adjustment points. Rugged PU midsole and rubber outsole designed for river crossings and trail walking.",
    "price": 110,
    "category": "Shoes",
    "brand": "Teva",
    "image": "https://m.media-amazon.com/images/I/61CnOua1l7L._AC_SY695_.jpg",
    "stock": 45,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Cole Haan Men's American Classics Penny Loafers",
    "description": "Soft unlined leather for a glove-like fit. Features a versatile design with Grand.OS technology for lightweight cushioning and flexibility.",
    "price": 150,
    "category": "Shoes",
    "brand": "Cole Haan",
    "image": "https://m.media-amazon.com/images/I/51TEbbzC35L._AC_SY695_.jpg",
    "stock": 30,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Nike Air Force 1 '07 Basketball Shoes",
    "description": "Inspired by 80s court classics. Perforated leather upper with a pivot-point outsole for multi-directional traction and iconic style.",
    "price": 115,
    "category": "Shoes",
    "brand": "Nike",
    "image": "https://m.media-amazon.com/images/I/610IQPC0HuL._AC_SY695_.jpg",
    "stock": 25,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Swarovski Matrix Vittore Ring, Pear Cut, Rose Gold Tone",
    "description": "A stunning half-eternity band featuring a row of pear-cut white crystals. Crafted with a sophisticated rose gold-tone finish and brilliant cubic zirconia, perfect for adding a touch of luxury to any stack.",
    "price": 179,
    "category": "Jewelry",
    "brand": "Swarovski",
    "image": "https://m.media-amazon.com/images/I/61PhYh3SyBL._AC_SY695_.jpg",
    "stock": 25,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Amberta 925 Sterling Silver 5mm Herringbone Mesh Necklace",
    "description": "Classic Italian-crafted 925 sterling silver flat chain with a 5mm width. Features a flexible herringbone mesh design with a high-polish finish and a secure lobster claw clasp. Length: 45 cm.",
    "price": 59.99,
    "category": "Jewelry",
    "brand": "Amberta",
    "image": "https://m.media-amazon.com/images/I/81C3rBG9TEL._AC_SY695_.jpg",
    "stock": 50,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Miore 9kt Bicolor Gold Pendant Necklace with 19 Diamonds",
    "description": "Exquisite handmade pendant in 9-carat (375) red and white gold. Features 19 brilliant-cut diamonds totaling 0.10 ct on a 45cm anchor chain with a secure ring clasp. Skin-friendly and premium quality.",
    "price": 480,
    "category": "Jewelry",
    "brand": "Miore",
    "image": "https://m.media-amazon.com/images/I/61KpNF3PTmL._AC_SX679_.jpg",
    "stock": 12,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Kate Spade New York Freshwater Pearl Drop Necklace",
    "description": "Genuine freshwater pearl suspended from a delicate 14K rose gold-plated chain. Features a signature lobster clasp and adjustable length for versatile styling.",
    "price": 110,
    "category": "Jewelry",
    "brand": "Kate Spade",
    "image": "https://m.media-amazon.com/images/I/51Wu-G4LkXL._AC_SY695_.jpg",
    "stock": 30,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Fossil Men's Sterling Silver Signet Ring",
    "description": "Classic signet ring crafted from premium sterling silver with a vintage-inspired oxidized finish. Features a bold face ready for a minimalist look.",
    "price": 135,
    "category": "Jewelry",
    "brand": "Fossil",
    "image": "https://m.media-amazon.com/images/I/41q2gG0A7sL._AC_SY695_.jpg",
    "stock": 20,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Pandora Celestial Stars Moonstone Beaded Bracelet",
    "description": "Natural moonstone beads with iridescent blue flash. Finished with a sterling silver toggle clasp and a delicate star charm for a celestial vibe.",
    "price": 75,
    "category": "Jewelry",
    "brand": "Pandora",
    "image": "https://m.media-amazon.com/images/I/51wCICFjpEL._AC_SY695_.jpg",
    "stock": 45,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Michael Kors Gold-Tone Hammered Hoop Earrings",
    "description": "Lightweight 14K gold-plated hoops featuring a hand-hammered texture for an organic, artisanal feel. Features a secure click-top closure.",
    "price": 60,
    "category": "Jewelry",
    "brand": "Michael Kors",
    "image": "https://m.media-amazon.com/images/I/71G3WPcLfNL._AC_SY695_.jpg",
    "stock": 60,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Puraja Genuine Natural Stone Teardrop Pendant",
    "description": "Hand-polished genuine natural crystal in a classic teardrop shape. Features a unique mineral pattern and includes a fine, adjustable black cord band. A perfect minimalist piece for natural stone enthusiasts.",
    "price": 24.9,
    "category": "Jewelry",
    "brand": "Puraja",
    "image": "https://m.media-amazon.com/images/I/71y9yQ4hEcL._AC_SY879_.jpg",
    "stock": 15,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Swarovski Imber Emily Tennis Bracelet (Amazon Exclusive)",
    "description": "A stunning row of brilliant-cut clear crystals set in a sleek rhodium-plated frame. Features a secure fold-over clasp and an elegant, fluid drape. A timeless jewelry essential for both day and evening wear.",
    "price": 54,
    "category": "Jewelry",
    "brand": "Swarovski",
    "image": "https://m.media-amazon.com/images/I/71kPBTVcV+L._AC_SY695_.jpg",
    "stock": 35,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Calvin Klein Sculptural Stainless Steel Cuff Bracelet",
    "description": "Minimalist open cuff made from architectural-grade polished stainless steel. Features a bold matte finish for a modern industrial aesthetic.",
    "price": 120,
    "category": "Jewelry",
    "brand": "Calvin Klein",
    "image": "https://m.media-amazon.com/images/I/71nBEbPHTHL._AC_SX695_.jpg",
    "stock": 22,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Junghans Max Bill Automatic 027/4700.02",
    "description": "Self-winding movement caliber J800.1 with a 38-hour power reserve. Features a 38mm stainless steel case, convex sapphire crystal with anti-reflection coating, and a premium calfskin leather strap. Pure Bauhaus design at its finest.",
    "price": 1435,
    "category": "Watches",
    "brand": "Junghans",
    "image": "https://m.media-amazon.com/images/I/71XI1fDQAjL._AC_SX679_.jpg",
    "stock": 30,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Seiko 5 Sports Automatic Diver's Style Watch",
    "description": "Reliable 24-jewel Japanese automatic movement with 41-hour power reserve. Features a unidirectional rotating bezel, 100m water resistance, and luminous hands and markers.",
    "price": 260,
    "category": "Watches",
    "brand": "Seiko",
    "image": "https://m.media-amazon.com/images/I/61UL5HZ6TOL._AC_SY879_.jpg",
    "stock": 15,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Citizen Eco-Drive Brycen Solar-Powered Chronograph",
    "description": "Sustainably powered by any light source, never needs a battery. Features a 1/5 second chronograph, tachymeter, and a rugged nylon military-style strap.",
    "price": 235,
    "category": "Watches",
    "brand": "Citizen",
    "image": "https://m.media-amazon.com/images/I/61+TF54CigL._AC_SX679_.jpg",
    "stock": 25,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Tissot Chemin Des Tourelles Squelette Mechanical Watch",
    "description": "Intricate open-heart skeleton design revealing the precision Swiss hand-wound movement. Features a scratch-resistant sapphire crystal and exhibition case back.",
    "price": 1850,
    "category": "Watches",
    "brand": "Tissot",
    "image": "https://m.media-amazon.com/images/I/715HEcX89kL._AC_SY879_.jpg",
    "stock": 10,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Boderry Voyager Titanium Automatic Field Watch",
    "description": "Ultra-lightweight 40mm aerospace-grade titanium case with a Japanese automatic movement. Features a day-date complication, sapphire crystal, and 100M water resistance. Finished with a durable, military-grade nylon strap.",
    "price": 145,
    "category": "Watches",
    "brand": "Boderry",
    "image": "https://m.media-amazon.com/images/I/61-BbwC6IWL._AC_SX679_.jpg",
    "stock": 40,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Fossil Women's Jacqueline Rose Gold Mesh Dress Watch",
    "description": "Elegant 36mm rose gold-plated stainless steel case with a matching adjustable mesh bracelet. Minimalist white dial with Roman numeral indexes for a sophisticated look.",
    "price": 115,
    "category": "Watches",
    "brand": "Fossil",
    "image": "https://m.media-amazon.com/images/I/71lQohKWnYL._AC_SX679_.jpg",
    "stock": 35,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Withings Steel HR - Hybrid Smartwatch with Heart Rate",
    "description": "Classic analog style meets digital intelligence. Tracks heart rate, steps, and sleep with smartphone notifications hidden on a small OLED screen. 25-day battery life.",
    "price": 179,
    "category": "Watches",
    "brand": "Withings",
    "image": "https://m.media-amazon.com/images/I/71HjeUNjOIL._AC_SX679_.jpg",
    "stock": 20,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Casio Vintage A168WG-9 Gold Retro Digital Watch",
    "description": "Iconic 80s retro design in gold-tone stainless steel. Features a daily alarm, 1/100 second stopwatch, and Electroluminescent backlight for clear visibility.",
    "price": 49,
    "category": "Watches",
    "brand": "Casio",
    "image": "https://m.media-amazon.com/images/I/61tFJZNDiDL._AC_SX679_.jpg",
    "stock": 100,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Frederique Constant Slimline Moonphase Luxury Watch",
    "description": "Exquisite Swiss-made timepiece featuring an accurate moon phase complication. Sunray blue dial with hand-applied indexes and a genuine alligator leather strap.",
    "price": 1100,
    "category": "Watches",
    "brand": "Frederique Constant",
    "image": "https://m.media-amazon.com/images/I/61eelP1rfuL._AC_SX679_.jpg",
    "stock": 8,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Swatch Originals Blue Rebel Chronograph SUSS400",
    "description": "Dynamic 42mm matte blue case with a high-quality flexible silicone strap. Features a reliable Swiss quartz chronograph movement, date window, and 3 bar water resistance. Perfect for an active and bold lifestyle.",
    "price": 115,
    "category": "Watches",
    "brand": "Swatch",
    "image": "https://m.media-amazon.com/images/I/61s4UmpC1ZL._AC_SY879_.jpg",
    "stock": 70,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "KPL 21-Inch Large Leather Square Duffel Bag",
    "description": "Handcrafted 100% genuine top-grain leather with a durable canvas lining. Features a classic square silhouette, heavy-duty YKK zippers, and multiple compartments for travel, gym, or weekend getaways. Includes a detachable padded shoulder strap.",
    "price": 85,
    "category": "Bags",
    "brand": "KPL",
    "image": "https://m.media-amazon.com/images/I/71IfjyoVguL._AC_SX679_.jpg",
    "stock": 15,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Samsonite Guardit 2.0 - 15.6 Inch Laptop Backpack",
    "description": "Professional minimalist backpack with integrated laptop compartment. Features water-resistant fabric, hidden security pockets, and a smart sleeve for suitcase handle attachment.",
    "price": 89,
    "category": "Bags",
    "brand": "Samsonite",
    "image": "https://m.media-amazon.com/images/I/71FGhrKHaoL._AC_SY879_.jpg",
    "stock": 50,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Bellroy Tokyo Tote - 15L Convertible Canvas Bag",
    "description": "Heavy-duty recycled fabric with premium leather trim. Can be worn as a tote or shoulder bag. Features internal pop pockets for bottles and umbrellas, plus a dedicated tech sleeve.",
    "price": 129,
    "category": "Bags",
    "brand": "Bellroy",
    "image": "https://m.media-amazon.com/images/I/61ajJgs2bYL._AC_SX679_.jpg",
    "stock": 40,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Michael Kors Harrison Saffiano Leather Briefcase",
    "description": "Structured scratch-resistant Saffiano leather with polished silver-tone hardware. Slim, professional profile designed for documents and a 14-inch laptop.",
    "price": 295,
    "category": "Bags",
    "brand": "Michael Kors",
    "image": "https://m.media-amazon.com/images/I/61O1ivZqGYL._AC_UL640_FMwebp_QL65_.jpg",
    "stock": 12,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Chrome Industries Citizen Messenger Bag - 24L",
    "description": "The original waterproof messenger bag with the iconic seatbelt buckle. Features a floating TPE bucket liner for wet/dry separation and reflective details for night visibility.",
    "price": 160,
    "category": "Bags",
    "brand": "Chrome Industries",
    "image": "https://m.media-amazon.com/images/I/81rFNadkccL._AC_SY695_.jpg",
    "stock": 25,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": true,
    "discountPrice": 123.92
  },
  {
    "title": "Fossil Women's Heritage Suede Crossbody Bag",
    "description": "Soft unlined suede with a vintage bohemian aesthetic. Features an adjustable leather strap, magnetic fold-over closure, and high-quality brass hardware.",
    "price": 145,
    "category": "Bags",
    "brand": "Fossil",
    "image": "https://m.media-amazon.com/images/I/91k1WcCDmrL._AC_SX695_.jpg",
    "stock": 35,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Samsonite Omni PC Hardside Expandable Luggage",
    "description": "Impact-resistant polycarbonate micro-diamond shell with 360-degree spinner wheels. TSA-approved side-mounted lock and full-zip interior divider.",
    "price": 155,
    "category": "Bags",
    "brand": "Samsonite",
    "image": "https://m.media-amazon.com/images/I/91LRm6mzT1L._AC_SX679_.jpg",
    "stock": 20,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Patagonia Black Hole Duffel Bag 40L - Recycled",
    "description": "Extremely durable and weather-resistant 100% recycled polyester ripstop. Padded, removable shoulder straps and a reinforced haul handle for heavy loads.",
    "price": 159,
    "category": "Bags",
    "brand": "Patagonia",
    "image": "https://m.media-amazon.com/images/I/61AeFM9tF6L._AC_SX679_.jpg",
    "stock": 60,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": true,
    "discountPrice": 127.25
  },
  {
    "title": "Eastpak Springer Bum Bag - Black",
    "description": "Compact one-strap sling pack for essentials. Features a zippered main compartment, adjustable waist belt, and a secure back pocket for travel documents.",
    "price": 30,
    "category": "Bags",
    "brand": "Eastpak",
    "image": "https://m.media-amazon.com/images/I/711oLcPjK3L._AC_SX679_.jpg",
    "stock": 100,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Kate Spade New York Velvet Evening Clutch",
    "description": "Rich emerald velvet with a detachable gold-tone chain strap. Silk-lined interior with card slots, perfect for elegant formal occasions.",
    "price": 198,
    "category": "Bags",
    "brand": "Kate Spade",
    "image": "https://m.media-amazon.com/images/I/61kv+XheJEL._AC_SY695_.jpg",
    "stock": 15,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": true,
    "discountPrice": 159.6
  },
  {
    "title": "HOMCOM Relax Armchair with Footrest",
    "description": "Scandi-style high back armchair with matching ottoman. Features breathable quilted grey fabric, thick padding, and sturdy rubberwood legs. Dimensions: 75 x 83 x 104 cm.",
    "price": 179.99,
    "category": "Furniture",
    "brand": "HOMCOM",
    "image": "https://m.media-amazon.com/images/I/810qbnq6qXL._AC_SX679_.jpg",
    "stock": 12,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "IKEA DOCKSTA Dining Table",
    "description": "Iconic circular dining table with a clean white finish and a stable pedestal base. Perfect for small spaces and minimalist interiors.",
    "price": 299,
    "category": "Furniture",
    "brand": "IKEA",
    "image": "https://m.media-amazon.com/images/I/41fmGMcwi5L._AC_SX679_.jpg",
    "stock": 15,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Steelcase Gesture Office Chair",
    "description": "Award-winning ergonomic chair designed to support a wide range of postures and device usage. Features 360-degree rotating arms.",
    "price": 1399,
    "category": "Furniture",
    "brand": "Steelcase",
    "image": "https://m.media-amazon.com/images/I/61O5VQbT71L._AC_SX679_.jpg",
    "stock": 25,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Nathan James Beacon 5 Tier Wall Mounted Bookcase",
    "description": "Solid wood 5-shelf unit with a brushed finish. Features a rustic bohemian style that mounts to the wall for a space-saving, floating look.",
    "price": 792,
    "category": "Furniture",
    "brand": "Nathan James",
    "image": "https://m.media-amazon.com/images/I/71X+cgW8J5L._AC_SX679_.jpg",
    "stock": 12,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Zinus Shalini Upholstered Platform Bed Frame",
    "description": "Classic diamond-stitched button tufted upholstery with a reliable wood slat support system for any mattress type.",
    "price": 350,
    "category": "Furniture",
    "brand": "Zinus",
    "image": "https://m.media-amazon.com/images/I/81grmmiyrLL._AC_SX679_.jpg",
    "stock": 10,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": true,
    "discountPrice": 251.96
  },
  {
    "title": "Christopher Knight Home Ardesia Outdoor Round Slate Tile Side Table",
    "description": "A charming outdoor accent piece featuring a handcrafted slate tile mosaic top and a sturdy black iron frame. Perfect for patios, balconies, or garden seating areas.",
    "price": 75,
    "category": "Furniture",
    "brand": "Christopher Knight Home",
    "image": "https://m.media-amazon.com/images/I/71sirCzJD4L._AC_SX679_.jpg",
    "stock": 15,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "JUMMICO Height Adjustable Electric Standing Desk",
    "description": "Electric desk with a smart control panel featuring 4 memory presets and an integrated USB charger. Compact 100 x 60 cm brown tabletop with a sturdy steel frame for home office ergonomics.",
    "price": 169.99,
    "category": "Furniture",
    "brand": "JUMMICO",
    "image": "https://m.media-amazon.com/images/I/71ybVMgvHBL._AC_SX679_.jpg",
    "stock": 20,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Kartell Masters Stool",
    "description": "Stool made from recycled thermoplastic technopolymer with mineral charge and soft-touch treatment. Features the iconic hybrid silhouette of three chair masterpieces. Grey color, 65 cm seat height.",
    "price": 385,
    "category": "Furniture",
    "brand": "Kartell",
    "image": "https://m.media-amazon.com/images/I/41Tzd2u-n5L._AC_SX679_.jpg",
    "stock": 18,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Walker Edison Mid-Century Modern TV Stand",
    "description": "Wood media console with miter joint details and tapered legs. Accommodates TVs up to 65 inches with cable management.",
    "price": 280,
    "category": "Furniture",
    "brand": "Walker Edison",
    "image": "https://m.media-amazon.com/images/I/717xfINsHVL._AC_SX679_.jpg",
    "stock": 30,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Signature Design by Ashley Centiar Bar Stools Set of 2",
    "description": "Modern industrial-style counter height stools (61 cm) with contoured bucket seats and sleek black faux leather upholstery. Features a sturdy tubular steel frame with a built-in footrest.",
    "price": 189.99,
    "category": "Furniture",
    "brand": "Ashley Centiar",
    "image": "https://m.media-amazon.com/images/I/61ZZfoiTXqL._AC_SX679_.jpg",
    "stock": 40,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "KitchenAid Artisan Series 4.8 L Tilt-Head Stand Mixer - Imperial Red",
    "description": "The iconic KitchenAid planetary mixer with 10 speed levels and 4.8 L stainless steel bowl. Includes 7 professional accessories for kneading, whisking, and mixing. Professional-grade durability for all your baking needs.",
    "price": 563,
    "category": "Kitchen",
    "brand": "KitchenAid",
    "image": "https://m.media-amazon.com/images/I/61xqyMhVIWL._AC_SX679_.jpg",
    "stock": 15,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Caraway Non-Stick Ceramic Cookware Set, 12-Piece",
    "description": "Eco-friendly ceramic-coated aluminum cookware. Naturally non-stick surface, PFAS-free, and induction compatible with a sleek modern design.",
    "price": 395,
    "category": "Kitchen",
    "brand": "Caraway",
    "image": "https://m.media-amazon.com/images/I/71+tC3QLigL._AC_SX679_.jpg",
    "stock": 25,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Ninja Foodi 6-in-1 8-Quart 2-Basket Air Fryer",
    "description": "Digital air fryer with DualZone technology. Two independent baskets let you cook two foods, two ways, at the same time.",
    "price": 199.99,
    "category": "Kitchen",
    "brand": "Ninja",
    "image": "https://m.media-amazon.com/images/I/71lLLGyzpBL._AC_SX679_.jpg",
    "stock": 40,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "NutriBullet Ultra Personal Blender",
    "description": "High-speed 1200W motor for superior extraction. Includes specialized blades for crushing ice and tough ingredients, plus two 24oz travel cups.",
    "price": 149.99,
    "category": "Kitchen",
    "brand": "NutriBullet",
    "image": "https://m.media-amazon.com/images/I/61A6BFVZo+L._AC_SX679_.jpg",
    "stock": 50,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Wüsthof Classic 7-Piece Slim Knife Block Set",
    "description": "Precision-forged German high-carbon stainless steel knives. Features full-tang blades and ergonomic triple-riveted handles.",
    "price": 345,
    "category": "Kitchen",
    "brand": "Wüsthof",
    "image": "https://m.media-amazon.com/images/I/71JdZDJBRSL._AC_SX679_.jpg",
    "stock": 10,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "De'Longhi Magnifica EVO Automatic Espresso Machine",
    "description": "One-touch bean-to-cup machine with integrated milk frother. Features a built-in grinder and 7 recipes for espresso and cappuccinos.",
    "price": 799.95,
    "category": "Kitchen",
    "brand": "De'Longhi",
    "image": "https://m.media-amazon.com/images/I/61GzeqMiQ7L._AC_SX679_.jpg",
    "stock": 12,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Crock-Pot MyTime 6-Quart Programmable Slow Cooker",
    "description": "Smart slow cooker with adjustable cycle times. Automatically shifts to warm setting when cooking is done to ensure meals are ready when you are.",
    "price": 89.99,
    "category": "Kitchen",
    "brand": "Crock-Pot",
    "image": "https://m.media-amazon.com/images/I/71DoIaTuHSL._AC_SX679_.jpg",
    "stock": 30,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Fellow Stagg EKG Electric Gooseneck Kettle",
    "description": "Precision pour-over kettle with variable temperature control and a minimalist matte black design. Includes a built-in brew stopwatch.",
    "price": 165,
    "category": "Kitchen",
    "brand": "Fellow",
    "image": "https://m.media-amazon.com/images/I/51MfuBJO2BL._AC_SX679_.jpg",
    "stock": 35,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": true,
    "discountPrice": 135.1
  },
  {
    "title": "Click and Grow Smart Garden 3",
    "description": "Indoor herb garden with automated watering and LED grow lights. Perfect for growing fresh basil, mint, and cilantro on your countertop.",
    "price": 99.95,
    "category": "Kitchen",
    "brand": "Click and Grow",
    "image": "https://m.media-amazon.com/images/I/51Ww4qBetDL._AC_SX679_.jpg",
    "stock": 60,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Rubbermaid 2118313 Brilliance Food Storage Containers with Lids - Clear (Pack of 4)",
    "description": "Set of 4 crystal-clear, BPA-free plastic food storage containers with 100% leak-proof airtight lids. Features built-in vents for splatter-resistant microwaving and stackable design.",
    "price": 34.99,
    "category": "Kitchen",
    "brand": "Rubbermaid",
    "image": "https://m.media-amazon.com/images/I/81Ajid2lDYL._AC_SX679_.jpg",
    "stock": 100,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Philips Hue Personal Wireless Lighting Hue Go White and Color Ambiance",
    "description": "Portable smart light with integrated rechargeable battery. Control via Bluetooth or Hue Bridge for millions of colors and dynamic lighting effects.",
    "price": 89.99,
    "category": "Lighting",
    "brand": "Philips Hue",
    "image": "https://m.media-amazon.com/images/I/71jwyZ9bKHL._AC_SX679_.jpg",
    "stock": 25,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Artemide Tolomeo Micro Table Lamp - Aluminum",
    "description": "The world's most famous design desk lamp. Features a fully adjustable arm and head in polished aluminum with a spring balancing system.",
    "price": 245,
    "category": "Lighting",
    "brand": "Artemide",
    "image": "https://m.media-amazon.com/images/I/41BX2qnUOiL._AC_SX679_.jpg",
    "stock": 10,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": true,
    "discountPrice": 186.64
  },
  {
    "title": "Nanoleaf Shapes Triangles Smarter Kit (7 Panels)",
    "description": "Modular LED light panels with music sync and touch control. Create your own geometric wall art with 16 million colors.",
    "price": 199.99,
    "category": "Lighting",
    "brand": "Nanoleaf",
    "image": "https://m.media-amazon.com/images/I/71j5ziJHCDL._AC_SX679_.jpg",
    "stock": 15,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Govee RGBIC Floor Lamp",
    "description": "Modern minimalist corner lamp with smart App and Voice control. Features segment-controlled RGBIC technology and music sync mode.",
    "price": 99.99,
    "category": "Lighting",
    "brand": "Govee",
    "image": "https://m.media-amazon.com/images/I/61UPBdABrqL._AC_SX679_.jpg",
    "stock": 30,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Vecys Modern Nordic Funnel Pendant Lamp - Imitation Cement",
    "description": "Minimalist E27 funnel chandelier with a unique imitation resin/cement finish. Modern Nordic design ideal for offices, restaurants, cafeterias, and industrial-style home interiors.",
    "price": 42.99,
    "category": "Lighting",
    "brand": "Vecys",
    "image": "https://m.media-amazon.com/images/I/514htfrtpgL._AC_SY879_.jpg",
    "stock": 40,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "BenQ ScreenBar Monitor Light",
    "description": "E-reading LED task lamp with auto-dimming and hue adjustment. Clips onto monitors to eliminate screen glare and save desk space.",
    "price": 109,
    "category": "Lighting",
    "brand": "BenQ",
    "image": "https://m.media-amazon.com/images/I/51NidtzAMBL._AC_SX679_.jpg",
    "stock": 20,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Jonathan Y JYL7437B Pagoda Lantern 16 in. Metal LED Pendant",
    "description": "Classic traditional farmhouse lantern in a stunning antique gold finish. Features a dimmable LED bulb and adjustable chain, ideal for foyers, kitchens, or dining rooms.",
    "price": 159,
    "category": "Lighting",
    "brand": "Jonathan Y",
    "image": "https://m.media-amazon.com/images/I/81+G0FpIKtL._AC_SX679_.jpg",
    "stock": 5,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Lutron Caseta Smart Home Dimmer Switch Starter Kit",
    "description": "Smart lighting control system compatible with Alexa, Google Assistant, and Apple HomeKit. Includes bridge and wall dimmers.",
    "price": 317.95,
    "category": "Lighting",
    "brand": "Lutron",
    "image": "https://m.media-amazon.com/images/I/715MPVDVhJL._SX522_.jpg",
    "stock": 50,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": true,
    "discountPrice": 249.67
  },
  {
    "title": "Brightech Ambience Pro Solar Powered Outdoor String Lights",
    "description": "Commercial grade waterproof LED bistro lights. Solar powered with vintage Edison bulbs for patio and garden ambiance.",
    "price": 45,
    "category": "Lighting",
    "brand": "Brightech",
    "image": "https://m.media-amazon.com/images/I/71qwtuKYtGL._AC_SX679_.jpg",
    "stock": 100,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Kartell Bourgie Dimmable Table Lamp - Crystal",
    "description": "A Baroque-style masterpiece made of transparent polycarbonate. Features a dimmable LED system with an E14 socket and three different height adjustments for a unique play of light and reflections.",
    "price": 385,
    "category": "Lighting",
    "brand": "Kartell",
    "image": "https://m.media-amazon.com/images/I/61-eTt3FQHL._AC_SX679_.jpg",
    "stock": 8,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Brooklinen Classic Core Sheet Set - 100% Cotton Percale",
    "description": "The internet's favorite sheets. Features a crisp, cool 270 thread count percale weave made from 100% long-staple cotton for a luxury hotel feel.",
    "price": 189,
    "category": "Bedding",
    "brand": "Brooklinen",
    "image": "https://m.media-amazon.com/images/I/71H1GGUsmpL._AC_SX679_.jpg",
    "stock": 60,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "TEMPUR Original Low Neck Pillow, Medium (50 x 31 x 10/7 cm)",
    "description": "Ergonomic neck support pillow specifically designed for side and back sleepers. Features a firm feel with a contoured shape that aligns your head, neck, and shoulders for a restorative night's sleep.",
    "price": 115,
    "category": "Bedding",
    "brand": "TEMPUR",
    "image": "https://m.media-amazon.com/images/I/61Yffjr5+lL._AC_SX679_.jpg",
    "stock": 100,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Eloneo Weighted Blanket, 135 x 200 cm, 11 kg",
    "description": "TÜV and Oeko-Tex certified weighted blanket made from 100% cotton. Designed as a relaxing and therapeutic anti-stress blanket to improve sleep quality through deep touch pressure.",
    "price": 89.9,
    "category": "Bedding",
    "brand": "Eloneo",
    "image": "https://m.media-amazon.com/images/I/717FUvSmpNL._AC_SX679_.jpg",
    "stock": 25,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Utopia Bedding Double Duvet Cover 240 x 220 cm - White",
    "description": "Soft brushed microfibre duvet cover set (240 x 220 cm) with two matching pillowcases (80 x 80 cm). Features a hidden zipper closure and corner ties to keep your duvet in place.",
    "price": 24.99,
    "category": "Bedding",
    "brand": "Utopia Bedding",
    "image": "https://m.media-amazon.com/images/I/71HsX4QoEwL._AC_SX679_.jpg",
    "stock": 40,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Uttu Sandwich Pillow, Adjustable Memory Foam Pillow",
    "description": "Ergonomic cooling pillow with adjustable height. Features a 3-layer design with a removable middle layer and a soft, breathable bamboo cover. Perfectly aligns the neck and spine for side, back, and stomach sleepers.",
    "price": 49.99,
    "category": "Bedding",
    "brand": "Uttu",
    "image": "https://m.media-amazon.com/images/I/612UOPuEY1L._AC_SX679_.jpg",
    "stock": 15,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Enetix Silk Satin Pillowcase for Hair and Skin, Pack of 2",
    "description": "Set of 2 light blue satin pillowcases (50x70cm) with a hidden zipper. Designed to be acne-free and gentle on hair, reducing frizz and skin irritation. Includes a premium gift box.",
    "price": 18.99,
    "category": "Bedding",
    "brand": "Enetix",
    "image": "https://m.media-amazon.com/images/I/81iPGWex1rL._AC_SX679_.jpg",
    "stock": 150,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Amazon Basics Waterproof Double Mattress Protector, 160 x 200 cm",
    "description": "Quiet and breathable double mattress protector with a 100% waterproof membrane. Features an extra deep 45 cm elastic band for a secure fit. Fully machine washable and designed to protect against spills and allergens.",
    "price": 26.5,
    "category": "Bedding",
    "brand": "Amazon Basics",
    "image": "https://m.media-amazon.com/images/I/71fFzP7eC+L._AC_SX679_.jpg",
    "stock": 80,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Bedsure Fleece Blanket Throw - Sage Green",
    "description": "Super soft, lightweight microfiber flannel blanket. Features a neat stitch design and adds a cozy, breathable layer to any bed or sofa.",
    "price": 21.99,
    "category": "Bedding",
    "brand": "Bedsure",
    "image": "https://m.media-amazon.com/images/I/81DguWVkl2L._AC_SX679_.jpg",
    "stock": 35,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Chilling Home Cooling U Shaped Pregnancy Pillow - Cooling Grey",
    "description": "Oversized U-shaped support pillow for side sleepers and nursing. Features a breathable cooling jersey cover and premium filling to support back, hips, and knees during pregnancy.",
    "price": 45.99,
    "category": "Bedding",
    "brand": "Chilling Home",
    "image": "https://m.media-amazon.com/images/I/71cpxL4e7bL._AC_SX679_.jpg",
    "stock": 20,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Silentnight Comfort Control Electric Blanket",
    "description": "Features 3 heat settings and fast heat-up time. Includes overheat protection and elasticated straps for a secure fit on the mattress.",
    "price": 45,
    "category": "Bedding",
    "brand": "Silentnight",
    "image": "https://m.media-amazon.com/images/I/81lYjKeutVL._AC_SX679_.jpg",
    "stock": 45,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "iRobot Roomba j7+ Self-Emptying Robot Vacuum",
    "description": "Smart mapping robot vacuum with PrecisionVision Navigation to avoid obstacles like pet waste and charging cords. Includes Clean Base Automatic Dirt Disposal.",
    "price": 599,
    "category": "Appliances",
    "brand": "iRobot",
    "image": "https://m.media-amazon.com/images/I/51ISjXVTKgL._AC_SX679_.jpg",
    "stock": 15,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Breville The Smart Oven Air Fryer Pro BOV900BS Brushed Stainless Steel Convection Oven",
    "description": "High-performance countertop oven with 13 cooking functions including air fry, dehydrate, and slow cook. Features Element IQ technology and a spacious interior that fits a 14-pound turkey or 9 slices of bread.",
    "price": 399.95,
    "category": "Appliances",
    "brand": "Breville",
    "image": "https://m.media-amazon.com/images/I/51jCxzgxYwL._AC_SX679_.jpg",
    "stock": 20,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Levoit LV600S 6L Ultrasonic Ambient Humidifier",
    "description": "Smart 6L humidifier featuring both hot and cold mist with a convenient top-fill design. Includes personalized humidity settings, app control, and aromatherapy for rooms up to 70 m². White finish.",
    "price": 109.99,
    "category": "Appliances",
    "brand": "Levoit",
    "image": "https://m.media-amazon.com/images/I/71kwT0pX7+L._AC_SX679_.jpg",
    "stock": 45,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Black+Decker HGS Garment Steamer - Lavender",
    "description": "Handheld fabric steamer in a stylish lavender finish. Heats up quickly to remove wrinkles from clothes, curtains, and upholstery with continuous steam and an ergonomic handle.",
    "price": 39.99,
    "category": "Appliances",
    "brand": "Black+Decker",
    "image": "https://m.media-amazon.com/images/I/51Nw-2Q1veL._AC_SX679_.jpg",
    "stock": 60,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Comfee' MDDF-20DEN7-WF Dehumidifier 20L/24h",
    "description": "Smart 20-liter dehumidifier with WiFi control, compatible with Alexa. Features a 3L water tank, 24-hour timer, and swivel wheels. Ideal for spaces up to 40㎡ to prevent mold and moisture buildup.",
    "price": 199,
    "category": "Appliances",
    "brand": "Comfee'",
    "image": "https://m.media-amazon.com/images/I/41v+KxGa9TL._AC_SX679_.jpg",
    "stock": 10,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "GE Profile Opal Side Tank 2.0 - 0.75 Gallon Accessory",
    "description": "Official side tank accessory for the Opal Nugget Ice Maker. Increases ice production capacity by up to 3 times with a 0.75 gallon reservoir. Easy magnetic attachment and slim design to fit your countertop.",
    "price": 99,
    "category": "Appliances",
    "brand": "GE Profile",
    "image": "https://m.media-amazon.com/images/I/61XM2FLr5eL._SX522_.jpg",
    "stock": 25,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Cuisinart CPT-180 Metal Classic 4-Slice Toaster",
    "description": "Iconic brushed stainless steel toaster with dual controls. Features 6 browning settings and dedicated bagel/defrost functions.",
    "price": 69.95,
    "category": "Appliances",
    "brand": "Cuisinart",
    "image": "https://m.media-amazon.com/images/I/51Lkks2EbrL._AC_SX679_.jpg",
    "stock": 55,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": true,
    "discountPrice": 43.38
  },
  {
    "title": "Haier HAWBKIT05 Battery Powered Electric Wine Set",
    "description": "Premium quality electric wine opener set with a storage base. Includes a foil cutter, aerator, tulip drip stopper, and two vacuum caps. Provides a complete professional experience for opening and preserving wine.",
    "price": 45,
    "category": "Appliances",
    "brand": "Haier",
    "image": "https://m.media-amazon.com/images/I/61xHoT-YABL._AC_SY879_.jpg",
    "stock": 100,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Simplehuman 58 Liter Rectangular Sensor Trash Can",
    "description": "High-tech touchless bin with motion sensor and voice control. Features a fingerprint-proof finish and a built-in liner pocket.",
    "price": 199.99,
    "category": "Appliances",
    "brand": "Simplehuman",
    "image": "https://m.media-amazon.com/images/I/518OWqdD4TL._SX522_.jpg",
    "stock": 30,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Presto 06300 Dehydro Electric Food Dehydrator",
    "description": "Simple 4-tray system for making jerky, dried fruit, and herbs. Features a see-through cover and expandable trays.",
    "price": 59.99,
    "category": "Appliances",
    "brand": "Presto",
    "image": "https://m.media-amazon.com/images/I/71UeiUBDxGL._AC_SX679_.jpg",
    "stock": 18,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "CeraVe Hydrating Facial Cleanser",
    "description": "Non-foaming face wash with hyaluronic acid, ceramides, and glycerin. Gently removes dirt and oil while increasing skin hydration.",
    "price": 15.99,
    "category": "Skincare",
    "brand": "CeraVe",
    "image": "https://m.media-amazon.com/images/I/61pwYY8Hp7L._AC_SX522_.jpg",
    "stock": 100,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "La Roche-Posay Anthelios UVMune 400 Invisible Fluid SPF50+",
    "description": "Ultra-light daily sunscreen with very high UVA/UVB protection. Fragrance-free, non-greasy, and invisible finish on all skin types.",
    "price": 22,
    "category": "Skincare",
    "brand": "La Roche-Posay",
    "image": "https://m.media-amazon.com/images/I/519s2klq04L._AC_SX522_.jpg",
    "stock": 80,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Paula's Choice Skin Perfecting 2% BHA Liquid Exfoliant",
    "description": "Global best-seller leave-on exfoliant with salicylic acid. Unclogs pores, smooths wrinkles, and evens out skin tone.",
    "price": 39,
    "category": "Skincare",
    "brand": "Paula's Choice",
    "image": "https://m.media-amazon.com/images/I/51BiDbnbcJL._AC_SX679_.jpg",
    "stock": 45,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Neutrogena Hydro Boost Water Gel Face Cream - 50ml",
    "description": "Lightweight water-based gel moisturizer formulated with hyaluronic acid for intense hydration. Ideal for combination and sensitive skin, it leaves the face feeling smooth and supple with a refreshed look.",
    "price": 18.5,
    "category": "Skincare",
    "brand": "Neutrogena",
    "image": "https://m.media-amazon.com/images/I/71vsCjNjb6L._AC_SX679_.jpg",
    "stock": 120,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Bio-Oil Skincare Body Oil Serum - 125ml (4.2 Oz)",
    "description": "Dermatologist recommended skincare oil for scars, stretch marks, and uneven skin tone. Formulated with Vitamin E and A, this non-comedogenic serum acts as a deep face and body moisturizer for sensitive dry skin.",
    "price": 14.99,
    "category": "Skincare",
    "brand": "Bio-Oil",
    "image": "https://m.media-amazon.com/images/I/616kC3A3jwL._SX679_.jpg",
    "stock": 150,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "COSRX Advanced Snail 96 Mucin Power Essence",
    "description": "Lightweight essence that absorbs into the skin fast to give a natural glow from the inside. Formulated with 96.3% Snail Secretion Filtrate.",
    "price": 25,
    "category": "Skincare",
    "brand": "Cosrx",
    "image": "https://m.media-amazon.com/images/I/71efdgMUtML._SX679_.jpg",
    "stock": 60,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Garnier Micellar Cleansing Water",
    "description": "All-in-1 cleanser and makeup remover. Powerful yet gentle, it lifts away dirt, oil, and makeup without harsh rubbing or rinsing.",
    "price": 8.99,
    "category": "Skincare",
    "brand": "Garnier",
    "image": "https://m.media-amazon.com/images/I/61qrHCKF0jL._SX679_.jpg",
    "stock": 300,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Kiehl's Ultra Facial Cream with 4.5% Squalane",
    "description": "Ultra-hydrating face cream formulated with 4.5% Squalane to strengthen the skin's moisture barrier. Provides long-lasting hydration, leaving skin feeling softer and smoother. Fast-absorbing and suitable for all skin types.",
    "price": 38,
    "category": "Skincare",
    "brand": "Kiehl's",
    "image": "https://m.media-amazon.com/images/I/61271b8GniL._SX522_.jpg",
    "stock": 35,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "L'Oréal Paris Revitalift Filler 1.5% Pure Hyaluronic Acid Serum",
    "description": "Anti-wrinkle serum that re-plumps skin and reduces wrinkles. Intensive hydrating formula for a visible bouncy and youthful look.",
    "price": 29.99,
    "category": "Skincare",
    "brand": "L'Oréal Paris",
    "image": "https://m.media-amazon.com/images/I/619Ww3HrWEL._SX679_.jpg",
    "stock": 75,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Catrice HD Liquid Coverage Foundation & Under Eye Brightener Set",
    "description": "High-performance makeup set featuring the HD Liquid Coverage Foundation (Shade 10) and Under Eye Brightener (Light Rose). Offers full coverage with a natural finish. Vegan, cruelty-free, and long-lasting formula.",
    "price": 15.5,
    "category": "Skincare",
    "brand": "Catrice",
    "image": "https://m.media-amazon.com/images/I/61IibTb9mLL._SX679_.jpg",
    "stock": 120,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Maybelline New York Lash Sensational Sky High Mascara",
    "description": "Sky High lash impact from every angle. Long-lasting mascara delivers full volume and limitless length. Formula with bamboo extract and fibers.",
    "price": 12.99,
    "category": "Beauty",
    "brand": "Maybelline",
    "image": "https://m.media-amazon.com/images/I/71o1Q0jxUbL._SX679_.jpg",
    "stock": 150,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Nyx Professional Makeup Control Drop Foundation",
    "description": "Versatile liquid foundation with a dropper for customizable coverage. From sheer to full, it leaves a natural-looking matte finish.",
    "price": 15,
    "category": "Beauty",
    "brand": "Nyx",
    "image": "https://m.media-amazon.com/images/I/41Xd+jQVxgL._SX679_.jpg",
    "stock": 85,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Rare Beauty Soft Pinch Liquid Blush",
    "description": "A weightless, long-lasting liquid blush that blends and builds beautifully for a soft, healthy flush. Available in matte and dewy finishes.",
    "price": 23,
    "category": "Beauty",
    "brand": "Rare Beauty",
    "image": "https://m.media-amazon.com/images/I/4176CRjN4+L._SX679_.jpg",
    "stock": 40,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "L'Oréal Paris Infallible 24H Fresh Wear Powder Foundation",
    "description": "Covers like a liquid and mattifies like a powder. Waterproof, sweat-proof, and heat-proof. High coverage with a natural look.",
    "price": 16.99,
    "category": "Beauty",
    "brand": "L'Oréal Paris",
    "image": "https://m.media-amazon.com/images/I/811J-Izj1GL._SX679_.jpg",
    "stock": 120,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Essence Lash Princess False Lash Effect Mascara",
    "description": "The viral mascara that defines and separates lashes while achieving a bold look. Provides intense volume and length without clumps.",
    "price": 4.99,
    "category": "Beauty",
    "brand": "Essence",
    "image": "https://m.media-amazon.com/images/I/61HLmRuVZvL._SX679_.jpg",
    "stock": 300,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Urban Decay Naked Mini Eyeshadow Palette",
    "description": "Travel-size palette with 6 ultra-blendable, multi-use shades. Features a mix of matte, shimmer, and metallic finishes that last up to 12 hours. Crease-free, vegan, and cruelty-free formula.",
    "price": 33,
    "category": "Beauty",
    "brand": "Urban Decay",
    "image": "https://m.media-amazon.com/images/I/71tZJZI9MeL._SX522_.jpg",
    "stock": 25,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "E.l.f. Cosmetics Power Grip Primer",
    "description": "Gel-based, ingredient-focused face primer that smoothes skin while gripping your makeup to help it last longer.",
    "price": 10,
    "category": "Beauty",
    "brand": "e.l.f. Cosmetics",
    "image": "https://m.media-amazon.com/images/I/61FfGNgMGsL._SX679_.jpg",
    "stock": 200,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Fenty Beauty Gloss Bomb Universal Lip Luminizer",
    "description": "The ultimate gotta-have-it lip gloss with explosive shine that feels as good as it looks. One universal shade for everyone.",
    "price": 21,
    "category": "Beauty",
    "brand": "Fenty Beauty",
    "image": "https://m.media-amazon.com/images/I/41rByyM+-NL._SX679_.jpg",
    "stock": 60,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Charlotte Tilbury Holiday Kit - Airbrush Flawless Trio",
    "description": "Limited edition holiday set featuring the Airbrush Flawless Setting Spray, Airbrush Flawless Finish pressed powder, and the Icon Baby Lip Duo. A complete kit for a hydrated, long-lasting, and poreless makeup look.",
    "price": 68,
    "category": "Beauty",
    "brand": "Charlotte Tilbury",
    "image": "https://m.media-amazon.com/images/I/71iN97e4K6L._SX522_.jpg",
    "stock": 30,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Milani Baked Blush - Luminoso",
    "description": "A fan-favorite silk-textured powder blush that delivers a natural glow. Sun-baked on Italian terracotta tiles for a unique radiance.",
    "price": 11.99,
    "category": "Beauty",
    "brand": "Milani",
    "image": "https://m.media-amazon.com/images/I/81HJ4auH-pL._SX679_.jpg",
    "stock": 90,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Omron X3 Comfort Blood Pressure Monitor with 22-42 cm Cuff",
    "description": "Clinically validated upper arm blood pressure monitor. Includes the Intelli Wrap Cuff (22-42 cm) suitable for medium to large arms. Features stroke risk detection and easy-to-read digital display.",
    "price": 74.99,
    "category": "Health",
    "brand": "Omron",
    "image": "https://m.media-amazon.com/images/I/71yqn7eEp6L._AC_SX679_.jpg",
    "stock": 40,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": true,
    "discountPrice": 45.05
  },
  {
    "title": "Oral-B Smart 5000 Rechargeable Electric Powered Toothbrush",
    "description": "Advanced electric toothbrush with Bluetooth connectivity and 5 cleaning modes. Features a visible pressure sensor to protect gums, a professional 2-minute timer, and includes a handy travel case. Black edition.",
    "price": 89.99,
    "category": "Health",
    "brand": "Oral-B",
    "image": "https://m.media-amazon.com/images/I/51N3QI-3FNL._AC_SX679_.jpg",
    "stock": 120,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Fitbit Charge 6 Fitness Tracker with Google Apps",
    "description": "Advanced fitness tracker with heart rate tracking, built-in GPS, and Sleep Score. Features Google Maps and Wallet integration for a smarter health journey.",
    "price": 159,
    "category": "Health",
    "brand": "Fitbit",
    "image": "https://m.media-amazon.com/images/I/61ZtqtvoD2L._AC_SX679_.jpg",
    "stock": 35,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Beurer FT 95 Contactless Infrared Thermometer",
    "description": "Professional Bluetooth thermometer for fever measurements on the forehead. Features a LED fever alarm and memory for 60 measurements. Connects to Beurer HealthManager app.",
    "price": 49,
    "category": "Health",
    "brand": "Beurer",
    "image": "https://m.media-amazon.com/images/I/51A0OvztELL._AC_SX679_.jpg",
    "stock": 60,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Optimum Nutrition Gold Standard 100% Whey Protein - 2kg",
    "description": "The world's best-selling whey protein powder. Each serving provides 24g of high-quality whey protein and 5.5g of naturally occurring BCAAs to support muscle recovery.",
    "price": 65,
    "category": "Health",
    "brand": "Optimum Nutrition",
    "image": "https://m.media-amazon.com/images/I/71dKNBdIdCL._AC_SX679_PIbundle-2,TopRight,0,0_SH20_.jpg",
    "stock": 100,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Withings Body+ Smart Wi-Fi Body Composition Scale",
    "description": "High-accuracy smart scale that measures weight, body fat, water percentage, and muscle/bone mass. Syncs automatically with the Withings app via Wi-Fi.",
    "price": 99.95,
    "category": "Health",
    "brand": "Withings",
    "image": "https://m.media-amazon.com/images/I/61jzbR6GHaL._AC_SX679_.jpg",
    "stock": 25,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Waterpik Ultra Professional Water Flosser",
    "description": "The most effective way to floss. Removes up to 99.9% of plaque from treated areas. Features 10 pressure settings and 7 tips for various dental needs.",
    "price": 89,
    "category": "Health",
    "brand": "Waterpik",
    "image": "https://m.media-amazon.com/images/I/714Q49TDXlL._AC_SX679_.jpg",
    "stock": 50,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Zarbee's Kids Elderberry Immune Support Gummies - 42 Count",
    "description": "Immune support supplement for kids aged 2+. Enriched with Vitamins A, C, D3, E, Zinc, and Elderberry extract. Natural berry flavor, gluten and gelatin-free with no artificial flavors.",
    "price": 18.99,
    "category": "Health",
    "brand": "Zarbee's",
    "image": "https://m.media-amazon.com/images/I/81LvrBfvK8L._AC_SX679_.jpg",
    "stock": 200,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Compeed Medium Size Blister Plasters - 12 Count",
    "description": "Advanced hydrocolloid technology for immediate pain relief and fast healing of foot blisters. Acts like a second skin, stays in place for days, and comes in a 100% plastic-free carton pack.",
    "price": 12.5,
    "category": "Health",
    "brand": "Compeed",
    "image": "https://m.media-amazon.com/images/I/51S2S+fOYsL._AC_SX679_.jpg",
    "stock": 500,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Renpho Eyeris 3 - Voice Controlled Eye Massager with Heat",
    "description": "Advanced eye mask with built-in heating pads and oscillating pressure. Features smart voice control, Bluetooth music connectivity, and a foldable design. Ideal for reducing eye strain and migraine relief.",
    "price": 69.99,
    "category": "Health",
    "brand": "Renpho",
    "image": "https://m.media-amazon.com/images/I/61UtbsrFV5L._AC_SX679_.jpg",
    "stock": 45,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Therabody Theragun Mini (2nd Gen) Massage Gun - Gray",
    "description": "Ultra-portable and powerful handheld massage therapy device. The 2nd Gen Mini is 20% smaller and 30% lighter than the original, featuring 3 speeds and an ergonomic triangle design for relief anytime, anywhere. Includes 1 standard ball attachment.",
    "price": 199,
    "category": "Wellness",
    "brand": "Therabody",
    "image": "https://m.media-amazon.com/images/I/61mu05jpesL._AC_SX679_.jpg",
    "stock": 20,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Rituals The Ritual of Sakura Body Scrub - 250g (8.8 oz)",
    "description": "A luxury cream-based body scrub formulated with 91% natural origin ingredients. Combines a sugar base with cherry blossom and nourishing rice milk to gently exfoliate and soften the skin.",
    "price": 18.5,
    "category": "Wellness",
    "brand": "Rituals",
    "image": "https://m.media-amazon.com/images/I/71CTM2U6MRL._SX679_.jpg",
    "stock": 45,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Neom Wellbeing Pod Mini+ Essential Oil Diffuser - White",
    "description": "Waterless and wireless portable diffuser designed for car, office, or home use. Features a sleek white design and delivers up to 125 hours of natural fragrance per charge. Versatile and easy to use on the go.",
    "price": 60,
    "category": "Wellness",
    "brand": "Neom",
    "image": "https://m.media-amazon.com/images/I/510w-rzeBqL._AC_SX679_.jpg",
    "stock": 15,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Gaiam Yoga Mat - Premium 6mm Print Reversible Extra Thick",
    "description": "Extra-thick 6mm yoga mat for superior cushioning and joint support. Features a non-slip surface and a reversible print design. Lightweight and durable, perfect for all types of yoga, Pilates, and floor workouts. Dimensions: 68\" x 24\".",
    "price": 34.99,
    "category": "Wellness",
    "brand": "Gaiam",
    "image": "https://m.media-amazon.com/images/I/71uK2-jlAWL._AC_SX679_.jpg",
    "stock": 80,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Pranamat ECO Therapeutic Massage Mat and Pillow Set - Obsidian",
    "description": "Premium acupressure therapy set including a large mat and a matching pillow. Handcrafted in Europe with sustainable and natural materials like coconut fiber, linen, and cotton. Features signature lotus-shaped stimulators for pain relief and deep relaxation.",
    "price": 245,
    "category": "Wellness",
    "brand": "Pranamat ECO",
    "image": "https://m.media-amazon.com/images/I/812dcaK-A1L._AC_SX679_.jpg",
    "stock": 12,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": true,
    "discountPrice": 210.89
  },
  {
    "title": "Yankee Candle Large Jar - Clean Cotton",
    "description": "The classic large jar candle with up to 150 hours of burn time. Scent of sun-dried cotton combined with green notes and white flowers.",
    "price": 29.9,
    "category": "Wellness",
    "brand": "Yankee Candle",
    "image": "https://m.media-amazon.com/images/I/61BV9JjXxKL._AC_SX679_.jpg",
    "stock": 100,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Muji Ultrasonic Aroma Diffuser",
    "description": "Minimalist Japanese design that uses ultrasonic waves to diffuse a cool, dry fragrant mist. Includes a built-in timer and two-stage brightness LED light.",
    "price": 65,
    "category": "Wellness",
    "brand": "Muji",
    "image": "https://m.media-amazon.com/images/I/413IbvkK87S._AC_SX679_.jpg",
    "stock": 30,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "InnoGear 150ml Handcrafted Ceramic Essential Oil Diffuser",
    "description": "Elegant handcrafted ceramic aromatherapy diffuser with ultrasonic cool mist technology. Features two mist modes, waterless auto-off safety function, and a minimalist white design. Perfect for creating a relaxing atmosphere in any room or office.",
    "price": 35.99,
    "category": "Wellness",
    "brand": "InnoGear",
    "image": "https://m.media-amazon.com/images/I/71eM-PziHkL._AC_SX679_.jpg",
    "stock": 10,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Zen Routine Magnesium Spray + Lotion Set",
    "description": "A complete recovery set for sleep and muscle relief. Includes an unscented magnesium spray and a non-greasy lotion designed to soothe leg cramps and aid recovery. Skin-friendly formula with less itch, made in the USA.",
    "price": 29.99,
    "category": "Wellness",
    "brand": "Zen Routine",
    "image": "https://m.media-amazon.com/images/I/819q1KcoZKL._SX679_.jpg",
    "stock": 55,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Pukka Organic Herbal Tea - Relax - 20 Tea Bags",
    "description": "A deeply soothing organic herbal blend of chamomile, fennel, and marshmallow root. Naturally caffeine-free and ethically sourced, designed to help you unwind and find a moment of peace.",
    "price": 5.99,
    "category": "Wellness",
    "brand": "Pukka",
    "image": "https://m.media-amazon.com/images/I/61gdvFNv16L._SX679_PIbundle-20,TopRight,0,0_AA679SH20_.jpg",
    "stock": 150,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": true,
    "discountPrice": 3.79
  },
  {
    "title": "Chanel No. 5 The Body Cream - 150g",
    "description": "A rich, velvety body cream infused with the iconic notes of Chanel No. 5. This luxurious formula deeply hydrates and leaves the skin delicately scented with a bouquet of May Rose and Jasmine.",
    "price": 95,
    "category": "Perfume",
    "brand": "Chanel",
    "image": "https://m.media-amazon.com/images/I/51S77oY5osL._SX679_.jpg",
    "stock": 20,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Dior Sauvage Eau de Toilette - 60ml (2.0 oz)",
    "description": "A radically fresh composition, dictated by a name that has the ring of a manifesto. Radiant top notes of Reggio Bergamot meet the powerful woody trail of Ambroxan for a raw and noble finish.",
    "price": 95,
    "category": "Perfume",
    "brand": "Dior",
    "image": "https://m.media-amazon.com/images/I/61vLQdVYd5L._SX679_.jpg",
    "stock": 45,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Yves Saint Laurent Libre Eau de Parfum - Mini Splash 7.5ml (0.25 oz)",
    "description": "A grand floral fragrance for women with the burning sensuality of orange blossom from Morocco, twisted with the aromatic boldness of lavender from France. Perfect travel-size mini bottle.",
    "price": 28,
    "category": "Perfume",
    "brand": "YSL",
    "image": "https://m.media-amazon.com/images/I/71QXUpWwJZL._SX679_.jpg",
    "stock": 30,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": true,
    "discountPrice": 19.24
  },
  {
    "title": "Giorgio Armani Acqua di Giò Eau de Toilette Spray - 100ml (3.3 oz)",
    "description": "A mythic, fresh, and aquatic fragrance for men. Inspired by the sea and the sun, it combines notes of bergamot, neroli, and green tangerine with marine accents for a timeless and sophisticated scent profile.",
    "price": 105,
    "category": "Perfume",
    "brand": "Giorgio Armani",
    "image": "https://m.media-amazon.com/images/I/61KN8Frq8XL._SX679_.jpg",
    "stock": 50,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": true,
    "discountPrice": 77.42
  },
  {
    "title": "Marc Jacobs Daisy Eau de Toilette - 50ml",
    "description": "Charming and simple with a vintage edge. A sparkling floral scent with notes of wild berries, white violet, and jasmine. Housed in the iconic daisy-capped bottle.",
    "price": 88,
    "category": "Perfume",
    "brand": "Marc Jacobs",
    "image": "https://m.media-amazon.com/images/I/610X-IK9qkL._SX679_.jpg",
    "stock": 40,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Viktor&Rolf Flowerbomb Eau de Parfum - 50ml",
    "description": "An explosive floral bouquet. Features addictive notes of Cattleya orchid, freesia, Centifolia rose, and patchouli for a long-lasting, ultra-feminine trail.",
    "price": 110,
    "category": "Perfume",
    "brand": "Viktor&Rolf",
    "image": "https://m.media-amazon.com/images/I/61ZR3eNks5L._SX522_.jpg",
    "stock": 25,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Armaf Voyage Bleu Eau de Parfum Spray - 100ml (3.4 oz)",
    "description": "A fresh and intense aromatic-woody fragrance for men. Featuring a vibrant blend of lemon, grapefruit, and pink pepper with a core of ginger and mint, finished with a powerful trail of cedar and sandalwood.",
    "price": 35,
    "category": "Perfume",
    "brand": "Armaf",
    "image": "https://m.media-amazon.com/images/I/811P2vGAfDL._SX679_.jpg",
    "stock": 35,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": true,
    "discountPrice": 22.3
  },
  {
    "title": "Ralph Lauren Polo Blue Eau de Parfum - 75ml",
    "description": "A refined and intense aquatic fragrance for men. This fresh cologne blends radiant citrus and bergamot with the power of vetiver, delivering a sophisticated medium-intensity trail.",
    "price": 98,
    "category": "Perfume",
    "brand": "Ralph Lauren",
    "image": "https://m.media-amazon.com/images/I/61XdcKpNjBL._SX522_.jpg",
    "stock": 30,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Tom Ford Jasmin Rouge Eau de Parfum - 50ml (1.7 oz)",
    "description": "A bold, spice-infused floral fragrance. Featuring the rare and precious jasmine sambac absolute, it blends dusk-rich spices like cardamom and cinnamon with dark, leathery notes for a provocative and sophisticated trail.",
    "price": 295,
    "category": "Perfume",
    "brand": "Tom Ford",
    "image": "https://m.media-amazon.com/images/I/71-4oMMBSrL._SX679_.jpg",
    "stock": 15,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Paco Rabanne 1 Million Eau de Toilette - 100ml",
    "description": "The scent of success. A high-impact fragrance with notes of frosted grapefruit, blood mandarin, and peppermint, balanced by rose absolute and cinnamon.",
    "price": 98,
    "category": "Perfume",
    "brand": "Paco Rabanne",
    "image": "https://m.media-amazon.com/images/I/51UifmmTtVL._SX679_.jpg",
    "stock": 55,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Bowflex SelectTech 552 Adjustable Dumbbells",
    "description": "Replace 15 sets of weights with one pair of adjustable dumbbells. Weight adjusts from 5 to 52.5 lbs with a simple turn of a dial. Space-saving and versatile for any home workout.",
    "price": 429,
    "category": "Fitness",
    "brand": "Bowflex",
    "image": "https://m.media-amazon.com/images/I/71V3y5K2QRL._AC_SX679_.jpg",
    "stock": 15,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Garmin Forerunner 255 Music GPS Smartwatch",
    "description": "Advanced running and triathlon smartwatch with built-in music storage. Features multi-band GPS, training readiness scores, and daily suggested workouts to help you reach your peak performance.",
    "price": 349.99,
    "category": "Fitness",
    "brand": "Garmin",
    "image": "https://m.media-amazon.com/images/I/71oE4xAvSUL._AC_SX679_.jpg",
    "stock": 25,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "TRX All-in-One Suspension Training System",
    "description": "The original bodyweight resistance trainer. Includes suspension trainer, indoor/outdoor anchors, and a 35-page workout guide. Portable and sets up in seconds for a full-body workout anywhere.",
    "price": 199.95,
    "category": "Fitness",
    "brand": "TRX",
    "image": "https://m.media-amazon.com/images/I/81cEHK-vWoL._AC_SX679_.jpg",
    "stock": 30,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Under Armour Men's Tech 2.0 Short-Sleeve T-Shirt",
    "description": "Quick-drying, ultra-soft training shirt with a more natural feel. Moisture Transport System wicks sweat and dries fast, while anti-odor technology prevents the growth of odor-causing microbes.",
    "price": 25,
    "category": "Fitness",
    "brand": "Under Armour",
    "image": "https://m.media-amazon.com/images/I/512VmkNdLnL._AC_SX679_.jpg",
    "stock": 100,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Power Guidance Battle Ropes - 3.8 cm Diameter",
    "description": "Heavy-duty 100% Dacron exercise ropes for strength and cardio training. Features 3-strand twisted design with heat-shrink handles for better grip and durability during intense workouts.",
    "price": 85,
    "category": "Fitness",
    "brand": "Power Guidance",
    "image": "https://m.media-amazon.com/images/I/71wuXkDDK3L._AC_SX679_.jpg",
    "stock": 20,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": true,
    "discountPrice": 75.06
  },
  {
    "title": "Amazon Basics High-Density Round Foam Roller",
    "description": "Ideal for balance, strengthening, flexibility, and rehab exercises. Made of molded polypropylene to maintain firmness. Lightweight and easy to clean for daily post-workout recovery.",
    "price": 18.5,
    "category": "Fitness",
    "brand": "Amazon Basics",
    "image": "https://m.media-amazon.com/images/I/719fCtAm+hL._AC_SX679_.jpg",
    "stock": 150,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": true,
    "discountPrice": 15.31
  },
  {
    "title": "TriggerPoint GRID Foam Roller - 13 Inch",
    "description": "Patented multi-density foam surface delivers firm compression like a sports massage. Trusted by physical therapists and athletes for effective muscle recovery and pain relief.",
    "price": 36.99,
    "category": "Fitness",
    "brand": "TriggerPoint",
    "image": "https://m.media-amazon.com/images/I/71WUESEiowL._AC_SX679_.jpg",
    "stock": 60,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": true,
    "discountPrice": 27.65
  },
  {
    "title": "Withings Body Smart - Accurate Wi-Fi Smart Scale",
    "description": "Advanced smart scale that measures body weight and full body composition, including fat percentage, muscle mass, and water. Features a dedicated Baby Mode and syncs automatically with Apple Health and other fitness apps via Wi-Fi and Bluetooth.",
    "price": 99.95,
    "category": "Fitness",
    "brand": "Withings",
    "image": "https://m.media-amazon.com/images/I/61jzbR6GHaL._AC_SX679_.jpg",
    "stock": 45,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Iron Gym Total Upper Body Workout Bar",
    "description": "Multi-function pull-up bar for doorways. Use it for pull-ups, chin-ups, push-ups, dips, and sit-ups. Heavy-duty steel construction with professional-grade foam grips.",
    "price": 39.99,
    "category": "Fitness",
    "brand": "Iron Gym",
    "image": "https://m.media-amazon.com/images/I/51S48AlbfOS._AC_SX679_.jpg",
    "stock": 55,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Trideer Cork Yoga Blocks - 2 Pack Natural Cork",
    "description": "Set of 2 high-density natural cork yoga blocks with a non-slip surface. Eco-friendly and sustainable accessories designed to deepen stretches and improve alignment. Ideal for yoga, Pilates, and general fitness workouts.",
    "price": 24.99,
    "category": "Fitness",
    "brand": "Trideer",
    "image": "https://m.media-amazon.com/images/I/811MsrbKQcL._AC_SX679_.jpg",
    "stock": 120,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Wilson NCAA Final Four Official Basketball",
    "description": "The official ball of the NCAA Championships. Features a high-quality composite cover for ultimate grip and control, used by top collegiate athletes globally.",
    "price": 39.99,
    "category": "Sports",
    "brand": "Wilson",
    "image": "https://m.media-amazon.com/images/I/91HvbaeBsrL._AC_SX679_.jpg",
    "stock": 45,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Adidas FIFA World Cup 26 Training Soccer Ball",
    "description": "Inspired by the official match ball of the FIFA World Cup 26. Machine-stitched construction and a butyl bladder ensure high durability and air retention for daily practice.",
    "price": 30,
    "category": "Sports",
    "brand": "Adidas",
    "image": "https://m.media-amazon.com/images/I/71BirAZbzXL._AC_SX679_.jpg",
    "stock": 60,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Spalding NBA Street Outdoor Basketball - Size 7",
    "description": "Designed specifically for outdoor play with a durable performance rubber cover. Deep channel design for superior grip and handling on concrete courts.",
    "price": 24.99,
    "category": "Sports",
    "brand": "Spalding",
    "image": "https://m.media-amazon.com/images/I/7187crn3osS._AC_SX679_.jpg",
    "stock": 80,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Wilson NFL Super Grip Official Composite Football",
    "description": "Features a high-tack composite cover for enhanced grip during passes. Engineered with professional patterns to help you throw like the pros.",
    "price": 22.95,
    "category": "Sports",
    "brand": "Wilson",
    "image": "https://m.media-amazon.com/images/I/71eAKnMOEsL._AC_SX679_.jpg",
    "stock": 35,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Molten V5M5000 Flistatec Volleyball",
    "description": "The official game ball of many national teams. FLISTATEC technology provides superior flight stability and ball control for professional indoor play.",
    "price": 75,
    "category": "Sports",
    "brand": "Molten",
    "image": "https://m.media-amazon.com/images/I/71l5pbVLl5L._AC_SX679_.jpg",
    "stock": 20,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Rawlings Official MLB Baseball with Team Logo",
    "description": "Authentic MLB baseball featuring official team logos and branding. Made with a cork and rubber center and a genuine leather cover for professional feel.",
    "price": 15.99,
    "category": "Sports",
    "brand": "Rawlings",
    "image": "https://m.media-amazon.com/images/I/711q-i3UreL._AC_SX679_.jpg",
    "stock": 100,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Babolat Pure Drive Tennis Racquet - Unstrung",
    "description": "One of the most popular and versatile racquets in the world. Designed for power and spin, used by professional players on the ATP and WTA tours.",
    "price": 249,
    "category": "Sports",
    "brand": "Babolat",
    "image": "https://m.media-amazon.com/images/I/81T+w5K33ML._AC_SX679_.jpg",
    "stock": 12,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Franklin Sports NHL Kids Street Hockey Stick Set",
    "description": "Perfect starter set for young players. Includes two 34-inch sticks and an official size low-bounce street hockey ball for driveway or park play.",
    "price": 34.99,
    "category": "Sports",
    "brand": "Franklin Sports",
    "image": "https://m.media-amazon.com/images/I/717WM56yp7L._AC_SX679_.jpg",
    "stock": 25,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": true,
    "discountPrice": 23.56
  },
  {
    "title": "Everlast Pro Style Training Boxing Gloves - 14oz",
    "description": "Premium synthetic leather gloves with superior construction for durability. Features an antimicrobial treatment to fight offensive odors and bacterial growth.",
    "price": 45,
    "category": "Sports",
    "brand": "Everlast",
    "image": "https://m.media-amazon.com/images/I/71FMBVgyVQL._AC_SX679_.jpg",
    "stock": 40,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Wilson NCAA Championship Tennis Balls - 3 Ball Can",
    "description": "The official ball of the NCAA Championships. Designed for consistent performance and durability on all court surfaces.",
    "price": 6.5,
    "category": "Sports",
    "brand": "Wilson",
    "image": "https://m.media-amazon.com/images/I/614BsJVOvbL._AC_SX679_.jpg",
    "stock": 200,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Giro Fixture MIPS Adult Dirt Cycling Helmet",
    "description": "Features the Multi-Directional Impact Protection System (MIPS) for extra safety. Modern design with 18 vents and a removable visor, perfect for mountain biking and trail riding.",
    "price": 69.99,
    "category": "Cycling",
    "brand": "Giro",
    "image": "https://m.media-amazon.com/images/I/71MS1xMVP3L._AC_SX679_.jpg",
    "stock": 25,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Garmin Edge 530 GPS Cycling Computer",
    "description": "Performance GPS cycling computer with mapping and monitoring. Features dynamic performance tracking and insights like VO2 max, recovery, and training load focus.",
    "price": 299,
    "category": "Cycling",
    "brand": "Garmin",
    "image": "https://m.media-amazon.com/images/I/51KOfnMru+L._AC_SX679_.jpg",
    "stock": 15,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Shimano PD-M520 SPD Pedals - Black",
    "description": "The classic reliable SPD pedal. Open binding mechanism is designed to better shed mud, with adjustable entry and release tension settings for all levels of riders.",
    "price": 45,
    "category": "Cycling",
    "brand": "Shimano",
    "image": "https://m.media-amazon.com/images/I/61i2Ih3sAJL._AC_SX679_.jpg",
    "stock": 40,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "RockBros Bike Phone Front Frame Bag",
    "description": "Waterproof tube bag with a high-sensitivity TPU touch screen for smartphones up to 6.5 inches. Features a sun visor and large capacity for keys, tools, and wallet.",
    "price": 22.99,
    "category": "Cycling",
    "brand": "RockBros",
    "image": "https://m.media-amazon.com/images/I/810C4N-j-7L._AC_SX679_.jpg",
    "stock": 60,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Schwinn High Timber Mountain Bike - 26-Inch Wheels",
    "description": "Durable mountain bike with a steel frame and front suspension fork. 21-speed twist shifters and linear pull brakes provide smooth gear changes and reliable stopping power.",
    "price": 349,
    "category": "Cycling",
    "brand": "Schwinn",
    "image": "https://m.media-amazon.com/images/I/81a2KiCWpSL._AC_SX679_.jpg",
    "stock": 10,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Kryptonite Evolution Mini-7 Bike U-Lock with Cable",
    "description": "High-security 13mm hardened performance steel shackle. Includes a 4-foot KryptoFlex double loop cable for securing front wheels or accessories.",
    "price": 85,
    "category": "Cycling",
    "brand": "Kryptonite",
    "image": "https://m.media-amazon.com/images/I/81jSvDSkR-L._AC_SX679_.jpg",
    "stock": 35,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Wahoo Fitness KICKR CORE Smart Indoor Bike Trainer",
    "description": "Realistic indoor training experience with essential smart features. Compatible with apps like Zwift and Wahoo SYSTM for controlled resistance and power measurement.",
    "price": 599,
    "category": "Cycling",
    "brand": "Wahoo Fitness",
    "image": "https://m.media-amazon.com/images/I/51LVUzR-SZL._AC_SX679_.jpg",
    "stock": 8,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Vibrelli Bike Floor Pump with Gauge",
    "description": "High-pressure floor pump with a rapid T-valve that fits Presta and Schrader valves without swapping parts. Includes a built-in pressure gauge and glueless puncture kit.",
    "price": 38,
    "category": "Cycling",
    "brand": "Vibrelli",
    "image": "https://m.media-amazon.com/images/I/612A4MoWshL._AC_SX679_.jpg",
    "stock": 50,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Castelli Men's Entrata V Bib Shorts",
    "description": "Premium performance cycling bib shorts. Features ProDry matte Lycra for compression and moisture management, with a KISS Air2 seat pad for all-day comfort.",
    "price": 110,
    "category": "Cycling",
    "brand": "Castelli",
    "image": "https://m.media-amazon.com/images/I/61zHFsu4XVL._AC_SX679_.jpg",
    "stock": 20,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "CamelBak M.U.L.E. Hydration Pack - 100 oz",
    "description": "Classic hydration pack for mountain biking. Includes a 3L Crux reservoir with a Magnetic Tube Trap and enough storage space for tools and snacks.",
    "price": 115,
    "category": "Cycling",
    "brand": "CamelBak",
    "image": "https://m.media-amazon.com/images/I/91V-4WARQYL._AC_SY879_.jpg",
    "stock": 30,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Coleman Sundome Camping Tent - 4 Person",
    "description": "Classic dome tent with WeatherTec system to keep you dry. Features large windows and a ground vent for superior ventilation and easy 10-minute setup.",
    "price": 89.99,
    "category": "Camping",
    "brand": "Coleman",
    "image": "https://m.media-amazon.com/images/I/61c+ADIk38L._AC_SX679_.jpg",
    "stock": 20,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": true,
    "discountPrice": 73.31
  },
  {
    "title": "Coleman Tabletop 2-in-1 Camping Grill/Stove",
    "description": "Versatile 2-burner propane stove and grill with 20,000 BTUs of cooking power. Features adjustable burners for precise temperature control and a compact tabletop design, perfect for camping, tailgating, and outdoor cooking.",
    "price": 119.99,
    "category": "Camping",
    "brand": "Coleman",
    "image": "https://m.media-amazon.com/images/I/71kD+P-UR5L._AC_SX679_.jpg",
    "stock": 35,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Petzl TIKKA Core Rechargeable Headlamp - 450 Lumens",
    "description": "Compact and easy-to-use headlamp with a rechargeable battery. Features a wide, uniform beam for comfortable proximity vision and three lighting levels.",
    "price": 54.95,
    "category": "Camping",
    "brand": "Petzl",
    "image": "https://m.media-amazon.com/images/I/71sDmxdaMIL._AC_SX679_.jpg",
    "stock": 50,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "LifeStraw Personal Water Filter",
    "description": "Award-winning portable water filter that removes 99.99% of bacteria and parasites. Essential for emergency kits, hiking, and camping in the wilderness.",
    "price": 19.95,
    "category": "Camping",
    "brand": "LifeStraw",
    "image": "https://m.media-amazon.com/images/I/610MT9qiRyL._AC_SX679_.jpg",
    "stock": 150,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Marmot Trestles Elite Eco 20 Sleeping Bag",
    "description": "Sustainable and lightweight synthetic sleeping bag. Rated for temperatures down to -7°C, featuring HL-ElixR Eco recycled insulation for maximum warmth.",
    "price": 165,
    "category": "Camping",
    "brand": "Marmot",
    "image": "https://m.media-amazon.com/images/I/61zBS5SCOiL._AC_SX679_.jpg",
    "stock": 15,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "ThermaRest Z Lite Sol Foam Camping Mattress",
    "description": "The lightest and most compact closed-cell foam pad. Features a heat-reflective surface and accordion-style folding design for quick setup and durability.",
    "price": 49,
    "category": "Camping",
    "brand": "ThermaRest",
    "image": "https://m.media-amazon.com/images/I/61qF3RANpwS._AC_SX679_.jpg",
    "stock": 60,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Stanley Classic Legendary Vacuum Insulated Flask - 1.0L",
    "description": "The iconic green bottle. Keeps drinks hot or cold for 24 hours. Made with 18/8 stainless steel, BPA-free, and leak-proof for tough outdoor adventures.",
    "price": 42,
    "category": "Camping",
    "brand": "Stanley",
    "image": "https://m.media-amazon.com/images/I/51N2qVDsS8L._AC_SX679_.jpg",
    "stock": 80,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Helinox Chair One Lightweight Portable Camping Chair",
    "description": "Original award-winning portable chair. Weighs only 960g but can hold up to 145kg. Compact enough to fit in a backpack, sets up in seconds.",
    "price": 109.95,
    "category": "Camping",
    "brand": "Helinox",
    "image": "https://m.media-amazon.com/images/I/911yAmr5P3L._AC_SX679_.jpg",
    "stock": 25,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Osprey Atmos AG 65 Men's Backpacking Rucksack",
    "description": "Features Anti-Gravity suspension for incredible comfort. Includes integrated raincover, adjustable harness, and multiple compartments for long treks.",
    "price": 280,
    "category": "Camping",
    "brand": "Osprey",
    "image": "https://m.media-amazon.com/images/I/81WwGBFnsTL._AC_SY879_.jpg",
    "stock": 12,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Victorinox Swiss Army Huntsman Pocket Knife",
    "description": "The classic 15-function multi-tool. Includes scissors, wood saw, corkscrew, and blades. Perfect for carving wood, opening cans, or everyday tasks.",
    "price": 48,
    "category": "Camping",
    "brand": "Victorinox",
    "image": "https://m.media-amazon.com/images/I/719Jeu7PkuL._AC_SX679_.jpg",
    "stock": 100,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Penn Pursuit IV Spinning Reel and Fishing Rod Combo",
    "description": "Features a durable graphite composite blank and a Pursuit IV spinning reel with HT-100 carbon fiber drag washers. Perfect for saltwater and freshwater angling.",
    "price": 99.99,
    "category": "Fishing",
    "brand": "Penn",
    "image": "https://m.media-amazon.com/images/I/71F-Rq1BXvL._AC_SX679_.jpg",
    "stock": 15,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Shimano Stradic FL Spinning Fishing Reel",
    "description": "Engineered with Hagane Gear and MicroModule II technology for ultra-smooth rotation. A versatile high-performance reel built to last in any conditions.",
    "price": 199,
    "category": "Fishing",
    "brand": "Shimano",
    "image": "https://m.media-amazon.com/images/I/61aANppnZaL._AC_SX679_.jpg",
    "stock": 20,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Abu Garcia Black Max Low Profile Baitcast Reel",
    "description": "Compact and ergonomic design with a MagTrax brake system for consistent pressure. Features 4 stainless steel ball bearings for smooth operation.",
    "price": 54.95,
    "category": "Fishing",
    "brand": "Abu Garcia",
    "image": "https://m.media-amazon.com/images/I/61eYsG20KxL._AC_SX679_.jpg",
    "stock": 30,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Rapala Original Floater Fishing Lure - Silver",
    "description": "The world's most versatile lure. Hand-tuned and tank-tested Balsa wood construction with a wounded-minnow action that triggers bites from any predatory fish.",
    "price": 12.5,
    "category": "Fishing",
    "brand": "Rapala",
    "image": "https://m.media-amazon.com/images/I/51hnUN5MIHL._AC_SX679_.jpg",
    "stock": 100,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Plano Guide Series Tackle Bag with Utility Boxes",
    "description": "Features a magnetic Dropzone top and multiple exterior pockets. Includes 5 StowAway utility boxes to keep all your lures and tools organized on the water.",
    "price": 79,
    "category": "Fishing",
    "brand": "Plano",
    "image": "https://m.media-amazon.com/images/I/91+49mbKYZL._AC_SX679_.jpg",
    "stock": 25,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Garmin Striker Vivid 4cv Fishfinder with GT20-TM Transducer",
    "description": "Easy-to-use 4-inch color fishfinder with high-sensitivity GPS. Features 7 new vivid color palettes to see fish and structure in maximum contrast.",
    "price": 179.99,
    "category": "Fishing",
    "brand": "Garmin",
    "image": "https://m.media-amazon.com/images/I/61mHI6PXA9L._AC_SY879_.jpg",
    "stock": 12,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "KastKing SuperPower Braided Fishing Line - 300 Yards",
    "description": "High-performance braided line with zero stretch and high abrasion resistance. Features a smaller diameter compared to other brands, allowing more line on the spool.",
    "price": 18.99,
    "category": "Fishing",
    "brand": "KastKing",
    "image": "https://m.media-amazon.com/images/I/81SWLMsvXoL._AC_SX679_.jpg",
    "stock": 80,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Ugly Stik 6’6” GX2 Three Piece Spinning Rod",
    "description": "Durable 3-piece travel spinning rod with a 6-15lb line rating and medium power. Features moderate fast action and the signature Clear Tip design for strength and sensitivity. Ideal for lures from 1/8 to 5/8 oz.",
    "price": 54.95,
    "category": "Fishing",
    "brand": "Ugly Stik",
    "image": "https://m.media-amazon.com/images/I/612VS46U8zL._AC_SX679_.jpg",
    "stock": 45,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Berkley PowerBait Power Worms - 7 Inch (Pack of 15)",
    "description": "Infused with the exclusive PowerBait scent and flavor that fish love. Features a rib design for increased surface area and scent dispersion.",
    "price": 7.5,
    "category": "Fishing",
    "brand": "Berkley",
    "image": "https://m.media-amazon.com/images/I/51YnZUTbt-L._AC_SX679_.jpg",
    "stock": 150,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Gerber Gear Magniplier Saltwater Fishing Pliers",
    "description": "Ergonomic pliers designed for saltwater environments. Features exchangeable carbide cutters and a finger spit to keep hands away from sharp hooks.",
    "price": 85,
    "category": "Fishing",
    "brand": "Gerber",
    "image": "https://m.media-amazon.com/images/I/71ggpOiG7LL._AC_SX679_.jpg",
    "stock": 40,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "LEGO Icons Bouquet of Roses - 10328 Botanicals Collection",
    "description": "A stunning artificial flower building set for adults. This 822-piece kit features a dozen red roses (4 in full bloom, 4 blooming, and 4 in bud) with long green stems and 4 sprigs of baby's breath. Perfect for home or office decor.",
    "price": 59.99,
    "category": "Toys",
    "brand": "LEGO",
    "image": "https://m.media-amazon.com/images/I/81Mk8jaaulL._AC_SX679_.jpg",
    "stock": 45,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Barbie Dreamhouse 2023 - Pool Party Doll House with 75+ Pieces",
    "description": "The ultimate 3-story Barbie dollhouse featuring a 360-degree play area and the tallest slide yet. Includes a pool, pet elevator, puppy play areas, and over 75 storytelling accessories to create the perfect dream home.",
    "price": 179.99,
    "category": "Toys",
    "brand": "Barbie",
    "image": "https://m.media-amazon.com/images/I/81Nxmhx+pIL._AC_SX679_.jpg",
    "stock": 15,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Hot Wheels 50-Car Pack Set",
    "description": "A massive collection of 1:64 scale die-cast vehicles. Features a variety of styles from sports cars to race cars, each individually packaged.",
    "price": 55,
    "category": "Toys",
    "brand": "Hot Wheels",
    "image": "https://m.media-amazon.com/images/I/815bmyn074L._AC_SX679_.jpg",
    "stock": 30,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Nerf Elite 2.0 Commander RD-6 Blaster",
    "description": "Customize your strategy with 3 tactical rails and barrel and stock attachment points. Includes a rotating drum that holds 6 darts for rapid firing.",
    "price": 14.99,
    "category": "Toys",
    "brand": "Hasbro",
    "image": "https://m.media-amazon.com/images/I/81ikyJypjOL._AC_SX679_.jpg",
    "stock": 100,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Fisher-Price Laugh & Learn Smart Stages Puppy",
    "description": "Soft, cuddly musical plush toy with 75+ songs, sounds, and phrases. Smart Stages technology changes the learning content as your baby grows.",
    "price": 19.99,
    "category": "Toys",
    "brand": "Fisher-Price",
    "image": "https://m.media-amazon.com/images/I/71bFEIN-euL._AC_SY879_.jpg",
    "stock": 60,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Play-Doh Kitchen Creations Magical Mixer Playset",
    "description": "Create amazing pretend cupcakes and cookies with the toy mixer. Includes 5 cans of non-toxic modeling compound and various kitchen tools.",
    "price": 16.95,
    "category": "Toys",
    "brand": "Play-Doh",
    "image": "https://m.media-amazon.com/images/I/81JnmD1QV2L._AC_SX679_.jpg",
    "stock": 80,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "VTech KidiZoom Duo DX Digital Camera - Blue",
    "description": "Real 5MP digital camera for kids with dual lenses for selfies. Includes games, photo effects, and a built-in MP3 player with headphones.",
    "price": 64,
    "category": "Toys",
    "brand": "VTech",
    "image": "https://m.media-amazon.com/images/I/71pob75Ym7L._AC_SX679_.jpg",
    "stock": 25,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": true,
    "discountPrice": 42.28
  },
  {
    "title": "Crayola Inspiration Art Case - 140 Pieces",
    "description": "Portable all-in-one art studio in a durable carrying case. Includes 64 crayons, 20 short colored pencils, 40 washable markers, and 15 large sheets of paper.",
    "price": 29.99,
    "category": "Toys",
    "brand": "Crayola",
    "image": "https://m.media-amazon.com/images/I/81uy6PM0NvL._AC_SX679_.jpg",
    "stock": 50,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Squishmallows 12-Inch Plush - Wendy the Frog",
    "description": "Authentic Squishmallows plush made with super soft, marshmallow-like material. Wendy is a fan-favorite frog with a green body and white belly.",
    "price": 24.99,
    "category": "Toys",
    "brand": "Squishmallows",
    "image": "https://m.media-amazon.com/images/I/81U+RSxQ3xL._AC_SX679_.jpg",
    "stock": 40,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Hasbro Gaming Monopoly Classic Board Game",
    "description": "The classic property trading game. Buy, sell, and scheme your way to riches. Includes 8 tokens, houses, hotels, and the iconic game board.",
    "price": 21,
    "category": "Toys",
    "brand": "Hasbro",
    "image": "https://m.media-amazon.com/images/I/816dE7TY9xL._AC_SX679_.jpg",
    "stock": 120,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Philips Avent Natural Response Baby Bottle Set",
    "description": "Set of 3 glass baby bottles (260ml) designed to mimic the breast. Features a unique nipple tip that only releases milk when the baby actively drinks, helping combine breast and bottle feeding.",
    "price": 34.99,
    "category": "Baby",
    "brand": "Philips Avent",
    "image": "https://m.media-amazon.com/images/I/71d89DAUSGL._SX679_.jpg",
    "stock": 80,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Ergobaby Omni 360 All-in-One Baby Carrier",
    "description": "Versatile carrier that grows with your baby from newborn to toddler (3.2 to 20kg). Offers all carry positions: front facing in, front facing out, hip, and back. Includes lumbar support and padded straps.",
    "price": 179,
    "category": "Baby",
    "brand": "Ergobaby",
    "image": "https://m.media-amazon.com/images/I/71G7Rg3mq1L._SX679_.jpg",
    "stock": 25,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Chicco Alfa Lite Lightweight Travel Playard - Midnight",
    "description": "Ultra-lightweight portable playpen weighing only 13 lbs. Features a quick snap-open and compact fold design, making it a baby travel essential. Includes a padded mattress and a zip-off, machine-washable fabric for easy cleaning.",
    "price": 149.99,
    "category": "Baby",
    "brand": "Chicco",
    "image": "https://m.media-amazon.com/images/I/91PeqR-TqTL._SX679_.jpg",
    "stock": 15,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Babybjörn Bouncer Bliss - Cotton Petal Quilt",
    "description": "Ergonomic bouncer with natural rocking—no batteries required. Provides proper support for the baby's head and back while they develop balance and motor skills. Folds flat for easy storage.",
    "price": 195,
    "category": "Baby",
    "brand": "Babybjörn",
    "image": "https://m.media-amazon.com/images/I/71NV2tAVOiL._SY879_.jpg",
    "stock": 20,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Fisher-Price Deluxe Kick 'n Play Piano Gym",
    "description": "Large, colorful play mat with 5 light-up piano keys and a repositionable toy arch. Features 4 ways to play: lay & play, tummy time, sit & play, and take-along. 65+ songs and sounds.",
    "price": 49.99,
    "category": "Baby",
    "brand": "Fisher-Price",
    "image": "https://m.media-amazon.com/images/I/814fLZPh+-L._SX679_.jpg",
    "stock": 45,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Pampers Pure Protection Baby Diapers - Size 1 (132 Count)",
    "description": "Premium plant-based skin protection that is 100% leakproof and hypoallergenic. Made without chlorine bleaching, fragrance, or parabens. Features soft, breathable materials that are gentle on baby's sensitive skin (Size 1, 8-14 lbs).",
    "price": 52.99,
    "category": "Baby",
    "brand": "Pampers",
    "image": "https://m.media-amazon.com/images/I/81QG8HaqIDL._AC_SX679_PIbundle-132,TopRight,0,0_SH20_.jpg",
    "stock": 200,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Braun ThermoScan 7 Digital Ear Thermometer",
    "description": "The most used and recommended thermometer by doctors. Features Age Precision technology for age-adjustable fever guidance and a pre-warmed tip for professional accuracy.",
    "price": 55,
    "category": "Baby",
    "brand": "Braun",
    "image": "https://m.media-amazon.com/images/I/61ZRqs7jQ2L._AC_SX679_.jpg",
    "stock": 60,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Hape Pound and Tap Bench with Slide Out Xylophone",
    "description": "Award-winning classic wooden toy. Babies can pound the balls to hear them fall on the xylophone, or pull it out to play solo. Promotes fine motor skills and musical development.",
    "price": 29.99,
    "category": "Baby",
    "brand": "Hape",
    "image": "https://m.media-amazon.com/images/I/51t02jFtN-L._AC_SX679_.jpg",
    "stock": 50,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": true,
    "discountPrice": 24.14
  },
  {
    "title": "Nanit Pro Smart Baby Monitor & Floor Stand",
    "description": "High-definition camera that tracks sleep, breathing, and growth. Features 1080p video, two-way audio, and real-time alerts. Includes a secure floor stand for a bird's-eye view of the crib.",
    "price": 299,
    "category": "Baby",
    "brand": "Nanit",
    "image": "https://m.media-amazon.com/images/I/61cqkZ6CHoL._AC_SX679_.jpg",
    "stock": 12,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Ubbi Steel Diaper Pail - White",
    "description": "Award-winning diaper disposal bin made of powder-coated steel for maximum odor control. Unlike plastic, steel is non-porous and keeps smells locked inside. Features rubber seals and a sliding lid. No special bags required—works with any standard trash bag.",
    "price": 79.99,
    "category": "Baby",
    "brand": "Ubbi",
    "image": "https://m.media-amazon.com/images/I/51cx2jSgmQL._SX522_.jpg",
    "stock": 70,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Funko Pop! Star Wars: Darth Vader (Classic)",
    "description": "Vinyl figure of the legendary Sith Lord in his iconic pose. A must-have for Star Wars fans and Pop! collectors alike. Approximately 4 inches tall.",
    "price": 15,
    "category": "Collectibles",
    "brand": "Funko",
    "image": "https://m.media-amazon.com/images/I/61s6vlqz-LL._AC_SX679_.jpg",
    "stock": 50,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Pokémon TCG: Scarlet & Violet—151 Elite Trainer Box",
    "description": "Celebrate the original 151 Pokémon with this premium collector's box. Includes 9 booster packs, 1 full-art foil promo card featuring Snorlax, and various game accessories.",
    "price": 54.99,
    "category": "Collectibles",
    "brand": "Pokémon",
    "image": "https://m.media-amazon.com/images/I/61pqVeDg2gL._AC_SX679_.jpg",
    "stock": 20,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Hot Wheels Premium Car Culture: Modern Classics Set",
    "description": "Highly detailed 1:64 scale die-cast cars with Real Riders tires and metal bodies. This set features iconic performance cars from the 80s and 90s.",
    "price": 35,
    "category": "Collectibles",
    "brand": "Hot Wheels",
    "image": "https://m.media-amazon.com/images/I/61ATkGH-VFL._AC_SX679_.jpg",
    "stock": 15,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": true,
    "discountPrice": 21.51
  },
  {
    "title": "2026 Panini FIFA World Cup Sticker Starter Bundle",
    "description": "Get ready for the world's biggest tournament with the official Panini starter bundle. Includes the 2026 FIFA World Cup official sticker album and 5 sticker packs (25 stickers total) to kickstart your collection of the world's top football stars.",
    "price": 14.99,
    "category": "Collectibles",
    "brand": "Panini",
    "image": "https://m.media-amazon.com/images/I/71g6NEd+2QL._AC_SY879_.jpg",
    "stock": 100,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "LEGO Star Wars Millennium Falcon - 75257",
    "description": "The most famous starship in the galaxy. Features rotating top and bottom laser turrets, 2 spring-loaded shooters, and 7 iconic characters including Chewbacca and Lando.",
    "price": 169.99,
    "category": "Collectibles",
    "brand": "LEGO",
    "image": "https://m.media-amazon.com/images/I/81PhO-kyPuL._AC_SX679_.jpg",
    "stock": 10,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "NECA Back to the Future: Marty McFly 7-Inch Scale Action Figure",
    "description": "Officially licensed Marty McFly figure based on the 1985 classic. Includes his camcorder, backpack, and skateboard with highly detailed articulation.",
    "price": 34.99,
    "category": "Collectibles",
    "brand": "NECA",
    "image": "https://m.media-amazon.com/images/I/61UnA40sHvL._AC_SX679_.jpg",
    "stock": 25,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": true,
    "discountPrice": 21.86
  },
  {
    "title": "Magic: The Gathering - The Lord of the Rings: Tales of Middle-earth Commander Deck",
    "description": "Ready-to-play 100-card Commander deck featuring iconic characters from Tolkien's Middle-earth. Includes a 2-card Collector Booster Sample Pack, 1 foil-etched Display Commander, and various game accessories like a life tracker and deck box.",
    "price": 55,
    "category": "Collectibles",
    "brand": "Wizards of the Coast",
    "image": "https://m.media-amazon.com/images/I/81T6ayYcpFL._AC_SX679_.jpg",
    "stock": 12,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Tamashii Nations - S.H.Figuarts Super Saiyan God Super Saiyan Son Goku",
    "description": "Highly detailed and articulated action figure from Dragon Ball Super. This 'Blue Power Transcending Limits' edition features premium paint applications, multiple interchangeable hands, and facial expressions to recreate iconic combat poses.",
    "price": 45,
    "category": "Collectibles",
    "brand": "Tamashii Nations",
    "image": "https://m.media-amazon.com/images/I/5130Nzr791L._AC_SX679_.jpg",
    "stock": 30,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Marvel Legends Series Iron Man Mark III - 6-Inch Scale Action Figure",
    "description": "Detailed 6-inch scale collectible action figure of Iron Man Mark III from the original movie. Featuring premium articulation and movie-inspired accessories, including interchangeable hands and blast effects for dynamic posing.",
    "price": 24.99,
    "category": "Collectibles",
    "brand": "Hasbro",
    "image": "https://m.media-amazon.com/images/I/71Oh4APaH2L._AC_SX679_.jpg",
    "stock": 8,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Funko Pop! Star Wars: The Mandalorian - The Child",
    "description": "Adorable collectible vinyl figure of 'The Child' (Grogu) from the hit Disney+ series The Mandalorian. This official Star Wars merchandise features the character in his iconic pose, perfect for fans and collectors of all ages.",
    "price": 15,
    "category": "Collectibles",
    "brand": "Funko",
    "image": "https://m.media-amazon.com/images/I/61MtDk+fPnL._AC_SX679_.jpg",
    "stock": 5,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Harry Potter and the Philosopher's Stone",
    "description": "The first book in J.K. Rowling's legendary series. Follow young Harry as he discovers he is a wizard and begins his first year at Hogwarts School of Witchcraft and Wizardry.",
    "price": 12,
    "category": "Books",
    "brand": "Bloomsbury",
    "image": "https://m.media-amazon.com/images/I/91MvjM66W+L._SY522_.jpg",
    "stock": 50,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Atomic Habits by James Clear",
    "description": "A revolutionary guide to building good habits and breaking bad ones. James Clear reveals practical strategies to transform your life with tiny, everyday changes.",
    "price": 18.5,
    "category": "Books",
    "brand": "Penguin",
    "image": "https://m.media-amazon.com/images/I/81kg51XRc1L._SY522_.jpg",
    "stock": 100,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": true,
    "discountPrice": 13.25
  },
  {
    "title": "The Alchemist by Paulo Coelho",
    "description": "A global phenomenon about a shepherd boy named Santiago who travels to Egypt in search of a treasure buried near the Pyramids. A magical story of self-discovery.",
    "price": 11.99,
    "category": "Books",
    "brand": "HarperCollins",
    "image": "https://m.media-amazon.com/images/I/71+2-t7M35L._SY522_.jpg",
    "stock": 75,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "The Subtle Art of Not Giving a F*ck",
    "description": "A counterintuitive approach to living a good life. Mark Manson tells us to stop trying to be positive all the time so that we can truly become better, happier people.",
    "price": 15,
    "category": "Books",
    "brand": "HarperOne",
    "image": "https://m.media-amazon.com/images/I/61lN3v3o96L._SY425_.jpg",
    "stock": 60,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "It Ends with Us by Colleen Hoover",
    "description": "A heart-wrenching and unforgettable romance novel that follows Lily Bloom as she navigates a complex relationship while dealing with ghosts from her past.",
    "price": 10.99,
    "category": "Books",
    "brand": "Simon & Schuster",
    "image": "https://m.media-amazon.com/images/I/81Dhz2lsmkL._SY522_.jpg",
    "stock": 90,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": true,
    "discountPrice": 7.87
  },
  {
    "title": "The Psychology of Money by Morgan Housel",
    "description": "Doing well with money isn't necessarily about what you know. It's about how you behave. This book explores 19 short stories about the strange ways people think about wealth.",
    "price": 16,
    "category": "Books",
    "brand": "Harriman House",
    "image": "https://m.media-amazon.com/images/I/71oAJY1LbcL._SY522_.jpg",
    "stock": 45,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "The Lord of the Rings: The Fellowship of the Ring",
    "description": "The epic adventure begins in Middle-earth. Frodo Baggins embarks on a perilous quest to destroy the One Ring and defeat the Dark Lord Sauron.",
    "price": 14.5,
    "category": "Books",
    "brand": "HarperCollins",
    "image": "https://m.media-amazon.com/images/I/717NEQr+YfL._SY522_.jpg",
    "stock": 30,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": true,
    "discountPrice": 10.81
  },
  {
    "title": "Think and Grow Rich by Napoleon Hill",
    "description": "One of the most famous success books of all time. Based on 20 years of research, it outlines 13 steps to achieve personal and financial success.",
    "price": 9.99,
    "category": "Books",
    "brand": "Ballantine Books",
    "image": "https://m.media-amazon.com/images/I/61IxJuRI39L._SY522_.jpg",
    "stock": 120,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Lessons in Chemistry by Bonnie Garmus",
    "description": "A witty and inspiring novel set in the 1960s about a female chemist turned cooking show host who challenges the status quo of her era.",
    "price": 17,
    "category": "Books",
    "brand": "Doubleday",
    "image": "https://m.media-amazon.com/images/I/71dQACXhz6L._SY522_.jpg",
    "stock": 25,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "The 48 Laws of Power by Robert Greene",
    "description": "A definitive guide for anyone interested in gaining, observing, or defending against ultimate control. Drawing from three thousand years of history.",
    "price": 21,
    "category": "Books",
    "brand": "Viking",
    "image": "https://m.media-amazon.com/images/I/61UZS3QA1UL._SY522_.jpg",
    "stock": 40,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Cricut Explore 4 - Smart Cutting Machine (Seashell)",
    "description": "The next-generation smart cutting machine in a limited edition Seashell finish. This bundle includes digital access to 30 exclusive images in Design Space. Features 2x faster cutting and compatibility with over 100 materials like vinyl and cardstock.",
    "price": 349,
    "category": "Arts & Crafts",
    "brand": "Cricut",
    "image": "https://m.media-amazon.com/images/I/715G0UNteNL._SX522_.jpg",
    "stock": 15,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Winsor & Newton Cotman Watercolor Paint Set - 24 Half Pans Studio Set",
    "description": "High-quality watercolor set featuring 24 vibrant Cotman half pans. Includes a high-quality brush and a lightweight plastic box with an integrated mixing palette, perfect for both studio and outdoor painting sessions.",
    "price": 38.5,
    "category": "Arts & Crafts",
    "brand": "Winsor & Newton",
    "image": "https://m.media-amazon.com/images/I/71dPeLtLUsL._AC_SX679_.jpg",
    "stock": 40,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": true,
    "discountPrice": 23.64
  },
  {
    "title": "Prismacolor Premier Colored Pencils - 72 Count",
    "description": "Professional artist-grade pencils with soft, thick cores. Perfect for layering, blending, and shading. Features brilliant, lightfast pigments for rich color saturation.",
    "price": 78.5,
    "category": "Arts & Crafts",
    "brand": "Prismacolor",
    "image": "https://m.media-amazon.com/images/I/91zesHQEAAL._AC_SX679_.jpg",
    "stock": 60,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Singer Sterling Edition Heavy Duty 4432 Sewing Machine",
    "description": "Special Sterling Edition with an enhanced accessory kit. Features a powerful motor with increased piercing power, 110 stitch applications, and a full metal frame. Includes a 1-step buttonhole function for professional results on all fabric types.",
    "price": 249.99,
    "category": "Arts & Crafts",
    "brand": "Singer",
    "image": "https://m.media-amazon.com/images/I/61EMtf0QKrL._AC_SX679_.jpg",
    "stock": 20,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Posca Paint Markers - Set of 8 Assorted Colors (PC-5M)",
    "description": "Artist-recommended medium acrylic markers with reversible tips. Water-based paint that is vibrant and opaque on most surfaces, including fabric, metal, glass, wood, and canvas. A versatile set for professional art and DIY projects.",
    "price": 24.99,
    "category": "Arts & Crafts",
    "brand": "Posca",
    "image": "https://m.media-amazon.com/images/I/81UBu585+4L._AC_SX679_.jpg",
    "stock": 120,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Bob Ross Basic Painting Set",
    "description": "The official oil painting kit for the 'Joy of Painting' technique. Includes 5 colors, liquid white, a landscape brush, and a painting knife to create your own happy little trees.",
    "price": 65,
    "category": "Arts & Crafts",
    "brand": "Bob Ross",
    "image": "https://m.media-amazon.com/images/I/81NxtS3EZsL._AC_SX679_.jpg",
    "stock": 30,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Speedball Art Products Screen Printing Starter Kit",
    "description": "Everything you need to start screen printing your own t-shirts and fabrics. Includes a wooden frame, squeegee, fabric inks, and photo emulsion for custom designs.",
    "price": 55,
    "category": "Arts & Crafts",
    "brand": "Speedball",
    "image": "https://m.media-amazon.com/images/I/81bUdMQkUjL._AC_SX679_.jpg",
    "stock": 25,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Dremel 3100-1/15 Variable Speed Rotary Tool Kit",
    "description": "Versatile rotary tool kit with 1 attachment and 15 high-quality Dremel accessories. Features variable speed control for precision in cutting, sanding, grinding, polishing, drilling, and engraving. Ideal for a wide range of crafting and DIY projects.",
    "price": 79,
    "category": "Arts & Crafts",
    "brand": "Dremel",
    "image": "https://m.media-amazon.com/images/I/51vYqdIu+tL._AC_SX679_.jpg",
    "stock": 45,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Staedtler Triplus Fineliner Pens - 36 Color Set",
    "description": "Ergonomic triangular pens for relaxed and easy writing and coloring. Feature Dry Safe ink—can be left uncapped for days without drying up.",
    "price": 29,
    "category": "Arts & Crafts",
    "brand": "Staedtler",
    "image": "https://m.media-amazon.com/images/I/71nn8WaamqL._AC_SX679_.jpg",
    "stock": 100,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Mod Podge Water-Based Sealer, Glue and Finish (16 oz)",
    "description": "The all-in-one decoupage essential. Acts as a glue, sealer, and matte finish for paper, wood, fabric, and other porous surfaces. Non-toxic and easy to clean up.",
    "price": 12.99,
    "category": "Arts & Crafts",
    "brand": "Mod Podge",
    "image": "https://m.media-amazon.com/images/I/61uQygFGhXL._AC_SX679_.jpg",
    "stock": 200,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Logitech MX Master 3S Wireless Performance Mouse",
    "description": "An iconic mouse redesigned for ultimate precision and comfort. Features quiet clicks, an 8000 DPI track-on-glass sensor, and the MagSpeed electromagnetic scroll wheel.",
    "price": 129,
    "category": "Office",
    "brand": "Logitech",
    "image": "https://m.media-amazon.com/images/I/51tJ0JISpeL._AC_SX679_.jpg",
    "stock": 45,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "HP LaserJet Pro M15w Wireless Laser Printer",
    "description": "The world's smallest laser in its class. Designed for efficiency with fast printing speeds and easy mobile printing through the HP Smart app.",
    "price": 149,
    "category": "Office",
    "brand": "HP",
    "image": "https://m.media-amazon.com/images/I/71uMFKhjioL._AC_SX679_.jpg",
    "stock": 20,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Apple Magic Keyboard with Numeric Keypad",
    "description": "Sleek wireless rechargeable keyboard with a stable scissor mechanism beneath each key. Features a full layout with document navigation controls for quick scrolling.",
    "price": 129,
    "category": "Office",
    "brand": "Apple",
    "image": "https://m.media-amazon.com/images/I/71O6wOvwHtL._AC_SX679_.jpg",
    "stock": 30,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Epson EcoTank ET-2810 All-in-One Inkjet Printer",
    "description": "Cartridge-free printing with ultra-high capacity ink tanks. Includes enough ink to print thousands of pages, significantly reducing printing costs.",
    "price": 229.99,
    "category": "Office",
    "brand": "Epson",
    "image": "https://m.media-amazon.com/images/I/71W17ZX8yuL._AC_SX679_.jpg",
    "stock": 15,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Western Digital 2TB My Passport Portable External Hard Drive",
    "description": "Reliable, high-capacity portable storage in a slim design. Features password protection and 256-bit AES hardware encryption to keep your digital life safe.",
    "price": 85,
    "category": "Office",
    "brand": "Western Digital",
    "image": "https://m.media-amazon.com/images/I/510+J06fz0L._AC_SX679_.jpg",
    "stock": 60,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Blue Yeti USB Microphone for Recording & Streaming",
    "description": "The world's #1 USB microphone. Produces clear, powerful, broadcast-quality sound for YouTube, podcasting, Skype, and music. Features four pickup patterns.",
    "price": 139.99,
    "category": "Office",
    "brand": "Blue Microphones",
    "image": "https://m.media-amazon.com/images/I/61KTMvS5JBL._AC_SX679_.jpg",
    "stock": 25,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Post-it Super Sticky Notes - Energy Boost Collection",
    "description": "Pack of 3 pads (3 x 3 in.) with 2x the sticking power of original Post-it Notes. Ideal for students and office use on textbooks, notebooks, walls, and vertical surfaces. Vibrant Energy Boost colors for maximum visibility.",
    "price": 8.99,
    "category": "Office",
    "brand": "3M",
    "image": "https://m.media-amazon.com/images/I/71NV0nnvIlL._AC_SX679_.jpg",
    "stock": 200,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": true,
    "discountPrice": 6.95
  },
  {
    "title": "Logitech C920s HD Pro Webcam",
    "description": "Professional video for streaming and recording at 1080p. Features a privacy shutter, dual mics for stereo sound, and autofocus for sharp, clear video calls.",
    "price": 95,
    "category": "Office",
    "brand": "Logitech",
    "image": "https://m.media-amazon.com/images/I/61-6uAf8soL._AC_SX679_.jpg",
    "stock": 50,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Fellowes Powershred 79Ci 16-Sheet Jam-Proof Paper Shredder",
    "description": "Heavy-duty crosscut shredder for office and home use. Features a 100% Jam-Proof system that eliminates paper jams and powers through tough jobs. Shreds up to 16 sheets per pass and includes SilentShred technology for ultra-quiet performance.",
    "price": 245,
    "category": "Office",
    "brand": "Fellowes",
    "image": "https://m.media-amazon.com/images/I/71yMRDWNIjL._AC_SX679_.jpg",
    "stock": 12,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Leitz TruSens Pet Carbon Replacement Filter for Z-2000",
    "description": "High-performance carbon replacement filter specifically designed for the Leitz TruSens Z-2000 and Z-2500 air purifiers. Engineered to eliminate strong pet odors and capture large airborne particles to keep your office environment fresh.",
    "price": 24.5,
    "category": "Office",
    "brand": "Leitz",
    "image": "https://m.media-amazon.com/images/I/A1sSwyy3g9L._AC_SX679_.jpg",
    "stock": 18,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Parker Jotter Ballpoint Pen - Stainless Steel with Chrome Trim",
    "description": "The classic Parker Jotter with a polished stainless steel barrel and iconic arrow clip. Features smooth-writing blue ink and a medium point, providing a professional and sleek experience for everyday desk essentials.",
    "price": 18,
    "category": "Stationery",
    "brand": "Parker",
    "image": "https://m.media-amazon.com/images/I/71zvXjwBxvL._AC_SX679_.jpg",
    "stock": 50,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Moleskine Classic Notebook, Hard Cover, Large (13 x 21 cm) - Black",
    "description": "The legendary notebook used by artists and thinkers. Features a durable black hard cover, ivory-colored acid-free paper, elastic closure, and expandable inner pocket.",
    "price": 22.9,
    "category": "Stationery",
    "brand": "Moleskine",
    "image": "https://m.media-amazon.com/images/I/71lq6OQzfhL._SY522_.jpg",
    "stock": 100,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Pilot G2 Premium Rolling Ball Gel Pens - Pack of 12",
    "description": "America's #1 selling gel ink pen. Features a comfortable rubber grip and smooth-writing, long-lasting blue ink. Retractable and refillable for everyday use.",
    "price": 14.5,
    "category": "Stationery",
    "brand": "Pilot",
    "image": "https://m.media-amazon.com/images/I/71izsSlJOYL._AC_SX679_.jpg",
    "stock": 150,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": true,
    "discountPrice": 10.12
  },
  {
    "title": "Stabilo Boss Original Highlighters - Set of 15 Pastel Colors",
    "description": "The desk set featuring all 15 subtle pastel shades. Anti-Dry-Out technology allows for up to 4 hours of cap-off time. Perfect for bullet journaling and aesthetic note-taking.",
    "price": 19.99,
    "category": "Stationery",
    "brand": "Stabilo",
    "image": "https://m.media-amazon.com/images/I/7106mm4gx5L._AC_SX679_.jpg",
    "stock": 80,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Faber-Castell Grip 2011 Mechanical Pencil - 0.7mm Silver",
    "description": "Award-winning ergonomic design with a triangular barrel and non-slip grip dots. Features a break-resistant 0.7mm lead and an extra-long twist-out eraser.",
    "price": 12,
    "category": "Stationery",
    "brand": "Faber-Castell",
    "image": "https://m.media-amazon.com/images/I/71AloZjqcZL._AC_SX679_.jpg",
    "stock": 60,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Leuchtturm1917 A5 Medium Softcover Notebook - Emerald",
    "description": "Lightweight and flexible softcover notebook with 123 numbered dotted pages. Features high-quality 80g/m² acid-free paper, a table of contents, two ribbon bookmarks, and an expandable inner pocket. Perfect for bullet journaling and sketching on the go.",
    "price": 19.5,
    "category": "Stationery",
    "brand": "Leuchtturm1917",
    "image": "https://m.media-amazon.com/images/I/71GgHY1TzDL._SY522_.jpg",
    "stock": 45,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Sharpie Permanent Markers, Fine Point - 24 Count Assorted",
    "description": "Proudly permanent on paper, plastic, metal, and most other surfaces. Intensely brilliant colors with quick-drying, fade-resistant, and water-resistant ink.",
    "price": 25.99,
    "category": "Stationery",
    "brand": "Sharpie",
    "image": "https://m.media-amazon.com/images/I/71Wxj12B-AL._AC_SX679_.jpg",
    "stock": 70,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Filofax Personal Organiser - Saffiano Black",
    "description": "Iconic six-ring organiser in a classic cross-grain leather-look finish. Includes a week-on-two-pages diary, ruler/page marker, and assorted notepaper.",
    "price": 45,
    "category": "Stationery",
    "brand": "Filofax",
    "image": "https://m.media-amazon.com/images/I/51xXE63RGdL._AC_SY879_.jpg",
    "stock": 20,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Pentel Arts Aquash Water Brush Pens - Set of 3 Sizes",
    "description": "Portable water brush pens for watercolor and ink. Features a flexible nylon tip and an easy-to-squeeze barrel that gives you full control of water flow.",
    "price": 15.99,
    "category": "Stationery",
    "brand": "Pentel",
    "image": "https://m.media-amazon.com/images/I/81o2NRMBePL._AC_SX679_.jpg",
    "stock": 90,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Uni-ball Eye UB-157 Rollerball Pen 0.7mm - Pack of 10 Assorted Colors",
    "description": "A complete set of 10 assorted colors (one of each). Features high-quality fade-resistant and waterproof Super Ink with a 0.7mm ball for smooth, consistent writing. Visible ink window for easy monitoring.",
    "price": 16.5,
    "category": "Stationery",
    "brand": "Uni-ball",
    "image": "https://m.media-amazon.com/images/I/61RMOhqDtXL._AC_SX679_.jpg",
    "stock": 110,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "DeWalt 20V Max Cordless Drill / Driver Kit",
    "description": "Compact and lightweight design for tight areas. Features a high-performance motor that delivers 300 unit watts out of power ability. Includes two 20V Max batteries and a charger.",
    "price": 159,
    "category": "Tools",
    "brand": "DeWalt",
    "image": "https://m.media-amazon.com/images/I/817WrflosJL._AC_SX679_.jpg",
    "stock": 25,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Bosch Professional 12V System Cordless Screwdriver GSR 12V-15",
    "description": "Extremely short body for optimum handling, especially when performing drilling and screwdriving applications overhead and in tight spaces. Professional quality with 2-speed gearbox.",
    "price": 95,
    "category": "Tools",
    "brand": "Bosch",
    "image": "https://m.media-amazon.com/images/I/51v8Ypf2jlL._AC_SX679_.jpg",
    "stock": 40,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Craftsman 102-Piece Tool Kit for Home and Car",
    "description": "Durable hand tools set (CMMT99449) featuring SAE and metric sockets, screwdrivers, wrenches, hammer, pliers, knife, and hex keys. Includes specialty bits and a tape measure, all stored in a rugged blow-molded case for organization and portability.",
    "price": 99,
    "category": "Tools",
    "brand": "Craftsman",
    "image": "https://m.media-amazon.com/images/I/81wVSAJPsoL._AC_SX679_.jpg",
    "stock": 60,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Black+Decker Dustbuster 20V AdvancedClean Hand Vacuum (BDH2000L)",
    "description": "High-performance cordless hand vacuum with powerful suction. Features an extendable crevice tool for tight spaces, a flip-up brush for dusting and upholstery, and a convenient charging base. Ideal for home and car cleaning.",
    "price": 89.99,
    "category": "Tools",
    "brand": "Black+Decker",
    "image": "https://m.media-amazon.com/images/I/61YAIx081WL._AC_SX679_.jpg",
    "stock": 35,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Makita 18V LXT Lithium-Ion Cordless Impact Driver",
    "description": "Variable speed impact driver with an ergonomically designed handle and rubberized soft grip. Features a built-in LED light for improved visibility in dark workspaces.",
    "price": 125,
    "category": "Tools",
    "brand": "Makita",
    "image": "https://m.media-amazon.com/images/I/51Ik7acEwYL._AC_SX679_.jpg",
    "stock": 20,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Wera Kraftform Micro-Set/12 Sb 1 Screwdriver Set",
    "description": "Professional 12-piece screwdriver set (05073675001) designed for precision electronics and fine mechanical work. Features the ergonomic Kraftform Micro handle for fast twisting and an integrated power zone for high torque transfer.",
    "price": 39.5,
    "category": "Tools",
    "brand": "Wera",
    "image": "https://m.media-amazon.com/images/I/812u3On0K8L._SX522_.jpg",
    "stock": 15,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Knipex Plier Wrench 250mm - Chrome Finish",
    "description": "Adjustable wrench and pliers in one tool. Replaces a whole set of inch and metric wrenches. Smooth jaws for damage-free installation of plated fittings.",
    "price": 58,
    "category": "Tools",
    "brand": "Knipex",
    "image": "https://m.media-amazon.com/images/I/51JgR0K4OLL._AC_SX679_.jpg",
    "stock": 30,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Dremel Lite 7760 N/10 4V Li-Ion Cordless Rotary Tool",
    "description": "Versatile 4V cordless rotary tool with a 10-piece accessory kit. Features variable speed control and USB charging for maximum portability. Lightweight and easy to use, it's perfect for light-duty DIY, crafting, sanding, and engraving.",
    "price": 59.99,
    "category": "Tools",
    "brand": "Dremel",
    "image": "https://m.media-amazon.com/images/I/81W9rVp7roL._AC_SX679_.jpg",
    "stock": 25,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Perilogics Magnetic Tool Sheath for Leatherman",
    "description": "Durable nylon belt pouch with a secure magnetic closure. Compatible with Leatherman Wave Plus, Wingman, Charge, Surge, and Super Tool 300 (4-4.5 in). Designed for heavy-duty use with a reinforced belt clip.",
    "price": 19.99,
    "category": "Tools",
    "brand": "Perilogics",
    "image": "https://m.media-amazon.com/images/I/81DsL18gHwL._AC_SX679_.jpg",
    "stock": 45,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Worx Landroid L 20V Robotic Lawn Mower - WR155 Kit",
    "description": "Advanced robotic mower for large gardens up to 1/2 acre (21,780 sq ft). Includes the 6.0Ah Power Share battery, charger, and the WA0184 boundary wire kit. Features AIA intelligent navigation and smart app control for effortless lawn maintenance.",
    "price": 1299,
    "category": "Tools",
    "brand": "Worx",
    "image": "https://m.media-amazon.com/images/I/51Cq20LxG9L._AC_SX679_.jpg",
    "stock": 10,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Apple Watch Series 10 - Aluminum Case with Sport Band",
    "description": "The most advanced Apple Watch yet, featuring a thinner design and a larger display. Includes powerful health features like ECG, blood oxygen monitoring, and sleep tracking.",
    "price": 399,
    "category": "Wearables",
    "brand": "Apple",
    "image": "https://m.media-amazon.com/images/I/61i3ax+W1sL._AC_SX679_.jpg",
    "stock": 25,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Samsung Galaxy Watch 7 - 44mm Bluetooth",
    "description": "Smartwatch with advanced AI-powered health tracking. Features the new BioActive Sensor for precise heart rate monitoring and personalized fitness insights.",
    "price": 319,
    "category": "Wearables",
    "brand": "Samsung",
    "image": "https://m.media-amazon.com/images/I/71E8iEWXY9L._AC_SX679_.jpg",
    "stock": 30,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Fitbit Charge 6 Fitness Tracker",
    "description": "The most accurate fitness tracker from Fitbit with built-in GPS. Includes Google apps like Maps and Wallet, plus 40+ exercise modes.",
    "price": 159.95,
    "category": "Wearables",
    "brand": "Fitbit",
    "image": "https://m.media-amazon.com/images/I/61ZtqtvoD2L._AC_SX679_.jpg",
    "stock": 50,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Garmin Venu 3 Smartwatch - AMOLED Display",
    "description": "Designed for health and fitness with advanced features like Body Battery and Sleep Coach. Includes a built-in speaker for calls.",
    "price": 449,
    "category": "Wearables",
    "brand": "Garmin",
    "image": "https://m.media-amazon.com/images/I/61HV8pMBeHL._AC_SX679_.jpg",
    "stock": 15,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": true,
    "discountPrice": 305.26
  },
  {
    "title": "Oura Ring Gen 4 - Horizon Silver",
    "description": "A sleek, screen-free smart ring for holistic health monitoring. Tracks sleep, activity, and stress with medical-grade sensors.",
    "price": 349,
    "category": "Wearables",
    "brand": "Oura",
    "image": "https://m.media-amazon.com/images/I/51yQA1CgzLL._AC_SX679_.jpg",
    "stock": 20,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Xiaomi Smart Band 9 - Midnight Black",
    "description": "The world's most popular budget fitness tracker. Features a bright AMOLED display and up to 21 days of battery life.",
    "price": 45,
    "category": "Wearables",
    "brand": "Xiaomi",
    "image": "https://m.media-amazon.com/images/I/71NbXlZpPKL._AC_SX679_.jpg",
    "stock": 100,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Amazfit T-Rex 3 Rugged Outdoor Smartwatch",
    "description": "Built for adventure with military-grade durability. Features dual-band GPS and up to 27 days of battery life.",
    "price": 279,
    "category": "Wearables",
    "brand": "Amazfit",
    "image": "https://m.media-amazon.com/images/I/71GtgMbKvKL._AC_SX679_.jpg",
    "stock": 12,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Google Pixel Watch - Android Smartwatch with Fitbit Tracking",
    "description": "Advanced Android smartwatch in a Polished Silver Stainless Steel case with a Charcoal Active band. Features built-in LTE, heart rate tracking, and deep integration with Fitbit activity and sleep monitoring for a complete health overview.",
    "price": 349,
    "category": "Wearables",
    "brand": "Google",
    "image": "https://m.media-amazon.com/images/I/61cUcddvDqL._AC_SX679_.jpg",
    "stock": 20,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": true,
    "discountPrice": 306.1
  },
  {
    "title": "Withings ScanWatch 2 - Hybrid Smartwatch",
    "description": "A classic look with medical-grade tech inside. Features 24/7 body temperature tracking and up to 30 days of battery life.",
    "price": 349.95,
    "category": "Wearables",
    "brand": "Withings",
    "image": "https://m.media-amazon.com/images/I/61bwk5GL8OL._AC_SX679_.jpg",
    "stock": 15,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Samsung Galaxy Watch 8 | 44mm AI Smartwatch - Graphite",
    "description": "Next-gen AI-powered smartwatch with a 1.47\" AMOLED display and Wear OS 6. Features advanced heart rate monitoring, GPS fitness tracking, and military-grade durability (IP68, MIL-STD-810H). International Model L330, includes fast charger.",
    "price": 349,
    "category": "Wearables",
    "brand": "Samsung",
    "image": "https://m.media-amazon.com/images/I/61zc3QnQvcL._AC_SX679_.jpg",
    "stock": 35,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Ring Video Doorbell (2nd Gen) - 1080p HD Video",
    "description": "The classic smart doorbell with 1080p HD video, improved motion detection, and easy installation. Hear, see, and speak to visitors from your phone, tablet, or PC.",
    "price": 99.99,
    "category": "Security",
    "brand": "Ring",
    "image": "https://m.media-amazon.com/images/I/61xb7m6EMpL._SX569_.jpg",
    "stock": 50,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Arlo Essential XL Spotlight Camera (2nd Gen) - 3 Pack",
    "description": "Set of 3 wireless outdoor security cameras with 2K resolution and color night vision. Features an integrated spotlight, two-way audio, and direct Wi-Fi connectivity with no hub needed. Includes motion activation and instant smartphone notifications.",
    "price": 449,
    "category": "Security",
    "brand": "Arlo",
    "image": "https://m.media-amazon.com/images/I/61rjSPGbPlL._AC_SX679_.jpg",
    "stock": 25,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Eufy Security SoloCam S340 2-Cam Kit with Video Doorbell E340",
    "description": "Complete home security kit featuring two S340 solar-powered cameras and the E340 battery-powered video doorbell. Includes the HomeBase S380 for local storage with no monthly fees. Dual-camera technology provides 360° surveillance with no blind spots.",
    "price": 549.99,
    "category": "Security",
    "brand": "Eufy",
    "image": "https://m.media-amazon.com/images/I/617W28c6O6L._AC_SX679_.jpg",
    "stock": 15,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Yale Assure Lock 2 Deadbolt - Black Suede",
    "description": "Modern keyed smart entry door lock (YRD410-WF1-BSP) with Wi-Fi connectivity. Features a backlit keypad for secure code entry and remote access via the Yale Access App. Sleek black suede finish, compatible with major smart home platforms.",
    "price": 259.99,
    "category": "Security",
    "brand": "Yale",
    "image": "https://m.media-amazon.com/images/I/612gywTg+cL._AC_SX679_.jpg",
    "stock": 30,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Google Nest Cam (Battery) - Indoor/Outdoor",
    "description": "Versatile smart security camera that knows the difference between a person, animal, and vehicle. Sends alerts directly to the Google Home app. Battery-powered and weather-resistant.",
    "price": 179,
    "category": "Security",
    "brand": "Google",
    "image": "https://m.media-amazon.com/images/I/31750hI5MLL._AC_SX679_.jpg",
    "stock": 35,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Blink Outdoor 4th Gen Weatherproof Camera Mount - 2 Pack",
    "description": "Protective weatherproof housing and 360-degree adjustable bracket set for Blink Outdoor 4. Includes a dedicated sync module mount for a clean setup. Designed to withstand the elements while providing maximum viewing angles. Black finish.",
    "price": 24.99,
    "category": "Security",
    "brand": "Pefecon",
    "image": "https://m.media-amazon.com/images/I/61OoGS3omXL._AC_SX679_.jpg",
    "stock": 80,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": true,
    "discountPrice": 15.91
  },
  {
    "title": "SimpliSafe 5-Piece Wireless Home Security System",
    "description": "Easy-to-install home security kit. Includes a base station, keypad, entry sensor, and motion sensor. Professional monitoring available with no long-term contracts.",
    "price": 189,
    "category": "Security",
    "brand": "SimpliSafe",
    "image": "https://m.media-amazon.com/images/I/61OXS0inl8L._AC_SX679_.jpg",
    "stock": 20,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Wyze Cam v4 with Color Night Vision",
    "description": "Miniature 2.5K smart indoor/outdoor camera. Incredible value with color night vision, IP65 weather resistance, and a built-in spotlight for clear night recordings.",
    "price": 35.99,
    "category": "Security",
    "brand": "Wyze",
    "image": "https://m.media-amazon.com/images/I/71tKDwuQDzL._AC_SX679_PIbundle-2,TopRight,0,0_SH20_.jpg",
    "stock": 150,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "TP-Link Tapo C520WS 2K QHD Outdoor Pan/Tilt Wi-Fi Camera",
    "description": "High-performance outdoor security camera with 360° visual coverage and 2K QHD resolution. Features smart motion tracking, color night vision, and free person/vehicle detection. Supports 24/7 recording with local SD card or cloud storage options.",
    "price": 59.99,
    "category": "Security",
    "brand": "TP-Link",
    "image": "https://m.media-amazon.com/images/I/51xgggjDFNL._AC_SX679_.jpg",
    "stock": 120,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Yale August Wi-Fi Smart Lock with Keypad Touch - Silver",
    "description": "Advanced keyless entry solution in a sleek silver finish. Features the August Wi-Fi Smart Lock integrated with a touch keypad for secure code access. Compatible with major smart home platforms, allowing you to lock, unlock, and monitor your door from anywhere.",
    "price": 219,
    "category": "Security",
    "brand": "Yale",
    "image": "https://m.media-amazon.com/images/I/61HPkc2vV-L._AC_SX679_.jpg",
    "stock": 25,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Sony Alpha a6400 Mirrorless Camera (16-50mm Lens Kit)",
    "description": "Compact APS-C interchangeable lens digital camera with real-time eye auto focus, 4K video, flip screen & 16-50mm lens - E Mount compatible.",
    "price": 949,
    "category": "Photography",
    "brand": "Sony",
    "image": "https://m.media-amazon.com/images/I/81XeVWWyUUL._AC_SX679_.jpg",
    "stock": 12,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Manfrotto Befree Advanced Twist Camera Tripod Kit",
    "description": "Professional carbon fiber travel tripod kit with fluid ball head and M-lock twist closure system. Portable and stable for DSLR and Mirrorless.",
    "price": 349,
    "category": "Photography",
    "brand": "Manfrotto",
    "image": "https://m.media-amazon.com/images/I/61LXU+uhDmL._AC_SX679_.jpg",
    "stock": 25,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Neewer Basics 5\" Ring Light for Video Conference Lighting (2 Pack)",
    "description": "Clip on light kit with desk tripod stands for monitor and laptop. Ideal for Zoom calls, live streaming, and remote working with BR60 technology.",
    "price": 45,
    "category": "Photography",
    "brand": "Neewer",
    "image": "https://m.media-amazon.com/images/I/711oGRmXlTL._AC_SX679_.jpg",
    "stock": 60,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "SanDisk Extreme PRO 128GB SDXC UHS-I Card",
    "description": "High-performance memory card with shot speeds up to 90MB/s and transfer speeds up to 170MB/s. V30 and U3 rated for 4K UHD video.",
    "price": 35.9,
    "category": "Photography",
    "brand": "SanDisk",
    "image": "https://m.media-amazon.com/images/I/81wwLOgkLgL._AC_SX679_.jpg",
    "stock": 150,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Lowepro ProTactic BP 450 AW II Backpack",
    "description": "Professional camera backpack with 4-point access and adaptive interior. Includes All Weather AW Cover and CradleFit laptop compartment.",
    "price": 219,
    "category": "Photography",
    "brand": "Lowepro",
    "image": "https://m.media-amazon.com/images/I/71UO91ZDH5L._AC_SX679_.jpg",
    "stock": 35,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Neewer 43\"/110cm Light Reflector with Clamp & Hand Grips",
    "description": "5-in-1 collapsible multi-disc photography reflector (Translucent/Silver/Gold/White/Black) with 3/8\" thread and hand grips for studio and outdoor lighting.",
    "price": 39.99,
    "category": "Photography",
    "brand": "Neewer",
    "image": "https://m.media-amazon.com/images/I/61RSGgyJ65L._AC_SX679_.jpg",
    "stock": 80,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Puluz Mini Photo Studio Light Box Shooting Tent Kit",
    "description": "Portable folding photography light tent with CRI >95 and 104pcs LED lights. Includes 6 kinds of double-sided color backgrounds for small size products.",
    "price": 32,
    "category": "Photography",
    "brand": "Puluz",
    "image": "https://m.media-amazon.com/images/I/61bkfesK5eL._AC_SX679_.jpg",
    "stock": 45,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Røde VideoMic Pro+ Shotgun Microphone",
    "description": "On-camera condenser microphone with Rycote Lyre shock mounting, automatic power function, and digital switching for superior audio.",
    "price": 275,
    "category": "Photography",
    "brand": "Røde",
    "image": "https://m.media-amazon.com/images/I/51ix-L0l0nL._AC_SY300_SX300_QL70_FMwebp_.jpg",
    "stock": 30,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": true,
    "discountPrice": 240.03
  },
  {
    "title": "Peak Design Slide Camera Strap Black",
    "description": "The world's most versatile professional camera strap with unique Anchor Link quick-connection system. Padded and seatbelt-style webbing.",
    "price": 64.95,
    "category": "Photography",
    "brand": "Peak Design",
    "image": "\thttps://m.media-amazon.com/images/I/61CHWeOw8CL._AC_SX679_.jpg",
    "stock": 50,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Lenspen NDSLRK-1 W Elitepro Cleaning Kit for DSLR Camera",
    "description": "Professional cleaning kit for DSLR cameras and lenses. Includes Lenspen for lenses, FilterKlear for filters, and MicroPro for viewfinders with a microfiber cloth.",
    "price": 24.9,
    "category": "Photography",
    "brand": "Lenspen",
    "image": "https://m.media-amazon.com/images/I/61fPNL679ML._AC_SX679_.jpg",
    "stock": 120,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Fender Player Series Stratocaster Electric Guitar",
    "description": "Iconic Stratocaster design featuring three Player Series single-coil pickups, 22-fret neck, and a 2-point tremolo bridge for classic Fender tone.",
    "price": 849,
    "category": "Music",
    "brand": "Fender",
    "image": "https://m.media-amazon.com/images/I/51Xi48kWSRL._AC_SX679_.jpg",
    "stock": 15,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Yamaha P-45 Compact 88-Key Digital Piano",
    "description": "GHS weighted action keyboard that feels like an acoustic piano. Slim and stylish design with simple one-button operation.",
    "price": 499,
    "category": "Music",
    "brand": "Yamaha",
    "image": "https://m.media-amazon.com/images/I/61+3HkIcX3L._AC_SX679_.jpg",
    "stock": 10,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Audio-Technica ATH-M50x Professional Studio Monitor Headphones",
    "description": "Critically acclaimed sonic performance with 45mm large-aperture drivers, sound isolating earcups, and robust construction for studio tracking and mixing.",
    "price": 169,
    "category": "Music",
    "brand": "Audio-Technica",
    "image": "https://m.media-amazon.com/images/I/71G5OkSr2zL._AC_SX679_.jpg",
    "stock": 45,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Focusrite Scarlett 2i2 4th Gen USB Audio Interface",
    "description": "The most popular interface for artists. Features two high-quality preamps, Studio-grade converters, and Auto Gain for perfect recording levels.",
    "price": 199,
    "category": "Music",
    "brand": "Focusrite",
    "image": "https://m.media-amazon.com/images/I/51qJYqPV1YL._AC_SX679_.jpg",
    "stock": 30,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Shure SM58 Cardioid Dynamic Vocal Microphone",
    "description": "The industry standard for live vocals. Durable construction and a tailored frequency response for clear, reliable sound performance.",
    "price": 99,
    "category": "Music",
    "brand": "Shure",
    "image": "https://m.media-amazon.com/images/I/5158IqcAkhL._AC_SX679_.jpg",
    "stock": 100,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Akai Professional MPK Mini MK3 MIDI Keyboard Controller",
    "description": "Ultra-compact 25-key USB MIDI controller with 8 backlit velocity-sensitive pads, 8 assignable knobs, and a 4-way thumbstick for pitch and modulation.",
    "price": 95,
    "category": "Music",
    "brand": "Akai Professional",
    "image": "https://m.media-amazon.com/images/I/717qmGlA7ZL._AC_SX679_.jpg",
    "stock": 60,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "BOSS DS-1 Distortion Effects Pedal",
    "description": "The classic distortion pedal used by legends. Provides a hard-edged distortion while maintaining the unique nuances of your guitar's playing.",
    "price": 62,
    "category": "Music",
    "brand": "BOSS",
    "image": "https://m.media-amazon.com/images/I/71uUCYAWhOL._AC_SX679_.jpg",
    "stock": 55,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Martin Authentic Acoustic Guitar Strings - Lifespan 2.0 Treated",
    "description": "Phosphor Bronze acoustic guitar strings with Lifespan 2.0 treated technology for long-lasting tone and superior playability. Gauge: Custom Light .011-.052.",
    "price": 18.5,
    "category": "Music",
    "brand": "Martin & Co",
    "image": "https://m.media-amazon.com/images/I/71bUqaXAPlL._AC_SX679_.jpg",
    "stock": 12,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Marshall Emberton II Portable Bluetooth Speaker",
    "description": "Compact portable speaker with the loud and vibrant sound only Marshall can deliver. 30+ hours of portable playtime and IP67 water-resistance.",
    "price": 169,
    "category": "Music",
    "brand": "Marshall",
    "image": "https://m.media-amazon.com/images/I/81fkcBjZndL._AC_SX679_.jpg",
    "stock": 25,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Alesis Nitro Max Electronic Drum Kit",
    "description": "Eight-piece electronic drum set with mesh heads, Bluetooth connectivity, and over 400 high-quality sounds for quiet practice and recording.",
    "price": 399,
    "category": "Music",
    "brand": "Alesis",
    "image": "https://m.media-amazon.com/images/I/8124cw60V4L._AC_SX679_.jpg",
    "stock": 8,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Stentor Student II Violin 4/4 Outfit",
    "description": "Full-size student violin carved from solid tonewoods. Includes a high-quality wood bow, lightweight case, and ebony fingerboard.",
    "price": 215,
    "category": "Instruments",
    "brand": "Stentor",
    "image": "https://m.media-amazon.com/images/I/713cyMah3NL._AC_SX679_.jpg",
    "stock": 10,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Yamaha YAS-280 Student Alto Saxophone",
    "description": "Industry-standard beginner saxophone offering a bright tone and excellent intonation. Features an adjustable thumb-rest for comfort.",
    "price": 985,
    "category": "Instruments",
    "brand": "Yamaha",
    "image": "https://m.media-amazon.com/images/I/815SmeouYfL._AC_SX679_.jpg",
    "stock": 5,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Korg B2 Digital Piano (White)",
    "description": "88-key weighted hammer action keyboard with rich acoustic piano sounds. Includes a built-in music stand and sustain pedal.",
    "price": 399,
    "category": "Instruments",
    "brand": "Korg",
    "image": "https://m.media-amazon.com/images/I/51nMLJbhxXL._AC_SX679_.jpg",
    "stock": 12,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Zildjian K Custom Dark Cymbal Set",
    "description": "Premium professional cymbal pack including 14\" Hi-Hats, 16\" Dark Crash, and 20\" Dark Ride for a warm, trashy sound.",
    "price": 999,
    "category": "Instruments",
    "brand": "Zildjian",
    "image": "https://m.media-amazon.com/images/I/81iyEqiyCQL._AC_SX679_.jpg",
    "stock": 6,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Hohner Marine Band 1896 Harmonica",
    "description": "The legendary blues harmonica with a pearwood comb and brass reed plates. Hand-manufactured in Germany for authentic tone.",
    "price": 45,
    "category": "Instruments",
    "brand": "Hohner",
    "image": "https://m.media-amazon.com/images/I/715y+KlnY3L._AC_SX679_.jpg",
    "stock": 80,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Meinl Percussion Compact Jam Cajon",
    "description": "Baltic birch wood construction with internal snare wires. Delivers punchy bass and crisp slap tones in a portable size.",
    "price": 59,
    "category": "Instruments",
    "brand": "Meinl",
    "image": "https://m.media-amazon.com/images/I/81QcYXWIGEL._AC_SX679_.jpg",
    "stock": 25,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": true,
    "discountPrice": 41.15
  },
  {
    "title": "D'Addario EJ16-3D Phosphor Bronze Strings (3-Pack)",
    "description": "World-renowned light gauge acoustic guitar strings (.012-.053) known for long-lasting, warm, and well-balanced acoustic tone.",
    "price": 24.9,
    "category": "Instruments",
    "brand": "D'Addario",
    "image": "https://m.media-amazon.com/images/I/81dS6RLrIGL._AC_SX679_.jpg",
    "stock": 150,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Vandoren Traditional Alto Sax Reeds (Box of 10)",
    "description": "Most widely used professional reeds in the world. Strength 2.5, designed for pure sound and excellent response in all registers.",
    "price": 32,
    "category": "Instruments",
    "brand": "Vandoren",
    "image": "https://m.media-amazon.com/images/I/61XbnOLeNHL._AC_SX679_.jpg",
    "stock": 100,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Kala KA-15S Satin Mahogany Soprano Ukulele",
    "description": "Classic mahogany body ukulele with a smooth satin finish. Features Aquila Super Nylgut strings and high-quality gear tuners.",
    "price": 79,
    "category": "Instruments",
    "brand": "Kala",
    "image": "https://m.media-amazon.com/images/I/61V0jjx6+UL._AC_SY879_.jpg",
    "stock": 40,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Vic Firth American Classic 5A Drumsticks",
    "description": "Premium hickory drumsticks with a teardrop tip for rich cymbal sounds. The world's most popular choice for all music styles.",
    "price": 14.5,
    "category": "Instruments",
    "brand": "Vic Firth",
    "image": "https://m.media-amazon.com/images/I/51rk09N1WYL._AC_SX679_.jpg",
    "stock": 120,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Victrola Eastwood II Record Player with Speakers",
    "description": "Vintage-style 3-speed vinyl player featuring Bluetooth 5.1 and Vinyl Stream technology. Equipped with a premium Audio Technica AT-3600LA cartridge for superior sound quality.",
    "price": 99.99,
    "category": "Vintage",
    "brand": "Victrola",
    "image": "https://m.media-amazon.com/images/I/613y1TxMqzL._AC_SX679_.jpg",
    "stock": 45,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Marshall Stanmore III Bluetooth Speaker",
    "description": "Vintage-inspired home speaker with iconic Marshall brass details and script logo. Delivers expansive sound with a classic rock-and-roll aesthetic.",
    "price": 379,
    "category": "Vintage",
    "brand": "Marshall",
    "image": "https://m.media-amazon.com/images/I/81Z743elrLL._AC_SX679_.jpg",
    "stock": 15,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Kodak Ektar H35 Half Frame Film Camera",
    "description": "Analog 35mm film camera with a retro 1960s look. Features a built-in flash and half-frame design to get double the photos out of every roll.",
    "price": 49,
    "category": "Vintage",
    "brand": "Kodak",
    "image": "https://m.media-amazon.com/images/I/71zoYnJGW+L._AC_SX679_.jpg",
    "stock": 30,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Crosley CR6047A-RE Powel 7-in-1 Bluetooth Vinyl Record Player",
    "description": "All-in-one entertainment center with 3-speed turntable, AM/FM radio, CD player, and Aux-in. Features Bluetooth In/Out technology to stream your vinyl to wireless speakers.",
    "price": 159,
    "category": "Vintage",
    "brand": "Crosley",
    "image": "https://m.media-amazon.com/images/I/81S7M1pLDDL._AC_SX679_.jpg",
    "stock": 12,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Casio Vintage A168WG-9EF Gold Digital Watch",
    "description": "Classic 80s digital watch with a gold-tone stainless steel band, EL backlight, daily alarm, and water-resistant construction.",
    "price": 55,
    "category": "Vintage",
    "brand": "Casio",
    "image": "https://m.media-amazon.com/images/I/61jZn9JnaoL._AC_SY695_.jpg",
    "stock": 60,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": true,
    "discountPrice": 37.53
  },
  {
    "title": "SMEG 50's Style Electric Mini Kettle",
    "description": "Retro Italian-designed electric kettle with a 0.8L capacity, 360-degree swivel base, and chrome handle for a mid-century kitchen look.",
    "price": 149,
    "category": "Vintage",
    "brand": "SMEG",
    "image": "https://m.media-amazon.com/images/I/51km-PXB+DL._AC_SX679_.jpg",
    "stock": 20,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "GPO 746 Rotary Design Retro Landline Phone",
    "description": "Traditional 1970s British style telephone with a classic rotary dial feel and authentic bell ringer. Features modern push-button dialing.",
    "price": 42,
    "category": "Vintage",
    "brand": "GPO",
    "image": "https://m.media-amazon.com/images/I/61PhMU6veZL._AC_SX679_.jpg",
    "stock": 25,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Zippo Classic Brushed Chrome Lighter",
    "description": "The world-famous windproof lighter with an all-metal construction and the unmistakable Zippo 'click'. Refillable for a lifetime of use.",
    "price": 24.5,
    "category": "Vintage",
    "brand": "Zippo",
    "image": "https://m.media-amazon.com/images/I/71Hma2HL5qL._AC_SX679_.jpg",
    "stock": 100,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Polaroid 600 Refurbished Instant Camera",
    "description": "Genuine vintage Polaroid 600 camera, refurbished for modern use. Simple point-and-shoot design with built-in automatic flash.",
    "price": 129,
    "category": "Vintage",
    "brand": "Polaroid",
    "image": "https://m.media-amazon.com/images/I/81Sq45U-2TL._AC_SY879_.jpg",
    "stock": 10,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": true,
    "discountPrice": 89.99
  },
  {
    "title": "Torchstar Green Glass Bankers Desk Lamp",
    "description": "Antique desk lamp featuring a classic green glass shade and solid brass base. Traditional library style with a pull chain switch and E26 base for home or office study.",
    "price": 49.9,
    "category": "Vintage",
    "brand": "Torchstar",
    "image": "https://m.media-amazon.com/images/I/613lCI0xg6L._AC_SX679_.jpg",
    "stock": 40,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Nixplay 8-inch Smart Digital Picture Frame (WiFi, Black)",
    "description": "Share photos and videos instantly via WiFi with the Nixplay app or email. Features a high-resolution IPS display, motion sensor, and the ability to preload content for a gifted frame.",
    "price": 129.99,
    "category": "Gifts",
    "brand": "Nixplay",
    "image": "https://m.media-amazon.com/images/I/71gedXNzS-L._AC_SX679_.jpg",
    "stock": 50,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": true,
    "discountPrice": 111.77
  },
  {
    "title": "YETI Rambler 20 oz Tumbler with MagSlider Lid",
    "description": "Durable stainless steel vacuum insulated tumbler. Keeps drinks hot or cold until the last sip. Dishwasher safe and puncture-resistant.",
    "price": 35,
    "category": "Gifts",
    "brand": "YETI",
    "image": "https://m.media-amazon.com/images/I/61tYbQXEGEL._AC_SX679_.jpg",
    "stock": 100,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Fujifilm Instax Mini 12 Instant Camera",
    "description": "Super-compact instant camera with automatic exposure and selfie mirror. Perfect for capturing and printing memories on the spot.",
    "price": 79,
    "category": "Gifts",
    "brand": "Fujifilm",
    "image": "https://m.media-amazon.com/images/I/5119FirQf8L._AC_SY879_.jpg",
    "stock": 40,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Kindle Paperwhite (16 GB) 6.8\" Display",
    "description": "The ultimate gift for readers. Features a 300 ppi glare-free display, adjustable warm light, and up to 10 weeks of battery life. Waterproof.",
    "price": 149.99,
    "category": "Gifts",
    "brand": "Amazon",
    "image": "https://m.media-amazon.com/images/I/61KMlIaN9pL._AC_SY879_.jpg",
    "stock": 30,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": true,
    "discountPrice": 119.49
  },
  {
    "title": "Life360 Tile Starter Pack - Bluetooth Trackers (2-Pack)",
    "description": "Bluetooth trackers and item finders for keys, wallets, and more. Includes 1 Tile Mate and 1 Tile Slim. Compatible with iOS and Android with phone finder feature.",
    "price": 54.99,
    "category": "Gifts",
    "brand": "Tile",
    "image": "https://m.media-amazon.com/images/I/717H--cYAXL._AC_SX679_.jpg",
    "stock": 150,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Hydro Flask Wide Mouth Bottle with Flex Straw Cap",
    "description": "TempShield double-wall vacuum insulation keeps drinks cold for 24 hours. Made with professional-grade stainless steel and BPA-free plastic.",
    "price": 44.95,
    "category": "Gifts",
    "brand": "Hydro Flask",
    "image": "https://m.media-amazon.com/images/I/61Ie69CC2jL._AC_SY879_.jpg",
    "stock": 80,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Sakura Collagen Skin Care Set (5pcs)",
    "description": "Complete skincare gift set with facial cleanser, serum, cream, pink facial brush, bunny hair band, and makeup bag. Designed for deep cleansing, hydrating, and firming for a radiant tone.",
    "price": 29.9,
    "category": "Gifts",
    "brand": "Sakura",
    "image": "https://m.media-amazon.com/images/I/7135gHuFHEL._SX679_.jpg",
    "stock": 25,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Whiskey Stones Gift Set by Royal Reserve",
    "description": "Artisan crafted reusable chilling rocks for scotch and bourbon. Premium gift set designed to chill spirits without dilution. Perfect gift for husband, dad, or boyfriend.",
    "price": 39.99,
    "category": "Gifts",
    "brand": "Royal Reserve",
    "image": "https://m.media-amazon.com/images/I/81teEFc1QSL._AC_SX679_.jpg",
    "stock": 200,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "AeroGarden Grow Anything Seed Pod Kit (6-pod)",
    "description": "Custom seed pod kit that allows you to plant and grow your own choice of seeds in your AeroGarden. Includes 6 pods, grow sponges, domes, and liquid plant food.",
    "price": 19.95,
    "category": "Gifts",
    "brand": "AeroGarden",
    "image": "https://m.media-amazon.com/images/I/71FUCJkOzNL._AC_SX679_.jpg",
    "stock": 15,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Stanley Quencher H2.0 FlowState Tumbler 40 oz",
    "description": "The viral travel tumbler with double-wall vacuum insulation, ergonomic handle, and advanced FlowState lid. Perfect for all-day hydration.",
    "price": 45,
    "category": "Gifts",
    "brand": "Stanley",
    "image": "https://m.media-amazon.com/images/I/41ryNvEnNCL._AC_SX679_.jpg",
    "stock": 60,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Gardena 15202-41 Sileno Minimo - Automatic Robotic Lawn Mower",
    "description": "One of the quietest in its class, this robotic mower handles lawns up to 5,400 sq ft. Features Bluetooth app control and boundary wire for fully automated, precise mowing.",
    "price": 629.99,
    "category": "Garden",
    "brand": "Gardena",
    "image": "https://m.media-amazon.com/images/I/51hmemWhM8L._AC_SX679_.jpg",
    "stock": 12,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": true,
    "discountPrice": 540.66
  },
  {
    "title": "Weber Genesis E-315 Liquid Propane Gas Grill",
    "description": "High-performance outdoor gas grill with 3 PureBlu burners and porcelain-enameled cast-iron cooking grates. Designed for superior heat distribution and durability.",
    "price": 899,
    "category": "Garden",
    "brand": "Weber",
    "image": "https://m.media-amazon.com/images/I/61D4lyopA6L._AC_SX679_.jpg",
    "stock": 8,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "WORX 22\" Cordless Hedge Trimmer (WG261.9)",
    "description": "Ultra-lightweight 22-inch electric hedge trimmer weighing only 4.4 lbs. Features dual-action laser-cut blades for reduced vibration and clean cuts. Battery and charger not included.",
    "price": 79,
    "category": "Garden",
    "brand": "Worx",
    "image": "https://m.media-amazon.com/images/I/514KbDnR9zL._AC_SX679_.jpg",
    "stock": 25,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Intex 28445EH 4 Person PureSpa Chevron Deluxe Hot Tub",
    "description": "Portable inflatable hot tub with Chevron Deluxe design. Includes energy-efficient spa cover, app control, and saltwater system readiness. Dimensions: 69\" x 69\" x 28\".",
    "price": 649,
    "category": "Garden",
    "brand": "Intex",
    "image": "https://m.media-amazon.com/images/I/71QbglpSe-L._AC_SX679_.jpg",
    "stock": 5,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Vivere Double Cotton Hammock with Space Saving Steel Stand",
    "description": "Space-saving 9-foot steel stand with upgraded polyester end strings for 450 lb capacity. Premium double cotton hammock in Desert Moon pattern, includes carry bag.",
    "price": 119.99,
    "category": "Garden",
    "brand": "Vivere",
    "image": "https://m.media-amazon.com/images/I/71CrzEBP9yL._AC_SX679_.jpg",
    "stock": 15,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Bosch Home and Garden F016800536 High Pressure Washer Accessories",
    "description": "Self-priming kit for Bosch high-pressure washers. Allows the use of water from tanks or natural sources, compatible with AQT and EasyAquatak models.",
    "price": 24.9,
    "category": "Garden",
    "brand": "Bosch",
    "image": "https://m.media-amazon.com/images/I/813bSMgH0BL._AC_SX679_PIbundle-50,TopRight,0,0_SH20_.jpg",
    "stock": 40,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Hozelock 2490R8000 Auto Reel hose box with 20 m hose",
    "description": "Wall-mounted self-winding hose box with 20 meters of premium anti-kink hose. Features a smooth rewind mechanism and safe-lock system to prevent accidental rewind.",
    "price": 135,
    "category": "Garden",
    "brand": "Hozelock",
    "image": "https://m.media-amazon.com/images/I/81wlW5z0VLL._AC_SX679_.jpg",
    "stock": 30,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Fiskars X27 Super Splitting Axe",
    "description": "Ideal for splitting medium-to-large-sized logs. Features an advanced blade geometry and inseparable head-to-shaft connection for durability.",
    "price": 65,
    "category": "Garden",
    "brand": "Fiskars",
    "image": "https://m.media-amazon.com/images/I/21suHy51DNL._AC_.jpg",
    "stock": 50,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Kärcher WD 3 V-17/4/20 Wet and Dry Vacuum Cleaner",
    "description": "Powerful and energy-efficient vacuum cleaner with a 17-liter plastic container and blower function for patio or workshop cleaning.",
    "price": 79.9,
    "category": "Garden",
    "brand": "Kärcher",
    "image": "https://m.media-amazon.com/images/I/71ln+De6GpL._AC_SX679_.jpg",
    "stock": 22,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Outdoor Solar String Lights (50ft)",
    "description": "Waterproof LED Edison bulbs with solar panel. Features 4 lighting modes and auto-on/off at dusk/dawn for garden and patio atmosphere.",
    "price": 34,
    "category": "Garden",
    "brand": "Brightown",
    "image": "https://m.media-amazon.com/images/I/81DdJJbPVhL._AC_SX679_.jpg",
    "stock": 100,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Furbo 360° Dog Camera: Nanny Bundle",
    "description": "Full HD rotating camera with barking alerts, two-way audio, and treat tossing feature. Includes color night vision and AI-powered dog recognition.",
    "price": 210,
    "category": "Pets",
    "brand": "Furbo",
    "image": "https://m.media-amazon.com/images/I/71w5iH4u9AL._AC_SX679_.jpg",
    "stock": 20,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Tractive GPS Tracker for Dogs",
    "description": "Real-time location tracking and activity monitoring. Features live mode, virtual fence alerts, and worldwide coverage. 100% waterproof design.",
    "price": 49.99,
    "category": "Pets",
    "brand": "Tractive",
    "image": "https://m.media-amazon.com/images/I/71rGP5YET1L._AC_SX679_.jpg",
    "stock": 45,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "KONG Classic Dog Toy, Durable Natural Rubber",
    "description": "The gold standard of dog toys. Natural red rubber formula is ultra-durable for power chewers and features an erratic bounce for fetch games.",
    "price": 12.99,
    "category": "Pets",
    "brand": "KONG",
    "image": "https://m.media-amazon.com/images/I/61eVAqrR7uL._AC_SX679_.jpg",
    "stock": 150,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Chuckit! Classic Launcher Dog Ball Thrower",
    "description": "Ergonomic handle for effortless throwing of balls. Exercise your dog in less time and keep your hands clean from slobber. Includes one ball.",
    "price": 15.5,
    "category": "Pets",
    "brand": "Chuckit!",
    "image": "https://m.media-amazon.com/images/I/71VeMle0XOL._AC_SX679_.jpg",
    "stock": 80,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "PetSafe Drinkwell Multi-Tier Pet Fountain",
    "description": "Free-falling water stream encourages pets to drink more. 100 oz capacity with activated carbon filter to remove bad tastes and odors.",
    "price": 39.95,
    "category": "Pets",
    "brand": "PetSafe",
    "image": "https://m.media-amazon.com/images/I/71hZb0s3hlL._AC_SX679_.jpg",
    "stock": 35,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Feandrea Multi-Level Cat Tree with Scratching Posts",
    "description": "All-in-one cat tower with plush perch, spacious cave, and sisal-covered scratching posts. Stable design for active cats and kittens.",
    "price": 85,
    "category": "Pets",
    "brand": "Feandrea",
    "image": "https://m.media-amazon.com/images/I/81d2CuHazgL._AC_SX679_.jpg",
    "stock": 15,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": true,
    "discountPrice": 52.81
  },
  {
    "title": "SlowTon No Pull Dog Harness and Lead Set",
    "description": "Adjustable padded vest harness with breathable mesh. Includes a seat belt attachment and bungee leash for safe car travel and walking.",
    "price": 24.9,
    "category": "Pets",
    "brand": "SlowTon",
    "image": "https://m.media-amazon.com/images/I/71RT+GZxE5L._AC_SX679_.jpg",
    "stock": 60,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "BFPETHOME Orthopedic Dog Bed for Large Dogs",
    "description": "Big waterproof sofa dog bed with a removable washable cover. Features a waterproof lining, orthopedic foam for joint support, and a nonskid bottom for safety.",
    "price": 59.99,
    "category": "Pets",
    "brand": "BFPETHOME",
    "image": "https://m.media-amazon.com/images/I/71Glb77vr1L._AC_SX679_.jpg",
    "stock": 25,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Hertzko Self-Cleaning Slicker Brush for Dogs and Cats",
    "description": "The ultimate grooming tool to remove tangles, knots, and loose fur. Features a one-button retraction system for easy cleaning of the brush.",
    "price": 18,
    "category": "Pets",
    "brand": "Hertzko",
    "image": "https://m.media-amazon.com/images/I/712nMp+qrFL._SX679_.jpg",
    "stock": 100,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "SureFlap Microchip Cat Flap with Connect",
    "description": "Smart cat flap that reads your cat's existing microchip to prevent intruder animals. App-controlled to lock or unlock from anywhere.",
    "price": 145,
    "category": "Pets",
    "brand": "Sure Petcare",
    "image": "https://m.media-amazon.com/images/I/61j3BDpQH4L._AC_SX679_.jpg",
    "stock": 12,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "NOCO Boost GB70: 2000A UltraSafe Jump Starter",
    "description": "2000 Amp 12V ultra-safe lithium jump starter pack for up to 8.0L gasoline and 6.0L diesel engines. Features spark-proof technology, reverse polarity protection, and a built-in LED flashlight.",
    "price": 199.95,
    "category": "Automotive",
    "brand": "NOCO",
    "image": "https://m.media-amazon.com/images/I/71HLDMPtodL._AC_SX679_.jpg",
    "stock": 45,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Bosch ICON Flap Top Wiper Blades (Set of 2)",
    "description": "Premium beam-style wiper blades with ClearMax 365 rubber technology. Features a tension spring for superior wiping performance in all weather conditions.",
    "price": 38,
    "category": "Automotive",
    "brand": "Bosch",
    "image": "https://m.media-amazon.com/images/I/71Wm2aTYp5L._AC_SY879_PIbundle-2,TopRight,0,0_SH20_.jpg",
    "stock": 120,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "AstroAI Digital Tire Pressure Gauge with Inflator",
    "description": "Heavy-duty 250 PSI air chuck and compressor accessories with quick connect coupler. Features 0.1 display resolution and backlit LCD for accurate tire maintenance.",
    "price": 32.99,
    "category": "Automotive",
    "brand": "AstroAI",
    "image": "https://m.media-amazon.com/images/I/71Z-72jLtBL._AC_SY879_.jpg",
    "stock": 80,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Black+Decker 12V Pivot Auto Vacuum",
    "description": "High-performance cordless car vacuum with a pivoting nozzle for hard-to-reach areas. Plugs directly into the 12V cigarette lighter socket.",
    "price": 49,
    "category": "Automotive",
    "brand": "Black+Decker",
    "image": "https://m.media-amazon.com/images/I/61iyajK0VJL._AC_SX679_.jpg",
    "stock": 35,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Nextbase 522GW Dash Cam Front",
    "description": "1440p Quad HD recording with Alexa built-in, Emergency SOS, and Bluetooth 4.2. Features a 3-inch HD IPS touchscreen and magnetic mount.",
    "price": 169,
    "category": "Automotive",
    "brand": "Nextbase",
    "image": "https://m.media-amazon.com/images/I/61rWEtRp+NL._AC_SX679_.jpg",
    "stock": 20,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Meguiar's M205 Mirror Glaze Ultra Finishing Polish",
    "description": "Professional easy-to-use formula for impeccable shine. Permanently removes swirls and light defects for a high gloss, show-car finish. Can be applied by hand or machine.",
    "price": 18.5,
    "category": "Automotive",
    "brand": "Meguiar's",
    "image": "https://m.media-amazon.com/images/I/619mURpt7LL._SX522_.jpg",
    "stock": 25,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Garmin DriveSmart 65 with Amazon Alexa",
    "description": "GPS navigator with a 6.95-inch high-resolution display, hands-free calling, and smart notifications. Includes live traffic and parking updates.",
    "price": 229,
    "category": "Automotive",
    "brand": "Garmin",
    "image": "https://m.media-amazon.com/images/I/61qD1P0yBLS._AC_SX679_.jpg",
    "stock": 15,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Armor All Car Cleaning Wipes (3-Pack)",
    "description": "Value pack including Protectant, Glass, and Cleaning wipes. Designed to clean and protect interior surfaces, dashboards, and windows.",
    "price": 15.5,
    "category": "Automotive",
    "brand": "Armor All",
    "image": "https://m.media-amazon.com/images/I/81KER07Qw3L._AC_SX679_.jpg",
    "stock": 200,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "ThisWorx Car Vacuum Cleaner 2.0 (Portable Handheld)",
    "description": "Portable handheld mini vacuum cleaner with a 16ft cord and integrated LED light. Includes carry bag and professional attachments for RVs, boats, and travel use.",
    "price": 39.99,
    "category": "Automotive",
    "brand": "ThisWorx",
    "image": "https://m.media-amazon.com/images/I/61iplMeVi1L._AC_SX679_.jpg",
    "stock": 150,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "AstroAI Multimeter Tester 10000 Counts TRMS",
    "description": "Professional auto-ranging digital multimeter with a large color LCD screen. Fast and accurately measures TRMS voltage, current, resistance, continuity, capacitance, and temperature.",
    "price": 45.99,
    "category": "Automotive",
    "brand": "AstroAI",
    "image": "https://m.media-amazon.com/images/I/81S14zmYKQL._SX522_.jpg",
    "stock": 60,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": true,
    "discountPrice": 34.88
  },
  {
    "title": "Samsonite Omni PC Hardside Expandable Luggage (24-Inch)",
    "description": "Durable polycarbonate hardshell suitcase with 360-degree spinner wheels, TSA-compatible combination lock, and expandable design for extra packing capacity.",
    "price": 159,
    "category": "Travel",
    "brand": "Samsonite",
    "image": "https://m.media-amazon.com/images/I/91Ro8WL6SNL._AC_SX679_.jpg",
    "stock": 20,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Apple AirTag (4-Pack)",
    "description": "Keep track of your luggage and travel gear with a simple one-tap setup. Uses the Find My app to locate items with Precision Finding technology.",
    "price": 99,
    "category": "Travel",
    "brand": "Apple",
    "image": "https://m.media-amazon.com/images/I/61bMNCeAUAL._AC_SX679_.jpg",
    "stock": 100,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Osprey Farpoint 40 Men's Travel Backpack",
    "description": "Carry-on sized travel pack with a stowaway backpanel, harness, and hipbelt. Features a large panel zip access to the main compartment and internal compression straps.",
    "price": 185,
    "category": "Travel",
    "brand": "Osprey",
    "image": "https://m.media-amazon.com/images/I/81Egri2WivL._AC_SX679_.jpg",
    "stock": 15,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": true,
    "discountPrice": 137.33
  },
  {
    "title": "Trtl Travel Pillow for Neck Support",
    "description": "Scientifically proven neck support travel pillow. Keeps head in an ergonomic position during long-haul flights. Lightweight and easy to attach to luggage.",
    "price": 44.99,
    "category": "Travel",
    "brand": "Trtl",
    "image": "https://m.media-amazon.com/images/I/61Ev4Ik4L8L._AC_SX679_.jpg",
    "stock": 60,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "JBL Clip 4: Portable Speaker with Bluetooth",
    "description": "Ultra-portable, waterproof, and dustproof Bluetooth speaker. Features an integrated carabiner to clip onto bags or belts for music on the go.",
    "price": 59.95,
    "category": "Travel",
    "brand": "JBL",
    "image": "https://m.media-amazon.com/images/I/61PGM62bkYL._AC_SX679_.jpg",
    "stock": 45,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Acer Universal Travel Plug Adapter - International Power Adapter",
    "description": "Worldwide outlet charger with 5 USB ports (including 3 USB-C) and 5.8A output. Compatible with over 150 countries including UK, EU, and USA. Features Type C/E/F/G/I/L/A plug compatibility.",
    "price": 29.99,
    "category": "Travel",
    "brand": "Acer",
    "image": "https://m.media-amazon.com/images/I/51YqhH+8QTL._AC_SX679_.jpg",
    "stock": 80,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Hard Storage Case for Anker 737 Power Bank (PowerCore 24K)",
    "description": "Durable travel case specifically designed for Anker 737 Power Bank and 715 Charger. Features shockproof material and a mesh pocket for cables. Case only, devices not included.",
    "price": 19.99,
    "category": "Travel",
    "brand": "Tourmate",
    "image": "https://m.media-amazon.com/images/I/71MS6yIbSrL._AC_SX679_.jpg",
    "stock": 30,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Bagail 8 Set Packing Cubes Luggage Packing Organizers",
    "description": "Set of 8 travel luggage organizers in Aqua Color. Includes multiple sizes for clothes, laundry, and travel accessories. Features breathable mesh and durable zippers for suitcase organization.",
    "price": 26.99,
    "category": "Travel",
    "brand": "Bagail",
    "image": "https://m.media-amazon.com/images/I/71R-YIUSFLL._AC_SX679_.jpg",
    "stock": 120,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Venture 4th Money Belt with RFID Blocking",
    "description": "Slim and lightweight security travel pouch for passports, cash, and credit cards. Features RFID blocking technology to protect against digital theft.",
    "price": 18,
    "category": "Travel",
    "brand": "Venture 4th",
    "image": "https://m.media-amazon.com/images/I/71b2k2fa30L._AC_SX679_.jpg",
    "stock": 150,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Grayl GeoPress 24 oz Water Purifier Bottle",
    "description": "Makes 24 oz of clean drinking water in 8 seconds. Removes viruses, bacteria, and protozoa from any fresh water source worldwide.",
    "price": 99.95,
    "category": "Travel",
    "brand": "Grayl",
    "image": "https://m.media-amazon.com/images/I/71ZOSsu6KnL._SX522_.jpg",
    "stock": 25,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Echo Dot Bundle: Echo Dot (5th Gen) and Battery Base",
    "description": "Perfect portable bundle including the Echo Dot (5th Gen) in Deep Sea Blue and a white battery base. Enjoy Alexa anywhere in your home with up to 5 hours of cordless playback.",
    "price": 84.98,
    "category": "Smart Home",
    "brand": "Amazon",
    "image": "https://m.media-amazon.com/images/I/51cHfc3euHL._AC_SX569_.jpg",
    "stock": 100,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Philips Hue Essential Starter Kit: Bridge + 4 E26 Smart Bulbs",
    "description": "Complete smart lighting kit including the Hue Bridge and 4 White & Color Ambiance bulbs (2200K-6500K). Fully dimmable and compatible with Alexa, Google Home, and Apple Home.",
    "price": 199.99,
    "category": "Smart Home",
    "brand": "Philips Hue",
    "image": "https://m.media-amazon.com/images/I/71r74+j5RLL._AC_SX679_PIbundle-4,TopRight,0,0_SH20_.jpg",
    "stock": 25,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Ring Video Doorbell (2nd Gen)",
    "description": "1080p HD video doorbell with enhanced features that let you see, hear, and speak to anyone from your phone, tablet, or PC.",
    "price": 99.99,
    "category": "Smart Home",
    "brand": "Ring",
    "image": "https://m.media-amazon.com/images/I/61M4ZQqTpmL._SX569_.jpg",
    "stock": 40,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Google Nest Learning Thermostat (3rd Gen)",
    "description": "Programmable smart thermostat that learns your schedule and the temperatures you like to help save energy and keep your home comfortable.",
    "price": 249,
    "category": "Smart Home",
    "brand": "Google",
    "image": "https://m.media-amazon.com/images/I/51wLt4jvhZL._AC_SX679_.jpg",
    "stock": 15,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "TP-Link Tapo Smart Plug Mini 15A (4-Pack)",
    "description": "Smart Home Wi-Fi plugs with super easy setup and 15A capacity. Compatible with Alexa and Google Home, no hub required. Compact design for space-saving. Model: Tapo P105.",
    "price": 34.99,
    "category": "Smart Home",
    "brand": "TP-Link",
    "image": "https://m.media-amazon.com/images/I/61l66LG9TOL._AC_SX679_PIbundle-4,TopRight,0,0_SH20_.jpg",
    "stock": 150,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Govee RGBIC LED Strip Lights (10m)",
    "description": "Smart LED strips with segmented color control and music sync mode. Compatible with Alexa and Google Assistant for hands-free voice control.",
    "price": 35.99,
    "category": "Smart Home",
    "brand": "Govee",
    "image": "https://m.media-amazon.com/images/I/71N76hGMHVL._AC_SX679_PIbundle-2,TopRight,0,0_SH20_.jpg",
    "stock": 80,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": true,
    "discountPrice": 30.86
  },
  {
    "title": "Blink Outdoor 4th Gen Camera Mount (2-Pack)",
    "description": "Weatherproof housing and 360-degree adjustable bracket for Blink Outdoor 4th Gen cameras. Includes a sync module mount for a clean and secure installation. Cameras not included.",
    "price": 22.99,
    "category": "Smart Home",
    "brand": "Blink",
    "image": "https://m.media-amazon.com/images/I/61OoGS3omXL._AC_SX679_.jpg",
    "stock": 30,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": true,
    "discountPrice": 18.04
  },
  {
    "title": "Nanoleaf Smart LED Ceiling Lights (4\" Downlight 1PK)",
    "description": "Matter-enabled smart LED downlight with 16M+ colors and tunable whites. Features high brightness, music sync, and seamless control via the Nanoleaf app or voice assistants.",
    "price": 34.99,
    "category": "Smart Home",
    "brand": "Nanoleaf",
    "image": "https://m.media-amazon.com/images/I/61VlbnhM2HL._AC_SX679_.jpg",
    "stock": 12,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "MAMNV Robot Vacuum and Mop with 11500 Pa Suction",
    "description": "3-in-1 robotic vacuum and mop with Smart LiDAR Navigation and a 90-day self-empty base. Features 160-minute runtime and Alexa voice control, ideal for pet hair and hard floors.",
    "price": 299,
    "category": "Smart Home",
    "brand": "MAMNV",
    "image": "https://m.media-amazon.com/images/I/71Lhb2+AvXL._AC_SX679_.jpg",
    "stock": 20,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Eve Door & Window Smart Contact Sensor",
    "description": "Wireless contact sensor with Apple HomeKit technology. Know the status of your door or window and receive notifications automatically.",
    "price": 39.95,
    "category": "Smart Home",
    "brand": "Eve",
    "image": "https://m.media-amazon.com/images/I/31ki+DeJ6gL._AC_SX679_.jpg",
    "stock": 55,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Stasher Platinum Silicone Reusable Storage Bag",
    "description": "Eco-friendly, plastic-free reusable storage bag made of food-grade platinum silicone. Dishwasher and microwave safe, perfect for sous-vide and snacks.",
    "price": 12.99,
    "category": "Eco-friendly",
    "brand": "Stasher",
    "image": "https://m.media-amazon.com/images/I/81O8UCt86sL._AC_SX679_.jpg",
    "stock": 150,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Lomi 3 Electric Compost | Smart Waste System",
    "description": "Smart waste system and food recycler that turns kitchen scraps into nutrient-rich dirt in just a few hours. Quiet, odorless, and easy-to-use solution for home composting.",
    "price": 329,
    "category": "Eco-friendly",
    "brand": "Lomi",
    "image": "https://m.media-amazon.com/images/I/713RLeEWmOL._AC_SX679_.jpg",
    "stock": 10,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Jackery SolarSaga 100W Bifacial Portable Solar Panel",
    "description": "High-efficiency bifacial solar panel for Explorer series. Features foldable design with USB outputs for phones and outdoor gear. Ideal for camping, RVs, and sustainable power charging.",
    "price": 299,
    "category": "Eco-friendly",
    "brand": "Jackery",
    "image": "https://m.media-amazon.com/images/I/81OMY0mX0UL._AC_SX679_.jpg",
    "stock": 15,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Reusable Beeswax Wrap - 9 Pack Eco-Friendly Food Wraps",
    "description": "Set of 9 organic and biodegradable beeswax wraps with fruit patterns (Strawberry, Orange, Lemon). Sustainable, zero-waste, and plastic-free alternative for food storage.",
    "price": 24.95,
    "category": "Eco-friendly",
    "brand": "Bee's Wrap",
    "image": "https://m.media-amazon.com/images/I/81-cLbynG7L._AC_SX679_.jpg",
    "stock": 200,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Rocketbook Core Reusable Smart Notebook (Letter Size)",
    "description": "Eco-friendly reusable 32-page dot grid notebook for school and work. Erase with a damp cloth and blast your notes to the cloud. Letter Size 8.5 x 11 with pilot frixion pen included.",
    "price": 34.99,
    "category": "Eco-friendly",
    "brand": "Rocketbook",
    "image": "https://m.media-amazon.com/images/I/81ZdtBquGrL._AC_SX679_.jpg",
    "stock": 80,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Blueland Clean Home Kit (3 Reusable Bottles + 3 Tablets)",
    "description": "Eco-friendly cleaning starter kit including 3 durable reusable bottles and 3 dissolving tablets. Makes one full bottle each of Foaming Hand Soap, Multi-Surface Cleaner, and Bathroom Cleaner.",
    "price": 38,
    "category": "Eco-friendly",
    "brand": "Blueland",
    "image": "https://m.media-amazon.com/images/I/71pOUnBwVjL._AC_SX679_.jpg",
    "stock": 60,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Supfine Magnetic Case for iPhone 15 (MagSafe Compatible)",
    "description": "Slim translucent matte phone case with military-grade drop protection and anti-fingerprint finish. Features strong magnetic alignment for MagSafe accessories in Forest Green.",
    "price": 19.99,
    "category": "Eco-friendly",
    "brand": "Supfine",
    "image": "https://m.media-amazon.com/images/I/71T-+Ny9SvL._AC_SX679_.jpg",
    "stock": 50,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": true,
    "discountPrice": 12.27
  },
  {
    "title": "Vikings Blade Chieftain 'Odin' Double Edge Safety Razor",
    "description": "High-end reusable safety razor for men including 5 Swedish steel blades and a luxury travel case. Features a smooth, eco-friendly shaving experience with a heavy-duty Chieftain Odin design.",
    "price": 38,
    "category": "Eco-friendly",
    "brand": "Vikings Blade",
    "image": "https://m.media-amazon.com/images/I/71U431e6EmL._SX679_.jpg",
    "stock": 100,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Three Leaf Recycled Paper Pencils (Pack of 10)",
    "description": "100% eco-friendly and wood-free pencils made from recycled paper. Features 2 HB graphite, non-toxic construction, and a latex-free eraser for sustainable writing.",
    "price": 9.99,
    "category": "Eco-friendly",
    "brand": "Three Leaf",
    "image": "https://m.media-amazon.com/images/I/81TL4YEfS+L._AC_SX679_.jpg",
    "stock": 120,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Philips AUT9340 Reverse Osmosis System (400 GPD)",
    "description": "Tankless under-sink water filter system with 2.3:1 pure-to-drain filtration. Reduces TDS and is NSF/ANSI 372 certified. No standing water for a clean and eco-friendly water solution.",
    "price": 449,
    "category": "Eco-friendly",
    "brand": "Philips",
    "image": "https://m.media-amazon.com/images/I/619rM-YuwsL._SX522_.jpg",
    "stock": 30,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Giusti - Aceto Balsamico di Modena IGP 3 Gold Medals (Riccardo Giusti)",
    "description": "Classic gourmet balsamic vinegar aged in centuries-old oak barrels. Rich and dense with notes of plum, red fruits, honey, and vanilla. Perfect for dressings and finishing dishes.",
    "price": 32.5,
    "category": "Gourmet Food",
    "brand": "Giusti",
    "image": "https://m.media-amazon.com/images/I/91tA8GmkHhL._SX679_.jpg",
    "stock": 25,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "GHIRARDELLI Minis Milk Chocolate Assortment (12.3 oz Bag)",
    "description": "A premium variety bag of bite-sized Ghirardelli milk chocolate squares. Includes Milk Chocolate, Milk Chocolate Caramel, and Milk Chocolate Sea Salt Caramel flavors.",
    "price": 14.99,
    "category": "Gourmet Food",
    "brand": "Ghirardelli",
    "image": "https://m.media-amazon.com/images/I/81Fse3Y24gL._SX679_.jpg",
    "stock": 40,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Lee Kum Kee Chili Garlic Sauce (8 oz - 2 Pack)",
    "description": "Chili & garlic savory hot paste, perfect for dipping, stir-frying, seafood, vegetables, and noodles. Made from fully ripened chiles blended with minced garlic for a spicy and savory kick.",
    "price": 15.99,
    "category": "Gourmet Food",
    "brand": "Lee Kum Kee",
    "image": "https://m.media-amazon.com/images/I/71qmXsRWvAL._SX679_PIbundle-2,TopRight,0,0_SX679SY487SH20_.jpg",
    "stock": 15,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "La Tourangelle White Truffle Oil & Black Truffle Oil Set",
    "description": "Complex gourmet earthy flavor infusion set. Includes one bottle of White Truffle Oil and one bottle of Black Truffle Oil (8.45 fl oz each). Perfect for finishing pasta, risotto, or gourmet appetizers.",
    "price": 26.99,
    "category": "Gourmet Food",
    "brand": "La Tourangelle",
    "image": "https://m.media-amazon.com/images/I/71behXkGgtL._SX679_.jpg",
    "stock": 30,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Manukora Raw Manuka Honey (MGO 600+)",
    "description": "Premium New Zealand honey, non-GMO and fully traceable from hive to hand. Provides high-grade MGO 600+ for daily wellness and immune support. 250g (8.82 Oz) jar.",
    "price": 59.99,
    "category": "Gourmet Food",
    "brand": "Manukora",
    "image": "https://m.media-amazon.com/images/I/71ZcSIy7NCL._SX679_.jpg",
    "stock": 50,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Smirly Large Bamboo Charcuterie Board Set",
    "description": "Natural bamboo charcuterie tray and cheese platter with accessories. Includes slide-out drawers, cheese knives, and slate labels. Ideal for entertaining and professional food presentation.",
    "price": 55.99,
    "category": "Gourmet Food",
    "brand": "Smirly",
    "image": "https://m.media-amazon.com/images/I/81y3lJQ-JuL._AC_SX679_.jpg",
    "stock": 12,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Illy Intenso Espresso Ground Coffee (Pack of 3)",
    "description": "Dark roast ground coffee with a robust and full-flavored profile featuring notes of deep cocoa. All-natural, no preservatives, in 4.4oz pressurized tins for maximum freshness.",
    "price": 21.99,
    "category": "Gourmet Food",
    "brand": "Illy",
    "image": "https://m.media-amazon.com/images/I/51a0Minh6+L._SX679_PIbundle-3,TopRight,0,0_AA679SH20_.jpg",
    "stock": 20,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "McCormick Gourmet Global Selects White Summer Truffle Salt (Pack of 2)",
    "description": "Premium French white summer truffle salt. Hand-selected for a rich, earthy aroma. Perfect for elevating pasta, eggs, and gourmet dishes. 3 oz each.",
    "price": 18.99,
    "category": "Gourmet Food",
    "brand": "McCormick",
    "image": "https://m.media-amazon.com/images/I/81508gr64iL._SY879_PIbundle-2,TopRight,0,0_SX637SY879SH20_.jpg",
    "stock": 35,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Momofuku Extra Spicy Chili Crunch by David Chang (2 Pack)",
    "description": "Extra spicy chili oil by chef David Chang, packed with crunchy garlic, shallots, and peppers. Versatile gourmet crisp for cooking, dipping, or topping. 5.5 ounces each.",
    "price": 24.99,
    "category": "Gourmet Food",
    "brand": "Momofuku",
    "image": "https://m.media-amazon.com/images/I/81IEWPqjk3L._SX679_PIbundle-2,TopRight,0,0_SX679SY348SH20_.jpg",
    "stock": 60,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Fortnum & Mason Darjeeling Finest Tippy Golden Flowery Orange Pekoe",
    "description": "Premium loose leaf Darjeeling tea from the foothills of the Himalayas. Features a delicate, floral flavor in an iconic 125g gift tin caddy for maximum freshness.",
    "price": 34,
    "category": "Gourmet Food",
    "brand": "Fortnum & Mason",
    "image": "https://m.media-amazon.com/images/I/61k7ufJKh-L._SX679_.jpg",
    "stock": 10,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Oura Ring Gen3 Heritage - Black - Size 8",
    "description": "Advanced smart ring for sleep tracking, heart rate monitoring, and fitness tracking. Durable titanium construction with 5-7 days of battery life. Size first with Oura Sizing Kit for a perfect fit.",
    "price": 349,
    "category": "Wellness Tech & Biohacking",
    "brand": "Oura",
    "image": "https://m.media-amazon.com/images/I/717Wxs+uG9L._AC_SX679_.jpg",
    "stock": 15,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Hyperice Normatec 3 Legs - Compression Therapy",
    "description": "Dynamic air compression system for faster recovery and improved circulation. Features 7 levels of pressure, ZoneBoost technology, and Bluetooth app control for personalized recovery sessions.",
    "price": 799,
    "category": "Wellness Tech & Biohacking",
    "brand": "Hyperice",
    "image": "https://m.media-amazon.com/images/I/61HxgzT2wfL._AC_SY879_.jpg",
    "stock": 10,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "WHOOP 4.0 with 12 Month Subscription",
    "description": "Screen-free wearable health and fitness tracker with a 12-month subscription included. Features continuous monitoring of heart rate, sleep, strain, and recovery for performance optimization.",
    "price": 239,
    "category": "Wellness Tech & Biohacking",
    "brand": "WHOOP",
    "image": "https://m.media-amazon.com/images/I/71CQ6esBqFL._AC_SX679_.jpg",
    "stock": 25,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Hooga Red Light Therapy Device - HG300",
    "description": "Targeted red and near-infrared light therapy panel with 660nm and 850nm wavelengths. Clinically proven for skin health, energy production, and reducing inflammation.",
    "price": 159,
    "category": "Wellness Tech & Biohacking",
    "brand": "Hooga",
    "image": "https://m.media-amazon.com/images/I/61CRrp39crL._AC_SX679_.jpg",
    "stock": 20,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Luminette 3 Light Therapy Glasses",
    "description": "Portable light therapy device to combat SAD and jet lag. Designed to be worn while multitasking, boosting energy levels and regulating sleep cycles.",
    "price": 199,
    "category": "Wellness Tech & Biohacking",
    "brand": "Luminette",
    "image": "https://m.media-amazon.com/images/I/71RyJOQG9WL._AC_SX679_.jpg",
    "stock": 15,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Beautyrest Sleeptracker Monitor – Wearable-Free Sleep Tracker",
    "description": "Advanced wearable-free sleep monitor with highly accurate sensors to track heart rate, breathing, and sleep stages. Intuitive app and Alexa enabled for effortless sleep analysis.",
    "price": 179,
    "category": "Wellness Tech & Biohacking",
    "brand": "Beautyrest",
    "image": "https://m.media-amazon.com/images/I/51hkoWF1qLL._AC_SX679_.jpg",
    "stock": 15,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "iHealth Gluco+ Wireless Smart Blood Glucose Monitor Kit",
    "description": "Comprehensive smart diabetes testing kit including wireless glucose monitor, 100 strips, and 100 lancets. Syncs with a free app for easy home monitoring and data tracking.",
    "price": 64.99,
    "category": "Wellness Tech & Biohacking",
    "brand": "iHealth",
    "image": "https://m.media-amazon.com/images/I/81XjC6hqteL._SX522_.jpg",
    "stock": 30,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "BFP BFP65011700 Health Smart Bracelet (Black)",
    "description": "Advanced activity and fitness tracker with 24/7 heart rate, blood pressure, and sleep monitoring. Features a waterproof design and syncs with a free app for health data tracking.",
    "price": 49.99,
    "category": "Wellness Tech & Biohacking",
    "brand": "Bclsks",
    "image": "https://m.media-amazon.com/images/I/71l8dSAeGHL._AC_SX679_.jpg",
    "stock": 40,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Muse S Athena: The Brain Sensing Headband",
    "description": "Advanced neurofeedback device for deep sleep boost and meditation tracking. Features EEG and fNIRS sensors to monitor brain activity, heart rate, and breathing in real-time. Carbon (Dark Grey).",
    "price": 399.99,
    "category": "Wellness Tech & Biohacking",
    "brand": "Muse",
    "image": "https://m.media-amazon.com/images/I/71kluidNsjL._AC_SX679_.jpg",
    "stock": 20,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Cholas Red Light Therapy for Face & Body",
    "description": "Advanced 5-head red and near-infrared light therapy device with adjustable stand. Features 5 levels of brightness and 660nm/850nm wavelengths for full body muscle recovery and skin health.",
    "price": 139,
    "category": "Wellness Tech & Biohacking",
    "brand": "Cholas",
    "image": "https://m.media-amazon.com/images/I/61KSJpB0JbL._AC_SX679_.jpg",
    "stock": 12,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Ray-Ban RB2132 New Wayfarer Sunglasses",
    "description": "A modern update to the classic Wayfarer shape. Features durable nylon frames and G-15 polarized lenses for superior clarity and 100% UV protection.",
    "price": 155,
    "category": "Eyewear",
    "brand": "Ray-Ban",
    "image": "https://m.media-amazon.com/images/I/41B1+gKMZaL._AC_SX695_.jpg",
    "stock": 25,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Oakley Holbrook OO9102 Square Sunglasses (Bundle Kit)",
    "description": "Iconic American frame design accented by metal rivets and Oakley icons. Includes a bundle kit with a white microfiber cleaning bag and Prizm lens technology for enhanced color and contrast.",
    "price": 142,
    "category": "Eyewear",
    "brand": "Oakley",
    "image": "https://m.media-amazon.com/images/I/61zZsDLBJUL._AC_SX679_.jpg",
    "stock": 20,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "GUNNAR - Blue Light Reading Glasses - Vertex",
    "description": "Advanced reading glasses featuring Vertex frame style. Patented lens technology blocks 65% of harmful blue light and 100% UV, reducing digital eye strain and dry eyes during long screen sessions.",
    "price": 49.99,
    "category": "Eyewear",
    "brand": "Gunnar Optiks",
    "image": "https://m.media-amazon.com/images/I/51qrQPF0i-L._AC_SX679_.jpg",
    "stock": 45,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Persol PO3019S Square Sunglasses",
    "description": "Handmade Italian acetate frames with the iconic Silver Arrow and Meflecto system for a flexible fit. Timeless square silhouette with crystal lenses.",
    "price": 260,
    "category": "Eyewear",
    "brand": "Persol",
    "image": "https://m.media-amazon.com/images/I/51wvJcShCuL._AC_SX679_.jpg",
    "stock": 12,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Cyxus Blue Light Blocking Glasses",
    "description": "Classic retro frame designed to reduce eye fatigue and headaches caused by prolonged computer use. Transparent lenses with 100% UV protection.",
    "price": 25,
    "category": "Eyewear",
    "brand": "Cyxus",
    "image": "https://m.media-amazon.com/images/I/51Mo-OEjsPL._AC_SX679_.jpg",
    "stock": 100,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Smith Lowdown 2 Sunglasses with Chromapop Lenses",
    "description": "Polarized lifestyle sunglasses for men and women featuring ChromaPop lens technology for enhanced color and clarity. Lightweight Evolve bio-based frame with no-slip Megol nose pads.",
    "price": 179,
    "category": "Eyewear",
    "brand": "Smith",
    "image": "https://m.media-amazon.com/images/I/61FvtWkfe7L._AC_SX679_.jpg",
    "stock": 18,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Carhartt Billings Safety Glasses",
    "description": "High-performance safety eyewear with a wrap-around frame for a wide field of vision. Scratch-resistant polycarbonate lenses with anti-fog coating.",
    "price": 12.5,
    "category": "Eyewear",
    "brand": "Carhartt",
    "image": "https://m.media-amazon.com/images/I/51IgMV7dmrL._AC_SX679_.jpg",
    "stock": 150,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Maui Jim Peahi Polarized Wrap Sunglasses",
    "description": "High-performance wrap sunglasses designed for maximum coverage. PolarizedPlus2 lens technology wipes out glare and enhances colors.",
    "price": 249,
    "category": "Eyewear",
    "brand": "Maui Jim",
    "image": "https://m.media-amazon.com/images/I/41zVslm5OwL._AC_SX679_.jpg",
    "stock": 10,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Reebok Nitrous Smart Audio Sunglasses (Black Polarized)",
    "description": "Unisex HiFi Bluetooth sport glasses powered by Lucyd. Features polarized lenses with 100% UV protection and open-ear audio for music and calls while staying aware of your surroundings.",
    "price": 125,
    "category": "Eyewear",
    "brand": "Reebok",
    "image": "https://m.media-amazon.com/images/I/411UVQrlS-L._AC_SX679_.jpg",
    "stock": 15,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Costa Del Mar Blackfin Polarized Sunglasses",
    "description": "Serious performance for serious anglers. Hydrolite co-molded lining for a no-slip fit and 580G glass polarized lenses for superior clarity.",
    "price": 198,
    "category": "Eyewear",
    "brand": "Costa Del Mar",
    "image": "https://m.media-amazon.com/images/I/51SBOtRZqHL._AC_SX679_.jpg",
    "stock": 22,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Celestron NexStar 8SE Schmidt-Cassegrain Telescope",
    "description": "The world's most beloved computerized telescope with an 8-inch aperture. Features a fully automated GoTo mount with a database of 40,000+ celestial objects.",
    "price": 1599,
    "category": "Astronomy & Stargazing",
    "brand": "Celestron",
    "image": "https://m.media-amazon.com/images/I/51oEYw1ZK7L._SX522_.jpg",
    "stock": 5,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Celestron PowerSeeker 70AZ Refractor Telescope",
    "description": "Perfect beginner telescope with all-coated glass optical components for crisp and clear images. Includes a complete accessory kit with eyepieces and a tripod.",
    "price": 129,
    "category": "Astronomy & Stargazing",
    "brand": "Celestron",
    "image": "https://m.media-amazon.com/images/I/51A2C8kPkPL._AC_SX679_.jpg",
    "stock": 30,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Sky-Watcher Flextube 200 Dobsonian 8-inch Telescope",
    "description": "Large 8-inch aperture collapsible Dobsonian telescope (S11700). Features a portable, easy-to-use design with a 1200mm focal length, perfect for viewing deep-sky objects with high-resolution clarity.",
    "price": 655,
    "category": "Astronomy & Stargazing",
    "brand": "Sky-Watcher",
    "image": "https://m.media-amazon.com/images/I/61ercbtk5fL._AC_SX679_.jpg",
    "stock": 12,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Celestron SkyMaster 25x100 Binoculars",
    "description": "Giant aperture astronomy binoculars designed for long-distance terrestrial and astronomical viewing. Features BaK-4 prisms and multi-coated optics.",
    "price": 499,
    "category": "Astronomy & Stargazing",
    "brand": "Celestron",
    "image": "https://m.media-amazon.com/images/I/51cIhbB-m3L._AC_SX679_.jpg",
    "stock": 8,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Thames & Kosmos Planetarium Projector - Essential STEM Tool",
    "description": "Dual projector that illuminates your room as a planetarium theater. Casts real star maps and space-themed images from the James Webb Space Telescope. Features an adjustable projection angle.",
    "price": 39.95,
    "category": "Astronomy & Stargazing",
    "brand": "Thames & Kosmos",
    "image": "https://m.media-amazon.com/images/I/71TIjmpWyoL._AC_SX679_.jpg",
    "stock": 15,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "ZWO ASI2600MC Air Color Camera",
    "description": "All-in-one astrophotography solution combining a high-performance APS-C color sensor with integrated wireless control. Features 26MP resolution, extremely low noise, and zero amp glow.",
    "price": 1999,
    "category": "Astronomy & Stargazing",
    "brand": "ZWO",
    "image": "https://m.media-amazon.com/images/I/51UObHfq17L._AC_SX679_.jpg",
    "stock": 10,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Unistellar eVscope 2 Smart Digital Telescope",
    "description": "Cutting-edge smart telescope with Nikon eyepiece technology. Amplifies light in real-time to show colorful galaxies and nebulae even in light-polluted cities.",
    "price": 4899,
    "category": "Astronomy & Stargazing",
    "brand": "Unistellar",
    "image": "https://m.media-amazon.com/images/I/618MRuimntL._AC_SX679_.jpg",
    "stock": 3,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Meezaa 90mm Refractor Telescope for Adults",
    "description": "High-powered professional 800mm refractor telescope for astronomy beginners. Fully multi-coated optics with AZ mount tripod, phone adapter, and custom carry bag for portable stargazing.",
    "price": 219,
    "category": "Astronomy & Stargazing",
    "brand": "Meezaa",
    "image": "https://m.media-amazon.com/images/I/71uLTihe-QL._AC_SX679_.jpg",
    "stock": 7,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": true,
    "discountPrice": 175.63
  },
  {
    "title": "Celestron StarSense Explorer LT 114AZ",
    "description": "The first telescope that uses your smartphone to analyze the night sky and calculate its position in real-time. Features a 114mm Newtonian reflector.",
    "price": 245,
    "category": "Astronomy & Stargazing",
    "brand": "Celestron",
    "image": "https://m.media-amazon.com/images/I/61LZrId7FvL._AC_SX679_.jpg",
    "stock": 20,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  },
  {
    "title": "Baader Planetarium 2\" 7.5nm Solar Continuum Filter",
    "description": "Professional solar filter for enhancing contrast in solar photography and observation. Features a 7.5nm narrow bandpass to reveal solar granulation and sunspot details with exceptional clarity.",
    "price": 185,
    "category": "Astronomy & Stargazing",
    "brand": "Baader",
    "image": "https://m.media-amazon.com/images/I/61CY7-YyLlL._AC_SX679_.jpg",
    "stock": 50,
    "rating": {
      "rate": 0,
      "count": 0
    },
    "onSale": false,
    "discountPrice": null
  }
];

module.exports = products;