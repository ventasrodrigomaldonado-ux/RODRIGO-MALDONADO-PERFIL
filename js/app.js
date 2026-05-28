/* =========================
RODRIGO MALDONADO PROFILE
APP.JS
========================= */

/* MUSIC */

const music = document.getElementById('bg-music');

if(music){

	music.volume = 0.18;

	const startMusic = () => {

		music.play().catch(()=>{});

		document.removeEventListener('click',startMusic);
		document.removeEventListener('scroll',startMusic);

	};

	document.addEventListener('click',startMusic);
	document.addEventListener('scroll',startMusic);

}

/* NAVBAR EFFECT */

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll',()=>{

	if(window.scrollY > 60){

		navbar.style.background = 'rgba(0,0,0,.58)';
		navbar.style.backdropFilter = 'blur(18px)';
		navbar.style.borderBottom = '1px solid rgba(212,175,55,.25)';

	}else{

		navbar.style.background = 'rgba(0,0,0,.28)';
		navbar.style.backdropFilter = 'blur(14px)';
		navbar.style.borderBottom = '1px solid rgba(212,175,55,.15)';

	}

});

/* SMOOTH HERO FADE */

const hero = document.querySelector('.hero');

window.addEventListener('scroll',()=>{

	const scroll = window.scrollY;

	if(hero){

		hero.style.opacity = 1 - scroll / 900;

	}

});

/* REVEAL EFFECT */

const reveals = document.querySelectorAll(
	'.about-box,.anchor-card,.property-item,.final-box'
);

const revealOnScroll = () => {

	const triggerBottom = window.innerHeight * 0.88;

	reveals.forEach(item=>{

		const top = item.getBoundingClientRect().top;

		if(top < triggerBottom){

			item.style.opacity = '1';
			item.style.transform = 'translateY(0)';

		}

	});

};

reveals.forEach(item=>{

	item.style.opacity = '0';
	item.style.transform = 'translateY(45px)';
	item.style.transition = 'all .8s ease';

});

window.addEventListener('scroll',revealOnScroll);

revealOnScroll();

/* PARALLAX */

window.addEventListener('scroll',()=>{

	const offset = window.pageYOffset;

	document.querySelectorAll('.anchor-card img').forEach(img=>{

		img.style.transform = `translateY(${offset * 0.015}px) scale(1.03)`;

	});

});

/* BUTTON HOVER GLOW */

const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn=>{

	btn.addEventListener('mouseenter',()=>{

		btn.style.boxShadow = '0 12px 35px rgba(212,175,55,.35)';

	});

	btn.addEventListener('mouseleave',()=>{

		btn.style.boxShadow = 'none';

	});

});

/* MOBILE MENU AUTO CLOSE EFFECT */

document.querySelectorAll('.nav-links a').forEach(link=>{

	link.addEventListener('click',()=>{

		window.scrollBy({
			top:-80,
			behavior:'smooth'
		});

	});

});

/* CONSOLE SIGNATURE */

console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RODRIGO MALDONADO
PREMIUM REAL ESTATE PROFILE
Powered by Barrio Digital
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`);
