"""Generate the plain-HTML Star Shuffle site into html-site/ (run from repo root: python3 scripts/build-html-site.py .)."""
import html, re, sys, urllib.parse
from pathlib import Path

REPO = Path(sys.argv[1])
OUT = REPO / "html-site"
SITE = "https://starshuffleofficial.com"
PHONE = "+91-9173629453"
TEL = "tel:+919173629453"
WA = "https://wa.me/919173629453"
IG = "https://www.instagram.com/i_akankshapande?obrf=bmt6MWs4NnVuNGo0"
IG2 = "https://www.instagram.com/star.shuffle?dlrf=b2x2d2FlaTBlMGk2"
YT = "https://youtu.be/i5qj59k8L38?si=szEG03TllncDsAKI"
YT_ID = "i5qj59k8L38"
NAME = "Astrologer Akanksha Pande"
TAG = "Global Lady Astrologer"
EXT = 'target="_blank" rel="noopener"'
e = html.escape

# SVG icon paths are shared with the Next.js version
paths = dict(re.findall(r'^\s+(\w+): "([^"]+)",$', (REPO / "src/components/icons.tsx").read_text(), re.M))
SPRITE = '<svg width="0" height="0" style="position:absolute" aria-hidden="true">' + "".join(
    f'<symbol id="i-{k}" viewBox="0 0 24 24"><path d="{v}"/></symbol>' for k, v in paths.items()) + "</svg>"

def ic(name, cls="ic"):
    return f'<svg class="{cls}" aria-hidden="true"><use href="#i-{name}"/></svg>'

def wa_link(topic):
    return WA + "?text=" + urllib.parse.quote(f"Hello Astrologer Akanksha Pande, I need guidance for {topic}.")

NAV = [("index.html", "Home"), ("about.html", "About Us"), ("services.html", "Services"), ("review.html", "Review"), ("contact.html", "Contact")]

def head_sec(eyebrow, title, text="", tag="h2"):
    p = f"<p>{e(text)}</p>" if text else ""
    return f'<div class="head"><span class="eyebrow">{e(eyebrow)}</span><{tag} class="h2">{e(title)}</{tag}><div class="divider">✧</div>{p}</div>'

def consult(topic):
    return (f'<div class="acts2"><a href="{TEL}" class="btn btn-navy btn-sm" aria-label="Call for {e(topic)}">{ic("phone")}Call</a>'
            f'<a href="{e(wa_link(topic))}" {EXT} class="btn btn-wa btn-sm" aria-label="WhatsApp for {e(topic)}">{ic("wa")}WhatsApp</a></div>')

def img(src, alt, w, h, cls="", lazy=True, extra=""):
    load = ' loading="lazy" decoding="async"' if lazy else ' fetchpriority="high"'
    c = f' class="{cls}"' if cls else ""
    return f'<img src="{src}" width="{w}" height="{h}" alt="{e(alt)}"{c}{load}{extra}>'

