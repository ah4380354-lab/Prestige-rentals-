<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Prestige Rentals | Melbourne</title>
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
  <style>
    *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

    :root {
      --black:   #0d0d0d;
      --charcoal:#1a1a1a;
      --grey:    #2a2a2a;
      --mid:     #6b7280;
      --light:   #f4f4f5;
      --white:   #ffffff;
      --blue:    #2563eb;
      --blue-lt: #3b82f6;
      --blue-glow: rgba(37,99,235,0.25);
    }

    html { scroll-behavior: smooth; }

    body {
      font-family: 'Inter', sans-serif;
      background: var(--black);
      color: var(--white);
      overflow-x: hidden;
    }

    /* ── NAV ── */
    nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 100;
      display: flex; align-items: center; justify-content: space-between;
      padding: 0 48px;
      height: 72px;
      background: rgba(13,13,13,0.7);
      backdrop-filter: blur(18px);
      border-bottom: 1px solid rgba(255,255,255,0.06);
    }
    .nav-logo {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 26px;
      letter-spacing: 3px;
      color: var(--white);
      text-decoration: none;
    }
    .nav-logo span { color: var(--blue); }
    .nav-links { display: flex; gap: 36px; list-style: none; }
    .nav-links a {
      color: var(--mid);
      text-decoration: none;
      font-size: 13px;
      font-weight: 500;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      transition: color .2s;
    }
    .nav-links a:hover { color: var(--white); }
    .nav-cta {
      background: var(--blue);
      color: var(--white) !important;
      padding: 10px 22px;
      border-radius: 4px;
      transition: background .2s !important;
    }
    .nav-cta:hover { background: var(--blue-lt) !important; color: var(--white) !important; }

    /* ── HERO ── */
    .hero {
      position: relative;
      height: 100vh;
      min-height: 700px;
      display: flex; align-items: flex-end;
      overflow: hidden;
    }
    .hero-bg {
      position: absolute; inset: 0;
      background:
        linear-gradient(to right, rgba(13,13,13,0.92) 38%, rgba(13,13,13,0.35) 100%),
        url('https://images.unsplash.com/photo-1617654112368-307921291f42?w=1800&q=90') center/cover no-repeat;
    }
    .hero-content {
      position: relative; z-index: 2;
      padding: 0 48px 96px;
      max-width: 700px;
    }
    .hero-eyebrow {
      font-size: 11px; font-weight: 600; letter-spacing: 4px;
      text-transform: uppercase; color: var(--blue);
      margin-bottom: 20px;
    }
    .hero-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(64px, 9vw, 120px);
      line-height: .93;
      color: var(--white);
      margin-bottom: 28px;
    }
    .hero-title span { color: var(--blue); }
    .hero-sub {
      font-size: 15px; font-weight: 300; color: rgba(255,255,255,0.6);
      line-height: 1.7; max-width: 420px; margin-bottom: 44px;
    }
    .hero-btns { display: flex; gap: 16px; flex-wrap: wrap; }
    .btn-primary {
      background: var(--blue);
      color: var(--white);
      padding: 15px 34px;
      border-radius: 4px;
      font-size: 13px; font-weight: 600; letter-spacing: 1.5px;
      text-transform: uppercase; text-decoration: none;
      transition: background .2s, transform .15s;
      display: inline-block;
    }
    .btn-primary:hover { background: var(--blue-lt); transform: translateY(-2px); }
    .btn-ghost {
      border: 1px solid rgba(255,255,255,0.25);
      color: var(--white);
      padding: 15px 34px;
      border-radius: 4px;
      font-size: 13px; font-weight: 600; letter-spacing: 1.5px;
      text-transform: uppercase; text-decoration: none;
      transition: border-color .2s, transform .15s;
      display: inline-block;
    }
    .btn-ghost:hover { border-color: var(--white); transform: translateY(-2px); }

    .hero-scroll {
      position: absolute; bottom: 36px; right: 48px;
      display: flex; align-items: center; gap: 10px;
      font-size: 10px; letter-spacing: 3px; color: var(--mid);
      text-transform: uppercase;
    }
    .hero-scroll::before {
      content: '';
      display: block; width: 40px; height: 1px;
      background: var(--blue);
    }

    /* ── STATS BAR ── */
    .stats-bar {
      background: var(--charcoal);
      border-top: 1px solid rgba(255,255,255,0.06);
      border-bottom: 1px solid rgba(255,255,255,0.06);
      display: flex; justify-content: center; gap: 0;
    }
    .stat-item {
      flex: 1; max-width: 220px;
      padding: 32px 24px;
      text-align: center;
      border-right: 1px solid rgba(255,255,255,0.06);
    }
    .stat-item:last-child { border-right: none; }
    .stat-num {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 42px; color: var(--blue);
      display: block; line-height: 1;
    }
    .stat-label {
      font-size: 10px; font-weight: 500; letter-spacing: 2px;
      color: var(--mid); text-transform: uppercase; margin-top: 6px;
    }

    /* ── SECTION SHARED ── */
    section { padding: 100px 48px; }
    .section-eye {
      font-size: 10px; font-weight: 600; letter-spacing: 4px;
      text-transform: uppercase; color: var(--blue); margin-bottom: 14px;
    }
    .section-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(38px, 5vw, 64px);
      line-height: 1; color: var(--white); margin-bottom: 18px;
    }
    .section-sub {
      font-size: 14px; color: var(--mid); line-height: 1.8;
      max-width: 500px;
    }
    .section-head { margin-bottom: 56px; }

    /* ── FEATURE (G WAGON) ── */
    .feature { background: var(--charcoal); }
    .feature-inner {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 64px; align-items: center;
      max-width: 1200px; margin: 0 auto;
    }
    .feature-img-wrap {
      position: relative; border-radius: 6px; overflow: hidden;
    }
    .feature-img-wrap img {
      width: 100%; display: block;
      filter: brightness(.95);
      transition: transform .6s ease;
    }
    .feature-img-wrap:hover img { transform: scale(1.03); }
    .feature-badge {
      position: absolute; top: 20px; left: 20px;
      background: var(--blue); color: var(--white);
      font-size: 10px; font-weight: 700; letter-spacing: 2px;
      text-transform: uppercase; padding: 6px 14px; border-radius: 3px;
    }
    .feature-tag {
      font-size: 10px; font-weight: 600; letter-spacing: 4px;
      text-transform: uppercase; color: var(--blue); margin-bottom: 14px;
    }
    .feature-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(46px, 6vw, 80px);
      line-height: .95; color: var(--white); margin-bottom: 20px;
    }
    .feature-title span { color: var(--blue); }
    .feature-desc {
      font-size: 14px; color: var(--mid); line-height: 1.85;
      margin-bottom: 36px;
    }
    .feature-specs {
      display: grid; grid-template-columns: 1fr 1fr;
      gap: 16px; margin-bottom: 40px;
    }
    .spec-item {
      background: var(--grey);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 4px; padding: 14px 16px;
    }
    .spec-val {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 24px; color: var(--white); display: block;
    }
    .spec-key {
      font-size: 10px; color: var(--mid); letter-spacing: 1.5px;
      text-transform: uppercase; margin-top: 2px;
    }
    .feature-price {
      display: flex; align-items: baseline; gap: 6px; margin-bottom: 28px;
    }
    .price-val {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 52px; color: var(--blue); line-height: 1;
    }
    .price-label { font-size: 13px; color: var(--mid); }

    /* ── FLEET GRID ── */
    .fleet { background: var(--black); }
    .fleet-inner { max-width: 1200px; margin: 0 auto; }
    .fleet-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }
    .car-card {
      background: var(--charcoal);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 6px;
      overflow: hidden;
      transition: transform .25s, border-color .25s, box-shadow .25s;
      cursor: pointer;
    }
    .car-card:hover {
      transform: translateY(-6px);
      border-color: var(--blue);
      box-shadow: 0 16px 48px rgba(37,99,235,0.18);
    }
    .car-img {
      width: 100%; height: 210px;
      object-fit: cover;
      display: block;
      transition: transform .4s;
    }
    .car-card:hover .car-img { transform: scale(1.04); }
    .car-info { padding: 20px 22px 24px; }
    .car-category {
      font-size: 9px; font-weight: 700; letter-spacing: 2.5px;
      text-transform: uppercase; color: var(--blue); margin-bottom: 6px;
    }
    .car-name {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 26px; color: var(--white); margin-bottom: 10px;
    }
    .car-tags { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 18px; }
    .car-tag {
      font-size: 10px; color: var(--mid); letter-spacing: 1px;
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 3px; padding: 4px 9px;
    }
    .car-footer {
      display: flex; align-items: center; justify-content: space-between;
    }
    .car-price {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 28px; color: var(--white);
    }
    .car-price-label { font-size: 11px; color: var(--mid); margin-top: 2px; }
    .car-btn {
      background: transparent; border: 1px solid rgba(255,255,255,0.15);
      color: var(--white); font-size: 11px; font-weight: 600;
      letter-spacing: 1.5px; text-transform: uppercase;
      padding: 9px 18px; border-radius: 3px; cursor: pointer;
      transition: background .2s, border-color .2s;
    }
    .car-btn:hover { background: var(--blue); border-color: var(--blue); }

    /* ── WHY SECTION ── */
    .why { background: var(--charcoal); }
    .why-inner { max-width: 1200px; margin: 0 auto; }
    .why-grid {
      display: grid; grid-template-columns: repeat(4, 1fr);
      gap: 2px; margin-top: 56px;
    }
    .why-item {
      background: var(--grey);
      padding: 36px 28px;
      border: 1px solid rgba(255,255,255,0.05);
      transition: background .2s;
    }
    .why-item:hover { background: #2e2e2e; }
    .why-icon {
      font-size: 28px; margin-bottom: 18px; display: block;
    }
    .why-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 22px; color: var(--white); margin-bottom: 10px;
      letter-spacing: .5px;
    }
    .why-desc {
      font-size: 13px; color: var(--mid); line-height: 1.75;
    }

    /* ── GALLERY ── */
    .gallery { background: var(--black); padding: 80px 0; overflow: hidden; }
    .gallery-label {
      padding: 0 48px; margin-bottom: 32px;
    }
    .gallery-track {
      display: flex; gap: 16px;
      animation: slide 30s linear infinite;
      width: max-content;
    }
    .gallery-track:hover { animation-play-state: paused; }
    .gallery-slide {
      width: 380px; height: 240px; flex-shrink: 0;
      border-radius: 6px; overflow: hidden;
    }
    .gallery-slide img {
      width: 100%; height: 100%; object-fit: cover;
      transition: transform .4s;
      filter: brightness(.85);
    }
    .gallery-slide:hover img { transform: scale(1.06); filter: brightness(1); }

    @keyframes slide {
      from { transform: translateX(0); }
      to   { transform: translateX(-50%); }
    }

    /* ── PROCESS ── */
    .process { background: var(--charcoal); }
    .process-inner { max-width: 1000px; margin: 0 auto; }
    .process-steps {
      display: grid; grid-template-columns: repeat(4, 1fr);
      gap: 0; margin-top: 56px; position: relative;
    }
    .process-steps::before {
      content: '';
      position: absolute; top: 28px; left: 12.5%; right: 12.5%;
      height: 1px; background: rgba(37,99,235,0.3);
    }
    .process-step { text-align: center; padding: 0 16px; }
    .step-num {
      width: 56px; height: 56px; border-radius: 50%;
      background: var(--blue); color: var(--white);
      font-family: 'Bebas Neue', sans-serif; font-size: 22px;
      display: flex; align-items: center; justify-content: center;
      margin: 0 auto 20px; border: 3px solid var(--charcoal);
      position: relative; z-index: 1;
    }
    .step-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 18px; color: var(--white); margin-bottom: 8px;
    }
    .step-desc { font-size: 12px; color: var(--mid); line-height: 1.7; }

    /* ── CONTACT ── */
    .contact { background: var(--black); }
    .contact-inner {
      max-width: 1100px; margin: 0 auto;
      display: grid; grid-template-columns: 1fr 1fr;
      gap: 80px; align-items: start;
    }
    .contact-info-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(40px,5vw,66px); color: var(--white); line-height: .95;
      margin-bottom: 22px;
    }
    .contact-info-title span { color: var(--blue); }
    .contact-info-sub {
      font-size: 14px; color: var(--mid); line-height: 1.8; margin-bottom: 44px;
    }
    .contact-links { display: flex; flex-direction: column; gap: 16px; }
    .contact-link {
      display: flex; align-items: center; gap: 16px;
      text-decoration: none; padding: 18px 22px;
      background: var(--charcoal);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 5px;
      transition: border-color .2s, background .2s, transform .15s;
    }
    .contact-link:hover {
      border-color: var(--blue); background: rgba(37,99,235,0.08);
      transform: translateX(4px);
    }
    .contact-link-icon {
      width: 44px; height: 44px; border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-size: 20px; flex-shrink: 0;
    }
    .icon-wa { background: rgba(37,211,102,0.15); }
    .icon-mail { background: rgba(37,99,235,0.15); }
    .icon-phone { background: rgba(251,191,36,0.12); }
    .contact-link-text strong {
      display: block; font-size: 13px; font-weight: 600;
      color: var(--white); margin-bottom: 3px;
    }
    .contact-link-text span {
      font-size: 12px; color: var(--mid);
    }
    .contact-form {
      background: var(--charcoal);
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 6px; padding: 40px;
    }
    .form-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 28px; color: var(--white); margin-bottom: 30px;
      letter-spacing: .5px;
    }
    .form-group { margin-bottom: 18px; }
    .form-group label {
      display: block; font-size: 10px; font-weight: 600;
      letter-spacing: 2px; text-transform: uppercase;
      color: var(--mid); margin-bottom: 8px;
    }
    .form-group input,
    .form-group select,
    .form-group textarea {
      width: 100%;
      background: var(--grey);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 4px; color: var(--white);
      font-family: 'Inter', sans-serif;
      font-size: 14px; padding: 13px 16px;
      outline: none;
      transition: border-color .2s;
      appearance: none;
    }
    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus { border-color: var(--blue); }
    .form-group textarea { resize: vertical; min-height: 90px; }
    .form-group select option { background: var(--grey); }
    .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
    .form-submit {
      width: 100%; background: var(--blue); border: none;
      color: var(--white); font-family: 'Inter', sans-serif;
      font-size: 13px; font-weight: 700; letter-spacing: 2px;
      text-transform: uppercase; padding: 16px;
      border-radius: 4px; cursor: pointer;
      transition: background .2s, transform .15s; margin-top: 6px;
    }
    .form-submit:hover { background: var(--blue-lt); transform: translateY(-2px); }

    /* ── FOOTER ── */
    footer {
      background: var(--charcoal);
      border-top: 1px solid rgba(255,255,255,0.06);
      padding: 48px;
      display: flex; align-items: center; justify-content: space-between;
      flex-wrap: wrap; gap: 20px;
    }
    .footer-logo {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 22px; letter-spacing: 3px; color: var(--white);
    }
    .footer-logo span { color: var(--blue); }
    .footer-copy { font-size: 12px; color: var(--mid); }
    .footer-links { display: flex; gap: 28px; }
    .footer-links a {
      font-size: 11px; color: var(--mid); text-decoration: none;
      letter-spacing: 1px; text-transform: uppercase;
      transition: color .2s;
    }
    .footer-links a:hover { color: var(--white); }

    /* ── MOBILE ── */
    @media (max-width: 900px) {
      nav { padding: 0 24px; }
      .nav-links { display: none; }
      section { padding: 72px 24px; }
      .feature-inner { grid-template-columns: 1fr; gap: 40px; }
      .fleet-grid { grid-template-columns: 1fr; }
      .why-grid { grid-template-columns: 1fr 1fr; }
      .process-steps { grid-template-columns: 1fr 1fr; gap: 32px; }
      .process-steps::before { display: none; }
      .contact-inner { grid-template-columns: 1fr; gap: 48px; }
      .hero-content { padding: 0 24px 72px; }
      .hero-scroll { display: none; }
      footer { flex-direction: column; padding: 36px 24px; text-align: center; }
    }
    @media (max-width: 600px) {
      .why-grid { grid-template-columns: 1fr; }
      .process-steps { grid-template-columns: 1fr; }
      .form-row { grid-template-columns: 1fr; }
      .fleet-grid { grid-template-columns: 1fr; }
      .contact-form { padding: 28px 20px; }
    }
  </style>
