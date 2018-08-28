export const MEMBERS = [
  { realm: "Kil'jaeden", name: 'Monktis' }, { realm: "Kil'jaeden", name: 'Hyypro' }, { realm: "Kil'jaeden", name: 'Ombre' }, { realm: "Kil'jaeden", name: 'Stwinkedge' },
  { realm: "Kil'jaeden", name: 'Darksynergy' }, { realm: "Kil'jaeden", name: 'Troph' }, { realm: "Kil'jaeden", name: 'Boys' }, { realm: "Kil'jaeden", name: 'Çlutch' }, 
  { realm: "Kil'jaeden", name: 'Bun' }, { realm: "Kil'jaeden", name: 'Jargo' }, { realm: "Kil'jaeden", name: 'Salladin' }, { realm: "Kil'jaeden", name: 'Arkturus' }, 
  { realm: "Kil'jaeden", name: 'Muspel' }, { realm: "Uldaman", name: 'Legias' }
]

export const IMAGE_CLASS_MAPPING = [
  'assets/images/warrior.png',
  'assets/images/paladin.png',
  'assets/images/hunter.png',
  'assets/images/rogue.png',
  'assets/images/priest.png',
  'assets/images/deathknight.png',
  'assets/images/shaman.png',
  'assets/images/mage.png',
  'assets/images/warlock.png',
  'assets/images/monk.png',
  'assets/images/druid.png',
  'assets/images/demonhunter.png'
]

export const randomNumber = (min: number, max: number) => {
  return Math.floor((Math.random() * max) + min);
}