# ---------------------------------------------------------------- data
chips = [("Love Marriage Solution", "ring"), ("Love Problem Solution", "heart"), ("Get Your Ex Love Back", "return"), ("Family Problem Solution", "users"), ("Divorce Problem Solution", "scale")]
trust = [("100% Private", "Confidential consultation", "lock"), ("Personal Guidance", "Every case reviewed individually", "user"), ("Call &amp; WhatsApp", "Quick, easy access", "chat"), ("Worldwide", "Online consultation", "globe")]
guidance = [
    ("Parents Approval for Love Marriage", "Guidance to improve understanding and gain family support for your relationship.", "images/Parents-Approval-for-Love-Marriage.jpg"),
    ("Family Problem Solution", "Personalized support for misunderstandings, conflicts and lack of peace at home.", "images/Family-Problem-Solution.jpg"),
    ("GF/BF Problem Solution", "Guidance for distance, trust issues, frequent arguments and relationship confusion.", "images/GFBF-Problem-Solution.jpg"),
    ("Divorce Problem Solution", "Confidential guidance for couples facing separation, distance and marital conflict.", "images/Divorce-Problem-Solution.jpg"),
]
services = [
    ("Breakup Problem Solution", "Understand the causes of a breakup and explore the right path toward healing or reconciliation.", "images/Breakup-Problem-Solution.jpg", "broken"),
    ("Love Problem Solution", "Support for misunderstandings, emotional distance, trust issues and repeated conflicts.", "images/Love-Problem-Solution.jpg", "heart"),
    ("Get Your Ex Love Back", "Guidance for reconnecting with a former partner and understanding the reasons behind separation.", "images/Get-Your-Ex-Love-BackGet-Your-Ex-Love-Back.jpg", "return"),
    ("Husband Wife Dispute", "Confidential support for frequent arguments, communication gaps and lack of harmony.", "images/Husband-Wife-Dispute.jpg", "users"),
    ("Lost Love Back Specialist", "Focused guidance for separation, emotional disconnection or a broken relationship.", "images/Lost-Love-Back-Specialist.jpg", "heart"),
    ("Family Problem Solution", "Consultation for family disputes, domestic stress and restoring peace at home.", "images/Family-Problem-Solution.jpg", "home"),
    ("Love Marriage Specialist", "Guidance for couples facing family resistance, delays or uncertainty about love marriage.", "images/Love-Marriage-Specialist.jpg", "ring"),
    ("Divorce Problem Solution", "Private support for serious marital conflict, separation concerns or divorce-related stress.", "images/Divorce-Problem-Solution1.jpg", "scale"),
]
posters = [("001.jpg", "Lost Love Back"), ("002.jpg", "Family Problem Solution"), ("003.jpg", "Divorce Problem Solution")]
why = [
    ("Personalized Consultation", "Every case is carefully reviewed according to the client's individual situation.", "user"),
    ("Complete Confidentiality", "Personal details and consultation discussions are always kept private.", "lock"),
    ("Clear &amp; Honest Guidance", "Problems and possible solutions are explained clearly in simple language.", "chat"),
    ("Practical Remedies", "Suitable remedies are suggested according to the concern, without unrealistic promises.", "lamp"),
    ("Support for Life Concerns", "Guidance for love, marriage, relationships, family and personal challenges.", "heart"),
    ("Easy Call &amp; WhatsApp", "Connect quickly through call or WhatsApp without a complicated booking process.", "wa"),
]
vedic = [
    ("Kundali Reading", "A detailed study of your birth chart to understand strengths, challenges and the timing of important life events.", "chart"),
    ("Kundali Matching", "Compatibility analysis for marriage, with clear explanation of guna milan and any doshas found in the charts.", "ring"),
    ("Manglik Dosh Guidance", "Assessment of Mangal Dosha and suitable remedies for couples concerned about marriage delays or compatibility.", "sun"),
    ("Vastu Consultation", "Simple Vastu suggestions for homes and workplaces to encourage harmony, positivity and a more balanced environment.", "home"),
    ("Career &amp; Business", "Guidance on career direction, job changes and business decisions based on your planetary periods.", "brief"),
    ("Gemstone &amp; Remedies", "Personalized recommendations for gemstones, mantras and simple daily practices suited to your chart.", "lamp"),
]
service_list = ["Love Marriage Specialist", "Love Problem Solution", "Husband Wife Dispute", "Divorce Problem Solution", "Family Problem Solution", "Get Your Ex Love Back", "Breakup Problem Solution", "Career Problem Solution", "Kundali Matching", "Manglik Dosh Solution", "Vastu Solutions"]
pujas = [
    ("Nakshatra Shanti Puja", "Performed to reduce challenging planetary influences and bring stability, peace and clarity.", "star"),
    ("Pitra Dosh Puja", "Performed with respect for ancestors to support family harmony and emotional peace.", "users"),
    ("Shani Puja", "Focused on discipline, patience and protection during difficult Saturn-related phases.", "sun"),
    ("Puja for Peace", "A calming ritual for families experiencing stress, frequent conflict or lack of peace at home.", "lamp"),
    ("Lakshmi Puja", "Performed to invite blessings for prosperity, financial stability and abundance.", "star"),
    ("Puja for Wealth", "For those seeking better financial stability, business growth and career progress.", "brief"),
    ("Kaal Sarp Dosh Nivaran Puja", "Recommended after proper chart assessment to address Kaal Sarp Dosh and support progress.", "chart"),
    ("Puja for Marriage", "Ritual guidance for marriage delays, family resistance and compatibility concerns.", "ring"),
]
steps = [
    ("Reach Out Instantly", "Send a WhatsApp message or call directly to start your consultation.", "phone"),
    ("Share Your Concerns", "Tell us about your challenges in love, marriage, family, career or finance.", "chat"),
    ("Kundali Study", "Your birth chart and planetary positions are studied carefully and in depth.", "chart"),
    ("Practical Remedies", "Receive clear guidance and suitable remedies to move forward with confidence.", "lamp"),
]
reviews = [
    ("Pankaj Verma", "Lucknow, India", "Our families were strongly against our love marriage. The consultation helped us understand how to handle the situation calmly and communicate with our parents in a better way. Gradually, the misunderstandings reduced and we received their support."),
    ("Anjali Mehta", "Mumbai, India", "There were frequent arguments and tension in our home over small issues. After following the personalized guidance and suggested remedies, communication improved and the family environment became much more peaceful."),
    ("Rohit Sharma", "Hyderabad, India", "Trust issues and repeated arguments had created distance in my relationship. The consultation helped me understand the real problem and guided me toward better communication with my partner."),
    ("Simran Kaur", "Amritsar, India", "I was going through a very difficult phase after a breakup. Akanksha Ji listened patiently and explained everything clearly. Her guidance gave me the confidence to move forward with a calm mind."),
    ("Vikas Malhotra", "Delhi, India", "My wife and I were thinking about separation. The consultation helped us look at our problems differently, and the simple remedies she suggested brought more patience and understanding into our marriage."),
    ("Priya Nair", "Bengaluru, India", "Our marriage was getting delayed again and again. The kundali matching and guidance on Manglik dosh were explained in simple words. The whole process was private and very respectful."),
    ("Harpreet Singh", "Toronto, Canada", "Living abroad, I was worried an online consultation would not feel personal. It was the opposite. Akanksha Ji gave me full time on WhatsApp and practical advice for my family situation back home."),
    ("Neha Gupta", "Jaipur, India", "My parents were not ready to accept my partner. With her guidance we approached the conversation in the right way and at the right time. Today both families are happy with our decision."),
    ("Arjun Patel", "London, UK", "I contacted her about career confusion and constant stress at home. The reading was honest, with no false promises, and the remedies were easy to follow. I feel much more settled now."),
]
countries = [("in", "India"), ("au", "Australia"), ("it", "Italy"), ("fj", "Fiji"), ("no", "Norway"), ("gb", "UK"), ("us", "USA"), ("sg", "Singapore"), ("de", "Germany"), ("ca", "Canada"), ("nl", "Holland"), ("nz", "New Zealand"), ("th", "Thailand"), ("ch", "Switzerland"), ("es", "Spain"), ("ae", "UAE")]

