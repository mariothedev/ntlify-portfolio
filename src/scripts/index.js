import '../styles/index.scss';

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

const slideIn3DContent = _ => anime({
  targets: '.portfolio',
  duration: 800,
  skewY: ['-10deg', '-10deg'],
  translateX: ['-105vw', 0],
  translateY: ['-105vh', '7vmax'],
})

const boxParent = document.querySelector('.cube--demo')


boxParent.addEventListener('animationend', _ => {
  boxParent.style.display = "none"
  slideIn3DContent()
})
