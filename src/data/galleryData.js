const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME // apna Cloudinary cloud name yahan daalo

// helper — optimized URL banane ke liye
const cld = (publicId, width = 800) =>
  `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto,w_${width}/${publicId}`

const galleryData = [
  {
    id: 1,
    src: cld('PRA07706', 800),
    fullSrc: cld('PRA07706', 1600),
    category: 'Weddings',
    caption: 'First look, golden hour',
  },
  {
    id: 2,
    src: cld('TLP_9279', 800),
    fullSrc: cld('TLP_9279', 1600),
    category: 'Weddings',
    caption: 'Studio series, no. 3',
  },
  {
    id: 3,
    src: cld('TLP_9391', 800),
    fullSrc: cld('TLP_9391', 1600),
    category: 'Weddings',
    caption: 'City launch night',
  },
  {
    id: 4,
    src: cld('0E7A1167', 800),
    fullSrc: cld('0E7A1167', 1600),
    category: 'Weddings',
    caption: 'Reception, candid',
  },
  {
    id: 5,
    src: cld('PRA07620', 800),
    fullSrc: cld('PRA07620', 1600),
    category: 'Weddings',
    caption: 'Studio series, no. 3',
  },
  {
    id: 6,
    src: cld('1744050134020', 800),
    fullSrc: cld('1744050134020', 1600),
    category: 'Weddings',
    caption: 'City launch night',
  },
  {
    id: 7,
    src: cld('TLP_9409', 800),
    fullSrc: cld('TLP_9409', 1600),
    category: 'Weddings',
    caption: 'First look, golden hour',
  },
  {
    id: 8,
    src: cld('TLP_9571', 800),
    fullSrc: cld('TLP_9571', 1600),
    category: 'Weddings',
    caption: 'Studio series, no. 3',
  },
  {
    id: 9,
    src: cld('1744050134062', 800),
    fullSrc: cld('1744050134062', 1600),
    category: 'Weddings',
    caption: 'City launch night',
  },
  {
    id: 10,
    src: cld('1744050134025', 800),
    fullSrc: cld('1744050134025', 1600),
    category: 'Weddings',
    caption: 'First look, golden hour',
  },
  {
    id: 11,
    src: cld('TLP_9490', 800),
    fullSrc: cld('TLP_9490', 1600),
    category: 'Weddings',
    caption: 'Studio series, no. 3',
  },
  {
    id: 12,
    src: cld('0E7A2391', 800),
    fullSrc: cld('0E7A2391', 1600),
    category: 'Weddings',
    caption: 'City launch night',
  },
  {
    id: 13,
    src: cld('0E7A2366', 800),
    fullSrc: cld('0E7A2366', 1600),
    category: 'Weddings',
    caption: 'First look, golden hour',
  },
  {
    id: 14,
    src: cld('0E7A1106', 800),
    fullSrc: cld('0E7A1106', 1600),
    category: 'Weddings',
    caption: 'Studio series, no. 3',
  },
  {
    id: 15,
    src: cld('0E7A0432', 800),
    fullSrc: cld('0E7A0432', 1600),
    category: 'Weddings',
    caption: 'City launch night',
  },
  {
    id: 16,
    src: cld('095A9460', 800),
    fullSrc: cld('095A9460', 1600),
    category: 'Weddings',
    caption: 'City launch night',
  },
  {
    id: 18,
    src: cld('IMG_4469', 800),
    fullSrc: cld('IMG_4469', 1600),
    category: 'Pre-Wedding',
    caption: 'City launch night',
  },
  {
    id: 19,
    src: cld('IMG_4468', 800),
    fullSrc: cld('IMG_4468', 1600),
    category: 'Pre-Wedding',
    caption: 'City launch night',
  },
  {
    id: 20,
    src: cld('IMG_4467', 800),
    fullSrc: cld('IMG_4467', 1600),
    category: 'Pre-Wedding',
    caption: 'City launch night',
  },
  {
    id: 21,
    src: cld('IMG_4471', 800),
    fullSrc: cld('IMG_4471', 1600),
    category: 'Pre-Wedding',
    caption: 'City launch night',
  },
  {
    id: 22,
    src: cld('IMG_4466', 800),
    fullSrc: cld('IMG_4466', 1600),
    category: 'Pre-Wedding',
    caption: 'City launch night',
  },
  {
    id: 23,
    src: cld('FFD6E231-E97F-4EA0-9FE6-4756B890B1C8', 800),
    fullSrc: cld('FFD6E231-E97F-4EA0-9FE6-4756B890B1C8', 1600),
    category: 'Pre-Wedding',
    caption: 'City launch night',
  },
  {
    id: 24,
    src: cld('IMG_4563', 800),
    fullSrc: cld('IMG_4563', 1600),
    category: 'Pre-Wedding',
    caption: 'City launch night',
  },
  {
    id: 25,
    src: cld('1743098776540', 800),
    fullSrc: cld('1743098776540', 1600),
    category: 'Pre-Wedding',
    caption: 'City launch night',
  }

  // baaki images yahan add karo, apne uploaded public IDs ke hisaab se
]

export default galleryData