# ---------------------------------------------------------------- sections
def s_hero():
    alts = ["Love Marriage Solution", "Love Problem Solution", "Husband and Wife Dispute Solution"]
    slides = "".join(
        f'<a class="slide" href="{TEL}" aria-label="Slide {i+1} of 3">{img(f"0{i+1}.jpg", f"Star Shuffle {a} by Astrologer Akanksha Pande, call {PHONE}", 1600, 700, lazy=i > 0)}</a>'
        for i, a in enumerate(alts))
    return (f'<section class="hero" id="hero" aria-roledescription="carousel" aria-label="Featured services">'
            f'<h1 class="sr-only">{NAME} – {TAG} for Love Marriage, Love Problem and Family Problem Solution</h1>'
            f'<div class="track">{slides}</div>'
            '<button type="button" class="arrow l" aria-label="Previous slide">‹</button>'
            '<button type="button" class="arrow r" aria-label="Next slide">›</button><div class="dots"></div></section>')

def s_chips():
    return '<div class="chips"><div class="wrap">' + "".join(f'<a href="services.html"><i>{ic(i)}</i>{e(t)}</a>' for t, i in chips) + "</div></div>"

def s_band():
    items = "".join(f'<div class="band-item"><span class="ring">{ic(i)}</span><span><b>{t}</b><small>{s}</small></span></div>' for t, s, i in trust)
    return (f'<div class="band"><div class="wrap">{items}<div class="band-cta">'
            f'<a href="{TEL}" class="btn btn-gold btn-sm">{ic("phone")}{PHONE}</a>'
            f'<a href="{WA}" {EXT} class="btn btn-wa btn-sm">{ic("wa")}WhatsApp</a></div></div></div>')

def s_guidance():
    cards = "".join(
        f'<article class="card"><div class="ph">{img(src, t, 350, 300)}</div><div class="bd"><h3>{e(t)}</h3><p>{e(d)}</p>{consult(t)}</div></article>'
        for t, d, src in guidance)
    return f'<section class="sec pattern"><div class="wrap">{head_sec(TAG, "Find the Right Guidance for Your Situation", "Explore focused astrological guidance for love, family, relationships and personal concerns through a private consultation.")}<div class="grid g4">{cards}</div></div></section>'

