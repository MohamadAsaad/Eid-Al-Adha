// تهيئة particles.js للخلفية
document.addEventListener('DOMContentLoaded', function () {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#E67E22"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                }
            },
            "opacity": {
                "value": 0.5,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 2,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#D35400",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": true,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "push": {
                    "particles_nb": 4
                }
            }
        },
        "retina_detect": true
    });

    // تأثيرات الظهور التدريجي
    const elements = document.querySelectorAll('.eid-title, .eid-subtitle, .eid-content p, .eid-signature, .social-share');
    elements.forEach((el, index) => {
        el.classList.add('fade-in');
        el.style.animationDelay = `${index * 0.2}s`;
    });

    // مشاركة واتساب
    document.getElementById('shareWhatsApp').addEventListener('click', function () {
        const shareText = `🎉 عيد أضحى مبارك! 🎉
        
كل عام وأنتم بخير بمناسبة عيد الأضحى المبارك،
مقدمة لكم من Digital by Mohamad Al-Asaad
زوروا موقعنا: https://www.di9ital.site/`; // تم إضافة الرابط هنا

        const encodedText = encodeURIComponent(shareText);
        window.open(`https://wa.me/?text=${encodedText}`, '_blank');
    });

    // مشاركة فيسبوك
    document.getElementById('shareFacebook').addEventListener('click', function () {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
    });

    // مشاركة تويتر
    document.getElementById('shareTwitter').addEventListener('click', function () {
        const tweetText = `🎉 عيد أضحى مبارك! ${window.location.href}`;
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`, '_blank');
    });

    // رسالة في الكونسول
    console.log('%c🎉 عيد أضحى مبارك!', 'color: #E67E22; font-size: 24px; font-weight: bold;');
    console.log('%cتهنئة خاصة من Digital by Mohamad Al-Asaad', 'color: #D35400; font-size: 16px;');
});

// تأثير حركة البطاقة عند تحريك الماوس
document.addEventListener('mousemove', function (e) {
    const card = document.querySelector('.eid-card');
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `perspective(1000px) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// إعادة البطاقة إلى وضعها الطبيعي عند مغادرة الماوس
document.querySelector('.eid-card').addEventListener('mouseleave', function () {
    this.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
    this.style.transition = 'all 0.5s ease';
    setTimeout(() => {
        this.style.transition = '';
    }, 500);
});