</head>
<body>

<!-- NAV -->
<nav>
  <a href="#" class="nav-logo">PRESTIGE<span>.</span></a>
  <ul class="nav-links">
    <li><a href="#fleet">Fleet</a></li>
    <li><a href="#why">Why Us</a></li>
    <li><a href="#gallery">Gallery</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#contact" class="nav-cta">Book Now</a></li>
  </ul>
</nav>

<!-- HERO -->
<section class="hero" id="home">
  <div class="hero-bg"></div>
  <div class="hero-content">
    <p class="hero-eyebrow">Melbourne's Premier Luxury Fleet</p>
    <h1 class="hero-title">DRIVE<br/>LIKE IT'S<br/><span>YOURS.</span></h1>
    <p class="hero-sub">You don't browse for a rental. You choose a statement. G Wagons, luxury SUVs, and sports cars delivered to your door across Melbourne.</p>
    <div class="hero-btns">
      <a href="#fleet" class="btn-primary">View Fleet</a>
      <a href="#contact" class="btn-ghost">Book Now</a>
    </div>
  </div>
  <div class="hero-scroll">Scroll</div>
</section>

<!-- STATS -->
<div class="stats-bar">
  <div class="stat-item">
    <span class="stat-num">40+</span>
    <span class="stat-label">Luxury Vehicles</span>
  </div>
  <div class="stat-item">
    <span class="stat-num">5★</span>
    <span class="stat-label">Avg Rating</span>
  </div>
  <div class="stat-item">
    <span class="stat-num">24/7</span>
    <span class="stat-label">Concierge</span>
  </div>
  <div class="stat-item">
    <span class="stat-num">300+</span>
    <span class="stat-label">Happy Clients</span>
  </div>
  <div class="stat-item">
    <span class="stat-num">3hr</span>
    <span class="stat-label">Delivery Radius</span>
  </div>
</div>

<!-- FEATURE — G WAGON -->
<section class="feature" id="gwagon">
  <div class="feature-inner">
    <div class="feature-img-wrap">
      <img src="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=900&q=90" alt="Mercedes G Wagon" />
      <span class="feature-badge">Signature Vehicle</span>
    </div>
    <div>
      <p class="feature-tag">Most Wanted</p>
      <h2 class="feature-title">MERCEDES<br/><span>G WAGON</span></h2>
      <p class="feature-desc">
        The G Wagon isn't just a car — it's a declaration. Built for those who command attention without asking for it. Bulletproof presence, hand-crafted inter