def s_about(full=False):
    photo, alt = ("images/akanksha-3.jpg", "Astrologer Akanksha Pande during a consultation") if full else ("images/akanksha-2.jpg", NAME)
    ticks = "".join(f"<li>{t}</li>" for t in ["Personalized consultation for every case", "Private and confidential guidance", "Clear explanation of problems and solutions", "Support for love, marriage and family", "Practical remedies for individual concerns", "Respectful, transparent process"])
    extra = ('<p style="margin-top:0">Whether you are dealing with relationship misunderstandings, family resistance, marriage concerns, separation or emotional stress, the aim is to help you understand the situation clearly and make better decisions. Clients from India and around the world consult her online by call and WhatsApp.</p>' if full else "")
    more = "" if full else '<a href="about.html" class="btn btn-line">Read More About Us →</a>'
    return (f'<section class="sec bg-ivory overflow-hidden" id="about"><div class="wrap about-grid">'
            f'<div class="about-img"><div class="frame">{img(photo, alt, 1600, 1066)}</div><div class="about-tag"><b>Akanksha Pande Ji</b><span>{TAG}</span></div></div>'
            f'<div class="about-txt"><span class="eyebrow">About Us</span><h2 class="h2">Meet {TAG} — Astrologer Akanksha Pande Ji</h2>'
            f'<p>Astrologer Akanksha Pande, founder of <b>Star Shuffle</b>, provides personalized astrological and tarot guidance for people facing challenges in love, marriage, relationships, family life and personal matters. Every consultation is handled privately, with careful attention to the client&#39;s situation, concerns and expectations.</p>'
            f'<blockquote class="quote">The focus is not on giving generic predictions. Each case is understood individually before suitable guidance and practical remedies are suggested.</blockquote>'
            f'{extra}<ul class="ticks">{ticks}</ul>'
            f'<div class="btn-row"><a href="{TEL}" class="btn btn-navy">{ic("phone")}Talk to Astrologer</a>{more}</div></div></div></section>')

def s_posters():
    cards = "".join(
        f'<article class="poster"><a class="ph" href="{TEL}">{img(src, f"Star Shuffle {t} by Astrologer Akanksha Pande", 500, 600)}</a>'
        f'<div class="bd"><h3>{e(t)}</h3><a href="{e(wa_link(t))}" {EXT} class="btn btn-wa btn-sm" aria-label="WhatsApp for {e(t)}">{ic("wa")}Ask Now</a></div></article>'
        for src, t in posters)
    return f'<section class="sec starfield"><div class="wrap">{head_sec("Star Shuffle Specials", "Special Solutions by Astrologer Akanksha Pande", "Focused, confidential guidance for the problems people bring to us most often.")}<div class="grid g3">{cards}</div></div></section>'

def s_services(limit=None):
    lst = services[:limit] if limit else services
    cards = "".join(
        f'<article class="svc"><div class="ph"><div class="clip">{img(src, t, 350, 300)}</div><span class="badge">{ic(i)}</span></div>'
        f'<div class="bd"><h3>{e(t)}</h3><p>{e(d)}</p>{consult(t)}</div></article>'
        for t, d, src, i in lst)
    more = '<div class="center"><a href="services.html" class="btn btn-gold">View All Services →</a></div>' if limit else ""
    return f'<section class="sec bg-ivory" id="services"><div class="wrap">{head_sec("Our Best Services", "Personalized Guidance for Love, Relationships and Family Life", "Every consultation is private, carefully understood and supported with clear guidance and suitable remedies.")}<div class="grid g4">{cards}</div>{more}</div></section>'

def s_why():
    items = "".join(f'<div class="why"><span class="gring">{ic(i)}</span><h3>{t}</h3><p>{d}</p></div>' for t, d, i in why)
    return (f'<section class="sec starfield"><div class="wrap">{head_sec("Why Choose Us", "Guidance Built on Trust, Privacy and Personal Attention", "Every consultation is handled with care, privacy and a clear understanding of your personal concerns.")}'
            f'<div class="why-grid"><div class="why-ph"><div class="circle">{img("images/akanksha-4.jpg", "Astrologer Akanksha Pande giving a tarot card reading", 1600, 1066)}</div>'
            f'<h3>{NAME}</h3><p>Trusted Guidance for a Better Tomorrow</p></div><div class="w3">{items}</div></div></div></section>')

def s_promo():
    return (f'<section class="promo" aria-label="Call Astrologer Akanksha Pande"><div class="wrap"><a href="{TEL}">'
            f'{img("gif.gif", f"Star Shuffle – Astrologer Akanksha Pande: Love Marriage, Love Problem, Lost Love Back, Divorce, Family Problem, Husband Wife Dispute. Call {PHONE}", 1600, 500)}</a></div></section>')

def s_steps():
    items = "".join(f'<li class="step"><span class="num">0{n+1}</span><span class="nring">{ic(i)}</span><h3>{t}</h3><p>{d}</p></li>' for n, (t, d, i) in enumerate(steps))
    return f'<section class="sec bg-ivory"><div class="wrap">{head_sec("How It Works", "Your Path to Clarity and Cosmic Guidance", "Take the first step towards a brighter future with a confidential and easy consultation process.")}<ol class="steps">{items}</ol></div></section>'

def s_video():
    return (f'<section class="sec bg-cream" id="podcast"><div class="wrap">{head_sec("Watch the Podcast", "Astrology Insights with Astrologer Akanksha Pande", "Watch Akanksha Ji&#39;s podcast conversation on love, relationships, tarot and practical remedies.")}'
            f'<div class="video"><div class="vbox"><button type="button" data-id="{YT_ID}" aria-label="Play podcast video">'
            f'{img(f"https://i.ytimg.com/vi/{YT_ID}/maxresdefault.jpg", "Astrologer Akanksha Pande podcast thumbnail", 1280, 720)}<span class="play">{ic("play")}</span></button></div>'
            f'<div class="btn-row"><a href="{YT}" {EXT} class="btn btn-navy">{ic("youtube")}Watch on YouTube</a>'
            f'<a href="{IG}" {EXT} class="btn btn-line">{ic("instagram")}@i_akankshapande</a></div></div></div></section>').replace("&amp;#39;", "&#39;")

def tcard(name, place, text):
    return (f'<figure class="tcard"><div class="top-row"><div class="stars" aria-label="5 out of 5 stars">★★★★★</div>{ic("quote", "qic")}</div>'
            f'<blockquote>{e(text)}</blockquote><figcaption class="who"><span class="av">{name[0]}</span><span><b>{e(name)}</b><small>{e(place)}</small></span></figcaption></figure>')

def s_slider():
    items = "".join(f"<div>{tcard(*r)}</div>" for r in reviews)
    return (f'<section class="sec pattern"><div class="wrap">{head_sec("Client Reviews", "What Our Clients Say", "Experiences from people who found clarity, direction and confidence through personalised astrological guidance.")}'
            f'<div class="ttrack" id="ttrack">{items}</div>'
            '<div class="tnav"><button type="button" class="arr" id="tprev" aria-label="Previous reviews">‹</button><div class="tdots" id="tdots"></div><button type="button" class="arr" id="tnext" aria-label="Next reviews">›</button></div>'
            '<div class="center" style="margin-top:32px"><a href="review.html" class="btn btn-navy">Read All Reviews →</a></div></div></section>')

def s_cta():
    return (f'<section class="bg-ivory" style="padding:56px 0"><div class="wrap"><div class="cta starfield"><div><p>Need Private Astrology Guidance?</p><h2>Discuss Your Concern With Astrologer Akanksha Pande</h2></div>'
            f'<div class="btn-row"><a href="{TEL}" class="btn btn-gold">{ic("phone")}Call Now</a><a href="{WA}" {EXT} class="btn btn-wa">{ic("wa")}WhatsApp Now</a></div></div></div></section>')

def s_countries():
    flags = "".join(f'<li class="flag">{img(f"https://flagcdn.com/w80/{c}.png", f"{n} flag", 80, 53)}{n}</li>' for c, n in countries)
    return f'<section class="sec starfield"><div class="wrap">{head_sec("Serving Clients Across the Globe", "Trusted Astrology Guidance, Wherever You Are", "Private online consultations for clients in India and countries worldwide.")}<ul class="flags">{flags}</ul></div></section>'

def s_phero(crumb, title, text):
    return (f'<section class="phero starfield"><div class="wrap"><nav class="crumb" aria-label="Breadcrumb"><a href="index.html">Home</a><span>✦</span><b>{crumb}</b></nav>'
            f'<h1><span class="gold-text">{title}</span></h1><p>{text}</p></div></section>')

def s_gallery():
    def fig(cls, src, w, h, alt, kicker, title):
        return f'<figure class="{cls}">{img(src, alt, w, h)}<figcaption><span>{kicker}</span><b>{title}</b></figcaption></figure>'
    return (f'<section class="sec pattern"><div class="wrap">{head_sec("Recognition & Media", "Honours, Interviews and Consultations", "Moments from Akanksha Ji&#39;s journey — award recognition, podcast interviews and personal tarot and astrology sessions.")}'
            '<div class="gal">'
            + fig("tall", "images/award.jpg", 843, 1264, "Astrologer Akanksha Pande receiving the IEA Excellence Award", "Award", "IEA Excellence Award")
            + fig("wide", "images/akanksha-1.jpg", 1600, 1066, "Astrologer Akanksha Pande in a podcast conversation", "Podcast", "In Conversation on Love &amp; Astrology")
            + fig("wide", "images/akanksha-4.jpg", 1600, 1066, "Astrologer Akanksha Pande giving a tarot card reading", "Consultation", "Tarot &amp; Astrology Reading")
            + "</div></div></section>").replace("&amp;#39;", "&#39;").replace("Recognition &amp;amp; Media", "Recognition &amp; Media")

def s_vedic():
    items = "".join(f'<div class="v-item"><h3><i>{ic(i)}</i>{t}</h3><p>{d}</p></div>' for t, d, i in vedic)
    lst = "".join(f'<li><a href="services.html">{s}</a></li>' for s in service_list)
    return (f'<section class="sec bg-cream"><div class="wrap v-grid"><div class="v-main"><div class="head left" style="margin-bottom:0"><span class="eyebrow">Vedic Astrology &amp; Remedies</span>'
            f'<h2 class="h2">Kundali, Vastu and Planetary Guidance for a Balanced Life</h2><div class="divider">✧</div></div>'
            f'<p>Alongside relationship consultations, Astrologer Akanksha Pande offers traditional Vedic astrology services that help you understand planetary influences in your birth chart and take practical steps toward peace, stability and progress.</p>'
            f'<div class="v-items">{items}</div></div>'
            f'<aside class="aside"><h3>Services That We Offer</h3><ul>{lst}</ul><a class="ad" href="{TEL}">{img("contact.gif", f"Call Astrologer Akanksha Pande {PHONE}", 550, 150)}</a></aside></div></section>')

def s_pujas():
    items = "".join(f'<div class="puja"><span class="gring">{ic(i)}</span><div><h3>{t}</h3><p>{d}</p><a href="{TEL}" class="more">Consult Now →</a></div></div>' for t, d, i in pujas)
    return f'<section class="sec pattern" id="pujas"><div class="wrap">{head_sec("Sacred Ritual Services", "Devotional Pujas & Anushthans", "Traditional Vedic rituals for peace, prosperity, protection, family harmony and greater balance in life.")}<div class="grid g2">{items}</div></div></section>'

def s_contact():
    rows = [("phone", "Call Us", PHONE, TEL, False), ("wa", "WhatsApp", PHONE, WA, True), ("instagram", "Instagram", "@i_akankshapande", IG, True),
            ("instagram", "Star Shuffle Instagram", "@star.shuffle", IG2, True), ("youtube", "YouTube Podcast", "Watch the interview", YT, True),
            ("user", "Astrologer", f"Akanksha Pande — {TAG}", None, False)]
    r = ""
    for i, label, val, href, ext in rows:
        inner = f'<span class="ring">{ic(i)}</span><span><small>{label}</small><b>{val}</b></span>'
        r += f'<li><a class="c-row" href="{href}" {EXT if ext else ""}>{inner}</a></li>' if href else f'<li><div class="c-row">{inner}</div></li>'
    form = ('<form class="form" id="waForm">'
            '<div><label for="f-name">Your Name</label><input id="f-name" name="name" type="text" autocomplete="name" required></div>'
            '<div><label for="f-phone">Phone Number</label><input id="f-phone" name="phone" type="tel" autocomplete="tel" required></div>'
            '<div><label for="f-email">Email Address</label><input id="f-email" name="email" type="email" autocomplete="email"></div>'
            '<div><label for="f-subject">Subject</label><input id="f-subject" name="subject" type="text"></div>'
            '<div class="full"><label for="f-msg">Describe Your Problem</label><textarea id="f-msg" name="message" rows="4" required></textarea></div>'
            f'<div class="full"><button type="submit" class="btn btn-wa">{ic("wa")}Send on WhatsApp</button></div></form>')
    return (f'<section class="sec bg-ivory" id="contact"><div class="wrap"><div class="c-box"><div class="c-l starfield"><span class="eyebrow">Begin Your Journey</span>'
            '<h2>Find Clarity Through Trusted Astrology</h2><p>Receive personalized guidance and traditional astrological insight to make confident decisions and embrace a brighter future.</p>'
            f'<ul class="c-rows">{r}</ul><a class="ad" href="{TEL}">{img("contact.gif", f"Call Astrologer Akanksha Pande {PHONE}", 550, 150)}</a></div>'
            f'<div class="c-r"><span class="eyebrow">Quick Consultation Form</span><h2>Share Your Problem &amp; Receive Trusted Solutions</h2>{form}'
            f'<p class="form-note">Your details open in WhatsApp and are sent only to {PHONE}. Nothing is stored on this website.</p></div></div></div></section>')

def s_review_page():
    stats = "".join(f"<div><b>{v}</b><span>{l}</span></div>" for v, l in [("5.0", "Average rating"), ("16+", "Countries served"), ("100%", "Private consultations")])
    cards = "".join(tcard(*r) for r in reviews)
    msg = urllib.parse.quote("Hello Akanksha Ji, I would like to share my review:")
    return (f'<section class="stats"><div class="wrap">{stats}</div></section>'
            f'<section class="sec pattern"><div class="wrap">{head_sec("Testimonials", "What Our Clients Say")}<div class="masonry">{cards}</div>'
            '<div class="share"><h2>Consulted Akanksha Ji? Share Your Experience</h2><p>Send your review on WhatsApp or tag us on Instagram — it helps others find the right guidance.</p>'
            f'<div class="btn-row"><a href="{WA}?text={msg}" {EXT} class="btn btn-wa">{ic("wa")}Send Review on WhatsApp</a>'
            f'<a href="{IG}" {EXT} class="btn btn-navy">{ic("instagram")}@i_akankshapande</a>'
            f'<a href="{IG2}" {EXT} class="btn btn-line">{ic("instagram")}@star.shuffle</a></div></div></div></section>')

# ---------------------------------------------------------------- page shell
def page(file, title, desc, body, preload_hero=False):
    canon = SITE + "/" + ("" if file == "index.html" else file)
    navd = "".join(f'<li><a href="{h}"{" class=\"on\" aria-current=\"page\"" if h == file else ""}>{l}</a></li>' for h, l in NAV)
    services_f = "".join(f'<li><a href="services.html">{s}</a></li>' for s in service_list[:7])
    quick = "".join(f'<li><a href="{h}">{l}</a></li>' for h, l in NAV)
    preload = '<link rel="preload" as="image" href="01.jpg" fetchpriority="high">\n' if preload_hero else ""
    ld = ('{"@context":"https://schema.org","@type":"ProfessionalService","name":"Astrologer Akanksha Pande","alternateName":"Star Shuffle",'
          '"description":"Private astrology and tarot consultation for love marriage, love problems, husband wife disputes, divorce, family problems and lost love back.",'
          f'"telephone":"+91-9173629453","url":"{SITE}/","image":"{SITE}/logo.png","areaServed":"Worldwide","priceRange":"₹₹",'
          '"address":{"@type":"PostalAddress","addressCountry":"IN"},'
          '"sameAs":["https://www.instagram.com/i_akankshapande","https://www.instagram.com/star.shuffle","https://youtu.be/i5qj59k8L38"],'
          '"founder":{"@type":"Person","name":"Akanksha Pande","jobTitle":"Astrologer"}}')
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
<meta name="description" content="{desc}">
<meta name="robots" content="index, follow">
<meta name="theme-color" content="#14244f">
<link rel="canonical" href="{canon}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="{NAME}">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{desc}">
<meta property="og:url" content="{canon}">
<meta property="og:image" content="{SITE}/01.jpg">
<link rel="icon" href="images/favicon.png" type="image/png">
<link rel="apple-touch-icon" href="images/apple-touch-icon.png">
{preload}<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700&family=Playfair+Display:ital,wght@1,500&family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/style.css">
<script type="application/ld+json">{ld}</script>
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
{SPRITE}

<!-- Top bar -->
<div class="top"><div class="wrap">
  <span class="top-tag"><b>✦</b> {TAG} — Trusted Guidance for Love, Marriage &amp; Family</span>
  <div class="top-right">
    <div class="top-links"><a href="{TEL}">{ic("phone")}{PHONE}</a><a class="top-wa" href="{WA}" {EXT}>{ic("wa")}WhatsApp</a></div>
    <div class="top-social"><a href="{IG}" {EXT} aria-label="Instagram @i_akankshapande">{ic("instagram")}</a><a href="{IG2}" {EXT} aria-label="Instagram @star.shuffle">{ic("instagram")}</a><a href="{YT}" {EXT} aria-label="YouTube podcast">{ic("youtube")}</a></div>
  </div>
</div></div>

<!-- Header -->
<header class="hdr"><div class="wrap">
  <a href="index.html" class="logo" aria-label="{NAME} home"><img src="logo.png" width="600" height="190" alt="{NAME}"></a>
  <nav class="nav" aria-label="Main"><ul>{navd}</ul></nav>
  <div class="hdr-r">
    <a href="{TEL}" class="btn btn-navy hdr-btn">{ic("phone")}Book a Consultation</a>
    <button class="burger" id="burger" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mnav"><span></span><span></span><span></span></button>
  </div>
</div></header>
<nav class="mnav" id="mnav" aria-label="Mobile"><div class="wrap">
  <ul>{navd}</ul>
  <div class="acts"><a href="{TEL}" class="btn btn-navy">{ic("phone")}Call {PHONE}</a><a href="{WA}" {EXT} class="btn btn-wa">{ic("wa")}WhatsApp Chat</a></div>
</div></nav>

<main id="main">
{body}
</main>

<!-- Footer -->
<footer class="ftr starfield">
  <div class="wrap f-grid">
    <div class="f-about">
      <a href="index.html" class="f-logo"><img src="logo.png" width="600" height="190" loading="lazy" decoding="async" alt="{NAME}"></a>
      <p>Personalised astrology guidance for love, marriage, relationships and family concerns by global lady astrologer Akanksha Pande. Every consultation is handled privately and respectfully.</p>
      <div class="social"><a href="{IG}" {EXT} aria-label="Instagram @i_akankshapande">{ic("instagram")}</a><a href="{IG2}" {EXT} aria-label="Instagram @star.shuffle">{ic("instagram")}</a><a href="{YT}" {EXT} aria-label="YouTube podcast">{ic("youtube")}</a><a href="{WA}" {EXT} aria-label="WhatsApp">{ic("wa")}</a></div>
    </div>
    <div><h3>Our Services</h3><ul>{services_f}</ul></div>
    <div><h3>Quick Links</h3><ul>{quick}</ul>
      <h3 style="margin-top:24px">We Accept</h3><div class="pay"><span>Paytm</span><span>VISA</span><span>G Pay</span><span>PayPal</span><span>MasterCard</span></div></div>
    <div><h3>Contact Us</h3>
      <ul><li><a href="{TEL}">{ic("phone")}Call: {PHONE}</a></li><li><a href="{WA}" {EXT}>{ic("wa")}WhatsApp: {PHONE}</a></li><li><a href="{YT}" {EXT}>{ic("youtube")}Watch the Podcast</a></li></ul>
      <p class="note"><b>Note:</b> Beware of fake names and profiles. Use only the official contact details listed on this website.</p></div>
  </div>
  <div class="copy"><div class="wrap"><p>© <span id="yr">2026</span> {NAME}. All Rights Reserved.</p><p>Disclaimer: Astrology consultations are based on traditional beliefs and should not replace professional medical, legal, financial or psychological advice.</p></div></div>
</footer>

<div class="fab">
  <a class="wa" href="{WA}" {EXT} aria-label="Chat on WhatsApp">{ic("wa")}</a>
  <a class="call" href="{TEL}" aria-label="Call {PHONE}">{ic("phone")}</a>
</div>

<script src="js/main.js" defer></script>
</body>
</html>
"""

pages = {
    "index.html": (f"{NAME} | {TAG} – Love Marriage &amp; Family Problem Solution",
                   "Star Shuffle by Astrologer Akanksha Pande, Global Lady Astrologer, offers private consultation for love marriage, love problems, husband wife disputes, divorce, family problems and lost love back. Call or WhatsApp +91-9173629453.",
                   [s_hero(), s_chips(), s_band(), s_guidance(), s_about(), s_posters(), s_services(4), s_why(), s_promo(), s_steps(), s_video(), s_slider(), s_cta(), s_countries()], True),
    "about.html": (f"About Us – {TAG} | {NAME}",
                   "Meet Astrologer Akanksha Pande, Global Lady Astrologer and founder of Star Shuffle, offering private astrology and tarot guidance for love, marriage and family.",
                   [s_phero("About Us", "About Astrologer Akanksha Pande", "Global Lady Astrologer and founder of Star Shuffle — private, personal guidance for love, marriage and family life."),
                    s_about(True), s_band(), s_gallery(), s_why(), s_video(), s_steps(), s_cta()], False),
    "services.html": (f"Services – Love, Marriage &amp; Family Problem Solutions | {NAME}",
                      "Love marriage, love problem, lost love back, husband wife dispute, divorce and family problem solutions, plus kundali, vastu and devotional pujas by Astrologer Akanksha Pande.",
                      [s_phero("Services", "Our Services", "Personalized astrology, tarot and Vedic remedies for love, relationships, marriage, family and career."),
                       s_services(), s_posters(), s_guidance(), s_vedic(), s_promo(), s_pujas(), s_steps(), s_cta()], False),
    "review.html": (f"Client Reviews | {NAME}",
                    "Read reviews from clients in India and abroad who consulted Astrologer Akanksha Pande for love, marriage and family guidance.",
                    [s_phero("Review", "Client Reviews", "Real experiences from people who found clarity, direction and confidence through personalised guidance."),
                     s_review_page(), s_video(), s_cta()], False),
    "contact.html": (f"Contact – Call or WhatsApp +91-9173629453 | {NAME}",
                     "Contact Astrologer Akanksha Pande by call or WhatsApp on +91-9173629453 for a private online astrology consultation, anywhere in the world.",
                     [s_phero("Contact", "Contact Us", "Call or WhatsApp +91-9173629453 for a private consultation — available for clients in India and worldwide."),
                      s_contact(), s_band(), s_steps(), s_countries()], False),
}
for f, (t, d, secs, pre) in pages.items():
    (OUT / f).write_text(page(f, t, d, "\n".join(secs), pre), encoding="utf-8")

(OUT / "sitemap.xml").write_text('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    + "".join(f"  <url><loc>{SITE}/{'' if f == 'index.html' else f}</loc></url>\n" for f in pages) + "</urlset>\n")
(OUT / "robots.txt").write_text(f"User-agent: *\nAllow: /\n\nSitemap: {SITE}/sitemap.xml\n")
print("icons:", len(paths), "pages:", list(pages))
